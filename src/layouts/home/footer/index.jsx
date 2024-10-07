// Footer.jsx
import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <h4>Links</h4>
          <ul>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/privacy-policy'>Privacy Policy</a>
            </li>
            <li>
              <a href='/terms-of-service'>Terms of Service</a>
            </li>
          </ul>
        </div>

        <div className={styles.socialMedia}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
              <img src='/images/linkedin-icon.png' alt='LinkedIn' />
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
              <img src='/images/instagram-icon.png' alt='Instagram' />
            </a>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
              <img src='/images/facebook-icon.png' alt='Facebook' />
            </a>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <h4>Contact Us</h4>
          <p>
            Email: <a href='mailto:support@deviceondemand.com'>support@deviceondemand.com</a>
          </p>
          <p>
            Phone: <a href='tel:+1234567890'>+1 (234) 567-890</a>
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Device On Demand. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
