import { FunctionComponent, ReactNode, useMemo } from "react";
import { FaBrain, FaLaptopCode } from "react-icons/fa";
import { GiFilmProjector } from "react-icons/gi";
import { IoFitnessSharp, IoFileTrayFull } from "react-icons/io5";
import { IconContext } from "react-icons";
import { ContextFunc } from "../../ContextProvider";

const NavItems: FunctionComponent<ReactNode> = () => {
    const { hamView, setHamView, setFilterItems, filterItems, data, setData } =
        ContextFunc();

    function handleCats(cats: string) {
        setFilterItems(cats);
    }

    return (
        <>
            <div className="nav-items">
                <div
                    className={
                        filterItems === "all" ? "nav-links active" : "nav-links"
                    }
                    onClick={() => handleCats("all")}
                >
                    <IconContext.Provider value={{ className: "nav-icons" }}>
                        <IoFileTrayFull />
                    </IconContext.Provider>
                    <p className={hamView ? "nav-name-active" : ""}>All</p>
                </div>
                <div
                    className={
                        filterItems === "non-fiction"
                            ? "nav-links active"
                            : "nav-links"
                    }
                    onClick={() => handleCats("non-fiction")}
                >
                    <IconContext.Provider value={{ className: "nav-icons" }}>
                        <FaBrain />
                    </IconContext.Provider>
                    <p className={hamView ? "nav-name-active" : ""}>
                        Non-Fiction
                    </p>
                </div>
                <div
                    className={
                        filterItems === "tech"
                            ? "nav-links active"
                            : "nav-links"
                    }
                    onClick={() => handleCats("tech")}
                >
                    <IconContext.Provider value={{ className: "nav-icons" }}>
                        <FaLaptopCode />
                    </IconContext.Provider>

                    <p className={hamView ? "nav-name-active" : ""}>Tech</p>
                </div>
                <div
                    className={
                        filterItems === "health and lifestyle"
                            ? "nav-links active"
                            : "nav-links"
                    }
                    onClick={() => handleCats("health and lifestyle")}
                >
                    <IconContext.Provider value={{ className: "nav-icons" }}>
                        <IoFitnessSharp />
                    </IconContext.Provider>

                    <p className={hamView ? "nav-name-active" : ""}>
                        Health & Lifestyle
                    </p>
                </div>
                <div
                    className={
                        filterItems === "movies"
                            ? "nav-links active"
                            : "nav-links"
                    }
                    onClick={() => handleCats("movies")}
                >
                    <IconContext.Provider value={{ className: "nav-icons" }}>
                        <GiFilmProjector />
                    </IconContext.Provider>

                    <p className={hamView ? "nav-name-active" : ""}>Movies</p>
                </div>
            </div>
        </>
    );
};

export default NavItems;
