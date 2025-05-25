'use client'

import React, { useState } from 'react';
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import './quotes.scss';
import project_data from '@/data/project_data';


interface FormData {
  email: string;
  phone: string;
  name: string;
  address: string;
  message: string;
  service: string;
  image?: File;
}

const schema = yup
  .object({
    email: yup.string().required().email().label("Email"),
    phone: yup.string().required().label("Phone"),
    name: yup.string().required().label("Name"),
    address: yup.string().required().label("Subject"),
    message: yup.string().required().label("Message"),
    service: yup.string().required().label("Services"),
  })
  .required();


const QuoteForm = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm<FormData>({ 
    resolver: yupResolver(schema),
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setValue('image', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: FormData) => {   
    const notify = () => toast("Message send successful");
    notify();
    reset();
    setSelectedImage(null);
    setPreviewUrl('');
    console.log(data);
  };

  const groupedServices = Array.from(
    new Set(project_data?.map((item) => item?.service))
  );

  return (
    <div className='py-80 px-40 quote-form-container'>
    <h3>Get A Quote</h3>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xl-6 col-lg-6 mb-10">
            <div className="tp-form-input-box">
              <input type="text" placeholder="First name" {...register("name")} />
              <p className="form_error">{errors.name?.message}</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-10">
            <div className="tp-form-input-box">
              <input type="email" placeholder="Your Email" {...register("email")} />
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 mb-10">
            <div className="tp-form-input-box">
              <input type="text" placeholder="Phone" {...register("phone")} />
              <p className="form_error">{errors.phone?.message}</p>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 mb-10">
            <div className="tp-form-input-box">
              <select {...register("service")}>
                <option value="">Select Services</option>
                {groupedServices?.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
              <p className="form_error">{errors.service?.message}</p>
            </div>
          </div>
          {/* <div className="col-xl-6 col-lg-6 mb-10">
            <div className="tp-form-input-box">
              <input type="text" placeholder="Address" {...register("address")} />
              <p className="form_error">{errors.address?.message}</p>
            </div>
          </div> */}
          <div className="col-xl-12 col-lg-12 mb-10">
            <div className="tp-form-textarea-box">
              <textarea placeholder="Message" {...register("message")}></textarea>
              <p className="form_error">{errors.message?.message}</p>
            </div>
          </div>

          <div className="col-xl-12 col-lg-12 mb-10">
            <div className="tp-form-input-box file-upload-container">
              <div className="file-upload-wrapper">
                <input 
                  type="file" 
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-upload-input"
                />
                <label htmlFor="image-upload" className="file-upload-label">
                  <span className="upload-icon">📁</span>
                  <span className="upload-text">
                    {selectedImage ? 'Change Image' : 'Upload Image'}
                  </span>
                </label>
                {selectedImage && (
                  <div className="file-info">
                    <span className="file-name">{selectedImage.name}</span>
                    <span className="file-size">
                      ({(selectedImage.size / 1024).toFixed(1)} KB)
                    </span>
                  </div>
                )}
              </div>
              {previewUrl && (
                <div className="image-preview">
                  <img src={previewUrl} alt="Preview" />
                </div>
              )}
            </div>
          </div>
        </div>
        <button className="tp-btn-theme black-bg" type="submit"><span>Send a message</span></button>

      </form>
    </div>
  );
};

export default QuoteForm;