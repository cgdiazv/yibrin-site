import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Full-width Hero Banner */}
      <div className="w-full relative flex justify-center">
        <Image 
          src="/header.webp" 
          alt="Desde lo Clásico hasta lo Actual" 
          width={1920} 
          height={800} 
          className="w-full h-auto object-cover max-w-[1920px]"
          priority
        />
      </div>
      
      {/* The rest of your one-page content can go below this block */}
    </div>
  );
}