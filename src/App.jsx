import {createBrowserRouter, RouterProvider} from "react-router-dom";


// layouts
import Main, {mainLoader} from "./layouts/Main.jsx";

// routes
import Error from "./pages/Error.jsx";
import Dashboard, {dashboardLoader} from "./pages/Dashboard.jsx";

// actions
import {logoutAction} from "./actions/logout.js";
import {loginAction} from "./actions/login.js";

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
                path: "logout",
                action: logoutAction
            },
            {
                path: "login",
                action: loginAction
            }
        ]
    },
])
function App() {
  return (
    <div className="app">
       <RouterProvider router={router} />
    </div>
  )
}

export default App
