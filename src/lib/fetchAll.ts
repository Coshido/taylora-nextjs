import Products from '@/src/data/products.json'

const data:DataArray = Products.cars

export const fetchAll = () => {
    return data
}