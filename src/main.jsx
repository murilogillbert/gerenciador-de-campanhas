import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Home from './routes/Home.jsx'
import Credencial from './routes/Credencial.jsx'
import Gerenciador from "./routes/Gerenciador.jsx"
import Login from './routes/Login/Login.jsx'
import Cadastro from "./routes/Cadastro/Cadastro.jsx"
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {path:"/",
        element:<Home/>
      },
      {
        path:"Credencial",
        element:<Credencial/>,
        children:[{
          path:"Login",
          element:<Login/>},
          {
            path:"Cadastro",
            element:<Cadastro/>},
            
        ]
      },
      {path: "Gerenciador",
        element: <Gerenciador/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
