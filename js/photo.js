const thisyear = new Date().getFullYear();
const element = document.getElementById("year");
if (element) {
    element.innerHTML = thisyear;
}
document.addEventListener('DOMContentLoaded', function() {
    const imageData = [
        {
            hdUrl: 'https://live.staticflickr.com/5488/10850938324_44331a345d_h.jpg',
            smallUrl: 'https://live.staticflickr.com/5488/10850938324_ba5f52dbd7_w.jpg',
            alt: 'UCSC Cowell Stevenson',
            photodetails: 'ƒ/8.0 1/60 ISO100 28mm',
            date: '1/2013',
            width: 267,
            height: 400
        },
        {
            hdUrl: 'https://live.staticflickr.com/5477/10850938714_06f4a45cfe_h.jpg',
            smallUrl: 'https://live.staticflickr.com/5477/10850938714_0f706e0e22_w.jpg',
            alt: 'UCSC Cowell Stevenson',
            photodetails: 'ƒ/8.0 1/60 ISO100 28mm',
            date: '1/2013',
            width: 400,
            height: 267
        },
        {
            hdUrl: 'https://live.staticflickr.com/7420/10850846516_ddd1d63c78_h.jpg',
            smallUrl: 'https://live.staticflickr.com/7420/10850846516_4840c9bbc6_w.jpg',
            alt: 'UCSC',
            photodetails: 'ƒ/8.0 1/1000 ISO100 41mm',
            date: '1/2013',
            width: 400,
            height: 267
        },
        {
            hdUrl: 'https://live.staticflickr.com/8294/7594263012_ad94b76729_h.jpg',
            smallUrl: 'https://live.staticflickr.com/8294/7594263012_a7f24f85f1_w.jpg',
            alt: 'Backyard',
            photodetails: 'ƒ/1.8 1/6400 ISO100 50mm',
            date: '6/2012',
            width: 400,
            height: 267
        }
    ];

    const imageContainer = document.getElementById('imageContainer');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('photoModalLabel');

    imageData.forEach(image => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('col-12', 'col-sm-6', 'col-md-4', 'image-trigger');
        imageDiv.setAttribute('data-bs-toggle', 'modal');
        imageDiv.setAttribute('data-bs-target', '#photoModal');
        imageDiv.setAttribute('data-hd-url', image.hdUrl);

        const imageContainerDiv = document.createElement('div');
        imageContainerDiv.classList.add('image-container'); // Apply the CSS class

        imageContainerDiv.innerHTML = `
            <img src="${image.smallUrl}" class="img-fluid w-100 border border-5 border-white mb-0" alt="${image.alt}">
        `;

        imageDiv.innerHTML = `
            <p class="small mb-0 text-end datedetails font-monospace">${image.date}</p>
            ${imageContainerDiv.outerHTML}
            <p class="photodetails text-light mb-0">${image.photodetails}</p>
        `;
        imageContainer.appendChild(imageDiv);
    });

    // Modal click handling (remains the same)
    const imageTriggers = document.querySelectorAll('.image-trigger');
    imageTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const hdUrl = this.getAttribute('data-hd-url');
            const photoDetails = this.querySelector('.photodetails').textContent;

            modalImage.src = hdUrl;
            modalTitle.textContent = photoDetails;
        });
    });
});
