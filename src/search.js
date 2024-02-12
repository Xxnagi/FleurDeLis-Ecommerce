const search = () => {
  const searchbox = document.getElementById("search-items").value.toUpperCase();
  const storeitems = document.getElementById("items-list");
  const product = document.querySelectorAll("#items");
  const itemsname = storeitems.getElementsByTagName("h3");

  for (var i = 0; i < itemsname.length; i++) {
    let match = items[i].getElementsByTagName("h3")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
