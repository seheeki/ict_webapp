const openContainer = document.getElementById("jsListOpen");
const content = document.getElementById("jsContent");

const listOpen = () => {
    if(openContainer.style.display === 'block') {
        content.style.display = 'none';
    }
};