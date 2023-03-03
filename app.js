
//Nav bar toggle section

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar_menu")[0]

toggleButton.addEventListener('click', () => {

    navbarLinks.classList.toggle('active')

})



//To Change Images of Background

var imagesLocationBackground = [
    "Images/KayakPerhentian.JPG",
    "Images/PenangJetski.JPG",
    "Images/SeaPicPD.JPG",
    "Images/PerhentianBlueWaters.JPG"
];

var indexBackgroundImage = 0;

function imagesChangeBackground() {
   
    if (indexBackgroundImage > (imagesLocationBackground.length -1) ) {
        indexBackgroundImage = 0;
        document.getElementById("landscapeImageBG").src = imagesLocationBackground[indexBackgroundImage];
    } else {
        document.getElementById("landscapeImageBG").src = imagesLocationBackground[indexBackgroundImage];
        indexBackgroundImage++;
    }
   
}
function startImageChangeBackground() {
    setTimeout(imagesChangeBackground, 3000);
};


//PHOTOGRAPHY JS

//JS for First Image Labelled Family

var noOfImagesFamily = 23;

var familyImages = 1;

function imagesChangeFamilyPhotos() {
   
    if (familyImages >= noOfImagesFamily) {
        familyImages = 1;
        var stringFamilyImages = familyImages.toString();
        document.getElementById("photographyFamily").src = "Photography_Images/Family/" + stringFamilyImages + ".jpg";
        //document.getElementById("photographyFamily").src = "file:///C:/Users/User/WebSite/WebSite_ForWP/Images/" + familyImages + ".jpg";
    } else {
        var stringFamilyImages = familyImages.toString();
        document.getElementById("photographyFamily").src = "Photography_Images/Family/" + stringFamilyImages + ".jpg";
        familyImages++;
    }
   
}
function startImagesChangeFamilyPhotos() {
    setTimeout(imagesChangeFamilyPhotos, 2000);
};


//JS for First Image Labelled Friends

var noOfImagesFriends = 71;

var friendsImages = 1;

function imagesChangeFriendsPhotos() {
   
    if (friendsImages >= noOfImagesFriends) {
        friendsImages = 1;
        var stringFriendsImages = friendsImages.toString();
        document.getElementById("photographyFamily").src = "Photography_Images/Friends/" + stringFriendsImages + ".jpg";
        //document.getElementById("photographyFamily").src = "file:///C:/Users/User/WebSite/WebSite_ForWP/Images/" + familyImages + ".jpg";
    } else {
        var stringFriendsImages = friendsImages.toString();
        document.getElementById("photographyFriends").src = "Photography_Images/Friends/" + stringFriendsImages + ".jpg";
        friendsImages++;
    }
   
}
function startImagesChangeFriendsPhotos() {
    setTimeout(imagesChangeFriendsPhotos, 2500);
};

//JS for First Image Labelled MOREOFME

var noOfImagesMOREOFME = 6;

var MOREOFMEImages = 1;

function imagesChangeMOREOFMEPhotos() {
   
    if (MOREOFMEImages >= noOfImagesMOREOFME) {
        MOREOFMEImages = 1;
        var stringMOREOFMEImages = MOREOFMEImages.toString();
        document.getElementById("photographyMoreOfMe").src = "Photography_Images/MoreOfMe/" + stringMOREOFMEImages + ".jpg";
        //document.getElementById("photographyFamily").src = "file:///C:/Users/User/WebSite/WebSite_ForWP/Images/" + familyImages + ".jpg";
    } else {
        var stringMOREOFMEImages = MOREOFMEImages.toString();
        document.getElementById("photographyMoreOfMe").src = "Photography_Images/MoreOfMe/" + stringMOREOFMEImages + ".jpg";
        MOREOFMEImages++;
    }
   
}
function startImagesChangeMOREOFMEPhotos() {
    setTimeout(imagesChangeMOREOFMEPhotos, 3000);
};


//JS for First Image Labelled VIEWS

var noOfImagesViews = 6;

var viewsImages = 1;

function imagesChangeViewsPhotos() {
   
    if (viewsImages >= noOfImagesViews) {
        viewsImages = 1;
        var stringViewsImages = viewsImages.toString();
        document.getElementById("photographyViews").src = "Photography_Images/Views/" + stringViewsImages + ".jpg";
        //document.getElementById("photographyFamily").src = "file:///C:/Users/User/WebSite/WebSite_ForWP/Images/" + familyImages + ".jpg";
    } else {
        var stringViewsImages = viewsImages.toString();
        document.getElementById("photographyViews").src = "Photography_Images/Views/" + stringViewsImages + ".jpg";
        viewsImages++;
    }
   
}
function startImagesChangeViewsPhotos() {
    setTimeout(imagesChangeViewsPhotos, 4000);
};


//JS for First Image Labelled Everyone

var noOfImagesEveryone = 96;

var everyoneImages = 1;

function imagesChangeEveryonePhotos() {
   
    if (everyoneImages >= noOfImagesEveryone) {
        everyoneImages = 1;
        var stringEveryoneImages = everyoneImages.toString();
        document.getElementById("photographyEveryone").src = "Photography_Images/Everyone/" + stringEveryoneImages + ".jpg";
        //document.getElementById("photographyFamily").src = "file:///C:/Users/User/WebSite/WebSite_ForWP/Images/" + familyImages + ".jpg";
    } else {
        var stringEveryoneImages = everyoneImages.toString();
        document.getElementById("photographyEveryone").src = "Photography_Images/Everyone/" + stringEveryoneImages + ".jpg";
        everyoneImages++;
    }
   
}
function startImagesChangeEveryonePhotos() {
    setTimeout(imagesChangeEveryonePhotos, 500);
};


//JS for First Image Labelled AnimalBabes

var noOfImagesAnimalBabes = 9;

var animalBabesImages = 1;

function imagesChangeAnimalBabesPhotos() {
   
    if (animalBabesImages >= noOfImagesAnimalBabes) {
        animalBabesImages = 1;
        var stringAnimalBabesImages = animalBabesImages.toString();
        document.getElementById("photographyAnimalBabes").src = "Photography_Images/AnimalBabes/" + stringAnimalBabesImages + ".jpg";
        //document.getElementById("photographyFamily").src = "file:///C:/Users/User/WebSite/WebSite_ForWP/Images/" + familyImages + ".jpg";
    } else {
        var stringAnimalBabesImages = animalBabesImages.toString();
        document.getElementById("photographyAnimalBabes").src = "Photography_Images/AnimalBabes/" + stringAnimalBabesImages + ".jpg";
        animalBabesImages++;
    }
   
}
function startImagesChangeAnimalBabesPhotos() {
    setTimeout(imagesChangeAnimalBabesPhotos, 4000);
};







