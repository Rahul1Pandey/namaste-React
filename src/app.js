  import React,{lazy,Suspense} from "react";
  
  import ReactDOM from "react-dom/client"
  import Header from "./components/Header.js"
  import Body from "./components/Body.js"
  import About from "./components/About.js"
  import Error from "./components/Error.js"
  import Contact from "./components/Contact.js"
  import RestaurentMenu from "./components/RestaurentMenu.js";
  import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
  // import Grocery from "./components/Grocery.js";


const Grocery = lazy(()=> import("./components/Grocery.js"))

const Applayout = ()=>{
  return(
    <div className="app">
       <Header />
       <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Applayout />,
      children:[
        {
          path:"/",
          element:<Body />
        },
        {
          path:"/About",
          element:<About />
        },
        {
          path:"/contact",
          element:<Contact />
        },
        {
          path:"/grocery",
          element:<Suspense fallback={<h1>Loading......</h1>}><Grocery /></Suspense>
        },
        {
          path:"/restaurents/:resId",
          element:<RestaurentMenu />
        }
      ],
      errorElement:<Error /> 
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)