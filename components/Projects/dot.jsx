import React from "react";

export const DotButton = (props) => {
  const { selected, onClick } = props;

  return (
    <button
      className={"w-3 h-3 bg-roxo rounded-full ".concat(
        selected ? "opacity-100" : "opacity-30"
      )}
      type="button"
      onClick={onClick}
    />
  );
};
