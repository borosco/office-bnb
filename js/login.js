//This is for the login and agent page
function agentOffice(location,size,rate,category,wifiSpeed){
  this.location = location;
  this.size = size;
  this.rate = rate;
  this.category = category;
  this.wifiSpeed = wifiSpeed;
};

agentOffice.prototype.confirmDetails = function(){
  return "Your office space is located in " + this.location + " and is " + this.size + " m²." + "<br>" + " It is in the " + this.category + " category at a rate of " + this.rate + "Ksh per hour and a Wifi speed of " + this.wifiSpeed + " Mbps."
};

$(function(){
  $(".login-form").submit(function(event){
    event.preventDefault();
    var userName = $("#user-name").val();
    var password = $("#user-password").val();
    var fullName = $("#user-fullname").val();
    var email = $("#user-email").val();
    sessionStorage.setItem("userName",userName);
    sessionStorage.setItem("userPassword",password);
    sessionStorage.setItem("userFullName",fullName);
    sessionStorage.setItem("userEmail",email);
    $("#user-name").val("");
    $("#user-password").val("");
    $("#user-fullname").val("");
    $("#user-email").val("");
    location.replace("agent.html")
  });

  var agentName = sessionStorage.getItem("userName");
  $("#agent-account").text(agentName);

  $(".agent-form").submit(function(event){
    event.preventDefault();
    var location = $("#location").val();
    var size = $("#size").val();
    var rate = $("#rate").val();
    var category = $("#category").val();
    var wifiSpeed = $("#wifi").val();
    var newOfficeSpace = new agentOffice(location,size,rate,category,wifiSpeed);
    console.log(newOfficeSpace);
    
    $(".agent-form").append('<div class="card confirm-details">' +
                              '<h5>' + newOfficeSpace.confirmDetails() + '</h5>' +
                            '</div>');
    
    $("#location").val("");
    $("#size").val("");
    $("#rate").val("");
    $("#category").val("");
    $("#wifi").val("");
  });
});