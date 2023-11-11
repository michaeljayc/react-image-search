## Figma URL

[Unsplash Images](https://www.figma.com/file/O2MaAAlr4nznh7m53azatL/Unsplash-images?node-id=0%3A1&t=cYDOCgqOs9IX2If0-1)

## Steps

#### Setup

- npm install
- npm run dev

#### Initial Structure and Global Context

Created three components - ThemeToggle, SearchForm and Gallery. Render all of them in App.jsx, and setup global context.

#### Unsplash Info

Unsplash is a website that provides a large collection of high-quality stock photos that are free to use. The Unsplash API is a service that allows developers to access and use Unsplash's collection of photos and related data in their own applications. The API allows developers to search, download, and use the photos in a variety of ways, such as creating photo galleries or integrating them into social media applications. The Unsplash API is widely used by developers to enhance the visual content of their applications or websites.

[Unsplash Website](https://unsplash.com/)

#### Sign Up for an Unsplash Account

[Unsplash API](https://unsplash.com/developers)

In order to use the Unsplash API to fetch images for your application, you will need to sign up for an account with Unsplash. This will allow you to obtain an API key that you can use to authenticate your requests.

#### Install and Setup React Query in Gallery Component

React Query is a library that can be used to handle API requests in React applications. To fetch images from the Unsplash API, I have installed and set up React Query in my Gallery component.

#### Checking Whether User Prefers Dark Mode with JavaScript

To provide a better user experience, I checked whether the user prefers dark mode using JavaScript. This can be done by accessing the user's system preferences and setting the theme of your application accordingly.

#### Setup Local Storage to Store isDarkTheme State Value

To persist the user's preferred theme across sessions, I stored the isDarkTheme state value in local storage. This will allow the theme to be preserved even if the user closes and reopens the application.

#### Setup ENV Variables in VITE

Environment variables can be used to store sensitive information, like the Unsplash API key.

#### Vite ENV Variable

- .env : must be included in .gitignore
