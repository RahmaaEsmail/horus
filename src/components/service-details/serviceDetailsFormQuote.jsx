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

export default function ServiceDetailsQuote() {
  return (
    <div className="service-form-quote">
      <div className="quote-form-container">
        {/* Left: Image with overlay */}
        <div className="quote-form-image">
          <Image
            src="https://res.cloudinary.com/dbz6ebekj/image/upload/v1747725562/PCL_-Edmonton_Office_-_July_14_2016-5_xv5l0g.jpg"
            alt="Project Preview"
            fill
            className="quote-image"
          />
          <div className="image-overlay">
            <h3>Plan Your Dream Project</h3>
            <p>Let us know what you're looking for. Our team is ready to assist you.</p>
          </div>
        </div>

        {/* Right: Form Content */}
        <div className="quote-form-content">
          <div className="form-header">
            <h4>Request a Quote</h4>
            <p>We will get back to you within 24 hours.</p>
          </div>

          <form className="quote-form">
            <div className="form-group">
              <div className="input-wrapper">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="input-wrapper">
                <input type="email" placeholder="Your Email" required />
              </div>
            </div>

            <div className="input-wrapper message-wrapper">
              <textarea placeholder="Your Message" required></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
