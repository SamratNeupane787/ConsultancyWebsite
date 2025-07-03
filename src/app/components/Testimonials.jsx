export default function Testimonials() {
  const testimonials = [
    {
      name: "Kevin Martin",
      role: "Customer",
      text: "DoItVisa provides expert immigration advice with personalized support, ensuring a smooth and stress-free path to your destination.",
      img: "/Person.jpg", // Replace with actual image path
    },
    {
      name: "Sarah Albert",
      role: "Customer",
      text: "DoItVisa delivers reliable immigration consultancy with clear guidance and excellent support, making your visa process simple and hassle-free.",
      img: "/Person.jpg", // Replace with actual image path
    },
    {
      name: "Jessica Brown",
      role: "Customer",
      text: "Trust DoItVisa for professional, personalized immigration services that streamline your journey and ensure a smooth application process.",
     img: "/Person.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="bg-blue-950 py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm uppercase text-blue-300">Our Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          What they're talking about the{" "}
          <span className="text-blue-400">consultancy</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-xl relative shadow-lg"
            >
              <div className="absolute top-0 right-0 bg-blue-500 text-white rounded-bl-xl px-3 py-1 text-xl">
                “
              </div>
              <p className="text-sm mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
