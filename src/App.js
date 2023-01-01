import Router from "./routing/Router";
import React from 'react';

import MessengerCustomerChat from 'react-messenger-customer-chat';
 
const App = () => {
  return (
    <>
      <Router />
    <MessengerCustomerChat
    pageId="100088834186081"
    appId="458648586466110"
  
  />,
    </>
  );
}

export default App;
