CsvToHtmlTable.init({
	csv_path: 'data/unitmotion/data_unitmotion_count.csv', 
	element: 'table-container-count', 
	allow_download: false,
	csv_options: {separator: ',', delimiter: '"'},
	datatables_options: {"paging": false,"aaSorting": [[1, 'asc']]}
});

CsvToHtmlTable.init({
	csv_path: 'data/unitmotion/data_unitmotion_time.csv', 
	element: 'table-container-time', 
	allow_download: false,
	csv_options: {separator: ',', delimiter: '"'},
	datatables_options: {"paging": false}
});