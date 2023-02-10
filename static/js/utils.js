l_class_names = [
    "Cars",
    "Faces",
    "Cats",
    // "LSUN Horses"
]

l_target_paths = {
    "Faces": [
        "resources/targets/faces/ffhq_test_img000230.jpeg", // person with pink hair
        //"resources/targets/faces/ffhq_test_img000255.jpeg", //
        "resources/targets/faces/ffhq_test_img000317.jpeg", // person in winter coat
        // "resources/targets/faces/ffhq_test_img000777.jpeg",
        // "resources/targets/faces/ffhq_test_img001393.jpeg",

        "resources/targets/faces/ffhq_test_img001587.jpeg", // person with a crown
        // "resources/targets/faces/ffhq_test_img002096.jpeg", //
        // "resources/targets/faces/ffhq_test_img002525.jpeg",
        "resources/targets/faces/ffhq_test_img002738.jpeg", // person holding up a photo
        "resources/targets/faces/ffhq_test_img003473.jpeg", // person in pink looking down

        "resources/targets/faces/ffhq_test_img003579.jpeg", // person wearing a helmet
        // "resources/targets/faces/ffhq_test_img004021.jpeg", // 
        // "resources/targets/faces/ffhq_test_img004682.jpeg",
        // "resources/targets/faces/ffhq_test_img004692.jpeg",
        // "resources/targets/faces/ffhq_test_img004715.jpeg",

        "resources/targets/faces/img000047.jpeg", // man with a fedora
        // "resources/targets/faces/img000172.jpeg",
        "resources/targets/faces/img000238.jpeg",
        "resources/targets/faces/img000300.jpeg",
        "resources/targets/faces/img000631.jpeg",
        // "resources/targets/faces/img000823.jpeg",

    ],
    "Cars": [
        "resources/targets/cars/a.jpeg",
        "resources/targets/cars/b.jpeg",
        "resources/targets/cars/c.jpeg",
        "resources/targets/cars/d.jpeg",
        "resources/targets/cars/e.jpeg",
        "resources/targets/cars/f.jpeg",
        "resources/targets/cars/g.jpeg",
        "resources/targets/cars/img00000333.jpeg",
        "resources/targets/cars/img00000675.jpeg",
        "resources/targets/cars/img00000927.jpeg",
    ],
    "Cats": [
        "resources/targets/cats/lsuncats_img000163.jpeg",
        // "resources/targets/cats/lsuncats_img000212.jpeg",
        // "resources/targets/cats/lsuncats_img000230.jpeg",
        // "resources/targets/cats/lsuncats_img000300.jpeg",
        // "resources/targets/cats/lsuncats_img000301.jpeg",

        // "resources/targets/cats/lsuncats_img000324.jpeg",
        // "resources/targets/cats/lsuncats_img000369.jpeg",
        "resources/targets/cats/lsuncats_img000552.jpeg",
        // "resources/targets/cats/lsuncats_img000602.jpeg",
        // "resources/targets/cats/lsuncats_img000692.jpeg",

        "resources/targets/cats/lsuncats_img000789.jpeg",
        // "resources/targets/cats/lsuncats_img000834.jpeg",
        "resources/targets/cats/lsuncats_img000912.jpeg",
        // "resources/targets/cats/lsuncats_img000915.jpeg",
        "resources/targets/cats/lsuncats_img000948.jpeg",

        // "resources/targets/cats/lsuncats_img001026.jpeg",
        // "resources/targets/cats/lsuncats_img001047.jpeg",
        "resources/targets/cats/lsuncats_img001131.jpeg",
        "resources/targets/cats/lsuncats_img001157.jpeg",
        // "resources/targets/cats/lsuncats_img001274.jpeg",

        // "resources/targets/cats/lsuncats_img001342.jpeg",
        // "resources/targets/cats/lsuncats_img001473.jpeg",
        // "resources/targets/cats/lsuncats_img001475.jpeg",
        // "resources/targets/cats/lsuncats_img001501.jpeg",
        "resources/targets/cats/lsuncats_img001594.jpeg",
        "resources/targets/cats/lsuncats_img001609.jpeg",
        // "resources/targets/cats/lsuncats_img001722.jpeg",
        // "resources/targets/cats/lsuncats_img001770.jpeg",
        // "resources/targets/cats/lsuncats_img001842.jpeg",
        // "resources/targets/cats/lsuncats_img001863.jpeg",
        // "resources/targets/cats/lsuncats_img001895.jpeg",
        "resources/targets/cats/lsuncats_img001998.jpeg",
    ]

}

d_edit_names = {
    "Faces": {
        "Old": "csc_old",
        "Young": "csc_young",
        "Laughing": "csc_laughing",
	//"Big Nose": "csc_nose_big",
	//"Small Nose": "csc_nose_small",
        "Sad": "csc_sad",
        "Thick eyebrows": "csc_eyebrows_thick",
        "Thin eyebrows": "csc_eyebrows_thin",
        "Person wearing reading glasses": "csc_glasses_add",
        // "Blue Hair": "csc_hair_blue",
        // "Blonde Hair": "csc_hair_blonde",

    },

    "Cars": {
        "Blue car": "csc_blue",
        "Black car": "csc_black",
        "Ford Model T": "csc_model_t",
        "Muscle car": "csc_muscle",
        "Car with white wheel rims": "csc_rims",
        "Car on a snowy road": "csc_snow",
        "Car from Star Wars": "csc_starwars",
        "Large SUV car": "csc_suv",
        "Car with open windows": "csc_windows_open",
        "Car with closed windows": "csc_windows_closed",
    }, 

    "Cats": {
        "Egyptian cat": "csc_egyptian",
        "Cat with large eyes": "csc_eyes_large",
        "Cat with small eyes": "csc_eyes_small",
        "Cat with pink nose" : "csc_nose_pink",
        "Siamese cat" : "csc_siamese",
        "Surprised cat" : "csc_surprised"
    }
}


d_car_ed_names = {
    "Blue car": "csc_blue",
    "Black car": "csc_black",
    "Ford Model T": "csc_model_t",
    "Muscle car": "csc_muscle",
    "Car with white wheel rims": "csc_rims",
    "Car on a snowy road": "csc_snow",
    "Car from Star Wars": "csc_starwars",
    "Large SUV car": "csc_suv",
    "Car with open windows": "csc_windows_open",
    "Car with closed windows": "csc_windows_closed",
}



function get_current_tau(){
    let slider = document.getElementById("rs-range-line");
    let curr_class = get_current_classname();
    if (curr_class=="Cats"){
        d_val2tau = {
            "-3": "0.200",
            "-2": "0.250",
            "-1": "0.300",
            "0": "0.350",
            "1": "0.375",
            "2": "0.400",
            "3": "0.450"
        }
    }   
    else{
        d_val2tau = {
            "-3": "0.100",
            "-2": "0.150",
            "-1": "0.200",
            "0": "0.225",
            "1": "0.250",
            "2": "0.300",
            "3": "0.350"
        }
    }
    
    return d_val2tau[slider.value]
}


function get_current_basename(){
    let target = document.getElementById("expandedImg-after")
    let bname = target.src.split("/")[7]
	console.log(bname)
    return bname
}


function get_current_classname(){
    return $("#lbl_category_name")[0].innerHTML
}
