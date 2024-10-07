import styles from './styles.module.scss'
import DeviceCard from '../../../components/deviceCard'

const FeaturedDevices = () => {
  const devices = [
    {
      name: 'Laptop',
      description: 'High-performance laptops for work and play.',
      price: '$40/day',
      image: '/images/laptop.jpg'
    },
    {
      name: 'CPU',
      description: 'Powerful CPUs for seamless computing.',
      price: '$30/day',
      image: '/images/cpu.jpg'
    },
    {
      name: 'Monitor',
      description: 'HD Monitors for an immersive experience.',
      price: '$20/day',
      image: '/images/monitor.jpg'
    }
  ]

  return (
    <section className={styles.featuredSection}>
      <h2 className={styles.title}>Featured Devices</h2>
      <div className={styles.deviceGrid}>
        {devices.map((device, index) => (
          <DeviceCard
            key={index}
            name={device.name}
            description={device.description}
            price={device.price}
            image={device.image}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedDevices
