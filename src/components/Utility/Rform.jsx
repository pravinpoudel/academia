import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

// validation with schema
const validationSchema = yup.object.shape({
    username: Yup.string().trim().required("Required").min(5, "minimum 5 chars").max(25, "less than 25 chars"),
    email:yup.string().trim().email("Invalid email").required("Required"),
    Age: yup.number().required("Required").integer("age should be integer").min(10,"below minimum").max(90, "above maximum"),
    password:yup.string().trim().required("Required").min(5, "minimum 5 chars length").max(25, "less than 25 chars"),
    confirmpassword:yup.string().trim().required("required").oneOf([yup.ref("password"), null], "password dont match")
});

// yupresolver-> this is how you assign schema to the useForm hook
// ---------------------------------------------------------------------------------
// userForm({
//     resolver: yupResolver(schema)
// })

function RForm() {

    const {handleSubmit, watch, register, formState:{isSubmitting, isSubmitSuccessful, errors}} = useForm({});
    const [error, setErrors] = useState("");
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const watchShowAge = watch("showAge", false);

    const onSubmit= (formData)=>{
        console.log(formData);
    }
    

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
                    <label>Email:</label>
                    <input type="password" {...register(email)} />
                    {error.email && <p className="email">{error.email.password}</p> }
                </div>

                {/*
                consider that there is another input field password and this is validation for confirm password
                <input type="password" placeholder="confirm password"
                                        {...register("confirmpassword", {validate:{
                                            (value)=>value === watch("password")
                                        }})}
                  */}
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
