
        var imgs=new Array('../img/xxx1.jpg','../img/xxx2.jpg','../img/xxx3.jpg','../img/xxx4.jpg','../img/xxx5.jpg','../img/xxx6.jpg','../img/xxx7.jpg','../img/xxx8.jpg','../img/xxx9.jpg','../img/xxx10.jpg','../img/xxx11.jpg','../img/xxx12.jpg')
        function imgsrc(p,num) {

            p.src = imgs[num + 5]
        }
        function imgout (p,num) {
        	p.src = imgs[num - 1]
        }