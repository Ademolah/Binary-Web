import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.from_name.trim()) newErrors.from_name = 'Name is required';
    if (!form.from_email.trim()) {
      newErrors.from_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.from_email)) {
      newErrors.from_email = 'Email is invalid';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    emailjs.send(
      'service_5xchz5i',
      'template_fklo04l',
      form,
      '5rER37I1dsORgSj8n'
    ).then(() => {
      setStatus('Message sent successfully!');
      setForm({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
      });
    }).catch(() => {
      setStatus('Failed to send message. Try again later.');
    });
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-[#00477B] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg">
            Let’s start something great. Reach out to us for partnerships, product inquiries, or to request a proposal.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#00477B] mb-4">Send us a Message</h2>
            <form onSubmit={sendEmail} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
                />
                {errors.from_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.from_name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
                />
                {errors.from_email && (
                  <p className="text-red-500 text-sm mt-1">{errors.from_email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-[#00477B] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#00325a] transition-all"
              >
                Send Message
              </button>

              {/* Status Message */}
              {status && (
                <p className="text-green-600 font-medium mt-2">{status}</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#F0F9FF] rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold text-[#00477B] mb-4">Our Contact Details</h3>
            <ul className="space-y-4 text-gray-700">
              <li><strong>📍 Office:</strong> Abuja, Nigeria</li>
              <li><strong>📞 Phone:</strong> +234 800 000 0000</li>
              <li><strong>✉️ Email:</strong> contact@binarysoft.tech</li>
              <li><strong>⏰ Hours:</strong> Mon–Fri, 9AM – 5PM</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
