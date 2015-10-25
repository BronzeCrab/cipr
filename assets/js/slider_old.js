       if (clicked_id === "left_arrow") {
            // if clicked during transform:
            if (res === false) {
                // not do anything if all right position and clicked left
                if (X_int > 7*photo_width) {
                return
                }
                // if double click and we are at the begining
                // shift twice
                if (double_click) {
                    console.log('double click');
                    console.log(X_int);
                    // checking X int:
                    if (X_int > -photo_width && X_int < 0) {
                        X_int = 0;
                    }
                    else if (X_int < -photo_width && X_int > -2*photo_width) {
                        X_int = -photo_width;
                    }
                    else if (X_int < -2*photo_width && X_int > -3*photo_width) {
                        X_int = -2*photo_width;
                    }
                    else if (X_int < -3*photo_width && X_int > -4*photo_width) {
                        X_int = -3*photo_width;
                    }
                    else if (X_int < -4*photo_width && X_int > -5*photo_width) {
                        X_int = -4*photo_width;
                    }
                    else if (X_int < -5*photo_width && X_int > -6*photo_width) {
                        X_int = -5*photo_width;
                    }
                    else if (X_int < -6*photo_width && X_int > -7*photo_width) {
                        X_int = -6*photo_width;
                    }
                    else if (X_int < -7*photo_width && X_int > -8*photo_width) {
                        X_int = -7*photo_width;
                    }
                    else if (X_int < -8*photo_width && X_int > -9*photo_width) {
                        X_int = -8*photo_width;
                    }
                    else if (X_int <= -9*photo_width) {
                        X_int = -7*photo_width;
                    }
                    new_X = X_int - 2*photo_width;
                    // alert("ust"+new_X);
                }
                //return to the place (deny trans)
                else {
                    new_X = 0;
                }
            } else {
                new_X = X_int - 150;
            }
        } else {
            // if clicked during transform:
            if (res === false) {
                // if double click and we are at the begining
                // shift twice
                if (double_click) {
                    // checking X int:
                    if (X_int > -150 && X_int < 0) {
                        X_int = -150;
                    } else if (X_int < -150) {
                        X_int = -300;
                    } else {
                        X_int = 0;
                    }
                    new_X = X_int + 300;

                }
                //return to the place (deny trans)
                else {
                    new_X = 0;
                }
            } else {
                new_X = X_int + 150;
            }
        }
        console.log('new_X '+new_X);
        slider.style.transform = "matrix(1, 0, 0, 1, " + new_X + ", 0)"
    }