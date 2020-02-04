// target the filterInput Element
let filterInput = document.getElementById("filterInput");

// add an eventListener
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  //   get value of input

  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  // GETNAMES UL

  let ul = document.getElementById("names");
  // get lis from the ul,the end result is that the querySelector all function used to select all lis with query-selector all will end up as an array

  let li = ul.querySelectorAll("li.collection-item");

  // looping through the resultant array

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    //    if there is a match with the current name in the loop

    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
