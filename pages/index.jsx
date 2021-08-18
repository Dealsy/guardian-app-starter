import React, { useState } from 'react';
import axios from 'axios';

const IndexPage = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  
  const doSearch = async() => {
    const resultSet = await axios.get('/api/search', {
      params: {
        term: term
      }
    })
    setResults(resultSet.data);
    console.log(resultSet);
  }



  if(term === ""){
    return (
      <div>
      <h1 style={{ margin: "auto", width: "100%", backgroundColor: "#233FB1", color: "#fff", padding: "10px;" }} >Guardian Search</h1>
      <div style={{ margin: "auto", width: "300px"}}>
        <div style={{color: "red"}}> You need to enter some text </div>
        <input
          style={{marginTop: "20px"}}
          value={term}
          onChange={(evt) => setTerm(evt.target.value)} />
        <button disabled={true} onClick={() => doSearch()}>Search</button>
      </div>
      <div style={{ margin: "auto", width: "800px"}}>
        <h2>Results</h2>
        <ul>
          { results.map(result => {
            return <li key={result.id}><a href={result.url}>{result.title}</a></li>
          })}
        </ul>
      </div>
    </div>
    )
  }


  
  return (
    <div>
      <h1 style={{ margin: "auto", width: "100%", backgroundColor: "#233FB1", color: "#fff", padding: "10px;"}} >Guardian Search</h1>
      <div style={{ margin: "auto", width: "300px"}}>
        <input
          style={{marginTop: "20px"}}
          value={term}
          onChange={(evt) => setTerm(evt.target.value)} />
        <button onClick={() => doSearch()}>Search</button>
      </div>
      <div style={{ margin: "auto", width: "800px"}}>
        <h2>Results</h2>
        <ul>
          { results.map(result => {
            return <li key={result.id}><a href={result.url}>{result.title}</a></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default IndexPage;