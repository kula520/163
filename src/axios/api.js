
import axios from "./network"

require('../mockjs/mock')

// 模拟接口
export const getSearchComment = (params) => {
    return axios({
        url: "/news/index",
        method: "get",
        data: params
    })
}
//banner
export const bannerList = () => {
    return axios({
        url: "/bannerList/banner",
        method: "get"
    })
}
//广告列表
export const adverList = () => {
    return axios({
        url: "/adverList/adver",
        method: "get"
    })
}
//新闻列表
export const newsList = () => {
    return axios({
        url: "/newsList/news",
        method: "get"
    })
}
//新闻图片列表
export const imgListAbver = () => {
    return axios({
        url: "/imgListAbver/imglist",
        method: "get"
    })
}
//图标列表
export const iconRightList = () => {
    return axios({
        url: "/topRightList/iconList",
        method: "get"
    })
}

//注册
export const loginAxios = (phone, captcha) => axios.post('/loginAxios/login', {
    phone: phone,
    captcha: captcha
});

//图标列表
export const evaluateDataList = () => {
    return axios({
        url: "/evaluateList/evaluateData",
        method: "get"
    })
}