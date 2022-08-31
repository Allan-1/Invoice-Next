import React, { useState } from 'react';
import { InvoiceData } from '../../lib/InvoiceData';
import { FaCaretRight } from 'react-icons/fa';
import styles from './styles/invoicelist.module.css';

function InvoiceList() {
  return (
    <div className={styles.invoicelistcontainer}>
      <div className={styles.invoicelist}>
        <div>
          {InvoiceData.map((data) => (
            <div className={styles.invoicedata} key={data.invoiceno}>
              <div className={styles.invoicedatauser}>
                <div className={styles.invoiceno}>
                  <span className={styles.sign}>#</span>
                  {data.invoiceno}
                </div>
                <div className={styles.todane}>{data.invoicedate}</div>
                <div className={styles.todane}>{data.toname}</div>
              </div>
              <div className={styles.price}>sh190.00</div>
              <div className={styles.status}>{data.status}</div>
              <div className={styles.caret}>
                <FaCaretRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InvoiceList;
