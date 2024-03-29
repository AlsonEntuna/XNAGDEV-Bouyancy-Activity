var FLUID_DENSITY = 0.00014;
var FLUID_DRAG = 2.0;
var score = 0;
var timer = 2;
var elapsedTime = 0;

var Buoyancy = function ()
{
	Demo.call(this);

	var space = this.space;
	space.iterations = 30;
	space.gravity = cp.v(0,-500);
//	cpSpaceSetDamping(space, 0.5);
	space.sleepTimeThreshold = 0.5;
	space.collisionSlop = 0.5;

	var staticBody = space.staticBody;

	// Create segments around the edge of the screen.
	var shape = space.addShape( new cp.SegmentShape(staticBody, cp.v(0,0), cp.v(0,480), 0.0));
	shape.setElasticity(1.0);
	shape.setFriction(1.0);
	shape.setLayers(NOT_GRABABLE_MASK);

	shape = space.addShape( new cp.SegmentShape(staticBody, cp.v(640,0), cp.v(640,480), 0.0));
	shape.setElasticity(1.0);
	shape.setFriction(1.0);
	shape.setLayers(NOT_GRABABLE_MASK);

	shape = space.addShape( new cp.SegmentShape(staticBody, cp.v(0,0), cp.v(640,0), 0.0));
	shape.setElasticity(1.0);
	shape.setFriction(1.0);
	shape.setLayers(NOT_GRABABLE_MASK);

	shape = space.addShape( new cp.SegmentShape(staticBody, cp.v(0,480), cp.v(640,480), 0.0));
	shape.setElasticity(1.0);
	shape.setFriction(1.0);
	shape.setLayers(NOT_GRABABLE_MASK);

	// {
		// Add the edges of the bucket
		var bb = new cp.BB(20, 40, 610, 240);
		var radius = 5.0;

		shape = space.addShape( new cp.SegmentShape(staticBody, cp.v(bb.l, bb.b), cp.v(bb.l, bb.t), radius));
		shape.setElasticity(1.0);
		shape.setFriction(1.0);
		shape.setLayers(NOT_GRABABLE_MASK);

		shape = space.addShape( new cp.SegmentShape(staticBody, cp.v(bb.r, bb.b), cp.v(bb.r, bb.t), radius));
		shape.setElasticity(1.0);
		shape.setFriction(1.0);
		shape.setLayers(NOT_GRABABLE_MASK);

		shape = space.addShape( new cp.SegmentShape(staticBody, cp.v(bb.l, bb.b), cp.v(bb.r, bb.b), radius));
		shape.setElasticity(1.0);
		shape.setFriction(1.0);
		shape.setLayers(NOT_GRABABLE_MASK);

		// Add the sensor for the water.
		shape = space.addShape( new cp.BoxShape2(staticBody, bb) );
		shape.setSensor(true);
		shape.setCollisionType(1);
	// }


    // {

    // PADDLE Object
		var width = 150.0;
		var height = 25.0;
		var mass = 0.3*FLUID_DENSITY*width*height;
		var moment = cp.momentForBox(mass, width, height);

		paddle = space.addBody( new cp.Body(mass, moment));
		paddle.setPos( cp.v(270, 140));
		paddle.setVel( cp.v(0, -100));
		paddle.setAngVel( 1 );

		shape = space.addShape( new cp.BoxShape(paddle, width, height));
		shape.setFriction(0.8);
	// }

    // {

    // FALLING Object 1
		width = 10.0;
		height = width*1.5;
		mass = 1.3*FLUID_DENSITY*width*height;
		moment = cp.momentForBox(mass, width, height);

		body = space.addBody( new cp.Body(mass, moment));
		body.setPos(cp.v(Math.floor((Math.random() * 300) + 100), Math.floor((Math.random() * 300) + 190)));
		body.setVel(cp.v(0, -100));
		body.setAngVel(1);

		shape = space.addShape(new cp.BoxShape(body, width, height));
		shape.setFriction(0.8);
    // }

    // {

    // FALLING Object 2
		width = 10.0;
		height = width * 1.5;
		mass = 1.3 * FLUID_DENSITY * width * height;
		moment = cp.momentForBox(mass, width, height);

		body = space.addBody(new cp.Body(mass, moment));
		body.setPos(cp.v(Math.floor((Math.random() * 300) + 100), Math.floor((Math.random() * 300) + 190)));
		body.setVel(cp.v(0, -100));
		body.setAngVel(1);

		shape = space.addShape(new cp.BoxShape(body, width, height));
		shape.setFriction(0.8);
    // }

    // FALLING Object 2
		width = 10.0;
		height = width * 1.5;
		mass = 1.3 * FLUID_DENSITY * width * height;
		moment = cp.momentForBox(mass, width, height);

		body = space.addBody(new cp.Body(mass, moment));
		body.setPos(cp.v(Math.floor((Math.random() * 300) + 100), Math.floor((Math.random() * 300) + 190)));
		body.setVel(cp.v(0, -100));
		body.setAngVel(1);

		shape = space.addShape(new cp.BoxShape(body, width, height));
		shape.setFriction(0.8);
    // }
	
	

	space.addCollisionHandler( 1, 0, null, this.waterPreSolve, null, null);
};

// Movement for the PADDLE
function MoveLeft() {
    console.log("Moving Left" + paddle.getPos().x);
	//paddle.setPos(cp.v(paddle.getPos.x -= 1, paddle.getPos.y));
	//paddle.getPos;
	//paddle.x -=  256;
	paddle.getPos().x -= 10;
}
function MoveRight() {
    console.log("Moving Right");
	paddle.getPos().x += 10;
	//Spawn();
}

function Spawn()
{
		Demo.call(this);
	var space = this.space;
	space.iterations = 30;
	space.gravity = cp.v(0,-500);
//	cpSpaceSetDamping(space, 0.5);
	space.sleepTimeThreshold = 0.5;
	space.collisionSlop = 0.5;
	
		width = 10.0;
		height = width * 1.5;
		mass = 0.3 * FLUID_DENSITY * width * height;
		moment = cp.momentForBox(mass, width, height);

		body = space.addBody(new cp.Body(mass, moment));
		body.setPos(cp.v(Math.floor((Math.random() * 300) + 100), Math.floor((Math.random() * 300) + 190)));
		body.setVel(cp.v(0, -100));
		body.setAngVel(1);

		shape = space.addShape(new cp.BoxShape(body, width, height));
		shape.setFriction(0.8);
		space.addCollisionHandler( 1, 0, null, this.waterPreSolve, null, null);
		console.log("Spawning");
}

// Input Events
var keysDown = {};
addEventListener("keydown", function (e)
{
    keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e)
{
    delete keysDown[e.keyCode];
}, false);

Buoyancy.prototype = Object.create(Demo.prototype);



// Update Func
Buoyancy.prototype.update = function(dt)
{

	var steps = 3;
	dt /= steps;
	for (var i = 0; i < 3; i++){
		this.space.step(dt);
	}
	
	//document.getElementById("demo").onkeypress = function() {myFunction()};
	elapsedTime += dt;
	if (elapsedTime >= timer)
	{
		Spawn();
		elapsedTime = 0;
	}
	
	if (37 in keysDown) // left
    {
       MoveLeft();
    }
    if (39 in keysDown) // right
    {
        MoveRight();
    }
	
	//console.log("Timer: " + elapsedTime.toString());
};

// IDK
Buoyancy.prototype.waterPreSolve = function(arb, space, ptr) {
	var shapes = arb.getShapes();
	var water = shapes[0];
	var poly = shapes[1];

	var body = poly.getBody();

	// Get the top of the water sensor bounding box to use as the water level.
	var level = water.getBB().t;

	// Clip the polygon against the water level
	var count = poly.getNumVerts();

	var clipped = [];

	var j=count-1;
	for(var i=0; i<count; i++) {
		var a = body.local2World( poly.getVert(j));
		var b = body.local2World( poly.getVert(i));

		if(a.y < level){
			clipped.push( a.x );
			clipped.push( a.y );
		}

		var a_level = a.y - level;
		var b_level = b.y - level;

		if(a_level*b_level < 0.0){
			var t = Math.abs(a_level)/(Math.abs(a_level) + Math.abs(b_level));

			var v = cp.v.lerp(a, b, t);
			clipped.push(v.x);
			clipped.push(v.y);
		}
		j=i;
	}

	// Calculate buoyancy from the clipped polygon area
	var clippedArea = cp.areaForPoly(clipped);

	var displacedMass = clippedArea*FLUID_DENSITY;
	var centroid = cp.centroidForPoly(clipped);
	var r = cp.v.sub(centroid, body.getPos());

	var dt = space.getCurrentTimeStep();
	var g = space.gravity;

	// Apply the buoyancy force as an impulse.
	body.applyImpulse( cp.v.mult(g, -displacedMass*dt), r);

	// Apply linear damping for the fluid drag.
	var v_centroid = cp.v.add(body.getVel(), cp.v.mult(cp.v.perp(r), body.w));
	var k = 1; //k_scalar_body(body, r, cp.v.normalize_safe(v_centroid));
	var damping = clippedArea*FLUID_DRAG*FLUID_DENSITY;
	var v_coef = Math.exp(-damping*dt*k); // linear drag
//	var v_coef = 1.0/(1.0 + damping*dt*cp.v.len(v_centroid)*k); // quadratic drag
	body.applyImpulse( cp.v.mult(cp.v.sub(cp.v.mult(v_centroid, v_coef), v_centroid), 1.0/k), r);

	// Apply angular damping for the fluid drag.
	var w_damping = cp.momentForPoly(FLUID_DRAG*FLUID_DENSITY*clippedArea, clipped, cp.v.neg(body.p));
	body.w *= Math.exp(-w_damping*dt* (1/body.i));

	return true;
};

addDemo('Buoyancy', Buoyancy);

