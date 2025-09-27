import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: 'General',
      questions: [
        {
          question: 'What makes AeroDyne drones different from competitors?',
          answer: 'Our drones feature proprietary AI flight systems, military-grade construction, and unmatched reliability. We combine cutting-edge technology with 24/7 support and a global service network.'
        },
        {
          question: 'Do you offer international shipping?',
          answer: 'Yes, we ship worldwide to over 50 countries. Shipping times and costs vary by location and product type. Contact us for specific international shipping quotes and regulations.'
        },
        {
          question: 'What is the warranty coverage for AeroDyne drones?',
          answer: 'All AeroDyne drones come with a comprehensive 2-year warranty covering manufacturing defects, plus optional extended coverage plans up to 5 years with additional services.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What is the maximum flight time for your drones?',
          answer: 'Flight times vary by model: recreational drones offer 25-30 minutes, commercial models provide 45-60 minutes, and industrial units can operate for up to 2 hours depending on payload and conditions.'
        },
        {
          question: 'Are AeroDyne drones compatible with third-party software?',
          answer: 'Yes, our drones support major industry-standard software platforms including DJI SDK, MAVLink protocol, and custom API integrations for enterprise applications.'
        },
        {
          question: 'What safety features are included?',
          answer: 'All models include GPS return-to-home, obstacle avoidance, emergency landing protocols, geo-fencing, and real-time flight monitoring with automatic fail-safe systems.'
        },
        {
          question: 'Can drones operate in adverse weather conditions?',
          answer: 'Our industrial and military-grade models are weather-resistant and can operate in light rain, wind up to 35 mph, and temperatures from -20°C to 50°C. Recreational models have more limited weather capabilities.'
        }
      ]
    },
    {
      category: 'Commercial & Industrial',
      questions: [
        {
          question: 'Do you provide training for commercial operators?',
          answer: 'Yes, we offer comprehensive training programs including Part 107 certification assistance, hands-on flight training, maintenance courses, and ongoing technical support for commercial operators.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve agriculture, construction, energy, telecommunications, public safety, surveying, film production, and defense sectors with specialized drone solutions and custom configurations.'
        },
        {
          question: 'Are volume discounts available for fleet purchases?',
          answer: 'Yes, we offer competitive fleet pricing for orders of 5+ units, including volume discounts, extended warranties, bulk training programs, and dedicated account management.'
        }
      ]
    },
    {
      category: 'Support & Maintenance',
      questions: [
        {
          question: 'Where can I get my drone serviced?',
          answer: 'We have authorized service centers in major cities worldwide, plus remote diagnostic capabilities and mail-in repair services. Most repairs are completed within 3-5 business days.'
        },
        {
          question: 'How do I register my drone?',
          answer: 'Registration varies by country and drone weight. In the US, drones over 0.55 lbs must be registered with the FAA. We provide guidance and support for all regulatory requirements in your region.'
        },
        {
          question: 'What replacement parts are available?',
          answer: 'We stock all common replacement parts including propellers, batteries, cameras, gimbals, and sensors. Most parts ship within 24 hours and are available through our online store or service partners.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full">
              <HelpCircle className="h-12 w-12 text-cyan-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our drone technology, services, and support.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b-2 border-gradient-to-r from-cyan-400 to-purple-400">
                <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  {category.category}
                </span>
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, index) => {
                  const globalIndex = categoryIndex * 100 + index;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                          {item.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-cyan-600 flex-shrink-0 transition-transform duration-200" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-200" />
                        )}
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-6 pb-4 border-t border-gray-100 dark:border-gray-600">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          {/* Contact Support */}
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl text-center border border-cyan-200 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our expert support team is available 24/7 to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Contact Support
              </button>
              <button className="px-6 py-3 border-2 border-cyan-600 text-cyan-600 dark:text-cyan-400 rounded-full font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};