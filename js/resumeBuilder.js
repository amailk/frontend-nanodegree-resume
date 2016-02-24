/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Ama Liyanage",
    "role" : "Web Developer",
    "contacts": {
        "mobile" : "647-702-9040",
        "email": "liyaniama@gmail.com",
        "github": "amailk",
        "twitter": "@amailk",
        "location": "Toronto"
    },
    "welcomeMessage": "Hello! welcome to my resume",
    "skills" : [
        "HTML", "CSS", "JavaScript"
    ],
    "bioPic": "images/me.jpg"
}

var education = {
    "schools": [
        {
            "name": "University of Toronto",
            "city": "Toronto",
            "degree": "Honors Bachelor of Science",
            "majors": ["Biology", "Psychology"],
            "dates": 2010 - 2015,
            "url": "https://www.utoronto.ca/"

        }
    ],

    "online courses": [
        {
            "title": "Into to Programming",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        },
        {
            "title": "Front End Development",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
}
var work = {
    "jobs": [
        {
            "employer": "Google",
            "title": "Junior Front End Developer",
            "location": "Waterloo",
            "dates": 2015,
            "description": "Was responsible for blah blah blah"
        },
        {
            "employer": "Amazon",
            "title": "Front End Developer",
            "location": "Toronto",
            "dates": 2016,
            "description": "Did blah blah and blah, and more blah."
        }
    ]
}

var projects = {
    "eachproject": [
        {
            "title": "Portkey",
            "images":["images/portkey.jpg"],
            "dates": 2015,
            "description": "Travel App"
        },
        {
            "title": "Coolzone Automart",
            "images": ["images/coolzone.jpg" ],
            "dates": 2016,
            "description": "Website for garage small business"
        }
    ]
}


var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};


if(bio.skills.length >0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("" +
        "%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
}


for (job in work.jobs) {

    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;


    $(".work-entry:last").append(formattedEmployerTitle);


    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

    $(".work-entry:last").append(formattedDescription);
}

