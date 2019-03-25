import {
  ITEM_CHOOSE_LICENSE
} from '../../constants';

const chooseLicense = (license) => ({
  type: ITEM_CHOOSE_LICENSE, 
  payload: license
});



export default {
  chooseLicense, 
  addToCart
}