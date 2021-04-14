<template>
    <div>
        <headTop class="modify_top">
			<div class="top_back">
				<router-link :to="{name:'home'}">网易首页</router-link>    
				<div class="sure">编辑</div>
			</div>
		</headTop>
		<div class="main">
			<div class="comp_con">
				<ul>
					<li class="watch_no">
						<label for="choose_1" class="choose_label choose_check choose_none">
							<input id="choose_1" type="checkbox" name="choose" class="choose_input" autocomplete="off" />
						</label>
						<a href="dow_complete.html">
							<img src="../../assets/logo.png" />
							<div>
								<h4>动物世界</h4>
								<p>电视剧/24集</p>
							</div>
						</a>
					</li>
					<li class="watch_yes">
						<label for="choose_2" class="choose_label choose_check choose_none">
							<input id="choose_2" type="checkbox" name="choose" class="choose_input" autocomplete="off" />
						</label>
						<a href="#" class="watch">
							<img src="../../assets/logo.png" />
							<div>
								<h4>动物世界</h4>
								<p>电影</p>
							</div>
						</a>
					</li>
					<li>
						<label for="choose_3" class="choose_label choose_check choose_none">
							<input id="choose_3" type="checkbox" name="choose" class="choose_input" autocomplete="off" />
						</label>
						<a href="#" class="watch">
							<img src="../../assets/logo.png" />
							<div>
								<h4>动物世界</h4>
								<p>综艺/更新到第20200819期</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
			<div class="mdown_con">				
				<div class="footer">
					<label for="chooseAll" id="choose_All" class="choose_label choose_check">
						<input id="chooseAll" type="checkbox" name="chooseAll" class="choose_input" autocomplete="off" />
					</label>
					<h4 id="choose_title">全选</h4>
					<h4 id="choose_delete">删除</h4>
				</div>
			</div>
		
		</div>
    </div>
</template>
<script>
export default {
    name:'allCheck',
    mounted(){
        // 全选及取消		
		$('input[name="chooseAll"]').click(function() {
			var par_label = $(this).parent();
			if ($(this).is(':checked')) {
				par_label.removeClass("choose_check").addClass("choose_checked");
				$('input[name="choose"]').each(function() {
					//此处如果用attr，会出现第三次失效的情况  
					$(this).prop("checked", true);
					$(this).parent().removeClass("choose_check").addClass("choose_checked");
					$("#choose_title").css("color", "#5CC2F3");

					// $("#choose_delete").html("删除"+)
				});
				all();
			} else {
				par_label.removeClass("choose_checked").addClass("choose_check");
				$('input[name="choose"]').each(function() {
					// 此处如果用attr，会出现第三次失效的情况  
					$(this).prop("checked", false);
					$(this).parent().removeClass("choose_checked").addClass("choose_check");
					$("#choose_title").css("color", "#666");
				});
				all();
			}
		});

		$('input[name="choose"]').click(function() {
			var par_label = $(this).parent();
			// 选项总长度
			var length = $('input[name="choose"]').length;
			// 被选中项长度   如果两个长度一样  说明全选
			var choose_length = $('input[name="choose"]:checked').length;
			if (this.checked) {
				par_label.removeClass("choose_check").addClass("choose_checked");
				if (length == choose_length) {
					$('input[name="chooseAll"]').prop("checked", true);
					$('input[name="chooseAll"]').parent().removeClass("choose_check").addClass("choose_checked");
					$("#choose_title").css("color", "#5CC2F3");
					all();

				} else {
					$('input[name="chooseAll"]').prop("checked", false);
					$('input[name="chooseAll"]').parent().removeClass("choose_checked").addClass("choose_check");
					$("#choose_title").css("color", "#666");
					all();
				}

			} else {
				par_label.removeClass("choose_checked").addClass("choose_check");
				if (length == choose_length) {
					$('input[name="chooseAll"]').prop("checked", true);
					$('input[name="chooseAll"]').parent().removeClass("choose_check").addClass("choose_checked");
					$("#choose_title").css("color", "#5CC2F3");
					all();
				} else {
					$('input[name="chooseAll"]').prop("checked", false);
					$('input[name="chooseAll"]').parent().removeClass("choose_checked").addClass("choose_check");
					$("#choose_title").css("color", "#666");
					all();
				}
			}
		});
		$("#choose_title").click(function() {
			$('#chooseAll').click();
		});
		$("#choose_delete").click(function() {
			$('input[name="choose"]:checked').parent().parent().remove();
			$(".footer").animate({
				bottom: -50
			}, 500);
			$(".choose_check").css("display", "none");
			$(".sure").html("编辑");
			$(".sure").removeClass("sures")
		})
		$(".sure").click(function() {
			var choos_h = $(".choose_none").length;

			if ($(this).hasClass("sures") || choos_h == 0) {

				$(".footer").animate({
					bottom: -50
				}, 500);
				$(".choose_none").css("display", "none");
				$(this).html("编辑");
				$(this).removeClass("sures");
				$('input[name="choose"]').parent().removeClass("choose_checked").addClass("choose_check");
				$('input[name="choose"]').prop("checked", false);
				$("#choose_delete").html("删除")
			} else {

				$(".footer").animate({
					bottom: 0
				}, 500);
				$(".choose_none").css("display", "block");
				$(this).html("取消");
				$(this).addClass("sures");
			}

		})

		function all() {
			var inp = $('input[name="choose"]:checked').length;
			if (inp == 0) {
				$("#choose_delete").html("删除")
			} else {
				$("#choose_delete").html('删除(' + inp + ')')
			}
		}
    }   
}
</script>
<style>
.clearfix:after {
	content: ".";
	display: block;
	clear: both;
	visibility: hidden;
	line-height: 0;
	height: 0;
}
.modify_top {line-height: 45px; background: #5CC2F3; width: 100%;position: fixed;top: 0px;z-index: 9999;}
.modify_top .top_back{position: relative; height: 45px;}
.modify_top a{position: absolute; left: 0; height: 20px;margin: 0 4%;display: block;padding: 12px 0px;z-index: 1;}
.modify_top a img{width: auto; height: 100%;}
.modify_top h4{text-align: center;position: absolute;top: 0px;width: 100%; font-size: 16px;letter-spacing: 3px;color: #FFFFFF;font-weight: 400;}
.sure{position: absolute; top: 0;right: 4%; color: #FFFFFF;font-size: 16px; color: #FFFFFF;font-weight: 400;}
.comp_con{background: #FFFFFF;margin-top: 10px;}
.comp_con ul li{border-bottom: 1px solid #f4f4f4; padding: 0 10px; padding-top: 10px;}
.comp_con ul li a{height: 80px; display: flex;justify-content: flex-start;margin: 10px 0px;} 
.comp_con ul li a img{width: auto;height: 100%;}
.comp_con ul li a div{padding-left: 16px; padding-top: 10px;}
.comp_con ul li a div h4{font-size: 16px;color: #333;letter-spacing: 1px;}
.comp_con ul li a div p{font-size: 12px;color: #666;letter-spacing: 1px; line-height: 20px;}
.choose_check{display: none; float: left; width: 20px; height: 20px; border: 1px solid #ccc; border-radius: 50%; margin-top: 40px;margin-right: 20px;}
.choose_checked{float:left;width:22px;height:22px;margin-top: 40px;margin-right: 20px;background-color:#5CC2F3; border-radius: 50%;}
.choose_input{display:none;}
.footer{position: fixed; height: 50px; width: 100%;max-width: 1080px; bottom: -50px; background: #FFFFFF;border-top: 1px solid #F4F4F4;display: flex;justify-content: flex-start;}
.footer h4{width: 50%;line-height: 50px;text-align: center; color: #666;}
#choose_title{ border-right: 1px solid #f4f4f4;}
#choose_delete{color: #5CC2F3;}
#choose_All{display: none !important;}
.main{margin: 55px 0px;}
</style>