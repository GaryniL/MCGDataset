
// add name to html
function addFilesToHTML(filename,fullname,titlecnt,group,groupID,mode,time){
// 	console.log($('#sk-data-list'));
	
	var divhead = "<div class=\"card-footer text-muted\">";
	
	// Title
	var titleHead = "<hh4 class=\"sk-data-dl-h2\">";
	var titleEnd = "</hh4>";
	var title = titleHead + titlecnt + titleEnd;
// 	G1_U2_MA2A
	
	// content
	// <p>Group：1&emsp;&emsp;Mode：Audio&emsp;&emsp;User：U2&emsp;&emsp;Recored on 2015_08_16</p>
	var cnthead = "<p>";
	var cnt =  mode + "&emsp;&emsp;" + time;
	var cntend = "</p>";
	cnt = cnthead + cnt + cntend;
	
	
	// hyper link
	// <a href="#" class="btn btn-outline-primary sk-data-dl-btn">Download &darr;</a>
	
	var linkhead1 = "<a href=\"";
	
	// Local
// 	var link = "./data/skeleton_data/"+groupID+'/'+fullname;
	// Gary's Server
	var link = "https://dev.garynil.tw/data/Transcription/"+fullname+'.csv';
	
	
	var linkhead2 = " \" class=\"btn btn-outline-primary sk-data-dl-btn\" target=\"_blank\">";
	
	var linkend = "View <i class=\"fa fa-eye\" aria-hidden=\"true\"></i></a>";
	var linkcnt = linkhead1 + link + linkhead2 + linkend ; 
	//end
	var divend = "</div>";
	
	var this_html = divhead+title+cnt+linkcnt+divend;
	$('#verbal-data-list').append(this_html);
}



// process json file name to html format
function processFileNameToListName(filename){
	console.log(filename);
	
	var arr1 = filename.split('.');
	var arr2 = arr1[0].split('_');
	
	var title = arr2[0];
	var gunarr = arr2[0].split('_');
// 	console.log(gunarr);
	var groupID = parseInt(arr2[0].replace("G", ""));
	var group = "Group："+arr2[0].replace("G", "");
// 	console.log(groupID);
	var mode = "Mode："+arr2[1].replace("M", "")[0];
// 	console.log(mode);
	var time = "Recored on "+arr2[3];
// 	console.log(time);
	filename = arr1[0];
	addFilesToHTML(filename,filename,title,group,groupID,mode,time);
}

function listAllFiles(file_arr) {
    for (var index in file_arr) {
// 		console.log(file_arr[index]);
		processFileNameToListName(file_arr[index]);
    }
}

$.getJSON("./data/transcriptionfilelist.json", function(data) {
// 	console.log(data["Files"]);
	var files_array = data.Files;
	listAllFiles(files_array);
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
//     document.body.scrollTop = 0; // For Chrome, Safari and Opera 
//     document.documentElement.scrollTop = 0; // For IE and Firefox
    var body = $("html, body");
	body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
// 	   alert("Finished animating");
	});
}

