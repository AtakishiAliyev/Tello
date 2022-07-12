import instance from "./api";

const getAllCategories = (depth) => instance.get(`/categories?depth=${depth}`)
const getProducts = (slug) => instance.get(`${slug !== '' ? '/products?category_slug=' + slug : '/products'}`)
const getFilteredProducts = ([params, sort, page, slug]) => instance.get(`/products?category_slug=${slug}&limit=6${sort !== null ? '&sortBy=' + sort : ''}${page !== null ? '&page=' + page : ''}${params !== undefined ? '&query=' + params : ''}`)
const getProductDetails = (id) => instance.get(`/products/${id}`)
const createBasket = () => instance.get('/carts')
const getUserBasket = (id) => instance.get(`/carts/${id}`)

export {
    getAllCategories,
    getProducts,
    getFilteredProducts,
    getProductDetails,
    createBasket,
    getUserBasket,
}