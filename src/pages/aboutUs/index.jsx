// index.jsx
// Ensure React is used or remove this line if not necessary
import styles from './styles.module.scss'

const AboutUs = () => {
  return (
    <div className={styles.aboutUsPage}>
      <h1>Our Mission</h1>
      <p>
        At Device On Demand, our mission is to provide flexible, affordable, and hassle-free access to technology.
        Whether you need a device for a short-term project or long-term use, we&apos;ve got you covered.
      </p>
      <h2>Why Choose Us:</h2>
      <ul>
        <li>Wide Range of Devices</li>
        <li>Flexible Rental Periods</li>
        <li>Affordable Prices</li>
        <li>Easy Pickup &amp; Return</li>
      </ul>
      <h2>Our Story:</h2>
      <p>
        A brief background on how and why the platform was created, emphasizing the convenience of renting rather than
        buying devices.
      </p>
      <h2>Vision Statement:</h2>
      <p>To make technology accessible to everyone, everywhere.</p>
    </div>
  )
}

export default AboutUs
