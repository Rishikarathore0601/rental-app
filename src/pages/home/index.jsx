import s from './styles.module.scss'
import { head } from 'helpers'
import { useEffect } from 'react'
import HeroSection from './hero'
import FeaturedDevices from './featuredDevices'
import HowItWorks from './howItWorks'
import Testimonials from './testimonials'
import RentOutDevice from './rentOutDevice'

export default function Main() {
  useEffect(() => {
    head({ title: 'Home' })
  }, [])
  return (
    <div className={s.main + 'indent'}>
      <div className={s.dashboard}>
        <div className={s.content + ' innerScrollX'}>
          <HeroSection />
          <FeaturedDevices />
          <HowItWorks />
          <RentOutDevice />
          <Testimonials />
        </div>
      </div>
    </div>
  )
}
