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
    "projects": [
        {
            "title": "Portkey",
            "url": "https://github.com/amailk/PortKey",
            "images":["images/portkey.jpg"],
            "dates": "2015",
            "description": "Travel makes one modest. You see what a tiny place you occupy in the world. – Gustave Flaubert. Travel App that lets you track your travels, eats, stays and activities"
        },
        {
            "title": "Coolzone Automart",
            "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "images": ["images/coolzone.jpg"],
            "dates": "2016",
            "description": "Website for a garage small business that is based in Sri Lanka. Offering quick and efficient services to keep you on the road"
        },
        {
            "title": "Writer's Block",
            "url": "https://github.com/amailk/the-writers-block",
            "images":["images/writersblock.jpg"],
            "dates":"2016",
            "description" : "Writer's block is a blog page displaying a young writer's work over the years."
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

    for (key in bio.contacts) {
        var contact = bio.contacts[key];

        var formattedMobile = HTMLmobile.replace("%data%",contact.mobile);
        var formattedEmail = HTMLemail.replace("%data%", contact.email);
        var formattedGithub = HTMLgithub.replace("%data%", contact.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", contact.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", contact.location);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    };
};


education.display = function() {

    for (key in education.schools) {
        var school = education.schools[key];

        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
        formattedschoolName = formattedschoolName.replace("#",school.url);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedCity = HTMLschoolLocation.replace("%data%",school.city);
        var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);


        $(".education-entry:last").append(formattedschoolName + formattedDegree,formattedDates,formattedCity,formattedMajor);

    }

    $("#education").append(HTMLonlineClasses);

    for (key in education.onlinecourses) {
        var onlineCourse = education.onlinecourses[key];

        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        formattedTitle = formattedTitle.replace("#", onlineCourse.url);
        var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDates);
    }
};


work.display = function() {

    for (key in work.jobs) {
        var job = work.jobs[key];
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);

        $(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedworkLocation,formattedDescription);

    }
};

projects.display = function() {
    for (key in projects.projects) {
        var project =projects.projects[key];
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        formattedTitle = formattedTitle.replace("#",project.url);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);


        if (project.images.length >0) {
            for (image in project.images) {
                var formattedImage = HTMLprojectImage.replace("%data%", project.images[image]);
                $(".project-entry:last").prepend(formattedImage);
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