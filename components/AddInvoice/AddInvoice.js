import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import Itemlist from './itemlist/Itemlist';
import styles from './styles/addinvoice.module.css';
import { InvoiceData } from '../../lib/InvoiceData';

function AddInvoice({ show, toggle }) {
  const [inputField, setInputField] = useState([
    { itemname: '', qty: '', price: '' },
  ]);
  const [userInputFiled, setUserInputField] = useState([
    {
      invoiceno: '4579h',
      projectname: '',
      invoicedate: '',
      paymentdue: '',
      fromstreetaddr: '',
      fromcity: '',
      frompocode: '',
      fromcountry: '',
      toname: '',
      streetadrr: '',
      tocity: '',
      topocode: '',
      tocountry: '',
      toemail: '',
      status: 'Pending',
      invoiceitems: [{ itemname: '', qty: '', price: '' }],
    },
  ]);

  const handleUserInputChange = (event) => {
    let data = [...userInputFiled];
    data[0][event.target.name] = event.target.value;
    setUserInputField(data);
  };

  const handleFormChange = (index, event) => {
    let data = [...inputField];
    data[index][event.target.name] = event.target.value;
    setInputField(data);
  };

  const addFields = () => {
    let newfield = { itemname: '', qty: 0.0, price: 0.0 };
    setInputField([...inputField, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputField];
    data.splice(index, 1);
    setInputField(data);
  };

  const submit = (e) => {
    e.preventDefault();
    InvoiceData.push(...userInputFiled);
    console.log(InvoiceData);
  };

  if (!show) {
    return null;
  }
  return (
    <div className={styles.addinvoice}>
      <div className={styles.title}>New Invoice</div>
      <div className={styles.formpadding}>
        <from>
          <div className={styles.titleinlabel}>Bill from</div>
          <div className={styles.prod}>
            <label className={styles.label} htmlFor="streetaddres">
              Street Adress
            </label>
            <input
              onChange={(e) => handleUserInputChange(e)}
              value={userInputFiled[0].fromstreetaddr}
              name="fromstreetaddr"
              className={styles.fullwidth}
              id="streetadress"
              type={'text'}
              required
            />
            <div className={styles.rowinputs}>
              <div>
                {' '}
                <label className={styles.label} htmlFor="city">
                  City
                </label>
                <input
                  onChange={(e) => handleUserInputChange(e)}
                  value={userInputFiled[0].fromcity}
                  name="fromcity"
                  id="city"
                  type={'text'}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="postcode">
                  Post Code
                </label>
                <input
                  onChange={(e) => handleUserInputChange(e)}
                  value={userInputFiled[0].frompocode}
                  name="frompocode"
                  id="postcode"
                  type={'text'}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="country">
                  Country
                </label>
                <input
                  onChange={(e) => handleUserInputChange(e)}
                  value={userInputFiled[0].fromcountry}
                  name="fromcountry"
                  id="country"
                  type={'text'}
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.titleinlabel}>Bill To</div>
          <div className={styles.prod}>
            <div>
              <label className={styles.label} htmlFor="clientsname">
                Client&apos;s Name
              </label>
              <input
                onChange={(e) => handleUserInputChange(e)}
                value={userInputFiled[0].toname}
                name="toname"
                className={styles.fullwidth}
                id="clientsname"
                type={'text'}
                required
              />
              <label className={styles.label} htmlFor="clientsemail">
                Client&apos;s Email
              </label>
              <input
                onChange={(e) => handleUserInputChange(e)}
                value={userInputFiled[0].toemail}
                name="toemail"
                className={styles.fullwidth}
                id="clientsemail"
                type={'text'}
                placeholder="email@example.com"
                required
              />
              <label className={styles.label} htmlFor="cstreetaddres">
                Street Adress
              </label>
              <input
                className={styles.fullwidth}
                onChange={(e) => handleUserInputChange(e)}
                value={userInputFiled[0].streetadrr}
                name="streetadrr"
                id="clientscity"
                type={'text'}
                required
              />
            </div>
            <div className={styles.rowinputs}>
              <div>
                <label className={styles.label} htmlFor="clientscity">
                  City
                </label>
                <input
                  onChange={(e) => handleUserInputChange(e)}
                  value={userInputFiled[0].tocity}
                  name="tocity"
                  id="clientscity"
                  type={'text'}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="clientspostcode">
                  Post Code
                </label>
                <input
                  onChange={(e) => handleUserInputChange(e)}
                  value={userInputFiled[0].topocode}
                  name="topocode"
                  id="clientspostcode"
                  type={'text'}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="clientscountry">
                  Country
                </label>
                <input
                  onChange={(e) => handleUserInputChange(e)}
                  value={userInputFiled[0].tocountry}
                  name="tocountry"
                  id="clientscountry"
                  type={'text'}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label className={styles.label} htmlFor="invoicedate">
                Invoice Date
              </label>
              <input
                onChange={(e) => handleUserInputChange(e)}
                value={userInputFiled[0].invoicedate}
                className={styles.fullwidth}
                type="date"
                name="invoicedate"
                id="invoicedate"
              />
            </div>
            <div>
              <label className={styles.label} htmlFor="payterms">
                Payment Terms
              </label>
              <select
                onChange={(e) => handleUserInputChange(e)}
                className={styles.fullwidth}
                name="paymentdue"
                id="payterms"
              >
                <option className={styles.opts} value="1day">
                  Net 1 day
                </option>
                <option className={styles.opts} value="7day">
                  Net 7 day
                </option>
                <option className={styles.opts} value="14day">
                  Net 14 day
                </option>
                <option className={styles.opts} value="30day">
                  Net 30 day
                </option>
              </select>
            </div>
            <div>
              <label className={styles.label} htmlFor="description">
                Project Description
              </label>
              <input
                onChange={(e) => handleUserInputChange(e)}
                value={userInputFiled[0].projectname}
                className={styles.fullwidth}
                type="text"
                name="projectname"
                id="description"
                placeholder="e.g. Software development Service"
              />
            </div>
          </div>
          <div>
            <div>
              <div className={styles.itemlistTitle}>Item List</div>
              <div className={styles.itemlegends}>
                <div className={styles.itmname}>Item Name</div>
                <div className={styles.itemlabels}>Qty</div>
                <div className={styles.itemlabels}>Price</div>
                <div className={styles.itemlabels}>Total</div>
              </div>
              {inputField.map((input, index) => {
                return (
                  <div key={index}>
                    <Itemlist
                      input={input}
                      handleFormChange={handleFormChange}
                      removeFields={removeFields}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
            <button className={styles.addnewbtn} onClick={addFields}>
              <MdAdd /> Add New Item
            </button>
          </div>
          <div className={styles.btns}>
            <button onClick={toggle} className={styles.discard}>
              Discard
            </button>
            <div>
              <button className={styles.draft}>Save as Draft</button>
              <button onClick={submit} className={styles.save}>
                Save & Send
              </button>
            </div>
          </div>
        </from>
      </div>
    </div>
  );
}

export default AddInvoice;
