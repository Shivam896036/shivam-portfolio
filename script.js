// Welcome Message
window.onload = function () {
    console.log("Welcome to Shivam's Portfolio");
};

// Resume Download Alert
function downloadResume() {
    alert("Resume Download Started Successfully!");
}

// Contact Button Message
function showMessage() {
    alert("Thank you for visiting my portfolio. Feel free to contact me!");
}

// Project Details Popup
function projectInfo(project) {

    if (project === "car") {
        alert(
            "🚗 Car Rental Management System\n\n" +
            "Technology: Java Swing, JDBC, MS SQL Server\n\n" +
            "Features:\n" +
            "• Customer Management\n" +
            "• Vehicle Booking\n" +
            "• Rental Records\n" +
            "• Billing & Payments\n" +
            "• Database Connectivity"
        );
    }

    else if (project === "erp") {
        alert(
            "🏫 ERP College Management System\n\n" +
            "Technology: JSP, Servlet, MS SQL Server\n\n" +
            "Features:\n" +
            "• Student Management\n" +
            "• Faculty Management\n" +
            "• Attendance Tracking\n" +
            "• Course Management\n" +
            "• Administration Dashboard"
        );
    }
}

// Current Year in Footer
document.addEventListener("DOMContentLoaded", function () {

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});