(function(PhotoWall) {

    PhotoWall.init({
        el:              '#gallery'
        ,padding:        1
        , lineMaxHeight: 260
    });

    var PhotosArray = []

    PhotosArray.push({
        th:{src:'images/photowall/night.jpg',
        }
    });

    PhotosArray.push({
        th:{src:'images/photowall/harborwalk.jpg',
        }
    });        

    PhotosArray.push({
        th:{src:'images/photowall/quincy.jpg',
        }
    });         

    PhotosArray.push({
        th:{src:'images/photowall/common.jpg',
        }
    });             


    PhotosArray.push({
        th:{src:'images/photowall/fenway.jpg',
        }
    });                 

    PhotosArray.push({
        th:{src:'images/photowall/city.jpg',
        }
    });                     

    PhotoWall.load(PhotosArray);
})(PhotoWall);