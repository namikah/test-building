import React from "react";
import Table from "react-bootstrap/Table";
import AddButton from "../tools/addButton/AddButton";

function Building() {
  return (
    <section id="building">
      <div className="add-building d-flex justify-content-end align-items-center p-2 pb-0">
        <AddButton text="Bina yarat" />
      </div>
      <div className="table p-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Adı</th>
              <th>Ünvan</th>
              <th>Mənzil sayı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bina 1</td>
              <td>Yasamal</td>
              <td>300</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bina 2</td>
              <td>Binəqədi</td>
              <td>450</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bina 3</td>
              <td>Xətai</td>
              <td>400</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export default Building;
