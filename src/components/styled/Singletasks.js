import styled from 'styled-components';

export const SingleTaskStyled = styled.div`
 width: 98%;
 background: white;
 box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
 margin: .8rem auto;
 position: relative;
 border-radius: 3px;
 transition: all 500ms;
`

export const TaskHeader = styled.div`
 width: 99%;
 position: sticky;
 top: 0;
 padding: .2rem .2rem;
 background: whitesmoke;
 display: flex;
 align-items: center;
 justify-content: space-between;
 cursor: pointer;
 z-index: 10;

 & .LeftSection{
  display: flex;
  align-items: center;

  & .Showexpand{
   width: 30px;
   height: 30px;
   display: grid;
   place-items: center;
   border-radius: 3px;
   outline: 1px solid silver;
   transition: all 500ms;
  }

  & .Titlemsg{
   margin-left: .4rem;
   & p{
    font-size: 11px;
    padding: .1rem;
   }
  }
 }

 & .Statusclock{
   margin-right: .2rem;
   & p{
    font-size: 11px;
    padding: .1rem;
   }
  }

`

export const TaskMessageStyled = styled.div`
 width: 100%;
 padding: .4rem .4rem;
 position: relative;
 animation: opendown .8s ease;
 over-flow: hidden;

 @keyframes opendown {
  from{
    max-height: 0;
  }
  to{
    max-height: 260px;
  }
 }

 & p{
  padding: .1rem .2rem;
  font-size: 11px;
  line-height: 1.3rem;
  margin-bottom: 1rem;
 }

 & .Manipulatetask{
      position: absolute;
      bottom: 0;
      right: 1rem;
      display: flex;
      align-items: center;
      background: white;
      padding: .2rem 1rem;
      border-radius: 3px 0 3px 0;
      border-top: 2px solid brown;
      transition: all 500ms;

      & div{
      width: 20px;
      height: 20px;
      border-radius: 3px;
      margin-right: .5rem;
      cursor: pointer;
      display: grid;
      place-items: center;

      &:nth-child(1){
        &:hover{
        background: skyblue;
        }
      }
      &:nth-child(2){
        &:hover{
        background: orangered;
        }
      }
      }
    }

 & .Manipulatetask{
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    display: none;
  }
 }

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  &:hover{
    & .Manipulatetask{
      position: absolute;
      bottom: 0;
      right: 1rem;
      display: flex;
      align-items: center;
      background: white;
      padding: .2rem 1rem;
      border-radius: 3px 0 3px 0;
      border-top: 2px solid brown;
      transition: all 500ms;

      & div{
      width: 20px;
      height: 20px;
      border-radius: 3px;
      margin-right: .5rem;
      cursor: pointer;
      display: grid;
      place-items: center;

      &:nth-child(1){
        &:hover{
        background: skyblue;
        }
      }
      &:nth-child(2){
        &:hover{
        background: orangered;
        }
      }
      }
    }
  }
}
`