$( document ).ready(function() {
    $("#chatlioWidgetPlaceholder").bind("DOMNodeInserted",function(){
        var textos = $(this).find("span.chatlio-message-body-text");
        if(textos.length > 0){
            for (let index = 0; index < textos.length; index++) {
                if($($(textos[index])[0]).text().startsWith("https://www.youtube.com")){
                    $($(textos[index])[0]).html('<iframe width="500"  height="281" src="'+ $($(textos[index])[0]).text() +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                }   
            }
        }       
    });


    $("#chatlioWidgetPlaceholder").bind("DOMNodeInserted",function(){
        var textos = $(this).find("span.chatlio-message-body-text");
        if(textos.length > 0){
            for (let index = 0; index < textos.length; index++) {
                if($($(textos[index])[0]).text().startsWith("datepicker")){
                    $($(textos[index])[0]).html('insere um datepicker aqui');
                }   
            }
        }       
    });
});