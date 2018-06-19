// 获取轮播图图片信息
let imgs = $('.gxx_con img');
let imgW = $('body').width();
let imgL  = imgs.length;
let totW = imgW*imgL;
console.log(totW)
//设置父级ul的宽
let wrapUl = $('.gxx_con_img')
wrapUl.width(totW);
//首次
let i = 0;
let timer = setInterval(function(){
	if(i>=0&&i<imgL-1){
		i++;
		wrapUl.animate({'margin-left':-i*imgW+'px'},700);
	}else{
		if(i==imgL-1){
			i=0;
			wrapUl.animate({'margin-left':-i*imgW+'px'},0);
			i++;
			wrapUl.animate({'margin-left':-i*imgW+'px'},700);
		}
	}
},2000);


