import { connect } from 'react-redux';
import UserShow from './user_show';
import { withRouter } from 'react-router';
import { fetchUser } from '../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  console.log("map state");
  return {
    user: state.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: UserId => dispatch(fetchUser(UserId))
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserShow));
