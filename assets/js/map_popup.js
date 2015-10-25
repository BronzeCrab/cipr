   
    var point_links = document.getElementsByClassName("a_point");
    var pointsCount = point_links.length;

    function linesDraw(e) {
        // get id number of "a_point" (last char in id):
        var id = e.id.charAt(e.id.length - 1);
        // getting popup to display:
        var popup_id = "popup" + id;
        // then adding text
        var h4 = document.createElement('h4');
        var p = document.createElement('p');
        if (id == 1) {
            h4.innerHTML += 'Отдых в одном из лучших мест планеты';
            p.innerHTML += 'Кипр - божественный остров, место рождения Афродиты, богини любви и красоты! В окружении живописного соснового бора с эвкалиптовыми аллеями на песчаном побережье Средиземного моря!';
        }
        else if (id == 2) {
           h4.innerHTML += 'Волшебные знания';
           p.innerHTML += 'проверенные опытом и знаниями мудрецов! Волшебство практичных решений любых трудностей - в каждый дом!';        
        }
        else if (id == 3) {
           h4.innerHTML += 'Самые современные курортные условия отдыха';
           p.innerHTML += 'имеют все удобства для полноценного семейного отдыха!';        
        }
        else if (id == 4) {
           h4.innerHTML += 'Отель';
           p.innerHTML += 'расположен на одном из лучших пляжей Лимассола на первой линии у моря!';        
        }
        else if (id == 5) {
           h4.innerHTML += 'Вегетарианская пища';
           p.innerHTML += 'приготовленное по всем правилам здорового питания и освещенная бескорыстной любовью профессиональных поваров!';        
        }
        else if (id == 6) {
           h4.innerHTML += 'Личные встречи';
           p.innerHTML += 'с лектором мирового уровня Рузовым В.О.';        
        }
        else if (id == 7) {
           h4.innerHTML += 'Консультации';
           p.innerHTML += 'На фестивале у вас есть уникальная возможность пройти консультации у профессиональных консультантов по семейным отношениям и астрологии! ';        
        }
        else if (id == 8) {
           h4.innerHTML += 'Незабываемое теплое общение и новые друзья!';
           p.innerHTML += '';        
        }
        else if (id == 9) {
           h4.innerHTML += 'Разнообразная и уникальная развлекательная программа!';
           p.innerHTML += 'Вас ждут экскурсии, волшебные концерты и музыкальные представления! ';        
        }
        else if (id == 0) {
           h4.innerHTML += 'Высококачественные и недорогие товары';
           p.innerHTML += 'в своем уникальном и индивидуальном Кипрском стиле! ';        
        }
        h4.style.cssText = 'font-family: "tt_masters_demo_blackregular";font-size: 16px;margin-left: 1em;margin-top: 1em;margin-right: 1em;margin-bottom: 0;color:white;z-index: 1;';
        p.style.cssText = 'font-family: "Tahoma";font-size: 14px; margin-left: 1em;margin-right: 1em;color:white;z-index: 1;';
        // check if size of window < 840 :
        if (window.matchMedia('(max-width: 840px)').matches) {
            // checking for rather small screen
            if (window.matchMedia('(max-width: 480px)').matches) {
                var popup = document.getElementById("wrap");
                var fixed_div = document.getElementById("fixed_div");
                fixed_div.classList.toggle("visible");
                var screen480 = true;
                // cleaning up div
                if (fixed_div.hasChildNodes()) {
                    fixed_div.removeChild( fixed_div.childNodes[0] );
                    fixed_div.removeChild( fixed_div.childNodes[0] );
                }
                fixed_div.appendChild(h4);
                fixed_div.appendChild(p);
            } 
            else {
                var popup = document.getElementById("div_under_map");
                added = document.getElementById("added");
                if (added) {
                    popup.removeChild(added);
                }
                popup.innerHTML += '<div id="added"></div>';
                added = document.getElementById("added");
                

                added.appendChild(h4);
                added.appendChild(p);

            }
            // hiding any lines:
            lines = document.getElementsByClassName('line');
            for (var i = 0; i <= 9; i += 1) {
                if (lines[i].classList.contains("visible") && lines[i].id != "line" + id) {
                    lines[i].classList.remove("visible");
                    popup.classList.remove("visible");
                    // setting variable to later disply popup for < 480 
                    var clicked_another_point = true;
                    // if small screen and clicked another line then don't hide fixed;
                    if (screen480) {
                        fixed_div.classList.toggle("visible");
                    }
                }
            }
        }
        // else display uniq popup for each case
        else {
            var popup = document.getElementById(popup_id);
        }
        // toggling visible class:
        popup.classList.toggle("visible");
        // displaying and hiding line
        // getting point coordinates
        var point_id = "a_point" + id;
        var point = document.getElementById(point_id);
        // turning on another img

        //TODO go on and remake all like so
        // trying new stuff on first image
        point.style.backgroundImage = "url('assets/images/point.png')";


        // point.setAttribute("src", "assets/images/point.png");
        var r_point = getOffsetRect(point);
        // coordintes of popup:
        var r_popup = getOffsetRect(popup);
        // getting line element:
        // id of line:
        var line_id = "line" + id;
        var line = document.getElementById(line_id);
        // setting coordinates for line if popup is visible:
        if (popup.classList.contains("visible")) {
            var canvas = document.getElementById('mycanvas');
            line.setAttribute("x1", r_point.left + 10);
            if (window.matchMedia('(max-width: 358px)').matches) {
                line.setAttribute("y1", r_point.top - 220);
                line.setAttribute("x2", r_popup.left + 150);
                line.setAttribute("y2", r_popup.top - 230);
            } else if (window.matchMedia('(max-width: 380px)').matches) {
                line.setAttribute("y1", r_point.top - 220);
                line.setAttribute("x2", r_popup.left + 150);
                line.setAttribute("y2", r_popup.top - 210);
            } else if (window.matchMedia('(max-width: 410px)').matches) {
                line.setAttribute("y1", r_point.top - 220);
                line.setAttribute("x2", r_popup.left + 150);
                line.setAttribute("y2", r_popup.top -170);
            } else if (window.matchMedia('(max-width: 480px)').matches) {
                line.setAttribute("y1", r_point.top - 180);
                line.setAttribute("x2", r_popup.left + 150);
                line.setAttribute("y2", r_popup.top - 170);
            } else if (window.matchMedia('(max-width: 533px)').matches) {
                line.setAttribute("y1", r_point.top - 175);
                line.setAttribute("x2", r_popup.left + 300);
                line.setAttribute("y2", r_popup.top - 50);
            } else if (window.matchMedia('(max-width: 840px)').matches) {
                line.setAttribute("y1", r_point.top - 120);
                line.setAttribute("x2", r_popup.left + 300);
                line.setAttribute("y2", r_popup.top - 10);      
            } else {
                line.setAttribute("y1", r_point.top - 75);
                line.setAttribute("x2", r_popup.left + 300);
                line.setAttribute("y2", r_popup.top);
            }

        }
        // toggling visible class to display/hide line:
        line.classList.toggle("visible");
    };


    function disappear(e) {
        // get id number of "a_point" (last char in id):
        var id = e.id.charAt(e.id.length - 1);
        // getting popup to display:
        var popup_id = "popup" + id;
        var popup = document.getElementById(popup_id);
        popup.classList.remove("visible");
        var line_id = "line" + id;
        var line = document.getElementById(line_id);
        line.classList.remove("visible");
        var fixed_div = document.getElementById("fixed_div");
        fixed_div.classList.remove("visible");
        var fixed_div = document.getElementById("div_under_map");
        fixed_div.classList.remove("visible");
        var fixed_div = document.getElementById("wrap");
        fixed_div.classList.remove("visible");
        var point_id = "a_point" + id;
        var point = document.getElementById(point_id);
        // turning on another img
        point.style.backgroundImage = "url('assets/images/point_wh.png')";
    }


    function getOffsetRect(elem) {
        // (1)
        var box = elem.getBoundingClientRect()

        var body = document.body
        var docElem = document.documentElement

        // (2)
        var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop
        var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft

        // (3)
        var clientTop = docElem.clientTop || body.clientTop || 0
        var clientLeft = docElem.clientLeft || body.clientLeft || 0

        // (4)
        var top = box.top + scrollTop - clientTop - 265
        var left = box.left + scrollLeft - clientLeft


        return {
            top: Math.round(top),
            left: Math.round(left)
        }
    }

    function move_photo(clicked_id) {
        var slider = document.getElementById("slider");
        var photo = document.getElementById("photo1");

        photo_width = photo.offsetWidth;
        style = window.getComputedStyle(slider);
        matrix = style.getPropertyValue('transform');
        //  for safari
        if (matrix == null) {
            matrix = style.getPropertyValue('-webkit-transform');
        }
        var X_regexp = /(-?\d*?\.?\d*), 0\)$/;
        var X = matrix.match(X_regexp)[1];
        X_int = parseInt(X, 10);
        // checking if clicked during transform:
        var X_regexp = /\d*[50][0]$|^0$/;
        var res = X_regexp.test(X_int);
        // console.log('cur' + X_int);

        clicked = document.getElementById(clicked_id);
        if (clicked.classList.contains('clicked')) {

            var double_click = true;
            clicked.classList.remove("clicked");
        } else {
            // remove clicked classed:
            arrows = document.getElementsByClassName('arrow');
            for (var i = 0; i <= 1; i += 1) {
                arrows[i].classList.remove("clicked");
            }
            // setting now clicked elem:
            clicked.classList.add("clicked");
        }
        // deny ckicking while transform:
        // console.log(X_int-photo_width-4);
        if (( (X_int % (-photo_width-4)) != 0) | (X_int == -8*(photo_width+4) && clicked_id === "right_arrow") | (X_int==0 && clicked_id === "left_arrow")){
            return
        }
        //turn pinky off pinky class
        parent = document.getElementById('slider_nav');
        children = parent.children;
        for (var i = 0; i < children.length; i++) {
            children[i].classList.remove('pinky');
        }
        if (clicked_id === "right_arrow") {
            new_X = X_int-photo_width-4;
            // turning sl_el (navslider)
            sl_el_id = 1+(X_int / (-photo_width-4));
        }
        //clicked right arrow:
        else {
            new_X = X_int+photo_width+4;
            // turning sl_el (navslider)
            sl_el_id = (X_int / (-photo_width-4))-1;
        }
        // console.log(sl_el_id);
        sl_el = document.getElementById('sl_el'+sl_el_id);
        sl_el.classList.add("pinky");
        sl_el = document.getElementById('sl_el'+sl_el_id);

        sl_el.classList.add("pinky");
        // console.log('new_X '+new_X);
        slider.style.transform = "matrix(1, 0, 0, 1, " + new_X + ", 0)";
    }


    // Photo clicking in slider
    var photos = document.getElementsByClassName("photo");
    var photosCount = photos.length;
    for (var i = 0; i <= photosCount; i += 1) {
        photos[i].onclick = function(e) {
            // getting bigger to display
            var bigger = document.getElementById("bigger_photo");
            console.log(bigger);
            // set big pic
            var url = "assets/images/4slider/" + this.id + ".jpg";
            console.log(url);
            bigger.setAttribute("src", url);
            // toggling visible class:
            bigger.classList.add("visible");
        }
    }

    function switchRoom(clicked_id) {
        // Clicking room - photo
        var room = document.getElementById(clicked_id);
        // console.log(room);
        // getting bigger to display
        var bigger = document.getElementById("bigger_photo_2");
        // console.log(bigger);
        // set big pic
        var url = "assets/images/" + clicked_id + ".png";
        // console.log(url);
        bigger.setAttribute("src", url);
        // toggling visible class:
        bigger.classList.add("visible");
    }

    function hide_bigger(clicked_id) {
        var bigger = document.getElementById(clicked_id);
        bigger.classList.remove("visible");
    }
