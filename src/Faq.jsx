import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you will receive an email with tracking details. You can also check the status in the 'Order History' section of your profile.",
    },
    {
      question: "What is the return policy?",
      answer:
        "We offer a 14-day return policy for most items. Products must be unused and in original packaging. Visit the Return Center to start a return.",
    },
    {
      question: "How do I change my account password?",
      answer:
        "Go to your Profile, then click 'Edit' and select 'Change Password'. Follow the instructions to update your password securely.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to several countries. Shipping fees and delivery times vary by destination and will be calculated at checkout.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-3xl p-8 mb-8 shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-sm opacity-90">Here are answers to common questions about our services.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md transition hover:shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              <span className="text-indigo-600 font-bold text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
