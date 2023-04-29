import React, { useEffect, useState} from 'react';
import { Rightstyledsection, TaskHeaderStyles, TaskDisplaySection  } from "./styled/Rightsection.styled";
import { FaCog, FaSearch, FaTimes } from 'react-icons/fa';
import Singletask from './Singletask';

const Sectionright = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [search, setSearch] = useState(false)

  // Time function
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <Rightstyledsection>
      {/* User profile >> Top section */}
      <TaskHeaderStyles>
       {!search ? (<div className='Topwrapper'>
          <div className='Leftsorts'>
            <div className='Time'>
              <p>{time}</p>
            </div>
          </div>
          <div className='Rightdisplay'>
            <div className='Search'><FaSearch size={20} onClick={() => {setSearch(true)}}/></div>
            <div className='Infor'><FaCog size={20} color="grey"/></div>
          </div>
       </div>)
       :
       (
       <div className='Searchcontainer'>
        <FaSearch size={20}/>
        <form>
          <input type='search' placeholder='Search...'/>
        </form>
        <div className='Closesearch'>
          <FaTimes size={20} onClick={() => {setSearch(false)}}/>
        </div>
       </div>
       )}
      </TaskHeaderStyles>

      {/* Task display section */}
      <TaskDisplaySection>
        <h1>Your saved tasks</h1>
        <Singletask />
      </TaskDisplaySection>
    </Rightstyledsection>
  );
}

export default Sectionright;
