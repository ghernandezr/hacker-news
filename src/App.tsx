import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { News, Faves, NoMatch } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          <Route path="faves" element={<Faves />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
