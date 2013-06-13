
function UVertexList(vl) {
	this.self=this;
	this.col=0xFFFFFF00;
	var vv=[];
	
	if(arguments.length>0 && 
			(typeof arguments[0]=='object')) {
		console.log(vl);
		console.log(vl.v);
		vl.forEach( function(el, id, arr) {
			vv.push(el.copy());
		});
	}
	
	this.v=vv;
}

UVertexList.prototype.copy = function() {
	var l=new UVertexList(this);
	return l;
};

UVertexList.prototype.forEach = function(func) {
	this.v.forEach(func);
};

UVertexList.prototype.addCopy = function(v) {
	var arglen=arguments.length;	
   	this.v.push(v.copy());    
    return this.self;
};

UVertexList.prototype.add = function(vx,vy,vz) {
	var arglen=arguments.length;	
	
    if (arglen==1 && (typeof vx=='object')) {
    	this.v.push(vx);
    }
    else {
    	var vnew;
    	if(arglen==2) vnew=new UVertex(vx,vy);
    	else if(arglen==3) vnew=new UVertex(vx,vy,vz);
    	this.v.push(vnew);
    }
    
    return this.self;
};

UVertexList.prototype.scale = function(m) {
	return this.scaleXYZ(m,m,m);
};

UVertexList.prototype.scaleXYZ = function(vx,vy,vz) {
	this.v.forEach( function(el, id, arr) {
		el.x*=vx;
		el.y*=vy;
		el.z*=vz;
	});
    return this.self;
};

UVertexList.prototype.translate = function(vx,vy,vz) {
	if(vz==undefined) vz=0;
	
	this.v.forEach( function(el, id, arr) {
		el.x+=vx;
		el.y+=vy;
		el.z+=vz;
	});
    return this.self;
};

UVertexList.prototype.rotateX= function(deg) {
	return this.self;
};

UVertexList.prototype.rotateY= function(deg) {
	return this.self;
};

UVertexList.prototype.rotateZ= function(deg) {
	 return this.rotateAxis('Z',deg);
};

UVertexList.prototype.rotate= function(deg) {
	 return this.rotateAxis(2,deg);
};

UVertexList.prototype.rotateAxis=function(axis,deg) {	
	this.v.forEach( function(el, id, arr) {		
		el.rotateAxis(axis,deg);
	});
	return this.self;
};

UVertexList.prototype.setColor=function(c,a) {
	if(a!=undefined) c=(a<<24) | (c&0x00ffffff);
//	console.log(c+" "+a+" "+c.toString(16));
	this.v.forEach( function(el, id, arr) {
		el.setColor(c);
	});
    return this.self;
};

UVertexList.prototype.setColorGradient=function(c1,c2) {
	var gr=[];
	var c,id,ch,mod=0xff,rd,gd,bd,ad;
	
	for(var i=0; i<8; i++) {
		id=i%4;
		ch=(i<4?c1:c2);
		if(id>0) ch=ch>>(id*8);
		ch=ch& 0xff;			
		gr.push(ch);
	}
	
//	console.log(gr);
	rd=gr[4]-gr[0];
	gd=gr[5]-gr[1];
	bd=gr[6]-gr[2];
	ad=gr[7]-gr[3];
	
	this.v.forEach( function(el, id, arr) {
		var t=id/arr.length;
		var cc=
		(Math.floor(gr[0]+rd*t)) | 
		(Math.floor(gr[1]+gd*t)<<8) |
		(Math.floor(gr[2]+bd*t)<<16)|
		(Math.floor(gr[3]+ad*t)<<24);
//		console.log(cc.toString(16));
		el.setColor(cc);
	});
	
	this.gradient=gr;
    return this.self;
};

