import mockedGetPayments from '@/mocks/getPayments';
import axios from 'axios';

const { VUE_APP_IS_MOCKED } = process.env;

/**
 * @var {Axios}
 */
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

/**
 * Load payments data.
 *
 * @param {Object} params
 * @returns {Promise}
 */
let getPayments;

getPayments = (params = {}) => instance.request({
  method: 'get',
  url: '/api/v1/payments',
  params,
});

if (VUE_APP_IS_MOCKED) {
  getPayments = mockedGetPayments;
}

export default {
  instance,
  getPayments,
};
