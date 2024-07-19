const express = require('express');
const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const UPLOADS_DIR = path.join(__dirname, 'uploads');


const app = express();
const upload = multer({ dest: 'uploads/' });

let model;
const images = [];
const categories = {};

// Load the MobileNet model
async function loadModel() {
  model = await mobilenet.load();
  console.log('MobileNet model loaded');
}

loadModel();

//Health check
app.get('/health', (req, res) => {
  res.send('server is up');
});

//GET /model
app.get('/model', (req, res) => {
  res.json({
    name: 'MobileNet (simulating dog breed classifier)',
    version: '1.0',
    description: 'Pre-trained model for image classification'
  });
});

// POST /img
app.post('/img', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image uploaded' });
  }

  const imagePath = path.join(__dirname, req.file.path);
  
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    
    const tfImage = tf.node.decodeImage(imageBuffer);
    const processedImage = tf.image.resizeBilinear(tfImage, [224, 224]).toFloat().expandDims();
    
    const predictions = await model.classify(processedImage);
    const topPrediction = predictions[0];

    const category = topPrediction.className.split(',')[0].trim().toLowerCase();
    const uid = uuidv4();

    images.push({ uid, category });
    categories[category] = (categories[category] || 0) + 1;

    const newPath = path.join(__dirname, 'uploads', `${uid}.jpg`);
    fs.renameSync(imagePath, newPath);

    res.json({
      category,
      uid
    });

    tfImage.dispose();
    processedImage.dispose();
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Error processing image' });
  }
});

// GET /images
app.get('/images', (req, res) => {
  res.json(images);
});

// POST /img/{uid}
app.post('/img/:uid', (req, res) => {
  const { uid } = req.params;
  const image = images.find(img => img.uid === uid);

  if (!image) {
    return res.status(404).json({ error: 'Image not found' });
  }

  const imagePath = path.join(UPLOADS_DIR , `${uid}.jpg`);
  
  if (fs.existsSync(imagePath)) {
    res.download(imagePath);
  } else {
    res.status(404).json({ error: 'Image file not found' });
  }
});

// GET /categories
app.get('/categories', (req, res) => {
  res.json(categories);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});