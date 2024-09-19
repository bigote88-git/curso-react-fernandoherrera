
export async function fetchGift( category ){

    const url = `http://api.giphy.com/v1/gifs/search?api_key=H4PmvetcyROA01oCnnM4g2LOQVwS51AE&q=${category}&limit=5`

    const resp = await fetch(url)
    const { data } = await resp.json()
    
    const images = data.map(dataImg => ({
        id: dataImg.id,
        title: dataImg.title,
        url: dataImg.images.downsized_medium.url
    }))

    //console.log(images)
    return images
}