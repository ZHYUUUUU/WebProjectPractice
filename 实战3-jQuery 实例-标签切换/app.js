
var timeoutid;
$(document).ready(function(){
	$("#tabfirst li").each(function(index){
		var liNode = $(this);
		$(this).mouseover(function(){
			timeoutid=setTimeout(function(){
				$("div.content").removeClass("content");
				$("#tabfirst li.tabin").removeClass("tabin");
				$("div").eq(index).addClass("content");
				liNode.addClass("tabin");
			},300)
		}).mouseout(function(){
			clearTimeout(timeoutid);
		})
	})

	$("#realcontent").load("mytab.html");
	//chrome没效果不加载,因为IE、chrome和很多浏览器是不支持本地环境直接调用文件的（出于安全性考虑），或者你把文件上传到空间里面去调式。
	$("#tabsecond li").each(function(index){
		var liNode2 = $(this);
		$(this).click(function(){
			$("#tabsecond li.tabin").removeClass("tabin");
			liNode2.addClass("tabin");
			if(index==0){
				$("#realcontent").load("mytab.html");
			}else if (index==1){
				$("#realcontent").load("https://yuchengkai.cn/docs/zh/ h2");
			}else if(index==2){
				$("#realcontent").load("https://yuchengkai.cn/docs/zh/ h1");
			}
		})
	})
})