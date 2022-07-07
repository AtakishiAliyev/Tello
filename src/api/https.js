import instance from "./api";

const getAllCategories = (depth) => instance.get(`/categories?depth=${depth}`)
const getProducts = (slug) => instance.get(`${slug !== '' ? '/products?category_slug=' + slug : '/products'}`)
const getFilteredProducts = ([params, sort, slug]) => instance.get(`/products?category_slug=${slug}&${params && 'query=' + params}&${sort && 'sortBy=' + sort}`)

export { getAllCategories, getProducts, getFilteredProducts }