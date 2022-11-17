import { notification } from "ant-design-vue";
import pkg from "axios";
const { AxiosError } = pkg;

export default {
  raiseError: function (e, show_notification, message = undefined) {
    if (e instanceof AxiosError) {
      message = e.response?.data?.message;
      if (message == undefined) {
        message = e.response?.data?.msg;
      }
    } else if (e instanceof Error) {
      message = e.message;
    }

    if (show_notification && (message != undefined || message != null)) {
      notification["error"]({
        message: message,
      });
    }
    return e;
  },
  raiseSuccess: function (message) {
    notification["success"]({
      message: message,
    });
  },
};
