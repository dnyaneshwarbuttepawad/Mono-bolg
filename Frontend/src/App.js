
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLayout from './Admin/AdminLayout';
import DashBord from './Admin/Dashbord/DashBord';
import Login from './Admin/Login/Login';
import { Children } from 'react';
const router= createBrowserRouter([
  {path:'admin',element:<Login/>,
  children:[{path:'login',element:<Login/>},
    {path:'dashbord',element:<DashBord/>}
  ]}
])

function App(){ 
  return(
  <>
  {/* <img src={require('../src/Admin/assets/img1.jpg')}/> */}
  <RouterProvider router ={router}></RouterProvider>
  
 </>
);
}

export default App;