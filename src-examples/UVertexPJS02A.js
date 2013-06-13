var sketch = new Processing.Sketch();

sketch.attachFunction = function(p) {
	this.p=p;
	this.W=100;//window.innerWidth;
	this.H=100;//window.innerHeight;
	
	var l;		
	var x,y,sz=1;
	var c,offs=100;

  p.setup = function() {
    p.size(this.W,this.W);
  	  
	l=new UVertexList();
	for(var i=0; i<360; i++) {		
		l.add(
			new UVertex(100,0).
			rotate(p.radians(i))
			);
	}
	
	l.setColorGradient(
			p.color(255,160,0),
			p.color(0,100,180));
  };

  p.draw = function() {
    p.background(0);
    p.noFill();
    
    p.translate(x,y);
    p.scale(sz);
    if(sz>1) p.strokeWeight(1/sz);
	
	var vert,vert2,voffs;
	
	for(var i=0; i<l.v.length; i++) {
		voffs=Math.floor(6*i*(offs/l.v.length));
		voffs=(i+voffs)%l.v.length;

		vert=l.v[i];			
		vert2=l.v[voffs];

		p.stroke(vert.col);
		p.line(vert.x,vert.y,vert2.x,vert2.y);		
	}

	p.noStroke();
	p.beginShape(p.QUAD_STRIP);
	p.rotate(p.radians(offs));

	var vx,vy;
	for(var i=0; i<l.v.length+1; i+=2) {		
		vert=l.v[i%l.v.length];
		p.fill(vert.col);
		
		vx=vert.x*.6;
		vy=vert.y*.6;
		p.vertex(vx,vy);
		p.vertex(vx*1.25,vy*1.25);
	}	
	p.endShape();

  }
  
  // mouse event
  p.mouseDragged = function() {
    offs=p.dist(p.mouseX,p.mouseY,p.width/2,p.height/2);
  };

  p.rescale = function(w,h) {
	  p.size(w,h);
	   
	  x=w/2;
	  y=h/2;
	   sz=(x>y? y : x)/110;
	}

	  
};

var canvas = document.getElementById("canvas1");
// attaching the sketch to the canvas
var p = new Processing(canvas, sketch);