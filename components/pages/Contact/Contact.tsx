"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import IconCloudDemo from "../../ui/globe";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
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
    setSubmitStatus("idle");

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "Portfolio Contact Form",
          embeds: [
            {
              title: "📩 New Contact Message",
              color: 3447003,
              fields: [
                {
                  name: "👤 Name",
                  value: data.name,
                  inline: true,
                },
                {
                  name: "📧 Email",
                  value: data.email,
                  inline: true,
                },
                {
                  name: "📌 Subject",
                  value: data.subject,
                },
                {
                  name: "💬 Message",
                  value: data.message,
                },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });

      if (!res.ok) {
        throw new Error("Webhook failed");
      }

      setSubmitStatus("success");
      reset();

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Discord Webhook Error:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 text-white">
      <div className="container mx-auto px-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <IconCloudDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl border border-gray-800 bg-blue-600/10"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email",
                  },
                })}
                placeholder="Email"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}

              <input
                {...register("subject", { required: "Subject is required" })}
                placeholder="Subject"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3"
              />

              <textarea
                rows={5}
                {...register("message", { required: "Message is required" })}
                placeholder="Message"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 resize-none"
              />

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 py-3 rounded-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={18} /> Message sent successfully
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-red-400">
                  <AlertCircle size={18} /> Failed to send message
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
