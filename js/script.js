const ready = () => {
    console.log('ready');
    document.querySelector('#file-input').addEventListener('change', handleFileChange, false);
}

document.addEventListener("DOMContentLoaded", ready);


function handleFileChange(event) {
    const reader = new FileReader();
    console.log(event);

    reader.onload = (eventResult) => {
        console.log(eventResult);
        document.querySelector('#file-content').textContent = eventResult.target.result;
    };

    reader.readAsText(event.target.files[0])
}

function handleFileLoad(event) {
    console.log(event);
    document.querySelector('#file-content').textContent = event.target.result;
}