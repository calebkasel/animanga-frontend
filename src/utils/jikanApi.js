export const getTrendingAnime = async() => {
    const trendingList = await fetch(
        `https://api.jikan.moe/v4/top/anime?filter=airing&type=tv&sfw&page=1`
    ).then(res => res.json());

    return trendingList;
}

export const getAnime = async() => {
    const anime = await fetch(
        `https://api.jikan.moe/v4/anime`
    ).then(res => res.json());

    return anime;
}