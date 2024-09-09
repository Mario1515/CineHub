# CineHub

## About CineHub

CineHub is an online streaming service designed to provide users with an exceptional free streaming experience. Integrated with **TMDB (The Movie Database)**, CineHub fetches the latest data on movies and TV shows to deliver up-to-date content. The application offers a sleek and user-friendly interface, built with **React**, **Tailwind CSS**, and **Redux** for a responsive and dynamic frontend. The backend is powered by **PHP** with **Laravel** and uses **MySQL** for efficient data management.
The aim of CineHub is to offer users a comprehensive streaming service with the latest content and a seamless viewing experience.

## Technical Description

- **React**: A JavaScript library for building user interfaces, used here to create a dynamic and responsive frontend.
- **Tailwind CSS**: A utility-first CSS framework that enables rapid and customizable styling.
- **Redux**: A state management library that helps manage and maintain the state of the application.
- **TMDB**: Provides the latest movie and TV show data for a rich and up-to-date content experience.
- **PHP**: Server-side scripting language used in conjunction with Laravel for the backend logic.
- **Laravel**: A PHP framework that simplifies backend development and provides robust features for building modern applications.
- **MySQL**: A relational database management system used to store and manage the application’s data.

## Installation 

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **PHP** (v7.x or higher)
- **Composer** (for Laravel dependencies)
- **MySQL** or another compatible database

- Follow these steps to set up and run the project:

- `git clone https://github.com/Mario1515/cineHub.git`
- `cd cinehub`
- 
  ### Client Setup
- `cd client`
- `cd npm install`
- `npm run dev`

 ### Server Setup
- `cd server`
- `php artisan key:generate`
- Setup your DB credentials in the `.env` file
- `php artisan migrate`
- `php artisan serve`

Client: http://localhost:3000
Server: http://localhost:8000

All rights reserved @MarioPetkov
