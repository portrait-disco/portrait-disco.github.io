function update_class_name(class_name){
    console.log("updating class name", class_name)
    $("#lbl_category_name")[0].innerHTML = class_name
    // update the target images - first rows
    let l_imgs = $('#targets_row_top div img')
    for (let i=0; i<5; i+=1){
        l_imgs[i].src=l_target_paths[class_name][i]
    }
    // update the bottom row
    if (l_target_paths[class_name].length>5){
       
        l_imgs = $('#targets_row_bot div img')
        for (let i=0; i<5; i+=1){
            l_imgs[i].src=l_target_paths[class_name][5+i]
            $(l_imgs[i]).show()
        }
    }
    else{
        // hide the bottom row
        l_imgs = $('#targets_row_bot div img')
        for (let i=0; i<5; i+=1){
            // l_imgs[i].src=l_target_paths[class_name][5+i]
            $(l_imgs[i]).hide();
        }
    }

    // update third row at the bottom
    if (l_target_paths[class_name].length>10){
       
        l_imgs = $('#targets_row_third div img')
        for (let i=0; i<5; i+=1){
            l_imgs[i].src=l_target_paths[class_name][10+i]
            $(l_imgs[i]).show()
        }
    }
    else{
        // hide the bottom row
        l_imgs = $('#targets_row_third div img')
        for (let i=0; i<5; i+=1){
            $(l_imgs[i]).hide();
        }
    }

    // update the gallery to be 1:1 aspect ratio
    if (class_name=="Cars"){
        $(".slider-container").animate({width:'512px'}, 500);
        $(".slider-before-inset").animate({width:'512px'}, 500);
        $("#img_lmap").animate({height:'150px'}, 500);

    }
    else{
        $(".slider-container").animate({width:'384px'}, 500);
        $(".slider-before-inset").animate({width:'384px'}, 500);
        $("#img_lmap").animate({height:'200px'}, 500);
    }

    //repopulate the editing options
    populate_edit_options(class_name)

    //select the first image
    gallery($('#targets_row_top div img')[0])
    
}


function populate_other_classes(){
    let div_edit = $('#div_class_selector div')
    div_edit.empty();
    let N = l_class_names.length
    for(let i = 0; i<N; i+=1){
        let curr_a = document.createElement("a")
        curr_a.classList.add("dropdown-item")
        curr_a.style.cssText += 'color:#ddf; background-color: #333;'
        curr_a.setAttribute("onclick", "update_class_name(this.innerHTML)")
        curr_a.innerHTML = l_class_names[i]
        div_edit.append(curr_a);
    }
}


$(document).ready(function(){
    populate_other_classes()
    update_class_name("Cars")
});