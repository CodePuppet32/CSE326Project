function closel(){
    $('.fakerl').animate({height: '0', width: '0'}, 100);
    $('.fakerl').hide('slow');
}
function closes(){
    $('.fakers').animate({height: '0', width: '0'}, 100);
    $('.fakers').hide('slow');
}

var trending = document.querySelectorAll(".trendingBookBlocks");
var purchased = document.querySelectorAll(".purchasedBlock");
var topSeller = document.querySelectorAll(".topSeller");
var subWise = document.querySelectorAll(".subWiseBlock");
var tabs = document.querySelectorAll('.tab');
var buttons = document.querySelectorAll('.buttonContainer a');
var novels = document.querySelectorAll(".novelBlock");
var trendIndex = 0;
var topIndex = 0;
var subIndex = 0;
var novelIndex = 0;
var purchasedIndex = 0;

function showTrending(x){
    trendIndex += x;
    if(trendIndex == -1){
        trendIndex = trending.length;
        trendIndex --;
    }
    if(trendIndex == trending.length){
        trendIndex = 0;
    }
    trending.forEach(function(node){
        $(node).hide();
    });
    $(trending[trendIndex]).fadeIn('slow');
}
function showTopSeller(x){
    topIndex += x;
    if(topIndex == -1){
        topIndex = topSeller.length;
        topIndex --;
    }
    if(topIndex == topSeller.length ){
        topIndex = 0;
    }
    topSeller.forEach(function(node){
        $(node).hide();
    });
    $(topSeller[topIndex]).slideDown(200);
}
function showSubWise(x){
    subIndex += x;
    if(subIndex == -1){
        subIndex = subWise.length;
        subIndex --;
    }
    if(subIndex == subWise.length ){
        subIndex = 0;
    }
    subWise.forEach(function(node){
        $(node).hide();
    });
    $(subWise[subIndex]).slideDown(200);
}
function showNovel(x){
    novelIndex += x;
    if(novelIndex == -1){
        novelIndex = novels.length;
        novelIndex --;
    }
    if(novelIndex == novels.length ){
        novelIndex = 0;
    }
    novels.forEach(function(node){
        $(node).hide();
    });
    $(novels[novelIndex]).slideDown(200);
}
function showPanel(tabNo){
    tabs.forEach(function(node){
        node.style.display="none";
    });
    buttons.forEach(function(node){
        node.style.background="black";
    });
    tabs[tabNo].style.display="block";
    buttons[tabNo].style.background="#3caf50";
}
function showPurchased(x){
    purchasedIndex += x;
    if(purchasedIndex == -1){
        purchasedIndex = purchased.length;
        purchasedIndex --;
    }
    if(purchasedIndex == purchased.length ){
        purchasedIndex = 0;
    }
    purchased.forEach(function(node){
        $(node).hide();
    });
    $(purchased[purchasedIndex]).slideDown(200);
}

showPanel(0);
showTrending(trendIndex);
showTopSeller(topIndex);
showSubWise(subIndex);
showPurchased(purchasedIndex);
showNovel(novelIndex);