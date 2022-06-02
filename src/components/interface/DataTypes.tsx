import React from "react";

export type DataTypes = {
    data: {
        id: number;
        imageURL: string;
        title: string;
        category: string;
        body: string;
        isFav: boolean;
    }[];

    setData: React.Dispatch<React.SetStateAction<DataTypes["data"]>>;

    hamView: boolean;

    setHamView: React.Dispatch<React.SetStateAction<DataTypes["hamView"]>>;

    contrast: boolean;

    setContrast: React.Dispatch<React.SetStateAction<DataTypes["contrast"]>>;

    filterItems: string;

    setFilterItems: React.Dispatch<
        React.SetStateAction<DataTypes["filterItems"]>
    >;

    users: {
        id: Number;
        firstName: string;
        lastName: string;
        password: string;
        isAdmin: boolean;
    }[];

    setUsers: React.Dispatch<React.SetStateAction<DataTypes["users"]>>;

    currentUser: {
        id: Number;
        firstName: string;
        lastName: string;
        password: string;
        isAdmin: boolean;
    };

    setCurrentUser: React.Dispatch<
        React.SetStateAction<DataTypes["currentUser"]>
    >;

    login: boolean;

    setLogin: React.Dispatch<React.SetStateAction<DataTypes["login"]>>;
};
