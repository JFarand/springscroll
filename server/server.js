const express = require('express');
const path = require('path');
const htmlPath = path.join(__dirname, '../html');
const partialsPath = path.join(__dirname, '../views/partials');
const cors = require('cors');
const hbs = require('hbs');


var app = express();

hbs.registerPartials(partialsPath);
app.set('view engine', 'hbs');
app.use(express.static(htmlPath));
app.use(cors());

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

var renderObject = {
	pageTitle: 'Blog About Ideas',
	lede: 'Just A Lede'
}

var  califolk = {
	people: [
	{"name": "Adams", "first": "Ansel", "profession": "photographer", "born":"San Franciso"},
	{"name": "Sig", "first": "Craig", "profession": "rapper", "born":"Alton Park"},
	{"name": "Sald", "first": "Jalessa", "profession": "dj", "born":"Leuders park"},
	{"name": "Dre", "first": "Kadijah", "profession": "producer", "born":"Bay Area"}
	]
};

app.get('/', (req, res) => {
	res.send('Front Page Of Application');
});

app.get('/testcors', (req, res) => {
	res.send({
		trust: "none",
		persist: "always"
	});
});

app.get('/calforniapeople', (req, res) => {
	res.render('cali.hbs', califolk)
});

app.get('/blog', (req, res) => {
	res.render('blog.hbs', renderObject);
});


app.post('/publish', (req, res) => {

});

app.listen(3000, () => {
	console.log('This server is serving over on port 3000');
});