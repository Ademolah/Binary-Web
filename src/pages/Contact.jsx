import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

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
    <section className="max-w-2xl mx-auto px-6 py-16 text-gray-800">
      <h2 className="text-4xl font-bold text-[#00477B] mb-6">Contact Us</h2>
      <p className="mb-10 text-gray-700">Let’s collaborate or discuss how Binary can help your organization.</p>

      <form onSubmit={sendEmail} className="space-y-6">
        <input
          type="text"
          name="from_name"
          value={form.from_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
        />

        <input
          type="email"
          name="from_email"
          value={form.from_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
        />

        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#50D6FE]"
        ></textarea>

        <button
          type="submit"
          className="bg-[#00477B] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#00325a] transition-all"
        >
          Send Message
        </button>

        {status && (
          <p className="text-green-600 font-medium mt-2">{status}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
