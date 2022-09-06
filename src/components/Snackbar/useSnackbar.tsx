import React, { useContext } from "react";
import SnackbarContext from "../context/snackbarContext";

interface showSnackType{
    message: string;
    color: "error"|"success"|"warning"
    vertical?: "top"|"center"|"bottom";
    horizontal?: "left"|"center"|"right";
}

export const useSnackbar=()=>{

    const {setSnackbarState} = useContext(SnackbarContext);
    
    const showSnack=({message, color, vertical, horizontal}: showSnackType)=>{
        setSnackbarState({
            ...StaticRange,
            toggleOpenSnackbar: true,
            message: message,
            color: color,
            vertical:vertical,
            horizontal:horizontal
        })
    }
    return showSnack;
}