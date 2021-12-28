(function() {

    function getTimeFromSeconds(second) {
        let time = new Date(second * 1000);
        return time.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC'
        });
    }

    const clock = document.querySelector('.clock');
    let second = 0;
    let timer;

    function start () {
       timer = setInterval(function(){
           second++
           clock.innerHTML = getTimeFromSeconds(second);
       }, 1000);
    }

    function reset () {
        clearInterval(timer);
        second = 0
        clock.innerHTML = getTimeFromSeconds(second);
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('start')){
            clearInterval(timer);
            start();
            clock.style.color = 'blue';
        }
        if (el.classList.contains('stop')){
            clearInterval(timer);
            clock.style.color = 'red';
        }
        if (el.classList.contains('reset')){
            reset();
            clock.style.color = 'black';
        }
    })

})();
