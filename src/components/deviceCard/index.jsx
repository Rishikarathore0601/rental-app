import styles from './styles.module.scss'

const DeviceCard = ({ name, description, price, image }) => {
  return (
    <div className={styles.deviceCard}>
      <img src={image} alt={name} className={styles.deviceImage} />
      <div className={styles.deviceInfo}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p className={styles.price}>{price}</p>
        <button className={styles.rentButton}>Rent Now</button>
      </div>
    </div>
  )
}

export default DeviceCard
