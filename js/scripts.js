// Randomize Header

// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = 'http://picsum.photos/201/300';
var img1 = 'http://picsum.photos/200/303';
var img2 = 'http://picsum.photos/200/302';

// Show Images
$('header img').attr('src', eval('img' + numRand) );

// Activate Gallery
$('figure').lightGallery({
    selector: 'a', 
    thumbnail: true,
    share:false,
    mode: 'lg-scale-up',
    download: false,
});

// Random Number
var max = 4;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

// Change Fonts
$('h1').addClass('font' + numRand);