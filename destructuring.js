function treeCatalogue() {
  const tree = {
    species: 'willow',
    age: 35,
    type: 'deciduous',
    conservationStatus: { endangered: false, ukDistribution: 'widespread' },
  };

  const { species, type: category, location = 'England', conservationStatus: { ukDistribution:dist } } = tree;

  console.log(species);
  console.log(category);
  console.log(location);
  console.log(dist)
}

treeCatalogue();

function flowerCatalogue() {
  const plants = ['sunflower', 'tulips', 'rose'];

  const [  firstPlant,  secondPlant,  thirdPlant ] = plants;
  console.log(firstPlant);
  console.log(secondPlant);
  console.log(thirdPlant);
}

flowerCatalogue()