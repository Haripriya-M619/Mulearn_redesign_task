/*=========================================
        OVERALL PROGRESS COUNTER
=========================================*/

const progressText = document.getElementById("overallProgress");

let value = 0;
const target = 74;

const counter = setInterval(() => {

    if (value >= target) {

        clearInterval(counter);

    } else {

        value++;

        progressText.innerHTML = value + "%";

    }

}, 25);

/*=========================================
        ANIMATE COURSE PROGRESS BARS
=========================================*/

window.addEventListener("load", () => {

    document.querySelectorAll(".fill").forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = width;
            bar.style.transition = "2s ease";

        }, 300);

    });

});

/*=========================================
        COURSE COMPLETION CHART
=========================================*/

const ctx = document.getElementById("courseChart");

new Chart(ctx, {

    type: "doughnut",

    data: {

        labels: [

            "Major Project",
            "Artificial Intelligence",
            "Cloud Computing",
            "IoT & Applications",
            "Industrial Safety",
            "Seminar"

        ],

        datasets: [{

            data: [

                82,
                68,
                74,
                60,
                96,
                80

            ],

            backgroundColor: [

                "#F97316",
                "#8B5CF6",
                "#38BDF8",
                "#06B6D4",
                "#22C55E",
                "#EC4899"

            ],

            borderWidth: 0,

            hoverOffset: 18

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "68%",

        plugins: {

            legend: {

                position: "bottom",

                labels: {

                    color: "#ffffff",

                    padding: 20,

                    font: {

                        size: 14

                    }

                }

            }

        }

    }

});

/*=========================================
        CARD ENTRANCE ANIMATION
=========================================*/

const cards = document.querySelectorAll(".course-card,.hero-stat,.chart-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".7s ease";

    observer.observe(card);

});

/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".open-btn").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = e.offsetX - size / 2 + "px";
        ripple.style.top = e.offsetY - size / 2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/*=========================================
        CARD HOVER GLOW
=========================================*/

document.querySelectorAll(".course-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 0 25px rgba(124,58,237,.35),0 0 60px rgba(37,99,235,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});

/*=========================================
        FLOATING HERO STATS
=========================================*/

document.querySelectorAll(".hero-stat").forEach((box, index) => {

    box.animate(

        [

            { transform: "translateY(0px)" },

            { transform: "translateY(-8px)" },

            { transform: "translateY(0px)" }

        ],

        {

            duration: 3000,

            iterations: Infinity,

            delay: index * 300

        }

    );

});