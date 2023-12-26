/*=========================================================================Página Inicial=========================================================================*/
document.addEventListener("DOMContentLoaded", () => {   //Carrega as funções contidas depois do HTML ter sido carregado, para utilizar os seus elementos
    /*____________________________________Filmes Trending____________________________________*/
    const moviesContainer = document.getElementById("movies");  //Associar o div dp HTML a uma constante do javascript
    if (moviesContainer) {
        fetchMovies();  //Chamar a função para que seja efetuada

        async function fetchMovies() {  //Iniciar a função que faz fetch e associa a informação a elementos HTML
            try {
                const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=b1af6beb7dbbc7e1848d971d467dba6c`); //Faz fetch à API dete array especifico
                const data = await res.json();  //Guarda como JSON na variavel 'data'

                data.results.slice(0, 5).forEach(media => { //Limita os resultados do fetch para 5
                    const movieCard = createMovieCard(media);
                    moviesContainer.appendChild(movieCard); //Coloca a informação do 'movieCard' no div 'movies'
                });
            } catch (error) {
                console.error("Error fetching data:", error);   //Caso haja um erro, faz log na consola do erro
            }
        }

        function createMovieCard(media) {   //Iniciar a função que define a informação colocada nos cards através do 'media'
            const { title, name, backdrop_path, id } = media;   //Defnir a informação guardada na constante 'media'

            const movieCard = document.createElement("div");    //Criar uma 'div' com o 'movieCard'
            movieCard.classList.add("movie-item");  //Adiciona a class 'movie-item' à classe associada a 'movieCard'

            const movieLink = document.createElement("a");  //Cria um elemento 'a' para utilizar como link para a página de detalhes de cada card
            movieLink.href = "movie_details.html?id=" + id; //Passar o ID do filme como parametro query
            movieLink.classList.add("card-link");   //Adicionar a classe 'card-link' à classe associada a 'movieLink'

            //Definir o conteúdo HTML de 'movieLink' 
            movieLink.innerHTML = ` 
            <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="card-img-top">
            <div class="card-title">${title || name}</div>
            `;

            //Definir a ação efetuada quando o 'movieLink' é clicado
            movieLink.addEventListener("click", (event) => {
                event.preventDefault();
                const movieId = id;
                localStorage.setItem("selectedMovieId", movieId); //Guardar o ID do filme selecionado no localStorage
                window.location.href = event.currentTarget.href;    //Mudar a página para a página de detalhes do filme clicado
            });

            movieCard.appendChild(movieLink);   //Colocar o 'movieLink' no card dos filmes

            return movieCard;
        }
    }
    /*________________________________________________________________________________________*/


    /*____________________________________Filmes Iminentes____________________________________*/
    const moviesContainerNew = document.getElementById("movies2");
    if (moviesContainerNew) {
        fetchMoviesNew();

        async function fetchMoviesNew() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=b1af6beb7dbbc7e1848d971d467dba6c`);
                const data = await res.json();

                data.results.slice(0, 5).forEach(media => {
                    const movieCard = createMovieCard(media);
                    moviesContainerNew.appendChild(movieCard);
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        function createMovieCard(media) {
            const { title, name, backdrop_path, id } = media;

            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-item")

            const movieLink = document.createElement("a");
            movieLink.href = "movie_details.html?id=" + id;
            movieLink.classList.add("card-link");

            movieLink.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="card-img-top">
            <div class="card-title">${title || name}</div>
            `;

            movieLink.addEventListener("click", (event) => {
                event.preventDefault();
                const movieId = id;
                localStorage.setItem("selectedMovieId", movieId);
                window.location.href = event.currentTarget.href;
            });

            movieCard.appendChild(movieLink);

            return movieCard;
        }
    }
    /*_____________________________________________________________________________________________________*/

    /*____________________________________Filmes Melhores Classificados____________________________________*/
    const moviesContainerTop = document.getElementById("movies3");
    if (moviesContainerTop) {
        fetchMoviesTop();

        async function fetchMoviesTop() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b1af6beb7dbbc7e1848d971d467dba6c`);
                const data = await res.json();

                data.results.slice(0, 5).forEach(media => {
                    const movieCard = createMovieCard(media);
                    moviesContainerTop.appendChild(movieCard);
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        function createMovieCard(media) {
            const { title, name, backdrop_path, id } = media;

            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-item")

            const movieLink = document.createElement("a");
            movieLink.href = "movie_details.html?id=" + id; //Passar o ID do filme como parametro query
            movieLink.classList.add("card-link");

            movieLink.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="card-img-top">
            <div class="card-title">${title || name}</div>
            `;

            movieLink.addEventListener("click", (event) => {
                event.preventDefault();
                const movieId = id;
                localStorage.setItem("selectedMovieId", movieId); //Guardar o ID do filme selecionado no localStorage
                window.location.href = event.currentTarget.href;
            });

            movieCard.appendChild(movieLink);

            return movieCard;
        }
    }
    /*_____________________________________________________________________________________________________*/



    /*=========================================================================Página de Trending=========================================================================*/
    const moviesContainerTrending = document.getElementById("movies-trending");
    if (moviesContainerTrending) {
        fetchMoviesTrending();

        async function fetchMoviesTrending(genre) {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=b1af6beb7dbbc7e1848d971d467dba6c`);
                const data = await res.json();

                data.results.forEach(media => {
                    const movieCard = createMovieCard(media);
                    moviesContainerTrending.appendChild(movieCard);
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        function createMovieCard(media) {
            const { title, name, backdrop_path, id } = media;

            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-item")

            const movieLink = document.createElement("a");
            movieLink.href = "movie_details.html?id=" + id;
            movieLink.classList.add("card-link");

            movieLink.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="card-img-top">
            <div class="card-title">${title || name}</div>
            `;

            movieLink.addEventListener("click", (event) => {
                event.preventDefault();
                const movieId = id;
                localStorage.setItem("selectedMovieId", movieId);
                window.location.href = event.currentTarget.href;
            });

            movieCard.appendChild(movieLink);

            return movieCard;
        }
    }

    /*=========================================================================Página de Próximos Lançamentos=========================================================================*/
    const moviesContainerUpcoming = document.getElementById("movies-upcoming");
    if (moviesContainerUpcoming) {
        fetchMoviesUpcoming();

        async function fetchMoviesUpcoming() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=b1af6beb7dbbc7e1848d971d467dba6c`);
                const data = await res.json();

                data.results.forEach(media => {
                    const movieCard = createMovieCard(media);
                    moviesContainerUpcoming.appendChild(movieCard);
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        function createMovieCard(media) {
            const { title, name, backdrop_path, id } = media;

            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-item")

            const movieLink = document.createElement("a");
            movieLink.href = "movie_details.html?id=" + id;
            movieLink.classList.add("card-link");

            movieLink.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="card-img-top">
            <div class="card-title">${title || name}</div>
            `;

            movieLink.addEventListener("click", (event) => {
                event.preventDefault();
                const movieId = id;
                localStorage.setItem("selectedMovieId", movieId);
                window.location.href = event.currentTarget.href;
            });

            movieCard.appendChild(movieLink);

            return movieCard;
        }
    }

    /*=========================================================================Página de Filmes Melhor Classificados=========================================================================*/
    const moviesContainerTopRated = document.getElementById("movies-top");
    if (moviesContainerTopRated) {
        fetchMoviesTopRated();

        async function fetchMoviesTopRated() {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b1af6beb7dbbc7e1848d971d467dba6c`);
                const data = await res.json();

                data.results.forEach(media => {
                    const movieCard = createMovieCard(media);
                    moviesContainerTopRated.appendChild(movieCard);
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        function createMovieCard(media) {
            const { title, name, backdrop_path, id } = media;

            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-item")

            const movieLink = document.createElement("a");
            movieLink.href = "movie_details.html?id=" + id;
            movieLink.classList.add("card-link");

            movieLink.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="card-img-top">
            <div class="card-title">${title || name}</div>
            `;

            movieLink.addEventListener("click", (event) => {
                event.preventDefault();
                const movieId = id;
                localStorage.setItem("selectedMovieId", movieId);
                window.location.href = event.currentTarget.href;
            });

            movieCard.appendChild(movieLink);

            return movieCard;
        }
    }

    /*=========================================================================Página com Todos os Filmes=========================================================================*/
    //Associar elementos HTML a constantes no script
    const moviesContainerTodos = document.getElementById("all-movies");
    const paginationInfo = document.getElementById("pagination-info");
    const currentPageInfo = document.getElementById("current-page");
    const totalPagesInfo = document.getElementById("total-pages");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const genreFilter = document.getElementById("genre-filter");
    const sortByYearBtn = document.getElementById("sort-by-year-btn");
    const sortByRatingBtn = document.getElementById("sort-by-rating-btn");
    const sortByTitleBtn = document.getElementById("sort-by-title-btn");
    let currentPage = 1;    //Definir o valor da página inicial
    let sortByParam = '';   //Definir a variável de sorting, como vazia. Não tem filtros aplicados

    if (moviesContainerTodos && prevBtn && nextBtn && genreFilter) {    //Certificar que estas variáveis estejam carregadas
        genreFilter.addEventListener("change", () => {
            currentPage = 1; //Reset para a primeira página quando se muda o género
            fetchAllMovies(currentPage);
        });

        prevBtn.addEventListener("click", () => {   //Adicionar um evento ao botão de navegar para trás
            if (currentPage > 1) {  //Definir que não está na primeira página
                currentPage--;      //Decrementar o valor da variável
                fetchAllMovies(currentPage);    //Fazer fetch dos filmes da página atual
            }
        });

        nextBtn.addEventListener("click", () => {   //Adicionar um evento ao botão de navegar para a frente
            currentPage++;  //Incrementar o valor da variável
            fetchAllMovies(currentPage);    //Fazer fetch dos filmes da página atual
        });

        if (sortByYearBtn && sortByRatingBtn && sortByTitleBtn) {   //Certificar que estas variáveis estejam carregadas
            sortByYearBtn.addEventListener("click", () => {     //Adicionar um evento ao botão de filtrar por ano
                sortByParam = toggleSortOrder(sortByParam, 'release_date'); //Chamar a função 'toggleSortOrder' e utilizar a variável 'sortByParam' e associar como organizar os resultados
                fetchAllMovies(currentPage);
            });

            sortByRatingBtn.addEventListener("click", () => {   //Adicionar um evento ao botão de filtrar por classificação
                sortByParam = toggleSortOrder(sortByParam, 'vote_average'); //Chamar a função 'toggleSortOrder' e utilizar a variável 'sortByParam' e associar como organizar os resultados
                fetchAllMovies(currentPage);
            });

            sortByTitleBtn.addEventListener("click", () => {    //Adicionar um evento ao botão de filtrar por titulo
                sortByParam = toggleSortOrder(sortByParam, 'title');    //Chamar a função 'toggleSortOrder' e utilizar a variável 'sortByParam' e associar como organizar os resultados
                fetchAllMovies(currentPage);
            });
        }

        function toggleSortOrder(currentSort, sortBy) { //Definir a função 'toggleSortOrder' 
            if (currentSort === `${sortBy}.asc`) {  
                return `${sortBy}.desc`;    //Se a ordem for ascendente, trocar para descendente
            } else {
                return `${sortBy}.asc`;
            }
        }

        async function fetchAllMovies(page) {
            const selectedGenre = genreFilter.value;    //Definir o genero selecionado

            let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=b1af6beb7dbbc7e1848d971d467dba6c&page=${page}&include_adult=false`;

            if (selectedGenre) {
                apiUrl += `&with_genres=${selectedGenre}`;  //Adicionar ao url, o genero para filtrar
            }

            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                let totalPages = data.total_pages;


                if (totalPages > 20) {
                    totalPages = 20; //Limitar o número de páginas, para carregar mais rapidamente
                }

                const fetchedMovies = [];

                //Paginar os resultados do fetch e colocá-los no array 'fetchedMovies'
                for (let i = 1; i <= totalPages; i++) {
                    const pageUrl = `${apiUrl}&page=${i}`;
                    const pageRes = await fetch(pageUrl);
                    const pageData = await pageRes.json();
                    fetchedMovies.push(...pageData.results);
                }

                //Remover os filmes com avaliações de 0, para melhorar a pool de resultados
                let filteredMovies = fetchedMovies.filter(movie => movie.vote_average !== 0);

                if (sortByParam) {  //Se  variável existir
                    let sortField = ''; //Definir a variável como vazio
                    let sortOrder = ''; //Definir a variável como vazio

                    if (sortByParam === 'vote_average.asc' || sortByParam === 'vote_average.desc') {    //Escolher qual o tipo de sorting
                        sortField = 'vote_average'; //Definir a variável com o tipo de sorting
                        sortOrder = sortByParam.endsWith('.asc') ? 'asc' : 'desc';  //Verifica se a variável 'sortByParam' acaba com 'asc'. Se não, assume que acaba com 'desc'
                    } else if (sortByParam === 'release_date.asc' || sortByParam === 'release_date.desc') {
                        sortField = 'release_date';
                        sortOrder = sortByParam.endsWith('.asc') ? 'asc' : 'desc';
                    } else if (sortByParam === 'title.asc' || sortByParam === 'title.desc') {
                        sortField = 'title';
                        sortOrder = sortByParam.endsWith('.asc') ? 'asc' : 'desc';
                    }

                    if (sortField && sortOrder) {   //Garante que as variáveis existem
                        if (sortField === 'vote_average') { //Se a variável for definida com este tipo de sorting
                            filteredMovies.sort((a, b) => { //Organiza os resultados, comparando dois de cada vez
                                const ratingA = parseFloat(a[sortField]);   //Transforma o rating do filme em float
                                const ratingB = parseFloat(b[sortField]);   //Transforma o rating do filme em float

                                return sortOrder === 'asc' ? ratingA - ratingB : ratingB - ratingA;
                            });
                        } else if (sortField === 'title') {
                            filteredMovies.sort((a, b) => {
                                const titleA = a[sortField].toUpperCase();  //Garante que o sorting é case-insensitive
                                const titleB = b[sortField].toUpperCase();  //Garante que o sorting é case-insensitive

                                if (sortOrder === 'asc') {  //Organizar os resultados de forma ascendente
                                    if (titleA < titleB) return -1;
                                    if (titleA > titleB) return 1;
                                    return 0;
                                } else {    //Organizar os resultados de forma descendente
                                    if (titleA > titleB) return -1;
                                    if (titleA < titleB) return 1;
                                    return 0;
                                }
                            });
                        } else if (sortField === 'release_date') {
                            filteredMovies.sort((a, b) => {
                                const dateA = new Date(a[sortField]);   //Transformar os resultados em objectos 'Date'
                                const dateB = new Date(b[sortField]);   //Transformar os resultados em objectos 'Date'

                                if (sortOrder === 'asc') {  //Organizar os resultados de forma ascendente
                                    return dateA - dateB;
                                } else {    //Organizar os resultados de forma descendente
                                    return dateB - dateA;
                                }
                            });
                        }
                    }
                }

                //Calcular o indice de inicio e fim para a página atual
                const moviesPerPage = 20; //Definir o numero de filmes por pagina
                const startIndex = (page - 1) * moviesPerPage;  //Calcular onde os filmes de cada página começam
                const endIndex = page * moviesPerPage;  //Calcular onde os filmes de cada página terminam

                //Fazer slice do array 'filteredMovies' para mostrar apenas os filmes entre o inicio e fim definidos antes
                const moviesForCurrentPage = filteredMovies.slice(startIndex, endIndex);

                moviesContainerTodos.innerHTML = '';    //Definir o container como vazio

                moviesForCurrentPage.forEach(media => {
                    const movieCard = createMovieCard(media);
                    moviesContainerTodos.appendChild(movieCard);
                });

                prevBtn.disabled = page === 1;  //Desativar o botão de navegar para trás, caso a página seja 1
                nextBtn.disabled = page >= data.total_pages;    //Desativar o botão de navegar para a frente, caso a página seja a ultima

                currentPageInfo.textContent = page; //Mostrar no elemento HTML 'currentPageInfo' o valor guardado na variável 'page'
                totalPagesInfo.textContent = data.total_pages;  //Mostrar no elemento HTML 'totalPagesInfo' o valor guardado na variável 'total_pages'

                //Esconder ou mostrar a paginação dependendo do numero de paginas
                if (data.total_pages > 1) {
                    paginationInfo.style.display = "flex";
                } else {
                    paginationInfo.style.display = "none";
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        function createMovieCard(media) {
            const { title, name, backdrop_path, id } = media;

            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-item")

            const movieLink = document.createElement("a");
            movieLink.href = "movie_details.html?id=" + id;
            movieLink.classList.add("card-link");

            movieLink.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="card-img-top">
                <div class="card-title">${title || name}</div>
                `;

            movieLink.addEventListener("click", (event) => {
                event.preventDefault();
                const movieId = id;
                localStorage.setItem("selectedMovieId", movieId);
                window.location.href = event.currentTarget.href;
            });

            movieCard.appendChild(movieLink);

            return movieCard;
        }

        fetchAllMovies(currentPage);
    }
});

/*=========================================================================Página de Detalhes=========================================================================*/
document.addEventListener("DOMContentLoaded", () => {
    const titleFilmeElement = document.getElementById("title-filme");
    const titlePageFilmeElement = document.getElementById("title-pagina-filme");
    const imagemDetalhesElement = document.getElementById("imagem-detalhes");
    const textoDetalhesElement = document.getElementById("texto-detalhes");
    const dataDetalhesElement = document.getElementById("data-lancamento");
    const ratingDetalhesElement = document.getElementById("rating");

    const params = new URLSearchParams(window.location.search); //Procurar no URL os parametros do filme escolhido
    const movieId = params.get("id");   //Definir o id do filme com o id encontrado no URL

    if (movieId) { 
        fetchMovieDetails(movieId) 
            .then(movie => {
                renderMovieDetails(movie);
            })
            .catch(error => {
                console.error("Error fetching movie details:", error);
                displayErrorMessage();
            });
    } else {
        displayErrorMessage();
    }

    async function fetchMovieDetails(movieId) { //Definir a função que faz fetch do filme com o ID associado
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b1af6beb7dbbc7e1848d971d467dba6c`);
            const data = await res.json();
            return data;
        } catch (error) {
            throw new Error("Error fetching movie details");
        }
    }

    async function fetchGenreList() {   //Definir a função que faz fetch da lista de generos
        try {
            const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=b1af6beb7dbbc7e1848d971d467dba6c`);
            const data = await res.json();
            return data.genres;
        } catch (error) {
            throw new Error("Error fetching genre list");
        }
    }

    async function renderMovieDetails(movie) {  //Definir a função que cria os elementos na página para o filme selecionado
        titleFilmeElement.textContent = movie.title || movie.name;  //Definir o conteudo de texto do elemento HTML para a informação especifica para casa filme
        titlePageFilmeElement.textContent = movie.title || movie.name;

        if (movie.poster_path) {    //Caso exista uma imagem associada ao filme
            const img = document.createElement("img");  //Criar uma div para colocar a imagem
            img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            img.alt = "Movie Poster";
            img.classList.add("movie-poster");
            imagemDetalhesElement.appendChild(img);
        } else {
            displayErrorMessage();
        }

        const overview = document.createElement("p");   //Criar um parágrafo para coloar a sinopse do filme
        overview.textContent = movie.overview || "No overview available";
        textoDetalhesElement.appendChild(overview);

        const releaseDate = document.createElement("p");    //Criar um parágrafo para colocar a data de lançamento do filme
        releaseDate.textContent = movie.release_date || "No release date available";
        dataDetalhesElement.appendChild(releaseDate);

        const ratingCasa = parseFloat(movie.vote_average).toFixed(1);   //Limitar o numero de casas decimais da avaliação do filme para uma
        const rating = document.createElement("p"); //Criar um parágrafo para colocar o rating do filme
        rating.innerHTML = ratingCasa ? `${ratingCasa} <i class='fa-solid fa-star' style='color: #1ba857;'></i>` : "No rating available";
        ratingDetalhesElement.appendChild(rating);

        //Descobrir o genero do filme clicado
        try {
            const genres = await fetchGenreList();  //Associar a lista de géneros à variável
            let genreIds = [];  //Criar um array para os IDs dos géneros
            if (movie.genre_ids) {
                genreIds = movie.genre_ids;
            } else if (movie.genres) {
                genreIds = movie.genres.map(genre => genre.id);
            }

            const movieGenres = genres.filter(genre => genreIds.includes(genre.id)).map(genre => genre.name);   //Criar um array que contem apenas o nome de cada genero

            //Associar as variáveis a elementos HTML
            const genreContainer = document.getElementById("genero");
            const genreElement = document.createElement("p");
            genreElement.textContent = movieGenres.length > 0 ? movieGenres.join(", ") : "No genres available";
            genreContainer.appendChild(genreElement);
        } catch (error) {
            console.error("Error fetching genres:", error);
            displayErrorMessage();
        }
    }

    function displayErrorMessage() {
        console.error("Failed to load movie details.");
    }
});

/*=========================================================================Função de Pesquisa=========================================================================*/
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

//Criar a função de pesquisa
async function performSearch() {  
    const query = searchInput.value.trim(); //Remove espaços no inicio e fim do string 

    if (query !== '') { //Se a string de pesquisa não estiver vazia
        try {
            const searchResultsData = await searchMovies(query);    //Chama a função 'searchMovies' com o string de pesquisa
            localStorage.setItem('searchQuery', query); //Guarda a pesquisa no localStorage
            localStorage.setItem('searchResults', JSON.stringify(searchResultsData));   //Guarda os resultados da pesquisa num JSON
            window.location.href = 'results.html';  //Muda de página para o ficheiro 'results.html'
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    }
}

//Event listener para o click da tecla "enter"
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

//Event listener para o click do botão de pesquisa
searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('active'); //Toggle da classe active quando o botão é clicado

    if (searchInput.classList.contains('active')) {
        searchInput.focus(); //Quando se tornar visivel, focar na barra de pesquisa
    }

    const query = searchInput.value.trim();

    performSearch();
});

document.addEventListener('DOMContentLoaded', async () => {
    const searchResultsData = JSON.parse(localStorage.getItem('searchResults'));    //Vai buscar os resultados de pesquisa ao localStorage

    if (searchResultsData) {
        displaySearchResults(searchResultsData, searchResults);
        localStorage.removeItem('searchQuery'); //Remover a pesquisa do localStorage
    }
});

//Iniciar a função que faz a pesquisa na API com o string inserido na barra de pesquisa
async function searchMovies(query) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b1af6beb7dbbc7e1848d971d467dba6c&query=${query}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw new Error('Error fetching search results');
    }
}

//Inicia a função que apresenta o resultado da pesqusia
function displaySearchResults(results) {
    results.forEach(movie => {
        const movieCard = createMovieCard(movie);
        searchResults.appendChild(movieCard);
    });
}

function createMovieCard(movie) {
    const { title, backdrop_path } = movie;

    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-item');

    const movieLink = document.createElement('a');
    movieLink.href = `movie_details.html?id=${movie.id}`;
    movieLink.classList.add('card-link');

    movieLink.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="card-img-top">
    <div class="card-title">${title}</div>
    `;

    movieCard.appendChild(movieLink);

    return movieCard;
}