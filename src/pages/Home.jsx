import React from 'react'
import Hero from '../components/Hero'
import AllCategoryProducts from '../components/AllCategoryProducts'
import CategorySection from '../components/CategorySection'
import BannerImage from '../components/BannerImage'
import LatestUpdate from '../components/LatestUpdate'

function Home() {
  return (
    <>
    <Hero/>
     <CategorySection/>
    <AllCategoryProducts/>
     <BannerImage/>
    {/* <AllCategoryProducts/> */}
    <LatestUpdate/>
     </>
  )
}

export default Home