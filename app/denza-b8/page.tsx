import DenzaAestheticAppearance from '@/components/denzaDetails/DenzaAestheticAppearance';
import DenzaColorSelector from '@/components/denzaDetails/DenzaColorSelector';
import DenzaFeatureScroll from '@/components/denzaDetails/DenzaFeatureScroll';
import DenzaInteriorColors from '@/components/denzaDetails/DenzaInteriorColors';
import DenzaInteriorScroll from '@/components/denzaDetails/DenzaInteriorScroll';
import DenzaIntro from '@/components/denzaDetails/DenzaIntro';
import DenzaKeyFeatures from '@/components/denzaDetails/DenzaKeyFeatures';
import React from 'react';

export default function Page() {
    const model = 'B5'

    return (
        <div>
            <DenzaIntro model={model} />
            <DenzaKeyFeatures model={model} />
            <DenzaAestheticAppearance model={model} />
            <DenzaColorSelector model={model} />
            <DenzaFeatureScroll model={model} />
            <DenzaInteriorColors model={model} />
            <DenzaInteriorScroll model={model} />
        </div>
    );
}
