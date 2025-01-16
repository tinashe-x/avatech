import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function ContactPage() {

    return (
        <div className="home">
            <Navbar />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default ContactPage;