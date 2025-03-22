window.onload = function () {
    setTimeout(function () {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 1990); // 5000 מילישניות (5 שניות)
};



//מערך קישורי תמונות להחלפה -דף הבית
let arrayPictures = ["/header array/10111750_1.jpg", "/header array/28947421_1953101238352965_3722765973455973456_o.jpg",
    "/header array/110607484_3056949314419821_5400908344234823449_n-300x298.jpg",
    "/header array/295451273_447063457429928_7178324167091773470_n-300x300.png",
    "/header array/302325532_499534668843946_4804265168874592648_n-1024x1024-1-300x300.jpg",
    "/header array/Artboard-1-q23lnj54anw1svc04rldlueg1b7vkz5d03nc0vozps.jpg",
    "/header array/biz_700299842-q44vq9r15to7kv1apw2pjt4t1mj80heelm7eszmrww.jpg",
    "/header array/q2je7qjjqhbjku4f6re7l9i9q41eapi84b9japa574.jpg",
    "/header array/אתי-רוטנברג-קטלוג-למייל35-1-e1694626154392-1024x767-1-300x225.jpeg",
    "/header array/גיפ-4.gif",
    "/header array/לוגו-לאתרבדץ-1024x1024-1-300x300.jpg",
    "/header array/לוגו-רבקה-1-scaled-e1694722356656.jpg",
    "/header array/עיצוב פרחים.jpg",
    "/header array/חדש 1.png",
    "/header array/חדש 2.jpeg",
    "/header array/חדש 3.jpg",
    "/header array/חדש 4.jpg",
    "/header array/חדש 5.jpg",
    "/header array/חדש 6.jpg",
    "/header array/חדש 7.png",
    "/header array/r1.jpg",
    "/header array/r2.png",
    "/header array/t4.jpg",
    "/header array/r4.jpg",
    "/header array/t5.jpg",
    "/header array/t3.jpg",
    "/header array/r7.jpg",
    "/header array/t2.jpg",
    "/header array/r10.jpg",
    "/header array/t1.jpg",
];



// פונקציה להחלפת עיגולי תמונות-דף הבית
let j = 0;
let basicArr = document.querySelectorAll("#circle img");

const changePictures = () => {
    for (let i = 0; i < basicArr.length; i++) {
        basicArr[i].src = arrayPictures[j++];
        if (j === arrayPictures.length)
            j = 0;
    }
}

let circleIndex;
const setCircle = () => {
    circleIndex = setInterval(() => {
        changePictures();
    }, 4000);
}
setCircle();

function handleScroll() {

    let buttonplan = document.getElementById('planButton');
    let buttonPosition = buttonplan.getBoundingClientRect().top;
    let scrollPosition = window.innerHeight;

    if (buttonPosition < scrollPosition) {
        buttonplan.style.opacity = 1;
        buttonplan.classList.add('blink-link') /* הצגת הכפתור */

    } else {
        buttonplan.style.opacity = 0; /* הכפתור ייעלם בהדרגה */
        setTimeout(function () {
            if (buttonplan.style.opacity == 0) {
                buttonplan.style.display = 'none'; /* הסתרת הכפתור לאחר האנימציה */
            }
        }, 1000); /* הזמן שמתוארת האנימציה */
    }
}


// window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', function () {
    // קבל את המודאל ואת הכפתור לסגירה
    let successModal = document.getElementById('successModal');
    let closeBtn = document.getElementsByClassName('closebtn')[0];

    // הגדר את הפעולה כאשר טופס נשלח
    document.querySelector('.guide-form').addEventListener('submit', function (event) {
        event.preventDefault(); // מנע את שליחת הטופס

        // הצג את המודאל
        successModal.style.display = 'block';
    });

    // סגור את המודאל כאשר לוחצים על ה-X
    closeBtn.onclick = function () {
        successModal.style.display = 'none';
    };

    // סגור את המודאל אם לוחצים מחוץ למודאל
    window.onclick = function (event) {
        if (event.target == successModal) {
            successModal.style.display = 'none';
        }
    };
});


document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.animated-text h2');
    const text = textElement.innerText;
    textElement.innerHTML = text.split('').map(char => `<span>${char === ' ' ? '&nbsp;' : char}</span>`).join('');

    const spans = textElement.querySelectorAll('span');
    const offset = window.innerHeight / 1.5;

    function animateText() {
        const scrollPosition = window.scrollY + window.innerHeight;
        spans.forEach((span, index) => {
            const spanPosition = span.getBoundingClientRect().top + window.scrollY;
            if (scrollPosition > spanPosition) {
                span.style.animation = `fadeIn 0.5s ${index * 0.1}s forwards`;
            }
        });
    }

    window.addEventListener('scroll', animateText);
    animateText();
});


document.querySelector("#planButton").onclick = () => {
    location.href = "/HTML/eventPlanning.html";

}