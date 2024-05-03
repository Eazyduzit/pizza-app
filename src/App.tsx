import About from "./content/about"
import Home from "./content/home"
import Navbar from "./content/navbar"

function App() {
  return (
    <div className="app bg-primary-100">
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
