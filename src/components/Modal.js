import ReactDOM from "react-dom";

function Modal() {
    return ReactDOM.createPortal(
        <div>
            <div className="absolute inset-0 bg-gray-300 opacity-90"></div>
            <div className="absolute inset-40 p-10 bg-white">
                Im a modal
            </div>
        </div>,

        document.querySelector('.modal-container')
    );
};

export default Modal;