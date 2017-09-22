document.addEventListener('DOMContentLoaded', function() {

  const getDataEl = document.getElementById('get-data')



fetch('https://dog.ceo/api/breeds/list/all').then(function(response) {
  return response.json();
}).then(function(json){
	return json
}).then(function(animalObj){
	let dogs = Object.keys(animalObj.message)

	let dogsURLs = dogs.map(function(dog){
		return `http://dog.ceo/api/${dog}/images/random`
	})

	
	Promise.all(dogsURLs).then(function(dogs){
		return fetch(dogs)// create a fetch request for each dog and return the fetch request
	}).then(function(data){
		document.body.innerHTML += `<div>${data}</div>`
	})

	// dogs.forEach(function(dog){
	// 	fetch(`https://dog.ceo/api/${dog}/list/all`)
	// 	.then(function(response){
	// 		return response.json()
	// 	}).then(function(data){
	// 		docuemnt.body.innerHTML += `<div>`
	// 	})
	// })
})


})

// let num = Promise.resolve(5)
// num.then(function(data){document.innerHTML})