

import HeaderFive from '@/layouts/headers/HeaderFive';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import AppointmentArea from './AppointmentArea';
import ContactAreaHomeOne from '../homes/multi-page/home/ContactAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const Appointment = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb image="/assets/img/breadcurmb/breadcurmb.jpg" title='Appointment' subtitle='Appointment' />
            <AppointmentArea />
            <ContactAreaHomeOne />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default Appointment;