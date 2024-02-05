window.onload = function () {
    document.getElementById("my_audio").play();
    var audio = document.getElementById("my_audio");
    audio.volume = 0.1;
}
function playFunction() {

    // fade background color from white to purple
    document.querySelector('body').classList.add('fade-background');

    // wait 3 seconds for background to change color
    // fade out button
    setTimeout(function () {
        const elementToFade = document.getElementById('KlickMichCutie');
        elementToFade.onanimationend = (e) => {
            if (e.target.classList.contains('fade-out')) {
                elementToFade.parentNode.removeChild(elementToFade);
            }
        };
        elementToFade.classList.add('fade-out');
    }, 3000);

    // Fade in first set of 4-line paragraphs
    setTimeout(function () {
        fadeParagraphsIn(0, 4);
    }, 9000);

    // 10-second break

    // Fade in second set of 4-line paragraphs
    setTimeout(function () {
        fadeParagraphsIn(4, 8);
    }, 19000);

    // 10-second break

    // Fade in third set of 4-line paragraphs
    setTimeout(function () {
        fadeParagraphsIn(8, 12);
    }, 29000);

    // 10-second break

    // Fade in last line
    setTimeout(function () {
        const paragraphs = document.querySelectorAll('.poem li');
        const lastLine = paragraphs[paragraphs.length - 1];
        lastLine.style.opacity = '0';
        lastLine.style.animation = 'fadeIn 3s forwards';
    }, 39000);

    // Fade in Yes No
    setTimeout(function () {
        document.getElementById('noButton').style.pointerEvents = 'auto';
        document.getElementById('yesButton').style.pointerEvents = 'auto';
        const elementToFadeIn = document.getElementById('toCenterYesNo');
        elementToFadeIn.classList.add('fade-in60');
        //cat image
        document.getElementById('containerCat').style.opacity = '0';
        document.getElementById('containerCat').style.animation = 'fadeIn 3s forwards';

    }, 39000);

    // Make yes no Stay with opacity = 0.6
    setTimeout(function () {
        document.getElementById('toCenterYesNo').style.opacity = "0.6";
    }, 42000);
}

function fadeParagraphsIn(start, end) {
    const paragraphs = document.querySelectorAll('.poem li');
    for (let i = start; i < end; i++) {
        const currentParagraph = paragraphs[i];
        currentParagraph.style.opacity = '0';
        currentParagraph.style.animation = 'fadeIn 3s forwards';
    }
}
function fadeParagraphsOut(start, end) {
    const paragraphs = document.querySelectorAll('.poem li');
    for (let i = start; i < end; i++) {
        const currentParagraph = paragraphs[i];
        currentParagraph.style.opacity = '0';
        currentParagraph.style.animation = 'fade 3s forwards';
    }
}
function fadeParagraphs2In(start, end) {
    const paragraphs = document.querySelectorAll('.poem2 li');
    for (let i = start; i <= end; i++) {
        const currentParagraph = paragraphs[i];
        currentParagraph.style.opacity = '0';
        currentParagraph.style.animation = 'fadeIn 3s forwards';
        if (i = end) {
            //herz image
            document.getElementById('containerHerz').style.opacity = '0';
            document.getElementById('containerHerz').style.animation = 'fadeIn 3s forwards';
        }
    }

}
// no-button escape
function onMouseOver() {
    console.log('mouse over no');
    var rand = Math.round(Math.random() * 1000);
    var btn = document.getElementsByClassName('no')[0];
    console.log(rand);
    btn.style.left = rand + 'px';
}
function onClickNo() {
    console.log('clicked no');
    var rand = Math.round(Math.random() * 1000);
    var btn = document.getElementsByClassName('no')[0];
    console.log(rand);
    btn.style.left = rand + 'px';
}

function onYesClick() {
    fadeParagraphsOut(0, 13);
    document.getElementById('yesButton').classList.add('fade-out');
    document.getElementById('noButton').classList.add('fade-out');
    document.getElementById('cat').classList.add('fade-out');
    //document.getElementById('herz').classList.add('fade-out');
    setTimeout(function () {
        document.getElementById('toCenterYesNo').style.opacity = "0";
        document.getElementById('containerCat').style.opacity = "0";
        document.getElementById('cat').style.opacity = "0"
        // document.getElementById('containerHerz').style.opacity = "0";
        // document.getElementById('herz').style.opacity = "0"
    }, 3000);
    setTimeout(function () {
        fadeParagraphs2In(0, 0);
    }, 4000);
    setTimeout(function () {
        fadeParagraphs2In(1, 1);
    }, 7000);
    setTimeout(function () {
        fadeParagraphs2In(2, 2);
    }, 10000);

}
