'use strict';

{
  const Home = document.getElementById('home');
  const Profile = document.getElementById('profile');
  const Skills = document.getElementById('skills');
  const Works = document.getElementById('works');
  const Contact = document.getElementById('contact');

  const ProfileAppear = document.getElementById('pop-up1');
  const SkillsAppear = document.getElementById('pop-up2');
  const WorksAppear = document.getElementById('pop-up3');
  const ContactAppear = document.getElementById('pop-up4');

  const ProfileToHome = document.getElementById('profile-menu-to-home');
  const SkillsToHome = document.getElementById('skills-menu-to-home');
  const WorksToHome = document.getElementById('works-menu-to-home');
  const ContactToHome = document.getElementById('contact-menu-to-home');

  ProfileAppear.onclick = () => {
    Home.classList.add('hide');
    Profile.classList.remove('hide');
  };

  SkillsAppear.onclick = () => {
    Home.classList.add('hide');
    Skills.classList.remove('hide');
  };

  WorksAppear.onclick = () => {
    Home.classList.add('hide');
    Works.classList.remove('hide');
  };

  ContactAppear.onclick = () => {
    Home.classList.add('hide');
    Contact.classList.remove('hide');
  };

  ProfileToHome.onclick = () => {
    Profile.classList.add('hide');
    Home.classList.remove('hide');
  }

  SkillsToHome.onclick = () => {
    Skills.classList.add('hide');
    Home.classList.remove('hide');
  }

  WorksToHome.onclick = () => {
    Works.classList.add('hide');
    Home.classList.remove('hide');
  }

  ContactToHome.onclick = () => {
    Contact.classList.add('hide');
    Home.classList.remove('hide');
  }
  
}