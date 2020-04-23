// import { connect } from "react-redux";
// import { App } from "./app";
// import { onWindowResize } from "../redux/actions/app";
// import { checkAuth, fetchAuthUser } from "../redux/actions/auth";
// import { getMetadata } from "../redux/actions/metadata";
// import { MainState } from "../redux/redux";

// const mapStatetoProps = (state: MainState) => ({
//   auth: state.auth,
//   metadata: state.metadata,
// });
// const mapDispatchToProps = {
//   onWindowResize,
//   fetchAuthUser,
//   getMetadata,
//   checkAuth,
// };

// export default connect(mapStatetoProps, mapDispatchToProps)(App as any);
import { App } from "./app";

export default App;
