import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileWarning, setShowMobileWarning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Set up resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Initialize AOS
    AOS.init({
      duration: 1000,
      offset: 100,
      delay: 100,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Hide content when mobile warning is shown
  useEffect(() => {
    if (isMobile && showMobileWarning) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobile, showMobileWarning]);

  // Skip warning if not mobile
  useEffect(() => {
    if (!isMobile) {
      setShowMobileWarning(false);
    }
  }, [isMobile]);

  return (
    <div className="p-4 md:p-8 bg-white min-h-screen flex flex-col justify-center items-center">
      {/* Mobile Warning Overlay */}
      {isMobile && showMobileWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex flex-col justify-center items-center p-6">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold text-white mb-4">For Better Experience</h2>
            <p className="text-xl text-gray-200 mb-8">
              We recommend viewing this site on a desktop or tablet for the best experience.
            </p>
            <button
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-xl transform hover:scale-105 transition-transform duration-300"
              onClick={() => setShowMobileWarning(false)}
            >
              Continue to Mobile Site
            </button>
          </div>
        </div>
      )}

      {/* Mobile Responsive Navbar */}
      <div className="fixed top-0 bg-white left-0 w-full shadow-md font-bold z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 md:py-4 gap-4 md:gap-10">
          <div className="w-full md:w-auto flex justify-between items-center">
            <div className="text-xl font-extrabold tracking-wide">Y-NOT</div>
            <button 
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '×' : '☰'}
            </button>
          </div>
          
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 text-center w-full md:w-auto pb-4 md:pb-0`}>
            <p className="hover:font-extrabold hover:text-black hover:cursor-pointer transition">HOME</p>
            <p className="hover:font-extrabold hover:text-black hover:cursor-pointer transition">ABOUT</p>
            <p className="hover:font-extrabold hover:text-black hover:cursor-pointer transition">CONTACT</p>
          </div>
        </div>
      </div>

      {/* Rest of the content (only shown when warning is dismissed) */}
      {!showMobileWarning && (
        <>
          {/* First Grid - Made Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 pt-16 md:pt-12 gap-3 w-full shadow-2xl">
            {/* iPhone Surveillance Module */}
            <div
              className="bg-[url('/images/ip.jpg')] bg-cover bg-center w-full md:row-span-2 rounded shadow-md text-white font-bold p-3 text-3xl min-h-[250px] md:min-h-0 relative group"
              data-aos="zoom-out"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition duration-300 rounded flex flex-col justify-center items-center">
                <p className="text-white text-2xl font-bold">Smart Surveillance</p>
                <p className="text-white">Powered by your iPhone</p>
              </div>
              <p>iPhone</p>
              <p>Surveillance</p>
              <p>Module</p>
            </div>

            {/* AI-Enhanced Driving Assistant */}
            <div
              className="bg-white py-10 font-bold rounded flex flex-col justify-center items-center text-center hover:bg-gray-800 hover:text-white transition min-h-[150px] md:min-h-0"
              data-aos="zoom-in"
            >
              <h2>AI-Enhanced</h2>
              <h2>Driving Assistant</h2>
            </div>

            {/* Apple-Compatible Dash View */}
            <div
              className="bg-[url('/images/row1.jpg')] bg-cover rounded shadow-md min-h-[250px] md:min-h-0 relative group md:row-span-3"
              data-aos="zoom-in"
            >
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-80 transition duration-300 rounded flex items-center justify-center">
                <p className="text-white text-lg font-bold">Apple-Compatible Dash View</p>
              </div>
            </div>

            {/* Precision Security Performance */}
            <div
              className="bg-black rounded flex flex-col justify-center items-center text-white text-2xl font-semibold hover:bg-gray-900 min-h-[200px] md:min-h-0 md:row-span-2"
              data-aos="flip-left"
            >
              <div data-aos="zoom-in">
                <h2>Precision</h2>
                <h2>Security</h2>
                <h2>Performance</h2>
              </div>
            </div>

            {/* Upgrade Your Ride */}
            <div
              className="bg-amber-300 rounded p-4 text-black font-bold hover:bg-red-500 hover:text-white hover:duration-300 transition"
              data-aos="flip-left"
            >
              <h1 className="text-xl">Upgrade Your Ride</h1>
              <p>With premium iPhone-compatible accessories</p>
            </div>

            {/* Smart Integration */}
            <div
              className="bg-[url('/images/iphone.jpg')] bg-cover rounded text-white p-5 flex flex-col justify-end min-h-[300px] md:min-h-0 relative group md:row-span-2 md:col-span-2 h-104"
              data-aos="zoom-in"
            >
              <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 rounded"></div>
              <h2 className="text-2xl font-semibold z-10 relative">Smart Integration</h2>
              <p className="z-10 relative">Connect your iPhone seamlessly with smart car gadgets</p>
            </div>

            {/* Wireless Mounts & Chargers */}
            <div
              className="bg-red-500 text-white font-semibold text-center flex justify-center items-center min-h-[100px] md:min-h-0 relative group"
              data-aos="zoom-out"
            >
              <div className="group-hover:scale-105 transition duration-300">
                <p>Wireless Mounts & Chargers</p>
              </div>
            </div>

            {/* Discover Advanced Gadgets */}
            <div
              className="bg-white p-3 text-sm rounded shadow hover:bg-gray-800 hover:text-white transition min-h-[150px] md:min-h-0"
              data-aos="flip-up"
            >
              <p>
                Discover advanced gadgets designed for your iPhone – from magnetic mounts and MagSafe accessories to intelligent driving companions with Siri integration.
              </p>
            </div>

            {/* High-Quality Finish */}
            <div
              className="bg-[url('/images/last.jpg')] bg-cover rounded shadow-md min-h-[250px] md:min-h-0 relative group"
              data-aos="flip-right"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition duration-300 rounded flex items-center justify-center">
                <p className="text-white font-bold">High-Quality Finish</p>
              </div>
            </div>
          </div>

          {/* SmartDrive Section */}
          <div className="text-center px-4 py-12 md:px-8 md:py-16 text-black shadow-2xl rounded font-bold mt-6 w-full"
          data-aos="zoom-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">SmartDrive: Your iPhone-Powered Automotive Companion</h2>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              SmartDrive is a seamless fusion of AI and Apple technology, crafted to elevate your driving experience.
              From real-time system diagnostics to intelligent gadget integrations, this platform enables your iPhone to
              connect, monitor, and enhance your vehicle's performance and safety.
            </p>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-8 md:mt-14">
              Explore features like AI-powered alerts, voice-assisted controls, wireless accessory compatibility, and
              integrated dashboard visuals — all designed to bring precision, convenience, and innovation to your journey.
            </p>
          </div>

          {/* Second Grid - Made Responsive */}
          <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-4 md:grid-rows-2 pt-12 gap-3 w-full">
            <div className="bg-[url('/images/n4.jpg')] h-120 bg-cover rounded min-h-[250px] md:min-h-0 relative group md:row-span-2" data-aos="flip-right">
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center text-white font-bold text-xl rounded">
                AI Dash Mount
              </div>
            </div>

            <div className="bg-[url('/images/n2.jpg')] min-h-[200px] md:min-h-0 bg-cover relative group" data-aos="zoom-in">
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-90 transition duration-300 flex items-center justify-center text-white font-bold text-lg rounded">
                Next-Gen Driving Visuals
              </div>
            </div>

            <div className="bg-[url('/images/n1.jpg')] min-h-[300px] md:min-h-0 bg-cover rounded relative group md:col-span-2 md:row-span-2" data-aos="zoom-out">
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center text-white font-bold text-xl rounded">
                MagSafe Dash Panel
              </div>
            </div>

            <div className="bg-red-500 text-white font-semibold text-center flex justify-center items-center min-h-[100px] md:min-h-0" data-aos="zoom-out">
              <div>
                <p>Wireless Mounts & Chargers</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 text-center">
            <h2>All rights @ y-not</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;