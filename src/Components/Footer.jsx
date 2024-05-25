import React from 'react';
import githubIcon from '../assests/github.svg';
import { Link } from 'react-router-dom';
import { GitRepoPath } from '../config';

const Footer = () => {
  return (
    <>
      <footer className="mx-auto max-w-7xl lg:px-7 flex justify-between items-center py-3 dark:bg-black dark:text-white">
        <section>&copy; {new Date().getFullYear()} Hungry Hub</section>
        <section>Made With 💕 By Tushar Mehra</section>
        <section>
          <Link to={GitRepoPath} target="_blank">
            <img src={githubIcon} alt="github icon" className="w-8" />
          </Link>
        </section>
      </footer>
    </>
  );
};

export default Footer;
