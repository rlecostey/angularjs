var myApp = angular.module('Webmail', [ 'ngSanitize' ]);
myApp.controller("WebmailCtrl", function($scope, $location, $filter) {

  $scope.repositories = [
    { value: "RECEPTION", label: 'Boite de réception', emails: [
      { id: 1, from: "Albator", to: "Rudy", subject: "Je reviens", date: new Date(2012, 2, 20, 15, 30), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
      { id: 2, from: "Capitaine Flam", to: "Rudy", subject: "Bisous de l'espace", date: new Date(2014, 3, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
      { id: 3, from: "Pikachu", to: "Rudy", subject: "Pika pika !", date: new Date(2014, 2, 15, 16, 12), content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika." },
      { id: 4, from: "Barbapapa", to: "Rudy", subject: "Hulahup Barbatruc", date: new Date(2014, 2, 15, 14, 15), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
    ]  },
    { value: "ARCHIVES", label: "Archives", emails: [
      { id: 5, from: "Candy", to: "Rudy", subject: "Bon anniversaire", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
      { id: 6, from: "Hiro Nakamura", to: "Rudy", subject: "Konichiwa", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
      { id: 7, from: "Asuka Langley Soryu", to: "Rudy", subject: "Ca va chier", date: new Date(2014, 2, 15, 17, 50), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." }
    ]  },
    { value: "ENVOYES", label: "Envoyés", emails: [
      { id: 8, from: "Rudy", to: "Albator", subject: "Bien la famille ?", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
      { id: 9, from: "Rudy", to: "Capitaine Flam", subject: "Gloubiboulga Night", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
    ] },
    { value: "SPAM", label: "Courrier indésirable", emails: [
      { id: 10, from: "Rue du discount", to: "Rudy", subject: "Envie d'un nouveau frigo ?", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
      { id: 11, from: "Sofinnoga", to: "Rudy", subject: "Besoin d'argent ?", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
    ] }
  ];

  $scope.nextMailId = 12;
  $scope.currentRepository = null;
  $scope.selectedEmail = null;

  $scope.repositorySelection = function(repository){
    $scope.currentRepository = repository;
    $scope.selectedEmail = null;
    if (repository) {
      $scope.newMail = null;
    }
  }

  $scope.emailSelection = function(email){
    $scope.selectedEmail = email;
  }

  $scope.toEmail = function(repository, email){
    $location.path(repository.value + "/" + email.id)
  }

  // Sorting
  $scope.sortingColumn = null;
  $scope.sortingDsc = false;
  $scope.emailSorting = function(column){
    if ($scope.sortingColumn == column){
      $scope.sortingDsc = !$scope.sortingDsc;
    } else {
      $scope.sortingColumn = column;
      $scope.sortingDsc = false;
    }

  }


  // Search
  $scope.search = "";
  $scope.removeSearchField = function(){
    $scope.search = "";
  }

  // Email Creation
  $scope.newMail = null;

  $scope.removeNewMail = function(){
    $scope.newMail = {
      from: "Rudy",
      date: new Date()
    };
  }

  $scope.sendEmail = function(){
    $scope.repositories.forEach(function(item) {
      if (item.value == "ENVOYES") {
        $scope.newMail.id = $scope.nextMailId;
        item.emails.push($scope.newMail);
        $scope.newMail = null;
        $location.path("/");
      }
    })
  }


  // Navigation
  $scope.$watch(function() {
    return $location.path();
  }, function(newPath){
    var arrayPath = newPath.split("/");
    if (arrayPath.length > 1) {
      if (arrayPath[1] == "newMail"){
        $scope.removeNewMail();
        $scope.repositorySelection(null);
      }
      var repositoryValue = arrayPath[1];
      $scope.repositories.forEach(function(item) {
        if (item.value == repositoryValue) {
          $scope.repositorySelection(item);
        }
      });
      if (arrayPath.length > 2) {
        var idMail = arrayPath[2];
        $scope.currentRepository.emails.forEach(function(item) {
          if (item.id == idMail) {
            $scope.emailSelection(item);
          }
        });
      }
    }
  });


})
.filter("highlightingSearch", function(){
  return function(input, search){
    if (search) {
      return input.replace(new RegExp("(" + search + ")", "gi"), "<span class='highlightingSearch'>$1</span>");
    }
    return input
  }
});
