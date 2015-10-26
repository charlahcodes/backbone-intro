import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

const APP_ID = 'GMDbrmoxiumbc72lrOVmUSkIXNMt2fhCgnZIjZrj';
const API_KEY = 'zGfSMd4NZjdGYZvbXd1li0vEu0yDfOLNcTebxqLv';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});

import PetsCollection from './pets_collection';
import PetTemplate from './pet_template';

(function() {

  let pets = new PetsCollection();

  function renderPets() {
    let $container = $('<div id="container"></div>');
    
    pets.each(function(pet) {
      let data = pet.toJSON();
      let templateString = PetTemplate(data);
      let $petContainer = $(templateString);
      $container.append($petContainer);
    });

    $('body').html($container);
  };

  pets.fetch().then(renderPets);

}());



