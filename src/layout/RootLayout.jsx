import React from "react"
import { NavLink, Outlet, Link } from "react-router-dom"
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
    <div className="md:w-[800px] min-h-screen   mx-auto md:grid md:grid-cols-3 ">
        <header className="md:col-span-1  font-ubuntu md:px-10 md:py-8 bg-neutral-alabaster">
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
        <main className="md:col-span-2 w-[340px] md:w-full mx-auto -mt-16 shadow-xl rounded-xl flex flex-col items-center pt-7 pb-8 px-5 gap-y-5 bg-neutral-alabaster ">
            <Outlet/>
        </main>
        <footer className="absolute bottom-0 left-0 right-0 bg-neutral-alabaster py-4 px-4 ">
            <Link>
                <button className="py-3 px-6 rounded-md text-neutral-magnolia bg-primary-marine-blue float-right">Next Step</button>
            </Link>
        </footer>
    </div>
  )
}

export default RootLayout