import styled from 'styled-components';

export const Cardglobalstyling = styled.section`
 width: 100%;
 box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 flex-wrap: wrap;
 background: whitesmoke;
 border-radius: 3px;

 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  width: 90%;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
  margin: 1rem auto;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 80%;
  height: calc(100vh - 200px);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
  margin: 5rem auto;
  padding: 1rem 1rem;
 }
`


// Signup page
export const Cardglobalsignup = styled.section`
 width: 100%;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;

 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  width: 90%;
  margin: 1rem auto;
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 80%;
  height: calc(100vh - 200px);
  margin: 5rem auto;
  padding: 1rem .2rem;
 }
`