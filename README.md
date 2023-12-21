# Hospital API App

This is a RESTful API for managing doctors, patients, and medical reports in a hospital setting.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
## Introduction

The Hospital API App provides a set of endpoints to manage doctor registration, patient registration, medical reports, and authentication for both doctors and patients.

## Features

- Doctor registration and login
- Patient registration
- Creating and retrieving patient medical reports
- Retrieving all reports based on status

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/hospital-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd hospital-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables (create a `.env` file):

    ```env
    PORT=3000
    MONGODB_URI=mongodb://username:password/blahblahblah
    SECRET_KEY=your_secret_key
    ```

5. Start the server:

    ```bash
    npm start
    ```

## API Endpoints

- **POST /doctors/register**: Register a new doctor.
- **POST /doctors/login**: Doctor login to obtain an access token.
- **POST /patients/register**: Register a new patient.
- **POST /patients/:id/create_report**: Create a medical report for a patient.
- **GET /patients/:id/all_reports**: Retrieve all reports for a patient.
- **GET /reports/:status**: Retrieve all reports based on status.

## Authentication

Authentication is required for certain routes. Use the access token obtained during login in the Authorization header:

```markdown
Authorization: Bearer your_access_token
