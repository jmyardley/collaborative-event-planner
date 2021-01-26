import axios from "axios";

export default {
  // User routes
  signUpUser: function(userData) {
    return axios.post("api/users/signup", userData)

  },
  loginUser: function (userData) {
    return axios.post("api/users/login", userData)
  },

  //Event routes
  createEvent: function (eventData) {
    return axios.post("api/events/create", eventData)
    .then(console.log(eventData))
  },
  //loadEvents: function ()
};
