import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AppsPage from "@/pages/apps";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AppsPage />} path="/apps" />
    </Routes>
  );
}

export default App;
