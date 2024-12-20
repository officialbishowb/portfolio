import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 background p-4 sm:top-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:rounded-lg sm:bottom-auto border border-gray-500">
            <ul className="flex justify-center space-x-6">
                <li>
                    <Link href="/">
                        <p className="text-white hover:bg-gray-500">Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <p className="text-white hover:bg-gray-500">About</p>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <p className="text-white hover:bg-gray-500">Contact</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
