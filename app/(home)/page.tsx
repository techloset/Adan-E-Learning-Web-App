import Dashboard from "./components/Dashboard";
import Success from "./components/Success";
import CloudSoftware from "./components/CloudSoftware";
import Tofc from "./components/TOFC";
import Feature from "./components/Feature";
import Explore from "./components/Explore";
import WhatTheySay from "./components/WhatTheySay";
import NewsAndResources from "./components/NewsAndResources";
import Navbar from "./components/Navbar";

import Footer from "@/components/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Success />
      <CloudSoftware />
      <Tofc />
      <Feature />
      <Explore />
      <WhatTheySay />
      <NewsAndResources />
      <Footer />
    </>
  )
}
