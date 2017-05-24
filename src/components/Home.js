import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/rafrex/spa-github-pages#readme"
    >{text}</Interactive>
  );

  return (
    <div>
      <p style={s.p}>
        Hi my name is Sonal Ranjit. I am a software developer, recently focused on
        build Augmented Reality applications using the Unity Game Engine. 
      </p>
    </div>
  );
}
