async function searchGiphys () { 
    const myApiKey = 'NV4Ys85GdAYoR83pCu9Dsk6Bo9H6xnQw';
    const userSearches = document.queryselector('search-box').value;
    const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${userSearches}&api_key=${myApiKey}&limit=25`;

    try{
        const response = await fetch(searchUrl);
        if(!response.ok) throw new Error('HTTP error!');
        const data = await response.json();
        displayGiphys(data.data);
    }


catch {}
};


searchButton = document.querySelector('.search-box');
searchButton.addEventListener('click', )