// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
  renderProfessionalSkills();
  renderExperience();
  renderOfficialProjects();
  renderInternProjects();
  renderSchoolProjects();
});

function renderProfessionalSkills(){
  var skillset = [
    {"skillname" : "SVN", "level" : "80"},
    {"skillname" : "HTML/CSS", "level" : "75"},
    {"skillname" : "TSQL", "level" : "90"},
    {"skillname" : ".NET Core", "level" : "90"},
    {"skillname" : ".MVC", "level" : "95"},
    {"skillname" : "DevExtreme", "level" : "85"},
    {"skillname" : "C#", "level" : "90"},
    {"skillname" : "JExcel", "level" : "90"},
    {"skillname" : "Docker", "level" : "30"},
    {"skillname" : "R&D", "level" : "99"},
    {"skillname" : "Web API", "level" : "95"},
    {"skillname" : "WIQL", "level" : "95"},
    {"skillname" : "Stripe", "level" : "80"},
    {"skillname" : "React", "level" : "80"},
    {"skillname" : "TFS", "level" : "20"},
    {"skillname" : "LINQ", "level" : "80"},
    {"skillname" : "SSH", "level" : "50"},
    {"skillname" : "Java Script", "level" : "95"},
    {"skillname" : "Boiler Plate", "level" : "90"},
    {"skillname" : "Azure Server", "level" : "95"},
    {"skillname" : "IIS Server", "level" : "95"},
    {"skillname" : "Node JS", "level" : "20"},
    {"skillname" : "Team Work", "level" : "95"},
    {"skillname" : "Communication", "level" : "80"},
    {"skillname" : "Mongo DB", "level" : "20"},
    {"skillname" : "Azure DevOps", "level" : "80"},
    {"skillname" : "Visual Studio", "level" : "95"},
    {"skillname" : "VS Code", "level" : "95"},
    {"skillname" : "Sublime", "level" : "95"},
    {"skillname" : "SQL Server", "level" : "95"},
    {"skillname" : "Azure AD, ADB2C", "level" : "85"},
    {"skillname" : "Identity Server", "level" : "85"},
    {"skillname" : "Azure Function API", "level" : "95"},
    {"skillname" : "Database Management", "level" : "80"},
    {"skillname" : "Team Management", "level" : "95"},
    {"skillname" : "Scrum Teams Meeting", "level" : "95"},
    {"skillname" : "Clean Architecture", "level" : "85"},
    {"skillname" : "Agile Development", "level" : "70"},

  ]
  var skillsetsHtml = ``;//'<p><span style="color: #ff0000;">DDD</span>!!!!!<strong>666666666666</strong></p>';
  skillset.forEach(ele => {
    skillsetsHtml += `<div class="col-md-2">`+
    `<div class="progress-container progress-primary"><span class="progress-badge">`+ele.skillname+`</span>`+
      `<div class="progress">`+
        `<div class="progress-bar progress-bar-primary" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: `+ele.level+`%;"></div><span class="progress-value">`+ele.level+`%</span></div>`+
      `</div>`+
    `</div>`+
  ``;
  });
  


  $('#iProfessionalSkills').append(skillsetsHtml);
}


function renderExperience(){
  var expset = [
    { "duration":"Dec 2017 - Current","logo" : "images/spiralogics_logo.png", "degreeName":"Software Engineer",
      "degreeCategory":"Full Stack .Net Developer ","instuteName" : "Spiralogics Intl.","description":" " },
    { "duration":"June 2017 - Sept 2017","logo" : "images/websutra_logo.png", "degreeName":"Internship",
      "degreeCategory":"Training","instuteName" : "WebSutra Technology","description":" " },
    
    { "duration":"Sept 2013 - Sept 2017","logo" : "images/Kathmandu_University_Logo.svg", "degreeName":"Bachelor's Degree",
      "degreeCategory":"Bachelors of Computer Science","instuteName" : "Kathmandu University","description":" " },
    { "duration":"May 2011 - May 2013","logo" : "images/kuhs_logo.png", "degreeName":"High School",
      "degreeCategory":"GCE A-Levels Science","instuteName" : "Kathmandu University H.S.","description":" " },
    { "duration":"2008 - 2011","logo" : "", "degreeName":"Schooling",
      "degreeCategory":"School Leaving Certificate (SLC)","instuteName" : "Kshitij E.B.S.","description":" " },

  ]
  var expsetsHtml = ``;//'<p><span style="color: #ff0000;">DDD</span>!!!!!<strong>666666666666</strong></p>';
  expset.forEach(ele => {
    expsetsHtml +=  `<div class="card">
    <div class="row">
      <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
      <div class="card-body cc-education-header eperience-card-body">
      <img  class = "img-size" src="`+ele.logo+`" alt="`+ele.instuteName+`">
      <p class="category">`+ele.instuteName+`</p>
      </div>
      </div>
      <div class="col-md-6" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
      <div class="card-body eperience-card-body">
      <div class="h5">`+ele.degreeCategory+`</div>
      
      <p>`+ele.description+`</p>
      </div>
      </div>
      <div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
      <div class="card-body cc-education-header eperience-card-body">
      <p>`+ele.duration+`</p>
      <div class="h5">`+ele.degreeName+`</div>
      </div>
      </div>
    </div>
  </div>`;
  });
  $('#iExperience').append(expsetsHtml);
}


function renderOfficialProjects(){
  var projects = [ 
// {"projectName":"","projectDesc":"", "tools":""},
    {"projectName":"GB Care API Services","projectDesc":"Web API services for GB Care Client Application Data.", "tools":"VS19, .NET Core , TFS"},
    {"projectName":"Carisk","projectDesc":"Health care coordination application managing proposal to improve patient-centered outcomes and reduce overall cost of quality care.", "tools":"VS17, .NET Core 2.2, SQL, SVN (later Azure GIT), IIS, React"},
    {"projectName":"Med Mass Mail","projectDesc":"Subscription based bulk mailing system to the desired recipients.", "tools":"VS17, .NET Core 2.2, SQL,SVN, IIS, DevExtreme, SendGrid, Stripe"},
    {"projectName":"Cariboo Industrial Electronics Budget Planner","projectDesc":"Budget planning application for an electronic industry to deduce project construction budget.", "tools":"VS17, .NET Core 2.2, SQL, SVN, IIS , DevExtreme, JExcel"},
    {"projectName":"Restore Rehab Enterprise Data","projectDesc":"Health care enterprise data application for better and efficient referral management and insurance process.", "tools":"VS17, .NET Core 2.0, SQL, SVN, IIS, Docker, DevExtreme"}

    ]
  var projectsHtml = ``;
  
  projects.forEach(ele => {
    projectsHtml +=  `<div class="row line-below">
    <div class="col-md-8">
      <div class="project-card-body">
        <span class="h5">`+ele.projectName+` : </span>
        <span> `+ele.projectDesc+`</span>
      </div>
    </div>
    <div class="col-md-4 bg-secondary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
      <div class="project-card-body project-tools">
        <p >`+ele.tools+`</p>
      </div>
    </div>
  </div>`;
  });
  $('#iOfficialProjectList').append(projectsHtml);
}

function renderInternProjects(){
  var projects = [
    {"projectName":"Attendance and Salary Management System","projectDesc":"A web application that maintains the company employee’s Status and records Attendance and Salary automatically on hourly basis.", "tools":"VB2015, ASP.NET MVC, SQL"},
    {"projectName":"School Management System","projectDesc":"A web application that maintains and publish the record of Teachers, Students, Subjects and Results.", "tools":"VB2015, ASP.NET MVC, SQL"},
    {"projectName":"Hotel Management System","projectDesc":"A web application that allows to know room availability and book rooms in the hotel.", "tools":"VB2015, ASP.NET MVC, SQL"}
  
  ]
  var projectsHtml = ``;
  
  projects.forEach(ele => {
    projectsHtml +=  `<div class="row line-below">
    <div class="col-md-8">
      <div class="project-card-body">
        <span class="h5">`+ele.projectName+` : </span>
        <span> `+ele.projectDesc+`</span>
      </div>
    </div>
    <div class="col-md-4 bg-secondary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
      <div class="project-card-body project-tools">
        <p >`+ele.tools+`</p>
      </div>
    </div>
  </div>`;
  });
  $('#iInternProjectList').append(projectsHtml);
}

function renderSchoolProjects(){
  var projects = [
    {"projectName":"Nepal Time","projectDesc":"Desktop based application with modules (Load-shedding Schedule, Nepali Calander , AD-BS Converter, Age Calculator).", "tools":"VB 2008, Access 2002/3 (DB)"},
    {"projectName":"RMS Web Portal","projectDesc":"Web page of Ram Bhakta Memorial School for interactive information sharing and merit point calculation system with student data.", "tools":"PHP, MYSQL"},
    {"projectName":"Scientific Calculator","projectDesc":"Android application to do math with formulae and calculating with simple saved formulae.", "tools":"Android Studio"},
    {"projectName":"Dot Line AI Game","projectDesc":"AI based game for PC similar to Tic-Tac-Toe (Learning Purpose)", "tools":"IDLE Python"},
    {"projectName":"Inventory Management System","projectDesc":"A full functioning desktop application for management of stock housewith staff, vendor and customer care.", "tools":"VB 2008, Access 2002/03(DB)"},
    {"projectName":"Beam Balance Simulation","projectDesc":"Graphical Simulation of working beam balance.", "tools":"IDLE Python, TKinter (grahics)"},
    {"projectName":"Simple Chat System","projectDesc":"Interactive page to chat/comment over.", "tools":"Node JS , MongoDB"}
  ]
  var projectsHtml = ``;
  
  projects.forEach(ele => {
    projectsHtml +=  `<div class="row line-below">
    <div class="col-md-8">
      <div class="project-card-body">
        <span class="h5">`+ele.projectName+` : </span>
        <span> `+ele.projectDesc+`</span>
      </div>
    </div>
    <div class="col-md-4 bg-secondary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
      <div class="project-card-body project-tools">
        <p >`+ele.tools+`</p>
      </div>
    </div>
  </div>`;
  });
  $('#iSchoolProjectList').append(projectsHtml);
}


function printContent(){
  var restorepage = $('body').html();
  var printcontent = $('#experience').clone();
  var enteredtext = $('#text').val();
  $('body').empty().html(printcontent);
  window.print();
  $('body').html(restorepage);
  $('#text').html(enteredtext);
  }


// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
