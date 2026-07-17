/*=========================================
        ATTENDANCE COUNTER
=========================================*/

const percentElement = document.getElementById("attendancePercent");

let count = 0;
const target = 94;

const counter = setInterval(() => {

    if (count >= target) {
        clearInterval(counter);
    } else {
        count++;
        percentElement.innerHTML = count + "%";
    }

}, 20);

/*=========================================
        ATTENDANCE TREND CHART
=========================================*/

const ctx = document.getElementById("attendanceChart");

new Chart(ctx, {

    type: "line",

    data: {

        labels: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ],

        datasets: [{

            label: "Attendance %",

            data: [
                92,
                94,
                91,
                95,
                96,
                93,
                94
            ],

            borderColor: "#38BDF8",

            backgroundColor: "rgba(56,189,248,.15)",

            fill: true,

            tension: .45,

            pointRadius: 6,

            pointHoverRadius: 8,

            pointBackgroundColor: "#7C3AED",

            pointBorderColor: "#ffffff",

            pointBorderWidth: 2

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                labels: {

                    color: "#ffffff",

                    font: {

                        size: 14

                    }

                }

            }

        },

        scales: {

            x: {

                ticks: {

                    color: "#CBD5E1"

                },

                grid: {

                    color: "rgba(255,255,255,.08)"

                }

            },

            y: {

                min: 80,

                max: 100,

                ticks: {

                    color: "#CBD5E1"

                },

                grid: {

                    color: "rgba(255,255,255,.08)"

                }

            }

        }

    }

});

/*=========================================
        HEATMAP TOOLTIPS
=========================================*/

const heatmap = document.querySelectorAll(".heatmap div");

const attendance = [

"Present (100%)",
"Present (95%)",
"Present (92%)",
"Present (100%)",
"Present (96%)",
"Absent",
"Present (100%)",

"Present (100%)",
"Present (94%)",
"Present (100%)",
"Present (90%)",
"Present (96%)",
"Present (100%)",
"Present (100%)",

"Absent",
"Present (100%)",
"Present (94%)",
"Present (90%)",
"Present (100%)",
"Present (96%)",
"Present (100%)"

];

heatmap.forEach((box, index) => {

    box.title = attendance[index];

});

/*=========================================
        CARD ANIMATION
=========================================*/

const cards = document.querySelectorAll(
".glass,.summary-card,.stat-box"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: .15

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = ".7s ease";

    observer.observe(card);

});

/*=========================================
        TIMELINE HOVER EFFECT
=========================================*/

document.querySelectorAll(".timeline-item").forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.boxShadow =
        "0 0 25px rgba(124,58,237,.35)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.boxShadow = "none";

    });

});

/*=========================================
        PROGRESS BAR ANIMATION
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