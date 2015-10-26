import Backbone from 'backbone';

let PetModel = Backbone.Model.extend({
 
  urlRoot: 'https://api.parse.com/1/classes/pets',

  idAttribute: 'objectId'

});


export default PetModel;