/* --- data.js / script.js --- */

// 4.2 JavaScript to define hotel and room details
// Place your images (like "luxury_room_1.jpg") in the /images folder.
// I use professional placeholder images here for illustration.

const hotelsData = {
    "Luxury Hotels": [
        {
            id: "lux-deluxe",
            // 3.1 Room image placeholder
            image: "https://i.pinimg.com/1200x/52/d6/85/52d6854d6fb0c27718c347f34e5e861d.jpg", 
            name: "Grand Deluxe Suite",
            // 3.2 Room description and features
            description: "An oasis of elegance. Features a master bedroom, separate living area, and a private balcony with panoramic city views.",
            features: ["King Bed", "Rain Shower", "Free Wi-Fi", "City View", "Private Balcony"],
            // 3.3 Price per night
            price: 450, 
            perNight: "/night"
        },
        {
            id: "lux-royal",
            image: "https://i.pinimg.com/1200x/94/58/f2/9458f2e2224da675df3c7adda618a8b5.jpg",
            name: "Royal Penthouse",
            description: "Unmatched luxury. The entire top floor, private pool, and 24/7 butler service. Our most prestigious offering.",
            features: ["Multiple King Beds", "Private Pool", "Butler", "Ocean View", "Gourmet Kitchen"],
            price: 1200,
            perNight: "/night"
        },
         {
            id: "lux-deluxe",
            // 3.1 Room image placeholder
            image: "https://i.pinimg.com/736x/08/3f/f1/083ff1caf4ac004aea6e04bc2da255f0.jpg", 
            name: "Deluxe Suite",
            // 3.2 Room description and features
            description: "An oasis of elegance. Features a master bedroom, separate living area, and a private balcony with panoramic city views.",
            features: ["King Bed", "Rain Shower", "Free Wi-Fi", "City View", "Private Balcony"],
            // 3.3 Price per night
            price: 350, 
            perNight: "/night"
        },
         {
            id: "lux-deluxe",
            // 3.1 Room image placeholder
            image: "https://i.pinimg.com/736x/66/da/4a/66da4a5a6bbfe5800fdf6e03a66e2c07.jpg", 
            name: "Grand Suite",
            // 3.2 Room description and features
            description: "An oasis of elegance. Features a master bedroom, separate living area, and a private balcony with panoramic city views.",
            features: ["King Bed", "Rain Shower", "Free Wi-Fi", "City View", "Private Balcony"],
            // 3.3 Price per night
            price: 550, 
            perNight: "/night"
        }
    ],
    "Business Hotels": [
        {
            id: "biz-executive",
            image: "https://i.pinimg.com/1200x/57/ce/59/57ce599797459e0a79c3df5274b89a65.jpg",
            name: "Executive King Room",
            description: "Designed for productivity. Features a large ergonomic workspace and high-speed internet in a quiet environment.",
            features: ["King Bed", "Ergonomic Desk", "Fast Wi-Fi", "Coffee Maker", "Gym Access"],
            price: 250,
            perNight: "/night"
        },
         {
            id: "biz-executive",
            image: "https://i.pinimg.com/1200x/ba/91/1c/ba911c6f5f7915ae61cc9a376a1afae2.jpg",
            name: "Executive Room",
            description: "Designed for productivity. Features a large ergonomic workspace and high-speed internet in a quiet environment.",
            features: ["King Bed", "Ergonomic Desk", "Fast Wi-Fi", "Coffee Maker", "Gym Access"],
            price: 350,
            perNight: "/night"
        },
         {
            id: "biz-executive",
            image: "https://i.pinimg.com/1200x/c6/85/05/c6850582e9ffe5421a59e022b2b147ec.jpg",
            name: "King Room",
            description: "Designed for productivity. Features a large ergonomic workspace and high-speed internet in a quiet environment.",
            features: ["King Bed", "Ergonomic Desk", "Fast Wi-Fi", "Coffee Maker", "Gym Access"],
            price: 350,
            perNight: "/night"
        },
        {
            id: "biz-executive",
            image: "https://i.pinimg.com/736x/b7/73/dd/b773dd2309e925df182f8205f00a0b42.jpg",
            name: "Executive King Room",
            description: "Designed for productivity. Features a large ergonomic workspace and high-speed internet in a quiet environment.",
            features: ["King Bed", "Ergonomic Desk", "Fast Wi-Fi", "Coffee Maker", "Gym Access"],
            price: 450,
            perNight: "/night"
        }
    ],
    "Family Hotels": [
        {
            id: "fam-suite",
            image: "https://i.pinimg.com/1200x/09/5f/74/095f740b59d9f051a29dc3d221dcb298.jpg",
            name: "Spacious Family Suite",
            description: "Perfect for families. Two connecting bedrooms, a full kitchen, and a living area. Kids' club access included.",
            features: ["King & Queen Beds", "Kitchenette", "Free Kids Meals", "Washing Machine", "Balcony"],
            price: 380,
            perNight: "/night"
        },
         {
            id: "fam-suite",
            image: "https://i.pinimg.com/1200x/61/7d/0a/617d0a93997729aa6e3358a628a21c93.jpg",
            name: "Spacious Family Suite",
            description: "Perfect for families. Two connecting bedrooms, a full kitchen, and a living area. Kids' club access included.",
            features: ["King & Queen Beds", "Kitchenette", "Free Kids Meals", "Washing Machine", "Balcony"],
            price: 380,
            perNight: "/night"
        },
         {
            id: "fam-suite",
            image: "https://i.pinimg.com/736x/bd/77/a7/bd77a73a82894f9cd714ee912ee3d690.jpg",
            name: "Spacious Family Suite",
            description: "Perfect for families. Two connecting bedrooms, a full kitchen, and a living area. Kids' club access included.",
            features: ["King & Queen Beds", "Kitchenette", "Free Kids Meals", "Washing Machine", "Balcony"],
            price: 420,
            perNight: "/night"
        },
         {
            id: "fam-suite",
            image: "https://i.pinimg.com/1200x/94/2f/a2/942fa2083520ef232a1ff32d542dfe23.jpg",
            name: " Family Suite",
            description: "Perfect for families. Two connecting bedrooms, a full kitchen, and a living area. Kids' club access included.",
            features: ["King & Queen Beds", "Kitchenette", "Free Kids Meals", "Washing Machine", "Balcony"],
            price: 380,
            perNight: "/night"
        }
    ],
    "Budget Hotels": [
        {
            id: "bud-standard",
            image: "https://i.pinimg.com/1200x/43/4d/3c/434d3c053e5e9eb9924837cfa61d7338.jpg",
            name: "Standard Twin Room",
            description: "Essential comfort at an exceptional price. Clean, practical, and centrally located. Simple room for a rest.",
            features: ["Twin Beds", "Shared Bathroom", "Free Wi-Fi", "AC", "Daily Cleaning"],
            price: 80,
            perNight: "/night"
        },
         {
            id: "bud-standard",
            image: "https://i.pinimg.com/1200x/32/e9/e0/32e9e01c45d22813451c0462fb7930ad.jpg",
            name: "Standard Twin Room",
            description: "Essential comfort at an exceptional price. Clean, practical, and centrally located. Simple room for a rest.",
            features: ["Twin Beds", "Shared Bathroom", "Free Wi-Fi", "AC", "Daily Cleaning"],
            price: 90,
            perNight: "/night"
        },
         {
            id: "bud-standard",
            image: "https://i.pinimg.com/1200x/ba/56/bb/ba56bbfcc3d1c235bcd2e0b5dbda4a3f.jpg",
            name: "Standard Twin Room",
            description: "Essential comfort at an exceptional price. Clean, practical, and centrally located. Simple room for a rest.",
            features: ["Twin Beds", "Shared Bathroom", "Free Wi-Fi", "AC", "Daily Cleaning"],
            price: 80,
            perNight: "/night"
        },
         {
            id: "bud-standard",
            image: "https://i.pinimg.com/736x/33/d2/92/33d29260cbfe22ebef600295cdd3b6e9.jpg",
            name: "Standard Twin Room",
            description: "Essential comfort at an exceptional price. Clean, practical, and centrally located. Simple room for a rest.",
            features: ["Twin Beds", "Shared Bathroom", "Free Wi-Fi", "AC", "Daily Cleaning"],
            price: 70,
            perNight: "/night"
        }
    ],
    "Beach Resorts": [
        {
            id: "bch-villa",
            image: "https://i.pinimg.com/1200x/52/d6/85/52d6854d6fb0c27718c347f34e5e861d.jpg",
            name: "Beachfront Villa",
            description: "Wake up on the sand. A private villa just steps from the ocean, featuring an infinity pool and sunset views.",
            features: ["King Bed", "Private Pool", "Oceanfront", "Outdoor Shower", "Breakfast Included"],
            price: 650,
            perNight: "/night"
        },
         {
            id: "bch-villa",
            image: "https://i.pinimg.com/1200x/ff/23/49/ff23499a238b80129e933e19a4125498.jpg",
            name: "Beachfront Villa",
            description: "Wake up on the sand. A private villa just steps from the ocean, featuring an infinity pool and sunset views.",
            features: ["King Bed", "Private Pool", "Oceanfront", "Outdoor Shower", "Breakfast Included"],
            price: 850,
            perNight: "/night"
        },
         {
            id: "bch-villa",
            image: "https://i.pinimg.com/1200x/bc/e6/ff/bce6ff6c31485f91abd637ba904f42cb.jpg",
            name: "Beachfront Villa",
            description: "Wake up on the sand. A private villa just steps from the ocean, featuring an infinity pool and sunset views.",
            features: ["King Bed", "Private Pool", "Oceanfront", "Outdoor Shower", "Breakfast Included"],
            price: 1200,
            perNight: "/night"
        },
         {
            id: "bch-villa",
            image: "https://i.pinimg.com/1200x/b2/9d/b5/b29db5543a601fe774f6f27e582cbe4c.jpg",
            name: "Beachfront Villa",
            description: "Wake up on the sand. A private villa just steps from the ocean, featuring an infinity pool and sunset views.",
            features: ["King Bed", "Private Pool", "Oceanfront", "Outdoor Shower", "Breakfast Included"],
            price: 950,
            perNight: "/night"
        }
    ]
};

// --- Page Setup Logic ---

function setupRoomsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    // Default to Luxury if no category or invalid category is provided
    const validCategory = (category && hotelsData[category]) ? category : "Luxury Hotels";
    
    populateRoomList(validCategory);
    populateRoomSelect(validCategory);
    calculateTotal(); // Initialize calculation
}

// Fulfills 3: Display Rooms Details
function populateRoomList(category) {
    const roomsList = document.getElementById('rooms-list');
    const categoryTitle = document.getElementById('category-title');
    categoryTitle.innerText = `${category} - Room Options`;

    const rooms = hotelsData[category];
    if (!rooms) {
        roomsList.innerHTML = '<p>No rooms available in this category.</p>';
        return;
    }

    roomsList.innerHTML = ''; // Clear previous content
    rooms.forEach(room => {
        const roomCard = document.createElement('article');
        roomCard.className = 'room-card card';
        
        // Build the feature list HTML
        const featuresHtml = room.features.map(f => `<li>${f}</li>`).join('');

        roomCard.innerHTML = `
            <img src="${room.image}" alt="${room.name}" class="room-image" />
            <div class="room-details">
                <h3>${room.name}</h3>
                <p class="room-description">${room.description}</p>
                <ul class="room-features">${featuresHtml}</ul>
                <div class="room-price">
                    <span class="price">$${room.price.toFixed(2)}</span> ${room.perNight}
                </div>
                <a href="#reservation" class="btn" onclick="selectRoomInForm('${room.id}', '${category}')">Select This Room</a>
            </div>
        `;
        roomsList.appendChild(roomCard);
    });
}

// 4.2 JavaScript to interact with HTML elements and form
function selectRoomInForm(roomId, category) {
    // Populate the dropdown first if we came from a direct link to rooms.html
    const select = document.getElementById('room-select');
    if(select.value === "") populateRoomSelect(category);

    select.value = roomId;
    calculateTotal();
}

function populateRoomSelect(category) {
    const select = document.getElementById('room-select');
    select.innerHTML = '<option value="" disabled selected>-- Choose a Room --</option>'; // Clear existing options

    const rooms = hotelsData[category];
    if (!rooms) return;

    rooms.forEach(room => {
        const option = document.createElement('option');
        option.value = room.id;
        option.text = `${room.name} ($${room.price.toFixed(2)}/night)`;
        option.dataset.price = room.price; // Store price data in the option
        select.appendChild(option);
    });
}

// 3.4 Reservation page: total price selection and display
function calculateTotal() {
    const select = document.getElementById('room-select');
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const totalPriceSpan = document.getElementById('total-price');

    if (!select.value || !checkIn || !checkOut) {
        totalPriceSpan.innerText = '$0.00';
        return;
    }

    // Get selected price from data-price attribute
    const pricePerNight = parseFloat(select.options[select.selectedIndex].dataset.price);

    // Calculate the number of nights
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (nights <= 0 || isNaN(nights)) {
        totalPriceSpan.innerText = 'Invalid Dates';
        return;
    }

    // Calculate total
    const total = nights * pricePerNight;
    totalPriceSpan.innerText = `$${total.toFixed(2)}`;
}

// Prevent submitting form in this demo, show confirmation
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Don't actually reload the page
    
    // basic feedback
    alert('Thank you for choosing Zenith Hotels. Your reservation is pending confirmation.');
    // In a real application, you'd send this data to a backend server.
});
