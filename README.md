# MediAssist Backend

## Overview
Backend for MediAssist Disease Prediction application built with Node.js, Express, and MongoDB.

---


## Technologies
- Node.js v20
- Express.js
- MongoDB (Atlas)
- Mongoose
- bcrypt
- dotenv
- CORS
- Nodemon (dev)

---


PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mediassist?retryWrites=true&w=majority
---

## Install Dependencies
npm install

## Run Server
npm run dev

## API Endpoints

| Method | Route         | Description       |
| ------ | ------------- | ----------------- |
| POST   | /api/register | Register new user |
| POST   | /api/login    | Login user        |

| Method | Route                         | Description                          |
| ------ | ----------------------------- | ------------------------------------ |
| POST   | /api/report/generate          | Generate report (mock)               |
| POST   | /api/report/save              | Save report                          |
| GET    | /api/reports/\:userId         | Get all reports by user              |
| DELETE | /api/report/\:reportId        | Delete report                        |
| PATCH  | /api/report/\:reportId/status | Update report status (share/unshare) |

## Next Steps

Integrate Python model for report generation File: controllers/reportController.js ...

Function: generateReport

Connect frontend....
