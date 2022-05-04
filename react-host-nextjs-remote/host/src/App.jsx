import React from 'react';
import NextjsRemoteComponent from 'remote/nextjs-remote-component'

function App() {
  return (
    <>
      <div>
        This is the React container App hosted at localhost:8080
      </div>
      <NextjsRemoteComponent />
    </>
      
  );
}

export default App;
