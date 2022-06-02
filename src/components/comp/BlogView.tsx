import { FunctionComponent, ReactNode } from "react";
import { useParams } from "react-router-dom";
import { ContextFunc } from "../../ContextProvider";

const BlogView: FunctionComponent<ReactNode> = () => {
    const { contrast, data } = ContextFunc();

    const { id } = useParams();

    // get id from params and filter the id from data

    const item = data.filter((dt) => dt.id === Number(id));

    return (
        // if items then show items else show message
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
