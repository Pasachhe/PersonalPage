// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
  renderProfessionalSkills();
  renderExperience();
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
    {"skillname" : "Azile Development", "level" : "70"},

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
      "degreeCategory":"Full Stack .Net Developer ","instuteName" : "Spiralogics Intl.","description":"Description" },
    { "duration":"June 2017 - Sept 2017","logo" : "images/websutra_logo.png", "degreeName":"Internship",
      "degreeCategory":"Training","instuteName" : "WebSutra Technology","description":"Description" },
    
    { "duration":"Sept 2013 - Sept 2017","logo" : "images/Kathmandu_University_Logo.svg", "degreeName":"Master's Degree",
      "degreeCategory":"Bachelors of Computer Science","instuteName" : "Kathmandu University","description":"Description" },
    { "duration":"May 2011 - May 2013","logo" : "images/kuhs_logo.png", "degreeName":"High School",
      "degreeCategory":"GCE A-Levels Science","instuteName" : "Kathmandu University H.S.","description":"Description" },
    { "duration":"2008 - 2011","logo" : "", "degreeName":"Schooling",
      "degreeCategory":"School Leaving Certificate (SLC)","instuteName" : "Kshitij E.B.S.","description":"Description" },

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
