import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="sticky top-0 grid grid-cols-2 bg-white z-50">
      <Link href="/">
        <a>
          <Image
            src="/logos/named_logo.svg"
            alt="logo"
            width={200}
            height={100}
          />
        </a>
      </Link>
      <ul className="flex flex-row items-center justify-center space-x-3">
        <li className="group  relative dropdown  px-4   cursor-pointer font-bold text-base uppercase tracking-wide">
          <Link href="/products">
            <a className="hover:bg-gray-200 p-2 rounded-lg">Products</a>
          </Link>
          <div className="group-hover:block dropdown-menu absolute hidden h-auto">
            <ul className="top-5 w-48 bg-white shadow px-6 py-8">
              <li className="py-1">
                <a className="block  font-bold text-base uppercase hover:bg-gray-200 cursor-pointer">
                  Item
                </a>
              </li>
              <li className="py-1">
                <a className="block  font-bold text-base uppercase hover:bg-gray-200 cursor-pointer">
                  Item 2
                </a>
              </li>
              <li className="py-1">
                <a className="block  font-bold text-base uppercase hover:bg-gray-200 cursor-pointer">
                  Item 3
                </a>
              </li>
              <li className="py-1">
                <a className="block  font-bold text-base uppercase hover:bg-gray-200 cursor-pointer">
                  Item 4
                </a>
              </li>
              <li className="py-1">
                <a className="block  font-bold text-base uppercase hover:bg-gray-200 cursor-pointer">
                  Item 5
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/about">
            <a className="hover:bg-gray-200 p-2 rounded-lg">About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="hover:bg-gray-200 p-2 rounded-lg">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
