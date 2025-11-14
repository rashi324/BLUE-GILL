import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
       <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'} />

            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
               <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
               <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                  <p> Discover the charm of handmade women’s clothing at Blue Gill Women’s Store. Our latest collection features exquisitely stitched Kurtas, Churidars, and Gowns, crafted with premium fabrics and contemporary designs. Each piece combines comfort, elegance, and timeless style, perfect for everyday wear or special occasions.!</p>
                  <p>Each outfit is thoughtfully designed to celebrate women’s individuality and style, blending traditional craftsmanship with modern trends. Perfect for everyday wear or special occasions, our collection brings elegance and comfort together.</p>
                  <b className='text-gray-800'>Our Mission</b>
                  <p>At Blue Gill Women’s Store, our mission is to create handmade, premium-quality women’s clothing that blends elegance, comfort, and timeless style. We aim to celebrate individuality and craftsmanship, providing garments that our customers cherish and feel confident wearing every day.</p>
               </div>
            </div>

            <div className='text-xl py-4'>
                 <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

         <div className='flex flex-col md:flex-row text-sm mb-20'>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>Handmade with **premium fabrics** for elegant and durable garments.</p>
              </div>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>Easy shopping, secure checkout, and timely delivery.</p>
              </div>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Coustomer Service:</b>
                    <p className='text-gray-600'> Friendly support to ensure satisfaction with every purchase.</p>
              </div>
         </div>


         <NewsletterBox />

    </div>
  )
}

export default About
