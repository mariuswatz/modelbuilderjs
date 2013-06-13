
function UVertex(x, y,z) {
	this.self=this;
	this.col=0xFFFFFFFF;
	
//	var arglen=arguments.length;	
	
    if (arguments.length==1) {
    	this.x=x.x;
    	this.y=x.y;
    	this.z=x.z;
    }
//    else {
    	this.x = x || 0;
    	this.y = y || 0;
    	this.z = z || -10;
//    }
}

UVertex.prototype.add = function(vx,vy,vz) {
	var tx=0,ty=0,tz=0;
	var arglen=arguments.length;	
	
    if (arglen==1) {
    	tx=v.x;
    	ty=v.y;
    	tz=v.z;
    }
    else {
    	tx=vx;
    	ty=vy;
    	if(arglen>2) tz=vz; 
    }
    
	this.x+=tx;
	this.y+=ty;
	this.z+=tz;
	return this.self;
};

UVertex.prototype.copy = function() {
	var vcopy=new UVertex(this.x,this.y,this.z);
	vcopy.col=this.col;
	return vcopy;
};

UVertex.prototype.sub = function(vx,vy,vz) {
	var tx=0,ty=0,tz=0;
	var arglen=arguments.length;	
	
    if (arglen==1) {
    	tx=vx.x;
    	ty=vx.y;
    	tz=vx.z;
    }
    else {
    	tx=vx;
    	ty=vy;
    	if(arglen>2) tz=vz; 
    }
    
	return this.add(-tx,-ty,-tz);
};

UVertex.prototype.mult = function(mx,my,mz) {
	var arglen=arguments.length;	
	
    if (arglen==1) {
    	this.x *= mx;
    	this.y *= mx;
    	this.z *= mx;
    }
    else {
    	this.x *= mx;
    	this.y *= my;
    	if(arglen>2) this.z*= mz; 
    }
	
	return this.self;
};

UVertex.prototype.toString = function() {
	return "<" + this.x + "," + this.y + 
	"," + this.z+">";
};

UVertex.prototype.setColor=function(c,a) {
	if(a!=undefined) c=(a<<24) | (c&0x00ffffff);
	this.col=c;
	
	return this.self;				
};

UVertex.prototype.rotateAxis= function(axis,deg) {
	var sin=Math.sin(deg),cos=Math.cos(deg);
	 var a,b,a2,b2;

//	 x=y,z	y=x,z	z=x,y

	 a=(axis==0 ? this.y : this.x);
	 b=(axis==1 ? this.z : this.y);
	 
	 a2=a*cos-b*sin;
	 b2=a*sin+b*cos;
	 
	 console.log(axis+" "+deg+" "+this.toString());
	 this.x=(axis==0 ? this.x : a2);
	 this.y=(axis==1 ? this.y : (axis==0 ? a2:b2));
	 this.z=(axis==2 ? this.z : b2);
	 console.log("-> "+axis+" "+a+" "+b+" "+a2+" "+b2);
	 console.log("-> "+axis+" "+deg+" "+this.toString());
	 
	 return this.self;
};


UVertex.prototype.rotateX = function(deg) {
	return this.rotateAxis(0,deg);
};


UVertex.prototype.rotateY = function(deg) {
	return this.rotateAxis(1,deg);
};

UVertex.prototype.rotateZ= function(deg) {
	return this.rotateAxis(2,deg);
};

UVertex.prototype.rotate= function(deg) {
	 return this.rotateAxis(2,deg);
};
