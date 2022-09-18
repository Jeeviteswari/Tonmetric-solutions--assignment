import './index.css'
import {
  BsFacebook,
  BsSnapchat,
  BsFillTelephoneFill,
  BsGlobe,
} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMail,
} from 'react-icons/ai'

const SocialMedia = () => (
  <>
    <div className="social-media-container">
      <BsFacebook className="image" />
      <AiFillTwitterCircle className="image" />
      <FaInstagramSquare className="image" />
      <AiFillLinkedin className="image" />
      <BsSnapchat className="image" />
    </div>
    <div>
      <BsFillTelephoneFill className="image" />
      <AiOutlineMail className="image" />
      <BsGlobe className="image" />
    </div>
  </>
)
export default SocialMedia
