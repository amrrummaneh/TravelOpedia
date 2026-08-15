# TravelOPedia — Travel Destination Manager

A React application for managing a personal list of travel destinations, letting users add, edit, and remove cities they plan to visit along with the estimated number of days needed for each trip.

## Overview

TravelOPedia is a single-page application built to practice modern React data-fetching patterns. It lets users maintain a list of destinations with the country, city, and estimated trip duration for each one, backed by a REST API layer powered by Redux Toolkit Query.

## Features

- **Destination management** with full CRUD operations (add, edit, delete)
- **Inline editing** — update a destination's city and country directly within the list, without a separate form or page
- **Automatic ID assignment** for new destinations based on existing entries
- **Centralized state management** using Redux Toolkit and RTK Query, including automatic cache invalidation and refetching after mutations
- **Loading and error states** handled explicitly while data is being fetched

## Tech Stack

- React 19
- Redux Toolkit & RTK Query
- Vite
- Bootstrap 5
- json-server (mock REST API for local development)

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm

### Setup

1. Clone the repository

git clone https://github.com/amrrummaneh/TravelOpedia.git
cd travelopedia

2. Install dependencies:
npm install

3. Start the mock API server (serves data from `src/data/traveldb.json` on `http://localhost:3000`):
npx json-server --watch src/data/traveldb.json --port 3000

4. In a separate terminal, start the development server:

npm run dev

5. Open the app at the local address shown in the terminal (typically `http://localhost:5173`).

## Notes

This project was built as a learning exercise to practice React with Redux Toolkit Query for state and data management, using a mock backend to simulate real API interactions.
