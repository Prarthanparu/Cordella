import axios from "axios";
export const client = axios.create({
  baseURL:  'https://cordelia.fortelogic.in'
});

client.interceptors.response.use(
  (response) => response,

  (error) => {
    // if (error.response.status === 401) {
    //   localStorage.clear();
    //   window.location.href = "/accessdenied";
    // localStorage.setItem("isLoggedIn", false);
    // <Redirect to={{ pathname: "/login" }} />;
    // <Route
    //   render={() => (
    //     <>
    //       {/* {localStorage.clear()} */}
    //     </>
    //   )}
    // />;
    // }
  }
  // const { response } = error;
  // console.log(error, "<<< error in interceptors");
  // if (response.responseCode === 401) {
  //   return response;
  // } else if (response.responseCode === 400) {
  //   return response;
  // } else if (response.responseCode === 422) {
  //   return response;
  // } else {
  //   return response;
  // }
  // return Promise.reject(error.response);
);
// client.interceptors.response.use(
//   // (response) => {
//   //   if (response.status === 401) {
//   //     alert("You are not authorized");
//   //   }
//   //   return response;
//   // },
//   (error) => {
//     if (error.response && error.response.data) {
//       return Promise.reject(error.response.data);
//     }
//     return Promise.reject(error.message);
//   }
// );
