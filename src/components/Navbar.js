import React from 'react';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(true);
  return (
    <>
      <nav className="top-0 fixed px-2 flex justify-between inset-x-0 opacity-40 py-4 bg-gray-200">
        <div className="flex">
          <i class="fas fa-icons text-2xl text-blue-600  "></i>
          <div className="hidden lg:block text-lg font-bold leading-relaxed  px-2 whitespace-no-wrap uppercase ">
            site_name
          </div>
        </div>
        <div>
          <div className="">
            <i class="fas fa-bars text-2xl text-black "></i>
          </div>
        </div>
      </nav>
    </>
  );
}
