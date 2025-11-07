# Project 1 – Exploring $-Family Recognizers

## Overview
This project implements three gesture recognizers over a set of predefined templates.  

The implementation was guided by the original $1 family of gesture recognizers paper. Some mathematical functions such as `distanceAtBestAngle`, `rotateBy`, and related methods were implemented from scratch based on references in the original document.

---

## Usage
1. Open `index.html` using a live server.  
2. You will be presented with a menu containing three different recognizers to choose from:
   - $1 Recognizer  
   - 1¢ Recognizer  
   - Protractor Recognizer  

---

## File Structure

### Template Modules
Located in the `shape_templates` folder:
- `caret.js`  
- `check.js`  
- `circle.js`  
- `rectangle.js`  
- `triangle.js`  
- `x.js`  

Each module currently contains 3 templates per gesture type (with plans to expand to 5 templates per type).

---

### Styles
Stored in the `styling` folder:
- `indexstyles.css`  
- `styles.css`  

---

### HTML Files
- `$1.html`  
- `1cent.html`  
- `protractor.html`  
- `index.html`  

---

### JavaScript Files
- `script1.js` – $1 Family Recognizer script  
- `scriptonecent.js` – 1¢ Recognizer script  
- `scriptprotractor.js` – Protractor Recognizer script  

---

### Other Files
- `pointautomation.py` – Python script that automates the creation of gesture arrays by reading input points.  
- `pointtoarray.txt` – Helper file read by `pointautomation.py`.  
- `gesture guide.png` – Image showing correct drawing directions for each gesture type.  

---

## About Predefined Templates
- Six gesture types are currently implemented: **triangle**, **x**, **rectangle**, **circle**, **check**, and **caret**.  
- Each gesture template follows the original $1 recognizer dataset:  
  [http://depts.washington.edu/acelab/proj/dollar/index.html](http://depts.washington.edu/acelab/proj/dollar/index.html)  
- Templates are stored in individual modules under `shape_templates`.  
- Each gesture has 3 templates so far, with a goal of reaching 5 per gesture type.  
- When drawing gestures on the canvas, the direction of drawing must match that shown in `gesture guide.png`.  
  - Example: Draw the triangle counterclockwise as indicated.  

---

## Creating Custom Gestures
- Users can create and name **custom gestures** for recognition.  
- Only one gesture per unique name is currently supported (no duplicates allowed).  
- Gesture names cannot be numeric-only.  
- Example: You can add a gesture called `fish`, but you cannot create another gesture with the same name, or one named just `123`.

---

## Testing Setup
Three template configurations were used during testing:
- `templates_1` → One template per symbol.  
- `templates_3` → Three templates per symbol.  
- `templates_5` → Five templates per symbol.  

Each recognizer was trained and tested with these template sets.  
Results are formatted as follows:
```
[drawn gesture]: 1. [predicted gesture] [score] ... 5. [predicted gesture] [score]
```

---

## Results

### $1 Family Recognizer
#### One Template per Symbol
(See original listing above; full table included for reference.)

```
arrow:     1. caret 0.76 | 2. caret 0.7 | 3. caret 0.75 | 4. arrow 0.76 | 5. caret 0.7
caret:     1. caret 0.73 | 2. caret 0.79 | 3. caret 0.68 | 4. 0.71 | 5. caret 0.72
...
```

#### Three Templates per Symbol
```
arrow:     1. arrow 0.8 | 2. arrow 0.83 | 3. arrow 0.92 | 4. arrow 0.9 | 5. arrow 0.87
caret:     1. caret 0.95 | 2. caret 0.94 | 3. caret 0.96 | 4. caret 0.93 | 5. caret 0.91
...
```

#### Five Templates per Symbol
```
arrow:     1. arrow 0.88 | 2. arrow 0.84 | 3. arrow 0.88 | 4. arrow 0.83 | 5. arrow 0.91
caret:     1. caret 0.98 | 2. caret 0.96 | 3. caret 0.91 | 4. caret 0.94 | 5. caret 0.97
...
```

---

### 1¢ Recognizer
#### One Template per Symbol
```
arrow:     1. arrow 0.94 | 2. arrow 0.95 | 3. arrow 0.93 | 4. arrow 0.93 | 5. arrow 0.95
caret:     1. x 0.83 | 2. x 0.95 | 3. x 0.83 | 4. x 0.92 | 5. arrow 0.92
...
```

#### Three Templates per Symbol
```
arrow:     1. arrow 0.92 | 2. arrow 0.92 | 3. delete 0.88 | 4. arrow 0.93 | 5. arrow 0.94
caret:     1. caret 0.86 | 2. x 0.63 | 3. caret 0.87 | 4. caret 0.89 | 5. caret 0.82
...
```

#### Five Templates per Symbol
```
arrow:     1. arrow 0.83 | 2. delete 0.9 | 3. arrow 0.9 | 4. arrow 0.92 | 5. arrow 0.9
caret:     1. caret 0.79 | 2. caret 0.75 | 3. caret 0.91 | 4. caret 0.53 | 5. caret 0.81
...
```

---

### Protractor Recognizer
#### One Template per Symbol
```
arrow:     1. arrow 0.96 | 2. caret 0.97 | 3. caret 0.97 | 4. arrow 0.96 | 5. arrow 0.96
caret:     1. caret 0.97 | 2. caret 0.97 | 3. caret 0.96 | 4. caret 0.97 | 5. caret 0.96
...
```

#### Three Templates per Symbol
```
arrow:     1. caret 0.97 | 2. arrow 0.97 | 3. caret 0.97 | 4. arrow 0.97 | 5. arrow 0.97
caret:     1. caret 0.96 | 2. caret 0.96 | 3. caret 0.96 | 4. caret 0.96 | 5. caret 0.96
...
```

#### Five Templates per Symbol
```
arrow:     1. arrow 0.96 | 2. arrow 0.97 | 3. arrow 0.97 | 4. arrow 0.97 | 5. arrow 0.97
caret:     1. caret 0.96 | 2. caret 0.96 | 3. caret 0.96 | 4. caret 0.96 | 5. caret 0.96
...
```

---

## Known Issues and Limitations
- Users cannot currently add multiple custom gestures with the same name.  
- The **1¢ recognizer** is likely **not fully implemented correctly**:
  - It recognizes gestures inconsistently.
  - It fails to recognize circles.
- The **Protractor recognizer’s score** may be incorrectly computed, though it correctly predicts gesture types.
  - Some gestures repeatedly output the exact same score.
- **Gesture direction matters**:
  - Drawing a left square bracket upside-down is recognized as a right square bracket.  
  - Drawing a triangle clockwise can be recognized as a caret.  
  - This is consistent with the original implementations found in the researchers’ online demos.

---

## References
- Original $1 Recognizer Research: [University of Washington - $1 Recognizer](http://depts.washington.edu/acelab/proj/dollar/index.html)
