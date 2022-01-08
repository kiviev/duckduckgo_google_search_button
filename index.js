// alert('funciona');
const container = document.getElementsByClassName('header__search')[0];

if(container){
    let buttonElement = document.createElement('button');
    
    buttonElement.innerHTML = "Google";

    container.appendChild(buttonElement);

    buttonElement.addEventListener("click", searchInGoogle, false)
}


function searchInGoogle(){
    let baseSearch = 'https://www.google.com/search?q=';

    let search = document.getElementById('search_form_input').value;

    let urlToSearch = baseSearch + encodeURIComponent(search);

    document.location = urlToSearch;

    console.log(urlToSearch)
}


