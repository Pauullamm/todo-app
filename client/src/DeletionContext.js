import { createContext } from "react";

const deletionContext = createContext({
    delete_todo: () => {},
});

export default deletionContext;