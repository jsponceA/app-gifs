import React from "react";
import PropTypes from "prop-types";

const InputSearch = ({ handleSearch, aditionalClass }) => {
  return (
    <>
      <input
        onKeyUp={handleSearch}
        placeholder="Type category..."
        className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ${aditionalClass}`}
      />
    </>
  );
};

InputSearch.propTypes = {
  handleSearch: PropTypes.func,
  aditionalClass: PropTypes.string,
};

export default InputSearch;
