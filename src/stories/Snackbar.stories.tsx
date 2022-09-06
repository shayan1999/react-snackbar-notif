import React from "react"
import { storiesOf } from "@storybook/react"

import {SnackbarProvider}  from "../components/Snackbar/SnackbarProvider"
import Test from "./Test";

const stories= storiesOf("Snackbar test", module);

stories.add("Snackbar", ()=> {

    return(
        <SnackbarProvider vertical="bottom" horizontal="center" dir="ltr">
            <Test/>
        </SnackbarProvider>
    )
})