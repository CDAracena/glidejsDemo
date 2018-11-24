  const glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    dots: '#dots',
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })


gliderTrack = document.querySelector('.gliderTrack');

const createRepoSlides = (repos)=> {
  for (let i = 0; i < repos.length; i++){
    const gliderSlide = document.createElement('div');
    gliderSlide.innerHTML = repoDiv(repos[i])
    glider.addItem(gliderSlide)

  }
}

function fetchRepoData(){
    fetch(`https://api.github.com/users/cdaracena/repos`)
      .then(repos => repos.json())
      .then(function(repos){
        createRepoSlides(repos)
      })
    }

fetchRepoData();

function repoDiv(repo){
  return `<a href=${repo.url} class="repo-name">${repo.name} <i class="fab fa-github-alt"></i></a>
  <p> ${repo.language}<i class="fas fa-globe"></i> </p>
  <a href=${repo.homepage}> Visit Project Site </a>
  <p> ${repo.description} </p>
   `
}
