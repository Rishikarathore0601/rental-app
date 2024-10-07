import { useState, useEffect } from 'react'
import styles from './styles.module.scss'

const HeroSection = () => {
  const slides = [
    {
      title: 'Device On Demand',
      description: 'Get the best devices whenever you need, on demand!',
      image: '/images/device1.jpg'
    },
    {
      title: 'Flexible Rentals',
      description: 'Choose from a wide range of devices for any duration.',
      image: '/images/device2.jpg'
    },
    {
      title: 'Tech for Everyone',
      description: 'Affordable, quality devices for all your needs.',
      image: '/images/device3.jpg'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1))
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000) // Auto-slide every 3 seconds
    return () => clearInterval(slideInterval) // Clean up the interval on component unmount
  }, [])

  return (
    <section className={styles.heroSection}>
      <div className={styles.slide} style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
          <button className={styles.heroBtn}>Explore Now</button>
        </div>
        <button className={styles.prevBtn} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={styles.nextBtn} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  )
}

export default HeroSection
