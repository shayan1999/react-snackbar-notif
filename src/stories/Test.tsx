import React, {useState} from "react";
import {useSnackbar} from "../components/Snackbar/useSnackbar";

export default function Test(){

    const snackbar= useSnackbar();
    const [state, setState]= useState({
        message: '',
        color: 'success'
    })

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: "flex", flexDirection: 'row'}}>
                <button onClick={()=> snackbar({message: state.message, color: "error", vertical: 'top', horizontal: "left"})}>click me</button>
                <button onClick={()=> snackbar({message: state.message, color: "error", vertical: 'top', horizontal: 'center'})}>click me</button>
                <button onClick={()=> snackbar({message: state.message, color: "error", vertical: 'top', horizontal: 'right'})}>click me</button>
            </div>
            <div style={{display: "flex", flexDirection: 'row'}}>
                <button onClick={()=> snackbar({message: state.message, color: "error", vertical: 'center', horizontal: 'left'})}>click me</button>
                <button onClick={()=> snackbar({message: state.message, color: "error", vertical: 'center', horizontal: 'center'})}>click me</button>
                <button onClick={()=> snackbar({message: state.message, color: "error", vertical: 'center', horizontal: 'right'})}>click me</button>
            </div>
            <div style={{display: "flex", flexDirection: 'row'}}>
                <button onClick={()=> snackbar({message: state.message, color: "error", vertical: "bottom", horizontal: "left"})}>click me</button>
                <button onClick={()=> snackbar({message: state.message, color: "error", vertical: "bottom", horizontal: "center"})}>click me</button>
                <button onClick={()=> snackbar({message: state.message, color: "error", vertical: "bottom", horizontal: "right"})}>click me</button>
            </div>
            <div style={{display: "flex", flexDirection: 'row'}}>
                <button onClick={()=> snackbar({message: state.message, color: "error"})}>click me</button>
            </div>
            <input placeholder="message" value={state.message} onChange={(e)=> setState({...state, message: e.target.value})}/>
            <div style={{display: "flex", flexDirection: 'row'}}>
                <button onClick={()=> snackbar({message: state.message, color: "error"})}>click me</button>
                <button onClick={()=> snackbar({message: state.message, color: "success"})}>click me</button>
                <button onClick={()=> snackbar({message: state.message, color: "warning"})}>click me</button>
            </div>
        </div>
    )
}