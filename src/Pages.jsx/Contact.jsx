import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './Contact.css';
import ContactImage from '../assets/ContactImage.webp';
import { useAuth } from "../store/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: ""
  });

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || "",
        phone: user.phone || "",
        message: ""
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.phone || !formData.message) {
      toast.error("⚠️ Please fill out all fields.");
      return;
    }

    try {
      // Here you can send form data to backend if needed
      console.log("Form submitted with data:", formData);

      // Show success toast
      toast.success("📩 Message sent successfully!");

      setFormData({
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast.error("🚨 Something went wrong. Try again later.");
    }
  };

  return (
    <div className="contact-page">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="contact-image-column">
            <img src={ContactImage} alt="Contact" className="img-fluid" />
          </Col>

          <Col md={6}>
            <div className="contact-form">
              <h2 className="text-center mb-4">Contact Us</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mt-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mt-3" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mt-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Button className="mt-3 w-100" variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default Contact;
