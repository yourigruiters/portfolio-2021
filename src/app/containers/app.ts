import { ReduxState } from '../typings/state';
import App from '../app';
import { connect } from 'react-redux';
import { getTheme } from '../redux/theme/selectors';

const mapStateToProps = (state: ReduxState) => {
  return {
    reduxTheme: getTheme(state),
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App) as any;
