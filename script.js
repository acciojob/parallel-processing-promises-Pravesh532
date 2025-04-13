//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url){
	return new Promise((resolve, reject) => {
		const img = new Images();
		umg.url = url;
		img.onload() = ()=> resolve(img);
		img.onerror() = () => reject( new Error(`Failed to load image from ${url}`))
		
	});
}

function downloadImages(){
	output.innerHTML = "";
      errorDiv.textContent = "";
      loading.style.display = "block";

	const imgePromise = images.map((imageurl) => downloadImage(imageurl.url)); 
	Promise.all(imgePromise)
	.then((loadedImage) =>{
		loadedImage.forEach(img => output.appendChild(img));
	})
	.catch((err)=>{
		 errorDiv.textContent = err.message;
	})
	.finally(()=> {
		 loading.style.display = "none";
	})
}
btn.addEventListener('click',downloadImages);