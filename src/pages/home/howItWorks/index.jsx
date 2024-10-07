import styles from './styles.module.scss'

const HowItWorks = () => {
  const steps = [
    {
      title: 'Choose a Device',
      description: 'Browse our collection and select what you need.',
      icon: '📱' // You can replace this with an actual image or SVG icon
    },
    {
      title: 'Flexible Rental Plans',
      description: 'Choose the rental duration that works for you.',
      icon: '📅'
    },
    {
      title: 'Fast Delivery',
      description: 'Get the device delivered to your doorstep.',
      icon: '🚚'
    },
    {
      title: 'Return with Ease',
      description: "Hassle-free pickup when you're done.",
      icon: '🔄'
    }
  ]

  return (
    <section className={styles.howItWorksSection}>
      <h2 className={styles.title}>How It Works</h2>
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.icon}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
