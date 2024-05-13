function fetchArtistDetails() {
    var input = document.getElementById('artistInput').value;
    var baseURL = 'https://musicbrainz.org/ws/2/artist/';
    var query = input.includes('-') ? '/' + input : '?query=' + encodeURIComponent(input);
    var format = '&fmt=json';

    var url = baseURL + query + format;

    fetch(url)
        .then(response => response.json())
        .then(data => displayArtistDetails(data))
        .catch(error => console.error('Error:', error));
}

function displayArtistDetails(data) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (data.artists && data.artists.length > 0) {
        data.artists.forEach(artist => {
            const artistLink = document.createElement('a');
            artistLink.href =  `./lookupArtist.html?mbid=${artist.id}`;
            artistLink.textContent = artist.name;
            artistLink.style.display = 'block';

            resultsDiv.appendChild(artistLink);
        });
    } else {
        resultsDiv.textContent = 'No artist found with the provided information';
    }
}
