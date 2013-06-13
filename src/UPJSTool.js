
function UPJSTool(processing) {
	this.self=this;
	this.p=processing;	
};

UPJSTool.prototype.drawFace = function(f) {	
	this.p.beginShape();
	this.vertex(f.v[0]).
		vertex(f.v[1]).
		vertex(f.v[2]);
	this.p.endShape();
	return this.self;	
};

UPJSTool.prototype.drawGeometry2D = function(geo) {	
	var v;
	this.p.beginShape(this.p.TRIANGLES);
	geo.face.forEach( function(el, id, arr) {
		v=el.v[0];
		this.p.vertex(v.x,v.y);
		v=el.v[1];
		this.p.vertex(v.x,v.y);
		v=el.v[2];
		this.p.vertex(v.x,v.y);
	});
	this.p.endShape();
	return this.self;	
};

UPJSTool.prototype.drawColorGeometry2D = function(geo) {	
	this.p.beginShape(this.p.TRIANGLES);
	geo.face.forEach( function(el) {
		this.p.fill(el.col);
		v=el.v[0];
		this.p.vertex(v.x,v.y);
		v=el.v[1];
		this.p.vertex(v.x,v.y);
		v=el.v[2];
		this.p.vertex(v.x,v.y);
	});
	this.p.endShape();
	
	return this.self;	
};

UPJSTool.prototype.vertex = function(v) {
	if(v.z==undefined)
		this.p.vertex(v.x,v.y);
	else this.p.vertex(v.x,v.y,v.z);
	return this.self;
};
