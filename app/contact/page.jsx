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
        <section className="w-full bg-black pt-22 md:pt-24 pb-14 flex flex-col items-center gap-4 md:gap-8 md:flex-row px-6 md:px-40">
            <div className="relative w-full md:w-1/2">
                <span className="-top-5 absolute bg-[#CAF290] inline-block px-4 py-1 font-bold text-black rounded rotate-[-3deg] mb-4">
                CONTACT
                </span>

                <div className='flex flex-col items-start gap-2 md:gap-8'>
                    <h1 className='text-[70px] md:text-[120px] text-white font-extrabold flex flex-col items-start leading-12 md:leading-20 tracking-tight'>
                        <span>Let's</span>
                        <span>Work</span>
                        <span className="text-[#FFB3DB]">Together</span>
                    </h1>
                    {/* <button className='bg-[#CAF290] px-6 py-1 rounded-4xl text-black font-bold'>Let's Talk</button> */}
                    <p className="text-[#BBBBBB] text-[20px]">Are you looking for a digital partner to help with your digital strategy, UX, web presence or digital marketing activity?</p>
                    <div className="w-full text-[#BBBBBB]">
                        <a href="tel:9140251061" className="flex items-center gap-2 hover:text-[#caf290] hover:underline">
                            <Phone className="w-4 h-4 text-[#FFB3DB]" />
                            <span>9140251061</span>
                        </a>
                        <a href="mailto:hello@vashappening.in" className="flex items-center gap-2 hover:text-[#caf290] hover:underline">
                            <Mail className="w-4 h-4 text-[#FFB3DB]"/> 
                            <span>hello@vashappening.in</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 text-white">
                <span className="font-extrabold text-[32px]">GET IN TOUCH</span>
                <form onSubmit={handleSubmit} className="mt-2">

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
                            className="w-full px-2 py-1 text-[#caf290] bg-[#1A1A1A] border border-gray-600 rounded-xs focus:outline-none focus:ring-2 focus:ring-lime-400 text-[18px]"
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
                            className="w-full px-2 py-1 text-[#caf290] bg-[#1A1A1A] border border-gray-600 rounded-xs focus:outline-none focus:ring-2 focus:ring-lime-400 text-[18px]"
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
                            className="w-full px-2 py-1 text-[#caf290] bg-[#1A1A1A] border border-gray-600 rounded-xs focus:outline-none focus:ring-2 focus:ring-lime-400 text-[18px]"
                        />
                        </div>
                        <div>
                        <label className="block mb-1 text-[16px]">How did you hear about us?</label>
                        <select
                            name="hearAbout"
                            value={formData.hearAbout}
                            onChange={handleChange}
                            className="w-full px-2 py-1 text-[#caf290] bg-[#1A1A1A] border border-gray-600 rounded-xs focus:outline-none focus:ring-2 focus:ring-lime-400 text-[18px]"
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
                        className="w-full px-2 py-1 text-[#caf290] bg-[#1A1A1A] border border-gray-600 rounded-xs focus:outline-none focus:ring-2 focus:ring-lime-400 text-[18px]"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="mt-2 bg-[#CAF290] text-[#caf290] bg-[#1A1A1A] text-black font-bold px-6 py-2 rounded-full hover:bg-lime-500 transition"
                    >
                        SEND MESSAGE
                    </button>

                </form>
            </div>
        </section>
    )
}