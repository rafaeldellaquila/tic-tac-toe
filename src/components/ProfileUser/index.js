import React from "react";
import Profile from "../../img/avatar.png";
import AvatarProfile from "../../objects/AvatarProfile";

const ProfileUser = () => (
  <dl>
    <dd>
      <AvatarProfile src={Profile} alt="Avatar do Rafael" />
    </dd>
    <dt>Rafael Dell'Aquila</dt>
    <dd>
      Formado em Design, trabalho atualmente como Diretor de arte e estou
      migrando para o Dev.
    </dd>
  </dl>
);

export default ProfileUser;
