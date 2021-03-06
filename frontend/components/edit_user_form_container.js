import { connect } from 'react-redux';
import { updateUser } from '../actions/user_actions';
import EditUserForm from './edit_user_form';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    currentUser:state.session.currentUser,
    errors: state.errors.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (id, userInfo) => dispatch(updateUser(id, userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);
