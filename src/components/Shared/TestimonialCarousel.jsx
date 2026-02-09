import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Mr. Dharmendra Savani",
    title: "Chairman – L. P. Savani Group of Schools, Surat",
    message: "Vidyalaya School Management Software has been a game-changer...",
    image: "../assets/images/client1.jpg",
  },
  {
    name: "Mrs. D Aparna",
    title: "Principal, CRPF Public School, Hyderabad",
    message: "Vidyalaya ERP has revolutionized our data management...",
    image: "/assets/client2.jpg",
  },
  {
    name: "Dr. Alpa S. Kotadia",
    title: "Vapi Public School, Vapi",
    message: "Vidyalaya School ERP has transformed our communication...",
    image: "/assets/client3.jpg",
  },
  {
    name: "Mr. Ramesh Shah",
    title: "Trustee, Nalanda Vidyalaya",
    message: "The best ERP for modern schools, helping in every department.",
    image: "/assets/client4.jpg",
  },
  {
    name: "Mrs. Leena Patel",
    title: "Principal, Global International School",
    message: "It reduced our manual workload drastically...",
    image: "/assets/client5.jpg",
  },
  {
    name: "Dr. Seema Roy",
    title: "Director, EduWave School",
    message: "Love the mobile app! Real-time updates are a blessing.",
    image: "/assets/client6.jpg",
  },
];

// Duplicate slides to simulate infinite effect
const extendedTestimonials = [...testimonials, ...testimonials];

const TestimonialSlider = () => {
  const [offset, setOffset] = useState(0);
  const trackRef = useRef(null);
  const slideWidth = 100 / 3; // showing 3 at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev + slideWidth;
        // Reset if reached end of extended slides
        const maxOffset = (extendedTestimonials.length / 3 - 1) * slideWidth;
        return next >= maxOffset ? 0 : next;
      });
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#ffffff] py-12 overflow-hidden">
      <div className="text-center mb-10">
        <h3 className="text-lg text-[#003566] font-semibold">Our Client Says</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#ffc300]">
          Why Institutes Love Vidyalaya School ERP System?
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 overflow-hidden">
        <div className="overflow-hidden w-full">
          <div
            ref={trackRef}
            className="flex transition-transform duration-1000 ease-in-out space-x-6"
            style={{
              width: `${(extendedTestimonials.length / 3) * 100}%`,
              transform: `translateX(-${offset}%)`,
            }}
          >
            {extendedTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-5 w-full max-w-sm flex-shrink-0 relative"
              >
                <div className="absolute top-0 right-0 bg-[#ffc300] text-white p-2 rounded-bl-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4v14zm10 0a4 4 0 01-4-4V7a4 4 0 014-4v14z" />
                  </svg>
                </div>
                <div className="flex items-center mb-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div className="ml-3">
                    <h4 className="font-bold text-md text-[#003566]">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-600">{t.title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">{t.message}</p>
                <a href="#" className="text-[#003566] font-bold text-sm">
                  Read More
                </a>
                <div className="absolute bottom-4 right-4">
                  <div className="w-8 h-8 bg-[#ffc300] text-white rounded-full flex items-center justify-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#003566] hover:bg-[#00264d] text-white font-semibold py-2 px-6 rounded-full shadow-md transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
