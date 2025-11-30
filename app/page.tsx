import DenzaFooter from "@/components/common/DenzaFooter";
import ChooseYourDenza from "@/components/home/ChooseYourDenza";
import ContactSection from "@/components/home/ContactSection";
import DenzaContactSection from "@/components/home/DenzaContactSection";
import DenzaOwnership from "@/components/home/DenzaOwnership";
import DenzaSlider from "@/components/home/DenzaSlider";
import DenzaVideoSlider from "@/components/home/DenzaVideoSlider";
import DMOSection from "@/components/home/DMOSection";
import FutureDriving from "@/components/home/FutureDriving";


export default function Home() {
  return (
    <div>
      <DenzaSlider />
      <DenzaVideoSlider />
      <ChooseYourDenza />
      <FutureDriving />
      <DMOSection />
      <DenzaOwnership />
      <ContactSection />
    </div>
  );
}
