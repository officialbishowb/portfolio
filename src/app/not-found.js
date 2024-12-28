import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="mt-4 text-xl text-gray-700">Oops! The page you are looking for does not exist.</p>
            <Link href="/" passHref>
                <p className="mt-6 px-4 py-2 bg-gray text-accent rounded hover:bg-accent hover:text-gray cursor-pointer">
                    Go to Home
                </p>
            </Link>
        </div>
    );
};

export default Custom404;
