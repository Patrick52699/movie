function Header() {
  return (
    <header className="bg-gray-800 text-white  p-2">
    <nav className="flex justify-between items-center mx-auto max-w-7xl">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtVXs9RFA_IfYlstbcXRU-uwZ6e7W64BMx7wODbxxQw&s=10" className="w-20 h-18 rounded-full"/>
      <ul className="flex  items gap-8 justify-between">
        <li><a href="" className="hover:text-orange-500">Home</a></li>
        <li><a href="" className="hover:text-orange-500">About Us</a></li>
        <li><a href="" className="hover:text-orange-500">Services</a></li>
        <li><a href="" className="hover:text-orange-500">Contact</a></li>
        <li><a href="" className="hover:text-orange-500">Help</a></li>
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-yellow-500">
        Sign Up
      </button>
  </nav>
    </header>
  )
}
export default Header