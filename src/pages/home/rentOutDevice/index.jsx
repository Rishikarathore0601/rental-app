import React from 'react'
import s from './styles.module.scss'

const RentOutDevice = () => {
  return (
    <section className={s.rentOutDevice}>
      <div className={s.container}>
        <h2 className={s.sectionTitle}>Got a Device? Rent It Out and Earn!</h2>
        <p className={s.subheading}>
          Turn your idle electronics into a source of income by listing them on Device On Demand.
        </p>

        <div className={s.steps}>
          <div className={s.step}>
            <h3 className={s.stepTitle}>Step 1: Sign Up / Log In</h3>
            <p className={s.stepDescription}>Create an account or log in to get started.</p>
          </div>

          <div className={s.step}>
            <h3 className={s.stepTitle}>Step 2: List Your Device</h3>
            <p className={s.stepDescription}>
              Provide details such as the type of device, specs, rental price, and availability. Add images and a
              description to attract renters.
            </p>
          </div>

          <div className={s.step}>
            <h3 className={s.stepTitle}>Step 3: Set Your Price and Duration</h3>
            <p className={s.stepDescription}>
              You decide the rental price and the duration for which your device will be available.
            </p>
          </div>

          <div className={s.step}>
            <h3 className={s.stepTitle}>Step 4: Start Earning</h3>
            <p className={s.stepDescription}>
              Once your device is rented out, you’ll earn based on the rental agreement. We handle the rest, including
              delivery and returns.
            </p>
          </div>
        </div>

        <div className={s.cta}>
          <button className={s.ctaButton}>List Your Device Now</button>
        </div>
      </div>
    </section>
  )
}

export default RentOutDevice
