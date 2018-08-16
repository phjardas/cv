import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter,
  faXing,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faEnvelope,
  faPrint,
  faXing,
  faStackOverflow,
  faGithub,
  faLinkedin,
  faTwitter
)

export default FontAwesomeIcon
