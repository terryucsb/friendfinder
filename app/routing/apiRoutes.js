// friends.js data load
var friends = require("../data/friends.js");


//routing function 
module.exports = function(app) {

	app.get('/api/friends.js', function (req, res) {

		characters.getCurrentCharList()
			.then( (allCharacters)=> res.json(allCharacters) )
			.catch( (err)=> {if (err) console.log(err)} );
	});

	app.post('/api/friends.js', function (req, res){

		characters.matchToCharacter(req.body).then((character)=>{
			res.json(character);
		}).catch((err)=>{if (err) console.log(err);});

	});
}