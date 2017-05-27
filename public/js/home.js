function carrossel() {
    $('.carrossel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
}

$(function() {
    getCursos();
});

function getCursos() {
    $.get('https://cefis.com.br/api/v1/event', function (retorno) {
            $.each(retorno.data, function (key, value) {

                if ($("#" + value.category).length == 0) {
                    $("#videos").append(
                        $(document.createElement('div')).attr("id",value.category).addClass("div_carrossel").append(
                            $(document.createElement('h1')).addClass("video").text(value.category),
                            $(document.createElement('div')).addClass("carrossel").attr("id",value.category + "_carrossel").append(
                                $(document.createElement('div')).append(
                                    $(document.createElement('a')).attr("onclick","getCursoEspecifico("+value.id+")").attr("data-toggle","modal").attr("data-target","#modal_"+value.id).append(
                                        $(document.createElement('img')).addClass('banner').attr('src', value.banner)
                                    )
                                    ,$(document.createElement('p')).addClass('video').text(value.title))
                            )
                        )
                    );

                    $("#nav-apendice").before(
                        $(document.createElement('a')).addClass("scroll-link button-1").attr("href","#" + value.category).text(value.category)
                    );

                } else {
                    $("#" + value.category + "_carrossel").append(
                        $(document.createElement('div')).append(
                            $(document.createElement('a')).attr("onclick","getCursoEspecifico("+value.id+")").attr("data-toggle","modal").attr("data-target","#modal_"+value.id).append(
                                $(document.createElement('img')).addClass('banner').attr('src', value.banner)
                            )
                            ,$(document.createElement('p')).addClass('video').text(value.title))
                    );
                }

                $("#modal").after(
                    $(document.createElement('div')).addClass("modal fade").attr("id","modal_"+value.id).attr("role","dialog").attr("aria-labelledby","modal_"+value.id+"Label")
                );

            });
    carrossel();
    });
}

function getCursoEspecifico(curso) {

    $.get('https://cefis.com.br/api/v1/event/'+curso+'?include=classes', function (retorno) {
        var value = retorno.data;
        $("#modal_"+curso).empty();
        $("#modal_"+curso).append(
            $(document.createElement('div')).addClass("modal-dialog modal-lg").append(
                $(document.createElement('div')).addClass("modal-content").append(
                    $(document.createElement('div')).addClass("modal-header").append(

                        $(document.createElement('button')).addClass("close").attr("data-dismiss","modal").attr("aria-label","Close").attr("type","button").append(
                            $(document.createElement('span')).attr("aria-hidden","true").text("x")
                        ),
                        $(document.createElement('h4')).addClass("modal-title").text(value.title)
                    ),
                    $(document.createElement('div')).addClass("modal-body").append(
                        $(document.createElement('div')).addClass("container-fluid").append(
                            $(document.createElement('div')).addClass("row").append(
                                $(document.createElement('img')).addClass("modal-foto col-sm-4").attr('src', value.banner),
                                $(document.createElement('div')).addClass("modal-title col-sm-8").append(
                                    $(document.createElement('p')).attr("align","left").text("Professor(a) : " + value.teachers_names),
                                    $(document.createElement('p')).attr("align","left").text("Subtítulo : " + value.subtitle),
                                    $(document.createElement('h4')).attr("align","center").text("Resumo"),
                                    $(document.createElement('p')).attr("align","left").text(value.resume)
                                )
                            ),
                            $(document.createElement('div')).addClass("row").append(
                                $(document.createElement('div')).addClass("modal-aulhas col-sm-12").append(
                                    $(document.createElement('h4')).attr("align","center").text("Aulas"),
                                    $(document.createElement('table')).addClass("table table-bordered table-striped").attr("id","aulas_"+curso).append(
                                        $(document.createElement('tr')).append(
                                            $(document.createElement('th')).attr("width","90%").text("Título"),
                                            $(document.createElement('th')).attr("width","10%").text("Assistir")
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );

        $.each(value.classes, function (key,aula) {
            $("#aulas_"+curso).append(
                $(document.createElement('tr')).append(
                    $(document.createElement('td')).text(aula.title),
                    $(document.createElement('td')).attr('align','center').append(
                        $(document.createElement('a')).addClass("btn btn-success").attr("type","button").attr("href",aula.video.mp4).attr("target","_blank").append(
                            $(document.createElement('i')).addClass("icon-play")
                        )
                    )
                )
            )
        })
    });
}


