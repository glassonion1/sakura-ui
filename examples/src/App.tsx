import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Forms from './pages/Forms'
import Markdown from './pages/Markdown'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/forms',
      element: <Forms />
    },
    {
      path: '/markdown',
      element: <Markdown />
    }
  ],
  { basename: '/sakura-ui' }
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
