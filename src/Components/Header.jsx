import React from 'react';
import { imgUrl } from '../config';

export const Header = ({ headerList }) => {
  if (!headerList || headerList.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl flex gap-5">
      {headerList.map((header, index) => (
        <div key={index} className="">
          <img src={imgUrl + header.imageId} alt="Header" className="blend-multiply" />
          {/* Uncomment below line if you want to display action text */}
          {/* <p className="text-center mt-2">{header.action.text}</p> */}
        </div>
      ))}
    </section>
  );
};
