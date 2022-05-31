mongoose.connect(mySecret);
//console.log(mySecret);

const Schema = mongoose.Schema;

// Create a Person Model
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

let arrayOfPeople = [
  { name: "Scott Rudes", age: "57", favoriteFoods: ['McDonalds', 'Del Taco']},
  { name: "Gary Holliday", age: "78", favoriteFoods: ["Slim Fast", "Air"]},
  { name: "Michelle Stubenhofer", age: "42", favoriteFoods: ['Mexican', 'Chic-Fila']}
];

const createAndSavePerson = (done) => {
  var newPerson = new Person({ 
    name: 'Matt Stubenhofer', 
    age: '37', 
    favoriteFoods: ['Chicken Fried Rice', 'Pork Chops', 'Cottage Cheese', 'Sirloin Steak']});
  newPerson.save(function(err, data) {
    if(err) return console.log(err);
    done(null, data);
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if(err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, found) => {
    if(err) return console.log(err);
    done(null, found);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, found) => {
    if(err) return console.log(err);
    done(null, found);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, found) => {
    if(err) return console.log(err);
    done(null, found);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, modify) => {
    if(err) return console.log(err);
    modify.favoriteFoods.push(foodToAdd);
    modify.save((err, updated) => {
      if(err) return console.log(err);
      done(null, modify);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, modified) => {
    if(err) return console.log(err);
    done(null, modified);
  });
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removed) => {
    if(err) return console.log(err);
    done(null, removed);  
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.deleteMany({name: nameToRemove}, (err, removed) => {
    if(err) return console.log(err);
    done(null, removed);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: foodToSearch})
    .sort({name: 1})
    .limit(2)
    .select({age: 0})
    .exec(function(err, response) {
      if(err) return console.log(err);
      done(null, response);
    });
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
