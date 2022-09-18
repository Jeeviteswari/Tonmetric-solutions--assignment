import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Trigger
        </button>
      }
    >
      {close => (
        <>
          <div className="modal-container">
            <h1 className="name">Sharing Tharun Tako Card</h1>
            <div className="social-container">
              <input type="text" placeholder="Full name" />
              <ul className="list-container">
                <li>Whatsapp</li>
                <li>SMS</li>
                <li>Email</li>
              </ul>
              <input type="text" placeholder="Enter phone/mail" />
            </div>
            <br />
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default ReactPopUp
