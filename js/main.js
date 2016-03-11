var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $p  = $('p:first-child');
var $h2 = $('h2');
var $ul = $('ul');
var $img = $('img');
var $firstItem = $('li:first-child');
var $lastItem = $('li:last-child');
var $dl = $('dl');
var $dt = $('dt');

$header.addClass('masthead');
$h1.removeClass('big-heading');
$h1.addClass('logo');
$main.addClass('wrapper');
$p.addClass('intro');
$h2.addClass('slug-head');
$ul.addClass('slug-list');
$img.addClass('slug-img');
$lastItem.addClass('slug-list-last');
$dl.addClass('classification');
$dt.removeClass('big-label');

$lastItem.show();
