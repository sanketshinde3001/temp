import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Section = ({ borderColor, imageSrc, topTag, title, description, buttonText, marginTop }) => {
  return (
    <>
    <div className="relative mb-4">
      <div className={`border-${borderColor} border-2 absolute top-10 left-16 right-14 bottom-0 xl:bottom-10 rounded-lg z-10`} style={{ marginTop: `${marginTop}px`, marginBottom: '20px', marginLeft: '10px', paddingRight: '2rem' }}>          {topTag && (
            <span className="media-tag bg-purple-700 md:top-72 font-semibold text-white top-10 text-justify align-middle  md:relative left-0" style={{ padding: '1rem 1rem', position: 'absolute' }}>{topTag}</span>
          )}</div>
      <div className="bg-white-100 rounded-lg  gap-8 p-8 flex items-center justify-between">
        <figure className="wp-block-media-text__media relative">

          <Image
            src={imageSrc}
            className="rounded-lg"
            width={1038}
            height={1032}
            alt="Picture of the author"

          />
        </figure>
        <div className="wp-block-media-text__content text-wrap mx-14 md:mx-0 md:mt-11 md:pt-8 md:pl-8 z-20">
          <h1 className="text-4xl font-semibold mb-8 top-8" style={{ maxWidth: 'calc(100% - 4rem)', wordWrap: 'break-word' }}>{title}</h1>
          <p className="text-lg mb-6" style={{ maxWidth: 'calc(100% - 4rem)' }}>
            {description}
          </p>
           
            <div className='bg-white py-2 px-4 rounded-full border border-purple-900 font-semibold  text-purple-900 hover:bg-purple-900 hover:ring-purple-900 hover:text-white w-56'>
              <Link href="/Newpage">
                {buttonText}
              </Link>
            </div>
          
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default Section;
