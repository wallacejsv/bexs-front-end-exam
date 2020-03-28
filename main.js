(function($){
    'use strict';
    window.$ = jQuery;

    $(document).on('ready', function(){
        window.$ = jQuery;
        var t, m, y = null;
        $('.input-cart-number').on('keyup change', function(){

            t = $(this);
            console.log(t.val());

            if (t.val().length > 3) {
                t.next().focus();
            }

            var card_number = '';
            $('.input-cart-number').each(function(){
                card_number += $(this).val() + ' ';
                if ($(this).val().length == 4) {
                    $(this).next().focus();
                }
            })

            $('.credit-card-box .number').html(card_number);
        });

        $('#card-holder').on('keyup change', function(){
            t = $(this);
            $('.credit-card-box .card-holder div').html(t.val());
        });

        $('#card-holder').on('keyup change', function(){
            t = $(this);
            $('.credit-card-box .card-holder div').html(t.val());
        });

        $('#card-expiration-month, #card-expiration-year').change(function(){
            m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
            m = (m < 10) ? '0' + m : m;
            y = $('#card-expiration-year').val().substr(2,2);
            $('.card-expiration-date div').html(m + '/' + y);
        })

        $('#card-ccv').on('focus', function(){
            $('.credit-card-box').addClass('hover');
        }).on('blur', function(){
            $('.credit-card-box').removeClass('hover');
        }).on('keyup change', function(){
            $('.ccv div').html($(this).val());
        });

        $('#form-for').submit(function(e) {
            e.preventDefault();
           var serialize_form = $('#form-for').serialize();
           $.ajax({
               url: '/',
               type: 'GET',
               data: serialize_form,
               beforeSend: function() {
                   console.log('carregando...');
               },
               success: function(data, textStatus) {
                   alert(textStatus);
               },
               error: function(xhr, er) {
                   console.log('error!!!');
               }
           })
        });
    });
}(jQuery))