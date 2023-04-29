import React, { useState } from 'react'
import Globalstyled from "./components/globals/Globalstyles.styled"
import { ThemeProvider } from "styled-components"
import Homepage from './pages/Homepage'
import Signuppage from './pages/Signuppage'
import { UserProfileContextProvider } from "./context/profile-context"
import { TaskContextProvider } from "./context/Taskcontext"

function App() {
  // const[themeset, setThemeset] = useState(true)
  const[isAuntenticated, setIsAuntenticated] = useState(true)

  const theme = {
    // colors: {
    //   header: "skyblue",
    //   body: themeset ? 'whitesmoke': "rgb(33, 29, 29)",
    //   footer: "grey ",
    //   color: themeset ? "black" : "white",
    //   boxshadowset: themeset ? "0 0 2px 1px rgba(0, 0, 0, .2)" : "0 0 2px 1px rgba(255, 255, 255, .2)"
    // },

    responsive: {
      mobilesm: "426px",
      mobilemd: "769px",
      mobilelg: "1025px"
    },

    buttons: {
      primary: {
        color: "white",
        backgroundColor: "green",
      },
      secondary: {
        backgroundColor: "skyblue",
      },
      danger: {
        backgroundColor: "orangered",
      },
      default: {
        color: "grey",
        backgroundColor: "whitesmoke",
      }
    }
  }

  return (
    <UserProfileContextProvider>
   <>
    <ThemeProvider theme={theme}>
      <Globalstyled />
      {!isAuntenticated ? 
        (
        <Signuppage setIsAuntenticated={setIsAuntenticated} isAuntenticated={isAuntenticated}/>
        )
        : 
        (
          <TaskContextProvider>
          <Homepage setIsAuntenticated={setIsAuntenticated}/>
          </TaskContextProvider>
        )
      }
    </ThemeProvider>
   </>
   </UserProfileContextProvider>
  );
}

export default App;
