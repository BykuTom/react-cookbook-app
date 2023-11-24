# Team Rocket Cookbook App

## Description
A cookbook app written in React.

## Authors
- [Tomasz Wolak](https://github.com/BykuTom)
- [Artursrus](https://github.com/artursrus)

## Features

### Access Pages
- Navigate seamlessly through Home, Discover, Community Hub, and Login pages without the need to log in.

### Recipe Exploration
- Utilize the power of the Spoontacular API to search for recipes, implemented with a dedicated hook and Axios.
- Leverage React and Axios hooks to fetch and display individual recipes with detailed cooking steps, ingredient lists, and nutrition information.

### Community Interaction
- Explore the Community Hub, enriched with React Paginate for paginating results and beautifully designed UI elements from Ripple UI, Heroicons, and Headless UI.
- Seamlessly view recipes within cookbooks, read comments, and check ratings using responsive components such as React Slick for carousels.

### Extended Access
- Enjoy all features available to unlogged users, excluding the Login page.
- Gain access to My Cookbooks page and Profile page, facilitated by React Router Dom for smooth navigation.

### Recipe Management
- Leverage the power of React and Axios to search for recipes using the Spoontacular API, implemented with a dedicated hook.
- Utilize Formik and Yup for efficient form management in various forms, including those on the Discover page, Login page, Add Cookbook modal, and Write a Review component.

### Cookbook Creation
- Seamlessly create new cookbooks both within the My Cookbooks page and using the "Add to Cookbook" functionality on the Discover page, enhanced by Formik and Yup.

### Community Interaction
- Explore the Community Hub, further enriched with React Paginate and React Select for dynamic pagination and user-friendly dropdowns.
- Interact with cookbooks by leaving ratings and reviews, creating a dynamic user experience with React and Axios.

### State Management
- Utilize React context and a custom reducer for managing states related to cookbooks, my cookbooks, and user information.

### LocalStorage Integration
- Implement local storage to persist data, populating it with mock data on the initial run and loading from local storage thereafter.

### Routing
- Implement routing using React Router Dom to navigate seamlessly between pages.

### Carousel Display
- Enhance the Home page with a carousel using React Slick for a visually appealing user experience.

### HTML Parsing
- Parse HTML text from the API using HTML React Parser to render descriptions on cards and individual recipe pages.

### Date Management
- Assign dates to reviews using Date-fns, ensuring accurate and organized information.

### UI Elements
- Employ Ripple UI, Heroicons, and Headless UI throughout the project for creating a cohesive and visually appealing user interface.

### Utility Functions
- Implement various utility functions, including those stored in a utility.js file, to enhance the overall functionality of the application.

## Getting Started

```shell
git clone git@github.com:BykuTom/react-cookbook-app.git 

cd react-cookbook-app

npm install

npm run start

```

## Local Environment

Navigate to http://localhost:3000

## Deployed Environment

Navigate to [Deployed Project](https://react-cookbook-app.vercel.app/)

## User Stories

### Unlogged User
- **Access Pages:**
  - Navigate to the Home, Discover, Community Hub, and Login pages without the need to log in.
  
- **Recipe Search:**
  - Search for recipes using the Spoontacular API.

- **Recipe Viewing:**
  - Access and view individual recipes, including cooking steps, ingredient lists, and nutrition information.

- **Community Interaction:**
  - Navigate to the community page to view user-generated cookbooks, recipes within them, as well as comments and ratings.

### Logged In User
- **Extended Access:**
  - Access all previously mentioned pages, excluding the Login page.
  - Gain access to the My Cookbooks page, profile page, and additional features.

- **Recipe Search and Management:**
  - Search for recipes using the Spoontacular API, view them, and add them to created cookbooks.

- **Cookbook Creation:**
  - Create a new cookbook within the My Cookbooks page and when accessing the "Add to Cookbook" functionality from the Discover page.

- **Community Interaction:**
  - View the community page and interact with cookbooks by leaving ratings and reviews.
    
## Technologies Used

### Frontend

- **React:** A JavaScript library for building user interfaces, providing a fast and efficient way to create interactive applications.
  
- **Create React App (CRA):** A tool to set up a new React project with a sensible default configuration, enabling rapid development without complex setup.

- **Tailwind CSS:** A utility-first CSS framework that facilitates the creation of responsive and modern user interfaces with minimal styling effort.

- **Headless UI:** A set of completely unstyled UI components, designed to be highly composable, accessible, and customizable.

- **Ripple UI:** A collection of components and utilities that are used to build modern interfaces, built on top of Tailwind CSS.

- **Heroicons:** A set of free, MIT-licensed high-quality SVG icons for you to use in your web projects.

- **Axios:** A promise-based HTTP client for the browser and Node.js, making it easy to send asynchronous HTTP requests.

- **React Router Dom:** A declarative routing library for React, enabling navigation between different components in the application.

- **Formik:** A form library for React that helps with the management of form state, form validation, and form submission.

- **Yup:** A JavaScript schema builder for value parsing and validation.

- **HTML React Parser:** A utility for parsing HTML strings into React elements.

- **Date-fns:** A modern JavaScript date utility library that provides comprehensive functionality for working with dates.

- **React Paginate:** A simple-to-use React component for handling pagination.

- **React Select:** A flexible and extensible React select component for user-friendly dropdowns.

- **React Slick:** A responsive carousel component for React, providing a customizable and fluid carousel experience.


## Screenshots

### Desktop
![App Screenshot](https://github.com/BykuTom/Project-screenshots/blob/main/react-cookbook-app/DiscoverUltraWide.JPG?raw=true)
![App Screenshot](https://github.com/BykuTom/Project-screenshots/blob/main/react-cookbook-app/CommunityHub1080.JPG?raw=true)
### Mobile
![App Screenshot](https://github.com/BykuTom/Project-screenshots/blob/main/react-cookbook-app/DiscoverMobile.JPG?raw=true)
## References

### External Libraries and Tools

- **Headless UI React:** 
  - Package: `@headlessui/react`
  - [GitHub Repository](https://github.com/tailwindlabs/headlessui)

- **Heroicons React:**
  - Package: `@heroicons/react`
  - [GitHub Repository](https://github.com/tailwindlabs/heroicons)

- **Testing Library Jest DOM:**
  - Package: `@testing-library/jest-dom`
  - [GitHub Repository](https://github.com/testing-library/jest-dom)

- **Testing Library React:**
  - Package: `@testing-library/react`
  - [GitHub Repository](https://github.com/testing-library/react-testing-library)

- **Testing Library User Event:**
  - Package: `@testing-library/user-event`
  - [GitHub Repository](https://github.com/testing-library/user-event)

- **Axios:**
  - Package: `axios`
  - [GitHub Repository](https://github.com/axios/axios)

- **Date-fns:**
  - Package: `date-fns`
  - [GitHub Repository](https://github.com/date-fns/date-fns)

- **Formik:**
  - Package: `formik`
  - [GitHub Repository](https://github.com/formium/formik)

- **HTML React Parser:**
  - Package: `html-react-parser`
  - [GitHub Repository](https://github.com/remarkablemark/html-react-parser)

- **React:**
  - Package: `react`
  - [GitHub Repository](https://github.com/facebook/react)

- **React Dom:**
  - Package: `react-dom`
  - [GitHub Repository](https://github.com/facebook/react)

- **React Paginate:**
  - Package: `react-paginate`
  - [GitHub Repository](https://github.com/AdeleD/react-paginate)

- **React Router Dom:**
  - Package: `react-router-dom`
  - [GitHub Repository](https://github.com/remix-run/react-router)

- **React Scripts:**
  - Package: `react-scripts`
  - [GitHub Repository](https://github.com/facebook/create-react-app)

- **React Select:**
  - Package: `react-select`
  - [GitHub Repository](https://github.com/JedWatson/react-select)

- **React Simple Star Rating:**
  - Package: `react-simple-star-rating`
  - [GitHub Repository](https://github.com/rtb168/react-simple-star-rating)

- **React Slick:**
  - Package: `react-slick`
  - [GitHub Repository](https://github.com/akiran/react-slick)

- **Ripple UI:**
  - Package: `rippleui`
  - [GitHub Repository](https://github.com/Siumauricio/rippleui) 

- **Slick Carousel:**
  - Package: `slick-carousel`
  - [GitHub Repository](https://github.com/kenwheeler/slick)

- **Web Vitals:**
  - Package: `web-vitals`
  - [GitHub Repository](https://github.com/GoogleChrome/web-vitals)

- **Yup:**
  - Package: `yup`
  - [GitHub Repository](https://github.com/jquense/yup)


### API 
- [Spoontacular API](https://spoonacular.com/food-api): API used for recipe data.

### Avatars 
- [Unsplash](https://unsplash.com/): Used for user avatars.
