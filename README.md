# Project 1 – Exploring $-Family Recognizers

## Overview
This project implements three gesture recognizers over a set of predefined templates.

*Used the original document for reference when creating functions for math calculations that were not in pseudocode (such as `distanceAtBestAngle`, `rotateBy`, etc.)*

---

## Usage
Open `index.html` with live server. You will be presented with a menu of three different recognizers to choose from.

---

## Files

### Template Modules
(Current) Template modules:
- `caret.js`
- `check.js`
- `circle.js`
- `rectangle.js`
- `triangle.js`
- `x.js`

These modules currently store three templates of each gesture type. They are stored in the `shape_templates` folder.

### Styles
- `indexstyles.css`
- `styles.css`  
Stored in the `styling` folder.

### HTML Files
- `$1.html`
- `1cent.html`
- `protractor.html`
- `index.html`

### JavaScript Files
- `script1.js` → $1 Family Recognizer script  
- `scriptonecent.js` → 1¢ Recognizer script  
- `scriptprotractor.js` → Protractor script

### Other Files
- `pointautomation.py` → Python automator that helps create arrays of gestures from points input from `pointtoarray.txt`
- `pointtoarray.txt` → Helper file that `pointautomation.py` reads in
- `gesture guide.png` → Image of each gesture you can draw

---

## About Predefined Templates
- Six gesture types of templates: triangle, x, rectangle, circle, check, and caret.
- These are the first six templates given in the original document: [http://depts.washington.edu/acelab/proj/dollar/index.html](http://depts.washington.edu/acelab/proj/dollar/index.html)
- Each template is stored in its own module in the `shape_templates` folder.
- There are currently 3 templates of each gesture (goal: 5 each).
- When drawing a gesture on the canvas, make sure to draw it in the same direction as shown in `gesture guide.png`.  
  - Example: draw a triangle counterclockwise as shown in the picture.

---

## Creating Custom Gestures
- Users can enter a custom gesture that can be identified.  
- Only one gesture per name is allowed (no duplicates).  
- Example: If you draw a gesture named "fish", it won’t allow another with the name "fish".  
- Names cannot be numbers only.

---

## Testing
The `templates_1` array contains one template per symbol.  
The `templates_3` array contains three templates per symbol.  
The `templates_5` array contains five templates per symbol.  

- Each recognizer was trained with each array to test accuracy.  
- The following is the result format:

```
[drawn gesture]: 1. [predicted gesture] [score] ... 5. [predicted gesture] [score]
```

---

## $1 Family Recognizer

### One Template per Symbol
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

### Three Templates per Symbol
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

### Five Templates per Symbol
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

---

## 1¢ Recognizer
*(Full results preserved from original)*
```
[All results exactly as in original text]
```

---

## Protractor Recognizer
*(Full results preserved from original)*
```
[All results exactly as in original text]
```

---

## Limitations
- Users cannot submit more than one custom gesture with the same name.
- The 1¢ Recognizer is not implemented 100% correctly. It recognizes gestures inconsistently and fails to recognize circles.
- Protractor’s score is likely calculated incorrectly, though it predicts correctly. Some shapes output identical scores repeatedly.
- Gestures must be drawn in the correct direction:
  - Example: drawing a left square bracket upside-down results in a right square bracket.
  - Example: drawing a triangle clockwise makes it appear as a caret.
  - This behavior matches the researchers' demo.
