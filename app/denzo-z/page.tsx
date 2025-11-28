import HeroVideoSection from '@/app/denzo-z/components/HeroVideoSection'
import React from 'react'
import CarConfigurator from './components/CarConfigurator'
import HeroDesignSlider from './components/HeroDesignSlider'
import FeatureSlider from './components/FeatureSlider'

const page = () => {
    return (
        <div>
            <HeroVideoSection />
            <CarConfigurator />
            <HeroDesignSlider />
            <FeatureSlider />
            <HeroDesignSlider />        
        </div>
    )
}

export default page