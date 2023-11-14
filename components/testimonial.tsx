import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-8" id="scrollToTestimonials">
      <div className="container mx-auto text-center">
        <p className="text-xl font-bold mb-8 text-green-00">
          Customer Comments
        </p>
        <h2 className="text-3xl font-bold mb-8">Why customers love us</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "The chatbot's lead automation streamlined our processes, and the
              24x7 maintenance support is a lifeline. The dynamic FAQ
              integration instantly resolved customer queries. A reliable
              partner for anyone seeking business automation excellence."
            </p>
            <p className="text-gray-500">- Davis T.</p>
          </div>

          <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Impressed with AiWare Lab's automation solutions! The lead
              capture feature seamlessly integrates with our CRM, enhancing
              prospecting. The team's support is unmatched, ensuring our
              operations run smoothly day and night."
            </p>
            <p className="text-gray-500">- Sarah J.</p>
          </div>

          {/* Add more testimonials as needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
