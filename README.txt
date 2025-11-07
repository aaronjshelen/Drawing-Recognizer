Project 1 - Exploring $-family recognizers
------------------------------------------
- This project implements three gesture recognizers over a set of predefined templates.
- * Used the original document for reference when creating functions for math calculations that were not in pseudocode (such as distanceAtBestAngle, rotateBy, etc.) *


Usage
-----
Open 'index.html' with live server.
You will be presented with a menu of three different recognizers to choose from.




Files
-----
(Current) Template modules:
  'caret.js'
  'check.js'
  'circle.js'
  'rectangle.js'
  'triangle.js'
  'x.js'
-> These modules store (currently) 3 templates of each gesture type.
-> They are stored in the 'shape_templates' folder.

Styles:
  'indexstyles.css'
  'styles.css'
-> Stored in 'styling' folder

HTML Files:
  '$1.html'
  '1cent.html'
  'protractor.html'
  'index.html'

JS Files:
  'script1.js' -> $1 Family Recognizer script
  'scriptonecent.js' -> 1¢ Recognizer script
  'scriptprotractor.js' -> Protractor script

Others Files:
  'pointautomation.py' -> This is a python automator that helps me create arrays of gestures from points I input from 'pointtoarray.txt'
  'pointtoarray.txt' -> Helper file that 'pointautomation.py' reads in
  'gesture guide.png' -> image of each gesture you can draw




About Predefined Templates
--------------------
- I have created 6 gesture types of templates - triangle, x, rectangle, circle, check, and caret.
- These are the first six templates that are given in the original document: http://depts.washington.edu/acelab/proj/dollar/index.html
- Each template is stored in its only module found in the 'shape_templates' folder.
- I currently have 3 templates of each gesture. I plan to have a total of 5 templates for each one.
- When drawing a gesture on the canvas, make sure to draw it in the direction that is shown in the 'gesture guide.png'. (Ex: draw triangle counterclockwise as shown in the picture)




About Creating Custom Gesture
-----------------------
- I have a working feature that allows the user to enter a custom gesture that can be identified.
- However, it only accepts one gesture per name, meaning there can't be duplicates. (This can be done with more functions, but I focused more on the algorithms of each recognizer.)
- Example: If I draw a gesture named "fish", it won't allow me to enter another gesture with the name "fish".
- Also, user is unable to enter only a number as the name of the gesture.



Testing
-------
The 'templates_1' array contains one template per symbol.
The 'templates_3' array contains three templates per symbol.
The 'templates_5' array contains five templates per symbol.
- I trained each recognizer with each array to test how accurate their output will be.
- The following is my results that will be formatted like this:
    [drawn gesture]: 1. [what gesture the recognizer predicted] [score] ... 5. [what gesture the recognizer predicted] [score]


$1 Family Recognizer:
--------------------
One template per symbol:
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

Three templates per symbol:
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

Five templates per symbol:
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


1¢ Recognizer:
-------------
One template per symbol:
arrow:                        1. arrow 0.94     | 2. arrow 0.95     | 3. arrow 0.93     | 4. arrow 0.93     | 5. arrow 0.95
caret:                        1. x 0.83         | 2. x 0.95         | 3. x 0.83         | 4. x 0.92         | 5. arrow 0.92 
check:                        1. check 0.06     | 2. check 0.22     | 3. check 0.33     | 4. LSB 0.17       | 5. check 0.7
circle:                       1. rectangle 0.99 | 2. rectangle 0.95 | 3. delete 0.99    | 4. x 0.99         | 5. arrow 0.99 
delete:                       1. x 0.99         | 2. x 0.98         | 3. x 0.99         | 4. x 0.98         | 5. x 0.99 
left square bracket (LSB):    1. LSB 0.88       | 2. LSB 0.89       | 3. caret 0.92     | 4. LSB 0.85       | 5. LSB 0.83 
rectangle:                    1. arrow 0.98     | 2. rectangle 0.96 | 3. rectangle 0.97 | 4. arrow 0.98     | 5. rectangle 0.98 
right square bracket (RSB):   1. LSB 0.78       | 2. LSB 0.82       | 3. LSB 0.9        | 4. RSB 0.72       | 5. LSB 0.91 
star:                         1. star 0.97      | 2. star 0.98      | 3. star 0.99      | 4. star 0.99      | 5. rectangle 0.99 
triangle:                     1. triangle 0.97  | 2. triangle 0.96  | 3. triangle 0.98  | 4. triangle 0.98  | 5. triangle 0.97 
x:                            1. x 0.98         | 2. triangle 0.99  | 3. delete 0.98    | 4. x 0.98         | 5. x 0.98 
zigzag:                       1. zigzag 0.91    | 2. zigzag 0.93    | 3. zigzag 0.83    | 4. LSB 0.97       | 5. LSB 0.94 

Three templates per symbol:
arrow:                        1. arrow 0.92     | 2. arrow 0.92     | 3. delete 0.88    | 4. arrow 0.93     | 5. arrow 0.94
caret:                        1. caret 0.86     | 2. x 0.63         | 3. caret 0.87     | 4. caret 0.89     | 5. caret 0.82 
check:                        1. check 0.36     | 2. check 0.7      | 3. check 0.82     | 4. check 0.05     | 5. check 0.7 
circle:                       1. x 0.98         | 2. triangle 0.95  | 3. triangle 0.98  | 4. star 0.98      | 5. arrow 0.98 
delete:                       1. caret 0.98     | 2. triangle 0.99  | 3. delete 0.84    | 4. delete 0.94    | 5. x 0.95
left square bracket (LSB):    1. LSB 0.64       | 2. LSB 0.78       | 3. LSB 0.84       | 4. LSB 0.7        | 5. LSB 0.47 
rectangle:                    1. rectangle 0.99 | 2. rectangle 0.97 | 3. caret 0.99     | 4. rectangle 0.95 | 5. rectangle 0.97
right square bracket (RSB):   1. LSB 0.72       | 2. LSB 0.7        | 3. LSB 0.82       | 4. LSB 0.79       | 5. LSB 0.79 
star:                         1. star 0.98      | 2. rectangle 0.99 | 3. star 0.99      | 4. star 0.98      | 5. star 0.99 
triangle:                     1. triangle 0.96  | 2. x 0.96         | 3. triangle 0.98  | 4. x 0.99         | 5. triangle 0.98 
x:                            1. x 0.99         | 2. caret 0.98     | 3. x 0.98         | 4. triangle 0.99  | 5. x 0.97 
zigzag:                       1. zigzag 0.90    | 2. zigzag 0.89    | 3. zigzag 0.9     | 4. zigzag 0.95    | 5. zigzag 0.92

Five templates per symbol:
arrow:                        1. arrow 0.83     | 2. delete 0.9     | 3. arrow 0.9      | 4. arrow 0.92     | 5. arrow 0.9
caret:                        1. caret 0.79     | 2. caret 0.75     | 3. caret 0.91     | 4. caret 0.53     | 5. caret 0.81 
check:                        1. check 0.43     | 2. check 0.84     | 3. check 0.35     | 4. check 0.68     | 5. check 0.7 
circle:                       1. triangle 0.96  | 2. triangle 0.98  | 3. check 0.98     | 4. star 0.99      | 5. delete 0.99 
delete:                       1. x 0.98         | 2. x 0.93         | 3. x 0.94         | 4. x 0.98         | 5. x 0.86 
left square bracket (LSB):    1. RSB 0.64       | 2. RSB 0.71       | 3. LSB 0.86       | 4. LSB 0.77       | 5. RSB 0.64 
rectangle:                    1. rectangle 0.98 | 2. rectangle 0.97 | 3. arrow 0.98     | 4. caret 0.97     | 5. rectangle 0.98 
right square bracket (RSB):   1. RSB 0.59       | 2. LSB 0.77       | 3. RSB 0.58       | 4. RSB 0.59       | 5. LSB 0.62 
star:                         1. star 0.94      | 2. star 0.98      | 3. star 0.98      | 4. triangle 0.99  | 5. star 0.94 
triangle:                     1. triangle 0.93  | 2. triangle 0.97  | 3. triangle 0.98  | 4. triangle 0.98  | 5. triangle 0.98 
x:                            1. x 0.99         | 2. x 0.98         | 3. caret 0.99     | 4. x 0.98         | 5. triangle 0.97 
zigzag:                       1. zigzag 0.7     | 2. zigzag 0.88    | 3. zigzag 0.86    | 4. zigzag 0.96    | 5. zigzag 0.91 

Protractor:
----------
One template per symbol:
arrow:                        1. arrow 0.96     | 2. caret 0.97     | 3. caret 0.97     | 4. arrow 0.96     | 5. arrow 0.96
caret:                        1. caret 0.97     | 2. caret 0.97     | 3. caret 0.96     | 4. caret 0.97     | 5. caret 0.96
check:                        1. check 0.97     | 2. caret 0.97     | 3. check 0.97     | 4. check 0.98     | 5. x 0.96 
circle:                       1. triangle 0.97  | 2. triangle 0.98  | 3. circle 0.97    | 4. circle 0.97    | 5. circle 0.98
delete:                       1. delete 0.97    | 2. delete 0.97    | 3. x 0.98         | 4. delete 0.97    | 5. delete 0.97
left square bracket (LSB):    1. LSB 0.97       | 2. LSB 0.98       | 3. LSB 0.98       | 4. LSB 0.97       | 5. LSB 0.98 
rectangle:                    1. rectangle 0.98 | 2. rectangle 0.98 | 3. rectangle 0.97 | 4. rectangle 0.97 | 5. rectangle 0.98
right square bracket (RSB):   1. RSB 0.98       | 2. RSB 0.98       | 3. RSB 0.97       | 4. RSB 0.97       | 5. RSB 0.98
star:                         1. star 0.93      | 2. star 0.93      | 3. star 0.91      | 4. star 0.95      | 5. star 0.93
triangle:                     1. triangle 0.98  | 2. triangle 0.98  | 3. triangle 0.98  | 4. triangle 0.98  | 5. triangle 0.98
x:                            1. delete 0.97    | 2. delete 0.97    | 3. delete 0.97    | 4. delete 0.97    | 5. triangle 0.98
zigzag:                       1. zigzag 0.97    | 2. zigzag 0.96    | 3. zigzag 0.97    | 4. zigzag 0.96    | 5. zigzag 0.96

Three templates per symbol:
arrow:                        1. caret 0.97     | 2. arrow 0.97     | 3. caret 0.97     | 4. arrow 0.97     | 5. arrow 0.97
caret:                        1. caret 0.96     | 2. caret 0.96     | 3. caret 0.96     | 4. caret 0.96     | 5. caret 0.96
check:                        1. caret 0.97     | 2. check 0.97     | 3. check 0.97     | 4. check 0.97     | 5. check 0.97 
circle:                       1. circle 0.97    | 2. circle 0.98    | 3. circle 0.98    | 4. circle 0.98    | 5. circle 0.98 
delete:                       1. delete 0.96    | 2. delete 0.96    | 3. delete 0.96    | 4. delete 0.96    | 5. delete 0.97
left square bracket (LSB):    1. LSB 0.98       | 2. LSB 0.97       | 3. LSB 0.97       | 4. circle 0.98    | 5. LSB 0.98
rectangle:                    1. rectangle 0.98 | 2. rectangle 0.98 | 3. rectangle 0.97 | 4. rectangle 0.98 | 5. rectangle 0.97 
right square bracket (RSB):   1. RSB 0.98       | 2. RSB 0.98       | 3. RSB 0.97       | 4. RSB 0.98       | 5. RSB 0.97 
star:                         1. star 0.93      | 2. caret 0.97     | 3. star 0.96      | 4. caret 0.97     | 5. x 0.97 
triangle:                     1. triangle 0.97  | 2. triangle 0.97  | 3. triangle 0.97  | 4. triangle 0.97  | 5. triangle 0.97
x:                            1. x 0.97         | 2. x 0.97         | 3. x 0.96         | 4. x 0.96         | 5. x 0.97
zigzag:                       1. zigzag 0.96    | 2. zigzag 0.96    | 3. zigzag 0.96    | 4. caret 0.97     | 5. zigzag 0.97

Five templates per symbol:
arrow:                        1. arrow 0.96     | 2. arrow 0.97     | 3. arrow 0.97     | 4. arrow 0.97     | 5. arrow 0.97
caret:                        1. caret 0.96     | 2. caret 0.96     | 3. caret 0.96     | 4. caret 0.96     | 5. caret 0.96
check:                        1. caret 0.97     | 2. check 0.97     | 3. check 0.97     | 4. caret 0.96     | 5. check 0.97
circle:                       1. triangle 0.97  | 2. circle 0.97    | 3. circle 0.97    | 4. circle 0.98    | 5. circle 0.98
delete:                       1. delete 0.97    | 2. delete 0.96    | 3. delete 0.96    | 4. delete 0.96    | 5. delete 0.96
left square bracket (LSB):    1. LSB 0.97       | 2. LSB 0.98       | 3. LSB 0.97       | 4. LSB 0.97       | 5. RSB 0.97 
rectangle:                    1. rectangle 0.98 | 2. rectangle 0.98 | 3. rectangle 0.98 | 4. rectangle 0.97 | 5. rectangle 0.98
right square bracket (RSB):   1. RSB 0.97       | 2. RSB 0.97       | 3. RSB 0.97       | 4. RSB 0.97       | 5. RSB 0.97
star:                         1. star 0.91      | 2. star 0.92      | 3. star 0.9       | 4. star 0.89      | 5. star 0.89
triangle:                     1. triangle 0.97  | 2. triangle 0.97  | 3. triangle 0.97  | 4. triangle 0.97  | 5. triangle 0.97
x:                            1. x 0.96         | 2. x 0.96         | 3. x 0.96         | 4. x 0.96         | 5. x 0.96
zigzag:                       1. zigzag 0.96    | 2. zigzag 0.96    | 3. zigzag 0.96    | 4. zigzag 0.96    | 5. zigzag 0.97





What I do not have/could not do/others:
---------------------------------------
- I did not enable the user to submit more than one custom gesture of the same name. I currently have it to where the user can only create one.
- 1¢ is most likely not implemented 100% correctly. It recognizes gestures inconsistently, and can never recognize a circle. I could not figure this out.
- Protractor's score is most likely calculated incorrectly, but it does correctly predict what gesture I am drawing. Some shapes output the same exact score 5x in a row.
- Gestures had to be drawn in a certain direction to be correct.
  - Ex: drawing a left square bracket upside-down will result in a right square bracket
  - Ex: drawing a triangle in a clockwise direction will make the recognizer think its a caret
  - This happens in the researchers' implementations on their website demo.
