# Install Tailwind
- Go to tailwindcss.com >DOCS>Framework Guides> Create React App
- Install below libraries
    - npm install -D tailwindcss
    - npx tailwindcss init
    - Configure your template paths
        - Add the paths to all of your template files in your `tailwind.config.js` file.
        ```
        content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        ]
        ```
    - Add the Tailwind directives to your CSS
        - Add the @tailwind directives for each of Tailwind’s layers to your `./src/index.css` file.
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
# Features to develop
- Login/Signup
    - Signin/Signup Form
    - Redirect to Browse Page
- For LoggedIn User
    - Browse
        + Header
        + Main Movie
            - Tailer in Background
            - Title & Description
            - Movie Suggestions
                + Movies List
- Netflix GPT
    - Search Bar
    - Movie Suggestions

# Setup Routing
- Install react-router-dom
    `npm i -D react-router-dom `

# Formik for Validation(Optional)
- Here we have written our custom validator to validate email and password

# Store LoggedIn User Details using Redux
- Install 
    - npm i -D @reduxjs/toolkit
    - npm i -D react-redux


