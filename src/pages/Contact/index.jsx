// ContactUs.jsx
import { useState } from 'react'
import styles from './styles.module.scss'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission logic (e.g., send data to API)
    console.log(formData)
    setFormData({ name: '', email: '', subject: '', message: '' }) // Reset form after submission
  }

  return (
    <div className={styles.contactUsPage}>
      <h1>Get in Touch</h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactUs
