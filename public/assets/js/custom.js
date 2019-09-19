function get_last_updated_time(){
	$.get('/internal_apis/get_last_updated_time',function(data){
		$("#last_updated").html(new Date(data['last_update_time']));
	});
}

function get_Menu_Normal_Item_Desc_HTML(__name, __desc){
	return `
		<section id="`+__name+`-section" class="doc-section">
			<h2 class="section-title">`+__name+`</h2>
			<div class="section-block">
			    <p>`+__desc+`</p>
			</div>
		</section>
	`
}

function get_api_method_color(__api_method){

	//Color combo is w.r.t. swagger 

	if(__api_method.toLowerCase() == "get"){
		return "blue"
	}else if(__api_method.toLowerCase() == "post"){
		return "green"
	}else if(__api_method.toLowerCase() == "put"){
		return "orange"
	}else if(__api_method.toLowerCase() == "delete"){
		return "red"
	}
}

function display_code(__example_code_url, __title, __lang){
	$.ajax({
	  method: "POST",
	  url: "/get-api-example",
	  contentType: "application/json; charset=utf-8",
	  data: JSON.stringify({ code_url: __example_code_url, lang: __lang})
	})
	  .done(function( data ) {
	    $('#code-'+convert_to_html_id(__title)).html(`
			<pre class="full-width language-`+ __lang.toLowerCase() +`">`+data+`</pre>
			`);
	  });
}

function get_lang_names(__title, __langs){
	var str=`<div>`
	for (var i = 0; i < __langs.length; i++) {
		str+=`<button class="btn btn-primary mg" id="`+i+convert_to_html_id(__title)+`-tab" onclick="display_code('`+ __langs[i]['file'] +`', '`+ __title +`', '`+__langs[i]['lang']+`')">`+__langs[i]['lang']+`</button>`
	}
	return str+`</div>`;
}


function convert_to_html_id(s){
		var replace_with = "_";
		return s.replace(/\/|\.|\s|\(|\)|\<|\>|\{|\}|\,|\"|\'|\`|\*|\;|\+|\!|\#|\%|\^|\&|\=|\₹|\$|\@/g,replace_with)
}

function get_example_code_section(__title, __example_codes){

	var count =0;
	
	var _langs = []

	for (var i = 0; i < __example_codes.length; i++) {
		_langs.push(__example_codes[i]['example'])
	}
	return ``
        +	get_lang_names(__title, _langs)
        +	`<pre id="code-`+ convert_to_html_id(__title) +`"></pre>
      `;
}

function get_button(__bool){
	if(!__bool || __bool == undefined){
		return `<button class="btn btn-green">Yes</button>`
	}else{
		return `<button class="btn btn-red">No</button>`
	}
}

function get_type(__parameter_type){
	if(__parameter_type == "header"){
		return `<button class="btn type-header">Header</button>`
	}else if(__parameter_type == "body"){
		return `<button class="btn type-body">Body</button>`
	}else if(__parameter_type == "query"){
		return `<button class="btn type-query">Query</button>`
	}
}

function get_parameter_table(__parameters){
	var str = `<div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Required</th>
                                                    <th>Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>`

    for (var i =0; i < __parameters.length; i++){
    	str+=`<tr>
    	<th scope="row">`+__parameters[i]['parameter']['name']+`</th>
    	<td>`+__parameters[i]['parameter']['desc']+`</td>`+`</th>
    	<td>`+get_button(__parameters[i]['parameter']['optional'])+`</td>`+`</th>
    	<td>`+get_type(__parameters[i]['parameter']['type'])+`</td></tr>`
    }


	return str+`</tbody></table></div>`
}

function get_response_table(__response_codes){
	var str = `<div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Code</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>`

    for (var i =0; i < __response_codes.length; i++){
    	str+=`<tr><th scope="row">`+__response_codes[i]['response']['code']+`</th><td>`+__response_codes[i]['response']['desc']+`</td></tr>`
    }


	return str+`</tbody></table></div>`
}

function get_api_desc_html(__index, __name, __title, __method, __endpoint, __desc, __tutorial_link, __parameters, __response_codes, __req_CT, __res_CT, __example_codes, __index){
	return `<div id="`+ __name +`-` + __index + `"  class="section-block">
            <h3 class="block-title">`+ (__index+1) +`. `+__title+`</h3>
            <p>`+ __desc +`</p>
            <button href="#" class="btn btn-`+ get_api_method_color(__method) +`">`+ __method +`</button>
            <span class="code-block">
                <code>`+__endpoint+`</code>
            </span><!--//code-block-->
            <br><br>
            <b style="color:#ff7f50">Parameters</b> <!--| ContentType: <code>`+__req_CT+`</code> --><br><br>
            `+ get_parameter_table(__parameters) +`
            <br><b style="color: #1abc9c">Responses</b> | ContentType: <code>`+__res_CT+`</code><br><br>
            `+ get_response_table(__response_codes) +`
            <div class="section-block">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h6>Video Tutorial</h6>
                    <!-- 16:9 aspect ratio -->
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="`+__tutorial_link+`" frameborder="0" allowfullscreen=""></iframe>
                    </div>
            </div>
                                </div><!--//row-->
                                </div>
            <div class="code-block">
                <h6>Code example:</h6>
                `+ get_example_code_section(__title,__example_codes) +`
            </div><!--//code-block-->
        </div><!--//section-block-->`
}

function get_Sub_Menu_API_Item_Desc_HTML(__apis, __name){
	// console.log(__apis)
	var str=""
	for(var i=0; i < __apis.length; i++){
		str+=get_api_desc_html(i, __name,__apis[i]['api']['title']
								,__apis[i]['api']['method']
								,__apis[i]['api']['endpoint']
								,__apis[i]['api']['api-desc']
								,__apis[i]['api']['tutorial-link']
								,__apis[i]['api']['parameters']
								,__apis[i]['api']['responses']
								,__apis[i]['api']['request-content-type']
								,__apis[i]['api']['response-content-type']
								,__apis[i]['api']['examples']
								,i);
	}
	return str;
	
}

function get_Menu_API_Item_Desc_HTML(__api_category, __index){
	return `
            <section id="`
            + __api_category['category']['name'] 
            + `-section" 
            class="doc-section">
        	<h2 class="section-title">`
        	+ __api_category['category']['name']
        	+ `</h2>

        	<p>`+ __api_category['category']['desc']+`</p>` 

        	+ get_Sub_Menu_API_Item_Desc_HTML(__api_category['category']['apis'],__api_category['category']['name']) 
        	+ `</section>`;
}

function get_api_sub_menu_items(__name, __apis){
	var resp = ""
	for (var i = 0; i < __apis.length; i++) {
		resp+=`<a class="nav-link scrollto" href="#`+ __name +`-` + i + `">`+ __apis[i]['api']['title']+`</a>`
	}
	return resp;
}

function get_api_menu_item(__api_category){
	// console.log(__api_category)
	var menu_item_title = `<a class="nav-link scrollto" href="#`+__api_category['category']['name']+`-section">`+__api_category['category']['name']+`</a>` 
	var sub_menu_items = `<nav class="doc-sub-menu nav flex-column">`+get_api_sub_menu_items(__api_category['category']['name'], __api_category['category']['apis'])+`</nav><!--//nav-->`
	$('#doc-menu').append(menu_item_title+sub_menu_items);
}

function populate_html_with_normal_items(__categories){
	for (var i = 0; i < __categories.length; i++) {
		var _name = __categories[i]["category"]["name"];
		var _desc = __categories[i]["category"]["desc"];
		$('#doc-menu').append(`<a class="nav-link scrollto" href="#`+ _name +`-section">`+ _name +`</a>`);
		$('#doc-menu-item-desc').append(get_Menu_Normal_Item_Desc_HTML(_name, _desc))
	}
}

function populate_html_with_api_items(__api_categories){
	for (var i = 0; i < __api_categories.length; i++) {
		var _name = __api_categories[i]["category"]["name"];
		var _desc = __api_categories[i]["category"]["desc"];
		$('#doc-menu').append(get_api_menu_item(__api_categories[i]));
		$('#doc-menu-item-desc').append(get_Menu_API_Item_Desc_HTML(__api_categories[i],i))
	}
}


function populate_html_contents(iudx_entity){
	$('title').html('IUDX ' + iudx_entity.toUpperCase() + ' API Doc');
	get_last_updated_time();
	$.get('/internal_apis/get_yaml/'+iudx_entity,function(data){
		// console.log(data)
		
		$('#doc-title').html(data['title']);
		populate_html_with_normal_items(data["categories"])
		populate_html_with_api_items(data["api-categories"])
	});	
}