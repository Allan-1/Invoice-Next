export const initialState = { invoices: [] };

const invoiceReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'Add_Invoice':
      console.log('Add invoice', payload);

      return {
        ...state,
        invoice: payload.invoices,
      };
    case 'Remove_Invoice':
      console.log('Remove Invoice', payload);
      return {
        ...state,
        invoice: payload.invoices,
      };
    case 'Update_Invoice':
      console.log('Update Invoice', payload);
    default:
      throw new Error(`No case for ${type} found in Invoice reducer`);
  }
};

export default invoiceReducer;
