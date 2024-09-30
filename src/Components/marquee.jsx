import React from 'react'

function marquee({imagesurl}) {
  return (
    <div className='container flex w-full py-8 gap-20 '>
        {imagesurl.map(url => <img src={url} className='marquee w-[6vw] flex-shrink-0'/>)}
        {imagesurl.map(url => <img src={url} className='marquee w-[6vw] flex-shrink-0'/>)}
    </div>
  )
}

export default marquee
