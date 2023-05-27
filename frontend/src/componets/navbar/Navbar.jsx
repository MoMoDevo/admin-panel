 import "./navbar.css"
 import { SearchTwoTone} from '@mui/icons-material';
 import {LightModeOutlined} from '@mui/icons-material';
 import {LanguageOutlined} from '@mui/icons-material';
 import {ModeNightOutlined} from '@mui/icons-material';
 import {EventSeatOutlined} from '@mui/icons-material';
 import {NotificationsOutlined} from '@mui/icons-material';
 import {MenuOutlined} from '@mui/icons-material';
 import {ChatBubbleOutlineOutlined} from '@mui/icons-material';
import { Badge } from "@mui/material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkmodeContext";
const Navbar = () => {
  const{dispatch}=useContext(DarkModeContext)
  const{darkMode}=useContext(DarkModeContext)
  return (
    <div className="navbar">


      <div className="wraper">
        <div className="search">
          <input type="text" className="search_input" placeholder="search" autoFocus />
          <SearchTwoTone/>

        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon"/>
          
          </div>
          <div className="item" onClick={()=>dispatch({type:"TOGGLE"})}>


          {darkMode?(<LightModeOutlined className="icon"/>):(  <  ModeNightOutlined className="icon"/>)} 
          
            
          </div>
          <div className="item">
            <EventSeatOutlined className="icon"/>
         
          </div>
          <div className="item">
          <Badge badgeContent={4} color="secondary">

            <NotificationsOutlined className="icon"/>
</Badge>
          
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon"/>
       
          </div>

          <div className="item">
           <img src="data:image/jpeg;base64,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" alt="" className="profile_pic"/>
       
          </div>

          <div className="item">
            <MenuOutlined className="icon"/>
       
          </div>

          
    

          

          

          
        </div>
       
      </div>
     
    </div>
  )
}

export default Navbar