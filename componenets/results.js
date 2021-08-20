import React from "react";
import Result from "./result";

function Results({ results }) {
  return (
    <div style={{ margin: "auto", width: "800px" }}>
      <h2>Results</h2>
      <ul>
        {results.map((result) => {
          return <Result key={result.id} result={result} />;
        })}
      </ul>
    </div>
  );
}
export default Results;
