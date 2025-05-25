// import React from 'react'
// import './service-details.scss';
// import Image from 'next/image';

// export default function serviceDetailsFormQuote() {
//   return (
//     <div className='service-form-quote'>
//         <div className='quote-form-grid'>
//             <Image src="https://res.cloudinary.com/dbz6ebekj/image/upload/v1747725562/PCL_-Edmonton_Office_-_July_14_2016-5_xv5l0g.jpg" width={100} height={100} alt="Image" />
//             <div className='quote-form-content'>
//                 <h4>Get A Quote</h4>
//                 <div className='inputs-group'>
//                     <div className='input-group'>
//                         <input placeholder='Enter Your Name'/>
//                         <input placeholder='Enter Your Email'/>
//                     </div>
//                 </div>

//                 <textarea placeholder='Enter Your Message'></textarea>

// <button>Send</button>
//             </div>
//         </div>
//     </div>
//   )
// }


// components/ServiceDetailsQuote.tsx
"use client";

import React from 'react';
import './service-details.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaUser, FaPaperclip } from 'react-icons/fa';

export default function ServiceDetailsQuote() {
  return (
    <div className="service-form-quote">
      <div className="quote-form-container">
        {/* Left: Image with overlay */}
        <motion.div 
          className="quote-form-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://res.cloudinary.com/dbz6ebekj/image/upload/v1747725562/PCL_-Edmonton_Office_-_July_14_2016-5_xv5l0g.jpg"
            alt="Project Preview"
            fill
            className="quote-image"
          />
          <div className="image-overlay">
            <motion.h3
              style={{}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Plan Your Dream Project
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Let us know what you're looking for. Our team is ready to assist you.
            </motion.p>
          </div>
        </motion.div>

        {/* Right: Form Content */}
        <motion.div 
          className="quote-form-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="form-header">
            <h4>Request a Quote</h4>
            <p>We will get back to you within 24 hours.</p>
          </div>

          <form className="quote-form">
            <div className="form-group">
              <div className="input-wrapper">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="input-wrapper">
                <div className="input-icon">
                  <FaEnvelope />
                </div>
                <input type="email" placeholder="Your Email" required />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <div className="input-icon">
                  <FaPhone />
                </div>
                <input type="tel" placeholder="Your Phone" required />
              </div>
              <div className="input-wrapper file-upload-wrapper">
                <div className="input-icon">
                  <FaPaperclip />
                </div>
                <label htmlFor="file-upload" className="custom-file-upload">
                  <span>Upload Image (Optional)</span>
                  <input 
                    type="file" 
                    id="file-upload" 
                    accept="image/*"
                  />
                </label>
              </div>
            </div>

            <div className="input-wrapper message-wrapper">
              <textarea placeholder="Your Message" required></textarea>
            </div>

            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
