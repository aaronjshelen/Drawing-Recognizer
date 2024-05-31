import {
  triangle,
  triangle2,
  triangle3,
  triangle4,
  triangle5,
} from "./shape_templates/triangle.js";
import {
  rectangle,
  rectangle2,
  rectangle3,
  rectangle4,
  rectangle5,
} from "./shape_templates/rectangle.js";
import {
  circle,
  circle2,
  circle3,
  circle4,
  circle5,
} from "./shape_templates/circle.js";
import {
  check,
  check2,
  check3,
  check4,
  check5,
} from "./shape_templates/check.js";
import { x, x2, x3, x4, x5 } from "./shape_templates/x.js";
import {
  caret,
  caret2,
  caret3,
  caret4,
  caret5,
} from "./shape_templates/caret.js";
import {
  zigzag,
  zigzag2,
  zigzag3,
  zigzag4,
  zigzag5,
} from "./shape_templates/zigzag.js";
import {
  arrow,
  arrow2,
  arrow3,
  arrow4,
  arrow5,
} from "./shape_templates/arrow.js";
import {
  leftsquarebracket,
  leftsquarebracket2,
  leftsquarebracket3,
  leftsquarebracket4,
  leftsquarebracket5,
} from "./shape_templates/leftsquarebracket.js";
import {
  rightsquarebracket,
  rightsquarebracket2,
  rightsquarebracket3,
  rightsquarebracket4,
  rightsquarebracket5,
} from "./shape_templates/rightsquarebracket.js";
import {
  delete1,
  delete2,
  delete3,
  delete4,
  delete5,
} from "./shape_templates/delete.js";
import { star, star2, star3, star4, star5 } from "./shape_templates/star.js";

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("gestureCanvas");
  const context = canvas.getContext("2d");

  let isDrawing = false;
  let pointsList = [];

  ///////////////
  // CONSTANTS //
  ///////////////
  const numPoints = 16;

  /////////////////
  // POINT CLASS //
  /////////////////
  function Point(x, y) {
    this.X = x;
    this.Y = y;
  }

  ///////////////////
  // GESTURE CLASS //
  ///////////////////
  function Gesture(name, points) {
    this.Name = name;
    this.Points = resample(points, numPoints);
    this.vector = vectorize(this.Points, false);
  }

  const templates_1 = [
    new Gesture("triangle", triangle),
    new Gesture("rectangle", rectangle),
    new Gesture("circle", circle),
    new Gesture("check", check),
    new Gesture("x", x),
    new Gesture("caret", caret),
    new Gesture("zig-zag", zigzag),
    new Gesture("arrow", arrow),
    new Gesture("left square bracket", leftsquarebracket),
    new Gesture("right square bracket", rightsquarebracket),
    new Gesture("delete", delete1),
    new Gesture("star", star),
  ];

  const templates_3 = [
    new Gesture("triangle", triangle),
    new Gesture("triangle", triangle2),
    new Gesture("triangle", triangle3),
    new Gesture("rectangle", rectangle),
    new Gesture("rectangle", rectangle2),
    new Gesture("rectangle", rectangle3),
    new Gesture("circle", circle),
    new Gesture("circle", circle2),
    new Gesture("circle", circle3),
    new Gesture("check", check),
    new Gesture("check", check2),
    new Gesture("check", check3),
    new Gesture("x", x),
    new Gesture("x", x2),
    new Gesture("x", x3),
    new Gesture("caret", caret),
    new Gesture("caret", caret2),
    new Gesture("caret", caret3),
    new Gesture("zig-zag", zigzag),
    new Gesture("zig-zag", zigzag2),
    new Gesture("zig-zag", zigzag3),
    new Gesture("arrow", arrow),
    new Gesture("arrow", arrow2),
    new Gesture("arrow", arrow3),
    new Gesture("left square bracket", leftsquarebracket),
    new Gesture("left square bracket", leftsquarebracket2),
    new Gesture("left square bracket", leftsquarebracket3),
    new Gesture("right square bracket", rightsquarebracket),
    new Gesture("right square bracket", rightsquarebracket2),
    new Gesture("right square bracket", rightsquarebracket3),
    new Gesture("delete", delete1),
    new Gesture("delete", delete2),
    new Gesture("delete", delete3),
    new Gesture("star", star),
    new Gesture("star", star2),
    new Gesture("star", star3),
  ];

  const templates_5 = [
    new Gesture("triangle", triangle),
    new Gesture("triangle", triangle2),
    new Gesture("triangle", triangle3),
    new Gesture("triangle", triangle4),
    new Gesture("triangle", triangle5),
    new Gesture("rectangle", rectangle),
    new Gesture("rectangle", rectangle2),
    new Gesture("rectangle", rectangle3),
    new Gesture("rectangle", rectangle4),
    new Gesture("rectangle", rectangle5),
    new Gesture("circle", circle),
    new Gesture("circle", circle2),
    new Gesture("circle", circle3),
    new Gesture("circle", circle4),
    new Gesture("circle", circle5),
    new Gesture("check", check),
    new Gesture("check", check2),
    new Gesture("check", check3),
    new Gesture("check", check4),
    new Gesture("check", check5),
    new Gesture("x", x),
    new Gesture("x", x2),
    new Gesture("x", x3),
    new Gesture("x", x4),
    new Gesture("x", x5),
    new Gesture("caret", caret),
    new Gesture("caret", caret2),
    new Gesture("caret", caret3),
    new Gesture("caret", caret4),
    new Gesture("caret", caret5),
    new Gesture("zig-zag", zigzag),
    new Gesture("zig-zag", zigzag2),
    new Gesture("zig-zag", zigzag3),
    new Gesture("zig-zag", zigzag4),
    new Gesture("zig-zag", zigzag5),
    new Gesture("arrow", arrow),
    new Gesture("arrow", arrow2),
    new Gesture("arrow", arrow3),
    new Gesture("arrow", arrow4),
    new Gesture("arrow", arrow5),
    new Gesture("left square bracket", leftsquarebracket),
    new Gesture("left square bracket", leftsquarebracket2),
    new Gesture("left square bracket", leftsquarebracket3),
    new Gesture("left square bracket", leftsquarebracket4),
    new Gesture("left square bracket", leftsquarebracket5),
    new Gesture("right square bracket", rightsquarebracket),
    new Gesture("right square bracket", rightsquarebracket2),
    new Gesture("right square bracket", rightsquarebracket3),
    new Gesture("right square bracket", rightsquarebracket4),
    new Gesture("right square bracket", rightsquarebracket5),
    new Gesture("delete", delete1),
    new Gesture("delete", delete2),
    new Gesture("delete", delete3),
    new Gesture("delete", delete4),
    new Gesture("delete", delete5),
    new Gesture("star", star),
    new Gesture("star", star2),
    new Gesture("star", star3),
    new Gesture("star", star4),
    new Gesture("star", star5),
  ];

  ////////////
  // STEP 1 //
  ////////////
  function resample(points, n) {
    var I = pathLength(points) / (n - 1);
    var D = 0.0;
    var newpoints = new Array(points[0]);
    for (var i = 1; i < points.length; i++) {
      var d = distance(points[i - 1], points[i]);
      if (D + d >= I) {
        var qx =
          points[i - 1].X + ((I - D) / d) * (points[i].X - points[i - 1].X);
        var qy =
          points[i - 1].Y + ((I - D) / d) * (points[i].Y - points[i - 1].Y);
        var q = new Point(qx, qy);
        newpoints[newpoints.length] = q;
        points.splice(i, 0, q);
        D = 0.0;
      } else D += d;
    }
    if (newpoints.length == n - 1) {
      newpoints[newpoints.length] = new Point(
        points[points.length - 1].X,
        points[points.length - 1].Y
      );
    }

    return newpoints;
  }

  function pathLength(points) {
    var d = 0.0;
    for (var i = 1; i < points.length; i++)
      d += distance(points[i - 1], points[i]);
    return d;
  }

  function distance(p1, p2) {
    var dx = p2.X - p1.X;
    var dy = p2.Y - p1.Y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  ////////////
  // STEP 2 //
  ////////////
  function vectorize(points, oSensitive) {
    var centroid = centroidOf(points);

    points = translate(points, centroid);

    var indicativeAngle = Math.atan2(points[0].Y, points[0].X);

    var delta = 0;
    var vector = [];
    if (oSensitive) {
      var baseOrientation =
        (Math.PI / 4) *
        Math.floor((indicativeAngle + Math.PI / 8) / (Math.PI / 4));
      delta = baseOrientation - indicativeAngle;
    } else {
      delta = -indicativeAngle;
    }
    var sum = 0;
    for (let i = 0; i < points.length; i++) {
      var newX = points[i].X * Math.cos(delta) - points[i].Y * Math.sin(delta);
      var newY = points[i].Y * Math.cos(delta) + points[i].X * Math.sin(delta);

      vector.push(newX);
      vector.push(newY);
      sum = sum + newX * newX + newY * newY;
    }
    var magnitude = Math.sqrt(sum);

    for (let i = 0; i < vector.length; i++) {
      vector[i] = vector[i] / magnitude;
    }

    return vector;
  }

  function centroidOf(points) {
    var x = 0.0,
      y = 0.0;
    for (var i = 0; i < points.length; i++) {
      x += points[i].X;
      y += points[i].Y;
    }
    x = x / points.length;
    y = y / points.length;
    return new Point(x, y);
  }

  function translate(points, pt) {
    var c = centroidOf(points);
    var newpoints = new Array();
    for (var i = 0; i < points.length; i++) {
      var qx = points[i].X + pt.X - c.X;
      var qy = points[i].Y + pt.Y - c.Y;
      newpoints[newpoints.length] = new Point(qx, qy);
    }
    return newpoints;
  }

  ////////////
  // STEP 3 //
  ////////////
  function recognize(vector, templates) {
    var maxScore = 0;
    var score = 0;
    var match = null;
    for (let i = 0; i < templates.length; i++) {
      var distance = optimalCosineDistance(templates[i].vector, vector);
      score = 1 / distance;

      if (score > maxScore) {
        maxScore = score;
        match = templates[i].Name;
      }
    }
    score = 1 - score / 100;
    score = score.toFixed(2);

    return { match, score };
  }

  function optimalCosineDistance(v1, v2) {
    // for Protractor
    var a = 0.0;
    var b = 0.0;
    for (var i = 0; i < v1.length; i = i + 2) {
      a += v1[i] * v2[i] + v1[i + 1] * v2[i + 1];
      b += v1[i] * v2[i + 1] - v1[i + 1] * v2[i];
    }
    var angle = Math.atan(b / a);
    return Math.acos(a * Math.cos(angle) + b * Math.sin(angle));
  }

  ///////////////////////////
  // DRAWING FUNCTIONALITY //
  ///////////////////////////
  function startDrawing(e) {
    clearCanvas();
    isDrawing = true;
    pointsList = []; // Start with an empty list for new drawing
    draw(e);
  }

  function stopDrawing() {
    isDrawing = false;
    context.beginPath();
  }

  function draw(e) {
    if (!isDrawing) return;

    const x = e.offsetX;
    const y = e.offsetY;

    context.lineWidth = 2;
    context.lineCap = "round";
    context.strokeStyle = "#000";

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);

    // Create a Point object and store it in the list
    const point = new Point(x, y);
    pointsList.push(point);
  }

  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const messageContainer = document.getElementById("results");
    messageContainer.textContent = "";
  }

  ///////////////////////
  // RECOGNIZING HERE //
  /////////////////////
  function recognizeGesture() {
    pointsList = resample(pointsList, numPoints);
    pointsList = vectorize(pointsList, false);
    var result = recognize(pointsList, templates_5);
    const messageContainer = document.getElementById("results");

    // console.log(pointsList);
    messageContainer.textContent = result.match + " " + result.score;

    messageContainer.style.color = "green";
  }

  /////////////////////////////
  // CREATE/SAVE NEW GESTURE //
  /////////////////////////////
  function createTemplate() {
    // Get the gesture name from the input field
    const gestureNameInput = document.getElementById("gestureNameInput");
    const gestureName = gestureNameInput.value.trim();

    // Check if the gesture name is empty
    if (gestureName === "") {
      alert("Please enter a gesture name.");
      clearCanvas();
      gestureNameInput.value = "";
      pointsList = [];
      return;
    }

    // Check if there are points to save
    if (pointsList.length === 0) {
      alert("Please draw a gesture before creating it.");
      clearCanvas();
      gestureNameInput.value = "";
      pointsList = [];
      return;
    }

    const nameAsString = gestureName;

    // Check if a template with inputted name already exists
    for (let i = 0; i < templates_5.length; i++) {
      if (templates_5[i].Name == nameAsString) {
        alert("Already have that. Do something new.");
        clearCanvas();
        gestureNameInput.value = "";
        pointsList = [];
        return;
      }
    }

    // Create a new array named by the gesture name and save the points
    window[gestureName] = pointsList.slice(); // Save a copy of pointsList to the named array
    const newGesture = new Gesture(nameAsString, window[gestureName]);

    clearCanvas();
    gestureNameInput.value = "";
    pointsList = [];
    alert(`Gesture "${gestureName}" created successfully.`);

    templates_5.push(newGesture);
    return;
  }

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mousemove", draw);

  document
    .getElementById("createGesture")
    .addEventListener("click", createTemplate);
  document.getElementById("clearCanvas").addEventListener("click", clearCanvas);
  document
    .getElementById("recognizeGesture")
    .addEventListener("click", recognizeGesture);
});
