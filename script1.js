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
  let pointsList = []; // Array to store (x, y) points

  /////////////////
  // POINT CLASS //
  /////////////////
  function Point(x, y) {
    this.X = x;
    this.Y = y;
  }
  /////////////////////
  // RECTANGLE CLASS //
  /////////////////////
  function Rectangle(x, y, width, height) {
    this.X = x;
    this.Y = y;
    this.Width = width;
    this.Height = height;
  }
  ///////////////
  // CONSTANTS //
  ///////////////
  const numPoints = 64;
  const squareSize = 250.0;
  const origin = new Point(0, 0);
  const angleRange = (45.0 * Math.PI) / 180.0;
  const anglePrecision = (2.0 * Math.PI) / 180.0;
  const phi = 0.5 * (-1.0 + Math.sqrt(5.0));

  ///////////////////
  // GESTURE CLASS //
  ///////////////////
  function Gesture(name, points) {
    this.Name = name;
    this.Points = resample(points, numPoints);
    var radians = indicativeAngle(this.Points);
    this.Points = rotateBy(this.Points, -radians);
    this.Points = scaleTo(this.Points, squareSize);
    this.Points = translateTo(this.Points, origin);
  }

  ///////////////
  // TEMPLATES // Loaded in through modules
  ///////////////
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

  ////////////////////////
  // RECOGNIZE FUNCTION //
  ////////////////////////
  function recognize(points, templates) {
    let b = +Infinity;
    let TPrime = null;
    templates.forEach((template) => {
      let d = distanceAtBestAngle(
        points,
        template,
        -angleRange,
        angleRange,
        anglePrecision
      );
      if (d < b) {
        b = d;
        TPrime = template;
      }
    });
    let score =
      1 + (1 - b) / (0.5 * Math.sqrt(Math.pow(250, 2) + Math.pow(250, 2)));
    score = Number(score.toFixed(2));
    return { TPrime, score };
  }

  /////////////////////////////
  // PREPROCESSING FUNCTIONS //
  /////////////////////////////
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
        newpoints.push(q);
        points.splice(i, 0, q);
        D = 0.0;
      } else D += d;
    }
    if (newpoints.length == n - 1)
      // sometimes rounding error occurs
      newpoints[newpoints.length] = new Point(
        points[points.length - 1].X,
        points[points.length - 1].Y
      );

    return newpoints;
  }

  function indicativeAngle(points) {
    var c = centroid(points);
    return Math.atan2(c.Y - points[0].Y, c.X - points[0].X);
  }

  function rotateBy(points, radians) {
    var c = centroid(points);

    var newpoints = new Array();
    for (var i = 0; i < points.length; i++) {
      var qx =
        (points[i].X - c.X) * Math.cos(radians) -
        (points[i].Y - c.Y) * Math.sin(radians) +
        c.X;
      var qy =
        (points[i].X - c.X) * Math.sin(radians) +
        (points[i].Y - c.Y) * Math.cos(radians) +
        c.Y;
      newpoints[newpoints.length] = new Point(qx, qy);
    }
    return newpoints;
  }

  function scaleTo(points, size) {
    var B = boundingBox(points);
    var newpoints = new Array();
    for (var i = 0; i < points.length; i++) {
      var qx = points[i].X * (size / B.Width);
      var qy = points[i].Y * (size / B.Height);
      newpoints[newpoints.length] = new Point(qx, qy);
    }
    return newpoints;
  }

  function translateTo(points, pt) {
    var c = centroid(points);
    var newpoints = new Array();
    for (var i = 0; i < points.length; i++) {
      var qx = points[i].X + pt.X - c.X;
      var qy = points[i].Y + pt.Y - c.Y;
      newpoints[newpoints.length] = new Point(qx, qy);
    }
    return newpoints;
  }

  function distanceAtBestAngle(points, T, a, b, threshold) {
    var x1 = phi * a + (1.0 - phi) * b;
    var f1 = distanceAtAngle(points, T, x1);
    var x2 = (1.0 - phi) * a + phi * b;
    var f2 = distanceAtAngle(points, T, x2);
    while (Math.abs(b - a) > threshold) {
      if (f1 < f2) {
        b = x2;
        x2 = x1;
        f2 = f1;
        x1 = phi * a + (1.0 - phi) * b;
        f1 = distanceAtAngle(points, T, x1);
      } else {
        a = x1;
        x1 = x2;
        f1 = f2;
        x2 = (1.0 - phi) * a + phi * b;
        f2 = distanceAtAngle(points, T, x2);
      }
    }
    return Math.min(f1, f2);
  }

  function distanceAtAngle(points, T, radians) {
    var newpoints = rotateBy(points, radians);
    return pathDistance(newpoints, T.Points);
  }

  function centroid(points) {
    var x = 0.0,
      y = 0.0;
    for (var i = 0; i < points.length; i++) {
      x = x + points[i].X;
      y = y + points[i].Y;
    }
    x = x / points.length;
    y = y / points.length;
    return new Point(x, y);
  }

  function boundingBox(points) {
    var minX = +Infinity,
      maxX = -Infinity,
      minY = +Infinity,
      maxY = -Infinity;
    for (var i = 0; i < points.length; i++) {
      minX = Math.min(minX, points[i].X);
      minY = Math.min(minY, points[i].Y);
      maxX = Math.max(maxX, points[i].X);
      maxY = Math.max(maxY, points[i].Y);
    }
    return new Rectangle(minX, minY, maxX - minX, maxY - minY);
  }

  function pathDistance(pts1, pts2) {
    var d = 0.0;
    if (pts1.length != pts2.length) {
      console.log("Size mismatch");
      console.log("pts1: " + pts1.length);
      console.log("pts2: " + pts2.length);
    }
    for (
      var i = 0;
      i < pts1.length;
      i++ // assumes pts1.length == pts2.length
    )
      d += distance(pts1[i], pts2[i]);
    return d / pts1.length;
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

    const point = new Point(x, y);
    pointsList.push(point);
  }

  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const messageContainer = document.getElementById("results");
    messageContainer.textContent = "";
  }

  function recognizeGesture() {
    console.log(pointsList);
    pointsList = resample(pointsList, numPoints);
    var radians = indicativeAngle(pointsList);
    pointsList = rotateBy(pointsList, -radians);
    pointsList = scaleTo(pointsList, squareSize);
    pointsList = translateTo(pointsList, origin);

    var result = recognize(pointsList, templates_5);
    const messageContainer = document.getElementById("results");

    // console.log(pointsList);
    messageContainer.textContent = result.TPrime.Name + " " + result.score;
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
        alert("Planning to add multiple templates of same name.");
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
