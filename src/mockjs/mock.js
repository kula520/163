// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            name: Random.csentence(2, 4), //  Random.csentence( min, max )
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'get', produceNewsData);

// banner图
let banner = Mock.mock({
    "data|12": [ //生成多少条数据 数组
        {
            "shopImg":Random.dataImage('1180x80', 'banner广告')
        }
    ]
})
Mock.mock('/bannerList/banner', 'get', banner);

// 广告title
const adverList = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            name: Random.csentence(6, 12), //  Random.csentence( min, max )
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}
Mock.mock('/adverList/adver', 'get', adverList);

// 广告title
const newsList = function() {
    let articles = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
            title: Random.csentence(18,24), //  Random.csentence( min, max )
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}
Mock.mock('/newsList/news', 'get', newsList);

// 图片列表
let imgListAbver = function() {
    let articles = [];
    for (let i = 0; i < 6; i++) {
        let newArticleObject = {
            title: Random.csentence(20, 30), //  Random.csentence( min, max )
            imgSrc: Random.dataImage('300x250', 'mock的图片'), 
            
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}
Mock.mock('/imgListAbver/imglist', 'get', imgListAbver);
// 图表，文章列表，单词
let topRightList = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(20, 30), //  Random.csentence( min, max )
            imgSrc: Random.dataImage('50x50', 'mock的图片'), 
            navTil: Random.csentence(3)            
        }
        articles.push(newArticleObject)
    } 
    return {
        articles: articles
    }
}
Mock.mock('/topRightList/iconList', 'get', topRightList);

// 评论接口
let evaluateData = function() {
    let articles = [];
    for (let i = 0; i < 20; i++) {
        let newArticleObject = {
            name:Random.csentence(3, 6), 
            key:Random.csentence(3, 4), 
            number:Random.integer(100, 500),
            evaluaVal: Random.csentence(10, 200), 
            imgSrc: Random.dataImage('100x100', '头像'), 
            navTil: Random.csentence(3),
            time:Random.date('yyyy-MM-dd'),
            zan:Random.integer(60, 5000),
            picSrc:Random.image(),
            xing:Random.string("★★★★★★", 1, 5),
            plus:Random.boolean()
        }
        articles.push(newArticleObject)
    } 
    return {
        articles: articles
    }
}
Mock.mock('/evaluateList/evaluateData', 'get', evaluateData);