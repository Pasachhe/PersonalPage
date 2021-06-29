// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  

  renderExperience();

  renderTopSkills();
  renderTools();
  renderSkills();
});


function renderTools(){
  var toolset = [
    {"skillname" : "Visual Studio", "level" : "95"},
    {"skillname" : "Azure DevOps", "level" : "80"},
    {"skillname" : "VS Code", "level" : "95"},
    {"skillname" : "Sublime", "level" : "95"},
    {"skillname" : "SQL Server", "level" : "95"},
    {"skillname" : "Azure Server", "level" : "95"},
    {"skillname" : "IIS Server", "level" : "95"},
    {"skillname" : "Docker", "level" : "30"},
    {"skillname" : "SVN", "level" : "80"},
    {"skillname" : "Git", "level" : "80"},
    {"skillname" : "SQL Server", "level" : "90"},
    {"skillname" : "TFS", "level" : "20"},
    {"skillname" : "Azure Board Kanban", "level" : "95"},
    {"skillname" : "Microsoft Teams", "level" : "95"},

  ]
  var toolsetsHtml = ``;
  toolset.forEach(ele => {
    toolsetsHtml += 
    `<span class="box">`+ele.skillname+`</span>`+
    ``;
  });
  
  $('#iTools').append(toolsetsHtml);
}


function renderTopSkills(){
  var skillset = [
    
    {"skillname" : "C# / JS / MVC / TSQL / DOM", "level" : "90"},
    {"skillname" : ".NET Core", "level" : "90"},
    {"skillname" : "Single Page & Progressive Web App Development", "level" : "90"},
    {"skillname" : "Database Design & Management", "level" : "90"},
    {"skillname" : "Application Architecture Design", "level" : "95"},
    {"skillname" : "Research & Development", "level" : "99"},
    {"skillname" : "Write Optimum & Clean Code", "level" : "90"},
    {"skillname" : "Application Deployment & DevOps ", "level" : "89"},
    {"skillname" : "Manage Development & Production Environment", "level" : "89"},
    {"skillname" : "Communicaton & Team Management", "level" : "89"},
    {"skillname" : "Discussing Client Requirement and BL", "level" : "89"},
    {"skillname" : "Design & Develop Futuristic Application", "level" : "89"},  

  ]
  var skillsetsHtml = ``;
  skillset.forEach(ele => {
    skillsetsHtml += 
    `<div class="progress-container progress-primary">`+
      `<span class="progress-badge">`+ele.skillname+`</span>`+
      `<div class="progress">`+
          `<div class="progress-bar progress-bar-primary aos-init aos-animate" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: `+ele.level+`%;"></div>`+
      `</div>`+
    `</div>`+
    
    ``;
  });
  
  $('#iTopSkills').append(skillsetsHtml);
}



function renderSkills(){
  var skillset = [
    
    {"skillname" : "C#", "level" : "90"},
    {"skillname" : "TSQL", "level" : "90"},
    {"skillname" : ".NET Core", "level" : "90"},
    {"skillname" : "MVC", "level" : "95"},
    {"skillname" : "Java Script", "level" : "95"},
    {"skillname" : "React", "level" : "80"},
    {"skillname" : "Blazor", "level" : "20"},
    {"skillname" : "Stripe", "level" : "80"},
    {"skillname" : "WIQL", "level" : "95"},
    {"skillname" : "GQL", "level" : "20"},
    {"skillname" : "LINQ", "level" : "80"},
    {"skillname" : "Mongo DB", "level" : "20"},
    {"skillname" : "Node JS", "level" : "20"},
    
    {"skillname" : "JExcel", "level" : "90"},
    {"skillname" : "DevExtreme", "level" : "85"},
    {"skillname" : "Twilio", "level" : "95"},
    
    {"skillname" : "R&D", "level" : "99"},
    {"skillname" : "Web API", "level" : "95"},
    {"skillname" : "Azure Function API", "level" : "95"},
    {"skillname" : "Azure AD/B2C", "level" : "85"},
    {"skillname" : "Identity Server", "level" : "85"},
    {"skillname" : "SSH", "level" : "50"},
    {"skillname" : "Boiler Plate", "level" : "90"},
    {"skillname" : "Team Work", "level" : "95"},
    
    
    
    {"skillname" : "Communication", "level" : "80"},
    {"skillname" : "Database Management", "level" : "80"},
    {"skillname" : "Team Management", "level" : "95"},
    {"skillname" : "Scrum Teams Meeting", "level" : "95"},
    {"skillname" : "Clean Architecture", "level" : "85"},
    {"skillname" : "Agile Development", "level" : "70"},

  ]
  var skillsetsHtml = ``;
  skillset.forEach(ele => {
    skillsetsHtml += 
    `<div class="progress-container progress-primary">`+
      `<span class="progress-badge">`+ele.skillname+`</span>`+
      `<div class="progress">`+
          `<div class="progress-bar progress-bar-primary aos-init aos-animate" data-aos="progress-full" data-aos-offset="10" data-aos-duration="2000" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: `+ele.level+`%;"></div>`+
      `</div>`+
    `</div>`+
    
    ``;
  });
  
  $('#iSkills').append(skillsetsHtml);
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




function printContent(){
  var restorepage = $('body').html();
  var printcontent = $('#experience').clone();
  var enteredtext = $('#text').val();
  $('body').empty().html(printcontent);
  window.print();
  $('body').html(restorepage);
  $('#text').html(enteredtext);
}


 
