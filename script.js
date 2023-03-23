function loadMeals(searchText){
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

function displayMeals(meals){
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerText = ''
    meals.forEach(meal => {
        // console.log(meals)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails ">
  Launch demo modal
</button>
        `
        mealsContainer.appendChild(mealDiv)
    });

}

function searchMeal(){
    const searchText = document.getElementById('search-field').value 
    loadMeals(searchText)

}

function loadMealDetail(idMeal){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMealDetail(data.meals[0]) )
}

function displayMealDetail(meal){
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal
}

loadMeals('')