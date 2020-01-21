import * as React from "react";

const Tag = ({ name }) => {
  return (
    <div className="tag spx-tag spx-tag--theme-sky-blue">
      {name}
    </div>
  );
};

export default Tag;
