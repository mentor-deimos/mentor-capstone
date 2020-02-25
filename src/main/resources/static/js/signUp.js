// $(document).ready(function() {
    let fileStackKey = document.querySelector('meta').content;
    const client = filestack.init(fileStackKey);
    const options = {
        // onUploadDone: (res) => console.log(res.filesUploaded[0].handle),
        onUploadDone: (res) => $("#stashFilestackURL").val(res.filesUploaded[0].handle),
    };



    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab

    function topDisplay() {
        if (currentTab == 0) {
            $("#lineone, #linetwo, #linethree").css("display", "none");
            $(".lcgroupone, .lcgrouptwo, .lcgroupthree").css("display", "block");
        }
        if (currentTab == 1) {
            $(".lcgroupone, #linetwo, #linethree").css("display", "none");
            $(" #lineone, .lcgrouptwo, .lcgroupthree").css("display", "block");
            $("#lineone, #bigCircle1").css("background-color", "#1777f2");
            $("#bigCircle1").html("<p style=\"margin-top: 2px\">✔</p>");
        }
        if (currentTab == 2) {
            $(".lcgroupone, .lcgrouptwo,  #linethree").css("display", "none");
            $("#lineone, #linetwo, .lcgroupthree").css("display", "block");
            $("#lineone, #bigCircle1, #linetwo, #bigCircle2").css("background-color", "#1777f2");
            $("#bigCircle1, #bigCircle2").html("<p style=\"margin-top: 2px\">✔</p>");
        }
        if (currentTab == 3) {
            $(".lcgroupone, .lcgrouptwo, .lcgroupthree").css("display", "none");
            $("#lineone, #linetwo, #linethree").css("display", "block");
            $("#lineone, #bigCircle1, #linetwo, #bigCircle2, #linethree, #bigCircle3").css("background-color", "#1777f2");
            $("#bigCircle1, #bigCircle2, #bigCircle3").html("<p style=\"margin-top: 2px\">✔</p>");
        }

    }

    function showTab(n) {
        var x = $(".tab");
        x.eq(n).css("display", "block");
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "Submit";
        } else {
            document.getElementById("nextBtn").innerHTML = "Next";
        }
    }

    $("#splashBtn").click(function () {
        $(location).attr('href', 'splash');
    });

    $(".interest1").click(function () {

            var radioCheck = $('.radioCheck').is(':checked');

        if (radioCheck === true) {
            $(this).css("background-color", "blue");
            $(this).css("color", "white");
        }
            else{
                $(this).css("background-color", "white");
                $(this).css("color", "black");
        }

    });
$(".interest2").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest3").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest4").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest5").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest6").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest7").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest8").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest9").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest10").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest11").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest12").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest13").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest14").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest15").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest16").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest17").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest18").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest19").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});
$(".interest20").click(function () {

    var radioCheck = $('.radioCheck').is(':checked');

    if (radioCheck === true) {
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    }
    else{
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }

});

    $("#menteeBtn, #mentorBtn").click(function () {
        $("#regForm").toggle();
        $("#pathchoice").toggle();
        $(".rightContent").css("display", "flex");
    });

    $("#menteeBtn, #mentorBtn").on('click', showTab(0));

    $("#prevBtn").click(function () {
        var x = $(".tab");
        x.eq(currentTab).css("display", "none");
        currentTab = currentTab - 1;
        if (currentTab >= x.length) {
            document.getElementById("regForm").submit();
            return false;
        }
        topDisplay();
        showTab(currentTab);
    });

    $("#nextBtn").click(function () {

        //form validation per tab follows
        if (currentTab === 0){
        if ($("#firstname").val() == "" || $("#lastname").val() == ""){
            alert("Empty fields will not be accepted.")
            return;
            }
        }

        if (currentTab === 1){

        if ($("#username").val() == "" || $("#password").val() == "" || $("#email").val() == ""){
            alert("Empty fields will not be accepted.")
            return;
            }
        }

        if (currentTab === 2){
            if ($("#location").val() == "" || $("#biography").val() == ""){
                alert("Empty fields will not be accepted.")
                return;
            }
        }

        // if (currentTab === 3){
        //     if ($("input:radio[name='html_radio']").is(":checked") == false){
        //         alert("You must check at least one interest to proceed.")
        //         return;
        //     }
        // }


        var x = $(".tab");
        x.eq(currentTab).css("display", "none");
        currentTab = currentTab + 1;

        if (currentTab >= x.length) {
            document.getElementById("regForm").submit();
            return false;
        }
        topDisplay();
        showTab(currentTab);
    });

    $("#menteeBtn").click(function () {
        $(".left_img").attr("src", "img/mentee.svg");
        $("#formpathselection").val(0).change();
    })

    $("#mentorBtn").click(function () {
        $(".left_img").attr("src", "img/mentorIcon.svg");
        $("#formpathselection").val(1).change();
    })

    $("#upload").click(function () {
        client.picker(options).open();
    });