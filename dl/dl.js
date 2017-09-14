$(".login-form input").click(function(){
	$(this).parent().addClass("current").siblings().removeClass("current")
	
})

//手机号：
var flagphone = null;
$(".mobile").blur(function(){
	var reg = /^\d{11}$/;
	var str = $(this).val();
	if(reg.test(str)){
		$(".s1").html("正确");
		flagphone = true;
	}else{
		$(".s1").html("格式不对");
		flagphone = false;
	}
})

//验证码：
var flagverify = null;
$(".verify").blur(function(){
	var reg = /^\w{4}$/;
	var str = $(this).val();
	if(reg.test(str)){
		$(".s2").html("正确");
		flagverify = true;
	}else{
		$(".s2").html("验证码不正确");
		flagverify = false;
	}
})