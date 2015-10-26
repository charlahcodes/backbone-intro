import Backbone from 'backbone';
import PetModel from './pet_model';

let PetsCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/pets',
  model: PetModel,

  parse: function(data) {
    return data.results;
  }
});

export default PetsCollection;