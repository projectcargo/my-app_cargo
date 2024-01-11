import React from 'react'
import One from '../Photo/one.jpg'
import Two from '../Photo/two.jpg'
import Three from '../Photo/three.jpg'
import Four from '../Photo/four.jpg'
function Logistic() {
  return (
    <div>
        <h1 className='m-top-20'>Your Ideal Logistics Partner</h1>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
   
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={One} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Multimodal </h3>
          {/* <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2> */}
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Two} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Technology Enabled</h3>
          {/* <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2> */}
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Three} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Deeply Integrated</h3>
          {/* <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2> */}
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={Four} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Cost Efficient</h3>
          {/* <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2> */}
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Logistic