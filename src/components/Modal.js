import Backdrop from "./Backdrop";

export default function Modal(props) {
  // console.log(props);
  const { onModalClose } = props;

  const handleCancelBtn = () => {
    onModalClose();
  };
  const handleConfirmBtn = () => {
    onModalClose();
  };

  return (
    <div>
      <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={handleCancelBtn}>
          Cancel
        </button>
        <button className="btn btn--alt" onClick={handleConfirmBtn}>
          Confirm
        </button>
      </div>
      <Backdrop />
    </div>
  );
}
