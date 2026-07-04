import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "devicon/devicon.min.css";
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact.jsx'
import Education from './components/Education/Education.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/skills',
        element: <Skills/>
      },
      {
        path: '/education',
        element: <Education/>
      },
      {
        path: '/experiences',
        element: <Experiences/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
