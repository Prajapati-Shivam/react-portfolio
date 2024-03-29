import React from "react";

function Modal({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-md sm:w-full">
          <div className="bg-teal-100 dark:bg-gray-800 p-4 pb-4 sm:p-6 sm:pb-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
