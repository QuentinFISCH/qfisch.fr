const divheader = document.getElementById('headerdiv');
const headerSwaper = document.getElementById('headerSwaper');
const headerCloser = document.getElementById('headerClose');

const status = {
    OPEN: 'open',
    CLOSE: 'close',
    MOUV: 'mouv'
}

var headerStatus = /*sessionStorage.getItem('headerStatus') != null ? sessionStorage.getItem('headerStatus') : */status.CLOSE;

if (headerStatus == status.OPEN) {
    openHeader();
}

function toggleHeader() {
    if(headerStatus == status.MOUV) {
        return;
    }

    if(headerStatus == status.CLOSE) {
        headerStatus = status.MOUV;
        openHeader();
    }
    else {
        headerStatus = status.MOUV;
        closeHeader();
    }
}

function openHeader() {
    divheader.style.height = '100vh';
    //divheader.style.display = 'flex';
    headerSwaper.style.visibility = 'hidden';
    headerSwaper.style.opacity = '0';
    headerSwaper.style.display = 'none';
    // headerCloser.style.visibility = 'visible';
    // headerCloser.style.opacity = '1';
    // headerCloser.style.display = 'block';
    setTimeout(function() {
        sessionStorage.setItem('headerStatus', status.OPEN);
        headerStatus = status.OPEN;
        //divheader.style.overflow = 'auto';
    }, 300)
}

function closeHeader() {
    divheader.style.height = 0;
    headerSwaper.style.transform = '';
    //divheader.style.display = 'none';
    headerSwaper.style.visibility = 'visible';
    headerSwaper.style.opacity = '1';
    headerSwaper.style.display = 'block';
    // headerCloser.style.visibility = 'hidden';
    // headerCloser.style.opacity = '0';
    // headerCloser.style.display = 'none';
    setTimeout(function() {
        sessionStorage.setItem('headerStatus', status.CLOSE);
        headerStatus = status.CLOSE;
        divheader.style.overflow = 'hidden';
    }, 300)
}