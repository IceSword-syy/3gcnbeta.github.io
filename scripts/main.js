"use strict";window.onload=function(){function t(t,e){var n=t.order||1e4,o=e.order||1e4;return n>o?1:o>n?-1:0}function e(n){var s=[];if(!n)return"";if(n.items&&n.items.length){for(var r=n.items.sort(t),c=0;c<r.length;c++)r[c]&&s.push(e(r[c]));return o({name:n.name,sub:s.join("")})}return n.url?(n.favicon=n.favicon||n.url+"/favicon.ico",a(n)):""}var n=$("#section").html(),o=window.Handlebars.compile(n),s=$("#item").html(),a=window.Handlebars.compile(s);$(".links").html("");var r=$('<iframe frameborder="0" width=100% name=nav id=nav src="https://www.baidu.com"/>');r.on("load",function(){document.getElementById("nav").height=$(".root").height()}),$(".content").html(r),$.ajax({url:"data/sites.json",method:"get",dataType:"JSON",success:function(t){console.log(t);var n=$('<ul class="root">').append(e(t));$(".links").append(n),$("img").each(function(){this.setAttribute("src",this.getAttribute("ng-src"))}),$("img").on("error",function(){this.src="https://assets-cdn.github.com/favicon.ico"}),$(".title > h3").on("mouseover",function(){}),$(".title > h3").on("mouseout",function(){})}});var c;c="https://www.google.com.hk/?q=",window.select=function(t){switch(t){case"google":c="https://www.google.com.hk/?q=",$("#searches").html('Google <span class="caret"></span>'),r.attr("src","https://www.google.com");break;case"baidu":c="https://www.baidu.com/s?wd=",$("#searches").html('Baidu <span class="caret"></span>'),r.attr("src","https://www.baidu.com");break;case"bing":c="https://global.bing.com/search?q=",$("#searches").html('Bing <span class="caret"></span>'),r.attr("src","https://www.bing.com")}$(".btn-query").attr("href",c+$("#q").val())},$("#q").keyup(function(){$(".btn-query").attr("href",c+$("#q").val())})};