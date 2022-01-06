
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cute_cat_btn = document.getElementById('cute_cat_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cute_cat_result = document.getElementById('cute_cat_result');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);
cute_cat_btn.addEventListener('click', getRandomCutecat);

function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}

function getRandomCutecat() {
	fetch('https://thatcopy.pw/catapi/rest/')
		.then(res => res.json())
		.then(data => {
			bear_result.innerHTML = `<img src=${data.url} alt="cutecat" />`
		});
}


