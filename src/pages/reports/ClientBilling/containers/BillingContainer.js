import { connect } from 'react-redux';

import { getBilling } from '../modules/actions';
import Billing from '../../Billing/components/Billing';

const mapStateToProps = ({ billing }) => billing;

const mapDispatchToProps = {
  getBilling,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Billing);
