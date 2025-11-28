import React from 'react'
import HeroVideoSection from '../denzo-z/components/HeroVideoSection'
import AccentSlider from './components/AccentSlider'
import CarSpecsSection from './components/CarSpecsSection'
import HeroDesignSlider from '../denzo-z/components/HeroDesignSlider'
import FeatureCardSlider from './components/FeatureCardSlider'
import RefineSafetySection from './components/RefineSafetySection'
import DiscoverMoreSection from './components/DiscoverMoreSection'
import FooterDisclaimerSection from '@/components/FooterDisclaimerSection'

const page = () => {
    return (
        <div>
            <HeroDesignSlider />
            <AccentSlider />
            <CarSpecsSection />
            <HeroVideoSection />
            <FeatureCardSlider />
            <RefineSafetySection />
            <DiscoverMoreSection />
            <FooterDisclaimerSection />
        </div>
    )
}

export default page