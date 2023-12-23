import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FrameTwentySix = React.lazy(() => import("pages/FrameTwentySix"));
const MacBookPro16Twelve = React.lazy(() => import("pages/MacBookPro16Twelve"));
const FrameTwentyFive = React.lazy(() => import("pages/FrameTwentyFive"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frametwentyfive" element={<FrameTwentyFive />} />
          <Route path="/macbookpro16twelve" element={<MacBookPro16Twelve />} />
          <Route path="/frametwentysix" element={<FrameTwentySix />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
