
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for contacting us!")
  }

  return (
    <main className="bg-gray-100 px-8 py-16">

      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-blue-700 text-center">
          Contact Us
        </h1>

        <p className="text-gray-600 text-center mt-3">
          Get in touch with us today.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">

          <label className="block mb-2 font-semibold">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full border p-3 rounded-lg mb-5"
          />

          <label className="block mb-2 font-semibold">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full border p-3 rounded-lg mb-5"
          />

          <label className="block mb-2 font-semibold">
            Message
          </label>

          <textarea
            placeholder="Write your message"
            required
            rows="5"
            className="w-full border p-3 rounded-lg mb-5"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-900"
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  )
}

export default Contact
