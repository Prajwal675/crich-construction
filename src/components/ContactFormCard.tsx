import React from "react";
import { Send } from "lucide-react";

type Props = {
  formData: any;
  errors: any;
  isSubmitting: boolean;
  handleChange: any;
  handleCheckboxChange: any;
  handleSubmit: any;
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
        <div>
          <label className="block text-sm font-medium mb-1">Full Name*</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border rounded-md"
            placeholder="Your name"
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email*</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border rounded-md"
            placeholder="Your email"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone*</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border rounded-md"
            placeholder="Your phone number"
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Project Urgency
          </label>
          <select
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
          <label className="block text-sm font-medium mb-1">
            Your Message*
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-gray-50 border rounded-md"
            placeholder="Tell us about your project"
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="acceptPolicy"
            checked={formData.acceptPolicy}
            onChange={handleCheckboxChange}
            className="mt-1 mr-2"
          />
          <span className="text-sm">
            I agree to the{" "}
            <a className="text-buildacre-blue underline">privacy policy</a>
          </span>
        </div>

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
