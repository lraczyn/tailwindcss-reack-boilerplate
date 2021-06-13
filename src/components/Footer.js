import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: '80px', transform: 'translateZ(0)' }}
        ></div>
        <div className="container mx-auto px-4">
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                It's just my portfolio website created in{' '}
                {new Date().getFullYear()}{' '}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
