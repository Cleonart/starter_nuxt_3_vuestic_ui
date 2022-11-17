import moment from "moment-timezone";

export default {
  getCurrentDate: function (date = undefined) {
    return moment(date).tz("Asia/Makassar").format("YYYY-MM-DD");
  },
  getCurrentTime: function (time = undefined) {
    return moment(time).tz("Asia/Makassar").format("HH:mm");
  },
};
