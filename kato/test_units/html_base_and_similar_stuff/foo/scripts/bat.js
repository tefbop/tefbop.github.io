var enable_table_column_alignment = function() {
	$('colgroup').each(function(a_idx, a_elt) {
		let $colgroup = $(a_elt);
		let $table = $colgroup.parent();
		$table
			.find('>tbody>tr>td:lt('+ $colgroup.attr('span')+ ')')
			.css({
				'align': $colgroup.attr('align'),
				'vertical-align': $colgroup.attr('valign'),
			})
		;
	});
};
