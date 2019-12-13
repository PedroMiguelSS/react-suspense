import React, { Suspense } from "react";
import { createRoot } from "react-dom";
import List from "./List";
import Loader from "./Loader";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <List />
    </Suspense>
  );
};

createRoot(document.getElementById("root")).render(<App />);
