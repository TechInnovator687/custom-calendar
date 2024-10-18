# Vite + React-TS custom calendar app

 This project is a real-time date picker application built with React and TypeScript, using Vite as the build tool. It offers an interactive interface for selecting date ranges, making the experience engaging and user-friendly.

## Features
- Date range selection: Users can select date ranges using a calendar interface, with the ability to choose predefined ranges such as "Previous 7 Days" and "Previous 30 Days".
- Weekend highlighting: The application identifies and displays weekends within the selected date range.
- Notifications: Displays toast notifications when a date range is selected, showing details of weekends within that range.
- Responsive design: The user interface is designed to be responsive, ensuring compatibility across devices and screen sizes.

## Install Dependecies
```
npm install
```

## Start the dev server
```
 npm run dev
```
 The application will be available at `http://localhost:5173`

## Project Structure
- /components: Contains reusable React components, including the main DatePicker component for selecting date ranges.
- /utils: Utility functions for rendering the calendar and formatting dates.
- /public: Contains static assets like images, icons, and any other public files used in the app.

## Libraries and Tools 
- React: A JavaScript library for building user interfaces, used here for component-based development.
- TypeScript: Provides static typing, improving code quality, refactoring, and overall maintainability.
- Vite: A fast, modern build tool for web projects, offering lightning-fast hot module replacement (HMR).

## Development Environment
- Node.js: Version 20.17.0 is required to install dependencies and run the project.
- Vite: Provides a fast development environment and optimized build process.
- ESLint: Linting tool for maintaining code consistency and avoiding bugs.
- Operating System: The app has been developed and tested on Ubuntu 23, but it should work on other OSes as well.

## Screenshot 

![Alt text](public/app_ss.png?raw=true "Title")