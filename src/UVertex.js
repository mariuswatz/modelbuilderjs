
function UVertex(x, y,z) {
	this.self=this;
//	var arglen=arguments.length;	
	
//    if (arglen==1) {
//    	this.x=v.x;
//    	this.y=v.y;
//    	this.z=v.z;
//    }
//    else {
    	this.x = x || 0;
    	this.y = y || 0;
    	this.z = z || 0;
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
	return "(" + this.x + ", " + this.y + ")";
};


UVertex.prototype.rotateX= function(deg) {
 var sindeg,cosdeg;
 var newy,newz;

 sindeg=Math.sin(deg); cosdeg=Math.cos(deg);
 newy=this.y*cosdeg-this.z*sindeg;
 newz=this.y*sindeg+this.z*cosdeg;
 this.y=newy;
 this.z=newz;
 
 return this.self;
}

UVertex.prototype.rotateY= function(deg) {
 var sindeg,cosdeg;
 var newx,newz;

 sindeg=Math.sin(deg); 
 cosdeg=Math.cos(deg);
 newx=this.x*cosdeg-this.z*sindeg;
 newz=this.x*sindeg+this.z*cosdeg;
 this.x=newx;
 this.z=newz;
 
	return this.self;
};

UVertex.prototype.rotate= function(deg) {
	 return this.rotateZ(deg);
};

UVertex.prototype.rotateZ= function(deg) {
 var sindeg,cosdeg;
 var newy,newx;
 var x = this.x;
	var y = this.y;

 sindeg=Math.sin(deg); 
 cosdeg=Math.cos(deg);
 newx=x*cosdeg-y*sindeg;
 newy=x*sindeg+y*cosdeg;
 this.x=newx;
 this.y=newy;
 
 return this.self;
};

/*
UVertex.prototype.div = function(v) {
	return new UVertex(this.x / v.x, this.y / v.y);
}

UVertex.prototype.scale = function(coef) {
	return new UVertex(this.x*coef, this.y*coef);
}

UVertex.prototype.mutableSet = function(v) {
	this.x = v.x;
	this.y = v.y;
	return this;
}

UVertex.prototype.mutableAdd = function(v) {
	this.x += v.x;
	this.y += v.y;
	return this;
}

UVertex.prototype.mutableSub = function(v) {
	this.x -= v.x;
	this.y -= v.y;
	return this;
}

UVertex.prototype.mutableMul = function(v) {
	this.x *= v.x;
	this.y *= v.y;
	return this;
}

UVertex.prototype.mutableDiv = function(v) {
	this.x /= v.x;
	this.y /= v.y;
	return this;
}

UVertex.prototype.mutableScale = function(coef) {
	this.x *= coef;
	this.y *= coef;
	return this;
}

UVertex.prototype.equals = function(v) {
	return this.x == v.x && this.y == v.y;
}

UVertex.prototype.epsilonEquals = function(v, epsilon) {
	return Math.abs(this.x - v.x) <= epsilon && Math.abs(this.y - v.y) <= epsilon;
}

UVertex.prototype.length = function(v) {
	return Math.sqrt(this.x*this.x + this.y*this.y);
}

UVertex.prototype.length2 = function(v) {
	return this.x*this.x + this.y*this.y;
}

UVertex.prototype.dist = function(v) {
	return Math.sqrt(this.dist2(v));
}

UVertex.prototype.dist2 = function(v) {
	var x = v.x - this.x;
	var y = v.y - this.y;
	return x*x + y*y;
}

UVertex.prototype.normal = function() {
	var m = Math.sqrt(this.x*this.x + this.y*this.y);
	return new UVertex(this.x/m, this.y/m);
}

UVertex.prototype.dot = function(v) {
	return this.x*v.x + this.y*v.y;
}

UVertex.prototype.angle = function(v) {
	return Math.atan2(this.x*v.y-this.y*v.x,this.x*v.x+this.y*v.y);
}

UVertex.prototype.angle2 = function(vLeft, vRight) {
	return vLeft.sub(this).angle(vRight.sub(this));
}

UVertex.prototype.rotate = function(origin, theta) {
	var x = this.x - origin.x;
	var y = this.y - origin.y;
	return new UVertex(x*Math.cos(theta) - y*Math.sin(theta) + origin.x, x*Math.sin(theta) + y*Math.cos(theta) + origin.y);
}


*/