const thisyear = new Date().getFullYear();
const element = document.getElementById("year");
if (element) {
    element.innerHTML = thisyear;
}
document.addEventListener('DOMContentLoaded', function() {
    const imageTriggers = document.querySelectorAll('.image-trigger');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('photoModalLabel');
    imageTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            
            const hdUrl = this.getAttribute('data-hd-url');
            const photoDetails = this.querySelector('.photodetails').textContent;
            console.log(hdUrl);
            modalImage.src = hdUrl;
            modalTitle.textContent = photoDetails;
        });
    });
});