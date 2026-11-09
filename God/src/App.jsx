
import { useState } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {

  const [page, setPage] = useState("home")

  return (
    <div className="min-h-screen flex flex-col">

      <Header setPage={setPage} />

      <div className="flex-1">

        {page === "home" && (
          <Home setPage={setPage} />
        )}

        {page === "about" && (
          <About />
        )}

        {page === "services" && (
          <Services />
        )}

        {page === "contact" && (
          <Contact />
        )}

      </div>

      <Footer />

    </div>
  )
}

export default App
