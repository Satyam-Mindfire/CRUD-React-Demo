import React from "react";
import EditIcon from "../../assets/edit-button.png";
import DeleteIcon from "../../assets/delete.png";
import "./Table.css";

// Define a type for the data prop (using TypeScript for type safety)
interface TableRow {
  fullName: string;
  email: string;
  gender: string;
  dob: string;
  phone: string;
  city: string;
  country: string;
}

interface TableProps {
  data: TableRow[];
  onEdit: (row: TableRow, index: number) => void;
  onDelete: (index: number) => void;
}

const Table: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Phone No.</th>
          <th>City</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {/* Iterate through the data array */}
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.fullName}</td>
            <td>{row.email}</td>
            <td>{row.gender}</td>
            <td>{row.dob}</td>
            <td>{row.phone}</td>
            <td>{row.city}</td>
            <td>{row.country}</td>
            <td>
              {/* Action buttons: Edit and Delete */}
              <button
                onClick={() => onEdit(row, index)}
                className="icon-button"
              >
                <img src={EditIcon} style={{ width: 16, height: 16 }} />
              </button>
              <button
                onClick={() => onDelete(index)}
                className="icon-button margin-left"
              >
                <img src={DeleteIcon} style={{ width: 16, height: 16 }} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
