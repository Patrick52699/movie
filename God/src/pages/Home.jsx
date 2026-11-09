
function Home({ setPage }) {
  return (
    <main className="bg-gray-100 px-8 py-20 text-center">

      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to UP Website
      </h1>

      <p className="text-gray-600 mt-5 text-lg">
        We provide quality services and modern digital solutions.
      </p>

      <button
        onClick={() => setPage("services")}
        className="bg-blue-700 text-white px-8 py-3 rounded-lg mt-7 hover:bg-blue-900"
      >
        Explore Services
      </button>

    </main>
  )
}

export default Home
