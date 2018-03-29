function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
    var load = document.getElementById('load');
    load.style.visibility = 'hidden';
}

function addclass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var allclassname = element.className.split(" ");
        for (var i = 0; i < allclassname.length; i++) {
            if (allclassname[i] == value) {
                break;
            }
        }
        if (i == allclassname.length) {
            var newClassName = element.className;
            newClassName += " ";
            newClassName += value;
            element.className = newClassName;
        }
    }
}

function removeclass(element, value) {
    if (element.className) {
        var allClassName = element.className.split(" "); //得到所有类名
        for (var i = 0; i < allClassName.length; i++) {
            if (allClassName[i] == value) {
                allClassName.splice(i, i); //删除第i位元素，删除一位
                break;
            }
        }
        var result;
        var listName = allClassName;
        for (var j = 0; j < listName.length; j++) {
            if (j == 0) {
                result = listName[j];
                result += " ";
            } else {
                result += listName[j];
                result += " ";
            }
        }
        element.className = result;
    }
}

function picwall() {
    var blacks = document.getElementsByClassName("black");
    var blacks_1 = document.getElementsByClassName("black-1");
    var blacks_2 = document.getElementsByClassName("black-2");
    var blacks_3 = document.getElementsByClassName("black-3");
    var pic = document.getElementById("pic");
    var lis = pic.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmousemove = function a() {
            for (var j = 0; j < blacks.length; j++) {
                blacks[j].style.visibility = "visible";
            }
            for (var j = 0; j < blacks_1.length; j++) {
                blacks_1[j].style.visibility = "visible";
            }
            for (var j = 0; j < blacks_2.length; j++) {
                blacks_2[j].style.visibility = "visible";
            }
            for (var j = 0; j < blacks_3.length; j++) {
                blacks_3[j].style.visibility = "visible";
            }

        }
        lis[i].onmouseout = function b() {
            for (var j = 0; j < blacks.length; j++) {
                blacks[j].style.visibility = "hidden";
            }
            for (var j = 0; j < blacks_1.length; j++) {
                blacks_1[j].style.visibility = "hidden";
            }
            for (var j = 0; j < blacks_2.length; j++) {
                blacks_2[j].style.visibility = "hidden";
            }
            for (var j = 0; j < blacks_3.length; j++) {
                blacks_3[j].style.visibility = "hidden";
            }
        }
    }
}
addLoadEvent(picwall);