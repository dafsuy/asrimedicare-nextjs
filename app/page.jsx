'use client'
import HeroSection from './section/heroSection';
import { useEffect } from 'react';
import AOS from 'aos';
import AboutSection from './section/aboutSection';
import BrandSection from './section/brandSection';
import ProductsSection from './section/productsSection';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true
    });
  });
  return (
    <>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <BrandSection></BrandSection>
      <ProductsSection></ProductsSection>
    </>
  );
}
