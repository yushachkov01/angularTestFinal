import ymaps from 'ymaps';
 
ymaps
  .load()
  .then(maps => {
    const map = new maps.Map('your-map-container', {
      center: [-8.369326, 115.166023],
      zoom: 7
    });
  })
  .catch(error => console.log('Failed to load Yandex Maps', error));