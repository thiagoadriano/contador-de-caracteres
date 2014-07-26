/*!
 * jQuery Counter Plugin 
 * Copyright (c) 2013 Thiago Adriano
 * Version: 1.0.1 (23-JUL-2014)
 * Requires: jQuery v1.10.1 or later
 */

; (function ($) {
    $.fn.counter = function (config) {

        //configurações padrões do plugin
        var settings = $.extend({
            corDestaque  : "red",
            limite       : 200,
            txtContador  : "Total de Caracteres: ",
            txtLimite    : "Limite Atingido!",
            posicao      :"up"
        }, config);

        return this.each(function () {

            //retorna id para adicionar tags com contadores únicos
            var id = $(this).attr('id'),
                counter = '<p class="counter" id="counter_' + id + '">' + settings.txtContador + '<span id="count_' + id + '">' + settings.limite + '</span></p>';

            //coloca o contador acima do elemento chamado
            if (settings.posicao === "down") {
                $(this).after(counter);
            } else {
                $(this).before(counter);
            }
            

            var contador = $('#count_' + id),
                color = contador.css('color');

            $(this).on('keyup', function () {
                var elValue = $(this).val(),
                    elQtd = elValue.length,
                    qtdAtual = settings.limite - elQtd;

                contador.text(qtdAtual); //atualiza o span counter

                if (elQtd >= settings.limite) {
                    elValue = $(this).val(elValue.substr(0, settings.limite));
                    contador.text(settings.txtLimite);
                } else {
                    contador.text(qtdAtual);
                }

                if (qtdAtual <= 10) {
                    contador.css('color', settings.corDestaque);
                } else {
                    contador.css('color', color);
                }
            }); //fechamento da funcao keyup
        }); //fechamento do return / each

    }

})(jQuery);