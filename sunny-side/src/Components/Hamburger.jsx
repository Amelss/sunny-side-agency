import React from 'react'

export default function Hamburger() {
  return (
    <div className='block lg:hidden'>
      <ul>
        <li className="ml-4 text-white font-barlow text-sm">About</li>
        <li className="ml-4 text-white font-barlow text-sm">Services</li>
        <li className="ml-4 text-white font-barlow text-sm">Projects</li>
        <li className="ml-8 font-fraunces bg-softYellow px-4 py-2 rounded-full uppercase text-xs">
          Contact
        </li>
      </ul>
    </div>
  );
}

