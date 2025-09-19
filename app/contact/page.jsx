"use client";
import { useState } from "react";
import { Phone, Mail } from "lucide-react";

export default function contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        hearAbout: "",
        message: "",
        subscribe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); // 🔹 Later replace with Email/Google Sheets API
        alert("Message sent!");
    };

    return (
        <section className="w-full bg-black pt-28 lg:pt-40 md:pt-24 pb-14 flex flex-col items-start gap-6 md:gap-8 md:flex-row px-8 md:px-28 lg:px-40">
            <div className="relative w-full md:w-1/2 lg:py-20">
                <span className="-top-6 lg:top-18 -left-4 absolute bg-[#CAF290] inline-block px-2 lg:px-4 py-1 md:py-2 font-bold text-black rounded rotate-[-15deg] mb-4">
                CONTACT
                </span>

                <div className='flex flex-col items-start gap-2 md:gap-8'>
                    <h1 className='text-[70px] md:text-[120px] text-white font-extrabold flex flex-col items-start leading-16 md:leading-28 tracking-tight'>
                        <span>Let's</span>
                        <span>Work</span>
                        <span className="text-[#FFB3DB]">Together</span>
                    </h1>
                    {/* <button className='bg-[#CAF290] px-6 py-1 rounded-4xl text-black font-bold'>Let's Talk</button> */}
                    <p className="text-[#BBBBBB] text-[20px]">Are you looking for a digital partner to help with your digital strategy, UX, web presence or digital marketing activity?</p>
                    <div className="w-full text-[#BBBBBB]">
                        <a href="tel:9140251061" className="flex items-center gap-2 hover:text-[#caf290] lg:text-2xl hover:underline">
                            <Phone className="text-[#FFB3DB]" />
                            <span>9140251061</span>
                        </a>
                        <a href="mailto:hello@vashappening.in" className="flex items-center gap-2 hover:text-[#caf290] lg:text-2xl hover:underline">
                            <Mail className="text-[#FFB3DB]"/> 
                            <span>hello@vashappening.in</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 text-white lg:py-20 lg:px-10">
                <span className="font-extrabold text-[32px] lg:text-5xl">GET IN TOUCH</span>
                <form onSubmit={handleSubmit} className="mt-2 md:mt-12">

                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                        <div>
                        <label className="block mb-1 text-[16px]">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-2 py-1 lg:py-2 caret-[#caf290] text-[#caf290] bg-[#1A1A1A] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-[18px]"
                        />
                        </div>
                        <div>
                        <label className="block mb-1 text-[16px]">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-2 py-1 lg:py-2 text-[#caf290] bg-[#1A1A1A] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-[18px]"
                        />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                        <div>
                        <label className="block mb-1 text-[16px]">Phone Number (Optional)</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-2 py-1 lg:py-2 text-[#caf290] bg-[#1A1A1A] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-[18px]"
                        />
                        </div>
                        <div>
                        <label className="block mb-1 text-[16px]">How did you hear about us?</label>
                        <select
                            name="hearAbout"
                            value={formData.hearAbout}
                            onChange={handleChange}
                            className="w-full px-2 py-1 lg:py-2 text-[#caf290] bg-[#1A1A1A] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-[18px]"
                        >
                            <option value="">Please Select</option>
                            <option value="google">Google</option>
                            <option value="friend">Friend</option>
                            <option value="social">Social Media</option>
                            <option value="other">Other</option>
                        </select>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mb-2">
                        <label className="block mb-1 text-[16px]">How can we help?</label>
                        <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-2 py-1 lg:py-2 text-[#caf290] bg-[#1A1A1A] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 text-[18px]"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="mt-2 lg:mt-6 bg-[#CAF290] text-[#caf290] bg-[#1A1A1A] text-black font-bold px-6 py-2 lg:px-8 lg:py-4 rounded-full hover:bg-lime-500 transition"
                    >
                        SEND MESSAGE
                    </button>

                </form>
            </div>
        </section>
    )
}