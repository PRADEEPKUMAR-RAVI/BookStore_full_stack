import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import {Home} from './pages/Home.jsx'
import './components/css/App.css'
import { BookDetails } from './pages/BookDetails.jsx'
import NavBar from './components/NavBar.jsx'
import LayOut from './components/LayOut.jsx'
import { EditBook } from './pages/EditBook.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<LayOut/>,
    children:[
      {
        index:true,
        element: <Home />,
        
      },
      {
        path:'books/:BookId',
        element: <BookDetails/>
      },
      {
        path:'books/:BookId/edit',
        element: <EditBook/>
      }
    ]
  },
  
])

export const App = () => {
  return (
    <div className='app-container'>
      <RouterProvider router={router} />
    </div>
  )
}
