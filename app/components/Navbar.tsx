import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="link text-gray-700 hover:text-blue-500 transition-all duration-300" 
            >
              Home
            </Link>
            <Link
              href="/about"
              className="link text-gray-700 hover:text-blue-500 transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/research"
              className="link text-gray-700 hover:text-blue-500 transition-all duration-300"
            >
              Research
            </Link>
            <Link
              href="/apps"
              className="link text-gray-700 hover:text-blue-500 transition-all duration-300"
            >
              Apps
            </Link>
            <Link
              href="/contact"
              className="link text-gray-700 hover:text-blue-500 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;