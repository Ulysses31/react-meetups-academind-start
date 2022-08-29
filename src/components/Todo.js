import { useState } from "react";
import Modal from "./Modal";

export default function Todo(props) {
  // console.log(props);
  const { text } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onModalClose={handleModalClose} />}
    </div>
  );
}
