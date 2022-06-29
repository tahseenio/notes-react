# 🍿 Notes App <a target="_blank" href="https://notes-react-nine.vercel.app/">Visit Here</a>

<img src="https://img.shields.io/github/repo-size/tahseenio/notes-react">

### Description
A simple notes app where you can create, edit, and delete notes. All stored in localStorage so you all your notes will be available when you come back to this site.

## Screenshots

<img src="https://i.imgur.com/zMWVI0J.png">

## Tech and Packages Used
<p align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" >
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" >
  <img src="https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue" >
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" >
</p>

- react-icons for icons

## Lessons Learned
- I learned how to use React TypeScript better especially when introducing the use of Context API.
- I have also learned the basics of creating responsive grid layouts
- Solidifed knowledge of important JS methods such as .map and .filter 

## Future optimizations
- I will look into redoing the entire UI as it does not look visually appealing. 
- Fix a layout change issue caused on initial load of the page. This is something to do with AnimatePresence initial={false} not working for the correct component so I will need to debug this. 
- localStorage is not working in development mode. The temporary solution is removing StrictMode in the index.tsx but I think either the logic for checking if exisiting notes exist inside a useEffect is not working correctly. 

## Installation and Usage

##### 1. Clone the repo using

`git clone https://github.com/tahseenio/notes-react.git`

##### 2. Install NPM

`npm install npm`

##### 3. Start the react app

`npm run start`

##### OPTIONAL To build the website for deployment to github

`npm run deploy`

