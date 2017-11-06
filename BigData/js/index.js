(function(){
	function Banner( aLi,aBtn,container){
		this.aLi = document.querySelectorAll( aLi );
		this.aBtn = document.querySelectorAll( aBtn );
		this.container =  document.querySelector( container );
		this.length = this.aLi.length;
		this.index = 1;		/*当前序列号*/
		this.aLiClick();	/*图片点击*/
		this.aBtnClick();	/*按钮点击*/
		this.nowTime = 0;	
		this.timer = null;
		this.auto();		
		this.clearTimer();
	};

	Banner.prototype.aLiClick = function(){		/*图片点击事件*/
		
		for (var i=0;i<this.length ;i++ )
		{
			(function(i){
				this.aLi[i].onclick = function(){
					this.common( i );
					this.index = i;
				}.bind(this);
			}).call(this,i);
		};
	};

	Banner.prototype.clearTimer = function(){		/*定时器的清除*/
		for (var i=0; i<this.length;i++ )
		{
			this.container.onmouseenter = function(){
				clearInterval( this.timer );
			}.bind(this);
			this.container.onmouseleave = function(){  /*定时器的继续*/
				this.auto();
			}.bind(this);
		};
	};
	Banner.prototype.aBtnClick = function(){		/*按钮点击事件*/
		for (var i=0;i<2 ; i++)
		{
			(function(i){
				this.aBtn[i].onclick = function(){
					if (new Date - this.nowTime>500)
					{
						this.nowTime = new Date;
						if (i)
						{
							this.index --;
							if (this.index<0)this.index = this.length - 1;
						}else{
							this.index ++;
							this.index %= this.length;
						};
						this.common( this.index );
					};
				}.bind(this);
			}).call(this,i);
		};
	};

	Banner.prototype.auto = function(){			/*定时器*/
		this.timer = setInterval(function(){
			this.index ++;
			this.index %= this.length;
			this.common( this.index );
		}.bind(this),3000);
	};
	
	Banner.prototype.common = function( index ){		/*共用的函数*/
		if ( index==0 )
		{
			this.aLi[this.length-1].className = 'left';
		}else{
			this.aLi[(index-1)].className = 'left';
		};
		this.aLi[index].className = 'middle';
		if ( index==this.length-1 )
		{
			this.aLi[0].className = 'right';
		}else{
			this.aLi[(index+1)].className = 'right';
		};
	};
	
	var obj1 = new Banner('#main .component .banner1 .content ul li','#main .component .banner1 .btnlist span','#main .component .banner1');
	var obj2 = new Banner('#main .component .banner2 .content ul li','#main .component .banner2 .btnlist span','#main .component .banner2');
	var obj3 = new Banner('#main .component .banner3 .content ul li','#main .component .banner3 .btnlist span','#main .component .banner3');
	
})()


