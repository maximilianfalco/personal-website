import ProfilePictureImage from '../assets/cropped.jpg'

const ProfilePicture = () => {
  return (
      <img
        src={ProfilePictureImage}
        alt="Maximilian Falco Widjaya"
        className="w-full rounded-full"
        title='Maximilian Falco Widjaya'
      />
  )
}

export default ProfilePicture