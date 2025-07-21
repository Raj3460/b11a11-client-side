import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaGraduationCap, FaUsers, FaBook, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the group study feature work?",
      answer: "Our group study feature allows you to create virtual study rooms where you can collaborate with classmates in real-time. You can share notes, work on assignments together, and even video chat while studying.",
      icon: <FaUsers className="text-blue-500 text-xl" />
    },
    {
      question: "Can I create private study groups?",
      answer: "Yes, you can create both public and private study groups. Private groups require an invitation, ensuring your study sessions remain exclusive to selected members.",
      icon: <FaBook className=" text-blue-500 text-xl" />
    },
    {
      question: "How are assignments graded?",
      answer: "Assignments can be graded by peers in your study group or by instructors if you're using our platform for a course. We use a rubric-based system to ensure fair and consistent evaluations.",
      icon: <FaGraduationCap className=" text-blue-500 text-xl" />
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently we offer a fully responsive web application that works on all devices. We're developing native mobile apps that will be released later this year.",
      icon: <FaLaptopCode className=" text-blue-500 text-xl" />
    },
    {
      question: "How do I report inappropriate content?",
      answer: "You can flag any content by clicking the report button next to it. Our moderation team reviews all reports within 24 hours to maintain a safe learning environment.",
      icon: <FaBook className=" text-blue-500  text-xl" />
    }
  ];

  return (
    <div className="pt-14  to-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg  max-w-2xl mx-auto">
            Find answers to common questions about our platform and features
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 overflow-hidden"
            >
              <motion.div
                className={`flex items-center justify-between p-6 cursor-pointer rounded-xl ${activeIndex === index ? 'bg-base-100 border border-indigo-100' : 'bg-base-200 border border-gray-200'}`}
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary  rounded-lg">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-semibold ">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-gray-500" />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-black border-l border-r border-b border-gray-200 bg-secondary rounded-b-xl">
                      <p className="">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          
          
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;