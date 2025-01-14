import React from "react";
import PropTypes from "prop-types";
import { MdFacebook, MdLink, MdWhatsapp } from "react-icons/md";

const GifCard = ({ title, image, link }) => {
  return (
    <div className="flex flex-col justify-center h-full border-4 border-gray-200 p-3 rounded-md shadow-md bg-white dark:bg-neutral-700 hover:border-green-400">
      <img src={image} alt={image} className="w-full max-h-52 object-contain" />
      <p className="text-center mb-3 dark:text-white">{title}</p>
      <p className="mt-auto text-center font-medium dark:text-white">
        Share in your social media
      </p>
      <div className="flex justify-center gap-4 ">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
          target="_blank"
          className="text-blue-500"
        >
          <MdFacebook size={40} />
        </a>
        <a href={`https://api.whatsapp.com/send?text=${link}`} target="_blank">
          <MdWhatsapp size={40} className="text-green-500" />
        </a>
        <a href={link} target="_blank">
          <MdLink size={40} className="text-gray-600 dark:text-white" />
        </a>
      </div>
    </div>
  );
};

GifCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default GifCard;
