import React, {
    FunctionComponent,
    ReactNode,
    createContext,
    useState,
    useContext,
} from "react";
import { Data } from "./components/interface/Data";
import { DataTypes } from "./components/interface/DataTypes";

const initialState = Data;

const Context = createContext<DataTypes>(initialState);

export function ContextFunc() {
    return useContext(Context);
}

const ContextProvider: FunctionComponent<ReactNode> = ({ children }) => {
    const [data, setData] = useState<DataTypes["data"]>(initialState.data);

    const [hamView, setHamView] = useState<DataTypes["hamView"]>(
        initialState.hamView
    );

    const [contrast, setContrast] = useState<DataTypes["contrast"]>(
        () => false
    );

    const [filterItems, setFilterItems] = useState<DataTypes["filterItems"]>(
        initialState.filterItems
    );

    const [users, setUsers] = useState<DataTypes["users"]>(initialState.users);

    const [currentUser, setCurrentUser] = useState<DataTypes["currentUser"]>(
        initialState.currentUser
    );

    const [login, setLogin] = useState<DataTypes["login"]>(initialState.login);

    return (
        <Context.Provider
            value={{
                data,
                setData,
                hamView,
                setHamView,
                contrast,
                setContrast,
                filterItems,
                setFilterItems,
                users,
                setUsers,
                currentUser,
                setCurrentUser,
                login,
                setLogin,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
