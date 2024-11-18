async function searchGiphys(event) {
    event.preventDefault();  
    const myApiKey = "NV4Ys85GdAYoR83pCu9Dsk6Bo9H6xnQw";
    const userSearches = document.getElementById("search-box").value;
    const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${userSearches}&api_key=${myApiKey}`;
    
  
    try {
      const response = await fetch(searchUrl);
      if (!response.ok) throw new Error("HTTP error!");
      const data = await response.json();
      const giphySection = document.getElementById("giphySection");
      giphySection.innerHTML = ""; 
  
      data.data.forEach(element => {
        const newImages = document.createElement("img");
        newImages.src = element.images.original.url;
        giphySection.appendChild(newImages);
      });
    } catch (error) {
      console.error("Error fetching Giphy data:", error); 
    }
  }
  
  function clearSearch() {
    document.getElementById("search-box").value = "";
    const giphySection = document.getElementById("giphySection");
    giphySection.innerHTML = ""; 
  }
  