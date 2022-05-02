import React from 'react';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        This is the Remote App ;-) 
      </div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </>
      
  );
}

export default App;
