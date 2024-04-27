import axios from 'axios';

export function getItems() {
    return axios
    .get("http://localhost:8081/tocd/market/item", { params: { _sort: "categoryID"}})
    .then(res => res.data)
    .catch(err => {console.log(res)})
}

export function getCategories() {
    return axios .get("http://localhost:8081/tocd/market/category")
    .then(res=> res.data)
    .catch(err => {console.log(res)})
}

export function getMenu() {
    return axios .get("http://localhost:8081/tocd/menu")
    .then(res=> res.data)
    .catch(err=> {console.log(res)})
}

export function getMenuCategories() {
    return axios .get("http://localhost:8081/tocd/menu/category")
    .then(res=> res.data)
    .catch(err => {console.log(res)})
}
