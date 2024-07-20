
# CloudRaft Assignment - Image Classification Service

This project is an implementation of the CloudRaft assignment for creating a backend application with a pre-trained model for image classification. The application allows users to upload images, classify them into categories (simulating dog breed classification), and query the uploaded images.

## video

[Video]()

## Demo

[Live Demo](https://cloudraft-assignment.onrender.com/)

## Postman API Documentation 

[Documentation](https://documenter.getpostman.com/view/26302198/2sA3kUGNFk)

### Endpoints

1. **GET /model**
   - Retrieves information about the model.
   - Response:
     ```json
     {
       "name": "MobileNet (simulating dog breed classifier)",
       "version": "1.0",
       "description": "Pre-trained model for image classification"
     }
     ```

2. **POST /img**
   - Accepts an image and returns its classification.
   - Request: Form-data with key "image" and file upload.
   - Response:
     ```json
     {
       "category": "labrador",
       "uid": "1519151980"
     }
     ```

3. **GET /images**
   - Returns all uploaded images with their UIDs and categories.
   - Response:
     ```json
     [
       {
         "uid": "6569841",
         "category": "labrador" 
       },
       // ... more images
     ]
     ```

4. **POST /img/{uid}**
   - Downloads the image that matches the provided UID.
   - Response: Image file download.

5. **GET /categories**
   - Returns all categories with the number of images in each.
   - Response:
     ```json
     {
       "labrador": "2",
       "bulldog": "12"
     }
     ```

## Local Setup

### Prerequisites

- Node.js (v18.17.0 or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/sagnik3788/CloudRaft-assignment.git
   cd CloudRaft-assignment
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create an `uploads` directory:
   ```
   mkdir uploads
   ```

4. Start the server:
   ```
   node app.js
   ```

The server will start running on `http://localhost:3000`.

## Docker Setup

1. Build the Docker image:
   ```
   docker build -t cloudraft-assignment .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 cloudraft-assignment
   ```

The application will be accessible at `http://localhost:3000`.

## Technology Stack

- Node.js
- Express.js
- TensorFlow.js
- MobileNet (pre-trained model)
- Multer (for file uploads)
- Docker (for containerization)

## Notes

- For simplicity using local  storage to to store the downloaded images but in prod should use s3 bucket
- Images will be stored within the Docker container's filesystem.
- Data will be lost when the container is removed.
 - To persist data and access it from the host system, we should mount a host directory to the container's `uploads` directory



