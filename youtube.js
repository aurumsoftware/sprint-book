var calendar = '<div class="container"><div class="row"><div class="span12"><table class="table-calendar table-condensed table-bordered table-striped"><thead><tr><th colspan="7"><span class="btn-group"><a class="btn"><i class="icon-chevron-left"></i></a><a class="btn active">Dezembro 2018</a><a class="btn"><i class="icon-chevron-right"></i></a></span></th></tr><tr><th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th></tr></thead><tbody><tr><td class="muted">29</td><td class="muted">30</td><td class="muted">31</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr><tr><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td></tr><tr><td>19</td><td >20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td></tr><tr><td>26</td><td>27</td><td>28</td><td>29</td><td class="muted">1</td><td class="muted">2</td><td class="muted">3</td></tr></tbody></table></div></div></div>';
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
                    $($(textos[index])[0]).html(calendar);
                    // $('[data-toggle="datepicker"]').datepicker();
                }   
            }
        }       
    });

    $('body').on('click','td',function(){
        $("td").removeClass("btn-primary");
        $(this).addClass("btn-primary");
    });
});