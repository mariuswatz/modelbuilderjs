
function UGeometry() {
	this.self=this;
	this.face=[];
}

UGeometry.axis={
		X:'0',
		Y:'1',
		Z:'2'
};

UGeometry.prototype.addFace = function(v1,v2,v3) {
	this.face.push(new UFace(v1,v2,v3));
	return this.self;
};

UGeometry.prototype.forEach = function(func) {
	this.face.forEach(func);
	return this.self;
};


UGeometry.prototype.toString = function() {
	return "<" + this.x + "," + this.y + 
	"," + this.z+">";
};

UGeometry.prototype.rotateX= function(deg) {
	return this.self;
};

UGeometry.prototype.rotateY= function(deg) {
	return this.self;
};

UGeometry.prototype.rotateZ= function(deg) {
	 return this.rotateAxis('Z',deg);
};

UGeometry.prototype.rotateAxis=function(axis,deg) {	
	this.face.forEach( function(el, id, arr) {		
		el.rotateAxis(axis,deg);
	});
	return this.self;
};



//////////// FACE

function UFace(v1,v2,v3) {
	this.self=this;
	this.col=0xFFFFFFFF;
	this.v=[];
	
	if(v1==undefined) return;
	
	this.v.push(v1.copy());
	this.v.push(v2.copy());
	this.v.push(v3.copy());
}

UFace.prototype.rotateAxis=function(axis,deg) {	
	v[0].rotateAxis(axis);
	v[1].rotateAxis(axis);
	v[2].rotateAxis(axis);
	return this.self;
};

UFace.prototype.rotateX=function(deg) {
	return this.rotateAxis(0,deg);
};

UFace.prototype.rotateY=function(deg) {
	return this.rotateAxis(1,deg);
};

UFace.prototype.rotateZ=function(deg) {
	return this.rotateAxis(2,deg);
};

UFace.prototype.setColor=function(c,a) {
	if(a!=undefined) c=(a<<24) | (c&0x00ffffff);
	this.col=c;
	
	return this.self;				
};

