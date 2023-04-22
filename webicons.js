
 

// not perfect, but it works
// for details please visit: https://glenthemes.github.io/iconsax
document.addEventListener("DOMContentLoaded",() => { 
    init_iconsax();
});

function init_iconsax(){
    document.querySelectorAll(".groups").forEach(groups => {
    	var TuT = groups.getAttribute("icon-name").toLowerCase().trim();
    	
    	fetch("//warstarsyoda.github.io/groups/groups/" + TuT + ".svg")
    	.then(n_n => {
    	  return n_n.text();
    	})
    	.then(n_n => {
    	  iconsax.innerHTML = n_n;
    	  if(iconsax.querySelectorAll("[http-equiv='Content-Security-Policy']").length){
    	     iconsax.innerHTML = "";
          }
    	});
    });
}
