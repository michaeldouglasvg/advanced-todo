import styled from 'styled-components';

export const SignuppageStyled = styled.div`
 width: 100%;
 height: 100vh;
 background: whitesmoke;
 display: flex;
 align-items: center;
 justify-content: center;
`

export const Formcontainer = styled.div`
 width: 100%;
 padding: .4rem .4rem;
 height: 96%;
 overflow-y: scroll;
 margin-top: .6rem;
 display: flex;
 align-items: flex-end;
 justify-content: flex-start;
 flex-direction: column;
  &::-webkit-scrollbar{
   display: none;
  }
 
 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  width: 100%;
  padding: .6rem 1rem;
  margin-top: 1rem;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 45%;
  padding: .6rem 1rem;
  margin-top: 0;
 }

 h1{
  width: 90%;
  padding: 1rem .2rem;
  font-size: 1.5rem;
  color: skyblue;
  text-align: center;
  margin: .1rem auto;
 }

 & > form{
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: .2rem auto;
  padding: .5rem .4rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, .1);
  border-radius: 5px;
  padding-bottom: 1rem;
  border-top: 5px solid brown;
  transition: all 500ms;

  h2{
   width: 100%;
   padding: .6rem .1rem;
   font-size: 1.2rem;
   margin-bottom: .6rem;
   border-bottom: 1px solid rgba(0, 0, 0, .1);
   text-align: center;
  }

  & > .Formcontrol {
   width: 96%;
   margin-top: 1rem;
   display: flex;
   flex-direction: column;
   justify-content: center;

   span{
    font-size: 1rem;
   }
   input{
    margin-top: .4rem;
    padding: .8rem .5rem;
    outline: none;
    border: none;
    border-radius: 3px;
   }
  }
  
  p{
   text-align: center;
   span{
    color: blue;
    padding-left: .5rem;
    cursor: pointer;
   }
  }
 }
`

export const AlternativeSignup = styled.div`
 width: 100%;
 padding: .4rem .4rem;
 height: 96%;
 overflow-y: scroll;
 display: flex;
 align-items: flex-start;
 justify-content: flex-start;
 flex-direction: column;
 margin-top: .6rem;
  &::-webkit-scrollbar{
   display: none;
  }
 
 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  width: 100%;
  padding: .6rem 1rem;
  margin-top: 1rem;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 46%;
  padding: .6rem 1rem;
  margin-top: 0;
 }

 h1{
  width: 100%;
  padding: 1rem .2rem;
  font-size: 1.5rem;
  color: skyblue;
  text-align: left;
 }

 & > .Buttons{
  margin-top: 1rem;
  width: 60%;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, .1);
  border-radius: 5px;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 1rem;
  border-top: 5px solid goldenrod;
 }
`