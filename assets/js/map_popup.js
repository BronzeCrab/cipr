function ready() {

    var point_links = document.getElementsByClassName("a_point");
    var pointsCount = point_links.length;
    for (var i = 0; i <= pointsCount; i += 1) {
        point_links[i].onmouseover = function(e) {
            // get id number of "a_point" (last char in id):
            var id = this.id.substr(this.id.length - 1);
            // getting popup to display:
            var popup_id = "popup" + id;
            // check if size of window < 840 :
            if (window.matchMedia('(max-width: 840px)').matches) {
                 // checking for rather small screen
                if (window.matchMedia('(max-width: 480px)').matches) {
                    var popup = document.getElementById("wrap");
                    var fixed_div = document.getElementById("fixed_div");
                    fixed_div.classList.toggle("visible");
                    var screen480 = true;
                }
                else {
                    var popup = document.getElementById("div_under_map");
                }
                //hiding any lines:
                lines = document.getElementsByClassName('line');
                for (var i = 0; i <= 9; i += 1) {
                    if (lines[i].classList.contains("visible") && lines[i].id != "line"+id) {
                        lines[i].classList.remove("visible");
                        popup.classList.remove("visible");
                        //setting variable to later disply popup for <480 
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
            var point_id = "point" + id;
            var point = document.getElementById(point_id);
            // turning on another img
            point.setAttribute("src", "assets/images/point.png");
            var r_point = getOffsetRect(point);
            console.log(r_point.top, r_point.left);
            // coordintes of popup:
            var r_popup = getOffsetRect(popup);
            console.log(r_popup.top, r_popup.left);
            // getting line element:
            // id of line:
            var line_id = "line" + id;
            var line = document.getElementById(line_id);
            // setting coordinates for line if popup is visible:
            if (popup.classList.contains("visible")) {
                var canvas = document.getElementById('mycanvas');
                line.setAttribute("x1", r_point.left+20);
                if (window.matchMedia('(max-width: 358px)').matches) {
                    console.log('358');
                    line.setAttribute("y1", r_point.top-90);
                    line.setAttribute("x2", r_popup.left+150);
                    line.setAttribute("y2", r_popup.top+45);
                }
                else if (window.matchMedia('(max-width: 380px)').matches) {
                    console.log('380');
                    line.setAttribute("y1", r_point.top-50);
                    line.setAttribute("x2", r_popup.left+150);
                    line.setAttribute("y2", r_popup.top+45);
                }
                else if (window.matchMedia('(max-width: 480px)').matches) {
                    console.log('480');
                    line.setAttribute("y1", r_point.top-30);
                    line.setAttribute("x2", r_popup.left+150);
                    line.setAttribute("y2", r_popup.top+45);
                }
                else if (window.matchMedia('(max-width: 508px)').matches) {
                    line.setAttribute("y1", r_point.top-35);
                    line.setAttribute("x2", r_popup.left+300);
                    line.setAttribute("y2", r_popup.top+45);

                }
                else if (window.matchMedia('(max-width: 533px)').matches) {
                    line.setAttribute("y1", r_point.top-15);
                    line.setAttribute("x2", r_popup.left+300);
                    line.setAttribute("y2", r_popup.top+45);
                }
                else {
                line.setAttribute("y1", r_point.top);
                line.setAttribute("x2", r_popup.left+300);
                line.setAttribute("y2", r_popup.top+45);
                }
                
            }
            // toggling visible class to display/hide line:
            line.classList.toggle("visible");
        };
        point_links[i].onmouseout = function(e) {
            // get id number of "a_point" (last char in id):
            var id = this.id.substr(this.id.length - 1);
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
            var point_id = "point" + id;
            var point = document.getElementById(point_id);
            // turning on another img
            point.setAttribute("src", "assets/images/point_wh.png");
        }
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
        var top  = box.top +  scrollTop - clientTop - 265
        var left = box.left + scrollLeft - clientLeft


        return { top: Math.round(top), left: Math.round(left) }
    }

}
    function slide_photo(clicked_id) {
        var slider = document.getElementById("slider")
        style = window.getComputedStyle(slider);
        matrix = style.getPropertyValue('transform');
        var X_regexp = /(-?\d*?\.?\d*), 0\)$/;
        var X = matrix.match(X_regexp)[1];
        console.log(X);
        X_int = parseInt(X, 10);
        // checking if clicked during transform:
        var X_regexp = /\d*[50][0]$|^0$/;
        var res = X_regexp.test(X_int);
        console.log('cur' +X_int);

        clicked = document.getElementById(clicked_id);
        if (clicked.classList.contains('clicked')) {
            var double_click=true;
            clicked.classList.remove("clicked");
        }
        else {
            // remove clicked classed:
            arrows = document.getElementsByClassName('arrow');
            for (var i = 0; i <= 1; i += 1) {
                arrows[i].classList.remove("clicked");
            }
            // setting  now clicked elem:
            clicked.classList.add("clicked");
        }
      
        if (clicked_id === "left_arrow") {
            // if clicked during transform:
            if (res === false) {
                // if double click and we are at the begining
                // shift twice
                if (double_click) {
                    // checking X int:
                    if (X_int < 150 && X_int > 0) {
                        X_int = 150; 
                    }
                    else if (X_int > 150){
                        X_int = 300;
                    }
                    else  {
                        X_int = 0;
                    }
                    new_X = X_int - 300;
                    // alert("ust"+new_X);
                }
                //return to the place (deny trans)
                else {
                 new_X = 0;
                }
            }
            else {
            new_X = X_int - 150;
            }
        }
        else {
            // if clicked during transform:
            if (res === false) {
                // if double click and we are at the begining
                // shift twice
                if (double_click) {
                    // checking X int:
                    if (X_int > -150 && X_int < 0) {
                        X_int = -150; 
                    }
                    else if (X_int < -150){
                        X_int = -300;
                    }
                    else {
                        X_int = 0;
                    }
                    new_X = X_int + 300;
            
                }
                //return to the place (deny trans)
                else {
                    new_X = 0;
                }
            }
            else {
                new_X = X_int + 150;
            }
        }
        console.log(new_X);
        slider.style.transform = "matrix(1, 0, 0, 1, " + new_X + ", 0)"
    }


    // Photo clicking
    var photos = document.getElementsByClassName("photo");
    var photosCount = photos.length;
    for (var i = 0; i <= photosCount; i += 1) {
        photos[i].onclick = function(e) {
           
        // getting bigger to display
        var bigger = document.getElementById("bigger_photo");
        console.log(bigger);
        // set big pic
        var url = "assets/images/"+this.id+".png";
        console.log(url);
        bigger.setAttribute("src", url); 
        // toggling visible class:
        bigger.classList.add("visible_bigger");
        }
    }
function hide_bigger(clicked_id) {
    var bigger = document.getElementById(clicked_id);
    bigger.classList.remove("visible_bigger");
}