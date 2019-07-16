$(document).ready(


    $.ajax({
        url: "https://api.discogs.com/database/search?genre=hip-hop&page=1&per_page=5&key=zbMdSXPWgcIubGtfgqxo&secret=FmfVmTsRvPXQdvZbvRUMjAEDDGcNDjSD",
        method: "GET"
    }).then(function (response) {
        console.log(response)

        console.log(response.results[0].title)
    }));
