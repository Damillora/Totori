async function searchPosts(query) {
    const apiEndpoint = window.yurikoSearchEndpoint + "/api/article/search?"
    const queryString = "q="
    const pageString = "&page="
    let page = 1

    var data = await fetch(apiEndpoint + queryString + query + pageString + page)
    var search = await data.json();
    var result = "";
    if (search.result) {
        result = search.result.map(x => {
            return `
        <div class="search-result">
            <a href="${x.url}"><h2 class="search-result__title">${x.title}</h2></a>
            <p class="search-result__desc">${x.excerpt}</p>
        </div>
        `;
        }).join("");
    }

    document.getElementById("search-count").innerHTML = search.total + " results found";
    document.getElementById("search-results").innerHTML = result;
}


if (window.yurikoSearchEndpoint != undefined) {
    var el = document.getElementById("search-query");
    el.addEventListener("input", function (e) {
        var val = el.value;
        if (val !== "") {
            document.getElementById("search").classList.add("visible");
            document.getElementById("body").classList.add("invisible");
            searchPosts(val);
        } else {
            document.getElementById("search").classList.remove("visible");
            document.getElementById("body").classList.remove("invisible");

            document.getElementById("search-count").innerHTML = ``;
            document.getElementById("search-results").innerHTML = ``;
        }
    });
}
