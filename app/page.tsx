import FeatureMobileSection from "@/components/FeatureMobileSection";
import FooterDisclaimerSection from "@/components/FooterDisclaimerSection";
import HeroImageSection from "@/components/HeroImageSection";
import HeroSection from "@/components/HeroSection";
import InfiniteCardSlider from "@/components/InfiniteCardSlider";
import NewsletterSection from "@/components/NewsletterSection";
import OurCommunitySection from "@/components/OurCommunitySection";
import SlideSection from "@/components/SlideSection";
import TwoColumnCTASection from "@/components/TwoColumnCTASection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SlideSection />
      <HeroImageSection />
      <FeatureMobileSection />
      <TwoColumnCTASection />
      <InfiniteCardSlider />
      <NewsletterSection />
      <OurCommunitySection />
      <FooterDisclaimerSection />
    </div>
  );
}
