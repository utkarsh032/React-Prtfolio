import React, { useState } from 'react'

export default function ContactForm() {

  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    textArea: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };


  return (
    <div className=''>
      <div className='grid md:grid-cols-2 my-8 gap-4 '>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="inputField"
          placeholder='FirstName'
          required
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="inputField"
          placeholder='LastName'
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="inputField" placeholder='Email'
          required
        />
        <input
          type="tel"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          className="inputField"
          placeholder='Phone'
          required
        />
        <textarea
          id="textArea"
          name="textArea"
          rows={1}
          value={formData.textArea}
          onChange={handleInputChange}
          className="inputField"
          placeholder='What you think..'
          required
        />

      </div>
      <button type="submit" className="btnOutLine bg-gray-200 uppercase text-sm  hover:scale-105 duration-100 active:bg-gray-300 active:text-gray-500">
        Submit
      </button>
    </div>
  )
}
