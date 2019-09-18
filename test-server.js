const logger = require('node-color-log');
const engine = require('consolidate');
const express = require('express')
const moment = require('moment');
const YAML = require('yaml')
const http = require('http')
const fs = require('fs');
const app = express()

// https://prismjs.com/
const prism = require('prismjs');
const loadComponents = require('prismjs/components/');
loadComponents(['java','c','cpp','python','groovy','ruby', 'javascript']);


//Functions
function log(color, msg){
    logger.color(color).log(msg)
}

function get_highlighted_code(code, lang){
	lang = lang.toLowerCase()
	if(lang == "java"){
		return Prism.highlight(code, Prism.languages.java, lang);
	}else if(lang == "c"){
		return Prism.highlight(code, Prism.languages.c, lang);
	}else if(lang == "cpp"){
		return Prism.highlight(code, Prism.languages.cpp, lang);
	}else if(lang == "python"){
		return Prism.highlight(code, Prism.languages.python, lang);
	}else if(lang == "groovy"){
		return Prism.highlight(code, Prism.languages.groovy, lang);
	}else if(lang == "ruby"){
		return Prism.highlight(code, Prism.languages.ruby, lang);
	}else if(lang == "javascript"){
		return Prism.highlight(code, Prism.languages.javascript, lang);
	}
}

const last_updated_time_json_file="last_updated_time.json"

//Status codes
const __HTTP_200_OK__ = 200

app.use('/static', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

//Routes
app.get('/', (req, res) => {
    res.status(__HTTP_200_OK__).sendFile('public/index.html', {root: __dirname })
})

app.get('/:iudxEntity', (req, res) => {
	res.status(__HTTP_200_OK__).render(__dirname + "/views/index.html", {iudx_entity:req.params.iudxEntity})
})

app.get('/internal_apis/get_last_updated_time', (req, res) => {
    res.status(__HTTP_200_OK__).sendFile(last_updated_time_json_file, {root: __dirname })
});

app.post('/get-api-example', (req, res) => {
	fs.readFile("./"+req.body.code_url, "utf8", function (err, data) {
		if (err) throw err;
	  // console.log(data);
      res.status(__HTTP_200_OK__).send(get_highlighted_code(data, req.body.lang))
	});
});

app.get('/internal_apis/get_yaml/:iudxEntity', (req, res) => {
	const doc_yaml_file = fs.readFileSync('yaml/'+req.params.iudxEntity+'.yaml', 'utf8')
	let doc_yaml = YAML.parse(doc_yaml_file);
    res.status(__HTTP_200_OK__).send(doc_yaml);
});



// For getting last updated time, i.e. server restart time
var last_updated_time={"last_update_time": moment().format()};
fs.writeFile(last_updated_time_json_file, JSON.stringify(last_updated_time));

log("yellow","Running test server...")
const port = 19443
app.listen(port, () => console.log(`Server is listening on port ${port}!`))