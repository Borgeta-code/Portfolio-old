import { React, useState } from "react";

export function Textarea(props) {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  function handleTextChange(text) {
    setValue(text);

    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div id="float-label" className="flex justify-center mb-4">
      <textarea
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <label className={isActive ? "Active" : ""} htmlFor="nome">
        {props.name}
      </label>
    </div>
  );
}
