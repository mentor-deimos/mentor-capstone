const quotes = [
    "<p>“A mentor is someone who allows you to see the hope inside yourself.”<br> — Oprah Winfrey</p>",
    "<p>“Our chief want in life is somebody who will make us do what we can.”<br> — Ralph Waldo Emerson</p>",
    "<p>“Mentoring is a brain to pick, an ear to listen, and a push in the right direction.”<br> — John Crosby</p>",
    "<p>“We’re here for a reason. I believe a bit of the reason is to throw little torches out to lead people through the dark.”<br> — Whoopi Goldberg</p>",
    "<p>“The mind is not a vessel to be filled, but a fire to be kindled.”<br> — Plutarch</p>",
    "<p>“The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.”<br> — William Arthur Ward</p>",
    "<p>“What is a teacher? I'll tell you: it isn't someone who teaches something, but someone who inspires the student to give of her best in order to discover what she already knows.”<br> — Paulo Coelho, The Witch of Portobello</p>",
    "<p>“In learning you will teach, and in teaching you will learn.”<br> — Phil Collins</p>",
    "<p>“The best teacher is not the one who knows most but the one who is most capable of reducing knowledge to that simple compound of the obvious and wonderful.”<br> — H.L. Mencken</p>",
    "<p>“We must desire to see people rising in life, rather than looking for ways to contribute to their fall.”<br> — Bamigboye Olurotimi</p>",
];
const randomQuote = Math.floor(Math.random()*quotes.length);
$(document).ready(function () {
    $("#quotes").html(quotes[randomQuote])
});
$(document).on("click", ".signUp", function () {
        $(location).attr('href', 'signup');

});



const { styler, timeline, listen, easing } = window.popmotion;

const openModalButton = document.querySelector('.open-modal');
const cancelModalButton = document.querySelector('.modal-cancel');
const okModalButton = document.querySelector('.modal-ok');

const modalShade = styler(document.querySelector('.modal-shade'));
const modalContainer = styler(document.querySelector('.modal-container'));
const modal = styler(document.querySelector('.modal'));
const modalSections = Array.from(document.querySelector('.modal').children).map(styler);
const sectionLabels = modalSections.map((s, i) => 'section' + i);

const tweenUp = (track, duration = 500, yFrom = 100) => ({
    track,
    duration,
    from: { y: yFrom, opacity: 0 },
    to: { y: 0, opacity: 1 },
    ease: { y: easing.backOut, opacity: easing.linear }
});

const setStylers = (v) => {
    if (v.shade !== undefined) modalShade.set('opacity', v.shade);
    if (v.modal !== undefined) modal.set(v.modal);
    sectionLabels.forEach((label, i) => {
        if (v[label] !== undefined) modalSections[i].set(v[label])
    });
};

const showContainers = () => {
    modalShade.set('display', 'block');
    modalContainer.set('display', 'flex');
};

const hideContainers = () => {
    modalShade.set('display', 'none');
    modalContainer.set('display', 'none');
};

const openModal = () => {
    showContainers();

    timeline([
        { track: 'shade', from: 0, to: 1, ease: easing.linear },
        '-100',
        tweenUp('modal'),
        '-200',
        [...modalSections.map((s, i) => tweenUp(sectionLabels[i], 300, 50)), 50]
    ]).start(setStylers);
};

const cancelModal = () => {
    timeline([
        {
            track: 'modal',
            duration: 200,
            from: { y: 0, opacity: 1 },
            to: { y: 100, opacity: 0 },
            ease: { y: easing.easeIn, opacity: easing.linear }
        },
        '-100',
        { track: 'shade', from: 1, to: 0, ease: easing.linear, duration: 200 }
    ]).start({
        update: setStylers,
        complete: hideContainers
    });
};

const okModal = () => {
    timeline([
        {
            track: 'modal',
            duration: 200,
            from: { y: 0, opacity: 1 },
            to: { y: -200, opacity: 0 },
            ease: { y: easing.easeOut, opacity: easing.linear }
        },
        '-100',
        { track: 'shade', from: 1, to: 0, ease: easing.linear, duration: 300 }
    ]).start({
        update: setStylers,
        complete: hideContainers
    });
};

listen(openModalButton, 'click').start(openModal);
listen(cancelModalButton, 'click').start(cancelModal);
listen(okModalButton, 'click').start(okModal);

