"use client";
import { useEffect } from 'react';

export default function SuccessPage() {
    useEffect(() => {
        // Delay for 2 seconds before redirecting
        setTimeout(() => {
            window.location.href = 'mylanguageaibou://checkout/success';
        }, 2000);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 text-green-800">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">✅ Payment Successful!</h1>
                <p>Redirecting you back to the app...</p>
            </div>
        </div>
    );
}