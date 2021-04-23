import React, { useState } from 'react';

import {useForm} from "react-hook-form";

function RForm() {

    const {handleSubmit, watch, register, formState:{isSubmitting, isSubmitSuccessful, errors}}= useForm({});
    const [error, setErrors] = useState("");
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const watchShowAge = watch("showAge", false);

    const onSubmit= (formData)=>{
       
        console.log(formData);
    }
    
    // validation with schema
    // yup

    return (
        <div>
            <div className="container-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formgroup">
                <label>UserName: </label><br />

                {/* you can use pattern for the input value with regex like: */}
                {/* default type: text */}
                {/* <input {...register("lastname", {required:true, maxLength: 20, pattern: /^[A-Za-z]+$/i})} /> */}
                {/* for type="number" {...register("age", {min:18, max:99})} */}

                <input type="text" placeholder="username" {...register("username", {minLength:{ value:2, message:"input should be more than two char"}, validate:{
                    positive: value=>{if(!(value.trim().length>0)){return "you cant leave this empty";} else {return true}},
                    nospecialchar: value=>{if(value.trim().match(specialChars)){return "not all input are valid for name"} else {return true}},
                    lessThanTwentyfive: value=>{if(!(value.trim().length<25)){return "input should be less than 90";} else {return true}}
                }})} /><br />
                {errors.username && <p className="error
                -message">{errors.username.message}</p>}
                </div>
                <div className="formgroup">
                <label>Age: </label>
                <input type="checkbox" {...register("showAge")} />
               

                </div>
                <div className="formgroup">
                    <input type="file" {...register("profilepic")} />
                </div>
                <div className="formgroup">
                {watchShowAge && <input type="text" placeholder="age" {...register("age", {validate:{
                    positive: value=>{if(!(parseInt(value)>10)){return "sorry, you should be older than 10";} else {return true}},
                    lessThanTen: value=>{if(!(parseInt(value)<90)){return "sorry, age limit is 90";} else {return true}}
                }})}/>}

                {errors.age && <p className="error-message">{errors.age.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>      
    </div>
  
    )
}

export default RForm
