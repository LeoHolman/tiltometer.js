$('img[usemap]').imageMap(); //Make image map responsive

var questions = {
    "1" : {
        "question" : "Write a research paper on censorship and the Internet",
        "Correct" : [1,2,4,8,9],
        "Almost" : [3,5,6],
        "False" : [7]
    },
    "2" : {
        "question" : "Check out the latest football scores",
        "Correct" : [6,3],
        "Almost" : [2,7],
        "False" : [1,4,5,8,9]
    },
    "3" : {
        "question" : "Research current information on a company before a job interview",
        "Correct" : [6,2,3,8],
        "Almost" : [7],
        "False" : [1,4,5,9]
    },
    "4" : {
        "question" : "Find a review of a current movie",
        "Correct" : [6,3,8],
        "Almost" : [7],
        "False" : [1,2,4,5,9]
    },
    "5" : {
        "question" : "Locate a brief history of the transistor and its inventors",
        "Correct" : [4,5,8,9],
        "Almost" : [2,6],
        "False" : [1,3,7]
    },
    "6" : {
        "question" : "Read about yesterday's earthquake in Mexico",
        "Correct" : [3,6],
        "Almost" : [2,7],
        "False" : [1,4,5,8,9]
    },
    "7" : {
        "question" : "Locate studies for a paper about employee email abuse",
        "Correct" : [9,8,4,1,2],
        "Almost" : [3,5,6,7],
        "False" : []
    },
};

//Take rotation function from stack overflow answer https://stackoverflow.com/questions/3020904/how-to-rotate-a-div-using-jquery
//Not yet implemented

// var rotation = 0;

// jQuery.fn.rotate = function(degrees) {
//     $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
//                  '-moz-transform' : 'rotate('+ degrees +'deg)',
//                  '-ms-transform' : 'rotate('+ degrees +'deg)',
//                  'transform' : 'rotate('+ degrees +'deg)'});
//     return $(this);
// };

// $('.rotate').click(function() {
//     rotation += 5;
//     $(this).rotate(rotation);
// }); 
