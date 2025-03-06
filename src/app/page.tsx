import { SocialIcon } from "@/components/icons/social-icons";
import { XIcon } from "@/components/icons/x-icon";
import WaitlistForm from "@/components/waitlist-form";

export default function SimpleLandingPage() {
  return (
   
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className=" flex items-center justify-center flex-col">
    <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-800 py-8">
      bioshop.one
    </p>
    <WaitlistForm />
    <div className="pt-8 flex justify-center space-x-6">
  <SocialIcon
    href="https://x.com/indium114"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X (formerly Twitter)"
    icon={<XIcon className="w-6 h-6" />}
  />
  </div>
    </div>
    
  </div>
  
  
  );
}
