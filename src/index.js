import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.scss";
import App from "./views/index";
import reportWebVitals from "./reportWebVitals";

// import AuthLayout from "layouts/Auth/Auth.js";
// import AdminLayout from "layouts/Admin/Admin.js";

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
//       <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
//       <Redirect from="/" to="/dashboard" />
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
