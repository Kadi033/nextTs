import Image from "next/image";
import "./Profile.css";
import man from '../../../public/designer.jpg'
function Profile() {
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    photoUrl: man,
  };

  return (
    <div className="profileContainer">
      <h2 className="profileTitle">Profile</h2>
      <form className="profileForm">
        <div className="profilePhoto">
          <Image src={user.photoUrl} alt="Profile" />
        </div>
        <div className="profileField">
          <label>First Name:</label>
          <input type="text" value={user.firstName} readOnly />
        </div>
        <div className="profileField">
          <label>Last Name:</label>
          <input type="text" value={user.lastName} readOnly />
        </div>
        <div className="profileField">
          <label>Email:</label>
          <input type="email" value={user.email} readOnly />
        </div>
      </form>
    </div>
  );
}

export default Profile;
