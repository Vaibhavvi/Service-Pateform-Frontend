import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

import AboutImage from '../assets/AboutImage.jpeg'; // Replace with your actual image
import Team1 from '../assets/team1.png';
import Team2 from '../assets/team2.jpg';
import Team3 from '../assets/team3.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        {/* About Section */}
        <div className="row">
          <div className="col-md-6">
            <motion.h2
              className="about-heading"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About TechNova
            </motion.h2>
            <motion.p
              className="about-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              TechNova is a forward-thinking technology company dedicated to building cutting-edge solutions
              that help businesses innovate and stay ahead of the competition. Our team is passionate about
              bringing ideas to life and crafting high-quality, scalable software solutions for a wide range
              of industries.
            </motion.p>
            <motion.p
              className="about-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              We believe in making technology accessible and efficient for everyone, and we work tirelessly to
              provide exceptional products and services that exceed expectations. Our expertise spans across
              web and mobile development, cloud solutions, AI & Machine Learning, and more.
            </motion.p>
          </div>

          <div className="col-md-6">
            <motion.img
              src={AboutImage}
              alt="TechNova Team"
              className="img-fluid rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Owner Section */}
        <div className="row mt-5">
          <div className="col-12">
            <motion.h3
              className="owner-heading text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Meet the Owner
            </motion.h3>
            <div className="d-flex justify-content-center mt-4">
              <motion.img
                src={Team1} // Replace with owner image
                alt="TechNova Owner"
                className="img-fluid rounded-circle owner-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            </div>
            <motion.p
              className="owner-text text-center mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              John Doe, the founder and CEO of TechNova, has over 15 years of experience in the tech industry.
              With a passion for innovation, he has led the company to become a leader in technology solutions,
              creating transformative products for businesses worldwide.
            </motion.p>
          </div>
        </div>

        {/* Features Section */}
        <div className="row mt-5">
          {[
            {
              icon: 'bi-gear-fill',
              title: 'Innovative Solutions',
              text: 'We bring new and innovative solutions that improve efficiency, scalability, and security.',
            },
            {
              icon: 'bi-lightbulb-fill',
              title: 'Creative Thinking',
              text: 'We apply creative thinking to solve problems, whether it’s a technical challenge or opportunity.',
            },
            {
              icon: 'bi-people-fill',
              title: 'Collaborative Teamwork',
              text: 'Our team collaborates closely with clients, using diverse skills to create the best solutions.',
            },
          ].map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              >
                <div className="feature-icon">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-text">{feature.text}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Meet the Team Section */}
        <div className="row mt-5">
          <div className="col-12">
            <motion.h3
              className="team-heading text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Meet the Team
            </motion.h3>
            <p className="text-center mb-4">
              The passionate people behind TechNova’s success.
            </p>
          </div>

          {[ 
            { name: "Vaibhav Dubey", role: "Lead Developer", img: Team1 },
            { name: "Priyanshi Chaudhary", role: "UI/UX Designer", img: Team2 },
            { name: "Sudhanshu Ojha", role: "Project Manager", img: Team3 }
          ].map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <motion.div
                className="team-card text-center p-4 shadow-sm rounded"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 * index }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-img rounded-circle mb-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <h5 className="team-name">{member.name}</h5>
                <p className="team-role text-muted">{member.role}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
