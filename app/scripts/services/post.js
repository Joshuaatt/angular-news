'use strict';

app.factory('Post', function($resource) {
  return $resource('https://vivid-torch-4847.firebaseio.com/posts/:id.json');
});
