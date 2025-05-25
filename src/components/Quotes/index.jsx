import FooterThree from '@/layouts/footers/FooterThree'
import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react';
import QuoteArea from './QuoteArea'
import Breadcrumb from '../common/Breadcrumb';
import QuoteForm from './QuoteArea';

export default function index() {
  return (
    <>
     <HeaderOne onePageHomeThree={true}/>
     <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb image="/assets/img/breadcurmb/breadcurmb.jpg" title="Quotes" subtitle="Get A Quote" />
           <div className='services_container'>
          <QuoteForm />
           </div>
          </main>
          <FooterThree />
        </div>
      </div>
    </>
  )
}
