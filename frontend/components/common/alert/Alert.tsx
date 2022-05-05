import { toast } from "react-toastify";

export const Alert = (msg:any) => {
  toast(msg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar : true,
  });
};