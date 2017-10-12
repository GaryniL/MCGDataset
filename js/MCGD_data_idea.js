CsvToHtmlTable.init({
	csv_path: 'data/data_idea.csv', 
	element: 'table-container-count', 
	allow_download: false,
	csv_options: {separator: ',', delimiter: '"'},
	datatables_options: {"paging": false,"aaSorting": [[1, 'asc']]}
});