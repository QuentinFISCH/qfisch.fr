var loadingScreen = document.getElementById('loading');

function hideLoadingScreen() {
    loadingScreen.classList.add('no-opacity');
    document.body.style.overflow = 'unset';
    setTimeout( function(){
        loadingScreen.classList.add('hidden');
    }, 1000)
}