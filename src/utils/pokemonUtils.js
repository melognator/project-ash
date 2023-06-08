export const getPokemonIdFromUrl = (url) => {
    return url.split('/')[url.split('/').length - 2]
}

export const getPokemonImage = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

export const getPokemonImageFromUrl = (url) => {
    const id = getPokemonIdFromUrl(url)
    const image = getPokemonImage(id)
    return image
}