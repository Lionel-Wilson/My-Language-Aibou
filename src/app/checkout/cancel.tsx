import Link from 'next/link';

export default function CancelPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 text-red-800">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">❌ Payment Cancelled</h1>
                <p className="mb-6">You cancelled the checkout. Want to try again?</p>
                <Link href="/" className="bg-red-600 text-white px-6 py-2 rounded">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}