angular.module('app').factory('ngAlert', function () {
    var Alert = function (e, t, r) {
        var l, n = "",
            A = "2000",
            o = $("#GesProAlert_Conteiner");
        "" != r && (n = "<div class='Alert-Imagem " + r + "'></div>"), l = $('<div class="GesProAlert Alert-' + t + '"><div class="GesProAlert_Posiciona"><br /></div>' + e + n + "</div>").fadeIn("fast"), o.append(l), l.on("click", function () {
            AlertX($(this));
        }),

        setTimeout(function () {
            AlertX(l);
        }, A);
    }
    function AlertX(e) {
        "undefined" != typeof e ? e.fadeOut("fast", function () {
            $(this).remove()
        }) : $(".GesProAlert").fadeOut("fast", function () {
            $(this).remove();
        });
    }

    function Alert_Sucess(e) {
        Alert(e, "Verde", "Alert-Sucesso");
    }
    function Alert_Error(e) {
        Alert(e, "Vermelho", "Alert-Atencao");
    }
    function Alert_Attention(e) {
        Alert(e, "Amarelo", "Alert-Exclamacao");
    }
    function Alert_Neutro(e) {
        Alert(e, "Azul", "Alert-Dialogo");
    }
    return {
        Alert: Alert,
        Alert_Sucess: Alert_Sucess,
        Alert_Neutro: Alert_Neutro,
        Alert_Attention: Alert_Attention,
        Alert_Error: Alert_Error
    };
});


