import React from "react";
import Form from "./components/Form";
import Partners from "./components/Partners";
function App() {
  return (
    <>
      <main className="bg-[#EDF3F8] min-h-screen flex flex-col items-center">
        <Form></Form>
        <Partners></Partners>
      </main>
    </>
  );
}

export default App;
