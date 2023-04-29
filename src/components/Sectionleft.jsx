import React, { useContext } from 'react'
import { Leftstyledsection, TopUserProfile, FormAddTaskpage, FooterTaskPage } from "./styled/Leftsection.styled";
import { FaUserPlus, FaUserAlt, FaWhatsappSquare, FaGithub, FaEnvelope, FaSignOutAlt } from "react-icons/fa"
import { TaskContext } from "../context/Taskcontext"

const Sectionleft = ({ setIsAuntenticated }) => {

  const { onSaveTask, taskmessage, reminderdate, setREminderdate, tasktitle, setTasktitle, setTaskreminder, taskreminder, setTaskmessage } = useContext(TaskContext)

  return (
    <Leftstyledsection>
      {/* User profile >> Top section */}
      <TopUserProfile>
        <div className='Profile'>
            <div className='ProImage'>
              <FaUserAlt size={20} color="grey"/>
            </div>
            <div className='Userdetails'>
              <p>Michael Douglas</p>
              <p>johndoe21m@gmail.com</p>
            </div>
        </div>
        <div className='ProfileSettings'>
          <div className='Adduser'>
            <FaUserPlus size={20} color="grey" onClick={() => setIsAuntenticated()}/>
          </div>
          <div className='Usersettings'>
            <FaSignOutAlt size={20} color="grey"/>
          </div>
        </div>
      </TopUserProfile>

      {/* ADding task form page */}
      <FormAddTaskpage>
        <h1>Add task below</h1>
        <form>
          <div className='Taskformgroup'>
            <span>Title</span>
            <input type='text' placeholder='Eg:- Taking home duties and relaxing'
            value={tasktitle} onChange={(e) => {setTasktitle(e.target.value)}}/>
          </div>
          <div className='Taskformgroup'>
            <span>Description</span>
            <input type='text' placeholder='Eg:- Before relaxing...' value={taskmessage}
            onChange={(e) => {setTaskmessage(e.target.value)}}/>
          </div>
          <div className='Reminder'>
            <div className='Setreminder'>
              <span>Set reminder:</span>
              <select id="priority-select" value={taskreminder} onChange={(e) => {setTaskreminder(e.target.value)}}>
                <option value="">--Turn On/Off--</option>
                <option value="true">On</option>
                <option value="false">Off</option>
              </select>
            </div>
            {taskreminder === "true" && <div className='Date'>
              <span>Include date</span>
              <input type='date' value={reminderdate} onChange={(e) => {setREminderdate(e.target.value)}}/>
            </div>}
          </div>

          {(tasktitle !== "" && taskmessage !== "" && taskreminder !== "") && <div className='Taskformgroup'>
            <input type='submit' value='Save Task' onClick={(e) => {onSaveTask(e)}}/>
          </div>}
        </form>
      </FormAddTaskpage>

      {/* Footer page */}
      <FooterTaskPage>
        <div className='Copyright'>
          <p>Copyright&copy;2023Gtechdeveloper.com</p>
        </div>
        <div className='Links'>
          <p>Contact developer through</p>
          <FaWhatsappSquare size={20} color='green'/>
          <FaGithub size={20} color='black'/>
          <FaEnvelope size={20} color='orangered'/>
        </div>
      </FooterTaskPage>
    </Leftstyledsection>
  )
}

export default Sectionleft
