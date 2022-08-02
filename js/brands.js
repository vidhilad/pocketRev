
  /**
 * Javascript program to view the image when clicked on it.
 */
   window.onload = () => {
    //Storing the data taken via zoomC as an id into the all variable.
    let all = document.getElementsByClassName("zoomC"),
    //Storing the data taken via class name gifeffect into the gifeffect variable.
        gifeffect = document.getElementById("gifeffect");
    
    //Displaying the image if exists on the page when clicked on it.
    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        gifeffect.innerHTML = "";
        gifeffect.appendChild(clone);
        gifeffect.className = "show";
      };
    }}
   
    //Searches for the class name when the image has been clicked.
    gifeffect.onclick = () => {
      gifeffect.className = "";
    };
  };
  