import React, { useState } from "react";
import SnackbarContext from "../context/snackbarContext";
import {Snackbar} from "./Snackbar";

interface Props{
    children: JSX.Element;
    timeout?: number;
    vertical?: "bottom"|"center"|"top";
    horizontal?: "center"|"left"|"right";
    dir?: "rtl"| "ltr";
}

interface stateType{
    toggleOpenSnackbar: boolean;
    color: "success" | "error" | "warning";
    message: string | null;
    vertical?: "bottom"|"center"|"top";
    horizontal?: "center"|"left"|"right";
    
}

export const SnackbarProvider = ({children, timeout= 3000, vertical= 'bottom', horizontal= 'center', dir= 'ltr'}: Props) => {

    const [snackbarState, setSnackbarState] = useState<stateType>({
        toggleOpenSnackbar: false,
        color: "success",
        message: null,
        vertical: "bottom",
        horizontal: "center"
    });
    const value = { snackbarState, setSnackbarState };

    return (
        //@ts-ignore
        <SnackbarContext.Provider value={value}>
            <Snackbar timeout={timeout} vertical={vertical} horizontal={horizontal} dir={dir}/>
            {children}
        </SnackbarContext.Provider>
    );

}