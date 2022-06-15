import "../css/modal.scss"

const Modal = ({ id = "modal", onClose = () => { }, children }) => {

    const handleOutsideClick = (event) => {
        if (event.target.id === id) onClose()
    }

    return (
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="modal__container">
                <button className="modal__button" onClick={onClose} />
                <div className="modal__children">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal