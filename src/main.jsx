import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './routes/Layout';
import CreateView from './routes/CreateView';
import GalleryView from './routes/GalleryView';
import CrewmateView from './routes/CrewmateView';
import UpdateView from './routes/UpdateView';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route path="/create" element={<CreateView />} />
        <Route path="/gallery" element={<GalleryView />} />
        <Route path="/:crewmateID" element={<CrewmateView />} />
        <Route path="/:crewmateID/edit" element={<UpdateView />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
