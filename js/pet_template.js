
function PetTemplate(data) {

  var pronoun;
  var age;
  var icon;

  if (data.gender === 'f') {
    pronoun = 'Her';
    icon = '<i class="fa fa-venus"></i>';
  } else {
    pronoun = 'His';
    icon = '<i class="fa fa-mars"></i>';
  };

  if (data.age < 2) {
    age = 'year';
  } else {
    age = 'years'
  };

  return `
  <div class="petContainer">${icon} ${data.name} is ${data.age} ${age} old and is a ${data.species}.  ${pronoun} favorite food is ${data.favoritefood}.</div>
  `;
  };

export default PetTemplate;