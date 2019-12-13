import React from "react";

const styles = {
  marginBottom: "20px"
};

export default ({ author, content }) => (
  <div style={styles}>
    <h2>{author}</h2>
    <p>{content}</p>
  </div>
);
