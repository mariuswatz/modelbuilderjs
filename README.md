modelbuilder.js
===============

Experimental Javascript port of the core functions from my [Modelbuilder library](https://github.com/mariuswatz/modelbuilder) for Processing. 

My focus is to provide useful tools for generating geometry in 2D and 3D for integration with [Processing.js](http://processingjs.org/), while avoiding forced dependency on any specific framework. Integration-specific code will be provided in separate classes, leaving the user free to use Modelbuilder.js with any JS.

Currently, bare-bones versions of UVertex, UVertexList, UGeometry and UFace have been implemented. UGeometry.js does not yet have the features of the Java version to build shapes using quadstrip() or begin/endShape(), rather it allows you only to add faces for now.

See [src-examples](https://github.com/mariuswatz/modelbuilderjs/tree/master/src-examples) for sample code using Processing.js. Bugs or suggestions welcome, feel free to submit an issue.

Marius Watz, June 2013
[mariuswatz.com](http://mariuswatz.com) / [Code & Form blog](http://workshop.evolutionzone.com/)
