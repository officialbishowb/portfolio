'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/#contact');
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="form-success bg-accent-color border border-gray text-foreground px-4 py-3 rounded relative flex items-center justify-center min-h-screen" role="alert">
            <div className="text-center">
                <h1 className="font-bold text-xl mb-2">Form Submitted Successfully!</h1>
                <p className="text-base">Thank you for your submission. We will get back to you soon.</p>
            </div>
        </div>
    );
};

export default Page;