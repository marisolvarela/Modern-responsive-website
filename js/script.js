window.onscroll = function() {
    var position = window.pageY0llset || document.documentElement.scrollTop;
    var element1 = document.getElementById('icon_heart');
    var element2 = document.getElementById('icon_fire');
    
    element1.style.bottom = position * 0.1 + "px";
    element2.style.top = position * 0.1 + "px";
}