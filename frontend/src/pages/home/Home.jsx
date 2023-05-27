import Chart from "../../componets/chert/Chart"
import Featured from "../../componets/featuted/Featured"
import Navbar from "../../componets/navbar/Navbar"
import Sidebar from "../../componets/sidebar/Sidebar"
 import List from "../../componets/table/Table"
 
import Widget from "../../componets/widget/Widget"
 import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
     <div className="homecontainer">

      <Navbar/>
      <hr />
      <div className="widgets">
          <Widget type="user" />
          <Widget type="order"  />
          <Widget type="earning"  />
          <Widget type="balance"  />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>

     




     </div>
    </div>
  )
}

export default Home