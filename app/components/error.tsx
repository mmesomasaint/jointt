import { useState } from 'react';

const ErrorMessage = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return isVisible ? (
    <div className="fixed top-0 left-0 w-full flex justify-center px-4 py-2 z-50">
      <div className="bg-red-500 text-white px-4 py-2 rounded shadow-md flex items-center">
        <span className="mr-2">{message}</span>
        <button className="text-white font-bold" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  ) : null;
};

export default ErrorMessage;