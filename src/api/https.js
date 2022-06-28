import instance from "./api";

const getAllCategories = (depth) => instance.get(`/categories?depth=${depth}`)
const getProducts = (slug) => instance.get(`${slug !== '' ? '/products?category_slug=' + slug : '/products'}`)

export { getAllCategories, getProducts }
