# Movie-app

A simple movie recommendation application using React. The goal of this project is to develop a clean user interface with a well-functioning backend. Users should be able to get movie recommendations from data fetched from TMDB.

## Primary goals

- system architecture
- UI/UX development
- data handling
- testing

### Tech stack

- React
- Javascript
- Vite
- TailwindCSS

### What it needs to have/do

1. Data fetching - fetch movie data from a public api and implement a service to handle api requests and data caching.
2. Authentication - Implement simple authentication with an auth provider
3. UI - a user-friendly interface with these components:

    - movie list with basic informtion like title, poster and overview
    - movie details showing more information for a selected movie like cast, crew and ratings
    - search functionality allowing users to search for movies by title or keyword
    - loaders to show progress while data is being fetched
    - pagination to help optimize app performance
    - a ui library for consistent styling
4. State mangement - use a lightweight state management library to manage a list of movies, search queries and selected movie details
5. Testing - write unit tests for key components and services
6. Code quality - follow best prctices for code readability, maintainabelity and testability. The code should have a development and production branches.
7. CI/CD - have a pipeline job to run linting and unit tests automatically, a pipeline job to automatically deploy the software once certin checks have been met and deploy using a free service

#### What I want to do

- create development and production branches
- identify tech stack

1. Design the ui
2. Fetch data
3. search functionality
4. state management
5. testing
6. deploy

### Would be cool to add

- a notification badge
- a hover effect when the buttons are hovered over

### Issues

- scrollbar on popular sections cards
