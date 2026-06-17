# Customer Loyalty Points System

## Overview

The Customer Loyalty Points System is a full-stack web application that allows businesses to manage customer loyalty rewards. The application enables users to add customers, calculate loyalty points based on purchase amounts, award bonus points, and view a summary of all customers and their accumulated points.

---

## Features

* Add new customers
* Calculate loyalty points based on spending
* Add bonus points to customers
* Store customer information and points
* View customer summary
* REST API integration between frontend and backend
* Input validation for customer details

---

## Technology Stack

### Frontend

* React.js
* Axios
* Vite

### Backend

* Spring Boot
* Spring Data JPA
* Maven

### Database

* H2 In-Memory Database

### Deployment

* Frontend: Vercel
* Backend: Railway

---

## Points Calculation Logic

The system awards:

* 1 loyalty point for every 100 currency units spent

Examples:

| Amount Spent | Points Earned |
| ------------ | ------------- |
| 100          | 1             |
| 500          | 5             |
| 1000         | 10            |
| 2500         | 25            |

Bonus points can also be awarded manually and are added to the customer's total points.

---
## Points Calculation Example

The application calculates loyalty points using the following formula:

```text
Points Earned = Amount Spent ÷ 100
```

### Example 1

Customer Purchase:

```text
Amount Spent = 500
```

Calculation:

```text
500 ÷ 100 = 5 points
```

Result:

```text
Customer receives 5 loyalty points.
```

### Example 2

Customer Purchase:

```text
Amount Spent = 1000
```

Calculation:

```text
1000 ÷ 100 = 10 points
```

Result:

```text
Customer receives 10 loyalty points.
```

### Example 3 (Including Bonus Points)

Customer Purchase:

```text
Amount Spent = 500
```

Calculation:

```text
500 ÷ 100 = 5 points
```

Bonus Points Awarded:

```text
100 points
```

Final Total:

```text
5 + 100 = 105 points
```

Result:

```text
Customer has 105 total loyalty points.
```





## Setup Instructions

### Backend Setup

1. Clone the repository

```bash
git clone https://github.com/Shirleyj25/customer-loyalty-system.git
```

2. Navigate to the project directory

```bash
cd customer-loyalty-system
```

3. Run the Spring Boot application

```bash
./mvnw spring-boot:run
```

Backend will run on:

```text
http://localhost:8080
```

---

### Frontend Setup

1. Navigate to the frontend folder

```bash
cd loyalty-frontend
```

2. Install dependencies

```bash
npm install
```

3. Start the React application

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## API Endpoints

### Add Customer

POST

```text
/customers
```

Request Body:

```json
{
  "name": "John",
  "email": "john@gmail.com"
}
```

---

### Get All Customers

GET

```text
/customers
```

---

### Add Purchase

POST

```text
/customers/{id}/purchase?amount=1000
```

---

### Add Bonus Points

POST

```text
/customers/{id}/bonus?points=100
```

---

## Deployment Links

### Frontend

https://customer-loyalty-system-cutiib3p6-shirley-js-projects.vercel.app/

### Backend

https://customer-loyalty-system-production.up.railway.app/customers

---

## Assumptions Made

* Loyalty points are calculated as 1 point for every 100 currency units spent.
* Bonus points are added directly to the customer's total points.
* H2 database is used for simplicity and assessment purposes.
* Customer email addresses must be unique.
* Data stored in H2 is temporary and resets when the application restarts.

---

## AI-Assisted Development

This project was developed with assistance from ChatGPT as part of an AI-assisted development workflow. ChatGPT was used to help design the application structure, generate boilerplate code, troubleshoot Spring Boot and React integration issues, assist with API testing, and provide deployment guidance.

The generated code was reviewed, tested, and modified where necessary. During development, challenges included configuring Spring Boot, resolving API communication issues between React and the backend, handling validation errors, and deploying the application successfully. AI assistance significantly accelerated development and debugging while allowing focus on application functionality and user experience.

---

## Author

Shirley John
