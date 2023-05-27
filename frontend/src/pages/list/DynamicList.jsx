 import Datatable from "../../componets/datatable/DataTable"
import Navbar from "../../componets/navbar/Navbar"
import Sidebar from "../../componets/sidebar/Sidebar"
import "./list.css"
const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listsContainer">
     
        <Navbar/>
        <Datatable/>

      </div>
      
    </div>
  )
}

export default List