# Task Management Application - Frontend

This is the frontend for a task management application built with React. It's designed to work with a separate backend API and MongoDB database.

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:

git clone https://github.com/IAmSalvaMartini/task-manager-app.git
cd task-manager-app

2. Install dependencies:

npm install

3. Create a `.env` file in the root directory and add the following:

REACT_APP_API_URL=https://your-backend-url.render.com

Replace `https://your-backend-url.render.com` with the actual URL of your backend API.

## Running the Application

To start the development server:

npm start

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

To create a production build:

npm run build

This builds the app for production to the `build` folder.

## Deployment

This frontend is configured for deployment on Netlify. To deploy:

1. Push your changes to your GitHub repository.
2. Connect your GitHub repo to Netlify.
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Add the `REACT_APP_API_URL` environment variable in Netlify's settings.

## Features

- Create, read, update, and delete tasks


## Technology Stack

- React
- NodeJS
- MongoDB
- Git

## Contributing

- Create a PR