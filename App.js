import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) { // getItem can return actual value or null
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };
    

    return (
        <div className="container">

            <p className="title">LOGIN FORM </p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input type="text" placeholder="*****" {...register("name")} />
                <label>E-mail</label>
                <input type="email" placeholder="*****"{...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                    <label>Password</label>
                <input type="password" placeholder="*****" {...register("password")} />
                <label>confirm Password</label>
                <input type="confirm password" placeholder="*****" {...register("confirm password")} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </div>
    );
    
}
export default App;