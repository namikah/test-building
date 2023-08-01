import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddButton({text}) {
  return (
    <Button
      variant="outline-secondary"
      className="add-button d-flex justify-content-between align-items-center gap-3"
    >
      <span className="plus-icon">
        <FontAwesomeIcon icon={faPlus} />
      </span>
      <span>{text}</span>
    </Button>
  );
}

export default AddButton;
