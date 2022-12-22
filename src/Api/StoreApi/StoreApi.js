import axios from "axios"

const getUrl = 'https://fakestoreapi.com/products';

const getProducts = async () => {
    try {
        return await axios.get(getUrl).then((result) => {
            return result.data
        })
    } catch (error) {
        throw error
    }
}

const getIdProduct = async (id) => {
    try {
        return await axios.get(getUrl + "/" + id).then((result) => result.data);
    } catch (error) {
        throw error
    }
}

export {
    getProducts,
    getIdProduct
}