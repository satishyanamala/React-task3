import React from 'react';
import Gallery from './Components/Gallery';
import './App.css';


const imagesList = [
  {
    id: 1,
    imageUrl: 'https://static.toiimg.com/photo/msid-48262604,width-96,height-65.cms',
    thumbnailUrl: 'https://static.toiimg.com/photo/msid-48262604,width-96,height-65.cms',
    imageAltText: 'Image 1',
    thumbnailAltText: 'Thumbnail 1',
  },
  {
    id: 2,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s',
    thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s',
    imageAltText: 'Image 2',
    thumbnailAltText: 'Thumbnail 2',
  },
  {
    id: 3,
    imageUrl: 'https://media.gettyimages.com/id/652147598/photo/panorama-of-a-nature-and-landscape-view-in-leh-ladakh-india.jpg?s=612x612&w=gi&k=20&c=4r22ey2_CTwuzFI3AF1DM1IB_OxMToZnBaWdK4FtuaA=',
    thumbnailUrl: 'https://media.gettyimages.com/id/652147598/photo/panorama-of-a-nature-and-landscape-view-in-leh-ladakh-india.jpg?s=612x612&w=gi&k=20&c=4r22ey2_CTwuzFI3AF1DM1IB_OxMToZnBaWdK4FtuaA=',
    imageAltText: 'Image 3',
    thumbnailAltText: 'Thumbnail 3',
  },
  {
    id: 4,
    imageUrl: 'https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_640.jpg',
    thumbnailUrl: 'https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_640.jpg',
    imageAltText: 'Image 4',
    thumbnailAltText: 'Thumbnail 4',
  },
  {
    id: 5,
    imageUrl: 'https://st.depositphotos.com/1500858/4082/i/450/depositphotos_40827443-stock-photo-travel-the-world-concept.jpg',
    thumbnailUrl: 'https://st.depositphotos.com/1500858/4082/i/450/depositphotos_40827443-stock-photo-travel-the-world-concept.jpg',
    imageAltText: 'Image 5',
    thumbnailAltText: 'Thumbnail 5',
  },
  {
    id: 6,
    imageUrl: 'https://t3.ftcdn.net/jpg/03/04/88/18/360_F_304881889_yJ1S3butl9gVs0kMptYTU2N1EVmEJbz8.jpg',
    thumbnailUrl: 'https://t3.ftcdn.net/jpg/03/04/88/18/360_F_304881889_yJ1S3butl9gVs0kMptYTU2N1EVmEJbz8.jpg',
    imageAltText: 'Image 6',
    thumbnailAltText: 'Thumbnail 6',
  },
  
  
];

const App = () => {
  return (
    <div className="app">
      <Gallery imagesList={imagesList} />
    </div>
  );
};

export default App;
