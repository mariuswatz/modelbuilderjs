	var sketch = new Processing.Sketch();
	
	sketch.attachFunction = function(p5) {
		var n=100;
		var vl=[];
		
	  var tex;
	  var rotx = Math.PI/4;
	  var roty = Math.PI/4;
	  var x,y,c;

	  p5.setup = function() {
	    //p5.size(640, 360);
	    p5.size(window.innerWidth, window.innerHeight);
//	    x=window.innerWidth/2;
	//    y=window.innerWidth/2;
	  	p5.rescale();
	  	  
	    p5.fill(255);
	    p5.stroke(p5.color(44,48,32));

	    var m;
		for(var i=0; i<n; i++) {
			m=p5.map(i,0,n-1,0,p5.TWO_PI);
			vl.push(
					new UVertex(
							p5.cos(m),
							p5.sin(m)).
							mult(p5.map(i,0,n-1,0,p5.height/2)));
			console.log(vl[i].toString());
			
		}
		

	  };

	  p5.draw = function() {
	    p5.background(0);
	    p5.noStroke();
	    p5.translate(x,y, -100);
		
		deg=Math.PI*(0.5/180);
		c1=p5.color(255,0,128);
		c2=p5.color(0,255,255);
		
		for(var i=0; i<n; i++) {
			v1=vl[i];
			m=p5.map(i,0,n-1,0.25,1);
			
			v1.
//				add(
//					0.01*p5.random(-0.5,0.5)*p5.width,
//					0.01*p5.random(-0.5,0.5)*p5.height
//				).
//				mult(0.99).
				rotateZ((i%2==1) ? -m*deg : m*deg);
		}
		for(var i=0; i<n-1; i++) {
			v1=vl[i];
			m=p5.map(i,0,n-1,0,1);

			p5.stroke(p5.lerpColor(c1,c2,m));
			
			v2=vl[(i+23)%vl.length];		
			p5.line(v1.x,v1.y,v2.x,v2.y);

			v2=vl[(i+17)%vl.length];
			p5.line(v1.x,v1.y,v2.x,v2.y);
			v2=vl[(i+47)%vl.length];
			p5.line(v1.x,v1.y,v2.x,v2.y);
			
		}

	  }
	  // mouse event
	  p5.mouseDragged = function() {
	    var rate = 0.01;
	    rotx += (p5.pmouseY-p5.mouseY) * rate;
	    roty += (p5.mouseX-p5.pmouseX) * rate;
	  };

	  p5.rescale = function() {
		  console.log("rescale");
		   x=window.innerWidth/2;
		   y=window.innerHeight/2;
		   c=p5.color(255,p5.random(100,255,0),0);
		   p5.size(window.innerWidth, window.innerHeight);
		}

		  
	};

	var canvas = document.getElementById("canvas1");
	// attaching the sketch to the canvas
	var p = new Processing(canvas, sketch);

	  window.addEventListener('resize', function(event) {
		  //var pjs = Processing.getInstanceById("canvas1");
		  p.rescale();

	  });
