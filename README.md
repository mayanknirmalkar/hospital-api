Hospital API App
This is a RESTful API for managing doctors, patients, and medical reports in a hospital setting.

Table of Contents
Introduction
Features
Getting Started
Prerequisites
Installation
API Endpoints
Authentication
Usage Examples
Middleware
Contributing
License
Introduction
The Hospital API App provides a set of endpoints to manage doctor registration, patient registration, medical reports, and authentication for both doctors and patients.

Features
Doctor registration and login
Patient registration
Creating and retrieving patient medical reports
Retrieving all reports based on status
Getting Started
Prerequisites
Node.js and npm installed on your machine
MongoDB installed and running
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/hospital-api.git
Navigate to the project directory:

bash
Copy code
cd hospital-api
Install dependencies:

bash
Copy code
npm install
Set up environment variables (create a .env file):

env
Copy code
PORT=3000
MONGODB_URI=mongodb://localhost:27017/hospital
SECRET_KEY=your_secret_key
Start the server:

bash
Copy code
npm start
API Endpoints
POST /doctors/register: Register a new doctor.
POST /doctors/login: Doctor login to obtain an access token.
POST /patients/register: Register a new patient.
POST /patients/:id/create_report: Create a medical report for a patient.
GET /patients/:id/all_reports: Retrieve all reports for a patient.
GET /reports/:status: Retrieve all reports based on status.
Authentication
Authentication is required for certain routes. Use the access token obtained during login in the Authorization header:

makefile
Copy code
Authorization: Bearer your_access_token
Usage Examples
Here are some examples of using the API:

Register a new doctor:

bash
Copy code
curl -X POST -d "username=your_username&password=your_password" http://localhost:3000/doctors/register
Login to obtain an access token:

bash
Copy code
curl -X POST -d "username=your_username&password=your_password" http://localhost:3000/doctors/login
Create a medical report for a patient:

bash
Copy code
curl -X POST -H "Authorization: Bearer your_access_token" -d "status=normal" http://localhost:3000/patients/123/create_report
Middleware
getAccessToRoute: Ensures that only authenticated users can access certain routes.
