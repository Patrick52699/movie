
import Card from "../components/Card"
import serviceData from "../services/serviceData"

function Services() {
  return (
    <main className="bg-gray-100 px-8 py-16">

      <h1 className="text-3xl font-bold text-center text-blue-700">
        Our Services
      </h1>

      <p className="text-center text-gray-600 mt-4 mb-10">
        Discover the services we provide to our customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {serviceData.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}

      </div>

    </main>
  )
}

export default Services
