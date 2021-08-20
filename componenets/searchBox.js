import React from "react";

function SearchBox({ term, setTerm, doSearch }) {
  return (
    <div style={{ margin: "auto", width: "300px" }}>
      {term === "" ? (
        <div style={{ color: "red", marginTop: "20px;" }}>
          You need to enter some text
        </div>
      ) : (
        <div style={{ marginTop: "20px" }}></div>
      )}
      <input
        style={{ marginTop: "20px" }}
        value={term}
        onChange={(evt) => setTerm(evt.target.value)}
      />

      {term === "" ? (
        <button disabled={true} onClick={() => doSearch()}>
          Search
        </button>
      ) : (
        <button onClick={() => doSearch()}>Search</button>
      )}
    </div>
  );
}

export default SearchBox;
