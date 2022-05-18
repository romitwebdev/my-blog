import { FunctionComponent, ReactNode, useMemo } from "react";
import { useParams } from "react-router-dom";

import { ContextFunc } from "../../ContextProvider";

const BlogView: FunctionComponent<ReactNode> = () => {
    const { hamView, setHamView, contrast, data, setData, filterItems } =
        ContextFunc();

    const { id } = useParams();

    console.log(id);

    const item = data.filter((x) => x.id === Number(id));

    console.log(item);

    return (
        <>
            <section
                className={contrast ? "blog-section active" : "blog-section"}
            >
                {item.length > 0
                    ? item.map((itm) => {
                          return (
                              <div key={itm.id}>
                                  <div className="blog-heading">
                                      <h1>{itm.title}</h1>
                                      Category: <i>{itm.category}</i>
                                  </div>
                                  <div className="blog-body">
                                      <img src={itm.imageURL} alt="" />

                                      <div>{itm.body}</div>
                                  </div>
                              </div>
                          );
                      })
                    : "not found"}
            </section>
        </>
    );
};

export default BlogView;
