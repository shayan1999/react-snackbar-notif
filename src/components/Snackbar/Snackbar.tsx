import React, { useContext, useEffect } from "react";
import SnackbarContext from "../context/snackbarContext";
import "./style.css"
import { FiX } from "react-icons/fi";
import {BsCheckAll} from "react-icons/bs"
import {BiErrorCircle} from "react-icons/bi"
import {AiOutlineWarning} from "react-icons/ai"

interface Props{
    timeout: number,
    vertical: "top"|"center"|"bottom",
    horizontal: "left"|"center"|"right",
    dir: "ltr" | "rtl"
}

export const Snackbar=({timeout, vertical, horizontal, dir}: Props)=>{

    const {snackbarState, setSnackbarState}= useContext(SnackbarContext);

    const SHOW = snackbarState.toggleOpenSnackbar;
    const MESSAGE = snackbarState.message;
    const COLOR= snackbarState.color;
    const VERTICAL= snackbarState.vertical?snackbarState.vertical:vertical;
    const HORIZONTAL= snackbarState.horizontal?snackbarState.horizontal:horizontal;

    const verticalStyle=VERTICAL==='bottom'?"snackbar-bottom":VERTICAL==='center'?"snackbar-center-vertical":"snackbar-top";
    const horizontalStyle= HORIZONTAL === 'left'?"snackbar-left":HORIZONTAL==='center'?"snackbar-center-horizontal":"snackbar-right";

    

    var TIMER: any;

    async function handleTimeout() {
        clearTimeout(TIMER);
        let element= document.getElementById('custom-snack');
        element?.classList.remove('snackbar-close');
        element?.classList.add('snackbar-open');
        
        TIMER = setTimeout(() => {
            element?.classList.add('snackbar-close');
            element?.classList.remove('snackbar-open');
            setTimeout(()=>{
                setSnackbarState({...snackbarState, message: null, toggleOpenSnackbar: false})
            }, 500)
        }, timeout);
    }

    function handleClose() {
        clearTimeout(TIMER);
        let element= document.getElementById('custom-snack');
        element?.classList.add('snackbar-close');
        element?.classList.remove('snackbar-open');
        setTimeout(()=>{
            setSnackbarState({...snackbarState, message: null, toggleOpenSnackbar: false})
        }, 500)
    }

    useEffect(() => {
        if (SHOW) {
            handleTimeout();
        }
        return () => {
            clearTimeout(TIMER);
        };
    }, [SHOW, MESSAGE, TIMER, COLOR]);

    const setIcon=()=>{
        if(COLOR==='error') return <BiErrorCircle width={20} height={20}/>
        if(COLOR==='success')return <BsCheckAll/>
        return <AiOutlineWarning/>
    }

    const directionalLang={
        error:{
            rtl: 'خطا',
            ltr: 'Error'
        },
        success:{
            rtl: 'موفقیت',
            ltr: 'Done'
        },
        warn:{
            rtl: 'اخطار',
            ltr: 'Warn'
        }
    }

    if(SHOW){
        return (
            <div data-testid="custom-snack" id='custom-snack' 
            className={`
                    snackbar-container 
                    ${verticalStyle} 
                    ${horizontalStyle} 
                    ${SHOW?'snackbar-open':'snackbar-close'} 
                    ${COLOR==='error'?'error-snack':COLOR==='success'?'success-snack':'warn-snack'}
                    ${dir==='rtl'?'snackbar-rtl':'snackbar-ltr'}
                    `
                }>
                <div>
                    {setIcon()}
                </div>
                <span className="ms-2 mr-2" style={{fontFamily: "serif", textAlign: dir==='ltr'?'left':'right', wordBreak: 'break-all'}}>{COLOR==='error'?directionalLang.error[dir]:COLOR==='success'?directionalLang.success[dir]:directionalLang.warn[dir]}: {MESSAGE}</span>
                <div>
                    <button className={`snackbar-button ${COLOR==='error'?'error-snack':COLOR==='success'?'success-snack':'warn-snack'}`} onClick={handleClose}>
                        <FiX/>
                    </button>
                </div>
            </div>
        );
    }else{
        return(
            null
        )
    }
}