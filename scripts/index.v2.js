var window_height = window.innerHeight;
var cmd_filed = false;
var trigger_height = window_height;

// Loader

if (window.innerWidth < 1000) {
    $('#skills-wrapper').css("visibility", "hidden")
    $('#list-wrapper').css("visibility", "visible")
    trigger_height = (9/10)*window.innerHeight
}

window.onresize = function () {
    if (window.innerWidth < 750) {
        $('.SiteMap').css("opacity", 0)
    }
    if ( window.innerWidth < 1000 ) {
        $('#skills-wrapper').css("visibility", "hidden")
        $('#list-wrapper').css("visibility", "visible")
    }
    else {
        $('#skills-wrapper').css("visibility", "visible")
        $('#list-wrapper').css("visibility", "hidden")
    }
}

$(window).on('load', function () {
    $('.loader-wrapper').fadeOut("slow");
    $('.Welcome').css("opacity", 1);
})

// Parallax Effect

document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/500
        const y = (window.innerHeight - e.pageY*speed)/500

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`

    });
}

// Terminal functions

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

// Discover effect

function discover(){
    document.querySelectorAll('.floater').forEach(floater => {
        floater.style.transform = `translateY(-100vh)`;
    })
    location.href ='#About'
}

// Scroll effects

window.onscroll = async function() {

    // Whoami translation

    if (window.pageYOffset == 0) {
        document.querySelectorAll('.floater').forEach(floater => {
            var delay = Math.random()*2;
            floater.style.transition = `${delay}s`;
            floater.style.transform = `translateY(0)`;
        })
    }

    // Navigation bar

    if (window.pageYOffset > window.innerHeight/10) {
        document.getElementById('Whoami').style.transform = 'translateX(0)'
        document.querySelectorAll(".social_item" ).forEach(item => {
            item.style.transform = 'translateY(0)'
        })
    }

    if (window.pageYOffset > 1.1*window.innerHeight && window.innerWidth > 750) {
        $('.SiteMap').css("opacity", 1)
    } else if (window.innerWidth > 750) {

        $('.SiteMap').css("opacity", 0)
    }

    if (window.pageYOffset >= trigger_height && !cmd_filed) {

        var cmd = "whoami"

        cmd_filed = true

        const cmd_letters = cmd.split("");
        let i = 0;
        while(i < cmd_letters.length) {
            await waitForMs(100);
            $('#cmd').append(cmd_letters[i]);
            i++
        }

        await waitForMs(200);

        $('.input-cursor').css('animation', 'none')
        $('.input-cursor').css('opacity', '0')

        var r_lines = document.querySelectorAll('.r_line')
        var emo = document.querySelectorAll('.term_emo')
        
        i = 0;
        while(i < r_lines.length) {
            r_lines[i].style.opacity = "1";
            emo[i].style.opacity = "1";
            await waitForMs(400);
            i++
        }

    }    

}
