import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import Card from './components/Card'
import BannerImage from './components/BannerImage'
import AllCategoryProducts from './components/AllCategoryProducts'
import LatestUpdate from './components/LatestUpdate'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import NotFoundPage from './pages/NotFoundPage'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
        <Footer/>
    </div>
  )
}
