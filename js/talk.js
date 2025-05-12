new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("彤彤 and 小文")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("希望彤彤可以天天开心哦，永远陪着小文😊")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();