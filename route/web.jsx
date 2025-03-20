import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/auth/login";

function WebRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default WebRouter;
