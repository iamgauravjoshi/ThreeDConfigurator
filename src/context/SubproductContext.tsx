import { createContext, useState } from "react";

const SubProductContext = createContext({});

export const SubProductContextProvider = ({ children }: any) => {
    const [subproductView, setSubproductView] = useState<boolean>(false);
    const [hotspotId, setHotspotId] = useState<number>(0);

    return (
        <SubProductContext.Provider
            value={{subproductView, setSubproductView, hotspotId, setHotspotId}}
        >
            {children}
        </SubProductContext.Provider>
    );
};

export default SubProductContext;
