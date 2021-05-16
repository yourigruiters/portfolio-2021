import { setTheme } from '../../redux/theme/actions';
import { connect } from 'react-redux';
import ThemeSwitcher from '../../components/themeSwitcher/ThemeSwitcher';
import { ReduxState } from 'app/typings/state';
import { selectTheme } from '../../redux/theme/selectors';

const mapStateToProps = (state: ReduxState) => {
  return {
    theme: selectTheme(state),
  };
};

const mapDispatchToProps = {
  setTheme,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeSwitcher) as any;
