import { Fragment, useEffect } from "react";
import GifCard from "./components/GifCard";
import InputSearch from "./components/InputSearch";
import useGif from "./hooks/useGif";
import ToggleColorMode from "./components/ToggleColorMode";

const GifApp = () => {
  const { parameters, setParameters, getGifs, gifs } = useGif();

  const handleSearch = (e) => {
    if (e.key !== "Enter") return;
    if (e.target.value === "") return;
    if (gifs.some((gif) => gif.category === e.target.value)) return;
    setParameters({
      ...parameters,
      search: e.target.value,
    });
  };

  useEffect(() => {
    if (parameters.search) {
      getGifs();
    }
  }, [parameters.search]);

  return (
    <div className="bg-gray-100 dark:bg-stone-800 min-h-screen p-3 flex flex-col">
      <div className="flex items-center">
        <h1 className="mx-auto font-medium text-lg dark:text-white">
          👋 Welcome, Search your gifs!
        </h1>
        <ToggleColorMode />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 ">
        <div className="md:col-start-5 md:col-span-4 ">
          <InputSearch handleSearch={handleSearch} />
        </div>
      </div>
      {gifs.map((gif) => (
        <Fragment key={gif.category}>
          <div className="flex my-3">
            <p className="font-medium text-lg uppercase dark:text-white">
              {gif.category}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            {gif.isLoading ? (
              <div className="md:col-span-12 text-center">Loading...</div>
            ) : (
              gif.gifs?.map((gifItem) => (
                <div key={gifItem.id} className="md:col-span-3">
                  <GifCard
                    title={gifItem.title}
                    image={gifItem.images?.original?.webp}
                    link={gifItem.url}
                  />
                </div>
              ))
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default GifApp;
