$(document).ready(function(){
    $(window).resize(function(){
        $('.header').height($(window).height());
        $('.slider').height($(window).height());
        $('.menu').height($(window).height());
    });
    $('.header').height($(window).height());
    $('.slider').height($(window).height());
    $('.menu').height($(window).height());
    //slider
    var slider = {
        arr:['images/image.png','images/image1.jpg','images/image2.jpg'],
        count:0,
        run:function(){
            this.count += 1;
            $('.slider-header-circle-js').removeClass('slider-circles__circle_fill');
            $('.slider-header-circle-js[data-id="'+slider.count+'"]').addClass('slider-circles__circle_fill');
            if(this.count >= this.arr.length){
                this.count = 0
            }
                $('.slider').css('background-image','url("'+slider.arr[slider.count]+'")');

        }
    };
    //setInterval(function(){
    //    slider.run()
    //},5000);
    $('.slider-header-circle-js').click(function(){
        slider.count = $(this).attr('data-id') - 1;
        slider.run()
    });
    $('.circle__testimonials').click(function(){
        $('.circle__testimonials').removeClass('circle__testimonials_fill');
        $(this).addClass('circle__testimonials_fill');
        var data_id = $(this).attr('data-id');
            $('.testimonials-text, .testimonials-photo-wrapper').css('opacity','0');
            setTimeout(function(){
                $('.testimonials-text, .testimonials-photo-wrapper').css('display','none');
                $('.testimonials-photo-wrapper_'+data_id+', .testimonials-text_'+data_id+'').css('display','block');
                setTimeout(function(){
                    $('.testimonials-photo-wrapper_'+data_id+', .testimonials-text_'+data_id+'').css('opacity','1');
                },50);
            },500);

    });
    $('.hamburger').click(function(){
        $('.menu').show('size', { origin: ["top", "right"] }, 500);
    });
    $('.cancel').click(function(){
        $('.menu').hide('size', { origin: ["top", "right"] }, 500);
    });

    $('.video-mask__play').on('click',function(){
        $(this).hide();
        $('.aboutMe-video').mouseleave(function(){
            $('.video-mask').hide()
        });
        $('.aboutMe-video').mouseover(function(){
            $('.video-mask').show()
        });
        $('.video-mask__stop').show();
        $('.myVideo').get(0).play();
    });

    $('.video-mask__stop').click(function(){
        $('.aboutMe-video').mouseleave(function(){
            $('.video-mask').show()
        });
        $('.myVideo').get(0).pause();
        $(this).hide();
        $('.video-mask__play').show();
    });

    $('.myVideo').on('ended',function(){
        $('.aboutMe-video').mouseleave(function(){
            $('.video-mask').show()
        });
        $('.video-mask').show();
        $('.video-mask__play').hide();
        $('.video-mask__stop').hide();
        $('.video-mask__repeat').show();
    });

    $('.video-mask__repeat').click(function(){
        $('.aboutMe-video').mouseleave(function(){
            $('.video-mask').hide()
        });
        $('.myVideo').get(0).currentTime = '0';
        $('.myVideo').get(0).play();
        $('.video-mask__repeat').hide();
        $('.video-mask__stop').show();
    });

    var canvas__skill_1 = document.getElementById('canvas__skill-1');
    var canvas__skill_2 = document.getElementById('canvas__skill-2');
    var canvas__skill_3 = document.getElementById('canvas__skill-3');
    var canvas__statistic_1 = document.getElementById('canvas__statistic-1');
    var canvas__statistic_2 = document.getElementById('canvas__statistic-2');
    var canvas__statistic_3 = document.getElementById('canvas__statistic-3');
    var ctx1 = canvas__skill_1.getContext('2d');
    var ctx2 = canvas__skill_2.getContext('2d');
    var ctx3 = canvas__skill_3.getContext('2d');
    var ctx4 = canvas__statistic_1.getContext('2d');
    var ctx5 = canvas__statistic_2.getContext('2d');
    var ctx6 = canvas__statistic_3.getContext('2d');
        ctx1.beginPath();
        ctx1.strokeStyle = "#383838";
        ctx1.lineWidth = 10;
        ctx1.moveTo(125,20);
        ctx1.lineTo(225,70);
        ctx1.lineTo(225,180);
        ctx1.lineTo(125,230);
        ctx1.lineTo(25,180);
        ctx1.lineTo(25,70);
        ctx1.lineTo(125,20);
        ctx1.closePath();
        ctx1.stroke();
    ctx2.drawImage(canvas__skill_1, 0, 0);
    ctx3.drawImage(canvas__skill_1, 0, 0);
    ctx4.drawImage(canvas__skill_1, 0, 0);
    ctx5.drawImage(canvas__skill_1, 0, 0);
    ctx6.drawImage(canvas__skill_1, 0, 0);
    //fill percentage
    function animatePercentage(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,context){
        var vertices=[];
        vertices.push({x:x1,y:y1});
        vertices.push({x:x2,y:y2});
        vertices.push({x:x3,y:y3});
        vertices.push({x:x4,y:y4});
        vertices.push({x:x5,y:y5});
        vertices.push({x:x6,y:y6});
        vertices.push({x:x7,y:y7});

        function calcWaypoints(vertices){
            var waypoints=[];
            for(var i=1;i<vertices.length;i++){
                var pt0=vertices[i-1];
                var pt1=vertices[i];
                var dx=pt1.x-pt0.x;
                var dy=pt1.y-pt0.y;
                for(var j=0;j<=25;j++){
                    var x=pt0.x+dx*j/25;
                    var y=pt0.y+dy*j/25;
                    waypoints.push({x:x,y:y});
                }
            }
            return(waypoints);

        }
        context.lineWidth = 11;
        context.strokeStyle = "#f39c11";
        context.lineCap = "round";


        var points=calcWaypoints(vertices);
        var t=1;
        animate();
        function animate(){
            if(t<points.length-1){
                requestAnimationFrame(animate);
            }
            context.beginPath();
            context.moveTo(points[t-1].x,points[t-1].y);
            context.lineTo(points[t].x,points[t].y);
            context.stroke();
            t++;
        }
    }
    //add two extra argument if percentage more than 75% we need 7 waypoints, if less,
    //we just dublicate the last one
    animatePercentage(225,80,225,180,125,230,25,180,25,80,25,80,25,80,ctx1);
    animatePercentage(225,120,225,180,125,230,25,180,25,120,25,120,25,120,ctx2);
    animatePercentage(175,45,225,70,225,180,125,230,25,180,25,70,75,45,ctx3);
    //full hexagen
    animatePercentage(125,20,225,70,225,180,125,230,25,180,25,70,125,20,ctx4);
    animatePercentage(125,20,225,70,225,180,125,230,25,180,25,70,125,20,ctx5);
    animatePercentage(125,20,225,70,225,180,125,230,25,180,25,70,125,20,ctx6);

    $('.choose-photo__category_full').click(function () {
        $('.preview-sites__thumbnail').css('display','block');
    });
    $('.choose-photo__category_web-design').click(function(){
        $('.preview-sites__thumbnail').css('display','block');
        $('.preview-sites__thumbnail').each(function(){
            if(!$(this).hasClass('web-design')){
                $(this).css('display','none');
            }
        });
    });
    $('.choose-photo__category_landing').click(function(){
        $('.preview-sites__thumbnail').css('display','block');
        $('.preview-sites__thumbnail').each(function(){
            if(!$(this).hasClass('landing-page')){
                $(this).css('display','none');
            }
        });
    });
    $('.choose-photo__category_blog').click(function(){
        $('.preview-sites__thumbnail').css('display','block');
        $('.preview-sites__thumbnail').each(function(){
            if(!$(this).hasClass('personal-blog')){
                $(this).css('display','none');
            }
        });
    });
});