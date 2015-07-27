$(function(){
    $("ol.taskList a").click(function(evt){

        var $this = $(this);
        var url = $this.attr("href");
        $.ajax({
            url : url,
            method : 'get',
            contentType : 'application/json',
            success : function(response){
                $this.parent().toggleClass("completed", response.isCompleted);
            }
        });
        evt.preventDefault();
    });
})
