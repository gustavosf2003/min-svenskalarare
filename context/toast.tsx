import React, { createContext, useContext } from "react";

import { ToastContainer, toast } from "react-toastify";

import { ShowToastType, TOAST_TYPES } from "@/types/toast";

import "react-toastify/dist/ReactToastify.css";

const ToastContext = createContext(undefined);

export function ToastProvider({ children }) {
  function showToast(
    type: string,
    message: string,
    options = {
      autoClose: 2000,
    },
  ): ShowToastType {
    const toastFn = TOAST_TYPES[type] || toast.success;
    return toastFn(message, options);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastContainer position="bottom-center" />
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
