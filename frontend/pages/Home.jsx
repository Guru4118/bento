import React, { useTransition } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Homepage() {
useEffect(() => {
  AOS.init({
    duration: 2000,          // Duration of animation (in ms)
    offset: 120,             // Offset (in px) from the original trigger point
    delay: 100,              // Global delay before animation starts
    easing: 'ease-in-out',   // Easing function
    once: false,              // Whether animation should happen only once
    mirror: true,           // Whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // Defines which position of the element triggers the animation
  });
}, []);

  return (
    <div className="p-8 bg-gray-200 min-h-screen flex flex-col justify-center items-center ">
      <div className="grid grid-cols-4 grid-rows-6   gap-3 w-full">

        {/* ABS System */}
        <div className="bg-[url('/images/ip.jpg')] bg-cover bg-center w-full rounded row-span-2 shadow-md text-white font-bold p-3 text-3xl  hover:bg-gradient-to-bl from-black to-gray-400 hover:backdrop-blur-md "
        data-aos="zoom-out">
          <p>iPhone</p>
          <p>Surveillance</p>
          <p>Module</p>
        </div>

        {/* AI Monitored */}
        <div className="bg-white row-span-1 py-10 font-bold rounded flex flex-col justify-center items-center text-center"
        data-aos="zoom-in">
          <h2>AI-Enhanced</h2>
          <h2>Driving Assistant</h2>
        </div>

        {/* Row 1 Image */}
        <div className="bg-[url('/images/row1.jpg')] bg-cover row-span-3 rounded shadow-md" data-aos="zoom-in"></div>

        {/* Trust Panel */}
        <div className="bg-black rounded row-span-2 flex flex-col justify-center items-center text-white text-2xl font-semibold"
        data-aos="flip-left">
          <div data-aos="zoom-in"><h2>Precision</h2>
          <h2>Security</h2>
          <h2>Performance</h2>
          </div>
        </div>

        {/* Accessories */}
        <div className="bg-amber-300 rounded p-4 text-white font-bold hover:bg-red-500 hover:text-white hover:duration-300 "
       
        data-aos="flip-left"
         >
          <h1 className="text-xl">Upgrade Your Ride</h1>
          <p>With premium iPhone-compatible accessories</p>
        </div>

        {/* Main Gadget Panel */}
        <div className="bg-[url('/images/iphone.jpg')] row-span-2 col-span-2 bg-cover rounded text-white p-5 flex flex-col justify-end md:h-120 hover:blur-sm"
        data-aos="zoom-in">
          <h2 className="text-2xl font-semibold">Smart Integration</h2>
          <p>Connect your iPhone seamlessly with smart car gadgets</p>
        </div>

        {/* Gadgets */}
        <div className="bg-red-500 text-white font-semibold text-center flex justify-center items-center" data-aos="zoom-out">
          <div data-aos="zoom-out">
            <p>Wireless Mounts & Chargers</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white p-3 text-sm rounded shadow"
        data-aos="flip-up">
          <p>
            Discover advanced gadgets designed for your iPhone – from magnetic mounts and MagSafe accessories to intelligent driving companions with Siri integration.
          </p>
        </div>
        <div
          className="bg-[url('/images/last.jpg')] bg-cover rounded shadow-md"
         data-aos="flip-right"
         ></div>

         <div className="bg-[url('/images/n4.jpg')] bg-cover row-span-2 rounded"
         data-aos="flip-right"></div>
         <div className="bg-[url('/images/n2.jpg')] bg-cover"
         data-aos="zoom-in"></div>
         <div className="bg-[url('/images/n1.jpg')] col-span-2 row-span-2 bg-cover rounded "
         data-aos="zoom-out">


         </div>
         <div className="bg-red-500 text-white font-semibold text-center flex justify-center items-center" data-aos="zoom-out">
          <div data-aos="zoom-out">
            <p>Wireless Mounts & Chargers</p>
          </div>
        </div>

       

        
      </div>
     <div className='bg-gradient-to-b from-gray-200 to-gray-200 text-center px-8 py-16 text-black shadow-md rounded font-bold'>
  <h2 className="text-3xl font-bold mb-4">SmartDrive: Your iPhone-Powered Automotive Companion</h2>
  <p className="max-w-3xl mx-auto text-lg leading-relaxed">
    SmartDrive is a seamless fusion of AI and Apple technology, crafted to elevate your driving experience. 
    From real-time system diagnostics to intelligent gadget integrations, this platform enables your iPhone to 
    connect, monitor, and enhance your vehicle’s performance and safety.
  </p>
  <p className="max-w-full text-lg leading-relaxed mt-14">
    Explore features like AI-powered alerts, voice-assisted controls, wireless accessory compatibility, and 
    integrated dashboard visuals — all designed to bring precision, convenience, and innovation to your journey.
  </p>
</div>

       
      
    </div>
  );
}

export default Homepage;
