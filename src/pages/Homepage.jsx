import React from 'react';
// import { Buttonsprimary, Buttonsecondary, Buttonsdanger, Buttonsdefault} from "./components/styled/Button.styled"
import { Cardglobalstyling } from '../components/styled/Cardglobal.styled';
import Sectionleft from '../components/Sectionleft';
import Sectionright from '../components/Sectionright';

const Homepage = ({ setIsAuntenticated }) => {
  return (
   <Cardglobalstyling>
     <Sectionleft setIsAuntenticated={setIsAuntenticated}/>
     <Sectionright />
   </Cardglobalstyling>
  );
}

export default Homepage;
