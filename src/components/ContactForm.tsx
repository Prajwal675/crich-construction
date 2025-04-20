import React, { useState } from 'react';
import { Check, Send, Phone, Mail, MapPin } from 'lucide-react';

const urgencyOptions = [
  "Immediately",
  "Within 1 month",
  "Within 3 months",
  "Just exploring options"
];

// Replace this URL with your Google Apps Script deployment URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz2xEVA20vRbAeNlNEkzZLhMUoX22mFhmqlGyiXBU5lH5zqIxdpH-2L38GTjkIdWDk/exec'; // Replace this with the URL you copied

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    urgency: 'Immediately',
    message: '',
    acceptPolicy: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.acceptPolicy) {
      newErrors.acceptPolicy = 'You must accept the privacy policy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            urgency: formData.urgency,
            message: formData.message
          })
        });

        // If we reach here, assume success since no-cors won't give us response details
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          urgency: 'Immediately',
          message: '',
          acceptPolicy: false
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-buildacre-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:container-padding">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="mb-4">Let's Discuss Your Project</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below, and our team will get back to you within 24 hours to discuss your construction needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-buildacre-blue/95 text-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8 text-white/80">We're here to help with any questions about your construction project.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-4 mt-1 text-buildacre-orange" />
                  <div>
                    <p className="font-medium">Call us</p>
                    <a href="tel:+919876543210" className="text-white/80 hover:text-white">+91 98765 43210</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-4 mt-1 text-buildacre-orange" />
                  <div>
                    <p className="font-medium">Email us</p>
                    <a href="mailto:info@crichconstructions.com" className="text-white/80 hover:text-white">info@crichconstructions.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-4 mt-1 text-buildacre-orange" />
                  <div>
                    <p className="font-medium">Visit us</p>
                    <p className="text-white/80">123 Construction Way, Building District, City - 400001</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="font-medium mb-4">Connect with us</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">Thank You!</h3>
                <p className="text-green-700 mb-6">
                  Your message has been successfully sent. We'll get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="flex flex-col gap-5">
                  <div className="w-full">
                    <label htmlFor="name" className="block text-base font-medium mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 bg-gray-50 border rounded-md focus:ring-2 focus:ring-buildacre-blue focus:outline-none text-base ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                  </div>

                  <div className="w-full">
                    <label htmlFor="email" className="block text-base font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 bg-gray-50 border rounded-md focus:ring-2 focus:ring-buildacre-blue focus:outline-none text-base ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Your email"
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div className="w-full">
                    <label htmlFor="phone" className="block text-base font-medium mb-2">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 bg-gray-50 border rounded-md focus:ring-2 focus:ring-buildacre-blue focus:outline-none text-base ${
                        errors.phone ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Your phone number"
                    />
                    {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
                  </div>

                  <div className="w-full">
                    <label htmlFor="urgency" className="block text-base font-medium mb-2">
                      Project Urgency
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-buildacre-blue focus:outline-none text-base appearance-none"
                    >
                      {urgencyOptions.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full">
                    <label htmlFor="message" className="block text-base font-medium mb-2">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full p-4 bg-gray-50 border rounded-md focus:ring-2 focus:ring-buildacre-blue focus:outline-none text-base ${
                        errors.message ? 'border-red-500' : 'border-gray-200'
                      }`}
                      placeholder="Tell us about your project"
                    ></textarea>
                    {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                  </div>

                  <div className="w-full">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="acceptPolicy"
                        name="acceptPolicy"
                        checked={formData.acceptPolicy}
                        onChange={handleCheckboxChange}
                        className="mt-1 h-5 w-5 text-buildacre-blue rounded focus:ring-buildacre-blue"
                      />
                      <label htmlFor="acceptPolicy" className="ml-3 text-sm">
                        I agree to the{" "}
                        <a href="#" className="text-buildacre-blue hover:underline">
                          privacy policy
                        </a>{" "}
                        and consent to having my data processed.
                      </label>
                    </div>
                    {errors.acceptPolicy && (
                      <p className="mt-1 text-red-500 text-sm">{errors.acceptPolicy}</p>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 btn-primary flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        TALK TO OUR EXPERT
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
