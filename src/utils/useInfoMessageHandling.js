import { useState } from 'react';

export const useInfoMessageHandling = () => {
  const [infoMessage, setInfoMessage] = useState(null);

  const showInfoMessage = (message) => {
    setInfoMessage(message);
    setTimeout(() => {
      setInfoMessage(null);
    }, 4000);
  };

  return [infoMessage, showInfoMessage];
};
