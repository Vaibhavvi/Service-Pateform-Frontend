import React from 'react';
import {
  FaRocket,
  FaTools,
  FaLaptopCode,
  FaAndroid,
  FaBrain,
  FaCogs,
} from 'react-icons/fa';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import HomeImage from '../assets/HomeImage.jpg';
import { useAuth } from '../store/auth';

const Home = () => {
  const { userData, isLogged } = useAuth();
  const navigate = useNavigate();

  if (!isLogged) {
    return (
      <section className="home-section container-fluid py-5 text-center bg-light">
        <h2 className="text-primary">Welcome to TechNova!</h2>
        <h3 className="text-secondary">
          Please Login if you are already Registered & Sign Up if it's your first time.
        </h3>
        <p className="text-muted">
          Sign up or log in to explore our innovative solutions for a smarter tomorrow.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="info" className="mt-4" onClick={() => navigate('/login')}>
            Log In
          </Button>
          <Button
            variant="danger"
            className="mt-4 text-black"
            onClick={() =>
              navigate('/signup', {
                state: { welcomeMessage: 'Hey! Welcome to the Register Page' },
              })
            }
          >
            Sign Up
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="home-section container-fluid py-5 bg-white">
      <div className="row justify-content-center align-items-center">
        {/* Hero Section */}
        <div className="col-md-6 text-center mb-5 mb-md-0">
          <motion.h1
            className="hero-text text-primary"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
          >
            Hey {userData.username}, Welcome to TechNova
          </motion.h1>
          <motion.p
            className="hero-subtext text-muted"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Innovating solutions for a smarter tomorrow.
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="col-md-6">
          <div className="image-hover-wrapper">
            <img
              src={HomeImage}
              alt="Tech"
              className="img-fluid rounded-lg shadow-lg image-hover"
            />
            <div className="image-overlay">
              <h2 className="overlay-text">TechNova</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="row text-center my-5">
        <Col lg={4} md={6} sm={12} className="mb-4">
          <motion.div
            className="animated-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow border-0">
              <Card.Body>
                <h2 className="text-primary">500+</h2>
                <Card.Text className="text-muted">Registered Users</Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        <Col lg={4} md={6} sm={12} className="mb-4">
          <motion.div
            className="animated-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow border-0">
              <Card.Body>
                <h2 className="text-success">100+</h2>
                <Card.Text className="text-muted">Projects Completed</Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        <Col lg={4} md={6} sm={12} className="mb-4">
          <motion.div
            className="animated-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="shadow border-0">
              <Card.Body>
                <h2 className="text-info">AI Powered</h2>
                <Card.Text className="text-muted">By TechNova 🤖</Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </div>

      {/* Feature Cards Section */}
      <div className="row mt-5">
        {/* 1. Rocket Science */}
        <Col lg={4} md={6} sm={12} className="mb-4">
          <motion.div
            className="animated-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-sm">
              <Card.Body>
                <FaRocket size={40} color="#0d6efd" />
                <Card.Title className="mt-3 text-primary">Rocket Science</Card.Title>
                <Card.Text className="text-muted">
                  Explore cutting-edge rocket technology that pushes innovation beyond limits.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* 2. Engineering */}
        <Col lg={4} md={6} sm={12} className="mb-4">
          <motion.div
            className="animated-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-sm">
              <Card.Body>
                <FaTools size={40} color="#198754" />
                <Card.Title className="mt-3 text-success">Engineering Excellence</Card.Title>
                <Card.Text className="text-muted">
                  World-class engineering solutions that solve real problems.
                </Card.Text>
                <Button variant="success">Discover</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* 3. Web Dev */}
        <Col lg={4} md={6} sm={12} className="mb-4">
          <motion.div
            className="animated-card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-sm">
              <Card.Body>
                <FaLaptopCode size={40} color="#6610f2" />
                <Card.Title className="mt-3 text-info">Web Development</Card.Title>
                <Card.Text className="text-muted">
                  Build sleek, responsive, high-performance websites and apps.
                </Card.Text>
                <Button variant="info">Get Started</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* 4. Android Dev */}
        <Col lg={4} md={6} sm={12} className="mb-4">
          <motion.div
            className="animated-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card className="shadow-sm">
              <Card.Body>
                <FaAndroid size={40} color="#3ddc84" />
                <Card.Title className="mt-3 text-success">Android Development</Card.Title>
                <Card.Text className="text-muted">
                  Native Android apps with beautiful UI and great performance.
                </Card.Text>
                <Button variant="success">Explore</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* 5. Machine Learning */}
        <Col lg={4} md={6} sm={12} className="mb-4">
          <motion.div
            className="animated-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-sm">
              <Card.Body>
                <FaBrain size={40} color="#fd7e14" />
                <Card.Title className="mt-3 text-warning">Machine Learning</Card.Title>
                <Card.Text className="text-muted">
                  Predict, automate, and solve complex tasks with intelligent models.
                </Card.Text>
                <Button variant="warning">Start Now</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* 6. Best Solution */}
        <Col lg={4} md={6} sm={12} className="mb-4">
          <motion.div
            className="animated-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="shadow-sm">
              <Card.Body>
                <FaCogs size={40} color="#20c997" />
                <Card.Title className="mt-3 text-success">Best Solution</Card.Title>
                <Card.Text className="text-muted">
                  Custom software and support tailored to your exact business needs.
                </Card.Text>
                <Button variant="success">Let’s Talk</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </div>

      {/* Scroll to Top Button */}
      <div className="text-center mt-5">
        <Button variant="outline-primary" onClick={() => window.scrollTo(0, 0)}>
          Back to Top
        </Button>
      </div>
    </section>
  );
};

export default Home;
