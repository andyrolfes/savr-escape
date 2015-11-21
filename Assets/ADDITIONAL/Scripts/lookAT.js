// Drag another object onto it to make the camera look at it.
var target : Transform; 

// Rotate the camera every frame so it keeps looking at the target 
function Update() {
    transform.LookAt(target);
}