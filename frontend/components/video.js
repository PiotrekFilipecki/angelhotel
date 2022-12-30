import { useEffect, useState } from 'react';

function MyComponent() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:1337/videos/1');
      const data = await res.json();
      setVideo(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {video && (
        <video controls src={video.url} />
      )}
    </div>
  );
}