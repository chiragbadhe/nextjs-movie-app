import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-10">
      <div className="font-bold items-center justify-between flex text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/">
          <a className="text-base md:text-2xl">
            Movie&nbsp;
            <span className="text-red-600">App</span>
          </a>
        </Link>
        <div className="space-x-3">
          <Link href="/">
            <a className="border rounded-xl tracking-widest p-2 border-red-700 hover:bg-red-600 duration-300">
              home
            </a>
          </Link>
          <Link href="/contact">
            <a className="border rounded-xl tracking-widest p-2 border-red-700 hover:bg-red-600 duration-300 ">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
