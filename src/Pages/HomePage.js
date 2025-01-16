import React from 'react';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero';
import DiscountOffer from '../components/DiscountOffer';
import Banner from '../components/Banner';
import ComingSoon from '../components/CommingSoon';
import TemplateShowcase from '../components/TemplateShowcase';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import { useState, useEffect } from 'react';

function HomePage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="home">
            {isLoading ? <Preloader /> : null}
            <Navbar />
            <Hero />
            <DiscountOffer />
            <Banner />
            <TemplateShowcase />
            <ComingSoon />
            <Footer />
        </div>
    );
}

export default HomePage;