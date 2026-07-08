import React, { useState } from "react";

export type LeadFormData = {
  name: string;
  email: string;
  phone: string;
  urgency: string;
  message: string;
  acceptPolicy: boolean;
  website: string;
};

const initialFormData: LeadFormData = {
  name: "",
  email: "",
  phone: "",
  urgency: "Immediately",
  message: "",
  acceptPolicy: false,
  website: "",
};

const emailPattern = /\S+@\S+\.\S+/;

export function useLeadForm(source: string) {
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.acceptPolicy) {
      newErrors.acceptPolicy = "You must accept the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const resetSubmissionState = () => {
    setIsSubmitted(false);
    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        if (result?.errors) {
          setErrors(result.errors);
        }
        throw new Error(result?.error || "Failed to submit lead");
      }

      setFormData(initialFormData);
      setErrors({});
      setIsSubmitted(true);
      window.setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Lead submission failed:", error);
      setSubmitError("We could not send your enquiry. Please call us or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    submitError,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    resetSubmissionState,
  };
}
