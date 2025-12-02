export default function DenzaFooter() {
  return (
    <footer className="bg-[#002f86] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h3 className="text-lg font-medium mb-4 tracking-wide">
          Engage with our community
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl mb-8">
          <a href="#" className="hover:opacity-80 transition"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:opacity-80 transition"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:opacity-80 transition"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="hover:opacity-80 transition"><i className="fas fa-times"></i></a>
          <a href="#" className="hover:opacity-80 transition"><i className="fab fa-youtube"></i></a>
          <a href="#" className="hover:opacity-80 transition"><i className="fab fa-snapchat"></i></a>
          <a href="#" className="hover:opacity-80 transition"><i className="fab fa-tiktok"></i></a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200 mb-6">
          <span>Denza bahrain © 2025 All Rights Reserved</span>
          <a href="#" className="hover:underline">Mannai Group</a>
          <a href="#" className="hover:underline">Denza Global</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms Of Use</a>
        </div>

        {/* Designed & Developed */}
        <div className="text-xs text-gray-300">
          Designed & developed by  
          <span className="inline-block ml-2 align-middle">
            {/* Replace with your actual logo */}
            <img 
              src="/assets/logo/logo.png" 
              alt="Developer Logo" 
              className="h-5 opacity-90 drop-shadow-xs  drop-shadow-white"
            />
          </span>
        </div>

      </div>
    </footer>
  );
}
