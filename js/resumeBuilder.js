/*
This is empty on purpose! Your code to build the resume will go here.
 */

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

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

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedHeader = formattedName + formattedRole;
$("#header").prepend(formattedHeader);

$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));


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

function displayEducation() {

    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name)
        var formattedCity = HTMLschoolLocation.replace("%data%",education.schools[school].city);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);

        var formattedSchool = formattedschoolName + formattedCity + formattedMajor + formattedDegree;

        $(".education-entry:last").append(formattedSchool);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

    }

}

displayEducation();
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

function displayWork() {

    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);


        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

var projects = {
    "projects": [
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



function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}


$("#main").append(internationalizeButton);



projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);


        if (projects.projects[project].images.length >0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}