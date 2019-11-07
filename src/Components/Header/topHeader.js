import React from 'react';
import myProfile from './userProfileImg.png'
function topHeader() {
  return (
    <div className="generalBox">
      <img className="imgProfile" src={myProfile}></img>
        <h1>Phong Pham</h1>
        <span><i class="fab fa-github"></i> Phongp88</span>
        <hr></hr>
        <p>Front End Developer at RMGI Based in Calgary</p>
        <p><span><i class="fab fa-github"></i> Phongp88</span></p>
        <p><i class="far fa-envelope"></i> Phongp27@gmail.com</p>
    </div>
  );
}

export default topHeader;