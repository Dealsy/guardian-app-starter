import React from "react";

function Result({ result }) {
  return (
    <li>
      <a href={result.url}>{result.title}</a>
    </li>
  );
}

export default Result;
