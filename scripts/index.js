window.onload=function(){
	var ROW=15,kuan=580;
	var sence=document.getElementById('sence');
	var width=Math.floor(kuan-ROW)/ROW+'px';
	var xian,xian1;
	for(var i=0;i<ROW;i++){
		xian=document.createElement('div');
		xian.style.width=kuan+'px';
		xian.style.height='1px';
		xian.style.background='#767676';
		xian.style.position='absolute';
		xian.style.top=(kuan/ROW/2)+kuan/ROW*i+'px';
		sence.appendChild(xian);

		xian1=document.createElement('div');
		xian1.style.width='1px';
		xian1.style.height=kuan+'px';
		xian1.style.background='#767676';
		xian1.style.position='absolute';
		xian1.style.left=(kuan/ROW/2)+kuan/ROW*i+'px';
		sence.appendChild(xian1);
	}
	
	for(var i=0;i<ROW;i++){
		for(var j=0;j<ROW;j++){
			var child=document.createElement('div');
			child.setAttribute('class','block');
			child.setAttribute('id',i+'_'+j);
			child.style.width=width;
			child.style.height=width;
			sence.appendChild(child);
		}
	}
	var blocks=document.getElementsByClassName('block');
	var dict1={},dict2={},kaiguan=true;
	var panduan=function(id,dic){
		var x=Number(id.split('_')[0]);
		var y=Number(id.split('_')[1]);
		var tx=x,ty=y;
		var hang=1;
		while(dic[tx+'_'+(ty+1)]){
			hang++;ty++;
		}
		tx=x,ty=y;
		while(dic[tx+'_'+(ty-1)]){
			hang++;ty--;
		}
		if(hang>=5){
			return true;
		}
		console.log(hang);
		var lie=1;
		tx=x,ty=y;
		while(dic[(tx+1)+'_'+ty]){
			lie++;tx++;
		}
		tx=x,ty=y;
		while(dic[(tx-1)+'_'+ty]){
			lie++;tx--;
		}
		if(lie>=5){
			return true;
		}
		var zx=1;
		tx=x,ty=y;
		while(dic[(tx+1)+'_'+(ty-1)]){
			zx++;tx++;ty--;
		}
		tx=x,ty=y;
		while(dic[(tx-1)+'_'+(ty+1)]){
			zx++;tx--;ty++;
		}
		if(zx>=5){
			return true;
		}
		var yx=1;
		tx=x,ty=y;
		while(dic[(tx-1)+'_'+(ty-1)]){
			yx++;tx--;ty--;
		}
		tx=x,ty=y;
		while(dic[(tx+1)+'_'+(ty+1)]){
			yx++;tx++;ty++;
		}
		if(yx>=5){
			return true;
		}
		return false;
	};
	start.onclick=function(){
		for(var i=0;i<blocks.length;i++){
			blocks[i].onclick=function(){
				if(this.hasAttribute('hasColor')){
					return;
				}
				if(kaiguan){
					this.style.background='black';
					this.style.boxShadow='0px 0px 2px #fff inset';
					this.style.opacity=1;
					var id=this.getAttribute('id');
					dict1[id]=true;
					kaiguan=false;
					if(panduan(id,dict1)){
						alert('black is winner!!!');
						location.reload();
					}
				}else{
					this.style.background='white';
					this.style.boxShadow='0px 0px 10px #000 inset';
					this.style.opacity=1;
					var id=this.getAttribute('id');
					dict2[id]=true;
					kaiguan=true;
					if(panduan(id,dict2)){
						alert('white is winner!!!');
						location.reload();
					}
				}
				this.setAttribute('hasColor',true);

			};
		}
	}
	end.onclick=function(){
		location.reload();
	}
	
	
	
};