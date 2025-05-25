import React from 'react'
import { IoCheckmark } from 'react-icons/io5'
import './service-details.scss';

const data =[ 
    {
        id:1,
        desc:"We deliver exceptional quality in every project, ensuring client satisfaction.",
    },
    {
        id:2,
        desc:"Our team consists of highly skilled and experienced experts in the field.",
    },
    {
        id:3,
        desc:"Our team consists of highly skilled and experienced experts in the field.",
    },
    {
        id:4,
        desc:"Our team consists of highly skilled and experienced experts in the field.",
    }
]

export default function ServiceBenefits() {
  return (
    <div className='service-benefits'>
        <h3>Benefits</h3>
        <div className='benefits-grid'>
             {data?.map(item => <div className='benefit-card' key={item?.id}>
                <div className='benefit-checkmark'>
                <IoCheckmark />
                </div>

                 <p>{item?.desc}</p>
             </div>)}
        </div>
    </div>
  )
}
