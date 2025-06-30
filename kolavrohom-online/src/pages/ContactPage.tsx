import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:kolavrohom@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCallUs = () => {
    window.location.href = 'tel:+17188776485';
  };

  const handleEmailUs = () => {
    window.location.href = 'mailto:kolavrohom@gmail.com';
  };

  const handleChatWithUs = () => {
    window.open('https://wa.me/17188776485', '_blank');
  };

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#e8ddd4',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#6b5b5b',
          margin: '0'
        }}>
          Contact Us
        </h1>
      </div>

      {/* Contact Form */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#d4c4b0',
        borderRadius: '20px',
        padding: '40px',
        marginBottom: '40px'
      }}>
        <form onSubmit={handleSubmit}>
          {/* Name and Email Row */}
          <div style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '20px'
          }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                flex: 1,
                padding: '15px',
                border: 'none',
                borderRadius: '10px',
                backgroundColor: '#c8b8a4',
                fontSize: '16px',
                color: '#6b5b5b'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                flex: 1,
                padding: '15px',
                border: 'none',
                borderRadius: '10px',
                backgroundColor: '#c8b8a4',
                fontSize: '16px',
                color: '#6b5b5b'
              }}
            />
          </div>

          {/* Subject */}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '15px',
                border: 'none',
                borderRadius: '10px',
                backgroundColor: '#c8b8a4',
                fontSize: '16px',
                color: '#6b5b5b',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: '30px' }}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={8}
              style={{
                width: '100%',
                padding: '15px',
                border: 'none',
                borderRadius: '10px',
                backgroundColor: '#c8b8a4',
                fontSize: '16px',
                color: '#6b5b5b',
                boxSizing: 'border-box',
                resize: 'vertical',
                fontFamily: 'Arial, sans-serif'
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: '15px 30px',
              backgroundColor: 'transparent',
              border: '2px solid #6b5b5b',
              borderRadius: '10px',
              fontSize: '16px',
              color: '#6b5b5b',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Action Buttons */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        gap: '20px',
        justifyContent: 'center'
      }}>
        {/* Call Us */}
        <button
          onClick={handleCallUs}
          style={{
            flex: 1,
            maxWidth: '200px',
            padding: '30px 20px',
            backgroundColor: '#d4c4b0',
            border: 'none',
            borderRadius: '15px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <div style={{
            fontSize: '24px',
            color: '#6b5b5b'
          }}>
            📞
          </div>
          <span style={{
            fontSize: '16px',
            color: '#6b5b5b',
            fontWeight: 'bold'
          }}>
            Call Us
          </span>
        </button>

        {/* Email Us */}
        <button
          onClick={handleEmailUs}
          style={{
            flex: 1,
            maxWidth: '200px',
            padding: '30px 20px',
            backgroundColor: '#d4c4b0',
            border: 'none',
            borderRadius: '15px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <div style={{
            fontSize: '24px',
            color: '#6b5b5b'
          }}>
            ✉️
          </div>
          <span style={{
            fontSize: '16px',
            color: '#6b5b5b',
            fontWeight: 'bold'
          }}>
            Email Us
          </span>
        </button>

        {/* Chat with Us */}
        <button
          onClick={handleChatWithUs}
          style={{
            flex: 1,
            maxWidth: '200px',
            padding: '30px 20px',
            backgroundColor: '#d4c4b0',
            border: 'none',
            borderRadius: '15px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <div style={{
            fontSize: '24px',
            color: '#6b5b5b'
          }}>
            💬
          </div>
          <span style={{
            fontSize: '16px',
            color: '#6b5b5b',
            fontWeight: 'bold'
          }}>
            Chat with Us
          </span>
        </button>
      </div>
    </main>
  );
};

export default ContactPage;