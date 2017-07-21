$(function(){
    //var de meses
    var meses = [
        "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
    ];
    //var dias da semana
    var dias = [
        "Domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sabado"
    ];

    //novo obj data
    var NovaData = new Date();

    NovaData.setDate(NovaData.getDate());

    $('.jdate').html(dias[NovaData.getDay()] + " " + NovaData.getDate() + ' ' + meses[NovaData.getMonth()] + ' de ' + NovaData.getFullYear());

    setInterval(function(){
        var seconds = new Date().getSeconds();
        $('.jsec').html((seconds < 10 ? "0" : "") + seconds);
    },1000);

    setInterval(function(){
        var minutes = new Date().getMinutes();
        $('.jmin').html((minutes < 10 ? "0" : "") + minutes);
    },1000);

    setInterval(function(){
        var hours = new Date().getHours();
        $('.jhr').html((hours < 10 ? "0" : "") + hours);
    },1000);

});
