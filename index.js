
const villas = [
    {
        title: "Luxury Villa",
        price: 2264000,
        image: "./images/property-01.jpg",
        address: "18 New Street Miami, OR 97219",
        bedrooms: 8,
        bathrooms: 8,
        area: 545,
        floor: 3,
        parking: 6
    },
    {
        title: "Luxury Villa",
        price: 1180000,
        image: "./images/property-02.jpg",
        address: "54 Mid Street Florida, OR 27001",
        bedrooms: 6,
        bathrooms: 5,
        area: 450,
        floor: 3,
        parking: 8
    },
    {
        title: "Luxury Villa",
        price: 1460000,
        image: "./images/property-03.jpg",
        address: "26 Old Street Miami, OR 38540",
        bedrooms: 5,
        bathrooms: 4,
        area: 225,
        floor: 3,
        parking: 1
    },
    {
        title: "Apartment",
        price: 584500,
        image: "./images/property-04.jpg",
        address: "12 New Street Miami, OR 12650",
        bedrooms: 4,
        bathrooms: 3,
        area: 125,
        floor: 25,
        parking: 2
    },
    {
        title: "Penthouse",
        price: 925600,
        image: "./images/property-05.jpg",
        address: "34 Beach Street Miami, OR 42680",
        bedrooms: 4,
        bathrooms: 4,
        area: 180,
        floor: 38,
        parking: 2
    },
    {
        title: "Modern Condo",
        price: 450000,
        image: "./images/property-06.jpg",
        address: "22 New Street Portland, OR 16540",
        bedrooms: 3,
        bathrooms: 2,
        area: 165,
        floor: 26,
        parking: 3
    }
];

const villaContainer = document.getElementById("villas");

villas.forEach((villa, index) => {
    const villaElement = document.createElement("div");
    villaElement.innerHTML = `
        <div class="flex flex-col items-center bg-white shadow-lg rounded-lg space-y-16"><a href="./selling.html">
            <img src="${villa.image}" class="villa-img rounded-lg w-max h-48 object-cover"  alt="${villa.title}"></a>
            <div class="villa-details text-center space-y-2 flex flex-col">
                <div class="flex justify-between items-center">
                    <span class="villa-title bg-blue-200 p-1 rounded-full text-sm font-semibold">${villa.title}</span>
                    <span class="villa-price text-red-500 font-bold">$${villa.price.toLocaleString()}</span>
                </div><div class="flex flex-col">
                <a href="./selling.html" class="villa-address font-bold">${villa.address}</a>
                <p class="villa-features ">Bedrooms:<b>${villa.bedrooms}</b>  | Bathrooms: <b>${villa.bathrooms}</b></p>
                <p class="villa-features">Area: <b>${villa.area} sqft</b> | Floor: <b>${villa.floor}</b>th| Parking: <b>${villa.parking}</b>cars</p>
            </div></div>
            <a href="./selling.html" class="bg-black text-white font-normal py-0.5 px-4 rounded-full hover:bg-orange-500 hover:text-black">Schedule a Visit</a>
        </div>
    `;
    villaElement.classList.add("villa", "w-full", "md:w-max", "p-4", "box-border");

    if (index % 3 === 0) {
        const rowElement = document.createElement("div");
        rowElement.classList.add("flex", "flex-wrap", "justify-center", "w-full");
        villaContainer.appendChild(rowElement);
    }

    villaContainer.lastChild.appendChild(villaElement);
});

function toggleAnswer(answerId, questionId) {
    const questionElement = document.getElementById(questionId);
    const answerElement = document.getElementById(answerId);

    answerElement.classList.toggle('hidden');

    if (answerElement.classList.contains('hidden')) {
        questionElement.style.color = 'black';
    } else {
        questionElement.style.color = 'orange';
    }

}


function validateForm() {
    const fields = ['name', 'email', 'subject', 'message'];
    let allFilled = true;

    fields.forEach(field => {
        const inputElement = document.getElementById(field);
        const errorElement = document.getElementById(field + 'Error');

        if (inputElement.value.trim() === '') {
            errorElement.classList.remove('hidden');
            allFilled = false;
        } else {
            errorElement.classList.add('hidden');
        }
    });

    if (!allFilled) {
        fields.forEach(field => {
            const inputElement = document.getElementById(field);
            if (inputElement.value.trim() === '') {
                inputElement.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        });
    } else {
        alert('Form submitted successfully!');
    }
}


function change(heading) {
    const sections = ['Apartment', 'Villa', 'Penthouse'];

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (section === heading) {
            element.classList.remove('hidden');
            element.classList.add('block');
            setTimeout(() => {
                element.classList.add('opacity-100');
                element.classList.remove('opacity-0');
            }, 10);
        } else {
            element.classList.remove('block');
            element.classList.add('hidden');
            element.classList.remove('opacity-100');
            element.classList.add('opacity-0');
            setTimeout(() => {
                element.classList.remove('opacity-100');
            }, 500);
        }
    });
}


const villasprop = [
    {
        title: "Luxury Villa",
        price: 2264000,
        image: "./images/property-01.jpg",
        address: "18 New Street Miami, OR 97219",
        bedrooms: 8,
        bathrooms: 8,
        area: 545,
        floor: 3,
        parking: 6
    },
    {
        title: "Luxury Villa",
        price: 1180000,
        image: "./images/property-02.jpg",
        address: "54 Mid Street Florida, OR 27001",
        bedrooms: 6,
        bathrooms: 5,
        area: 450,
        floor: 3,
        parking: 8
    },
    {
        title: "Luxury Villa",
        price: 1460000,
        image: "./images/property-03.jpg",
        address: "26 Old Street Miami, OR 38540",
        bedrooms: 5,
        bathrooms: 4,
        area: 225,
        floor: 3,
        parking: 1
    },
    {
        title: "Apartment",
        price: 584500,
        image: "./images/property-04.jpg",
        address: "12 New Street Miami, OR 12650",
        bedrooms: 4,
        bathrooms: 3,
        area: 125,
        floor: 25,
        parking: 2
    },
    {
        title: "Penthouse",
        price: 925600,
        image: "./images/property-05.jpg",
        address: "34 Beach Street Miami, OR 42680",
        bedrooms: 4,
        bathrooms: 4,
        area: 180,
        floor: 38,
        parking: 2
    },
    {
        title: "Modern Condo",
        price: 450000,
        image: "./images/property-06.jpg",
        address: "22 New Street Portland, OR 16540",
        bedrooms: 3,
        bathrooms: 2,
        area: 165,
        floor: 26,
        parking: 3
    }
];

const villaContainerprop2 = document.getElementById("villasprop");

villasprop.map((villas, indexl) => {
    const villaElement2 = document.createElement("div");
    villaElement2.innerHTML = `
            <div class="flex flex-col items-center bg-white shadow-lg rounded-lg space-y-4 p-6">
                <a href="./selling.html">
                    <img src="${villas.image}" class="villa-img rounded-lg w-full h-48 object-cover" alt="${villas.title}">
                </a>
                <div class="villa-details text-center space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="villa-title bg-blue-200 p-1 rounded-full text-sm font-semibold">${villas.title}</span>
                        <span class="villa-price text-red-500 font-bold">$${villas.price.toLocaleString()}</span>
                    </div>
                    <div class="flex flex-col">
                        <a href="./selling.html" class="villa-address font-bold">${villas.address}</a>
                        <p class="villa-features">Bedrooms: <b>${villas.bedrooms}</b> | Bathrooms: <b>${villas.bathrooms}</b></p>
                        <p class="villa-features">Area: <b>${villas.area} sqft</b> | Floor: <b>${villas.floor}</b>th | Parking: <b>${villas.parking}</b> cars</p>
                    </div>
                </div>
                <a href="./selling.html" class="bg-black text-white font-normal py-2 px-4 rounded-full hover:bg-orange-500 hover:text-black">Schedule a Visit</a>
            </div>
        `;
    villaElement2.classList.add("villa", "w-full", "md:w-1/3", "p-4", "box-border");

    if (indexl % 3 === 0) {
        var rowElement2 = document.createElement("div");
        rowElement2.classList.add("flex", "flex-wrap", "justify-center", "w-full", "mb-8");
        villaContainerprop2.appendChild(rowElement2);
    }

    rowElement2.appendChild(villaElement2);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const sections = ['slide1', 'slide2', 'slide3'];
    if (n > sections.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = sections.length }

    sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (index + 1 === slideIndex) {
            element.classList.remove('hidden', 'opacity-0');
            element.classList.add('block', 'opacity-100');
            setTimeout(() => {
                element.classList.add('opacity-100');
            }, 10);
        } else {
            element.classList.remove('block', 'opacity-100');
            element.classList.add('opacity-0', 'hidden');
        }
    });
}


function show() {
    let menu = document.getElementById('ham');
    if (getComputedStyle(menu).display === "none" || menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}
