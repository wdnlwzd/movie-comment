$(function() {
	$(".delCategory").click(function(e) {
		var target = $(e.target);
		var id = target.data("id");
		var tr = $(".item-id-"+id);
		$.ajax({
			type: 'DELETE',
			url: "/admin/movie/category/list?id=" +id,
			async: true,
			success: function(data) {
				//console.log(data);
				if (tr.length > 0) {
					tr.remove();
				}
			},
			error: function() {
				console.log('请求出错!')
			}
		});
	});

	$(".updateCategory").click(function(e) {
		var target = $(e.target);
		var id = target.data("id");
    console.log('idididid:',id);
		 $.ajax({
      type: 'GET',
      url: "/admin/category/update/"+id,
      async: true,
      success: function(data, status) {
      	console.log('datadata:',data);
      	$("#move-windows").html(data);
      }
    });
	});
});
