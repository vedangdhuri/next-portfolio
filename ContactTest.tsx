"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import IconCloudDemo from "@/components/ui/globe";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactTest = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setSubmitStatus("success");
    reset();

    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 text-white bg-[#020617] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I’d love to hear from
            you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Icon Cloud */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md h-26.25">
              <IconCloudDemo />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#020617]/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className={`w-full bg-[#020617] border ${
                      errors.name ? "border-red-500" : "border-white/10"
                    } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full bg-[#020617] border ${
                      errors.email ? "border-red-500" : "border-white/10"
                    } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Subject</label>
                <input
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  className={`w-full bg-[#020617] border ${
                    errors.subject ? "border-red-500" : "border-white/10"
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  rows={5}
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className={`w-full bg-[#020617] border ${
                    errors.message ? "border-red-500" : "border-white/10"
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {/* Success */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/40 rounded-lg flex items-center gap-3 text-green-400"
                >
                  <CheckCircle size={20} />
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactTest;
