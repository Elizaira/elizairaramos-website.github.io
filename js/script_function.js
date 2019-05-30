    // <script> 
    /*----burger menu----*/
        $(document).ready(function(){
            var identifier = false;
            $('#hamburger').on('click',function(){
                if(identifier == false){
                    $('.navbar-nav').css('display','block');
                    $('.navbar-nav li').css('float','none');
                    identifier = true;
                }
                else{
                    $('.navbar-nav').css('display','none');
                    identifier = false;
                }
            });
        });
    // </script>
    //     <script>
        $(document).ready(function(){
            var identifier = false;
            $('#burger').on('click',function(){
                if(identifier == false){
                    $('.navigation-nav').css('display','block');
                    $('.navigation-nav li').css('float','none');
                    identifier = true;
                }
                else{
                    $('.navigation-nav').css('display','none');
                    identifier = false;
                }
            });
        });
// </script>
// <script>
       /*----tab section----*/
    $(document).ready(function(e){
   $('#equal_sign').click(function(){
        $('#content').toggle();
        e.stopPropagation();
        $('hide-menu').toggleClass('show-menu');
    });
   $('#click-me1').click(function(){
        $('#tab-content1').show();
        $('#tab-content2').hide();
        $('#tab-content3').hide();
        $('#click-me1').css({
            'color':'white',
            'background-color':'#4ec9b0',
            'padding':'21px',
            'margin': '0',
        });
        $('#click-me2').css({
            'color':'white',
            'background-color':'#165b4d',
            'padding':'21px',
            'margin': '0',
        });
        $('#click-me3').css({
            'color':'white',
            'background-color':'#165b4d',
            'padding':'21px',
            'margin': '0',
        });
    });

    $('#click-me2').click(function(){
        $('#tab-content2').show();
        $('#tab-content1').hide();
        $('#tab-content3').hide();
        $('#click-me2').css({
            'color':'white',
            'background-color':'#4ec9b0',
            'padding':'21px',
            'margin': '0',
        });
        $('#click-me1').css({
            'color':'white',
            'background-color':'#165b4d',
            'padding':'21px',
            'margin': '0',
        });
        $('#click-me3').css({
            'color':'white',
            'background-color':'#165b4d',
            'padding':'21px',
            'margin': '0',
        });
    });

    $('#click-me3').click(function(){
        $('#tab-content3').show();
        $('#tab-content2').hide();
        $('#tab-content1').hide();
        $('#click-me3').css({
            'color':'white',
            'background-color':'#4ec9b0',
            'padding':'21px',
            'margin': '0',
        });
        $('#click-me1').css({
            'color':'white',
            'background-color':'#165b4d',
            'padding':'21px',
            'margin': '0',
        });
        $('#click-me2').css({
            'color':'white',
            'background-color':'#165b4d',
            'padding':'21px',
            'margin': '0',
        });
    });
});

// </script>