import { useState, useEffect } from 'react'
import Learn from './components/Learn'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((item) => (
          <section key={item.id}>
            
            <li>{item.title}</li>
            <li>Body-- {item.body}</li>
          </section>
        ))}
      </ul>

      {/* <Learn /> */}
    </>
  );
};

export default App;
