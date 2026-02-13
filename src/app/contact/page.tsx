"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Contact Us</h1>
        <p className="mt-6 text-xl text-gray-600">
          Get in touch to start your payment journey. Our team will help you get set up.
        </p>

        {submitted ? (
          <div className="mt-12 rounded-lg bg-green-50 p-8 text-center">
            <p className="text-lg font-medium text-green-800">Thank you for reaching out!</p>
            <p className="mt-2 text-green-700">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-900">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
