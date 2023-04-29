import React, { createContext, useState } from "react";

export const UserProfileContext = createContext(null);

export const UserProfileContextProvider = (props) => {
 const[useremail, setUseremail] = useState('');
 const[password, setPassword] = useState('');
 const[image, setImage] = useState('');

 // Logins
 const[logusername, logsetUsername] = useState("");
 const[loguseremail, logsetUseremail] = useState('');
 const[logpassword, logsetPassword] = useState('');


 // Login/Signup users
 const loginUsers = (e) => {
  e.preventDefault();
 }


 const UserContextValues = { useremail, password, setPassword, setUseremail, image, setImage, loginUsers, logusername, logsetUsername, loguseremail, logpassword, logsetUseremail, logsetPassword};

 return (
  <UserProfileContext.Provider value={UserContextValues}>
   {props.children}
  </UserProfileContext.Provider>
 );
};