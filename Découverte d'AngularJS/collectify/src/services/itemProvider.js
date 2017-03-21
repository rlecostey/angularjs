'use strict'

var items = [
  {'name': "Django Unchained", 'category_id': 1},
  {'name': "Forest Gump", 'category_id': 1},
  {'name': "Snarky Puppy", 'category_id': 2},
  {'name': "Julian Lage", 'category_id': 2}
];

app.service('itemProvider', function() {
  this.getItems = function() {
    return items;
  }

  this.create = function(item) {
    items.push(item);
    return items;
  }
});
