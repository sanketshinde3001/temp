import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="relative">
      
      <div className="bg-orange-50 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <figure className="wp-block-media-text__media relative">
         
          <Image
            src="https://pros.weddingpro.com/wp-content/uploads/2023/10/1_hero-2.png"
            className="rounded-lg"
            width={1038}
            height={1032}
          />
        </figure>
        <div className="wp-block-media-text__content text-wrap mx-14 md:mx-0 md:mt-11 md:pt-8 md:pl-8">
          <h1 className="text-4xl font-semibold mb-8 top-8" style={{ maxWidth: 'calc(100% - 4rem)', wordWrap: 'break-word' }}>Customer reviews: <br/>build trust and connect with the right couples</h1>
          <p className="text-lg mb-6" style={{ maxWidth: 'calc(100% - 4rem)' }}>
          Reviews are one of the top things future clients look at before deciding to reach out to your business. Make that decision easy for them by showcasing your reviews on The Knot and WeddingWire.
          </p>
           
           
          
        </div>
      </div>
    </div>
    <div className="relative">
      
      <div className="bg-orange-50 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <figure className="wp-block-media-text__media relative">
         
          <Image
            src="https://pros.weddingpro.com/wp-content/uploads/2023/10/2_customerreviews.png"
            className="rounded-lg"
            width={500}
            height={498}
          />
        </figure>
        <div className="wp-block-media-text__content text-wrap mx-14 md:mx-0 md:mt-11 md:pt-8 md:pl-8">
          <h1 className="text-4xl font-semibold mb-8 top-8" style={{ maxWidth: 'calc(100% - 4rem)', wordWrap: 'break-word' }}>Let past customer reviews do the selling for you</h1>
          <p className="text-lg mb-6" style={{ maxWidth: 'calc(100% - 4rem)' }}>
          Customer reviews build trust and credibility, boost your SEO and give invaluable social proof to your brand. With over 9.6 million couple reviews, The Knot and WeddingWire allow you to request, respond to and showcase your top reviews so couples can get insight into your business.
          </p>
           
           
          
        </div>
      </div>
    </div>
    </div>
  )
}
