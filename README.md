# Admin Dashboard
This project is a front-end application built using React, designed to replicate a part of the Lendsqr Admin Console. It includes user management features, dynamic data tables, and a responsive sidebar navigation. The app allows users to interact with mock APIs to view and manage user details. The project is built with a modern JavaScript stack and is fully responsive.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Mock APIs](#mock-apis)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **React** (`^18.3.1`): The core framework for building the front-end UI.
- **Axios** (`^1.7.7`): For making HTTP requests to mock APIs.
- **React Router Dom** (`^6.26.2`): For handling navigation between different pages.
- **React Data Table Component** (`^7.6.2`): For creating dynamic, sortable, and paginated tables.
- **Moment.js** (`^2.30.1`): For date formatting and manipulation.
- **Node-sass** (`^9.0.0`) & **Sass** (`^1.79.0`): For writing maintainable and structured CSS using SCSS.
- **React Icons** (`^5.3.0`): To use vector icons across the application.

## Features

- **Dynamic User Table**: 
  - Fetch user data from mock APIs and display it in a dynamic, paginated table.
  - Sorting and filtering functionality included.
  
- **User Detail View**: 
  - Click on a user to view detailed information on a separate page.
  - User information is persisted in local storage for easy access on reload.

- **Responsive Sidebar**: 
  - A collapsible sidebar with links to different sections of the application.
  - Sidebar dynamically highlights the active page and handles hover/active state transitions.
  
- **Date Management**: 
  - User-friendly display of dates using Moment.js for formatting.

## Installation

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v14+)
- npm or [yarn](https://yarnpkg.com/) package manager

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourprojectname.git
   cd yourprojectname
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

   The application should now be running at `http://localhost:3000`.

## Usage

Once the project is running, you can access the following features:
- **Login Page**: Authentication page to login.
- **Users Page**: Displays a paginated table of users fetched from mock APIs.
- **User Details**: Click on any user in the table to view detailed information about that user.
- **Sidebar Navigation**: Use the sidebar to navigate between different sections (though some sections are static).

### Mock APIs

The project uses JSONplaceholder APIs 


**Example API structure for users:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "avatar": "https://example.com/avatar1.jpg",
    "phone": "123-456-7890",
    "status": "Active",
    "joined": "2024-01-01"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "avatar": "https://example.com/avatar2.jpg",
    "phone": "123-456-7891",
    "status": "Inactive",
    "joined": "2023-12-01"
  }
]
```

## Project Structure

Here's a quick overview of the project folder structure:

```bash
src/
│
├── assets/                 # Static assets (images, logos, etc.)
├── components/             # Reusable UI components (e.g., UserCard, Sidebar, etc.)
├── pages/                  # Main pages (Users, UserDetail)
├── styles/                 # Global and component-specific styles (Sass, CSS, etc.)
├── utils/                  # Utility functions (e.g., formatters, constants)
├── App.tsx                 # Main application component
├── index.tsx               # Entry point of the application
└── custom.d.ts             # TypeScript declaration file for handling asset imports
```

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

