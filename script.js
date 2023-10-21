// Check if the user is on a mobile device
if (/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{
    // Add a class to body to indicate mobile devices
    document.body.classList.add('mobile-device');
} else {
    // Add a class to body to indicate desktop devices
    document.body.classList.add('desktop-device');
}

// Check if the device is in portrait or landscape orientation
function checkOrientation()
{
    // Portrait
    if (window.matchMedia("(orientation: portrait)").matches)
    {
          // Add a class to the body to indicate portrait orientation
          document.body.classList.add('portrait-orientation');
          // Remove the landscape class if it was added
          document.body.classList.remove('landscape-orientation');
    } 
    
    // Landscape
    else if (window.matchMedia("(orientation: landscape)").matches)
    {
          // Add a class to the body to indicate landscape orientation
          document.body.classList.add('landscape-orientation');
          // Remove the portrait class if it was added
          document.body.classList.remove('portrait-orientation');
    }
}


// Attach an event listener to window to listen for orientation changes
//window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);

// Call the function initially to check the orientation when the page loads
checkOrientation();

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//----------------------------- View Buttons ----------------------------//

// Function to switch to grid view
function switchToGridView() {
  document.getElementById("list-view").classList.remove("list");
  document.getElementById("grid-view").classList.add("grid");
  
  // Select grid button
  document.getElementById("grid-button").classList.add('selected');

  // Unselect list button
  document.getElementById("list-button").classList.remove('selected');
}

// Function to switch to list view
function switchToListView() {
  document.getElementById("list-view").classList.add("list");
  document.getElementById("grid-view").classList.remove("grid");
  
  // Select list button
  document.getElementById("list-button").classList.add('selected');

  // Unselect grid button
  document.getElementById("grid-button").classList.remove('selected');
}

// Attach event listeners to the buttons to toggle views
document.getElementById("list-button").addEventListener("click", switchToListView);
document.getElementById("grid-button").addEventListener("click", switchToGridView);

switchToGridView();

//----------------------------- View Buttons ----------------------------//
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////