const thisyear = new Date().getFullYear();
const element = document.getElementById("year");
if (element) {
    element.innerHTML = thisyear;
}
document.addEventListener('DOMContentLoaded', function() {
    
    // document.addEventListener('gesturechange', function(e) {
    //     e.preventDefault();
    // });
    const imageData = [
        // {
        //     hdUrl: 'https',
        //     smallUrl: 'https',
        //     alt: 'alt',
        //     photodetails: 'ƒ/8.0 1/60 ISO100 60mm',
        //     date: '3/2025',
        //     width: 400,
        //     height: 267
        // },
        {
            hdUrl: 'https://live.staticflickr.com/65535/54415974749_bdd84445e1_k.jpg',
            smallUrl: 'https://live.staticflickr.com/65535/54415974749_5d0e47f599_w.jpg',
            alt: 'Meet me on the Tennis Court, Santa Clara',
            photodetails: 'ƒ/5.0 1/320 ISO100 50mm',
            date: '3/2025',
            width: 400,
            height: 267
        },
        {
            hdUrl: 'https://live.staticflickr.com/65535/54414921172_74b609be3b_k.jpg',
            smallUrl: 'https://live.staticflickr.com/65535/54414921172_657fca5586_w.jpg',
            alt: 'Samsung, Silicon Valley',
            photodetails: 'ƒ/5.0 1/640 ISO100 50mm',
            date: '3/2025',
            width: 400,
            height: 267
        },
        {
            hdUrl: 'https://live.staticflickr.com/65535/54416029033_916a70a4e2_k.jpg',
            smallUrl: 'https://live.staticflickr.com/65535/54416029033_6305a741ac_w.jpg',
            alt: 'Don Callejon, Santa Clara',
            photodetails: 'ƒ/5.0 1/320 ISO100 18mm',
            date: '3/2025',
            width: 400,
            height: 267
        },
        {
            hdUrl: 'https://live.staticflickr.com/65535/54415787671_9e42c267a2_k.jpg',
            smallUrl: 'https://live.staticflickr.com/65535/54415787671_ce8e1bf824_w.jpg',
            alt: 'San Tomas Aquino / Saratoga Creek Trail',
            photodetails: 'ƒ/5.0 1/320 ISO100 19.4mm',
            date: '3/2025',
            width: 400,
            height: 267
        },
        
        {
            hdUrl: 'https://live.staticflickr.com/7402/10851117383_7eb92fd6b9_k.jpg',
            smallUrl: 'https://live.staticflickr.com/7402/10851117383_21f43022b0_w.jpg',
            alt: 'University of Santa Cruz (UCSC), The Office of Physical Education (OPERS)',
            photodetails: 'ƒ/8.0 1/800 ISO100 80mm',
            date: '1/2013',
            width: 267,
            height: 400
        },
        {
            hdUrl: 'https://live.staticflickr.com/7389/10850784955_3ca172cdb2_k.jpg',
            smallUrl: 'https://live.staticflickr.com/7389/10850784955_eba2b8cbc6_w.jpg',
            alt: 'University of Santa Cruz (UCSC), The Office of Physical Education (OPERS)',
            photodetails: 'ƒ/8.0 1/60 ISO100 60mm',
            date: '1/2013',
            width: 267,
            height: 400
        },
        {
            hdUrl: 'https://live.staticflickr.com/5524/10850785465_7141b35552_k.jpg',
            smallUrl: 'https://live.staticflickr.com/5524/10850785465_18213f6448_w.jpg',
            alt: 'To the Bookstore, University of Santa Cruz (UCSC), McLaughlin Dr',
            photodetails: 'ƒ/8.0 1/40 ISO800 60mm',
            date: '1/2013',
            width: 400,
            height: 267
        },
        {
            hdUrl: 'https://live.staticflickr.com/7318/10850845386_b5b52ce240_k.jpg',
            smallUrl: 'https://live.staticflickr.com/7318/10850845386_ecdc1eb173_w.jpg',
            alt: 'University of Santa Cruz (UCSC), Student Services',
            photodetails: 'ƒ/8.0 1/20 ISO800 28mm',
            date: '1/2013',
            width: 400,
            height: 267
        },
        {
            hdUrl: 'https://live.staticflickr.com/3740/10850938014_4eedccbd70_k.jpg',
            smallUrl: 'https://live.staticflickr.com/3740/10850938014_f622923aa0_w.jpg',
            alt: 'University of Santa Cruz (UCSC), Cowell College Fountain',
            photodetails: 'ƒ/8.0 1/60 ISO100 60mm',
            date: '1/2013',
            width: 267,
            height: 400
        },
        {
            hdUrl: 'https://live.staticflickr.com/5488/10850938324_155b8c8462_k.jpg',
            smallUrl: 'https://live.staticflickr.com/5488/10850938324_ba5f52dbd7_w.jpg',
            alt: 'University of Santa Cruz (UCSC), Cowell-Stevenson',
            photodetails: 'ƒ/8.0 1/60 ISO100 28mm',
            date: '1/2013',
            width: 267,
            height: 400
        },
        {
            hdUrl: 'https://live.staticflickr.com/5477/10850938714_fb28786c05_k.jpg',
            smallUrl: 'https://live.staticflickr.com/5477/10850938714_0f706e0e22_w.jpg',
            alt: 'University of Santa Cruz (UCSC), Cowell-Stevenson',
            photodetails: 'ƒ/8.0 1/60 ISO100 28mm',
            date: '1/2013',
            width: 400,
            height: 267
        },
        {
            hdUrl: 'https://live.staticflickr.com/7420/10850846516_57e386f1e3_k.jpg',
            smallUrl: 'https://live.staticflickr.com/7420/10850846516_4840c9bbc6_w.jpg',
            alt: 'University of Santa Cruz (UCSC), OPERS Volleyball',
            photodetails: 'ƒ/8.0 1/1000 ISO100 41mm',
            date: '1/2013',
            width: 400,
            height: 267
        },
        {
            hdUrl: 'https://live.staticflickr.com/8294/7594263012_427158caef_k.jpg',
            smallUrl: 'https://live.staticflickr.com/8294/7594263012_a7f24f85f1_w.jpg',
            alt: 'Santa Clara, CA',
            photodetails: 'ƒ/1.8 1/6400 ISO100 50mm',
            date: '6/2012',
            width: 400,
            height: 267
        }
    ];

    const imageContainer = document.getElementById('imageContainer');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('photoModalLabel');
    const modalAlt = document.getElementById('photoModalAlt');

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

    // Modal click handling
    const imageTriggers = document.querySelectorAll('.image-trigger');
    imageTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const hdUrl = this.getAttribute('data-hd-url');
            const photoDetails = this.querySelector('.photodetails').textContent;
            const altText = this.querySelector('img').getAttribute('alt'); 
            // Show a loading indicator (optional)
            modalImage.src = ''; // Clear the previous src
            modalImage.alt = 'Loading...';
            modalTitle.textContent = 'ƒ/ 1 ISO mm';
            modalAlt.textContent = '';

            const newImage = new Image(); // Create a new image object
            newImage.onload = function() {
                modalImage.src = hdUrl; // Set the new src when loaded
                modalImage.alt = 'High-Resolution Image';
                modalTitle.textContent = photoDetails;
                modalAlt.textContent = altText;
            };
            newImage.onerror = function(){
                modalImage.alt = 'Error loading image';
                modalImage.src = '';
                modalTitle.textContent = photoDetails;
            }
            newImage.src = hdUrl; // Start loading the new image
        });
    });
    // document.addEventListener('gesturestart', function(e) {
    //     e.preventDefault();
    // });
});
