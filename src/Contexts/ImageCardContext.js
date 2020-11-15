import { createContext, useState } from "react";

export const ImageCardContext = createContext();


export const ImageContextProvider = (props) => {
    
    const imageObj = {
        title: "Lol",
        rating: 9.1,
        description: "Vitun hyvä leffa"
    }
    const [imageInfo, setInfo] = useState( imageObj );

    const toggleActive = (obj) => {
        setInfo(obj);
    }

    return (
        <ImageCardContext.Provider value={[{...imageInfo}, toggleActive]}>
            {props.children}
        </ImageCardContext.Provider>
    );
}