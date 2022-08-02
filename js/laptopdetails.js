/**
 * Javascript program to view the image when clicked on it.
 */
 window.onload = () => {
    //Storing the data taken via zoomD as an id into the all variable.
    let all = document.getElementsByClassName("zoomD"),
    //Storing the data taken via class name lightbox into the lightbox variable.
        lightbox = document.getElementById("lightbox");
    
    //Displaying the image if exists on the page when clicked on it.
    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        lightbox.innerHTML = "";
        lightbox.appendChild(clone);
        lightbox.className = "show";
      };
    }}
   
    //Searches for the class name when the image has been clicked.
    lightbox.onclick = () => {
      lightbox.className = "";
    };
  };
  