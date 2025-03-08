import React from 'react';
import { FaFacebook, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-yel_light p-0 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto flex flex-col md:flex-row items-center gap-6"
      >
        <div className="flex flex-col w-full md:w-1/4 items-center gap-4">
          
          <h2 className='text-black text-1xl'>Follow us on</h2>
          <div className="text-2xl text-black flex gap-4 items-center">
            
            <Link to='https://www.facebook.com/IISCC'><FaFacebook className='hover:text-b0'/></Link>
            
            <FaLinkedin className='hover:text-b2'/>
          </div>
        </div>
        <div className="text-black flex flex-col w-full justify-center items-center md:w-1/4 gap-2 text-center md:text-left">
          <h2 className="font-bold text-lg">Contact Us</h2>
          <p className="flex items-center gap-2"><FaPhone /> 0212 228 060</p>
          <p className="flex items-center gap-2"><FaEnvelope /> Info@iis.edu.lk</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt /> No.655, Navalar Road, Nallur, Jaffna</p>
        </div>

        <div className="w-full md:w-2/4 p-3 md:p-5">
          <iframe
            title="IIS City Campus Location"
            src="https://maps.google.com/maps?q=Department%20of%20Computer%20Science,%20University%20of%20Jaffna&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>

        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;