CsvToHtmlTable.init({
	csv_path: 'data/data_word_and_sentence_counts.csv', 
	element: 'table-container-count', 
	allow_download: false,
	csv_options: {separator: ',', delimiter: '"'},
	datatables_options: {"paging": false,"aaSorting": [[1, 'asc']]}
});
