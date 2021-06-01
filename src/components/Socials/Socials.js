import React from 'react';
import { socialsData } from '../../data/data';

export default class Socials extends React.Component {
    render() {
      let menuLeaves = socialsData.map(socialData => {
        return menuLeaf(socialData);
      });

      return (
        <ul className="menu">{menuLeaves}</ul>
      )
    }
}

const menuLeaf = (socialData) => { 
  return (
    <li className="leaf" key={socialData.key}><a href={socialData.url} aria-label={socialData.label} className={socialData.classes}  target="_blank" rel="noreferrer">{socialData.label}</a></li>
)}