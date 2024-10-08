import React, { useState } from 'react'
import s from './styles.module.scss'

const MyCart = () => {
  const [rentItems, setRentItems] = useState([
    {
      id: 1,
      name: 'Dell XPS 13',
      image: 'path-to-image',
      duration: '2 weeks',
      pricePerDay: 500,
      totalPrice: 7000
    }
  ])

  const [purchaseItems, setPurchaseItems] = useState([
    {
      id: 2,
      name: 'Lenovo ThinkPad X1 Carbon',
      image: 'path-to-image',
      condition: 'Used - Good',
      price: 45000,
      quantity: 1,
      totalPrice: 45000
    }
  ])

  const handleRemoveRentItem = id => {
    setRentItems(rentItems.filter(item => item.id !== id))
  }

  const handleRemovePurchaseItem = id => {
    setPurchaseItems(purchaseItems.filter(item => item.id !== id))
  }

  const totalRent = rentItems.reduce((acc, item) => acc + item.totalPrice, 0)
  const totalPurchase = purchaseItems.reduce((acc, item) => acc + item.totalPrice, 0)
  const overallTotal = totalRent + totalPurchase

  return (
    <section className={s.myCart}>
      <h1>Your Cart</h1>
      <h2>Review and finalize your selected devices for rent or purchase.</h2>

      {/* Devices for Rent Section */}
      <section className={s.devicesForRent}>
        <h3>Devices You&apos;ve Selected to Rent</h3>
        {rentItems.length > 0 ? (
          <div className={s.deviceList}>
            {rentItems.map(item => (
              <div key={item.id} className={s.deviceRow}>
                <img src={item.image} alt={item.name} className={s.deviceImage} />
                <div className={s.deviceDetails}>
                  <h4>{item.name}</h4>
                  <p>Rental Duration: {item.duration}</p>
                  <p>Price per Day: ₹{item.pricePerDay}/day</p>
                  <p>Total Price: ₹{item.totalPrice}</p>
                </div>
                <div className={s.actionButtons}>
                  <button className={s.removeBtn} onClick={() => handleRemoveRentItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty. Start exploring our wide range of devices!</p>
        )}
      </section>

      {/* Devices for Purchase Section */}
      <section className={s.devicesForPurchase}>
        <h3>Devices You&apos;ve Selected to Buy</h3>
        {purchaseItems.length > 0 ? (
          <div className={s.deviceList}>
            {purchaseItems.map(item => (
              <div key={item.id} className={s.deviceRow}>
                <img src={item.image} alt={item.name} className={s.deviceImage} />
                <div className={s.deviceDetails}>
                  <h4>{item.name}</h4>
                  <p>Condition: {item.condition}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total Price: ₹{item.totalPrice}</p>
                </div>
                <div className={s.actionButtons}>
                  <button className={s.removeBtn} onClick={() => handleRemovePurchaseItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty. Start exploring our wide range of devices!</p>
        )}
      </section>

      {/* Cart Summary & Checkout Section */}
      <section className={s.cartSummary}>
        <h3>Cart Summary</h3>
        <p>Total for Rent: ₹{totalRent}</p>
        <p>Total for Purchase: ₹{totalPurchase}</p>
        <h4>Overall Total: ₹{overallTotal}</h4>
        <div className={s.cartActions}>
          <button className={s.checkoutBtn}>Proceed to Checkout</button>
          <button className={s.continueShoppingBtn}>Continue Shopping</button>
        </div>
      </section>

      {/* Discount Code Section */}
      <section className={s.discountCode}>
        <h3>Have a discount code?</h3>
        <input type='text' placeholder='Enter Discount Code' />
        <button className={s.applyBtn}>Apply</button>
      </section>

      {/* Shipping Info Section */}
      <section className={s.shippingInfo}>
        <h3>Shipping & Delivery Info</h3>
        <p>Estimated delivery: 3-5 business days based on your location.</p>
      </section>
    </section>
  )
}

export default MyCart
