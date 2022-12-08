import React, { useState } from "react";
import Products from "./Products";

const API_ID = process.env.REACT_APP_API_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [count,setCount] = useState(32)



  const submitHandler = (e) => {
    e.preventDefault();
    const url = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=${count}&calories=591-722&health=alcohol-free`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.hits);
        // console.log(data);
        setCount(count)
      });
  };



  return (
    <div>
      <div className="text-center">
        <h3>Food Recipes</h3>
      </div>
      <div className="text-center">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
      <div className="pt-4">{data.length >= 1 ? <Products data={data} /> : null}</div>
      {/* <button className="bg-dark" onClick={()=>setCount(count+ 10)}>Order Now</button> */}

    </div>
  );
};

export default Home;
