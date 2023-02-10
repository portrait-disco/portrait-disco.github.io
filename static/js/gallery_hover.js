function hover(img){
 var p = img.src;
 img.src = p.replace('.png', '_ours.png')
}

function hoverOut(img){
 var p = img.src;
 img.src = p.replace('_ours.png', '.png')
}