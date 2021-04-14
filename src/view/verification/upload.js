//娉ㄥ唽锛嶅～鍐欒韩浠戒俊鎭� 涓婁紶
var reg_info_file=document.getElementById("reg_info_file");
reg_info_file.onchange=function(){    		
	if(window.FileReader){//ie10 ie10+ w3c
		var file = reg_info_file.files[0];
		//console.log(file.size);
		//console.log(file.type);			
		if(/(image\/jpeg)|(image\/png)/.test(file.type)){
			$("#reg_info_file_text").hide();
		}else{
			$("#reg_info_file_text").html('鏀寔鍥剧墖鏍煎紡JPG/PNG').show();
			return false;
		};
		if(file.size<2*1024*1024){
			$("#reg_info_file_text").hide();
		}else{
			$("#reg_info_file_text").html('鍥剧墖澶у皬涓嶈秴杩�2M').show();
			return false;
		};		
	
		var fr = new FileReader();
		fr.readAsDataURL(file);
		$("#reg_info_file_base64").removeAttr("width");
		$("#reg_info_file_base64").removeAttr("height");
		fr.onloadend = function(e) {
			$("#reg_info_file_w").hide();
			$("#reg_info_file_base64").show();
			$("#reg_info_file_base64").attr("src",e.target.result);						
			$("#reg_info_file_base64")[0].onload=function(){
				var upimgw=$("#reg_info_file_base64").width();
				var upimgh=$("#reg_info_file_base64").height();
				$("#reg_info_file_base64").attr("width",imgPercentScale(165,98,upimgw,upimgh).w);
				$("#reg_info_file_base64").attr("height",imgPercentScale(165,98,upimgw,upimgh).h);
			};						
		};				
	}else{		//ie9-	
		$("#reg_info_file_w").hide();
		$("#reg_info_file_base64").show();
		var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
		reg_info_file.select();
		reg_info_file.blur();
		var src = document.selection.createRange().text;
		//$("#reg_info_file_base64")[0].filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;		
		$("#reg_info_file_base64")[0].src=src;
		$("#reg_info_file_base64")[0].onload=function(){
			var upimgw=$("#reg_info_file_base64").width();
			var upimgh=$("#reg_info_file_base64").height();
			$("#reg_info_file_base64").attr("width",imgPercentScale(165,98,upimgw,upimgh).w);
			$("#reg_info_file_base64").attr("height",imgPercentScale(165,98,upimgw,upimgh).h);
		};			
		alert("鍚嶇墖涓婁紶涓嶈娴忚鍣ㄦ敮鎸侊紝璇锋洿鎹㈡祻瑙堝櫒鎵撳紑缃戠珯");
	};
};
//date: 2016-12-5 author: 鏉滃叧鍏� note: 鍥剧墖姣斾緥缂╂斁绠楁硶
/*
	boxw:瀹瑰櫒瀹藉害
	boxh:瀹瑰櫒楂樺害
	imgw:鍥剧墖瀹藉害
	imgh:鍥剧墖楂樺害
*/
function imgPercentScale(boxw,boxh,imgw,imgh){
	var res={};
	var wper=imgw/boxw;
	var hper=imgh/boxh;
	if(wper <= 1 && hper < 1){
		res.w=imgw;
		res.h=imgh;
		return res;
	};
	if(wper>1 && hper < 1){
		res.w=boxw;
		var rhper=boxw/imgw;
		res.h=imgh*rhper;
		return res;
	};
	if(wper <= 1 && hper > 1){
		res.h=boxh;
		var rwper=boxh/imgh;
		res.w=imgw*rwper;
		return res;
	};
	if(wper>1 && hper>1){
		if(wper>=hper){
			res.w=boxw;
			var rhper=boxw/imgw;
			res.h=imgh*rhper;
			return res;
		}else{
			res.h=boxh;
			var rwper=boxh/imgh;
			res.w=imgw*rwper;
			return res;
		};
	};	
};