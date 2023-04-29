import React, { useState, useContext } from 'react';
import { SignuppageStyled, Formcontainer,
 AlternativeSignup } from "../components/styled/Signup.styled"
import { Buttonsprimary, Buttonsecondary, 
 Facebookbutton, Googlebutton, Githubbutton } from "../components/styled/Button.styled"
import { Cardglobalsignup } from '../components/styled/Cardglobal.styled';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa'
import { UserProfileContext } from '../context/profile-context';


const Signuppage = ({ isAuntenticated, setIsAuntenticated }) => {
 const[login, setLogin] = useState(false)

 const { useremail, password, setPassword, setUseremail, validatePassword, loginUsers, loguseremail, logpassword, logsetUseremail, logsetPassword, error } = useContext(UserProfileContext)

  return (
    <SignuppageStyled>

    
     <Cardglobalsignup>
      <Formcontainer>
      {!login ? ( 
       <>
        <h1>For user who are new</h1>
        <form>
          <h2>Create an account</h2>
          <div className='Formcontrol'>
           <span>User email: </span>
           <input type='text' placeholder='Eg:- michael21douglas@gmail.com' value={useremail} onChange={(e) => {setUseremail(e.target.value)}}/>
          </div>
          <div className='Formcontrol'>
           <span>User Password: </span>
           <input type='password' placeholder='Atleast 8-character long' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <div className='Formcontrol Button'>
           <Buttonsprimary onClick={(e) => {validatePassword(e, setLogin)}}>Signup</Buttonsprimary>
          </div>
          <p>Already have an account, 
           <span onClick={() => {setLogin(true)}}>Signin here</span>
          </p>
        </form>
       </>
      )
       :
       (
        <>
          <h1 style={{ color: login && "gold"}}>For user with existing profile</h1>
          <form>
          <h2>Signin your account</h2>
          {error && <p>error</p>}
          <div className='Formcontrol'>
           <span>User email: </span>
           <input type='text' placeholder='Eg:- michael21douglas@gmail.com' value={loguseremail} onChange={(e) => {logsetUseremail(e.target.value)}}/>
          </div>
          <div className='Formcontrol'>
           <span>User Password: </span>
           <input type='password' placeholder='Atleast 8-character long' value={logpassword} onChange={(e) => {logsetPassword(e.target.value)}}/>
          </div>
          <div className='Formcontrol Button'>
           <Buttonsecondary onClick={(e) => {loginUsers(e)}}>Signin</Buttonsecondary>
          </div>
          <p>Don't have an account, <span onClick={() => {setLogin(false)}}>Signup here</span></p>
         </form>
        </>
      
       )}
       
      </Formcontainer>

      <AlternativeSignup>
        <h1>Alternative ways to Signin</h1>
        <div className='Buttons'>
         <Facebookbutton>
          <FaFacebook size={25} color='blue'/> <p>Facebook</p></Facebookbutton>
         <Googlebutton><FaGoogle size={25} color='orange'/><p>Google</p></Googlebutton>
         <Githubbutton><FaGithub size={25} color='grey'/><p>Github</p></Githubbutton>
        </div>
        {!isAuntenticated && <Buttonsecondary onClick={() => setIsAuntenticated(!isAuntenticated)}>Go back to the tasks instead.</Buttonsecondary>}
      </AlternativeSignup>
     </Cardglobalsignup>

    </SignuppageStyled>
  );
}

export default Signuppage;
