document.addEventListener('DOMContentLoaded', function(){
	var containerRoot=document.getElementById('container_gallery');
	fetch("https://pixabay.com/api/?key=9028855-4954bd69ac7123fc7b07d2e3c")
		.then(data => data.text())
		.then(json =>JSON.parse(json))
		.then((response) =>{
			response.hits.forEach(element => {
				var container=document.createElement('div');
				var img=document.createElement('img');
				img.src=element.previewURL;
				container.appendChild(img);
				containerRoot.appendChild(container);
			});
		})
},false);