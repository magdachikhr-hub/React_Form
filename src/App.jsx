import React from "react";
import Form from "./components/Form";
// import Partners from "./components/Partners";
import ImageSlider from "./components/ImageSlider";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { useState } from "react";

function App() {
  const [registered, setRegistered] = useState(false);

  console.log(registered);

  return (
    <>
      <main className="bg-[#EDF3F8] min-h-screen flex flex-col items-center">
        <Routes>
          <Route
            path="/"
            element={<Form setRegistered={setRegistered}></Form>}
          ></Route>
          {/* <Partners></Partners>
           */}
          <Route
            path="/images"
            element={
              <ProtectedRoute isRegistered={registered}>
                <ImageSlider></ImageSlider>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
