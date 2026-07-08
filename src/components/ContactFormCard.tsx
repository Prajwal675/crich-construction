import React from "react";
import { Send } from "lucide-react";
import type { LeadFormData } from "../hooks/useLeadForm";

type Props = {
  formData: LeadFormData;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  submitError: string;
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
  submitError,
  handleChange,
  handleCheckboxChange,
  handleSubmit,
}: Props) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-xl w-full max-w-md"
    >
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="hero-name" className="block text-sm font-medium mb-1">Full Name*</label>
          <input
            id="hero-name"
            type="text"
            name="name"
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
            type="email"
            name="email"
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
            type="tel"
            name="phone"
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

        <div>
          <div className="flex items-start">
            <input
              id="hero-acceptPolicy"
              type="checkbox"
              name="acceptPolicy"
              checked={formData.acceptPolicy}
              onChange={handleCheckboxChange}
              className="mt-1 mr-2"
            />
            <label htmlFor="hero-acceptPolicy" className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-buildacre-blue underline">privacy policy</a>
            </label>
          </div>
          {errors.acceptPolicy && <p className="text-xs text-red-500">{errors.acceptPolicy}</p>}
        </div>

        {isSubmitted && (
          <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
            Thank you. Your enquiry has been sent.
          </p>
        )}

        {submitError && (
          <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            {submitError}
          </p>
        )}

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
