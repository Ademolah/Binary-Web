import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

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

    toast.promise(
      emailjs.send(
        'service_5xchz5i',
        'template_fklo04l',
        form,
        '5rER37I1dsORgSj8n'
      ),
      {
        loading: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Try again later.',
      }
    ).then(() => {
      setForm({
        from_name: '',
        from_email: '',
        subject: '',
        message: '',
      });
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
            </form>
          </div>

          {/* Contact Info + Google Map */}
          <div className="bg-[#F0F9FF] rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold text-[#00477B] mb-4">Our Contact Details</h3>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li><strong>📍 Office:</strong> Novare Gateway Mall, Abuja, Nigeria</li>
              <li><strong>📞 Phone:</strong> +234 903 833 0697</li>
              <li><strong>✉️ Email:</strong> info@hqinary.com</li>
              <li><strong>⏰ Hours:</strong> Mon–Fri, 9AM – 5PM</li>
            </ul>

            {/* Google Map Embed */}
            <div className="mt-8">
              <iframe
                title="Binary Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.833386727712!2d7.495080874776382!3d9.012224588468434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b6d4ef2dc9d%3A0x47808a458449681b!2sBaze%20University!5e0!3m2!1sen!2sng!4v1721489740439!5m2!1sen!2sng"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg w-full shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
