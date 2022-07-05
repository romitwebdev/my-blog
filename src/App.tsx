import React, { FunctionComponent, ReactNode } from "react";
import ContextProvider from "./ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/comp/Home";
import Navbar from "./components/comp/Navbar";
import BlogPost from "./components/comp/BlogPost";
import Footer from "./components/comp/Footer";
import BlogView from "./components/comp/BlogView";
import Login from "./components/comp/Login";
import Signup from "./components/comp/Signup";

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
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                    <Footer />
                </div>
            </ContextProvider>
        </BrowserRouter>
    );
};

export default App;
