const insert = (value, val, valyou, valll) => {
    models.Bands.create({
        bandName: value,
        genre: val,
        homeTown: valyou,
        active: valll
    }).then(foo => {
        console.log("Artist Added!")
    });
  };
//Rock
  insert('The Beatles', 'Rock', 'Liverpool', false);
//Hip Hop
  insert('Nas', 'Hip Hop', 'New York', true);
//Pop
  insert('Ariana Grande', 'Pop', 'Florida', true)
//Electronic
  insert('Deadmau5', "Electronic", "Canada", true);
//Alternative
  insert('Nirvana', 'Alternative', 'Seattle', false);