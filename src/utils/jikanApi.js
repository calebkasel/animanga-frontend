import Bottleneck from "bottleneck";

const limiter = new Bottleneck({
    maxConcurrent: 1,
    minTime: 333
});

export const getTrendingAnime = async() => {
    const trendingList = await limiter.schedule(() => fetch(
        `https://api.jikan.moe/v4/top/anime?filter=airing&type=tv&sfw&page=1&limit=10`
    ).then(res => res.json())
    )
        

    return trendingList;
}

export const getAnime = async() => {
    const anime = await limiter.schedule(() => fetch(
        `https://api.jikan.moe/v4/anime`
    ).then(res => res.json()))
    
    console.log(anime);
    return anime;
}