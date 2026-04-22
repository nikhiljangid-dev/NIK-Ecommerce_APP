import React from 'react'

export default function BannerImage() {
  return (
    <div className="w-[95%] max-w-[1400px] mx-auto py-6">
      
      <div className="rounded-xl overflow-hidden shadow">
        <img
          src="https://t4.ftcdn.net/jpg/02/16/47/35/360_F_216473592_NefHePTpMfvYMNjD3UQTUVJy7DFPwqKA.jpg"
          alt="banner"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
        />
      </div>

    </div>
  )
}
