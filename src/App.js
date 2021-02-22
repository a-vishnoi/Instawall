import React, {useState, useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "./components/Header";
import Loader from "./components/Loader";
import UnsplashImages from "./components/UnsplashImages";
import Popup from "./components/Popup";
import SearchBar from "./components/SearchBar";

const App = () => {

  const [images, setImages] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [popUpImage, setPopUpImage] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(()=>{
    fetchImages();
    setTrigger(false);
  }, []);

  const apiRoot = 'https://api.unsplash.com';
  const accessKey = process.env.REACT_APP_ACCESSKEY;
  const countPerPage = 12;

  const fetchImages = () => {

    const url = `${apiRoot}/photos/random?client_id=${accessKey}&count=${countPerPage}`;

    fetch(url)
      .then(res => res.json())
      .then(response => {
        return setImages([...images, ...response]);
      });
  };

  const handleChange = (event) => {
    let prevImages = images;

    const value = event.target.value;

    const url = `${apiRoot}/search/photos?query=${value}&per_page=${countPerPage}&client_id=${accessKey}`;

    fetch(url)
      .then(res => res.json())
      .then(response => {
        return setImages([...response.results]);
      });

  };

  const closeBtn = () => {
    setTrigger(false);
    setPopUpImage(null);
  };

  const openImage = (image) =>{
    setPopUpImage(image);
    setTrigger(true);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar handleChange={handleChange} />
      { popUpImage !== null && <Popup trigger={trigger} close={closeBtn} image={popUpImage} /> }
      <InfiniteScroll next={fetchImages} hasMore={true} loader={<Loader />} dataLength={images.length}>
        <div className="photo-grid">
          {images.map(image => <UnsplashImages {...image} key={image.id} openImage={openImage} alt={image.alt_description}/>)}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
