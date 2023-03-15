
import React, { useEffect, useState } from "react";
import { AnimeList } from "../../Components/AnimeList";
import { AnimeInfo } from "../../Components/AnimeInfo";
import { AddToList } from "../../Components/AddToList";
import { RemoveFromList } from "../../Components/RemoveFromList";
import axios from "axios";


const Home=()=>  {
    const [search, setSearch] = useState("");
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setMyAnimeList] = useState([]);

  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id;
    });
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
    }
  };

  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id;
    });
    setMyAnimeList(newArray);
  };

  const getData = async () => {
    const res = await axios(
      `https://api.jikan.moe/v4/anime?q=${search}&sfw&limit=20`
    );
    const resData = res.data;
    setAnimeData(resData.data);
  };

  useEffect(() => {
    if (search.trim() !== "") {
      getData();
    }
  }, [search]);

  return (
    <>
    <div className="header">
      <h1>Mi lista de Anime</h1>
      <div className="search-box">
        <input
          type="search"
          placeholder="Busca tu anime"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>

    <div className="container">
      <div className="animeInfo ">
        {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
      </div>
      <div className="anime-row">
        <h2 className="text-heading">Anime</h2>
        <div className="row">
          <AnimeList
            animelist={animeData}
            setAnimeInfo={setAnimeInfo}
            animeComponent={AddToList}
            handleList={(anime) => addTo(anime)}
          />
        </div>
        <h2 className="text-heading"> My List</h2>
        <div className="row">
          <AnimeList
            animelist={myAnimeList}
            setAnimeInfo={setAnimeInfo}
            animeComponent={RemoveFromList}
            handleList={(anime) => removeFrom(anime)}
          />
        </div>
      </div>
    </div>
    </>

  )
}

export default Home