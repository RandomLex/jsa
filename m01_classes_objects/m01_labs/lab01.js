let Image = function (name, artist, year) {
  this.name = name;
  this.artist = artist;
  this.year = year;
  this.getName = function () {
    return this.name
  };
  this.display = function () {
    return `${this.name}, ${this.artist}, ${this.year}`;
  }
}




let images1 = [
  new Image("Mona Lisa", "Leonardo da Vinci", 1503),
  new Image("The Starry Night", "Vincent van Gogh", 1889),
  new Image("The Scream", "Edvard Munch", 1893),
  new Image("Guernica", "Pablo Picasso", 1937),
  new Image("The Persistence of Memory", "Salvador Dali", 1931),
  new Image("The Last Supper", "Leonardo da Vinci", 1495),
  new Image("The Night Watch", "Rembrandt", 1642),
  new Image("Las Meninas", "Diego Velazquez", 1656),
  new Image("The Birth of Venus", "Sandro Botticelli", 1486),
  new Image("The Creation of Adam", "Michelangelo", 1512)
];

let displayImages = function (images) {
  for (const element of images) {
    console.log(element.display());
  }
}

displayImages(images1);

console.log("--------------------");
let getImage = function (name, artist, year) {
  return {
    name: name,
    artist: artist,
    year: year,
    getName: function () {
      return this.name
    },
    display: function () {
      return `${this.name}, ${this.artist}, ${this.year}`;
    }
  }
}


let images2 = images1.map(image => getImage(image.name, image.artist, image.year)); //NOSONAR
displayImages(images2);

console.log("--------------------");
let images3 = {
  list: [],
  contains(name) {
    for (const element of this.list) {
      if (element.name === name) return true;
    }
    return false;
  },
  add(name, artist, year) {
    if (!this.contains(name)) {
      this.list.push(new Image(name, artist, year));
    }
  },
  show() {
    for (const image of this.list) {
      console.log(image.display());
    }
  },
  edit(name, artist, year) {
    for (const image of this.list) {
      if (name === image.name) {
        image.artist = artist;
        image.year = year;
        break;
      }
    }
  },
  delete(name) {
    for (let i = 0; i < this.list.length; i++){
      const image = this.list[i];
      if (name === image.name) {
        this.list.splice(i, 1);
      }
    }
  },
  clear() {
    this.list = [];
  }
}

images3.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images3.add('The Last Supper', 'Leonardo da Vinci', 1495);
images3.add('The Starry Night', 'Vincent van Gogh', 1889);
images3.add('Mona Lisa', 'Leonardo da Vinci', 1503);
console.log('lab')
images3.show(); // 3 images
images3.clear();
images3.show(); // empty

console.log("-------------------");
images3.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images3.add('The Last Supper', 'Leonardo da Vinci', 1495);
images3.add('The Starry Night', 'Vincent van Gogh', 1889);
images3.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images3.delete('The Last Supper');
images3.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)
