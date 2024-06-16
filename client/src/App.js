
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import User from './components/getuser/User';
import Adduser from './components/adduser/Adduser';
import Edituser from './components/updateuser/Edituser';


function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>
    },
    {
      path:"/add",
      element:<Adduser/>
    },
    {
      path:"/edit/:id",
      element:<Edituser/>
    },

  ])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
