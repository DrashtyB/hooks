import React from "react";

function Title() {
  console.log("Title component rendered");
  return <div>React Title</div>;
}

export default React.memo(Title);
