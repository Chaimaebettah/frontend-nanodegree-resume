/*
 This is empty on purpose! Your code to build the resume will go here.
 */
//var newfunThousghts = "AWESOME"
//var funThousghts = newfunThousghts.replace("AWESOME","FUN");
//$("#main").append(funThousghts);

//var  something = "hey";
//$("#main").append(something);


var name = "chaimae bettah";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "web developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var bio = {
    "name": "Chaimae",
    "role": "web developer",
    "contacts": {
        "mobile": "09928484675676",
        "email": "bettah.chaimae@gmail.com",
        "github": "Chaimaebettah",
        "twitter": "chaimae.bettah",
        "location": "Boston"
    },
    "WelcomeMessage": "Welcome To my Portfolio",
    "skills": ["HTML", "CSS", "JAVASCRIPT", "COMPUTER NETWORKING"],
    "picture": "chay.jpg"
}


var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);



var formattedpicture = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(formattedpicture);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
$("#header").append(formattedMessage);


//var work = {};
//work.position = "course developer";
//work.employer = "Udacity";
//work.years = "one year";

//var education = {};
//education["name"] = "NTIC Hay Riyad";
//education["years"] = "2012-2014";
//education["city"] = "Rabat";
//$("#main").append(work["position"]);
//$("#main").append(education.name);





var work = {
    "jobs": [
        {
            "employer": "job1",
            "title": "title-job1",
            "location": "rabat",
            "dates": "date-of-job1",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
            "employer": "job2",
            "title": "title-job2",
            "location": "seattle",
            "dates": "date-of-job2",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "

        }

    ]
}


var projects = {
    "project": [
        {
            "title": "simple project",
            "date": 2014,
            "description": "make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            "images": ["5.png", "6.png"]
        }


    ]
}


projects.display = function () {
    for (var pro in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[pro].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[pro].date);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[pro].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.project[pro].images.length > 0) {
            for (var img in projects.project[pro].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.project[pro].images[img]);
                $(".project-entry:last").append(formattedImage);

            }
        }


    }
}


projects.display();


if (bio.skills.length > 0) {
    $("#skills-section").append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
        $("#skills").append(HTMLskills.replace("%data%", skill));

    })
}


work.display = function () {
    for (var i in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employerElement = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var titleElement = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(employerElement + titleElement);

        var dateElement = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(dateElement);

        var locationElement = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(locationElement);

        var descriptionElement = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(descriptionElement);
    }

}

work.display();

//
//for(var job in work.jobs){
//    console.log(work.jobs[job]);
//}

for (var key in bio.contacts) {
    var contact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contacts[key]);
    $("#footerContacts").append(contact);
}


function inName(name) {
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

console.log(inName(name));
$("#main").append(internationalizeButton);


var education = {
    "schools": [
        {
            "name": "University Souisi Agdal",
            "location": "Rabat Morocco",
            "degree": ["BA", "PHD"],
            "majors": ["Physique", "Frensh", "Arabic"],
            "dates": "2011",
            "url": "http://www.um5.ac.ma/um5r/"
        },
        {
            "name": "NTIC",
            "location": "Rabat Morocco",
            "degree": ["IT", "CISCO"],
            "majors": ["computer networking"],
            "dates": "2014",
            "url": "www.http://nticrabat.com/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": 2016,
            "url": "http://www.udacity.com/courses/ud804"

        }
    ]
}


education.display = function () {

    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry").append(formattedName);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry").append(formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry").append(formattedMajor);
    }

    $(".education-entry").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        $(".education-entry").append(formattedOnlineTitle);
        $(".education-entry").append(formattedOnlineSchool);
        $(".education-entry").append(formattedOnlineDates);
        $(".education-entry").append(formattedUrl);


    }

}

education.display();





$("#mapDiv").append(googleMap);




