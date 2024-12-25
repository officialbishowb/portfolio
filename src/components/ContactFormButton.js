'use client';
import React from 'react';
import { CiLocationArrow1 } from "react-icons/ci";

const ContactFormButton = () => {
    const submitForm = async () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const response = document.getElementById('response');
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
           response.innerHTML = '<p class="text-md text-green-500" id="message">Form successfully submitted</p>';
        })
        .catch(error => {
            response.innerHTML = `<p class="text-md text-red-500" id="message">Error submitting form: ${error}</p>`;
        });

    
    };

    return (
        <button onClick={submitForm} className="flex items-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" style={{ background: "var(--accent-color)", borderRadius: "var(--border-radius)" }}>
            Send
            <CiLocationArrow1 className="ml-2 text-xl cursor-pointer" />
        </button>
    );
};

export default ContactFormButton;