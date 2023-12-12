import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css';
import Msg from './Msg';

function App() {
  

  const [dataYea, setDataYea] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponData] = useState([]);
  const [username, setUsername] = useState("");
  const [discription, setDiscription] = useState("");
  

  // useEffect(() => {

  //   async function getData() {
  //     const respond = await fetch("http://localhost/");
  //     const data = await respond.json();
  //     console.log(respond);
  //     setDataYea(data);
  //     setIsLoading(false);
  //   }

  //   getData();
  //   console.log(dataYea.h1);

  // }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newFormData = new FormData();
    newFormData.append("username", username);
    newFormData.append("discription", discription);

    const response = await axios.post(
      "http://localhost/",
      newFormData,
    );
    const responseData1 = await response.data;
    setResponData(responseData1);
    console.log(responseData);
  };

  const messageJSX = responseData.map((msgObject, key) => {
    return <Msg key={key} username={msgObject.username} message={msgObject.discription} />
  });


  return (
    <>

    {isLoading ? <p>Loading...</p> : <><p>{dataYea.h1}</p><div className='tweetBox'>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <label htmlFor='username'>
            <p>Username</p>
            <input type="text"
              name="username"
              id=""
              onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label htmlFor='discription'>
            <p>Discription</p>
            <textarea
              name="discription"
              onChange={(e) => setDiscription(e.target.value)} />
          </label>
          <label htmlFor="submit">
            <button type="submit">nigger</button>
          </label>
        </form>
      </div>
      </>
  }

  
{messageJSX}
  
    
    </>
  )
}

export default App
