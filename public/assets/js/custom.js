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

function display_code(__example_code_url, __title, __lang, __name){
	$.ajax({
	  method: "POST",
	  url: "/get-api-example",
	  contentType: "application/json; charset=utf-8",
	  data: JSON.stringify({ code_url: __example_code_url, lang: __lang})
	})
	  .done(function( data ) {
		  console.log(data)
	    $('#code-'+convert_to_html_id(__title+__name)).html(`
			<pre class="full-width language-`+ __lang.toLowerCase() +`">`+data+`</pre>
			`);
	  });
}

function get_lang_names(__title, __langs, __name){
	var str=`<div>`
	for (var i = 0; i < __langs.length; i++) {
		str+=`<button class="btn btn-primary mg" id="`+i+convert_to_html_id(__title+__name)+`-tab" onclick="display_code('`+ __langs[i]['file'] +`', '`+ __title +`', '`+__langs[i]['lang']+`','`+__name+`')">`+__langs[i]['lang']+`</button>`
	}
	return str+`</div>`;
}


function convert_to_html_id(s){
		var replace_with = "_";
		return s.replace(/\/|\.|\s|\(|\)|\<|\>|\{|\}|\,|\"|\'|\`|\*|\;|\+|\!|\#|\%|\^|\&|\=|\₹|\$|\@/g,replace_with)
}

function get_example_code_section(__title, __example_codes, __name){

	var _langs = []

	for (var i = 0; i < __example_codes.length; i++) {
		_langs.push(__example_codes[i]['example'])
	}
	return ``
        +	get_lang_names(__title, _langs, __name)
        +	`<pre id="code-`+ convert_to_html_id(__title+__name) +`"></pre>
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
	}else if(__parameter_type == "path"){
		return `<button class="btn type-path">Path</button>`
	}
}

function get_request_content_type_parameter_html(__req_CT){
	return `<b style="color:#ff7f50">Parameters</b> <!--| ContentType: <code>`+__req_CT+`</code> --><br><br>`
}

function get_parameter_table(__parameters,__req_CT){
	if (__parameters == undefined || __parameters == null || __parameters.length == 0) {
		return ``;
	}else{
		var str = get_request_content_type_parameter_html(__req_CT)+`<div class="table-responsive">
	                                        <table class="table table-bordered">
	                                            <thead>
	                                                <tr>
	                                                    <th>Key</th>
	                                                    <th>Value</th>
	                                                    <th>Description</th>
	                                                    <th>Required</th>
	                                                    <th>Type</th>
	                                                </tr>
	                                            </thead>
	                                            <tbody>`

	    for (var i =0; i < __parameters.length; i++){
	    	str+=`<tr>
	    	<th scope="row">`+__parameters[i]['parameter']['key']+`</th>
	    	<th scope="row">`+__parameters[i]['parameter']['value']+`</th>
	    	<td>`+__parameters[i]['parameter']['desc']+`</td>`+`</th>
	    	<td>`+get_button(__parameters[i]['parameter']['optional'])+`</td>`+`</th>
	    	<td>`+get_type(__parameters[i]['parameter']['type'])+`</td></tr>`
	    }

		return str+`</tbody></table></div>`
	}
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

function get_video_tutorial_content(__tutorial_link){
	return `<!-- 16:9 aspect ratio -->
	    	<div class="embed-responsive embed-responsive-16by9">
	        	<iframe class="embed-responsive-item" src="`+__tutorial_link+`" frameborder="0" allowfullscreen=""></iframe>
	    	</div>`
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
            `+ get_parameter_table(__parameters,__req_CT) +`
            <br><b style="color: #1abc9c">Responses</b> | ContentType: <code>`+__res_CT+`</code><br><br>
            `+ get_response_table(__response_codes) +`
            <div class="section-block">
		    	<h6>Video Tutorial</h6>
	            <div class="col-md-12 col-12">
	            <div class="row">`+((__tutorial_link == '' || __tutorial_link == undefined) ? '<b style="color: #27ae60">No video link found. Don\'t worry. We are working on it...</b>' : get_video_tutorial_content(__tutorial_link))+`
	            </div>
            </div><!--//row-->
            </div>
            <div class="code-block">
                <h6>Code example:</h6>
                `+ get_example_code_section(__title,__example_codes, __name) +`
            </div><!--//code-block-->
        </div><!--//section-block-->`
}

function get_question_svg(){
	return `<svg class="svg-inline--fa fa-question-circle fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg>`
}

function get_badge_for(__tag){
	if(__tag == undefined){
		return ``
	}else{
		return `<span class="badge badge-success">` + __tag + `</span>`
	}
}

function get_faq_desc_html(__index, __name, __q, __a, __tag){
	return `<div id="`+ __name +`-` + __index + `"  class="section-block">
				<div class="section-block">
                    <h3 class="question">` + get_question_svg() + `<!-- <i class="fas fa-question-circle"></i> -->` + __q + get_badge_for(__tag) + `</h3>
                    <div class="answer">` + __a + `</div>
                </div>
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

function get_Sub_Menu_FAQ_Item_Desc_HTML(__faqs, __name){
	// console.log(__apis)
	var str=""

	if(__faqs == undefined){
		return ``
	}else{
		for(var i=0; i < __faqs.length; i++){
			str+=get_faq_desc_html(i, __name,__faqs[i]['QA']['Q']
									,__faqs[i]['QA']['A']
									,__faqs[i]['QA']['tag']);
		}
		return str;
	}
	
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

function get_Menu_FAQ_Item_Desc_HTML(__faq_category, __index){
	return `
            <section id="`
            + __faq_category['category']['name'] 
            + `-section" 
            class="doc-section">
        	<h2 class="section-title">`
        	+ __faq_category['category']['name']
        	+ `</h2>

        	<p>`+ __faq_category['category']['desc']+`</p>` 

        	+ get_Sub_Menu_FAQ_Item_Desc_HTML(__faq_category['category']['QAs'],__faq_category['category']['name']) 
        	+ `</section>`;
}

function get_api_sub_menu_items(__name, __apis){
	var resp = ""
	for (var i = 0; i < __apis.length; i++) {
		resp+=`<a class="nav-link scrollto" href="#`+ __name +`-` + i + `">`+ __apis[i]['api']['title']+`</a>`
	}
	return resp;
}

function get_faq_sub_menu_items(__faqs){
	var resp = ""
	for (var i = 0; i < __faqs.length; i++) {
		resp+=`<a class="nav-link scrollto" href="#`+ __faqs['__name'] +`-` + i + `"></a>`
	}
	return resp;
}

function get_api_menu_item(__api_category){
	// console.log(__api_category)
	var menu_item_title = `<a class="nav-link scrollto" href="#`+__api_category['category']['name']+`-section">`+__api_category['category']['name']+`</a>` 
	var sub_menu_items = `<nav class="doc-sub-menu nav flex-column">`+get_api_sub_menu_items(__api_category['category']['name'], __api_category['category']['apis'])+`</nav><!--//nav-->`
	$('#doc-menu').append(menu_item_title+sub_menu_items);
}

function get_faq_menu_item(__faq){
	// console.log(__api_category)
	var menu_item_title = `<a class="nav-link scrollto" href="#`+__faq['category']['name']+`-section">`+__faq['category']['name']+`</a>` 
	var sub_menu_items = `<nav class="doc-sub-menu nav flex-column">`+get_faq_sub_menu_items(__faq['category']['name'])+`</nav><!--//nav-->`
	$('#doc-menu').append(menu_item_title);
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

function populate_html_with_faq_items(__faqs){
	for (var i = 0; i < __faqs.length; i++) {
		var _name = __faqs[i]["category"]["name"];
		var _desc = __faqs[i]["category"]["desc"];
		$('#doc-menu').append(get_faq_menu_item(__faqs[i]));
		$('#doc-menu-item-desc').append(get_Menu_FAQ_Item_Desc_HTML(__faqs[i],i))
	}
}


function populate_html_contents(iudx_entity){
	$('title').html('IUDX ' + iudx_entity.toUpperCase() + ' API Doc');
	get_last_updated_time();
	$.get('/internal_apis/get_yaml/'+iudx_entity,function(data){
		//  console.log(data)
		
		$('#doc-title').html(data['title']);
		populate_html_with_faq_items(data["categories"])
		populate_html_with_api_items(data["api-categories"])
	});	
}

function populate_faq_html_contents(iudx_entity){
	$('title').html('IUDX API Doc | FAQs');
	get_last_updated_time();
	$.get('/internal_apis/get_yaml/'+iudx_entity,function(data){
		//  console.log(data)		
		$('#doc-title').html(data['title']);
		populate_html_with_faq_items(data["categories"])
	});	
}