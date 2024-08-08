import React, { useState } from "react";
import { checkInput } from "../utils/functions";

const Form = ({ setSearchValue }) => {
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValues = { value: value, type: checkInput(value) };
    setSearchValue(newValues);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchValue"
        id="searchValue"
        placeholder="Search By Address / Txn Hash / Block "
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
