import { FunctionComponent, ReactNode } from "react";

import { ContextFunc } from "../../ContextProvider";
import Card from "./Card";

const Content: FunctionComponent<ReactNode> = () => {
    const { hamView, setHamView, contrast, data, setData, filterItems } =
        ContextFunc();
    return (
        <>
            <section
                className={
                    contrast ? "content-section active" : "content-section"
                }
            >
                <div
                    className={
                        contrast
                            ? "content-container container"
                            : "content-container container"
                    }
                >
                    <h2>
                        {filterItems.charAt(0).toUpperCase() +
                            filterItems.slice(1)}
                    </h2>
                    <div className="content-holder">
                        <Card />
                        {/* <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card /> */}
                        {/* <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card /> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Content;
