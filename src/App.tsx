/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UnitPage from "./pages/Unit";
import QuestionPage from "./pages/Question";
import LastNight from "./pages/LastNight";
import MCQMode from "./pages/MCQMode";
import RapidRevision from "./pages/RapidRevision";
import Templates from "./pages/Templates";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="flex min-h-screen flex-col bg-black text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200"
      >
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-black">
        <Navbar />
        <main className="flex-1 mt-0 md:mt-16">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/unit/:id" element={<UnitPage />} />
              <Route path="/question/:id" element={<QuestionPage />} />
              <Route path="/last-night" element={<LastNight />} />
              <Route path="/rapid-revision" element={<RapidRevision />} />
              <Route path="/mcq" element={<MCQMode />} />
              <Route path="/templates" element={<Templates />} />
            </Routes>
          </PageWrapper>
        </main>
      </div>
    </Router>
  );
}
