import axios from "axios";


export default {
  // User routes
  signUpUser: function(userData) {
    return axios.post("/api/users/signup", userData)

  },
  loginUser: function (userData) {
    return axios.post("/api/users/login", userData)
  },

  //Event routes
  createEvent: function (eventData) {
    return axios.post("/api/events/create", eventData)
    .then(console.log(eventData))
  },

  getEvents: function() {
    return axios.get("/api/events");
  },

  findById: function (id) {
    return axios.get("/api/events/" + id);
  },

  //Item routes
  completeItem: function(id) {
    return axios.put("/api/items/" + id)
  }
};
