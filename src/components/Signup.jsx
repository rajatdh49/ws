import React, { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const auth = getAuth();
  const [name, setName] = useState("Nigga");
  const [email, setEmail] = useState("nigga@gmail.com");
  const [password, setPassword] = useState("hjasjh");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const x = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
    console.log(name, email, password);
  };

  return (
    <form
      className="bg-white h-96 w-96 flex flex-col rounded-2xl"
      onSubmit={handleSubmit}
    >
      <div className="ml-auto mr-auto">
        <h1 className="font-bold tracking-wide mt-10 font-Roboto ">
          Create Account
        </h1>
      </div>
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input type="text" value={email} />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <span>
          <input type="checkbox" /> Remember Me
        </span>
        <button>Sign Up</button>
        <span>Already have an account? </span>
      </div>
    </form>
  );
}

export default Signup;
