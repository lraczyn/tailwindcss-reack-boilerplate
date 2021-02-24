import React from 'react';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(true);
  return (
    <>
      <nav className="top-0 fixed px-2  justify-between inset-x-0 opacity-40 py-4 bg-gray-200 lg:flex">
        <div className="flex justify-between">
          <div className="flex">
            <i class="fas fa-icons text-2xl text-blue-600  "></i>
            <div className="hidden lg:block text-lg font-bold leading-relaxed  px-2 whitespace-no-wrap uppercase ">
              site_name
            </div>
          </div>
          <div>
            <button className="lg:hidden">
              <i
                class="fas fa-bars text-2xl text-black "
                onClick={() => {
                  setNavbarOpen(!navbarOpen);
                }}
              ></i>
            </button>
          </div>
        </div>
        <div className="">
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id="rollingMenu"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    'text-black lg:text-black hover:text-gray-600 px-2 py-2 lg:py-0 flex items-center text-xs uppercase font-bold'
                  }
                  href="#pablo"
                >
                  <i className={' far fa-id-card text-lg leading-lg '} />
                  <span className="inline-block ml-2">O mnie</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
