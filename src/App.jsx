import { useRoutes, useLocation } from "react-router-dom"
import { routes } from "./routes"
import Footer from "./components/footer"


function App() {
  const element = useRoutes(routes)
  const location = useLocation()

  // Tentukan path mana saja yang ingin menampilkan footer
  const showFooterPaths = [ "/dashboard", "/followingpost", "/detailuser/:userId", "/explorepost", "/myfollowing", "/myfollowers"] 
  const showFooter = showFooterPaths.some(path => 
    location.pathname.match(new RegExp(path.replace(':userId', '[^/]+')))
  )
  return(
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow">{element}</div>
    {showFooter && <Footer />}
  </div>

  ) 
  

 
}

export default App
