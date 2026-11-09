
function Card({ title, description, icon }) {
  return (
    <div className="bg-white p-7 rounded-xl shadow-md text-center hover:shadow-xl">

      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h2 className="text-xl font-bold text-blue-700">
        {title}
      </h2>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

      <button className="bg-blue-700 text-white px-5 py-2 rounded-lg mt-5 hover:bg-blue-900">
        Read More
      </button>

    </div>
  )
}

export default Card
