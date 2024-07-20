
# CloudRaft Assignment - Image Classification Service

This project is an implementation of the CloudRaft assignment for creating a backend application with a pre-trained model for image classification. The application allows users to upload images, classify them into categories (simulating dog breed classification), and query the uploaded images.

## video

[Video]()

## Demo

[Live Demo](https://cloudraft-assignment.onrender.com/)

## API Documentation

Base URL: `https://cloudraft-assignment.onrender.com`

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

- This implementation uses MobileNet as a pre-trained model to simulate dog breed classification. In a production environment, you would use a model specifically trained for dog breed identification.
- The `/model` endpoint provides information about the simulated dog breed classifier.
- Images are stored in the `uploads` directory with their UID as the filename.
- Categories and image metadata are stored in memory. For a production application, consider using a database for persistence.

## Future Improvements

- Implement proper error handling and input validation
- Add user authentication and authorization
- Use a database for storing image metadata and categories
- Implement rate limiting and other security measures
- Add unit and integration tests

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

CONTRIBUTING.md:

```markdown
# Contributing to CloudRaft Assignment

We welcome contributions to the CloudRaft Assignment project! This document provides guidelines for contributing to the project.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct, which is to treat all contributors with respect and foster an open and welcoming environment.

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes in your branch.
4. Ensure your code follows the project's coding standards.
5. Write or update tests as necessary.
6. Update the documentation to reflect your changes if needed.
7. Submit a pull request with a clear description of your changes.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent.
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Reporting Bugs

1. Use the GitHub Issues page to report bugs.
2. Describe the bug in detail, including steps to reproduce.
3. Include information about your environment (OS, Node.js version, etc.).

## Feature Requests

We welcome feature requests. Please submit them as GitHub Issues and provide as much detail as possible about the proposed feature and its use cases.

## Questions

If you have any questions about contributing, please open an issue or contact the project maintainers.

Thank you for your interest in contributing to the CloudRaft Assignment!
```

LICENSE.md:

```markdown
MIT License

Copyright (c) 2024 Sagnik Mandal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

These updated files now reflect your GitHub repository name (CloudRaft-assignment) and remove references to "API" where appropriate. The LICENSE.md file has been updated with the current year and your name (assuming it's Sagnik Mandal based on your GitHub username). If you need any further modifications or have any questions, please let me know!