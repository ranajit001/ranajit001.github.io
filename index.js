$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 50) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 1600) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    
    // slide-up script
    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $("html").css("scrollBehavior", "auto");
    });

    // applying smooth scroll on menu items click
    $(".navbar .menu li a").click(function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, "slow");
    });

    // toggle menu/navbar script
    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // owl carousel script
    // $(".carousel").owlCarousel({
    //     margin: 20,
    //     loop: true,
    //     autoplayTimeOut: 2000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: false
    //         },
    //         600: {
    //             items: 2,
    //             nav: false
    //         },
    //         1000: {
    //             items: 3,
    //             nav: false
    //         }
    //     }
    // });
});


  function sendMail(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values from the form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Construct the `mailto:` URL
    const mailtoLink = `mailto:ranajitbangal01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open the mail client
    window.location.href = mailtoLink;
  }



  const resumeButtons = document.querySelectorAll(".resume-button");

  resumeButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      // Open viewable PDF in a new tab
      window.open("https://drive.google.com/file/d/1EM3n4MFzXznLaZkzvXd_wa7dhU6n8CxJ/view", "_blank");

      // Trigger download in background
      const downloadLink = document.createElement("a");
      downloadLink.href = "https://drive.google.com/uc?export=download&id=1EM3n4MFzXznLaZkzvXd_wa7dhU6n8CxJ";
      downloadLink.setAttribute("download", "");
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Prevent default <a> behavior (which may duplicate opening)
      e.preventDefault();
    });
  });

