
function Header({ setPage }) {
  return (
    <header className="bg-blue-700 text-white px-8 py-5 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        UP WEBSITE
      </h1>

      <nav className="flex gap-6">

        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("about")}>
          About
        </button>

        <button onClick={() => setPage("services")}>
          Services
        </button>

        <button onClick={() => setPage("contact")}>
          Contact
        </button>

      </nav>

    </header>
  )
}

export default Header
