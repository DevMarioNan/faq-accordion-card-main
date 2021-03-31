
//text

var item1_p = document.getElementById("item1_p");
var item2_p = document.getElementById("item2_p");
var item3_p = document.getElementById("item3_p");
var item4_p = document.getElementById("item4_p");
var item5_p = document.getElementById("item5_p");

//arrows
var arrow1 = document.getElementById("arrow1");
var arrow2 = document.getElementById("arrow2");
var arrow3 = document.getElementById("arrow3");
var arrow4 = document.getElementById("arrow4");
var arrow5 = document.getElementById("arrow5");

// buttons
var item1 = document.getElementById("item1").onclick = function(){
    if(item1_p.style.display == "block"){
        item1_p.style.display = "none";
        arrow1.style.transform = "rotate(0deg)";
    }else{
        item1_p.style.display = "block";
        arrow1.style.transform = "rotate(180deg)";
    }
};
var item2 = document.getElementById("item2").onclick = function(){
    if(item2_p.style.display == "block"){
        item2_p.style.display = "none";
        arrow2.style.transform = "rotate(0deg)";
    }else{
        item2_p.style.display = "block";
        arrow2.style.transform = "rotate(180deg)";
    }
};
var item3 = document.getElementById("item3").onclick = function(){
    if(item3_p.style.display == "block"){
        item3_p.style.display = "none";
        arrow3.style.transform = "rotate(0deg)";
    }else{
        item3_p.style.display = "block";
        arrow3.style.transform = "rotate(180deg)";
    }
};
var item4 = document.getElementById("item4").onclick = function(){
    if(item4_p.style.display == "block"){
        item4_p.style.display = "none";
        arrow4.style.transform = "rotate(0deg)";
    }else{
        item4_p.style.display = "block";
        arrow4.style.transform = "rotate(180deg)";
    }
};
var item5 = document.getElementById("item5").onclick = function(){
    if(item5_p.style.display == "block"){
        item5_p.style.display = "none";
        arrow5.style.transform = "rotate(0deg)";
    }else{
        item5_p.style.display = "block";
        arrow5.style.transform = "rotate(180deg)";
    }
};

