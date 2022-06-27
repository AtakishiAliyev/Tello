import instance from "./api";

const getAllCategories = () => instance.get(`/categories?depth=3`)

export { getAllCategories }