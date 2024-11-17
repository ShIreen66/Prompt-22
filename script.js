let currentTab = 0;
showTab(currentTab);

function showTab(n) {
    let tabs = document.getElementsByClassName("tab");
    tabs[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }

    if (n == (tabs.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
        fillSummary();
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
}

function nextPrev(n) {
    let tabs = document.getElementsByClassName("tab");
    tabs[currentTab].style.display = "none";
    currentTab = currentTab + n;

    if (currentTab >= tabs.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    
    showTab(currentTab);
}

function fillSummary() {
    document.getElementById("summaryFname").innerText = document.getElementById("fname").value;
    document.getElementById("summaryLname").innerText = document.getElementById("lname").value;
    document.getElementById("summaryEmail").innerText = document.getElementById("email").value;
    document.getElementById("summaryEvent").innerText = document.getElementById("event").value;
    document.getElementById("summaryDate").innerText = document.getElementById("date").value;
}