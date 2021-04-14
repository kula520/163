//date: 2016-11-16 author: dgx note:蹇呭～姝ｅ垯楠岃瘉宸ュ叿  
function tbdValidate(elelist,objs){    
	var errlen=0;//閿欒涓暟
	var errlist=[];//閿欒杈撳叆妗咺D
	for(var i=0;i<elelist.length;i++){	//澶卞幓鐒︾偣鎿嶄綔
		(function(eleinput,eletext,rule){
			document.getElementById(eleinput).onblur=function(){
				var intval=this.value.replace(/(^\s*)|(\s*$)/g, "");
				for(var j=0;j<rule.length;j++){	
					var resreg=rule[j].reg.test(intval);					
					if(resreg){						
						document.getElementById(eletext).style.display="none";
					}else{					
						document.getElementById(eletext).innerHTML=rule[j].text;
						document.getElementById(eletext).style.display="block";
						break;			
					};									
				};		
			};
		})(elelist[i].eleinput,elelist[i].eletext,elelist[i].rule);
	};	
	document.getElementById(objs.elesubmit).onclick=function(){//鎻愪氦鎿嶄綔
		errlen=0;
		errlist=[];
		for(var i=0;i<elelist.length;i++){	
			(function(eleinput,eletext,rule){
				var intval=document.getElementById(eleinput).value.replace(/(^\s*)|(\s*$)/g, "");
				for(var j=0;j<rule.length;j++){	
					var resreg=rule[j].reg.test(intval);					
					if(resreg){						
						document.getElementById(eletext).style.display="none";
					}else{					
						document.getElementById(eletext).innerHTML=rule[j].text;
						document.getElementById(eletext).style.display="block";
						errlen+=1;
						errlist.push(eleinput);
						break;			
					};									
				};		
			})(elelist[i].eleinput,elelist[i].eletext,elelist[i].rule);
		};
		if(errlen==0){//鍥炶皟
			objs.funsubmit();
		}else{
			objs.funerr();
			objs.funerrlist(errlist);
		};
	};
};
//date: 2016-11-17 author: dgx note:闈炲繀濉鍒欓獙璇佸伐鍏�  
function tbdnoValidate(elelist){	
	for(var i=0;i<elelist.length;i++){	//澶卞幓鐒︾偣鎿嶄綔
		(function(eleinput,eletext,rule){
			document.getElementById(eleinput).onblur=function(){
				var intval=this.value.replace(/(^\s*)|(\s*$)/g, "");
				for(var j=0;j<rule.length;j++){	
					var resreg=rule[j].reg.test(intval);					
					if(resreg){						
						document.getElementById(eletext).style.display="none";
					}else{					
						document.getElementById(eletext).innerHTML=rule[j].text;
						document.getElementById(eletext).style.display="block";
						this.value="";
						break;			
					};									
				};		
			};
		})(elelist[i].eleinput,elelist[i].eletext,elelist[i].rule);
	};	
};