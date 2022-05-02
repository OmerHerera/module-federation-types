import React from 'react';
import NextjsRemoteComponent from 'remote/nextjs-remote-component'
import NextjsHomePage from 'remote/nextjs-home-page'

function App() {
  return (
    <>
      <div>
        This is the React container App hosted at localhost:8080
      </div>
      <NextjsRemoteComponent />
      <NextjsHomePage />
    </>
      
  );
}

export default App;
