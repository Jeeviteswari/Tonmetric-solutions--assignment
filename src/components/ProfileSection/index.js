import './index.css'

const ProfileData = {
  imgUrl:
    'https://res.cloudinary.com/djfaxrxbf/image/upload/v1663473021/Founder_image_l0vzdh.jpg',
  name: 'Tarun Kondapalli',
  designation: 'Founder',
  company: 'Hillnut Solutions',
}

const ProfileSection = () => {
  const {imgUrl, name, designation, company} = ProfileData
  return (
    <div className="profile-container">
      <img src={imgUrl} alt="personImage" className="person-image" />
      <div className="profile-details-container">
        <h1 className="name">{name}</h1>
        <p className="designation">{designation}</p>
        <p className="company">{company}</p>
      </div>
    </div>
  )
}

export default ProfileSection
