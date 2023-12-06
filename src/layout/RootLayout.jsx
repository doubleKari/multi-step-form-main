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
    <header className="bg-sidebar-mobile bg-center bg-no-repeat bg-cover h-40">
        <nav className="flex justify-center items-center pt-8">
            <ul className="font-ubuntu flex gap-x-4 sm:flex-col">
                {
                    navItems.map(item=> {
                        return (
                        <NavLink to={item.path} key={item.step}  className={({ isActive}) => isActive ? "text-primary-marine-blue bg-primary-pastel-blue rounded-full " : "text-neutral-White"    
                        }>
                            <li  className="w-8 h-8 border border-neutral-White rounded-full  flex justify-center items-center">
                                 
                                <h2 className="font-bold">{item.step}</h2>
                                <div className="hidden sm:block">
                                    <p className="uppercase">step {item.step}</p>
                                    <h3>{item.title}</h3>
                                </div>
                            </li>
                        </NavLink>      
                        )
                    })
                }
            </ul>
        </nav>
    </header>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default RootLayout