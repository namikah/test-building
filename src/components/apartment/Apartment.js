import React from "react";
import Table from "react-bootstrap/Table";
import "./apartment.scss";
import AddButton from "../tools/addButton/AddButton";

function Apartment() {
  return (
    <section id="apartment">
      <div className="add-apartment d-flex justify-content-end align-items-center p-2 pb-0">
      <AddButton text="Mənzil yarat"/>
      </div>
      <div className="table p-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Mən №</th>
              <th>Sahibi</th>
              <th>Kv/m</th>
              <th>otaq sayı</th>
              <th>Qaraj</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>143</td>
              <td>Heydarov Namik</td>
              <td>103</td>
              <td>2</td>
              <td>Yoxdur</td>
            </tr>
            <tr>
              <td>2</td>
              <td>22</td>
              <td>Heydarli Shaiq</td>
              <td>147</td>
              <td>3</td>
              <td>Yoxdur</td>
            </tr>
            <tr>
              <td>3</td>
              <td>75</td>
              <td>Heydarova Sevinc</td>
              <td>187</td>
              <td>4</td>
              <td>Var</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export default Apartment;
