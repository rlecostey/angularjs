(function(){
  var app = angular.module('sevenArt', [ ]);

  app.filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });



  app.controller('WhishListController', function() {
    this.films = wishListFilms;
    this.guestFilms = guestListFilms;
    this.currentFilm = 0;
    this.showFilmDescription = 0;

    var getColors = function(film, num) {
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = film.poster;
      img.addEventListener('load', function() {
        let vibrant = new Vibrant(img);
        let swatches = vibrant.swatches()
        let colors = [];
        for (swatch in swatches)
        if (swatches.hasOwnProperty(swatch) && swatches[swatch])
        colors.push(swatches[swatch].getRgb());
        console.log(colors);
        document.getElementsByClassName("film-description-card")[num-1].style.backgroundColor= "rgba(" + [colors[2][0]+30,colors[2][1]+30,colors[2][2]+30, 0.5].join(',') +")";

        document.getElementsByClassName("film-description-card-title")[num-1].style.color= "rgba(" + [colors[2][0],colors[2][1],colors[2][2], 0.9].join(',') +")";
      });
    };

    this.filmSelection = function(setFilm, num){
      this.currentFilm = setFilm;
      this.showFilmDescription = num;
      getColors(setFilm, num);
    };

    this.resetSelection = function(){
      this.showFilmDescription = 0;
    };

    this.shuffle = function (array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    };

    this.guestFilms = this.shuffle(guestListFilms);
  });

  app.controller('ViewedListController', function() {
    this.films = viewedListFilms;

    this.currentFilm = 0;
    this.showFilmDescription = 0;

    var getColors = function(film, num) {
      var img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = film.poster;
      img.addEventListener('load', function() {
        let vibrant = new Vibrant(img);
        let swatches = vibrant.swatches()
        let colors = [];
        for (swatch in swatches)
        if (swatches.hasOwnProperty(swatch) && swatches[swatch])
        colors.push(swatches[swatch].getRgb());
        console.log(colors);
        document.getElementsByClassName("film-description-card")[num+2].style.backgroundColor= "rgba(" + [colors[2][0]+30,colors[2][1]+30,colors[2][2]+30, 0.5].join(',') +")";

        document.getElementsByClassName("film-description-card-title")[num+2].style.color= "rgba(" + [colors[2][0],colors[2][1],colors[2][2], 0.9].join(',') +")";
      });
    };

    this.filmSelection = function(setFilm, num){
      this.currentFilm = setFilm;
      this.showFilmDescription = num;
      getColors(setFilm, num);
    };

    this.resetSelection = function(){
      this.showFilmDescription = 0;
    };

    this.getArrayNumber = function(num) {
      let array = [];
      for (let i = 0; i < num; i++) {
         array.push(i);
      };

     return array;
    };
  });


  app.controller('MenuController', function() {
    this.currentTab = 1;

    this.tabSelection = function(setTab){
      this.currentTab = setTab;
    };
  });

  app.controller('SearchController', function() {
  });

  var wishListFilms = [
    {title: 'Avatar', poster: 'http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//5XPPB44RQGfkBrbJxmtdndKz05n.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Avatar', poster: 'http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//5XPPB44RQGfkBrbJxmtdndKz05n.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Avatar', poster: 'http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//5XPPB44RQGfkBrbJxmtdndKz05n.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Avatar', poster: 'http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//5XPPB44RQGfkBrbJxmtdndKz05n.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Avatar', poster: 'http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//5XPPB44RQGfkBrbJxmtdndKz05n.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Django Unchained', poster: 'http://image.tmdb.org/t/p/w185//5WJnxuw41sddupf8cwOxYftuvJG.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//qUcmEqnzIwlwZxSyTf3WliSfAjJ.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."}
  ];

  var guestListFilms = [
    {title: 'Django Unchained', poster: 'http://image.tmdb.org/t/p/w185//5WJnxuw41sddupf8cwOxYftuvJG.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//qUcmEqnzIwlwZxSyTf3WliSfAjJ.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Fight Club', poster: 'http://image.tmdb.org/t/p/w185//adw6Lq9FiC9zjYEpOqfq03ituwp.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//wSJPjqp2AZWQ6REaqkMuXsCIs64.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Pulp Fiction', poster: 'http://image.tmdb.org/t/p/w185//dM2w364MScsjFf8pfMbaWUcWrR.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//mte63qJaVnoxkkXbHkdFujBnBgd.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Intouchables', poster: 'http://image.tmdb.org/t/p/w185//4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//ihWaJZCUIon2dXcosjQG2JHJAPN.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'The Life Aquatic', poster: 'http://image.tmdb.org/t/p/w185//kKwNRePEqTfC6DnNlJzz1yX44iR.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//x2EutNySnFRVrjOXsnGyj3HHvf7.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Interstellar', poster: 'http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."}
  ];

  var viewedListFilms = [
    {title: 'Rogue One', poster: 'http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', category: "SCI-FI", note: "4", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Rogue One', poster: 'http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', category: "SCI-FI", note: "1", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Rogue One', poster: 'http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', category: "SCI-FI", note: "2", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Rogue One', poster: 'http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', category: "SCI-FI", note: "3", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Rogue One', poster: 'http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', category: "SCI-FI", note: "4", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
    {title: 'Interstellar', poster: 'http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg', category: "SCI-FI", note: "5", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."}
  ];

})();
