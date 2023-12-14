import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { PersonalInfo, Plan, AddOns, Summary } from "./pages"



const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children:[
      {
        index: true,
        element: <PersonalInfo/>
      },
      {
        path:'plan',
        element: <Plan/>
      },
      {
        path:'add-ons',
        element: <AddOns/>
      },
      {
        path: 'summary',
        element: <Summary/>
      }
    ]
  }
])







export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}