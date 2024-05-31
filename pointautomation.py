class Point:
    def __init__(self, x, y):
        self.X = x
        self.Y = y

def convert_points_to_js_array(points, array_name):
    js_array = "const {} = new Array(\n".format(array_name)
    for point in points:
        js_array += "  new Point({}, {}),\n".format(point.X, point.Y)
    js_array += ");\n"
    return js_array

def write_to_js_file(array_name, js_array):
    with open("{}.js".format(array_name), "w") as js_file:
        js_file.write("function Point(x, y) {\n")
        js_file.write("  this.X = x;\n")
        js_file.write("  this.Y = y;\n}\n\n")
        js_file.write(js_array)
        js_file.write("\nexport {{ {} }};".format(array_name))

def read_points_from_file(file_name):
    points = []
    with open(file_name, "r") as file:
        lines = file.readlines()
        for line in lines:
            if "Point" in line:
                x_value = float(line.split("X:")[1].split(",")[0].strip())
                y_value = float(line.split("Y:")[1].strip(" }\n"))
                points.append(Point(x_value, y_value))
    return points

if __name__ == "__main__":
    file_name = input("Enter the name of the file containing points: ")
    array_name = input("Enter the name of the array: ")

    points = read_points_from_file(file_name)

    js_array = convert_points_to_js_array(points, array_name)
    write_to_js_file(array_name, js_array)
    print("JavaScript file '{}' has been created.".format(array_name + ".js"))
