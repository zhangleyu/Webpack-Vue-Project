﻿page={
	qzoneStr:'man_qd',
	getCurrentQQ:function(person,qqArr){
		var count=qqArr.length;
		if(person.current_qq_index==undefined){
			var index=ves.cookie['qq'+person.id];
			if(index && index<count){
				index=parseInt(index);
//				if(index>count-1)
//					index=0;
			}else{
				index=parseInt(Math.random()*count);
			}
			person.current_qq_index=index;
			ves.setCookie('qq'+person.id,person.current_qq_index,{expires:360});
		}
		return qqArr[person.current_qq_index];
	},
	statistic:function(str,title){
		if(window._paq){
			_paq.push(["setCustomUrl", "Virtual/SMT/"+str+'/'+ webUrl]);
			_paq.push(["trackPageView","Virtual/SMT/" +str+'/'+ webUrl]);
			ga('send', 'pageview', {'page': ' Virtual/SMT/'+str,'title': title||str});
		}
	},	
	loadStatistic:function(index,qqIndex){	
		var qq=page.getCurrentQQ(stars.list[index],stars.list[index][qqIndex]);
		page.statistic('QNUM_'+qq+'_'+stars.list[index].name);
	},
	getPageStr:function(){
		var str='man_qd';
		return str;
	},
	list:[
		{
			id:1,name:'coco可可',nearby:158689
		}
	],
	qqchat:function (qq) {
		if(ves.browser.app.qq||ves.browser.app.qqb){
			ves.alert({content:'<span class="ic-load"></span>',type:'wait',style:'clear'});
			var _ifr=document.createElement('iframe');
			_ifr.style.display='none';
			var it=this;
			_ifr.onload=function(){
				setTimeout(function(){
					if(it.iframe)ves.body[0].removeChild(it.iframe);
					it.iframe=_ifr;
					ves.alert.close();
				},1500);
			};
			_ifr.src='http://wpa.qq.com/msgrd?v=1&uin=' +qq + '&site=qq&menu=yes';
			ves.body.append(_ifr);
		}
		else{
			window.location.href='http://wpa.qq.com/msgrd?v=1&uin=' +qq + '&site=qq&menu=yes';
		}
	},
	comments:{
		'1':[
			{name:'扯淡的生活',comment:'不懂护肤，都是用水洗洗脸就完事儿了，加了可可，才知道脸上油脂、灰尘、细菌，各种脏。用可可教的招，两下脸就洗干净脸。学会洗脸还挺重要，脸清爽了，痘痘少了。建议不会洗脸的哥们，都加Q学一下，可可人还挺热情的。'},
			{name:'请持续率性',comment:'讲到痘痘就内牛满面！一脸油腻，发红起疙瘩，除了多洗几次脸还能咋办？兄弟给可可Q让我加，这妹子不错，告诉我青春痘千万别手贱挤痘，推荐我用她的方法，1个月皮肤清爽，疙瘩也没长，一脸痘的屌丝样总算改头换面了。'},
			{name:'乄一世挚勋lu',comment:'哥是死宅，爱约兄弟开黑。打机一时爽，爆痘惨过火葬场！痘痘一多影响形象，喜欢女生也不敢开口。有次打LOL，认识了可可，熟了才知道她很懂护肤，教我几个容易的方法，每天花不了几块钱，面油痘痘少很多，比其他的方法都管用。'}
		]
	}
};
ves(function(){
	var viewModel={
		stars:page.list,
		stars_comment:page.comments,
		stars_pc:[
			{id:1,name:'LUO_秋维',type:'美白达人',sex:'girl',info:'黄脸婆、黑面神、女旱子，有救啦！每天分享一点护肤心得，教你轻松变白变美。'},
			{id:2,name:'许-锐丹',type:'美白达人',sex:'girl',info:'天生黑，显得特土特怂，穿什么都像村儿里人，变白居然成了女神，想变白的妹纸看过来！'},
			{id:3,name:'聆听爱的声音Elin',type:'补水达人',sex:'girl',info:'天气热，脸上油得慌、干得慌！补水做得好，夏天没烦恼！教你1招，皮肤比豆腐还水嫩！'},
			{id:5,name:'吴淑不成雯Baby',type:'补水达人',sex:'girl',info:'肌肤问题多多，是不是你补水工作没做好？懒人专用的补水大法，让肌肤水当当，还打什么水光针？'}
		],
		star_boy:[
			{id:4,name:'Rainno小武',type:'护肤达人',sex:'boy',info:'队友喊到，熬夜LOL难以避免，但哥脸蛋仍然白净清爽，打机泡妞两不误！'},
			{id:6,name:'方_佳全',type:'美肤达人',sex:'boy',info:'作为一名专业的模特，我对自己的肌肤要求很高。今天给大家分享我的护肤秘密，绝不坑队友！'},
			{id:8,name:'DK田惺',type:'美白达人',sex:'boy',info:'肌肉造就我的男人味，美白造就我的帅气。教你变白，带你装逼带你飞！'}
		],
		weibo:function(e){
			stars.weibo(e.current.weibo);
			page.statistic('weibo_'+e.current.name);//统计
		},
		qqchat:function(e){
			if(!e.current){
				e.current=e.context.$parent;
			}
			var qq=stars.list[0]['qq8'];
			var	name=e.current.name;
			var qqNumber=page.getCurrentQQ(e.current,qq);
			var tipTxt=e.current.tipTxt;
			var isClickAddTip=false;//是否点击过渡页
			//console.log(qq+'||'+qq.length+'\n'+qqNumber);
			switch(this.getAttribute('handle')){
				case 'addfriend_tip':{
					var addfriend_tip=document.createElement('div');
					var tip_txt=ves("#tip_txt").html();
					addfriend_tip.id="addfriend_tip";					
					addfriend_tip.innerHTML='<div class="black_bg"><p class="timer"><span class="time_num">3</span>s跳过</p><div class="tip_btn"><img src="/templates/res/star/addfriend_tip_btn.png" /></div><div class="tip_crow"><img src="/templates/res/star/tip1.png" /></div><p class="titTxt">'+tip_txt+'</p></div><p class="tip_name">'+name+'</p>';
					ves.alert({content:addfriend_tip,type:'notify', style:'clear ddfriend_tip',closeTime:4,context:this,complete:function(){
						page.qqchat(qqNumber);
						if(isClickAddTip){
							switch(this.getAttribute('class')){
								case 'qq':
									page.statistic('QQ_'+name+'_sd');
									break;
								case 'left':
									page.statistic('QQ_tx_'+name+'_sd');
									break;
								case 'fixed_qq':
									page.statistic('QQ_Sus_'+name+'_sd');
									break;
								case 'txdb1':
									page.statistic('QQ_txdb_'+name+'_1_sd');
									break;
								case 'top_r':
									page.statistic('QQ_'+name+'_top_sd');
									break;
								default:
									page.statistic('QQ_tx_'+name+'_sd');
									break;
							}
						}else{
							switch(this.getAttribute('class')){
								case 'qq':
									page.statistic('QQ_'+name+'_zd');
									break;
								case 'left':
									page.statistic('QQ_tx_'+name+'_zd');
									break;
								case 'fixed_qq':
									page.statistic('QQ_Sus_'+name+'_zd');
									break;
								case 'txdb1':
									page.statistic('QQ_txdb_'+name+'_1_zd');
									break;
								case 'top_r':
									page.statistic('QQ_'+name+'_top_zd');
									break;
								default:
									page.statistic('QQ_tx_'+name+'_zd');
									break;
							}
						}
											
					}});					
					ves('#alert.addfriend_tip').on('tap',function(){
						isClickAddTip=true;
						ves.alert.close();
					});
					var timer_holder=addfriend_tip.firstChild.firstChild.firstChild;
					var timer_number=parseInt(timer_holder.innerHTML);
					var timer=setInterval(function(){
						timer_number-=1;
						if(timer_number<0){
							clearInterval(timer);
							timer=null;
						}
						timer_holder.innerHTML=timer_number;
					},1000);
					break;
				}
				default:{
					page.qqchat(qqNumber);
					switch(this.getAttribute('class')){
						case 'qq':
							page.statistic('QQ_'+name);
							break;
						case 'left':
							page.statistic('QQ_tx_'+name);
							break;
						case 'fixed_qq':
							page.statistic('QQ_Sus_'+name);
							break;
						case 'txdb1':
							page.statistic('QQ_txdb_'+name+'_1');
							break;
						case 'txdb2':
							page.statistic('QQ_txdb_'+name+'_2');
							break;
						default:
							page.statistic('QQ_tx_'+name);
							break;
						}
					break;
				}
			}
		},
		shareTip:function(){
			var share_tip=document.createElement('div');
			share_tip.id="share_tip";					
			share_tip.innerHTML="<div class=\"tip_txt\"><img src=\"/templates/res/star/share_arrow.png\" /></div><div class='tip_btn'><img src=\"/templates/res/star/addfriend_tip_btn_1.png\" /></div>";
			ves.alert({content:share_tip,type:'wait', style:'clear share_tip',context:this});
			//添加分享追踪
//			page.statistic('share');
			ves('#alert.share_tip').on('tap',function(){
				ves.alert.close();
			});
		},
		praise:function(e){
			var it=ves(this);
			if(it.hasClass('praise')==false){
				if(it.hasClass('done')==false){
					it.addClass('done');
				}else{
					it.removeClass('done');
				}
				it=ves('.praise');
			}
			if(it.hasClass('done')==false){
				it.addClass('done');
				var num=ves('.num',it);
				var count=parseInt(num.html())+1+'';
				num.html(count);
				ves.setCookie('praise',count,{expires:360});
			}else{
				it.removeClass('done');
				var num=ves('.num',it);
				var count=parseInt(num.html())-1+'';
				num.html(count);
				ves.setCookie('praise',count,{expires:360});
			}
		},		
		icon_share_2:function(e){
			ves(this).addClass('load');
		}		
	};
	var _stars=viewModel.stars;
	
	//附近有多少人加为好友
	var nearby=ves.cookie['nearby'];
	if(!nearby)nearby=0;
	else nearby=parseInt(nearby);
	nearby+=parseInt(Math.random()*5)+1;
	ves.setCookie('nearby',nearby+'',{expires:360});
	for(var i=0;i<_stars.length;i++){
		_stars[i].nearby+=nearby;
	}
	//浏览次数随机变化
	var viewNum=ves.cookie['viewcount'];
	var num=parseInt(ves('#view_count').html());
	if(!viewNum){
		viewNum=0;
	}else{
		viewNum=parseInt(viewNum);
		viewNum+=parseInt(Math.random()*3)+1;		
	}
	ves.setCookie('viewcount',viewNum+'',{expires:360});
	ves('#view_count').html(num+viewNum);
	
	ko.bind(viewModel);	
	ves.loaded(function(){
		ves.ajax({url:'/templates/common/script/smt_tj.js',dataType:'script',success:page.statisticInit});
	});
	var praizeList=['姐輸過、但沒服過','此女ゝ有毒！','Alexandr 嫁衣°','海棉寳寳つ','`凉兮','黑夜之花• hangeghost','时光静好','咦，有个萌妹子','潙沵變乖','Palma','彼岸花开成海','呐痛〆依然犹存','tfboys我的命','一脸美人痣','浅夏','Ta Shì Mìng','素衣风尘叹','心软脾气爆','roken凉城','像风一样自由','尐偏執','boarse','阡上蝶舞','陌上花开','黛','Kris 教主范er','毒舌但心软','不懂我就不要说我变了','Lemon茶','cute100%','若吥弃ˋ永相惜つ','梦梦@析语','庆云宝宝','陈小猪','凌潇潇%100','cco猫','lonely孤独','奇幻漂流'];
	function makeRandomArr(arrList,num){
	    if(num>arrList.length){
	       return;
	    }
	    var tempArr=arrList.concat();    
	    var newArrList=[];    
	    for(var i=0;i<num;i++){
	        var random=Math.floor(Math.random()*(tempArr.length-1));
	        var arr=tempArr[random];
	        tempArr.splice(random, 1);
	        newArrList.push(arr);    
	    }
	    return newArrList;
	}
    function removeLastOne(str){
        return str.substring(0,str.length - 1);
    }
    var new_arr=makeRandomArr(praizeList,7);
    var str='';
    for(var i=0;i<new_arr.length;i++){
        str+=new_arr[i]+'、';
    }
    str=removeLastOne(str); 
    ves('#praize_p').html(str);
     //根据系统时间设置发布与评论时间
    var oDate = new Date();
	var year=oDate.getFullYear(),
		month=format(oDate.getMonth()+1),
		day=format(oDate.getDate());
	function format(str){
		return str.toString().replace(/^(\d)$/,"0$1")
	}
	var time_ele=ves('.time');
	for(var i=0;i<time_ele.length;i++){
		ves('.time').eq(i).html(year+'年'+month+'月'+day+'日');
	}
	//qzone_527添加气泡弹出框
	ves('.close').on('tap',function(){
		ves(this).parent().css('display','none');
	});	
	//根据pc和mobile端显示不同的标题
	if(!ves('html').hasClass('mobile')){
		var title=ves('#title_pc').html();
		document.title=title;
	}else{
		var title=ves('#title_mobile').html();
		document.title=title;	
	}
});
