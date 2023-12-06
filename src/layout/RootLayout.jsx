import React from "react"
import { NavLink, Outlet } from "react-router-dom"
const RootLayout = () => {
  const navItems = [
    {
        step: 1,
        title: "your info",
        path: "/"
    },
    {
        step: 2,
        title: "select plan",
        path: "plan"
    },
    {
        step: 3,
        title: "add-ons",
        path: "add-ons"
    },
    {
        step: 4,
        title: "summary",
        path: "summary"
    }
  ]
  return (
    <>
    <header className="md:col-span-1 md:h-screen font-ubuntu md:px-10 md:py-8">
        <nav className="bg-sidebar-mobile md:bg-sidebar-desktop bg-center bg-no-repeat bg-cover h-40  pt-8 md:h-full md:rounded-xl">
            <ul className="flex justify-center gap-x-4  md:flex-col md:gap-y-8 md:pl-5">
                {
                    navItems.map(item=> {
                        return (
                       
                    <li key={item.step}  className="flex items-center gap-x-4">
                        <NavLink to={item.path} 
                        style={({isActive})=>{
                            return {
                                color: isActive ? 'hsl(213, 96%, 18%)': 'hsl(0, 0%, 100%)',
                                background: isActive? 'hsl(228, 100%, 84%)': "inherit",
                                borderRadius: "100%"

                            }
                        }}   
                        className="flex justify-center items-center border border-neutral-White rounded-full w-8 h-8 md:w-10 md:h-10">
                                <h2 className="font-bold">{item.step}</h2>
                        </NavLink>
                        <div className="hidden md:block text-neutral-White">
                                    <p className="uppercase text-xs text-neutral-light-gray tracking-wider">step {item.step}</p>
                                    <h3 className="uppercase font-bold text-sm tracking-wider">{item.title}</h3>
                        </div>      
                      
                    </li>
                        )
                    })
                }
            </ul>
        </nav>
    </header>
    <main className="col-span-3 font-ubuntu md:pr-10 md:py-8">
        <Outlet/>
    </main>
    </>
  )
}

export default RootLayout