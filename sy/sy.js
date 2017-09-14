//index-good
$(".index-good-tab li").click(function(){
	$(".index-good-tab li").removeClass("currentt");
	$(this).addClass("currentt");
	$(".index-good-list ul").removeClass("selected");
	$(".index-good-list ul").eq( $(this).index() ).addClass("selected");
})

//index-buy-again

$(".index-buy-again dd").mouseout(function(){
		$(this).addClass("first").siblings().removeClass("first");
		
	}).mouseover(function(){
		$(this).addClass("ex-first").siblings().removeClass("ex-first");
		
	})


 $(".option").click(function(){
		var arr = [];
		var flag = true;//可以向数组中添加数据
		var _json = {
			
			name:$(this).prev().data("name"),
			src:$(this).prev().data("src"),
			price:$(this).prev().data("price"),
			count:1
		}
		console.log(_json)
		//当再次点击按钮时，cookie信息被覆盖  解决 ： 先取出cookie数据 存入到数组中，然后在把新增的商品存入到数组中
		var cookieInfo = getCookie("shoplist");
		if( cookieInfo.length != 0 ){//表示cookie中有数据
			arr = cookieInfo;
			//点击相同商品时，需要做商品数量的累加    用当前点击的商品编号id   和  取出来的cookie的 数据中商品id做比较 发现有相等的，count++
			for(var i in arr){
				if( _json.name == arr[i].name){
					arr[i].count++;
					flag = false;
					break;
				}
			}
		}
		
		if(flag){
			arr.push(_json);
		}
		console.log(arr)
		setCookie("shoplist",JSON.stringify(arr));
		//var f = confirm("是否继续购买?确定--继续购买，取消---去购物车结算");
		if( !f ){
			location.href = "../gwc/gwc.html";
		}
		console.log( document.cookie );
	})






















































































