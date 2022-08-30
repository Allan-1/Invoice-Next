import React from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import styles from './styles/topbar.module.css';

function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.flex}>
        <div>
          <div className={styles.title}>Invoices</div>
          <div className={styles.subtitle}>There are 8 total invoices</div>
        </div>
        <div className={styles.topbtns}>
          <div className={styles.filter}>
            <div className={styles.select}>
              <select onChange={(e) => console.log(e.target.value)}>
                <option>Filter by status</option>
                <option value={'drafts'}>Drafts</option>
                <option value={'pending'}>Pending</option>
                <option value={'paid'}>Paid</option>
              </select>
            </div>
          </div>
          <div className={styles.addbtn}>
            <MdOutlineAddCircleOutline /> <span>New invoice</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
