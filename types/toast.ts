import { ToastOptions, toast } from "react-toastify";

export const TOAST_TYPES = {
  success: toast.success,
  warning: toast.warning,
  error: toast.error,
  info: toast.info,
};

export type ShowToastType = (
  type: keyof typeof TOAST_TYPES,
  message: string | React.ReactNode,
  options?: ToastOptions,
) => void;
