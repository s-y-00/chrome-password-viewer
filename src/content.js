$(function(){
    $("a").each(function(){
        var value = $(this).html();
        
        if(!value) {
            return true;
        }
        
        if(value.indexOf('Symfoware') == -1) {
            return true;
        }
        
        $(this).html('ここだよ！：' + value);
        console.log(value);
    });
});
