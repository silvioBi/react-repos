import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Repos from "./repos/Repos";
import NoMatch from "./nomatch/NoMatch";

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Repos />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}
