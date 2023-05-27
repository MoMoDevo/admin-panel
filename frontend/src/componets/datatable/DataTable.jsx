
import { DataGrid } from "@mui/x-data-grid";
 
import { Link } from "react-router-dom";
import { useState } from "react";
import "./datatable.css"
import { userColumns, userRows } from "../../../data";


const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  //action column is used dymacally both for products and users
  //but the datagets changed 
  //just like the widgets part we have them dymanically both for users products and everywhere
  //meaning that for each part we render a delete edit and view button

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
   
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[2]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;