import React from 'react';
import styles from './styles/addinvoice.module.css'

function AddInvoice({show, toggle}) {
    if(!show){
        return null;
    }
  return (
    <div className={styles.addinvoice}>
      <div className={styles.title}>New Invoice</div>
      <div className={styles.formpadding}>
        <from>
          <div className={styles.titleinlabel}>Bill from</div>
          <div className={styles.prod}>
            <label className={styles.label} htmlFor="streetaddres">Street Adress</label>
            <input className={styles.fullwidth} id="streetadress" type={'text'} required />
            <div className={styles.rowinputs}>
            <div> <label className={styles.label}  htmlFor="city">City</label>
              <input id="city" type={'text'} required /></div>
            <div><label className={styles.label}  htmlFor="postcode">Post Code</label>
              <input id="postcode" type={'text'} required /></div>
            <div>
            <label className={styles.label}  htmlFor="country">Country</label>
              <input id="country" type={'text'} required />
            </div>
            </div>
          </div>
          <div className={styles.titleinlabel}>Bill To</div>
          <div className={styles.prod}>
            <div>
              <label className={styles.label}  htmlFor="clientsname">Client&apos;s Name</label>
              <input className={styles.fullwidth} id="clientsname" type={'text'} required />
              <label className={styles.label}  htmlFor="clientsemail">Client&apos;s Email</label>
              <input
              className={styles.fullwidth}
                id="clientsemail"
                type={'text'}
                placeholder="email@example.com"
                required
              />
              <label className={styles.label}  htmlFor="cstreetaddres">Street Adress</label>
              <input className={styles.fullwidth} id="cstreetadress" type={'text'} required />
            </div>
            <div className={styles.rowinputs}>
                <div>
                <label className={styles.label}  htmlFor="clientscity">City</label>
              <input id="clientscity" type={'text'} required />
                </div>
                <div>
                <label className={styles.label}  htmlFor="clientspostcode">Post Code</label>
              <input id="clientspostcode" type={'text'} required />
                </div>
                <div>
                <label className={styles.label}  htmlFor="clientscountry">Country</label>
              <input id="clientscountry" type={'text'} required />
                </div>
            </div>
          </div>
          <div>
            <div>
                <label className={styles.label}  htmlFor='invoicedate'>Invoice Date</label>
                <input className={styles.fullwidth} type="date" name="date" id="invoicedate" />
            </div>
            <div>
                <label className={styles.label}  htmlFor="payterms">Payment Terms</label>
                <select className={styles.fullwidth} name="payterms" id="payterms">
                    <option value="1day">Net 1 day</option>
                    <option value="7day">Net 7 day</option>
                    <option value="14day">Net 14 day</option>
                    <option value="30day">Net 30 day</option>
                </select>
            </div>
            <div>
                <label className={styles.label}  htmlFor="description">Project Description</label>
                <input className={styles.fullwidth} type="text" name="description" id="description" placeholder='e.g. Software development Service' />
            </div>
          </div>
          <div className={styles.btns}>
          <button onClick={toggle } className={styles.discard}>Discard</button>
          <div>
            <button className={styles.draft}>Save as Draft</button>
            <button className={styles.save}>Save & Send</button>
          </div>
          </div>
        </from>
      </div>
    </div>
  );
}

export default AddInvoice;
