import './index.css';
import FormInput from '../../components/formInput';
import { useState } from 'react';
import Button from '../../components/button';

const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    serviceInterest: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Form submitted!');
    setContactFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      serviceInterest: '',
    });
  };

  return (
    <form className='contactForm' onSubmit={handleSubmit}>
      <div className='contactForm__topInputs'>
        <FormInput
          placeholder='First Name'
          type='text'
          name='firstName'
          value={contactFormData.firstName}
          onChange={handleChange}
        />
        <FormInput
          placeholder='Last Name'
          type='text'
          name='lastName'
          value={contactFormData.lastName}
          onChange={handleChange}
        />
      </div>

      <div>
        <FormInput
          style='full'
          type='number'
          placeholder='Phone Number'
          name='phoneNumber'
          value={contactFormData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <FormInput
          style='full'
          placeholder='What Service are you interested in?'
          type='text'
          name='serviceInterest'
          value={contactFormData.serviceInterest}
          onChange={handleChange}
        />
      </div>
      <div className='contactForm__button'>
        <Button type='submit' className='button button-red' role='button'>
          SUBMIT NOW
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
