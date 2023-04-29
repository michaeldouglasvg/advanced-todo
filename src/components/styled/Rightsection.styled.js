import styled from 'styled-components';

export const Rightstyledsection = styled.div`
 width: 100%;
 padding: .4rem .4rem;
 height: 96%;
 overflow-y: scroll;
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
`

export const TaskHeaderStyles = styled.div`
 width: 96%;
 padding: .2rem .4rem;
 background: white;
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-radius: 3px;
 margin: .1rem auto;
 border-top: 5px solid palegreen;

 & .Topwrapper{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .4rem 1rem;

  & > .Leftsorts{
   display: flex;
   align-items: center;
   justify-content: center;

   & .Time{
    height: 30px;
    display: grid;
    place-items: center;
    width: 80px;
    font-weight: 600;
    font-size: 20px;
   }
   & .Sort{
    height: 30px;
    display: grid;
    place-items: center;
    cursor: pointer;
    margin-left: .4rem;
   }
  }

  & .Rightdisplay{
   display: flex;
   align-items: center;
   justify-content: center;

   & .Search{
    height: 29px;
    display: grid;
    place-items: center;
    cursor: pointer;
    margin-right: .6rem;
   }
   & .Infor{
    height: 30px;
    display: grid;
    place-items: center;
    cursor: pointer;
   }
  }
 }

 & > .Searchcontainer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .4rem .4rem;
  & form {
   width: 90%;
   & input{
    width: 100%;
    padding: .6rem .6rem;
    outline: none;
    border: none;
    border-radius: 3px;
    background: gainsboro;
   }
  }

  & .Closesearch{
   padding: .4rem .2rem;
   margin-left: .6rem;
   display: grid;
   place-items: center;
   border-radius: 3px;
   cursor: pointer;
   &:hover{
    background: orangered;
    transition: all 500ms;
   }
  }
 }
`

export const TaskDisplaySection = styled.div`
 width: 96%;
 margin: .5rem auto;
 border-radius: 3px;
 padding: 0rem .4rem;
 background: white;
 position: relative;
 overflow-y: scroll;
 height: 82%;
 &::-webkit-scrollbar{
  display: none;
 }

 & h1{
  width: 94%;
  position: sticky;
  top: 0;
  left: 0;
  padding: .6rem .6rem;
  background: silver;
  color: white;
  margin: .2rem auto;
 }
`