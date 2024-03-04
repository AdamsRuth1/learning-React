import React from "react";

function Avatar() {
  return <img className="card-image" src="/IMG-7533.JPG" alt="Image" />;
}

function ProfileMain() {
  return (
    <div className="profile">
      <Avatar />
      <div className="profDiv">
        <div className="profdefinition">Name: Adams Ruth</div>
        <div className="profdefinition">Track: FrontEnd</div>
        <div className="profdefinition">Sex: Female</div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="card">
      <ProfileMain />
      <ProfileMain />
    </div>
  );
}

export default Profile;
