var sketch = new Processing.Sketch();

sketch.attachFunction = function(p) {
	this.p=p;
	this.W=100;//window.innerWidth;
	this.H=100;//window.innerHeight;
	
	var l,l2;		
	var x,y,sz=1;
	var c,offs=100;

  p.setup = function() {
    p.size(this.W,this.W);
  	  
	l=new UVertexList();
	for(var i=0; i<37; i++) {		
		l.add(new UVertex(100,0).rotate(p.radians(i*10)));
	}
	
	l2=l.copy().scale(0.5);
	
	console.log(l);
	console.log(l2);
	
	l.setColorGradient(
			p.color(255,160,0),
			p.color(0,100,180));
	l2.setColorGradient(
			p.color(0,50,100),
			p.color(50,255,0));
	
  };

  p.draw = function() {
    p.background(0);
    p.noFill();
    
    p.translate(x,y);
    p.scale(sz);
	p.noStroke();
	
	var vert,vert2;
	var m=p.sin(p.PI*((p.frameCount%100)/100));
	l2.setColorGradient(
			p.color(0,50+200*m,255-255*m),
			p.color(m*255,200-200*m,0)
			);
//	l2.scale((m*0.045+0.08));
	
	p.beginShape(p.QUAD_STRIP);
	p.strokeWeight(4/sz);
	for(var i=0; i<l.v.length; i++) {
		vert=l.v[i];			
		vert2=l2.v[i];

		p.fill(vert.col);
		p.stroke(vert2.col);
		p.vertex(vert.x,vert.y);		
		p.vertex(vert2.x,vert2.y);		
	}

	p.endShape();

  }
  
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