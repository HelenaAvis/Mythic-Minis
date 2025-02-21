const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keyup", function(e) {
    if (e.key === "Enter" && searchInput.value.length > 0) {
        // submit search with query
        search(searchInput.value);
    }
});

function search(query) {
    console.log("Searching for query: " + query);
}