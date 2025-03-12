document.addEventListener("DOMContentLoaded", () => {
    const text = "Feel free to explore what we have for you!";
    const pElement = document.querySelector('.content p');
    
    function typeEffect(text, element) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 50); 
            }
        }
        type();
    }

    pElement.innerHTML = ''; 
    typeEffect(text, pElement);
});
//novel start
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20, 
    loop: true,
    speed: 7000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false, 
    },
});
//novel end
var swiper = new Swiper(".berita-slider", {
    slidesPerView: 3, 
    spaceBetween: 20, 
    loop: true, 
    speed: 7000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false, 
        reverseDirection: true,
    },
});
function expandCard(card) {
    let container = card.parentElement;

    card.classList.toggle("expand");

    if (card.classList.contains("expand")) {
        container.style.overflow = "visible"; // Pastikan kartu terlihat penuh

        card.innerHTML = `
        <div class="profile-container">
        <img src="asset/image/sapardi.png" alt="Profile " class="profile-img">
        <div class="profile-text">
            <h3 class="judul">Sapardi Djoko Damono</h3>
            <span class="tanggal">13/11/1943</span>
        </div>
    </div>
    <p class="puisi"><strong>HUJAN BULAN JUNI</strong><br><br>
        Hujan Bulan Juni<br>
        tak ada yang lebih tabah<br>
        dari hujan bulan Juni<br>
        dirahasiakannya rintik rindunya<br>
        kepada pohon berbunga itu<br>
        tak ada yang lebih bijak<br>
        dari hujan bulan Juni<br>
        dihapusnya jejak-jejak kakinya<br>
        yang ragu-ragu di jalan itu<br>
        tak ada yang lebih arif<br>
        dari hujan bulan Juni<br>
        dibiarkannya yang tak terucapkan<br>
        diserap akar pohon bunga itu
    </p>
            <div class="icons">
                <i class="fa fa-heart"></i>
                <i class="fa fa-comment"></i>
                <i class="fa fa-share"></i>
            </div>
        `;
    } else {
        container.style.overflow = "hidden"; 

        card.innerHTML = `
            <img src="asset/image/sapardi.png" alt="Profile">
            <h3>Sapardi Djoko Damono</h3>
        `;
    }
}
