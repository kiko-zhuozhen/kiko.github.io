
function getMBIDFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('mbid');
}

document.addEventListener('DOMContentLoaded', () => {
    const mbid = getMBIDFromUrl();
    if(mbid) {
        fetchAlbum(mbid);
    }
});

function fetchAlbum(mbid) {
    var url = 'https://musicbrainz.org/ws/2/artist/' + mbid + '?inc=releases&fmt=json';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.releases) {
                displayAlbumResults(data.releases);
            } else {
                displayAlbumResults([]); 
            }
        })
        .catch(error => console.error('Error:', error));
}

function displayAlbumResults(albums) {
    const albumResultsDiv = document.getElementById('albumResults');
    albumResultsDiv.innerHTML = '';

    if (!albums || albums.length === 0) {
        albumResultsDiv.textContent = 'No albums found for the artist';
        return;
    }

    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    const header1 = document.createElement('th');
    header1.textContent = 'Release Date';
    const header2 = document.createElement('th');
    header2.textContent = 'Album Name';
    headRow.appendChild(header1);
    headRow.appendChild(header2);
    table.appendChild(headRow);

    albums.forEach(album => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = album.date ? album.date : 'N/A';

        const cell2 = document.createElement('td');
        cell2.textContent = album.title;

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });

    albumResultsDiv.appendChild(table);
}

