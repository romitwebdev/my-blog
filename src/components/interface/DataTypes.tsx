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
};
