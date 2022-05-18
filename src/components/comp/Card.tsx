import { FunctionComponent, ReactNode, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { ContextFunc } from "../../ContextProvider";

const Card: FunctionComponent<ReactNode> = () => {
    const {
        hamView,
        setHamView,
        contrast,
        data,
        setData,
        filterItems,
        setFilterItems,
    } = ContextFunc();

    function handleFilteredList() {
        if (filterItems === "all" || !filterItems) {
            return data;
        } else {
            return data.filter(
                (dt) => dt.category.toLowerCase() === filterItems.toLowerCase()
            );
        }
    }

    let filteredList = useMemo(handleFilteredList, [data, filterItems]);
    return (
        <>
            {filteredList.length > 0 ? (
                filteredList.map((dt) => {
                    return (
                        <div
                            key={dt.id}
                            className={contrast ? "card active" : "card"}
                        >
                            <img src={dt.imageURL} alt="" />
                            <h3>{dt.title}</h3>
                            <span>{dt.category}</span>
                            <p>{dt.body.slice(0, 150)}</p>
                            <NavLink
                                to={`blog/${dt.id}`}
                                className={(isActive) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                <span>Read more...</span>
                            </NavLink>
                        </div>
                    );
                })
            ) : (
                <p>
                    no result for <strong>"{filterItems}"</strong>
                </p>
            )}
        </>
    );
};

export default Card;
