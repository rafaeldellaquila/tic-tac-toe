import React from "react";
import Profile from "../../img/avatar.png";
import AvatarProfile from "../../objects/AvatarProfile";
import "./styles.css";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt="Avatar do Rafael" />
    </dd>
    <dt className="title">Rafael Dell'Aquila</dt>
    <dd className="description">
      Formado em Design, trabalho atualmente como Diretor de arte e estou
      migrando para o Dev.
    </dd>
  </dl>
);

export default ProfileUser;
