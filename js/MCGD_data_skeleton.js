
// add name to html
function addFilesToHTML(filename,fullname,titlecnt,group,groupID,mode,user,time){
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
	var cnt = group + "&emsp;&emsp;" + mode + "&emsp;&emsp;" + user + "&emsp;&emsp;" + time;
	var cntend = "</p>";
	cnt = cnthead + cnt + cntend;
	
	
	// hyper link
	// <a href="#" class="btn btn-outline-primary sk-data-dl-btn">Download &darr;</a>
	
	var linkhead1 = "<a href=\"";
	var link = "./data/skeleton_data/"+groupID+'/'+fullname;
	var linkhead2 = " \" class=\"btn btn-outline-primary sk-data-dl-btn\">";
	
	var linkend = "View <i class=\"fa fa-eye\" aria-hidden=\"true\"></i></a>";
	var linkcnt = linkhead1 + link + linkhead2 + linkend ; 
	//end
	var divend = "</div>";
	
	var this_html = divhead+title+cnt+linkcnt+divend;
	$('#sk-data-list').append(this_html);
}



// process json file name to html format
function processFileNameToListName(filename){
// 	console.log(filename);
	
	var arr1 = filename.split('.');
	var arr2 = arr1[0].split('#');
	
	var title = arr2[0];
	var gunarr = arr2[0].split('_');
// 	console.log(gunarr);
	var groupID = gunarr[0];
	var group = "Group："+gunarr[0].replace("G", "");
// 	console.log(group);
	var user = "User："+gunarr[1];
// 	console.log(user);
	var mode = "Mode："+gunarr[2].replace("M", "")[0];
// 	console.log(mode);
	var time = "Recored on "+arr2[1].split('T')[0];
// 	console.log(time);
	filename = filename.replace("#", "%23");
	addFilesToHTML(filename,filename,title,group,groupID,mode,user,time);
}

function listAllFiles(file_arr) {
    for (var index in file_arr) {
// 		console.log(file_arr[index]);
		processFileNameToListName(file_arr[index]);
    }
}

$.getJSON("./data/skeleton_data/skeleton-data-files.json", function(data) {
// 	console.log(data["Files"]);
	var files_array = data.Files;
	listAllFiles(files_array);
});





/*
$( document ).ready(function() {

});
*/