'use client';
import React from 'react';
import { CiLocationArrow1 } from "react-icons/ci";

const ContactFormButton = () => {
    const submitForm = async (event) => {
        event.preventDefault(); // Prevent default form submission
    
        const form = event.target; // Get the form element
        const response = document.getElementById('response');
    
        try {
            // Serialize form data
            const formData = new FormData(form);
    
            // Send to Netlify
            const res = await fetch('/', {
                method: 'POST',
                body: new URLSearchParams(formData).toString(),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });
    
            if (res.ok) {
                response.innerHTML = `<p class="text-md text-green-500" id="message">Form submitted successfully!</p>`;
                form.reset(); 
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            response.innerHTML = `<p class="text-md text-red-500" id="message">Error submitting form: ${error}</p>`;
        }
    
        setTimeout(() => {
            response.innerHTML = '';
        }, 5000);
    };
    

    return (
        <button
        className="flex items-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        style={{ background: "var(--accent-color)", borderRadius: "var(--border-radius)" }}
    >
        Send
        <CiLocationArrow1 className="ml-2 text-xl cursor-pointer" />
    </button>
    
    );
};

export default ContactFormButton;