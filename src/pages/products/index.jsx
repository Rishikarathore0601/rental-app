import styles from './styles.module.scss'
import image from 'images'

const products = [
  {
    id: 1,
    name: 'Dell XPS 13',
    specs: 'Intel i7, 16GB RAM, 512GB SSD, 13" Screen',
    price: 'Starting from ₹500/day',
    image: image.Profile,
    availability: 'Available'
  },
  {
    id: 2,
    name: 'Apple MacBook Pro',
    specs: 'M1 Chip, 16GB RAM, 512GB SSD, 13" Screen',
    price: 'Starting from ₹700/day',
    image: '/images/macbook-pro.jpg',
    availability: 'Available'
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    specs: 'Intel i7, 16GB RAM, 1TB SSD, 13" Screen',
    price: 'Starting from ₹600/day',
    image: '/images/hp-spectre.jpg',
    availability: 'Unavailable'
  },
  {
    id: 4,
    name: 'Samsung Galaxy Tab S7',
    specs: 'Snapdragon 865+, 8GB RAM, 128GB Storage, 11" Screen',
    price: 'Starting from ₹400/day',
    image: '/images/galaxy-tab.jpg',
    availability: 'Available'
  }
  // Add more products as needed
]

const Products = () => {
  return (
    <div className={styles.productsPage}>
      <h1>Explore Our Range of Devices</h1>

      <div className={styles.filters}>
        <h3>Filters</h3>
        <div className={styles.filterGroup}>
          <label>Category:</label>
          <select>
            <option value='laptops'>Laptops</option>
            <option value='monitors'>Monitors</option>
            <option value='cpus'>CPUs</option>
            <option value='tablets'>Tablets</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Sort by Price:</label>
          <select>
            <option value='low-to-high'>Low to High</option>
            <option value='high-to-low'>High to Low</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Rental Duration:</label>
          <select>
            <option value='short-term'>Short-term</option>
            <option value='long-term'>Long-term</option>
          </select>
        </div>
      </div>

      <div className={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>Specs: {product.specs}</p>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.availability}>{product.availability}</p>
            <button className={styles.rentButton}>Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
