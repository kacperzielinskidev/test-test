import './index.css';
import contactModel from '../../models/CONTACT_model';
import Heading from '../../components/heading';
import Text from '../../components/text';
import ContactForm from '../../components/contactForm';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='content'>
          <Heading level={2} color='black'>
            {contactModel.heading}
          </Heading>
          <Text size='1.4rem' color='black'>
            {contactModel.text}
          </Text>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
