import instance from "./api";

const getAllCategories = (depth) => instance.get(`/categories?depth=${depth}`)
const getProducts = (slug) => instance.get(`${slug !== '' ? '/products?category_slug=' + slug : '/products'}`)
const getFilteredProducts = (params) => instance.get(`/products?query=${params}`)

export { getAllCategories, getProducts, getFilteredProducts }