import React from 'react';
import ContactForm from '../components/ContactForm';

const infos = [
  { id: 1, name: "Phone", detail: "9368584530" },
  { id: 2, name: "Email", detail: "utkarshraj525@gmail.com" },
  { id: 3, name: "Website", detail: "9368584530" },
  { id: 4, name: "Address", detail: "Bidhuna, Uttar Pradesh" },
];

export default function Contact() {
  return (
    <div className="lg:mx-4 mx-4  text-gray-300 bg-gray-800 shadow-lg">
      <div className="lg:px-4 px-4 flex flex-col ">
        <div className="">
          <iframe
            title="Google Maps"
            className="w-full h-96 shadow-md rounded-t-xl invert"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14244.715173728715!2d79.49704621262494!3d26.802435077406326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e076d78c0949f%3A0x391a7c4dff3f2aa1!2sBidhuna%2C%20Uttar%20Pradesh%20206243!5e0!3m2!1sen!2sin!4v1699679343711!5m2!1sen!2sin"
          />
        </div>

        <div className="flex md:flex-row flex-col justify-between">

          <div className="bg-black md:w-1/4 w-4/5 px-3 py-4 -translate-y-1/2 shadow-md rounded-r-xl">
            {infos.map((info) => (
              <div key={info.id} className="py-2">
                <div className="bg-gray-800 flex items-center py-3 md:text-xl">
                  <p className="px-2 py-6 font-semibold">{info.name}:</p>
                  <p>{info.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <ContactForm />

          <div className="md:w-1/4 leading-loose my-8">
            <p className="text-gray-300 mb-4">|| Get In Touch</p>
            <p className="text-gray-100 font-semibold text-4xl">
              If you have any project or need help. Contact me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
