// new file called DogPicture.jsx
import React, { useEffect, useState } from 'react';

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setImageUrl('https://images.theconversation.com/files/314738/original/file-20200211-146686-tge6h.JPG?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=754&fit=crop&dpr=1')
  }, []);

  return (
    <div>
      <img src={imageUrl} alt='Meme' height = "200" width = "200" />
    </div>
  );
};

export default DogPicture;