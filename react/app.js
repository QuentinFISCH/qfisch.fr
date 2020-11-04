let n = 0;

function render() {
    const title = <h1>
        Bonjour ! <span>{n}</span>
    </h1>

    ReactDOM.render(title, document.querySelector('#app'));
}

window.setInterval(() => {
    n++;
    render();
}, 1000);