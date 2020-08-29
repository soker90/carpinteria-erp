import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { TextEuro, TableMaterial } from 'components';
import { format } from 'utils';
import { BASE_PATH } from 'constants/common';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import { useStyles } from './InInvoices.styles';

const InInvoices = ({ deliveryOrders: { data, count } }) => {
  const classes = useStyles();

  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Fecha',
          render: ({ date }) => format.date(date),
        },
        {
          title: 'Total',
          render: ({ total }) => <TextEuro num={total} />,
        },
      ]}
      data={data}
      count={count}
      title='En factura'
      actions={[
        {
          icon: VisibilityIcon,
          tooltip: 'Ver',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/albaranes/${_id}`,
        },
      ]}
    />
  );
};

InInvoices.propTypes = {
  deliveryOrders: PropTypes.shape({
    data: PropTypes.array,
    count: PropTypes.number,
  }).isRequired,
};

InInvoices.displayName = 'InInvoices';

export default memo(InInvoices);
