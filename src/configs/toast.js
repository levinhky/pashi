import { toast } from "react-toastify";

export function toastSuccess(message) {
  toast.success(message, {
    position: "top-right",
    autoClose: 300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export function toastError(message) {
  toast.error(message, {
    position: "top-right",
    autoClose: 300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}