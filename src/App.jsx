import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard, {dashboardLoader} from "./pages/Dashboard.jsx";

// layouts
import Main, {mainLoader} from "./layouts/Main.jsx";

import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        loader:mainLoader,
        errorElement: <Error />,
        children:[
            {
                index:true,
                element: <Dashboard />,
                loader:dashboardLoader,
                errorElement: <Error />
            },
            {
                path:'/about',
                element: <h1>About</h1>
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])
function App() {
  return (
    <div className="app">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
