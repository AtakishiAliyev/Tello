import React, { useEffect } from 'react'
import { getCategories } from './redux/actions/categories';
import { useDispatch } from 'react-redux';
// import Home from './container/Home/Home'
import ProductList from './container/ProductList/ProductList';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])


  return (
    <div className="App">
      {/* <Home /> */}
      <ProductList />
    </div>
  );
}

export default App;
