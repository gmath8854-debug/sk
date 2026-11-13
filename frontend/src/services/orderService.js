import { api } from './api';

export const orderService = {
  createOrder: async (orderPayload) => {
    return await api.post('/orders/create', orderPayload);
  },
  
  getOrders: async () => {
    return await api.get('/orders');
  },

  submitCustomization: async (customizationData) => {
    return await api.post('/customization/submit', customizationData);
  },

  submitCorporateEnquiry: async (corporateData) => {
    return await api.post('/corporate/enquire', corporateData);
  }
};

