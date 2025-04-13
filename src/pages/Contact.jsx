import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea rows="4" className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Locations</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Headquarters</h3>
              <p>123 AI Avenue, Tech City</p>
              <p>San Francisco, CA 94107</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>contact@anaisys.ai</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+1 (800) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;