/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { Container, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';

import { Header, Page } from 'components';
import DeliveryOrderProducts from './DeliveryOrderProducts';
import DeliveryOrderData from './DeliveryOrderData';
import DeliveryOrderTotals from './DeliveryOrderTotals';
import { useStyles } from './DeliveryOrder.styles';
import AddProductModal from '../modals/AddProduct';

const DeliveryOrder = (
  {
    match: { params: { idDeliveryOrder } }, getProducts, getDeliveryOrder, provider, nameProvider,
    products, date, totals, _id, updateDateDeliveryOrder,
    showDeleteProductModal, showEditProductModal, updatePrice,
  }
) => {
  const classes = useStyles();
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    if (idDeliveryOrder && idDeliveryOrder !== _id) getDeliveryOrder(idDeliveryOrder);
  }, [idDeliveryOrder]);

  useEffect(() => {
    if (provider) getProducts(provider);
  }, [provider]);

  const _closeAddModal = useCallback(() => setShowAddModal(false), [setShowAddModal]);
  const _openAddModal = useCallback(() => setShowAddModal(true), [setShowAddModal]);
  /**
   * Handle change date
   * @param {Date} value
   * @private
   */
  const _handleChangeDate = value => {
    updateDateDeliveryOrder(idDeliveryOrder, value);
  };

  return (
    <>
      <Page className={classes.root} title={`${nameProvider} | Albarán`}>
        <Container maxWidth={false} className={classes.container}>
          <Header
            routes={[{
              link: `/app/proveedores/${provider}`,
              title: `${nameProvider}`,
            },
            {
              link: `/app/proveedores/${provider}#Albaranes`,
              title: 'Albaranes',
            }]}
            title="Albarán"
            description=""
            buttons={[{
              variant: 'contained',
              onClick: _openAddModal,
              Icon: AddIcon,
              disableSvg: true,
              label: 'Añadir',
            }]}
          />

          {
            date && (
              <DeliveryOrderProducts
                products={products}
                showDeleteProductModal={showDeleteProductModal}
                showEditProductModal={showEditProductModal}
                updatePrice={updatePrice}
                date={date}
              />
            )
          }

          <Grid container spacing={3} className={classes.cards}>
            <Grid item xs={12} md={4}>
              <DeliveryOrderData date={date} setDate={_handleChangeDate} />
            </Grid>
            <Grid item xs={12} md={8}>
              <DeliveryOrderTotals {...totals} />
            </Grid>
          </Grid>

        </Container>
      </Page>
      <AddProductModal idProvider={provider} show={showAddModal} close={_closeAddModal} />
    </>
  );
};

DeliveryOrder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      idDeliveryOrder: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  getProducts: PropTypes.func.isRequired,
  getDeliveryOrder: PropTypes.func.isRequired,
  provider: PropTypes.string,
  nameProvider: PropTypes.string,
  products: PropTypes.array.isRequired,
  date: PropTypes.number,
  totals: PropTypes.object,
  _id: PropTypes.string,
  updateDateDeliveryOrder: PropTypes.func.isRequired,
  showDeleteProductModal: PropTypes.func.isRequired,
  showEditProductModal: PropTypes.func.isRequired,
  updatePrice: PropTypes.func.isRequired,
};

DeliveryOrder.displayName = 'DeliveryOrder';
export const story = DeliveryOrder;
export default memo(DeliveryOrder);
