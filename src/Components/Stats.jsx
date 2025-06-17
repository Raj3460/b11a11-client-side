import React from 'react';

const Stats = () => {
       return (
              <div className="py-20 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                value: "10,000+",
                label: "Active Learners",
                icon: <FaUsers className="text-3xl mx-auto mb-2" />
              },
              {
                value: "50,000+",
                label: "Assignments",
                icon: <FaBook className="text-3xl mx-auto mb-2" />
              },
              {
                value: "95%",
                label: "Satisfaction Rate",
                icon: <FaHandshake className="text-3xl mx-auto mb-2" />
              },
              {
                value: "24/7",
                label: "Support Available",
                icon: <FaLightbulb className="text-3xl mx-auto mb-2" />
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                {stat.icon}
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
       );
};

export default Stats;