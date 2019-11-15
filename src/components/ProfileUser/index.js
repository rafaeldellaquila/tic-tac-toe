import React from "react";
import "./styles.css";

import Profile from "../../img/avatar.png";
import Github from "../../img/icon-github.png";
import Linkedin from "../../img/icon-linkedin.png";
import Instagram from "../../img/icon-instagram.png";
import Twitter from "../../img/icon-twitter.png";

import AvatarProfile from "../../objects/AvatarProfile";
import SocialIcons from "../../objects/SocialIcons";

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
    <dd className="social">
      <SocialIcons
        action="https://github.com/rafaeldellaquila"
        src={Github}
        alt={"Icone do Github"}
      />

      <SocialIcons
        action="https://www.linkedin.com/in/rafaeldellaquila/"
        src={Linkedin}
        alt={"Icone do Linkedin"}
      />

      <SocialIcons
        action="https://www.instagram.com/rafadellaquila/"
        src={Instagram}
        alt={"Icone do Instagram"}
      />

      <SocialIcons
        action="https://twitter.com/canabiemo"
        src={Twitter}
        alt={"Icone do Twitter"}
      />
    </dd>
  </dl>
);

export default ProfileUser;
