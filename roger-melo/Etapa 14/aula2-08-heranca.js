class Mammal {
  constructor (species, name, age) {
    this.species = species
    this.name = name
    this.age = age
    this.mamaryGland = true
  }

  incrementAge () {
    this.age++
  }
}

class Lion extends Mammal {
  constructor (species, name, age, manEater) {
    // super invoca o contructor da classe mae
    super(species, name, age)
    this.manEater = this.manEater
  }

  eatZebras (animals) {
    return animals.filter(animal => animal.species !== 'zebra')
  }
}

const zeca =  new Mammal('zebra', 'Zeca', 6)
const pompel = new Mammal('gnu', 'Pompeu', 5)
const angus =  new Mammal('cavalo', 'Angus', 3)

const mufasa =  new Lion('leao', 'mufasa', 4, false)

const animals = [zeca, pompel, angus]

console.log(mufasa.eatZebras(animals))