window.onload = function() {
    let testimonials_1 = [
        { image: "Images/gal-1.jpg", title: "WHAT", name: "Ann Smith", text: "Venus Beauty is my beauty sanctuary! With a sleek website and an amazing product range, it's my one-stop shop for all things beauty. Highly recommended!" },
        { image: "Images/gal-2.jpg", title: "PROFESSIONALS", name: "Kiley Brown", text: "Venus Beauty delivers excellence! From their user-friendly website to their high-quality products, I couldn't be happier with my shopping experience." },
        { image: "Images/gal-3.jpg", title: "SAYS", name: "Riana Gomez", text: "Venus Beauty is where beauty dreams come true! Easy browsing, quick delivery, and products that never disappoint. Five stars all the way!" },
        { image: "Images/gal-4.jpg", title: "ABOUT US", name: "Jennifer Lopez", text: "Venus Beauty is a game-changer! Their website is a breeze to navigate, and their products speak for themselves. Trust me, you won't be disappointed!" }
    ];

    let testimonials_2 = [
        { image: "Images/gal-5.jpg", title: "VIEW", name: "Makeup", text: "Our makeup line is crafted with precision and care, delivering flawless coverage and vibrant colors that enhance your natural beauty, leaving you feeling confident and ready to conquer the day." },
        { image: "Images/gal-6.jpg", title: "OUR", name: "Skincare", text: "Experience the luxury of our skincare products, meticulously formulated with nourishing ingredients to rejuvenate and revitalize your skin. Pamper yourself with our range, and unveil a radiant complexion you'll love." },
        { image: "Images/gal-7.jpg", title: "BEST", name: "Haircare", text: "Discover the secret to luscious locks with our haircare essentials. From nourishing shampoos to revitalizing treatments, our products are designed to nourish and strengthen your hair, giving you salon-worthy results from the comfort of your home." },
        { image: "Images/gal-8.jpg", title: "PRODUCTS", name: "Fragrance", text: "Indulge your senses with our exquisite fragrances that captivate and enchant. Each scent is carefully crafted to evoke emotion and leave a lasting impression, ensuring you make a statement wherever you go." }
    ];

    let container_1 = document.querySelector('.container_1');
    let container_2 = document.querySelector('.container_2');

    testimonials_1.forEach(function(testimonial) {
        const box = createTestimonialBox(testimonial);
        container_1.appendChild(box);
    });

    testimonials_2.forEach(function(testimonial) {
        const box = createTestimonialBox(testimonial);
        container_2.appendChild(box);
    });

    function createTestimonialBox(testimonial) {
        const box = document.createElement('div');
        box.classList.add('box');

        const image = document.createElement('img');
        image.src = testimonial.image;
        image.alt = testimonial.gal;

        const span = document.createElement('span');
        span.textContent = testimonial.title;

        const hvrDiv = document.createElement('div');
        hvrDiv.classList.add('hvr');

        const h1 = document.createElement('h1');
        h1.textContent = testimonial.name;

        const p = document.createElement('p');
        p.textContent = testimonial.text;

        hvrDiv.appendChild(h1);
        hvrDiv.appendChild(p);

        box.appendChild(image);
        box.appendChild(span);
        box.appendChild(hvrDiv);

        return box;
    }
};