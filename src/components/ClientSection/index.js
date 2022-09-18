import './index.css'
import ReactSlick from '../ReactSlick'

const ClientSection = () => (
  <>
    <div className="clients-container">
      <h1 className="client-heading">Clients</h1>
      <p className="client-para">
        Lorem Ipsum is simply dummy text of the parinting and typesetting
        industry.Lorem Ipsum has been the industry standard dummy te ever since
        the 1500s
      </p>
      <div className="logos-container">
        <ReactSlick />
      </div>
    </div>
  </>
)

export default ClientSection
