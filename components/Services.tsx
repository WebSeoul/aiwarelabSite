// components/FeaturesSection.tsx
import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <div className="flexCenter px-8 py-8 " id="scrollToService">
      <section className="max-container rounded-lg shadow-xl flex flex-col px-8 py-8 bg-gray-200 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Quality Services</h2>
          <p className="text-gray-600 mb-8">
            Meet the exciting services offered by AI Ware Lab
          </p>

          <div
            className="mServices  
    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 "
          >
            {/* Feature 1 */}
            <div className="flexCenter flex-col mb-1 py-7">
              <img
                src="/bot3.svg"
                alt="Feature 1"
                className="w-7/12 h-100 object-cover mb-10 rounded-md "
              />
              <h3 className="text-xl font-bold mb-2 text-left mServiceH3">
                GPT-3 | GPT 4 <br></br>Development
              </h3>
              <ul className="list-disc text-gray-700 pl-6 text-left mServiceUl">
                <li>Prospecting Chatbots</li>
                <li>On-Boarding Chatbots</li>
                <li>Airbnb Support Chatbots</li>
                <li>Persona Chatbots</li>
                <li>Staff Training Chatbots</li>
                <li>AI SaaS Development</li>
                <li>and much more...</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="flexCenter flex-col ">
              <img
                src="/bot2.svg"
                alt="Feature 2"
                className="w-7/12 h-100 object-cover mb-10 rounded-md"
              />
              <h3 className="text-xl font-bold mb-2 text-left mServiceH3 text-center">
                AI Consulting
              </h3>
              <ul className="list-disc text-gray-700 pl-6 text-left mb-5 mServiceUl">
                <li>Feasibility assessments</li>
                <li>Use case identification</li>
                <li>Performance evaluation</li>
                <li>Strategy development</li>
                <li>and much more...</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="flexCenter flex-col mb-12 ">
              <img
                src="/bot4.svg"
                alt="Feature 3"
                className="w-8/12 h-150 object-cover mb-10 rounded-md"
              />
              <h3 className="text-xl font-bold mb-2 mServiceH3">
                AI Automation
              </h3>
              <ul className="list-disc text-gray-700 pl-6 text-left mb-5 mServiceUl ">
                <li>Business automation</li>
                <li>AI cold outreach</li>
                <li>Personal plan generator</li>
                <li>AI Medical Notes</li>
                <li>and much more...</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
/*
const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Quality Services</h2>
        <p className="text-gray-600 mb-8">
          Meet the exciting services offered by LucidWave AI
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          
          <div className="max-w-md text-left">
            <img
              src="/feature1.jpg"
              alt="Feature 1"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-bold mb-2 text-center ">
              GPT-3 | GPT 4 Development
            </h3>
            <ul className="list-disc text-gray-700 pl-6">
              <li>Prospecting Chatbots</li>
              <li>On-Boarding Chatbots</li>
              <li>Airbnb Support Chatbots</li>
              <li>Persona Chatbots</li>
              <li>Staff Training Chatbots</li>
              <li>AI SaaS Development</li>
              <li>and much more...</li>
            </ul>
          </div>

          
          <div className="max-w-md text-left">
            <img
              src="/feature2.jpg"
              alt="Feature 2"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-bold mb-2 text-center">
              AI Consulting
            </h3>
            <ul className="list-disc text-gray-700 pl-6">
              <li>Feasibility assessments</li>
              <li>Use case identification</li>
              <li>Performance evaluation</li>
              <li>Strategy development</li>
              <li>and much more...</li>
            </ul>
          </div>

          <div className="max-w-md text-left">
            <img
              src="/feature3.jpg"
              alt="Feature 3"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-bold mb-2 text-center ">
              AI Automation
            </h3>
            <ul className="list-disc text-gray-700 pl-6">
              <li>Business automation</li>
              <li>AI cold outreach</li>
              <li>Personal plan generator</li>
              <li>AI Medical Notes</li>
              <li>and much more...</li>
            </ul>
          </div>

          
          <div className="max-w-md">
            <img
              src="/feature4.jpg"
              alt="Feature 4"
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-bold mb-2">Feature 4</h3>
            <ul className="text-gray-700">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
           
        </div>
      </div>
    </section>
  );
};
*/

export default FeaturesSection;
