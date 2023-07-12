const themes = [{
    name: 'blue',
    background: '#4ea9da',
    color: '#FAFAFA',
},
{
    name: 'cyan',
    background: '#3dc0b0',
    color: '#FAFAFA',
},
{
    name: 'blue-alt',
    background: '#FAFAFA',
    color: '#4ea9da',
},
{
    name: 'cyan-alt',
    background: '#FAFAFA',
    color: '#3dc0b0',
},
{
    name: 'brown',
    background: '#A26836',
    color: '#FAFAFA',
},
{
    name: 'orange',
    background: '#e17421',
    color: '#FAFAFA',
},
{
    name: 'crimson-red',
    background: '#e64f52',
    color: '#FAFAFA',
},
{
    name: 'red',
    background: '#af3d4e',
    color: '#FAFAFA',
},
{
    name: 'red-alt',
    background: '#FFFFFF',
    color: '#89303d',
},
{
    name: 'indigo-alt',
    background: '#FAFAFA',
    color: '#303F9F',
},
{
    name: 'gray-alt',
    background: '#FFFFFF',
    color: '#485564',
},
{
    name: 'material-cyan',
    background: '#00BCD4',
    color: '#FFFFFF',
},
{
    name: 'material-brown',
    background: '#845c4e',
    color: '#FFFFFF',
},
{
    name: 'material-gray',
    background: '#607D8B',
    color: '#FFFFFF',
},
{
    name: 'material-gray-alt',
    background: '#FFFFFF',
    color: '#455A64',
},
{
    name: 'gray-white',
    background: '#485564',
    color: '#FAFAFA',
},
{
    name: 'indigo-white',
    background: '#303F9F',
    color: '#FAFAFA',
},
{
    name: 'white-blue',
    background: '#FAFAFA',
    color: '#0277BD',
},

{
    name: 'yellow-black',
    background: '#FFEB3B',
    color: '#1E1E1E',
},
{
    name: 'black-yellow',
    background: '#1E1E1E',
    color: '#FFEB3B',
},
{
    name: 'black-orange',
    background: '#1E1E1E',
    color: '#FF6600',
},
{
    name: 'orange-black',
    background: '#FF6600',
    color: '#1E1E1E',
}
];

$(document).ready(function () {
paintTheme();
$("body").click(function () {
    paintTheme();
});
});

function paintTheme() {
var randomNumber = Math.floor(Math.random() * themes.length);
$("main").css({
    "background": themes[randomNumber].background,
    "color": themes[randomNumber].color
});
$("main .icons-social a").css({
    "color": themes[randomNumber].color
});
$("main .icons-social a svg path").css({
    "fill": themes[randomNumber].color
});
}