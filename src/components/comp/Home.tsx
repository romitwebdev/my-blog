import React, { useEffect } from "react";
import { ContextFunc } from "../../ContextProvider";
import Content from "./Content";

const Home = () => {
    const { contrast } = ContextFunc();

    // change background of body according to contrast

    useEffect(() => {
        if (contrast) {
            document.querySelector("body")?.classList.add("body-active");
        } else {
            document.querySelector("body")?.classList.remove("body-active");
        }
    }, [contrast]);

    return (
        <div className="home">
            <Content />
        </div>
    );
};

export default Home;
