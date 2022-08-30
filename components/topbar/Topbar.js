import React, { useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import AddInvoice from '../AddInvoice/AddInvoice';
import styles from './styles/topbar.module.css';

function Topbar() {
  const [isShow, setIsshow] = useState(false);

  const display = () => setIsshow(true);
  const hide = () => setIsshow(false);
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
          <div className={styles.addbtn} onClick={display}>
            <MdOutlineAddCircleOutline /> <span>New invoice</span>
          </div>
        </div>
      </div>
      <AddInvoice show={isShow} toggle={hide} />
    </div>
  );
}

export default Topbar;
