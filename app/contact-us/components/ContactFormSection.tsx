"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  country: string;
  postalCode: string;
  subject: string;
  question: string;
  agreeTerms: boolean;
  newsletter: boolean;
}

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    reset();
  };

  const inputClass =
    "w-full bg-white/10 border border-white/25 px-4 py-3 rounded-xl text-white focus:border-white focus:bg-white/20 transition duration-300 outline-none placeholder-white/60";

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/denza-bg.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* FORM WRAPPER */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-20">
        
        <div className="w-full rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 md:p-12 text-white">

          <h1 className="text-3xl md:text-4xl font-semibold mb-8">
            Contact us for more information
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* NAME */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm">First Name*</label>
                <input
                  {...register("firstName", { required: "First name is required" })}
                  placeholder="Please enter"
                  className={inputClass}
                />
                {errors.firstName && <p className="text-red-300 text-xs">{errors.firstName.message}</p>}
              </div>

              <div>
                <label className="text-sm">Last Name*</label>
                <input
                  {...register("lastName", { required: "Last name is required" })}
                  placeholder="Please enter"
                  className={inputClass}
                />
                {errors.lastName && <p className="text-red-300 text-xs">{errors.lastName.message}</p>}
              </div>
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm">Email*</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email",
                    },
                  })}
                  placeholder="Please enter"
                  className={inputClass}
                />
                {errors.email && <p className="text-red-300 text-xs">{errors.email.message}</p>}
              </div>

              <div>
                <label className="text-sm">Cell phone*</label>
                <div className="flex gap-3">
                  <select {...register("phoneCode")} className={`${inputClass} w-24`}>
                    <option value="+55">+55</option>
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                  </select>

                  <input
                    {...register("phoneNumber", { required: "Phone number required" })}
                    placeholder="Please enter"
                    className={`${inputClass} flex-1`}
                  />
                </div>
                {errors.phoneNumber && <p className="text-red-300 text-xs">{errors.phoneNumber.message}</p>}
              </div>
            </div>

            {/* COUNTRY + POSTAL */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm">Country*</label>
                <select
                  {...register("country", { required: "Country is required" })}
                  className={inputClass}
                >
                  <option value="">Please select</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Brazil">Brazil</option>
                </select>
                {errors.country && <p className="text-red-300 text-xs">{errors.country.message}</p>}
              </div>

              <div>
                <label className="text-sm">Postal Code*</label>
                <input
                  {...register("postalCode", { required: "Postal code required" })}
                  placeholder="Please enter"
                  className={inputClass}
                />
                {errors.postalCode && <p className="text-red-300 text-xs">{errors.postalCode.message}</p>}
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <label className="text-sm">Subject*</label>
              <select
                {...register("subject", { required: "Subject is required" })}
                className={inputClass}
              >
                <option value="">Please select</option>
                <option value="Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Dealership">Dealership</option>
              </select>
              {errors.subject && <p className="text-red-300 text-xs">{errors.subject.message}</p>}
            </div>

            {/* QUESTION */}
            <div>
              <label className="text-sm">Question</label>
              <textarea
                {...register("question")}
                placeholder="Please enter"
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* CHECKBOXES */}
            <div className="space-y-3 text-sm text-white/80">
              <label className="flex gap-2">
                <input type="checkbox" {...register("agreeTerms", { required: true })} />
                <span>I agree to the Terms of Use and Privacy Policy.</span>
              </label>
              {errors.agreeTerms && <p className="text-red-300 text-xs">You must agree to continue.</p>}

              <label className="flex gap-2">
                <input type="checkbox" {...register("newsletter")} />
                <span>Subscribe to DENZA newsletter.</span>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-white text-black font-medium shadow-lg hover:bg-gray-200 active:scale-95 transition"
            >
              Submit
            </button>

            {submitted && <p className="text-green-400 text-sm">Submitted successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
