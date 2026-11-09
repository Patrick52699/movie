function Header() {
    return(
         <header className="px-6 md:px-12 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif">
          🎬  Movies Bazer<span className="text-purple-500">.</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-orange-800">Home</a>
          <a href="#trending" className="hover:text-orange-800">Explore</a>
          <a href="#trending" className="hover:text-orange-800">Genre</a>
          <a href="#movies" className="hover:text-orange-800">News</a>
          <a href="#movies" className="hover:text-orange-800">Movies</a>
          <a href="#movies" className="hover:text-orange-800">TV Shows</a>
        </nav>

        <button className="md:hidden text-2xl">☰</button>
      </header>

    )
}
export default Header