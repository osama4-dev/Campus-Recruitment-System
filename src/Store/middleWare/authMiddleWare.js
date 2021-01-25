import AuthAction from "../actions/authAction";
import { auth } from "../../firebase";

export default class AuthMiddleWare {
  static routGuard() {
    return (dispatch) => {
      auth().onAuthStateChanged((user) => {
        if (!user) {
          dispatch(AuthAction.routGuardAction(true));
        } else {
          dispatch(AuthAction.routGuardAction(true));
          dispatch(AuthAction.signinSuccess(user));
        }
      });
    };
  }
  static signIn(data) {
    return (dispatch) => {
      dispatch(AuthAction.signin(true));
      auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((user) => dispatch(AuthAction.signinSuccess(user)))
        .catch((error) => dispatch(AuthAction.signinFailure(error)));
    };
  }
  static signUp(data) {
    return (dispatch) => {
      dispatch(AuthAction.signup(true));
      auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((user) => dispatch(AuthAction.signupSuccess(user)))
        .catch((error) => dispatch(AuthAction.signupFailure(error)));
    };
  }
  static logout(data) {
    return (dispatch) => {
      dispatch(AuthAction.logout(true));
      auth()
        .signOut()
        .then((user) => dispatch(AuthAction.logoutSuccess(user)))
        .catch((error) => dispatch(AuthAction.logoutFailure(error)));
    };
  }
}
