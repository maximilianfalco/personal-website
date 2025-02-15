import ProfilePictureImage from '../assets/cropped-background.png'
import Cutout from '../assets/cropped-cutout.png'

interface ProfilePictureProps {
  cutout: boolean;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ cutout }) => {
  return (
    <div>
      {
        !cutout ?
          (
            <img
            src={ProfilePictureImage}
            alt="Maximilian Falco Widjaya"
            className="w-full rounded-full object-cover"
            title='Maximilian Falco Widjaya'
            />
          )
          :
          (
            <img
            src={Cutout}
            alt="Maximilian Falco Widjaya"
            className="w-full rounded-full object-cover"
            title='Maximilian Falco Widjaya'
            />
          )
      }
    </div>
  )
}

export default ProfilePicture