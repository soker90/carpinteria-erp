import React from 'react';
import {story as DeliveryOrderProducts} from './DeliveryOrderProducts';

export default {
  title: 'Rutas|Albarán/Productos',
  parameters: {
    component: DeliveryOrderProducts,
    componentSubtitle: 'Tabla de productos',
  },
};

/**
 * code, productName, quantity, price, amount, diff
 */

const DeliveryOrderProductsStory = () =>
  <DeliveryOrderProducts
    products={[
        {
          code: '2345',
          productName: 'Pollo',
          quantity: 6.6,
          price: 1.3,
          amount: 15,
          diff: -1.2,
        },
        {
          code: '1111',
          productName: 'Lentejas',
          quantity: 2,
          price: 3.3,
          amount: 1,
          diff: 6.35,
        },
        {
          code: '6846',
          productName: 'Pan',
          quantity: 2,
          price: 0.5,
          amount: 1,
          diff: 0,
        },
      ]}
  />;

DeliveryOrderProductsStory.story = {
  name: 'Productos',
};

export {DeliveryOrderProductsStory};
