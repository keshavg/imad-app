console.log('Loaded!');


var img = document.getElementById('madi');

var marginLeft = 0;

function moveElement()
{
   marginLeft = marginLeft + 10;
   img.style.marginLeft = marginLeft + 'px';
    
}

img.onClick = function()
{
    var interval = setTimeInterval(moveElement,100);
};