!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){const r=n(1),o=n(2),i=n(3),a=n(4),s=n(5),l=n(6),c=n(7),d=n(8),u=n(9);$("#bg").length&&u.init(),$(".preloader").length&&d.init(),$(".slider").length&&r.init(),$("#authfo").length&&c.init($("#authfo")),$("#contact").length&&c.init($("#contact")),$(".menu__link").length&&o.init(),$("#auth").length&&i.init(),$(".btn-aside").length&&a.init(),$(".arrow-down__btn").length&&s.init(),$(".blog-block__right").length&&l.init()},function(e,t){const n=function(){let e=!0,t=0,n=$(".slider");return{init:function(){const e=this,t=n.find(".slider-btn__control");e.autoPlay(),t.on("click",function(t){t.preventDefault();let r=$(this),o=n.find(".slider-list__item"),i=o.filter(".active"),a=i.next(),s=i.prev(),l=o.first(),c=o.last();e.clearPlay(),r.hasClass("slider-btn__control_left")?a.length?e.move(a,"next"):e.move(l,"next"):s.length?e.move(s,"next"):e.move(c,"back"),e.btnPlay()})},move:function(t,n){const r=this;let o=t.parents(".slider").find(".slider-list__item"),i=o.filter(".active"),a=o.width(),s=0,l=0,c=t.next();if(e){e=!1,"next"===n?(s=a,l=-a):"back"===n&&(s=-a,l=a),t.css("left",s).addClass("in-active"),o.removeClass("next").removeClass("prev"),c.length?(t.next().addClass("next"),t.prev().addClass("prev"),t.prev().length||o.last().addClass("prev")):(t.prev().addClass("prev"),o.first().addClass("next"));let d=o.filter(".in-active");i.animate({left:l},600),d.animate({left:0},600,function(){var t=$(this);o.css("left","0").removeClass("active"),t.toggleClass("in-active active"),e=!0}),r.moveContent(d)}},btnPlay:function(){let e=n.find(".bg-left").empty(),t=n.find(".bg-right").empty(),r=n.find(".next"),o=n.find(".prev");r.children().clone().appendTo(e),o.children().clone().appendTo(t)},moveContent:function(e){let t=n.find(".slider-inform").empty();e.find(".slider-desc").clone().appendTo(t).animate({opacity:".5"},"slow").animate({opacity:"1"},"fast")},autoPlay:function(){let e=this;this.start(),t=setInterval(function(){e.start()},6e3)},start:function(){let e=this,t=$(".slider-list__item"),n=t.filter(".active").next(),r=t.first();n.length?e.move(n,"next"):e.move(r,"next"),e.btnPlay()},clearPlay:function(){t&&(clearInterval(t),this.autoPlay())}}}();e.exports=n},function(e,t){const n={init:function(){$(".menu__link").on("click",function(){$("#modalMenu").toggleClass("in"),$("body").toggleClass("hidden")})}};e.exports=n},function(e,t){const n={init:function(){$("#auth").on("click",function(e){e.preventDefault(),$(this).addClass("btn-hidden"),$(".flipper").toggleClass("active")}),$("#mainIndex").on("click",function(e){e.preventDefault(),$("#auth").removeClass("btn-hidden"),$(".flipper").removeClass("active")})}};e.exports=n},function(e,t){const n={init:function(){$(".btn-aside").on("click",function(e){e.preventDefault(),$(".blog-block__left_toggle").toggleClass("active"),$("body").toggleClass("hidden")})}};e.exports=n},function(e,t){const n={init:function(){$(".arrow-down__btn").on("click",function(){var e=$(this).data("href");$(".wrapper").stop().animate({scrollTop:$(e).offset().top+115},1500)})}};e.exports=n},function(e,t){const n={init:function(){let e,t=$(".aside-menu"),n=$(".section.header").outerHeight(),r=t.find("a"),o=r.map(function(){let e=$($(this).attr("href"));if(e.length)return e});r.click(function(e){let t=$(this).attr("href"),r="#"===t?0:$(t).position().top+n;$(".wrapper").stop().animate({scrollTop:r},300),e.preventDefault()}),$(".wrapper").scroll(function(){let t=$(this).scrollTop()-n+40,i=o.map(function(){if($(this).position().top<t)return this}),a=(i=i[i.length-1])&&i.length?i[0].id:0;e!==a&&0!=a&&(e=a,r.removeClass("active").parent().find("[href='#"+a+"']").addClass("active"))})}};e.exports=n},function(e,t){const n={init:function(e){function t(){$("input, textarea").each(function(){n(this)})}function n(e){let t=e,n=$(e).attr("name"),r=$(e).val();switch(n){case"login":""!=r?($(t).parent().addClass("not_error").removeClass("error"),$(t).next(".error-box").remove()):($(t).parent().addClass("error").removeClass("not_error"),$(t).after('<div class="error-box">Вы не ввели логин</div>'));break;case"password":""!=r?($(t).parent().addClass("not_error").removeClass("error"),$(t).next(".error-box").remove()):($(t).parent().addClass("error").removeClass("not_error"),$(t).after('<div class="error-box">Вы не ввели пароль</div>'));break;case"name":""!=r?($(t).parent().addClass("not_error").removeClass("error"),$(t).next(".error-box").remove()):($(t).parent().addClass("error").removeClass("not_error"),$(t).after('<div class="error-box">Вы не ввели имя</div>'));break;case"email":var o=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;""!=r&&o.test(r)?($(t).parent().addClass("not_error").removeClass("error"),$(t).next(".error-box").remove()):($(t).parent().addClass("error").removeClass("not_error"),$(t).after('<div class="error-box">Не верный email</div>'));break;case"msg":""!=r?($(t).parent().addClass("not_error").removeClass("error"),$(t).next(".error-box").remove()):($(t).parent().addClass("error").removeClass("not_error"),$(t).after('<div class="error-box">Вы не заполнили</div>'));break;case"children":$(t).is(":checked")?($(t).parent().addClass("not_error").removeClass("error"),$(t).next(".error-box").remove()):($(t).parent().addClass("error").removeClass("not_error"),$(t).after('<div class="error-box">Вы не отметили</div>'))}}let r=e,o=this;$("input, textarea").off().blur(function(){n(this)}),r.submit(function(e){e.preventDefault(),t(),$(".error").length||(console.log("success"),o.close())})},close:function(){let e=$(".modal-success"),t=e.find("button");e.show(),t.on("click",function(){e.hide()})}};e.exports=n},function(e,t){const n=function(){let e=0;const t=$(".preloader"),n=(e,n)=>{const r=Math.ceil(n/e*100);$(".preloader__percents").text(`${r}%`),r>=100&&t.fadeOut()},r=t=>{t.length&&t.forEach((t,r,o)=>{$("<img>",{attr:{src:t}}).on("load error",()=>{e++,n(o.length,e)})})},o=$("*").map((e,t)=>{const n=$(t).is("img"),r=$(t).css("background-image");let o="";if("none"!=r&&(o=r.replace('url("',"").replace('")',"")),n&&(o=$(t).attr("src")),o)return o}).toArray();return{init:function(){r(o)}}}();e.exports=n},function(e,t){const n={init:function(){function e(e){a.setSize(window.innerWidth,window.innerHeight),s.u_resolution.value.x=a.domElement.width,s.u_resolution.value.y=a.domElement.height,s.u_mouse.value.x=l.x,s.u_mouse.value.y=l.y}function t(){requestAnimationFrame(t),n()}function n(){s.u_time.value+=1,a.render(i,o)}var r,o,i,a,s,l={x:0,y:0},c=new THREE.TextureLoader;!function(){r=document.getElementById("bg"),(o=new THREE.Camera).position.z=1,i=new THREE.Scene;var t=new THREE.PlaneBufferGeometry(2,2),n=c.load("./assets/img/water.jpg"),l=c.load("./assets/img/water-maps.jpg");n.minFilter=THREE.LinearFilter,s={u_time:{type:"f",value:1},u_animation:{type:"f",value:0},u_mouse:{type:"v2",value:new THREE.Vector2},u_resolution:{type:"v2",value:new THREE.Vector2},u_size:{type:"v2",value:new THREE.Vector2(n.image.width,n.image.height)},u_image:{value:n},u_maps:{value:l}};var d=new THREE.ShaderMaterial({uniforms:s,vertexShader:document.getElementById("vertexShader").textContent,fragmentShader:document.getElementById("fragmentShader").textContent}),u=new THREE.Mesh(t,d);i.add(u),(a=new THREE.WebGLRenderer).setPixelRatio(window.devicePixelRatio),r.appendChild(a.domElement),e(),window.addEventListener("resize",e,!1)}(),t(),document.addEventListener("mousemove",function(e){TweenLite.to(s.u_mouse.value,1,{x:1.5*(e.pageX/window.innerWidth-.5),y:1.5*(e.pageY/window.innerHeight-.5)})})}};e.exports=n}]);