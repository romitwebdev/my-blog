import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextFunc } from "../../ContextProvider";

// post type

interface Ipost {
    post: {
        id: number;
        imageURL: string;
        title: string;
        category: string;
        body: string;
        isFav: boolean;
    };
    setPost: React.Dispatch<React.SetStateAction<Ipost["post"]>>;
}

const inititalPost = {
    id: 1,
    imageURL: "",
    title: "",
    category: "",
    body: "",
    isFav: false,
};

const BlogPost = () => {
    const { contrast, currentUser, data, setData } = ContextFunc();
    const [post, setPost] = useState<Ipost["post"]>(inititalPost);
    const navigate = useNavigate();

    // setPost on change

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) {
        const value = e.target.value;

        setPost({
            ...post,
            id: Date.now() * Math.floor(Math.random() * Date.now()),
            [e.target.name]: value,
        });
    }

    // setData on form submit

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!post.title && !post.imageURL && !post.category && !post.body) {
            console.log("not");
            alert("Please, fill the required field");
            return;
        }
        setData([...data, post]);

        navigate("/");
    }

    return (
        // toggle darkness and show form only for current user

        <div className={contrast ? "blogpost active" : "blogpost"}>
            {currentUser.isAdmin ? (
                <form
                    action=""
                    className={
                        contrast ? "form-container active" : "form-container"
                    }
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <div
                        className={
                            contrast ? "form-header active" : "form-header"
                        }
                    >
                        <h1>Upload Blog</h1>
                    </div>
                    <div className="form-control">
                        <div className="form-input">
                            <input
                                type="text"
                                placeholder="title"
                                className={
                                    contrast
                                        ? "form-title active"
                                        : "form-title"
                                }
                                value={post.title}
                                name="title"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="form-input">
                            <input
                                type="text"
                                placeholder="imageURL"
                                className={
                                    contrast
                                        ? "form-img-url active"
                                        : "form-img-url"
                                }
                                value={post.imageURL}
                                name="imageURL"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="form-input">
                            <select
                                className={
                                    contrast
                                        ? "form-select active"
                                        : "form-select"
                                }
                                value={post.category}
                                name="category"
                                onChange={(e) => handleChange(e)}
                            >
                                <option defaultValue="select category" hidden>
                                    select category
                                </option>
                                <option value="non-fiction">Non-Fiction</option>
                                <option value="tech">Tech</option>
                                <option value="health and lifestyle">
                                    Health & Lifestyle
                                </option>
                                <option value="movies">Movies</option>
                            </select>
                        </div>
                        <div className="form-input">
                            <textarea
                                placeholder="text"
                                rows={3}
                                className={
                                    contrast
                                        ? "form-text-area active"
                                        : "form-text-area"
                                }
                                value={post.body}
                                name="body"
                                onChange={(e) => handleChange(e)}
                            ></textarea>
                        </div>
                        <div className="form-input">
                            <input type="submit" className="form-submit-btn" />
                        </div>
                    </div>
                </form>
            ) : (
                <p>you don't have permission</p>
            )}
        </div>
    );
};

export default BlogPost;
