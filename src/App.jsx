import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/admin/ProtectedRoute.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminEvents from "./pages/admin/AdminEvents.jsx";
import EventForm from "./pages/admin/EventForm.jsx";
import AdminAwards from "./pages/admin/AdminAwards.jsx";
import AwardForm from "./pages/admin/AwardForm.jsx";
import AdminSamavesh from "./pages/admin/AdminSamavesh.jsx";
import SamaveshForm from "./pages/admin/SamaveshForm.jsx";
import AdminGallery from "./pages/admin/AdminGallery.jsx";
import GalleryForm from "./pages/admin/GalleryForm.jsx";
import AdminMembers from "./pages/admin/AdminMembers.jsx";
import MemberForm from "./pages/admin/MemberForm.jsx";
import AdminMedia from "./pages/admin/AdminMedia.jsx";
import MediaForm from "./pages/admin/MediaForm.jsx";
import AdminCenters from "./pages/admin/AdminCenters.jsx";
import CenterForm from "./pages/admin/CenterForm.jsx";
import AdminSems from "./pages/admin/AdminSems.jsx";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/events" element={<AdminEvents />} />
            <Route path="/admin/events/new" element={<EventForm />} />
            <Route path="/admin/events/:id/edit" element={<EventForm />} />
            <Route path="/admin/awards" element={<AdminAwards />} />
            <Route path="/admin/awards/new" element={<AwardForm />} />
            <Route path="/admin/awards/:id/edit" element={<AwardForm />} />
            <Route path="/admin/samavesh" element={<AdminSamavesh />} />
            <Route path="/admin/samavesh/new" element={<SamaveshForm />} />
            <Route path="/admin/samavesh/:id/edit" element={<SamaveshForm />} />
            <Route path="/admin/gallery" element={<AdminGallery />} />
            <Route path="/admin/gallery/new" element={<GalleryForm />} />
            <Route path="/admin/gallery/:id/edit" element={<GalleryForm />} />
            <Route path="/admin/members" element={<AdminMembers />} />
            <Route path="/admin/members/new" element={<MemberForm />} />
            <Route path="/admin/members/:id/edit" element={<MemberForm />} />
            <Route path="/admin/media" element={<AdminMedia />} />
            <Route path="/admin/media/new" element={<MediaForm />} />
            <Route path="/admin/media/:id/edit" element={<MediaForm />} />
            <Route path="/admin/centers" element={<AdminCenters />} />
            <Route path="/admin/centers/new" element={<CenterForm />} />
            <Route path="/admin/centers/:id/edit" element={<CenterForm />} />
            <Route path="/admin/sems" element={<AdminSems />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;