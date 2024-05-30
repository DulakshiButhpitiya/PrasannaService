import React from 'react'

const Paragraph = () => {
  return (
    <div><h1 class="text-6xl">Our Services</h1> 
    <div className='text-justify' >
     <p className="
    first-letter:text-7xl first-letter:font-bold first-letter:text-black
    first-letter:mr-2 first-letter:float-left text-wrap hover:text-balance line-clamp-6
  ">
   "Experience top-notch bike services and repairs tailored to meet your every need at our bike service center. 
        From routine maintenance checks to complex repairs, our team of skilled technicians ensures your bike performs at its best. Whether you're 
        looking for a tune-up, brake adjustments, tire replacements, or comprehensive diagnostics, we've got you covered. 
        With a commitment to quality and customer satisfaction, we strive to keep you riding smoothly and safely on the road."
  </p>
  </div>
  {/* <article class="text-pretty ...">
  <h1>Beloved Manhattan soup stand closes</h1>
  <p>New Yorkers are facing the winter chill...New 
    Yorkers are facing the winter chill with less 
    warmth this year as the city's most revered soup 
    stand unexpectedly shutters, following a series of 
    events that have left the community puzzled.</p>
</article> */}
<div style={{"backgroundColor":"blue","width":"50%"}} className='text-wrap'>
<article>
  <time>Mar 10, 2020</time>
  <h2>Boost your conversion rate</h2>
  <p class="line-clamp-3">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
  <div>
    <img src="..." />
    Lindsay Walton
  </div>
</article></div>
  </div>
  )
}

export default Paragraph