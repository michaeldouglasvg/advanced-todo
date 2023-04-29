import {createGlobalStyle} from 'styled-components';

const Globalstyled = createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  font-size: 13px;
  color: grey;
  user-select: none;
 }

 body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: all 500ms;
  background: slateblue;
 }
`

export default Globalstyled;