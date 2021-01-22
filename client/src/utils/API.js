import axios from "axios";

export default {
  // Signs up new User
  signUpUser: function(userData) {
    return axios.post("api/users", userData)
    //console.log(userData.username, userData.password);
  },
};
