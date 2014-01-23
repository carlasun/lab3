var flag = 0;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});
	
	$("#submitBtn").click(changeProject);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {
    // prevent the page from reloading
    e.preventDefault();
    var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");

    if (description.length == 0 || flag == 2) {
      /*$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");*/
	    $(description).fadeIn();
		flag = 1;
    } 
	else if ( flag == 1) {
		$(description).fadeOut();
		flag = 2;
	}
	else if ( flag == 2){
		$(description).fadeIn();
		flag = 1;
	}
	else {
		$(description).fadeOut();
		flag = 2
    }
}

function changeProject(e) {
	var projectID = $('#project').val();
	$(projectID).animate({
		width: $('#width').val()
	});
	
	var NewText = $('#description').val();
	$(projectID + " .project-description").text(NewText);
}