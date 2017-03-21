(function(){ 
  var app = angular.module('sevenArt', [ ]);

  app.controller('sevenArtStoreController', function(){


    this.notViewed = [
        {title: 'Avatar', poster: 'http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//5XPPB44RQGfkBrbJxmtdndKz05n.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
        {title: 'Avatar', poster: 'http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//5XPPB44RQGfkBrbJxmtdndKz05n.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
        {title: 'Avatar', poster: 'http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//5XPPB44RQGfkBrbJxmtdndKz05n.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
        {title: 'Avatar', poster: 'http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//5XPPB44RQGfkBrbJxmtdndKz05n.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
        {title: 'Avatar', poster: 'http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//5XPPB44RQGfkBrbJxmtdndKz05n.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
        {title: 'Avatar', poster: 'http://image.tmdb.org/t/p/w185//kmcqlZGaSh20zpTbuoF0Cdn07dT.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//5XPPB44RQGfkBrbJxmtdndKz05n.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."}
    ];



    this.viewed = [
        {title: 'Rogue One', poster: 'http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', category: "SCI-FI", note: "4", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
        {title: 'Rogue One', poster: 'http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', category: "SCI-FI", note: "4", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
        {title: 'Rogue One', poster: 'http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', category: "SCI-FI", note: "4", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
        {title: 'Rogue One', poster: 'http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', category: "SCI-FI", note: "4", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
        {title: 'Rogue One', poster: 'http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', category: "SCI-FI", note: "4", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
        {title: 'Rogue One', poster: 'http://image.tmdb.org/t/p/w185//qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//tZjVVIYXACV4IIIhXeIM59ytqwS.jpg', category: "SCI-FI", note: "4", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."}
    ];



    this.getArrayNumber = function(num) {
      let foo = [];
      for (let i = 0; i < num; i++) {
         foo.push(i);
      };

     return foo;
    };



    this.currentTab = 0;

      this.tabSelection = function(setTab){
        this.currentTab = setTab;
      };


  });

  app.controller("PanelController", function(){

  });

  app.controller("ViewedController", function(){

  });

  app.controller("NotViewedController", function(){

  });

  app.controller("RecommandedController", function(){
    this.recommandedFilms = [
          {title: 'Django Unchained', poster: 'http://image.tmdb.org/t/p/w185//5WJnxuw41sddupf8cwOxYftuvJG.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//qUcmEqnzIwlwZxSyTf3WliSfAjJ.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
          {title: 'Fight Club', poster: 'http://image.tmdb.org/t/p/w185//adw6Lq9FiC9zjYEpOqfq03ituwp.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//wSJPjqp2AZWQ6REaqkMuXsCIs64.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
          {title: 'Pulp Fiction', poster: 'http://image.tmdb.org/t/p/w185//dM2w364MScsjFf8pfMbaWUcWrR.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//mte63qJaVnoxkkXbHkdFujBnBgd.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
          {title: 'Intouchables', poster: 'http://image.tmdb.org/t/p/w185//4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//ihWaJZCUIon2dXcosjQG2JHJAPN.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
          {title: 'The Life Aquatic', poster: 'http://image.tmdb.org/t/p/w185//kKwNRePEqTfC6DnNlJzz1yX44iR.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//x2EutNySnFRVrjOXsnGyj3HHvf7.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."},
          {title: 'Interstellar', poster: 'http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg', backdrop: 'http://image.tmdb.org/t/p/w185//xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg', category: "SCI-FI", synopsis : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nostrum reprehenderit doloremque soluta nemo voluptatem rem ipsam, harum itaque, architecto totam maiores neque saepe dolor vel dignissimos provident libero culpa."}
      ];

    //   this.shuffleRecommandedArray = function(array){
    //   let pool = [];
    //   let shuffleArray = []
    //   for (let i = 0; i < array.length; i++) {
    //      pool.push(i);
    //   };

    //   for (var i = 0; i < 3; i++) {
    //     let num = Math.floor((Math.random() * 5) - i);
    //     let shufflenum = pool.splice(num, 1);
    //     shuffleArray.push(array[shufflenum]);
    //   };

    //   return shuffleArray;
    // };
  });
})();

