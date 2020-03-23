const logger = require('node-color-log');
const engine = require('consolidate');
const express = require('express')
const moment = require('moment');
const https = require('https')
const YAML = require('yaml')
const fs = require('fs');
const app = express()

const cluster = require('cluster');
const numCPUs = require('os').cpus().length; 

var pemtools = require('pemtools')
const opts = { key: fs.readFileSync('key.pem')
             , cert: fs.readFileSync('cert.pem'), passphrase: 'password'
             // , requestCert: true
             // , rejectUnauthorized: false
             // , ca: [ fs.readFileSync('./cert/ca.crt') ]
             }

// https://prismjs.com/
const prism = require('prismjs');
const loadComponents = require('prismjs/components/');
loadComponents(['java','c','cpp','python','groovy','ruby', 'javascript', 'php','go', 'bash']);


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
	}else if(lang == "php"){
		return Prism.highlight(code, Prism.languages.php, lang);
	}else if(lang == "go"){
		return Prism.highlight(code, Prism.languages.go, lang);
	}else if(lang == "curl"){
		return Prism.highlight(code, Prism.languages.bash, lang);
	}
}

function send404(res){
	res.status(__HTTP_404__['code']).sendFile('public/404.html', {root: __dirname });
}

const last_updated_time_json_file="last_updated_time.json"
const IUDX_ENTITIES = ['cat', 'auth', 'rs']

//Status codes
const __HTTP_200__ = {'code':200, 'msg': 'Success!!!'}
const __HTTP_404__ = {'code':404, 'msg': '404! Not found!!!'}

app.use('/static', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

//Routes
app.get('/', (req, res) => {
    res.status(__HTTP_200__['code']).sendFile('public/home.html', {root: __dirname })
})

app.get('/faq', (req, res) => {
    res.status(__HTTP_200__['code']).sendFile('public/faq.html', {root: __dirname })
})

app.get('/:iudxEntity', (req, res) => {
	if(IUDX_ENTITIES.includes(req.params.iudxEntity)){
		res.status(__HTTP_200__['code']).render(__dirname + "/views/index.html", {iudx_entity:req.params.iudxEntity})
	}else{
		send404(res);
	}
})

app.get('/internal_apis/get_last_updated_time', (req, res) => {
    res.status(__HTTP_200__['code']).sendFile(last_updated_time_json_file, {root: __dirname })
});

app.post('/get-api-example', (req, res) => {
	
	fs.readFile("./"+req.body.code_url, "utf8", function (err, data) {
        
	        if (err){

                        res.status(__HTTP_200__['code']).send("<span style='color:red'>Sorry, No code found. We will be uploading it soon.</span>")

                        }
		else{

                res.status(__HTTP_200__['code']).send(get_highlighted_code(data, req.body.lang))

		}

	});
});

app.get('/internal_apis/get_yaml/:iudxEntity', (req, res) => {
	const doc_yaml_file = fs.readFileSync('yaml/'+req.params.iudxEntity+'.yaml', 'utf8')
	let doc_yaml = YAML.parse(doc_yaml_file);
    res.status(__HTTP_200__['code']).send(doc_yaml);
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
	send404(res);
});

// For getting last updated time, i.e. server restart time
var last_updated_time={"last_update_time": moment().format()};
fs.writeFileSync(last_updated_time_json_file, JSON.stringify(last_updated_time), 'utf8');

log("green","Running production server...")
const port = 443
var server = https.createServer(opts, app);

if (cluster.isMaster) {

  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {

server.listen(port, function(){
        log('cyan', `Server is listening on port ${port}!`)
});

}

