# Movie-app

A simple movie recommendation application using React.

## Primary objective

The goal of this project is to develop an application that fetches data from a database and renders a user-friendly interface allowing users to find and review movies of choice.

### Core Feature set

- User-friendly interface
- Data fetching
- Search functionality
- Authentication

## Development guidelines

- Use conventional commit messages
- Every change that affects functions in whole has to be done in it's own branch
- New concepts should be understood first before proceeding with baseless implementation

### Conventional Commit structure

- feat - a new feature
- fix - a bug fix
- docs - changes to the documentation
- style - formatting missing semicolons etc, no production code change
- refactor - Refactoring production code eg renaming a variable
- test - adding missing tests, refactoring tests, no production code change
- chore - Updating grunt tasks etc
- perf - a code change that improves performance
- ci - changes to ci configuration files and scripts

## Tech stack

### Primary Languages

- JavaScript

### Build tool

- Vite

### Frontend Framework

- React

### CSS Framework

- TailwindCSS v4

### Libraries

- React-Router

## What it needs to have/do

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

### Bugs

- scrollbar on popular sections cards
