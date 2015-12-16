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
    "name":"Chaimae",
    "role":"web developer",
    "contacts": {
    "mobile": "09928484675676",
    "email": "bettah.chaimae@gmail.com",
    "github": "Chaimaebettah",
    "twitter": "chaimaebettah",
    "location": "Boston"
    },
    "WelcomeMessage": "hello",
    "skills": ["HTML","CSS","JAVASCRIPT","COMPUTER NETWORKING"],
    "picture": "chay.jpg"
}

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


var education = {
    "schools" : [
        {
            "name":"University Souisi Agdal",
            "city":"Rabat Morocco",
            "degree":"BA",
            "major":["Physique","frensh","arabic"],
            "dates":"2011",
            "url":"http://www.example.com"
        },
        {
            "name":"NTIC",
            "city":"Rabat Morocco",
            "degree":"IT",
            "major":["computer networking"],
            "dates":"2014",
            "url":"http://www.example.com"
        }
    ],
    "onlineCourses":[
        {
            "title":"Javascript syntax",
            "school":"Udacity",
            "dates":"2015",
            "url":"http://www.udacity.com"

        }
    ]
}


var work = {
    "jobs": [
        {
            "employer": "somethig",
            "title": "somthingjejk",
            "location": "soooo",
            "dates": "hjhj",
            "discription": "blafblabla"
        },
        {
            "employer": "somffethig",
            "title": "somtffhingjejk",
            "location": "sfffoooo",
            "dates": "hjffhj",
            "description": "blablfffabla"

        }

    ]
}

var projects = {
    "projct": [
        {
            "title": "somthhhingjejk",
            "dates": "hhjjjhj",
            "description": "blghablabla",
            "images": ["hkttp","httjp"]
        }

    ]
}
