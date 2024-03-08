import { useState } from 'react';
import styles from './OrderDetail.module.scss';
import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ order, handleChangeQty, handleCheckout, hideCart }) {
  if (!order) return null;

  const lineItems = order.lineItems.map(item => (
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  ));

  return (
    <div className={styles.OrderDetail} id="OrderDetail">
      <div class="background-image"></div>
      <div className={styles.sectionHeading} id="content">
        {order.isPaid ? (
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
        ) : (
          <span>NEW ORDER</span>
        )}
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
        {/* Button to hide the cart */}
        <button onClick={hideCart} className="button btn-sm">Hide Cart</button>
      </div>
      <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}>
        {lineItems.length ? (
          <>
            {lineItems}
            <section className={styles.total}>
              {order.isPaid ? (
                <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  CHECKOUT
                </button>
              )}
              <span>{order.totalQty}</span>
              <span className={styles.right}>${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
        ) : (
          <div className={styles.hungry}>We the best Esports team!</div>
        )}
      </div>
    </div>
  );
}
