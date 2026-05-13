import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-white z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed to flex-col on mobile, flex-row on desktop. Added gap-4 for mobile spacing. */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center py-5 md:py-0 md:h-28 gap-4 md:gap-0">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.webp" 
                alt="Yibrin Logo" 
                width={250} 
                height={80} 
                className="w-auto h-16 md:h-20" 
                priority 
              />
            </Link>
          </div>

          {/* Phone Number Button Section */}
          <div className="flex items-center w-full sm:w-auto">
            {/* Added w-full on mobile to make it a nice wide touch target, normal size on desktop */}
            <a 
              href="tel:+50425533736" 
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 md:px-5 md:py-2.5 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              {/* Sleek Outline Phone Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 text-gray-500 group-hover:text-[#5e95a7] transition-colors duration-200"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.54-4.24-7.136-7.136l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>

              {/* Phone Number Text */}
              <span className="text-base md:text-lg font-bold text-gray-700 group-hover:text-[#5e95a7] transition-colors duration-200">
                +504 2553-3736
              </span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}