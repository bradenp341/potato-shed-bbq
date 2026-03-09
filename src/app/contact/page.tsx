import type { Metadata } from "next";
import contactData from "../../../content/contact.json";

export const metadata: Metadata = {
  title: "Contact - Potato Shed BBQ",
  description: "Get in touch with Potato Shed BBQ. Located at 28229 Rochester Blvd, Randolph, MN 55065.",
};

export default function ContactPage() {
  const { email, address } = contactData;

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-stone-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>
          <p className="text-stone-400 mt-2">
            We&apos;d love to hear from you
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Email */}
          <div className="bg-stone-50 rounded-lg p-8">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-stone-900 mb-2">Email Us</h2>
            <p className="text-stone-500 mb-4">
              Questions, comments, or catering inquiries
            </p>
            <a
              href={`mailto:${email}`}
              className="text-red-700 hover:text-red-800 font-semibold transition-colors"
            >
              {email}
            </a>
          </div>

          {/* Location */}
          <div className="bg-stone-50 rounded-lg p-8">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-stone-900 mb-2">Visit Us</h2>
            <p className="text-stone-500 mb-4">Come by for the best BBQ around</p>
            <p className="text-stone-800 font-medium">
              {address.street}
              <br />
              {address.city}, {address.state} {address.zip}
            </p>
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-12 rounded-lg overflow-hidden border border-stone-200">
          <iframe
            title="Potato Shed BBQ Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.0!2d-93.0!3d44.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s28229+Rochester+Blvd+Randolph+MN+55065!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
