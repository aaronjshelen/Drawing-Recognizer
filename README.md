# Project 1 – Exploring $-Family Recognizers

## Overview
This project implements three gesture recognizers over a set of predefined templates.

The implementation was guided by the original $1 family of gesture recognizers paper. Some mathematical functions such as `distanceAtBestAngle`, `rotateBy`, and related methods were implemented from scratch based on references in the original document.

---

## Usage
Open `index.html` using a live server. You will be presented with a menu containing three different recognizers to choose from.

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
- Each gesture template follows the original $1 recognizer dataset: [http://depts.washington.edu/acelab/proj/dollar/index.html](http://depts.washington.edu/acelab/proj/dollar/index.html)
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

Each recognizer was trained and tested with these template sets. The results are formatted as follows:

```
[drawn gesture]: 1. [predicted gesture] [score] ... 5. [predicted gesture] [score]
```

---

## Results

### $1 Family Recognizer

#### One template per symbol
```
arrow:                        1. caret 0.76     | 2. caret 0.7      | 3. caret 0.75     | 4. arrow 0.76     | 5. caret 0.7
caret:                        1. caret 0.73     | 2. caret 0.79     | 3.caret 0.68      | 4. 0.71           | 5. caret 0.72
check:                        1. check 0.92     | 2. check 0.99     | 3. check 0.95     | 4. 0.97           | 5. check 0.93
circle:                       1. circle 0.91    | 2. circle 0.91    | 3. circle 0.9     | 4. circle 0.92    | 5. circle 0.89
delete:                       1. delete 0.66    | 2. delete 0.68    | 3. delete 0.7     | 4. delete 0.66    | 5. delete 0.67
left square bracket (LSB):    1. LSB 0.88       | 2. LSB 0.91       | 3. LSB 0.88       | 4. LSB 0.9        | 5. LSB 0.86
rectangle:                    1. rectangle 0.94 | 2. rectangle 0.91 | 3. rectangle 0.88 | 4. rectangle 0.89 | 5. rectangle 0.92 
right square bracket (RSB):   1. RSB 0.9        | 2. RSB 0.87       | 3. RSB 0.87       | 4. RSB 0.88       | 5. caret 0.85 
star:                         1. star 0.81      | 2. star 0.76      | 3. star 0.68      | 4. star 0.76      | 5. star 0.78 
triangle:                     1. triangle 0.94  | 2. triangle 0.93  | 3. triangle 0.91  | 4. triangle 0.92  | 5. triangle 0.94 
x:                            1. triangle 0.67  | 2. triangle 0.68  | 3. triangle 0.62  | 4. triangle 0.71  | 5. triangle 0.66
zigzag:                       1. zigzag 0.81    | 2. zigzag 0.83    | 3. zigzag 0.8     | 4. zigzag 0.84    | 5. RSB 0.77 
```

#### Three templates per symbol
```
arrow:                        1. arrow 0.8      | 2. arrow 0.83     | 3. arrow 0.92     | 4. arrow 0.9      | 5. arrow 0.87
caret:                        1. caret 0.95     | 2. caret 0.94     | 3. caret 0.96     | 4. caret 0.93     | 5. caret 0.91 
check:                        1. check 0.99     | 2. LSB 0.99       | 3. LSB 0.94       | 4. check 0.99     | 5. check 0.99 
circle:                       1. circle 0.92    | 2. circle 0.94    | 3. circle 0.96    | 4. circle 0.95    | 5. circle 0.89 
delete:                       1. delete 0.69    | 2. delete 0.7     | 3. delete 0.69    | 4. delete 0.65    | 5. delete 0.66 
left square bracket (LSB):    1. LSB 0.88       | 2. LSB 0.89       | 3. LSB 0.87       | 4. rectangle 0.89 | 5. LSB 0.89 
rectangle:                    1. rectangle 0.91 | 2. rectangle 0.92 | 3. rectangle 0.85 | 4. rectangle 0.94 | 5. rectangle 0.91 
right square bracket (RSB):   1. RSB 0.9        | 2. RSB 0.89       | 3. RSB 0.88       | 4. RSB 0.88       | 5. RSB 0.91 
star:                         1. star 0.78      | 2. star 0.74      | 3. star 0.78      | 4. star 0.81      | 5. star 0.76 
triangle:                     1. triangle 0.95  | 2. triangle 0.93  | 3. triangle 0.92  | 4. triangle 0.92  | 5. triangle 0.94 
x:                            1. x 0.77         | 2. x 0.76         | 3. x 0.75         | 4. x 0.71         | 5. x 0.74 
zigzag:                       1. RSB 0.65       | 2. zigzag 0.78    | 3. zigzag 0.76    | 4. zigzag 0.82    | 5. zigzag 0.76 
```

#### Five templates per symbol
```
arrow:                        1. arrow 0.88     | 2. arrow 0.84     | 3. arrow 0.88     | 4. arrow 0.83     | 5. arrow 0.91
caret:                        1. caret 0.98     | 2. caret 0.96     | 3. caret 0.91     | 4. caret 0.94     | 5. caret 0.97
check:                        1. check 0.99     | 2. LSB 0.95       | 3. check 0.96     | 4. check 0.99     | 5. check 0.96 
circle:                       1. circle 0.91    | 2. circle 0.93    | 3. circle 0.92    | 4. circle 0.93    | 5. circle 0.94
delete:                       1. delete 0.72    | 2. delete 0.74    | 3. delete 0.75    | 4. delete 0.76    | 5. delete 0.84 
left square bracket (LSB):    1. LSB 0.9        | 2. LSB 0.9        | 3. LSB 0.93       | 4. rectangle 0.88 | 5. LSB 0.95  
rectangle:                    1. rectangle 0.94 | 2. rectangle 0.89 | 3. rectangle 0.9  | 4. rectangle 0.94 | 5. rectangle 0.85 
right square bracket (RSB):   1. RSB 0.94       | 2. RSB 0.93       | 3. RSB 0.91       | 4. RSB 0.89       | 5. RSB 0.89 
star:                         1. star 0.86      | 2. star 0.85      | 3. star 0.81      | 4. star 0.71      | 5. star 0.79 
triangle:                     1. triangle 0.92  | 2. triangle 0.8   | 3. triangle 0.91  | 4. triangle 0.95  | 5. triangle 0.95 
x:                            1. x 0.78         | 2. x 0.76         | 3. x 0.76         | 4. x 0.79         | 5. x 0.8 
zigzag:                       1. zigzag 0.89    | 2. zigzag 0.78    | 3. zigzag 0.79    | 4. zigzag 0.82    | 5. zigzag 0.74  
```

(continues with 1¢ Recognizer and Protractor full results—omitted here for brevity in code block)
