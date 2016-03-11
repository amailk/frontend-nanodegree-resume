/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Ama Liyanage",
    "role" : "Web Developer",
    "contacts": [{
        "mobile" : "647-702-9040",
        "email": "liyaniama@gmail.com",
        "github": "amailk",
        "twitter": "@amailk",
        "location": "Toronto"
    }],
    "bioPic": "images/me.jpg",
    "welcomeMessage": "Hello! welcome to my resume",
    "skills" : ["HTML", "CSS", "JavaScript", "Painting", "Photography"]
};

var work = {
    "jobs": [
        {
            "employer": "Google",
            "title": "Junior Front End Developer",
            "location": "New York",
            "dates": "2014-2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
            "url": "www.google.com"
        },
        {
            "employer": "Amazon",
            "title": "Front End Developer",
            "location": "Seattle",
            "dates": "2015-2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
            "url": "www.amazon.com"
        }]
};

var projects = {
    "project": [
        {
            "title": "Portkey",
            "images":["images/portkey.jpg"],
            "dates": "2015",
            "description": "Travel makes one modest. You see what a tiny place you occupy in the world. – Gustave Flaubert. Travel App that lets you track your travels, eats, stays and activities"
        },
        {
            "title": "Coolzone Automart",
            "images": ["images/coolzone.jpg"],
            "dates": "2016",
            "description": "Website for a garage small business that is based in Sri Lanka. Offering quick and efficient services to keep you on the road"
        }]
};

var education = {
    "schools": [
        {
            "name": "University of Toronto",
            "city": "Toronto",
            "degree": "Honors Bachelor of Science",
            "majors": ["Biology", "Psychology"],
            "dates": "2010 - 2015",
            "url": "https://www.utoronto.ca/"

        }],

    "onlinecourses": [
        {
            "title": "Into to Programming",
            "school": "Udacity",
            "dates": "2015-2016",
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        },
        {
            "title": "Front End Development",
            "school": "Udacity",
            "dates": "2016-Present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedbioPic, formattedwelcomeMessage);
    $("#header").append(HTMLskillsStart);
    if(bio.skills.length>0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
        }
    }

    for (contact in bio.contacts) {

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    };
};


education.display = function() {

    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedCity = HTMLschoolLocation.replace("%data%",education.schools[school].city);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);


        $(".education-entry:last").append(formattedschoolName + formattedDegree,formattedDates,formattedCity,formattedMajor);

    }
    for (onlinecourse in education.onlinecourses) {

        $("#education").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlinecourses[onlinecourse].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlinecourses[onlinecourse].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlinecourses[onlinecourse].dates);
        $(".education-entry:last").append(formattedSchool, formattedTitle, formattedDates);
    }
};


work.display = function() {

    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedworkLocation,formattedDescription);

    }
};

projects.display = function() {
    for (item in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);


        if (projects.project[item].images.length >0) {
            for (image in projects.project[item].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        };
    }
};


function inName(name) {
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

    return newName;

};

bio.display();
work.display();
projects.display();
education.display();


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);