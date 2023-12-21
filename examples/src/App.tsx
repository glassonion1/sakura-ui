import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Forms from './pages/Forms'

const router = createBrowserRouter([
  {
    path: 'sakura-ui/',
    element: <Home />
  },
  {
    path: 'sakura-ui/forms',
    element: <Forms />
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
