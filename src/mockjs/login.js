// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

Mock.mock('/loginAxios/login','post',function(option){
	//请求相关的参数
	console.log(option)
	//模拟假数据需要重新写Mock
	return Mock.mock({
		status:200,
		message:'@cword(4,9)'
	})
})
