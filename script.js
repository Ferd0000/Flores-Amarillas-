
window.onload = () => {

    const setVh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);



    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    const poemText = "Hoy no puedo darte un ramo en mis manos,\n" + 
        "pero sí puedo darte un jardín en mi corazón.\n" +
        "FELIZ DIA DE LAS FLORES AMARILLAS\n\n" +
        "Amor mío, hoy quiero regalarte un pedacito de sol\n" +
        "en forma de flores amarillas, porque ellas representan\n" +
        "todo lo que siento por ti: alegría, energía y la luz\n" +
        "que trajiste a mi vida desde que llegaste. Cada pétalo\n" +
        "es un recordatorio de que a tu lado siempre hay motivos para\n" +
        "sonreír y soñar, incluso en los días más grises. Eres mi\n" +
        "primavera constante, el abrazo cálido que ilumina mi corazón."; 

    const poemElement = document.getElementById("poem-text");
    const root = document.documentElement;
    let charIndex = 0;
    const typingSpeed = 80;

    const stemHeights = {
        'flower--1': 70,
        'flower--2': 60,
        'flower--3': 55
    };

    function typeWriter() {
        if (charIndex < poemText.length) {

            poemElement.innerHTML += poemText.charAt(charIndex);
            charIndex++;

            const totalProgress = charIndex / poemText.length;
            const stemProgress = totalProgress;
            const leafProgress = Math.max(0, (totalProgress - 0.2) / 0.8);
            const flowerProgress = Math.max(0, (totalProgress - 0.5) / 0.5);

            document.querySelectorAll('.flower').forEach(flower => {
                const baseHeight = stemHeights[flower.classList[1]];
                const currentHeight = baseHeight * stemProgress;
                flower.querySelector('.flower__line').style.height = `${currentHeight}vmin`;
            });

            root.style.setProperty('--leaf-growth', leafProgress.toFixed(2));
            root.style.setProperty('--flower-growth', flowerProgress.toFixed(2));

            setTimeout(typeWriter, typingSpeed);
        } else {
            poemElement.classList.add("typing-done");

            root.style.setProperty('--leaf-growth', 1);
            root.style.setProperty('--flower-growth', 1);
            document.querySelectorAll('.flower').forEach(flower => {
                const baseHeight = stemHeights[flower.classList[1]];
                flower.querySelector('.flower__line').style.height = `${baseHeight}vmin`;
            });
        }
    }

    typeWriter();
    function createStars() {
        const night = document.querySelector('.night');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            night.appendChild(star);
        }
    }
    createStars();
};
                            