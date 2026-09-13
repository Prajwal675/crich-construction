import React from "react";
import { Check, Send } from "lucide-react";

type Props = {
  formData: {
    name: string;
    email: string;
    phone: string;
    urgency: string;
    message: string;
    acceptPolicy: boolean;
  };
  errors: Record<string, string>;
  isSubmitting: boolean;
  isSubmitted?: boolean;
  handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

const urgencyOptions = [
  "Immediately",
  "Within 1 month",
  "Within 3 months",
  "Just exploring options",
];

const ContactFormCard = ({
  formData,
  errors,
  isSubmitting,
  isSubmitted,
  handleChange,
  handleCheckboxChange,
  handleSubmit,
}: Props) => {
  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl w-full max-w-md flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="text-green-600" size={28} />
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 text-sm">
          Your message has been sent. We'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-xl w-full max-w-md"
    >
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="hero-name" className="block text-sm font-medium mb-1">Full Name*</label>
          <input
            id="hero-name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border rounded-md"
            placeholder="Your name"
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="hero-email" className="block text-sm font-medium mb-1">Email*</label>
          <input
            id="hero-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border rounded-md"
            placeholder="Your email"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="hero-phone" className="block text-sm font-medium mb-1">Phone*</label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border rounded-md"
            placeholder="Your phone number"
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="hero-urgency" className="block text-sm font-medium mb-1">
            Project Urgency
          </label>
          <select
            id="hero-urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border rounded-md"
          >
            {urgencyOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="hero-message" className="block text-sm font-medium mb-1">
            Your Message*
          </label>
          <textarea
            id="hero-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-gray-50 border rounded-md"
            placeholder="Tell us about your project"
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="hero-acceptPolicy"
            name="acceptPolicy"
            checked={formData.acceptPolicy}
            onChange={handleCheckboxChange}
            className="mt-1 mr-2"
          />
          <label htmlFor="hero-acceptPolicy" className="text-sm">
            I agree to the privacy policy
          </label>
        </div>
        {errors.acceptPolicy && <p className="text-xs text-red-500 -mt-2">{errors.acceptPolicy}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center"
        >
          <Send className="mr-2 h-4 w-4" />
          ENQUIRE NOW
        </button>
      </div>
    </form>
  );
};

export default ContactFormCard;
