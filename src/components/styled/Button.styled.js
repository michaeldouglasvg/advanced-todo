import styled from 'styled-components';

export const Buttonsprimary = styled.button`
 padding: .8rem 1rem;
 outline: none;
 border: none;
 border-radius: 3px;
 color: ${({theme}) => theme.buttons.primary.color};
 background: ${({theme}) => theme.buttons.primary.backgroundColor};
 box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
 cursor: pointer;
 margin: .6rem 1rem;
`

export const Buttonsecondary = styled.button`
 padding: .8rem 1rem;
 outline: none;
 border: none;
 border-radius: 3px;
 color: ${({theme}) => theme.buttons.primary.color};
 background: ${({theme}) => theme.buttons.secondary.backgroundColor};
 box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
 cursor: pointer;
 margin: .6rem 1rem;
`

export const Buttonsdanger = styled.button`
 padding: .8rem 1rem;
 outline: none;
 border: none;
 border-radius: 3px;
 color: ${({theme}) => theme.buttons.primary.color};
 background: ${({theme}) => theme.buttons.danger.backgroundColor};
 box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
 cursor: pointer;
 margin: .6rem 1rem;
`

export const Buttonsdefault = styled.button`
 padding: .8rem 1rem;
 outline: none;
 border: none;
 border-radius: 3px;
 color: ${({theme}) => theme.buttons.default.color};
 background: ${({theme}) => theme.buttons.default.backgroundColor};
 box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
 cursor: pointer;
 margin: .6rem 1rem;
`


// Signup options
export const Facebookbutton = styled.button`
 padding: 1rem 1rem;
 outline: none;
 border: none;
 border-radius: 3px;
 color: white;
 background: skyblue;
 box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
 cursor: pointer;
 margin: .6rem 1rem;
 width: 100%;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 color: white;
 p{
  font-size: 1.5rem;
  color: white;
  margin-left: 2rem;
 }
`

export const Googlebutton = styled.button`
 padding: 1rem 1rem;
 outline: none;
 border: none;
 border-radius: 3px;
 color: white;
 background: orange;
 box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
 cursor: pointer;
 margin: .6rem 1rem;
 width: 100%;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 color: white;
 p{
  font-size: 1.5rem;
  color: white;
  margin-left: 2rem;
 }
`

export const Githubbutton = styled.button`
 padding: 1rem 1rem;
 outline: none;
 border: none;
 border-radius: 3px;
 color: white;
 background: black;
 box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
 cursor: pointer;
 margin: .6rem 1rem;
 width: 100%;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 color: white;
 p{
  font-size: 1.5rem;
  color: white;
  margin-left: 2rem;
 }
`