import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-500 p-7">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="tracking-wider text-white text-xl font-semibold"
            >
              My Website
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="tracking-wider text-white hover:text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="tracking-wider text-white hover:text-gray-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="tracking-wider text-white hover:text-gray-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="tracking-wider text-white hover:text-gray-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
