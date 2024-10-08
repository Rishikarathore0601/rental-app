import React, { useState } from 'react'
import s from './styles.module.scss' // Import your SCSS module

const ListDevice = () => {
  const [deviceType, setDeviceType] = useState('')
  const [deviceBrand, setDeviceBrand] = useState('')
  const [deviceModel, setDeviceModel] = useState('')
  const [condition, setCondition] = useState('')
  const [specifications, setSpecifications] = useState('')
  const [rentalPrice, setRentalPrice] = useState('')
  const [availabilityStart, setAvailabilityStart] = useState('')
  const [availabilityEnd, setAvailabilityEnd] = useState('')
  const [recurringAvailability, setRecurringAvailability] = useState(false)
  const [images, setImages] = useState([])
  const [description, setDescription] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleImageUpload = event => {
    const files = Array.from(event.target.files)
    if (files.length <= 5) {
      setImages(files)
    } else {
      alert('You can upload a maximum of 5 images.')
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    alert('Your device has been successfully listed!')
  }

  return (
    <div className={s.listDeviceContainer}>
      <h1>List Your Device for Rent</h1>
      <h2>Share your device with others and earn money while it’s not in use!</h2>

      <form onSubmit={handleSubmit}>
        <h3>Device Information</h3>
        <label>
          Device Type:
          <select value={deviceType} onChange={e => setDeviceType(e.target.value)} required>
            <option value=''>Select a device type</option>
            <option value='Laptop'>Laptop</option>
            <option value='Monitor'>Monitor</option>
            <option value='CPU'>CPU</option>
            <option value='Tablet'>Tablet</option>
          </select>
        </label>

        <label>
          Device Brand:
          <input
            type='text'
            value={deviceBrand}
            onChange={e => setDeviceBrand(e.target.value)}
            placeholder='e.g., Dell, HP, Apple'
            required
          />
        </label>

        <label>
          Device Model:
          <input
            type='text'
            value={deviceModel}
            onChange={e => setDeviceModel(e.target.value)}
            placeholder='e.g., XPS 13'
            required
          />
        </label>

        <label>Condition of Device:</label>
        <div className={s.conditionOptions}>
          {['New', 'Like New', 'Good', 'Fair', 'Needs Repair'].map(cond => (
            <label key={cond}>
              <input
                type='radio'
                value={cond}
                checked={condition === cond}
                onChange={e => setCondition(e.target.value)}
                required
              />
              {cond}
            </label>
          ))}
        </div>

        <label>
          Specifications:
          <textarea
            value={specifications}
            onChange={e => setSpecifications(e.target.value)}
            placeholder='e.g., Processor, RAM, Storage'
            required
          />
        </label>

        <h3>Rental Details</h3>
        <label>
          Rental Price:
          <input
            type='text'
            value={rentalPrice}
            onChange={e => setRentalPrice(e.target.value)}
            placeholder='Price per day/week/month'
            required
          />
        </label>

        <label>
          Availability Start:
          <input type='date' value={availabilityStart} onChange={e => setAvailabilityStart(e.target.value)} required />
        </label>

        <label>
          Availability End:
          <input type='date' value={availabilityEnd} onChange={e => setAvailabilityEnd(e.target.value)} required />
        </label>

        <label>
          <input
            type='checkbox'
            checked={recurringAvailability}
            onChange={e => setRecurringAvailability(e.target.checked)}
          />
          Available for rental every week
        </label>

        <h3>Device Images</h3>
        <label>
          Upload Images:
          <input type='file' multiple accept='image/*' onChange={handleImageUpload} required />
          <p>Upload up to 5 images (minimum of 2). Ensure the device is clean and well-lit.</p>
        </label>

        <div className={s.imagePreview}>
          {images.map((img, index) => (
            <img key={index} src={URL.createObjectURL(img)} alt={`Device preview ${index + 1}`} />
          ))}
        </div>

        <h3>Additional Information</h3>
        <label>
          Description:
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='e.g., any features, accessories included, or special notes'
            required
          />
        </label>

        <label>
          <input type='checkbox' checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)} required />I
          agree to the{' '}
          <a href='/terms' target='_blank'>
            terms and conditions
          </a>{' '}
          of renting out devices.
        </label>

        <button type='submit'>Submit Listing</button>
      </form>

      <div className={s.confirmationMessage}>
        <h3>Thank You!</h3>
        <p>
          Your device has been successfully listed. We will review your submission and notify you once it goes live on
          our platform. Start earning today!
        </p>
      </div>
    </div>
  )
}

export default ListDevice
