import styled from 'styled-components';

export const Leftstyledsection = styled.div`
 width: 100%;
 padding: .4rem .4rem;
 height: 96%;
 overflow-y: scroll;
  &::-webkit-scrollbar{
   display: none;
  }
 
 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  width: 100%;
  padding: .6rem 1rem;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 46%;
  padding: .6rem 1rem;
 }
`

export const TopUserProfile = styled.div`
 width: 96%;
 padding: .2rem .4rem;
 background: white;
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-radius: 3px;
 margin: .1rem auto;
 border-top: 4px solid skyblue;

 & .Profile{
  padding: .2rem .2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > .ProImage{
   width: 40px;
   height: 40px;
   display: grid;
   place-items: center;
   overflow: hidden;
   background: honeydew;
   border-radius: 20px;
   outline: 1px solid grey;
  }

  & > .Userdetails{
   margin-left: 1rem;
   & p{
    font-size: 12px;

   }
  }
 }

 & .ProfileSettings{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60px;
  margin-right: 1rem;

  & .Adduser{
   width: 40px;
   height: 40px;
   display: grid;
   place-items: center;
   overflow: hidden;
   border-radius: 3px;
   cursor: pointer;
  }

  & .Usersettings{
   width: 40px;
   height: 40px;
   display: grid;
   place-items: center;
   overflow: hidden;
   border-radius: 3px;
   cursor: pointer;
  }
 }
`

export const FormAddTaskpage = styled.div`
 width: 96%;
 margin: .4rem auto;
 border-radius: 3px;
 padding: .2rem .4rem;
 background: white;
 border-top: 4px solid brown;
 padding-bottom: 1rem;

 & h1{
  width: 100%;
  padding: .4rem .1rem;
  font-size: 1.5rem;
  border-bottom: 1px solid silver;
 }

 & form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
  border-radius: 3px;

  & .Taskformgroup{
   width: 98%;
   margin: .6rem auto;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;

   & span{
    font-size: 1.3rem;
   }

   & input{
    margin-top: .2rem;
    padding: .6rem 1rem;
    outline: none;
    border: none;
    border-radius: 3px;
    background: gainsboro;
    width: 90%;
   }

   & input[type='submit']{
    background: linear-gradient(270deg, skyblue, blue, purple, skyblue);
    color: whitesmoke;
    width: 96%;
    margin: 1rem auto;
    cursor: pointer;
    padding: 1rem 1rem;
   }
  }

  & .Reminder{
   width: 98%;
   margin: .2rem auto;
   display: flex;
   align-items: flex-start;
   flex-wrap: wrap;

   & .Date{
    width: 45%;
    & span{
     font-size: 1.2rem;
    }

    & input{
     margin-top: .2rem;
     padding: .6rem 1rem;
     outline: none;
     border: none;
     border-radius: 3px;
     background: gainsboro;
     width: 90%;
    }
   }

   & .Setreminder{
    width: 49%;
    & span{
     font-size: 1.3rem;
    }
    & select{
     margin-top: .2rem;
     padding: .6rem 1rem;
     outline: none;
     border: none;
     border-radius: 3px;
     background: gainsboro;
     width: 96%;
    }
   }
  }
 }
`

export const FooterTaskPage = styled.div`
 width: 90%;
 margin: .5rem auto;
 border-radius: 3px;
 padding: .8rem .4rem;
 background: white;
 border-left: 10px solid goldenrod;
 border-right: 10px solid goldenrod;
 display: flex;
 align-items: center;
 justify-content: space-around;
 flex-wrap: wrap;

 & .Copyright{
   & p{
    font-size: 1rem;
   }
 }
 & .Links{
  display: flex;
  align-items: center;

  & p{
   margin-right: 1rem;
  }
 }
`