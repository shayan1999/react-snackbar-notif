import React from "react";


const SnackbarContext = React.createContext({
    snackbarState: {
        toggleOpenSnackbar: false,
        color: "success",
        message: null,
        vertical: '',
        horizontal: ''
    },
    setSnackbarState: (props: any) => {

    }
});

export default SnackbarContext;