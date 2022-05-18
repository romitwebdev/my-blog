import React, { FunctionComponent, ReactNode } from "react";
import ContextProvider from "./ContextProvider";
import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom";
import Home from "./components/comp/Home";
import Navbar from "./components/comp/Navbar";
import BlogPost from "./components/comp/BlogPost";
import Footer from "./components/comp/Footer";
import BlogView from "./components/comp/BlogView";

const App: FunctionComponent<ReactNode> = () => {
    return (
        <BrowserRouter>
            <ContextProvider>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blogpost" element={<BlogPost />} />
                        <Route path="/blog/:id" element={<BlogView />} />
                    </Routes>
                    <Footer />
                </div>
            </ContextProvider>
        </BrowserRouter>
    );
};

export default App;
