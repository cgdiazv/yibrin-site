export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white py-6 mt-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed to flex-col on mobile, flex-row on desktop, centered text on mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-[11px] md:text-xs text-gray-600 gap-3 md:gap-0">
          
          <p>© Repuestos y Accesorios Yibrin 2018-{currentYear}</p>
          
          <a 
            href="https://indevasa.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-gray-500 hover:text-[#5e95a7] hover:underline transition-all duration-200"
          >
            Indeva Websites
          </a>
          
        </div>
      </div>
    </footer>
  );
}