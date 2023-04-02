function slideshowFun(images) {
    let slideshowEl = document.getElementById("slidingImages");
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", images[0]);
    slideshowEl.append(imgEl);
  
    // slideshowEl.innerHTML = `<img src="${images[0]}" />`
  
    let index = 0;
  
    setInterval(function () {
      // index = (index + 1) % images.length;
      index++;
      if (index === images.length) {
        index = 0;
      }
  
      let imageElement = document.createElement("img");
      imageElement.setAttribute("src", images[index]);
      // imageElement.src = images[index];    this is another method to set the images
  
      slideshowEl.innerHTML = ""; //It will remove the images from  the slider
  
      slideshowEl.append(imageElement);
    }, 2000);
  }
  
  let sliderImage = [
    "https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2021/10/01214555/BBDmobileweb.jpg?resize=1310%2C290&ssl=1",
    "https://cdn.tricksrecharge.com/wp-content/uploads/2020/09/Screenshot-2020-09-30-at-11.11.08-AM.png",
    "https://www.mobigyaan.com/wp-content/uploads/2018/10/flipkart-big-billion-days-2018.jpg", 
    "https://dog55574plkkx.cloudfront.net/images/flipkart-big-billion-days-offer.jpg",
    "https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202101/flipkart_sale_banner.jpg",
    "https://www.deccanherald.com/sites/dh/files/article_images/2019/09/19/Flipkart%20Big%20Billion%20Days%20sale%20Sept-Oct%202019%202-1568879420.JPG",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F069d0c1c-f78c-4d80-94f9-e65f3bbdda73.jpg&w=1920&q=75",
  ];
  
  window.addEventListener("load", function () {
    slideshowFun(sliderImage);
  });