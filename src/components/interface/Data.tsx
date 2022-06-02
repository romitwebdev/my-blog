import { DataTypes } from "./DataTypes";

export const Data: DataTypes = {
    data: [
        {
            id: Date.now(),
            imageURL:
                "https://www.screengeek.net/wp-content/uploads/2021/02/thor-love-and-thunder.jpg",
            title: "Thor",
            category: "Movies",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            isFav: false,
        },
    ],
    setData: (): void => {},

    hamView: false,

    setHamView: () => {},

    contrast: false,

    setContrast: () => {},

    filterItems: "all",

    setFilterItems: () => {},

    users: [
        {
            id: Date.now(),
            firstName: "romit",
            lastName: "poudel",
            password: "hello world",
            isAdmin: true,
        },
        {
            id: Date.now(),
            firstName: "luigi",
            lastName: "poudel",
            password: "123",
            isAdmin: false,
        },
    ],

    setUsers: () => {},

    currentUser: {
        id: Date.now(),
        firstName: "",
        lastName: "",
        password: "",
        isAdmin: false,
    },

    setCurrentUser: () => {},

    login: false,

    setLogin: () => {},
};
