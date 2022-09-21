import React, { useState,useReducer } from "react";
import './mystyple.css';
let AcceptName=()=>{
    const[nam,setname]=useState("");
    return(
        <div>
            <h1>Welcome {nam}</h1>
            <input type="text" name="name" value={nam} onChange={(e)=>{setname(e.target.value)}}/>
        </div>
    )
}

let EmpForm=()=>{
    const init={
        id:"",
        pwd:"",
        sal:0,
        dept:""
    }
    const styleobj={
        textAlign:"center",
        color:"green"
    };
    const[al,setall]=useState("left");
    const[cl,setcol]=useState("blue");
    const reducer=(state,action)=>{
        switch(action.type){
            case 'update':return{...state,[action.field]:action.val};
            case 'reset':return init;
        }
    }
    
    const sendData=(e)=>{
        e.preventDefault();
        console.log(JSON.stringify(eid))
    }
    const[eid,dispatch]=useReducer(reducer,init);
    
    return(
        <div>
             <p style={{textAlign:"center",color:"yellow"}}> helo vikash</p>
            <p style={{textAlign:al,color:cl}}>hiiiii</p>
            <p style={styleobj}>vikash IS HERE</p>
            <p class="content">checking how class content work</p>
            <input type="color" name="color" value={cl} onChange={(e)=>{setcol(e.target.value)}}/>
            <input type="textAlign" name="text" value={al} onChange={(e)=>{setall(e.target.value)}}/>
            <h1>Employee Form</h1>
            <form>
                <label>Enter empid : </label>
                <p>this is emplooye details</p>
               
                <input type="text" name="eid" value={eid.id} onChange={(e)=>{
                    dispatch({type:'update',field:'id',val:e.target.value})}}/><br></br>
                     <label>Enter passoward : </label>
                <input type="text" name="pwd" value={eid.pwd} onChange={(e)=>{
                    dispatch({type:'update',field:'pwd',val:e.target.value})}}/><br></br>
                     <label>Enter salary : </label>
                    <input type="number" name='sal' value={eid.sal} onChange={(e)=>{
                        dispatch({type:'update',field:'sal',val:e.target.value})
                    }} /><br></br>
                    <input type="submit" value="send" onClick={(e)=>{sendData(e)}}/><br></br>
                    <input type="submit" value="reset" onClick={()=>{dispatch({type:'reset'})}}/>
                   <button className="btn btn-primary btn-lg">click</button>
            </form>
            {JSON.stringify(eid)}
        </div>
    )
}
let DynamicStyling=()=>{
    const[cl,setcl]=useState("green");
    return(
        <div>
            <p style={{color:cl}}>dynamic style</p>
            <input type="color" name="style" value={cl} onChange={(e)=>{setcl(e.target.value)}}/>
        </div>
    )
}

export default DynamicStyling;
