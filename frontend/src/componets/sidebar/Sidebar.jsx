 import "./sidebar.css"
 import {GridView} from '@mui/icons-material';
 import {GroupsOutlined}  from '@mui/icons-material';
  import {PaymentOutlined} from '@mui/icons-material';
  import {LocalShippingOutlined} from '@mui/icons-material';
import {CircleNotificationsOutlined} from '@mui/icons-material';
import {LegendToggleOutlined} from '@mui/icons-material';
 import {SettingsSuggestOutlined} from '@mui/icons-material';
import {AccountCircleOutlined} from '@mui/icons-material';
import {LogoutOutlined} from '@mui/icons-material';
import{Link} from "react-router-dom"
import {AddCircleOutlineOutlined} from '@mui/icons-material';
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkmodeContext";
 const Sidebar = () => {
  const {dispatch}=useContext(DarkModeContext)
  const {darkMode}=useContext(DarkModeContext)
 
  
 
  return (
    <div className=  {darkMode?"sidebar dark":"sidebar"} >
       <div className="top">
        <Link to={"/"}>
        <span className="logo" style={{textDecoration:"none"}}>MOMOADMIN</span>
        </Link>

        





      </div>


      <div className="center">
        <ul className="ul">
          <p className="info">main</p>
         
          <li> <GridView className="icon"/><span>Dashboard</span></li>

        <li><GroupsOutlined className="icon"/> <Link to={"/users"}> <span   >Users  </span></Link>  </li>


        <li><AddCircleOutlineOutlined className="icon"/>    <Link to="/users/new">
       <span>Add New User </span>   
      
        </Link> 
      
       
   

          
          
          </li>
          <li><PaymentOutlined className="icon"/><span>Orders</span></li>
          <li><LocalShippingOutlined className="icon"/><span>Delovered</span></li>
          <hr />
          <p className="info">useful</p>
          <li><LegendToggleOutlined className="icon"/><Link to={"/products"}> <span   >products  </span></Link> </li>
          <li><AddCircleOutlineOutlined className="icon"/>    <Link to="/products/new">
       <span>Add New Product </span>   
      
        </Link> 
        </li>

      
          <li><CircleNotificationsOutlined className="icon"/><span>Notifications</span></li>
          <hr />
          <p className="info">personolised</p>
          <li><SettingsSuggestOutlined className="icon"/><span>Setting</span></li>
          <li><AccountCircleOutlined className="icon"/><span>Profile</span></li>
          <li><LogoutOutlined className="icon"/><span>Logout</span></li>

          
        </ul>
        <hr />
        <div className="setting">
       <div className="coloroptionOne" onClick={()=> dispatch({type:"DARK"})}>dark</div>
       <div className="coloroptionOne" onClick={()=> dispatch({type:"LIGHT"})}>Light</div>
       
      </div>
      </div>
     


     








    </div>
  )
}

export default Sidebar