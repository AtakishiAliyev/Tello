import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Home from './container/Home/Home'
import ProductList from './container/ProductList/ProductList';

function App() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getData() {
      const url = new URL(
        "https://api.chec.io/v1/categories"
      );

      let params = {
        "depth": "3",
      };

      Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));

      let headers = {
        "X-Authorization": "pk_437901876da421fb3e83a2493acac7205e61388d27e32",
        "Accept": "application/json",
        "Content-Type": "application/json",
      };

      const response = await axios.get(url, {
        method: "GET",
        headers: headers,
      })

      response.data.data.map(item => {
        setCategories(item.children)
        return false
      })
    }

    getData()
  }, [])

  return (
    <div className="App">
      {/* <Home categories={categories} /> */}
      <ProductList categories={categories} />
    </div>
  );
}

export default App;
