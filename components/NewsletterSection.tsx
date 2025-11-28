"use client";
import { useState, FormEvent, ChangeEvent } from "react";

interface FormState {
  name: string;
  email: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  consent?: string;
}

const NewsletterSection = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    let newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address.";

    if (!form.consent)
      newErrors.consent = "You must agree to receive updates.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Subscribed successfully!");
  };

  return (
    <section className="w-full py-16 p-4 bg-white flex justify-center">
      <div
        className="
          w-full max-w-7xl mx-auto 
          bg-[#F6F7FB] rounded-2xl shadow-md 
          flex flex-col-reverse md:flex-row overflow-hidden
        "
      >
        {/* LEFT SECTION */}
        <div className="p-4 md:p-10 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
            Don’t miss the latest news <br /> from DENZA
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.
          </p>

          {/* FORM */}
          <form onSubmit={submitHandler} className="mt-8 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* NAME */}
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:border-black focus:outline-none
                  "
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  className="
                    w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:border-black focus:outline-none
                  "
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* CHECKBOX */}
            <div className="flex items-start gap-3 mt-2">
              <input
                name="consent"
                type="checkbox"
                checked={form.consent}
                onChange={handleChange}
                className="mt-1"
              />
              <p className="text-sm text-gray-600 leading-snug">
                I consent to my personal data being used to receive all relevant
                DENZA email updates. See our{" "}
                <span className="underline cursor-pointer">privacy policy</span>.
              </p>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-xs">{errors.consent}</p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className="
                mt-3 w-full md:w-40 px-6 py-3 rounded-lg 
                bg-black text-white font-medium 
                transition duration-300 ease-in-out
                hover:bg-gray-900 active:scale-95
              "
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-72 lg:h-full">
          <img
            src="/cars/news-car.jpg" // update image path
            alt="News Car"
            className="
              w-full h-full object-cover 
              rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
