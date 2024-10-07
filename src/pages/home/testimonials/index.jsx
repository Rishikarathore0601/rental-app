import styles from './styles.module.scss'

const Testimonials = () => {
  const reviews = [
    {
      name: 'Alice Johnson',
      review: 'The rental process was seamless, and the device was delivered on time. Highly recommend!',
      rating: 5
    },
    {
      name: 'Bob Smith',
      review: 'Great service and a fantastic selection of devices. I will definitely rent again!',
      rating: 4
    },
    {
      name: 'Charlie Brown',
      review: 'Had an issue with my device, but the customer service team was super helpful!',
      rating: 5
    },
    {
      name: 'Diana Prince',
      review: 'Affordable rental plans made it easy for me to get the device I needed for my project.',
      rating: 4
    }
  ]

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.title}>What Our Customers Say</h2>
      <div className={styles.testimonialsGrid}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.reviewText}>
              <p>&quot;{review.review}&quot;</p> {/* Escaping double quotes */}
            </div>
            <div className={styles.customerInfo}>
              <h3 className={styles.customerName}>{review.name}</h3>
              <div className={styles.rating}>
                {'⭐'.repeat(review.rating)} {/* Simple star rating */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
