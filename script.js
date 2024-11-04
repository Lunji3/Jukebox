// Liste des chansons
const songs = [
    // Liste 1
    {
        title: "I'm Gonna Be (500 Miles)",
        artist: "The Proclaimers",
        cover: "./images/image1.png",  // Image de l'album
        file: "./music/music1.mp3"      // Fichier audio
    },
    {
        title: "Sweet Home Alabama",
        artist: "Lynyrd Skynyrd",
        cover: "images/image2.png",
        file: "music/music2.mp3"
    },
    {
        title: "All Star",
        artist: "Smash Mouth",
        cover: "images/image3.png",
        file: "music/music3.mp3"
    },
    {
        title: "Barbie Girl",
        artist: "Aqua",
        cover: "images/image4.png",
        file: "music/music4.mp3"
    },
    {
        title: "Aulos",
        artist: "Vladimir Cauchemar",
        cover: "images/image5.png",
        file: "music/music5.mp3"
    },
    {
        title: "Awake",
        artist: "Taku Iwasaki",
        cover: "images/image6.png",
        file: "music/music6.mp3"
    },
    {
        title: "Axel F",
        artist: "Harold Faltermeyer",
        cover: "images/image7.png",
        file: "music/music7.mp3"
    },
    {
        title: "The Ballad of Buck Ravers",
        artist: "SAMURAI",
        cover: "images/image8.png",
        file: "music/music8.mp3"
    },
    {
        title: "Barbara Streisand",
        artist: "Duck Sauce",
        cover: "images/image9.png",
        file: "music/music9.mp3"
    },
    {
        title: "Solid State Soldier",
        artist: "DRAGON BALL",
        cover: "images/image10.png",
        file: "music/music10.mp3"
    },
    {
        title: "Bloqués",
        artist: "Casseurs Flowters",
        cover: "images/image11.png",
        file: "music/music11.mp3"
    },
    {
        title: "Mr Blue Sky",
        artist: "Electric Light Orchestra",
        cover: "images/image12.png",
        file: "music/music12.mp3"
    },

    // Liste 2
    {
        title: "Holding Out for a Hero",
        artist: "Bonnie Tyler",
        cover: "images/image13.png",
        file: "music/music13.mp3"
    },
    {
        title: "Boombastic",
        artist: "Shaggy",
        cover: "images/image14.png",
        file: "music/music14.mp3"
    },
    {
        title: "Born to Be Alive",
        artist: "Patrick Hernandez",
        cover: "images/image15.png",
        file: "music/music15.mp3"
    },
    {
        title: "Brass",
        artist: "Dirty Rush & Gregor Es",
        cover: "images/image16.png",
        file: "music/music16.mp3"
    },
    {
        title: "Chariots of Fire",
        artist: "Vangelis",
        cover: "images/image17.png",
        file: "music/music17.mp3"
    },
    {
        title: "Circus Music",
        artist: "The Hit Crew",
        cover: "images/image18.png",
        file: "music/music18.mp3"
    },
    {
        title: "Coconut Mall",
        artist: "Arcade Player",
        cover: "images/image19.png",
        file: "music/music19.mp3"
    },
    {
        title: "Crab Rave",
        artist: "Noisestorm",
        cover: "images/image20.png",
        file: "music/music20.mp3"
    },
    {
        title: "Da Da Da",
        artist: "Trio",
        cover: "images/image21.png",
        file: "music/music21.mp3"
    },
    {
        title: "Running in the 90's",
        artist: "Initial D",
        cover: "images/image22.png",
        file: "music/music22.mp3"
    },
    {
        title: "X Gon' Give It To Ya",
        artist: "DMX",
        cover: "images/image23.png",
        file: "music/music23.mp3"
    },
    {
        title: "Down with the Sickness",
        artist: "Disturbed",
        cover: "images/image24.png",
        file: "music/music24.mp3"
    },

    // Liste 3
    {
        title: "Evil Morty Theme",
        artist: "Samuel Kim",
        cover: "images/image25.png",
        file: "music/music25.mp3"
    },
    {
        title: "Fous ta Cagoule",
        artist: "Fatal Bazooka",
        cover: "images/image26.png",
        file: "music/music26.mp3"
    },
    {
        title: "Free Bird",
        artist: "Lynyrd Skynyrd",
        cover: "images/image27.png",
        file: "music/music27.mp3"
    },
    {
        title: "Funkytown",
        artist: "Lipps Inc.",
        cover: "images/image28.png",
        file: "music/music28.mp3"
    },
    {
        title: "Gansta's Paradise",
        artist: "Coolio",
        cover: "images/image29.png",
        file: "music/music29.mp3"
    },
    {
        title: "Get Lucky",
        artist: "Daft Punk",
        cover: "images/image30.png",
        file: "music/music30.mp3"
    },
    {
        title: "Ghostbusters",
        artist: "Ray Parker Jr.",
        cover: "images/image31.png",
        file: "music/music31.mp3"
    },
    {
        title: "Il vento d'oro (Golden Wind)",
        artist: "Yugo Kanno",
        cover: "images/image32.png",
        file: "music/music32.mp3"
    },
    {
        title: "GTA : San Andreas",
        artist: "Micheal Hunter",
        cover: "images/image33.png",
        file: "music/music33.mp3"
    },
    {
        title: "Happy Together",
        artist: "The Turtles",
        cover: "images/image34.png",
        file: "music/music34.mp3"
    },
    {
        title: "House of Rising Sun",
        artist: "The Animals",
        cover: "images/image35.png",
        file: "music/music35.mp3"
    },
    {
        title: "HUMBLE.",
        artist: "Kendrick Lamar",
        cover: "images/image36.png",
        file: "music/music36.mp3"
    },

    // Liste 4
    {
        title: "I Want to Break Free",
        artist: "Queen",
        cover: "images/image37.png",
        file: "music/music37.mp3"
    },
    {
        title: "I Like to Move It",
        artist: "Will.i.am",
        cover: "images/image38.png",
        file: "music/music38.mp3"
    },
    {
        title: "Katakuri theme",
        artist: "Tito Cordone, Mr Beat",
        cover: "images/image39.png",
        file: "music/music39.mp3"
    },
    {
        title: "Krusty Krab",
        artist: "William Jacob",
        cover: "images/image40.png",
        file: "music/music40.mp3"
    },
    {
        title: "Lavender Town",
        artist: "Pokemon Rouge/Bleu",
        cover: "images/image41.png",
        file: "music/music41.mp3"
    },
    {
        title: "I'm Sexy and I Know It",
        artist: "LMFAO",
        cover: "images/image42.png",
        file: "music/music42.mp3"
    },
    {
        title: "Macarena",
        artist: "Los Del Rio",
        cover: "images/image43.png",
        file: "music/music43.mp3"
    },
    {
        title: "Master of Puppets",
        artist: "Metallica",
        cover: "images/image44.png",
        file: "music/music44.mp3"
    },
    {
        title: "Clubbed to Death",
        artist: "The Matrix",
        cover: "images/image45.png",
        file: "music/music45.mp3"
    },
    {
        title: "Megalovania",
        artist: "Undertale",
        cover: "images/image46.png",
        file: "music/music46.mp3"
    },
    {
        title: "Moon theme",
        artist: "Ducktales",
        cover: "images/image47.png",
        file: "music/music47.mp3"
    },
    {
        title: "Ante Up",
        artist: "M.O.P",
        cover: "images/image48.png",
        file: "music/music48.mp3"
    },

    // Liste 5
    {
        title: "Techno Syndrome",
        artist: "The Immortals",
        cover: "images/image49.png",
        file: "music/music49.mp3"
    },
    {
        title: "Heyyeyaaeyaaaeyaa",
        artist: "SLACKCIRCUS",
        cover: "images/image50.png",
        file: "music/music50.mp3"
    },
    {
        title: "Something in the Way",
        artist: "Nirvana",
        cover: "images/image51.png",
        file: "music/music51.mp3"
    },
    {
        title: "Pump It",
        artist: "Black Eyes Peas",
        cover: "images/image52.png",
        file: "music/music52.mp3"
    },
    {
        title: "Rasputin",
        artist: "Boney M",
        cover: "images/image53.png",
        file: "music/music53.mp3"
    },
    {
        title: "Right Here, Right Now",
        artist: "Fat Boy Slim",
        cover: "images/image54.png",
        file: "music/music54.mp3"
    },
    {
        title: "Never Gonna Give you Up",
        artist: "Rick Astley",
        cover: "images/image55.png",
        file: "music/music55.mp3"
    },
    {
        title: "Across the Board/End Credits",
        artist: "Basil Poledouris",
        cover: "images/image56.png",
        file: "music/music56.mp3"
    },
    {
        title: "Roundabout",
        artist: "Yes",
        cover: "images/image57.png",
        file: "music/music57.mp3"
    },
    {
        title: "September",
        artist: "Earth, Wind and Fire",
        cover: "images/image58.png",
        file: "music/music58.mp3"
    },
    {
        title: "Bangarang",
        artist: "Skrillrex",
        cover: "images/image59.png",
        file: "music/music59.mp3"
    },
    {
        title: "Skyfall",
        artist: "Adele",
        cover: "images/image60.png",
        file: "music/music60.mp3"
    },

    // Liste 6
    {
        title: "Soldier of Dance",
        artist: "Valve Studio Orchestra",
        cover: "images/image61.png",
        file: "music/music61.mp3"
    },
    {
        title: "Song 2",
        artist: "Blur",
        cover: "images/image62.png",
        file: "music/music62.mp3"
    },
    {
        title: "Main Title",
        artist: "Danny Elfman",
        cover: "images/image63.png",
        file: "music/music63.mp3"
    },
    {
        title: "Générique",
        artist: "Bob l'éponge",
        cover: "images/image64.png",
        file: "music/music64.mp3"
    },
    {
        title: "The Impérial March",
        artist: "John Williams",
        cover: "images/image65.png",
        file: "music/music65.mp3"
    },
    {
        title: "Shooting Stars",
        artist: "Bag Raiders",
        cover: "images/image66.png",
        file: "music/music66.mp3"
    },
    {
        title: "Stayin' Alive",
        artist: "Bee Gees",
        cover: "images/image67.png",
        file: "music/music67.mp3"
    },
    {
        title: "Stereo Madness",
        artist: "Forever Bound",
        cover: "images/image68.png",
        file: "music/music68.mp3"
    },
    {
        title: "Surfin' Bird",
        artist: "The Trashmen",
        cover: "images/image69.png",
        file: "music/music69.mp3"
    },
    {
        title: "Take On Me",
        artist: "A-Ha",
        cover: "images/image70.png",
        file: "music/music70.mp3"
    },
    {
        title: "Temperature",
        artist: "Sean Paul",
        cover: "images/image71.png",
        file: "music/music71.mp3"
    },
    {
        title: "Tetris theme",
        artist: "Video Game Players",
        cover: "images/image72.png",
        file: "music/music72.mp3"
    },

    // Liste 7
    {
        title: "The Good, The Bad and The Ugly",
        artist: "Ennio Morricone",
        cover: "images/image73.png",
        file: "music/music73.mp3"
    },
    {
        title: "The Next Episode",
        artist: "Dr Dre, Snoop Dogg",
        cover: "images/image74.png",
        file: "music/music74.mp3"
    },
    {
        title: "Thunderstruck",
        artist: "AC/DC",
        cover: "images/image75.png",
        file: "music/music75.mp3"
    },
    {
        title: "Tokyo Drift",
        artist: "Teriyaki Boys",
        cover: "images/image76.png",
        file: "music/music76.mp3"
    },
    {
        title: "The Only Thing They Fear Is You",
        artist: "Doom",
        cover: "images/image77.png",
        file: "music/music77.mp3"
    },
    {
        title: "Tri Poloski",
        artist: "Davay",
        cover: "images/image78.png",
        file: "music/music78.mp3"
    },
    {
        title: "Boom, Boom, Boom, Boom",
        artist: "Vengaboys",
        cover: "images/image79.png",
        file: "music/music79.mp3"
    },
    {
        title: "We Are Number One",
        artist: "Lazy Town",
        cover: "images/image80.png",
        file: "music/music80.mp3"
    },
    {
        title: "What'sa Wonderful World",
        artist: "Louis Armstrong",
        cover: "images/image81.png",
        file: "music/music81.mp3"
    },
    {
        title: "Without Me",
        artist: "Eminem",
        cover: "images/image82.png",
        file: "music/music82.mp3"
    },
    {
        title: "Who's Ready for Tomorrow",
        artist: "RAT BOY, IBDY",
        cover: "images/image83.png",
        file: "music/music83.mp3"
    },
    {
        title: "Materia Premonis (X files theme)",
        artist: "Mark Snow",
        cover: "images/image84.png",
        file: "music/music84.mp3"
    },
    
];

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();

// Sélection des éléments DOM
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const albumCover = document.getElementById('album-cover');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('current-time');
const totalDurationDisplay = document.getElementById('total-duration');
const songListElement = document.getElementById('songs');

// Charger une chanson dans le player
function loadSong(index) {
    const song = songs[index];
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    albumCover.src = song.cover;  // Affichage de l'image de l'album
    audio.src = song.file;        // Lecture du fichier audio

    // Mettre à jour le temps total une fois que l'audio est chargé
    audio.addEventListener('loadedmetadata', () => {
        totalDurationDisplay.textContent = formatTime(audio.duration);
    });
}

// Jouer la chanson
function playSong() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        playBtn.classList.add('disabled'); // Désactiver le bouton Play pendant la lecture
        pauseBtn.classList.remove('disabled'); // Réactiver Pause
    }
}

// Mettre en pause la chanson
function pauseSong() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        pauseBtn.classList.add('disabled'); // Désactiver Pause après avoir appuyé une fois
        playBtn.classList.remove('disabled'); // Réactiver Play
    }
}

// Désactiver tous les autres éléments de la liste sauf la chanson en cours
function disableOtherSongs(index) {
    const songItems = document.querySelectorAll('.song-item');
    songItems.forEach((item, idx) => {
        if (idx === index) {
            item.classList.add('disabled');  // Désactiver la chanson sélectionnée
        } else {
            item.classList.remove('disabled');  // Réactiver les autres chansons
        }
    });
}

// Sélectionner une chanson
function selectSong(index) {
    if (!document.querySelectorAll('.song-item')[index].classList.contains('disabled')) {
        currentSongIndex = index;
        loadSong(currentSongIndex);
        playSong();
        disableOtherSongs(currentSongIndex);  // Désactiver toutes les autres chansons
    }
}

// Mise à jour de la barre de progression et du temps actuel
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    // Mettre à jour le temps actuel
    currentTimeDisplay.textContent = formatTime(currentTime);

    // Mettre à jour la barre de progression
    const progress = (currentTime / duration) * 100;
    progressBar.value = progress;
});

// Activer toutes les chansons à la fin de la chanson en cours
audio.addEventListener('ended', () => {
    isPlaying = false;
    playBtn.classList.remove('disabled');  // Réactiver Play
    pauseBtn.classList.add('disabled');    // Désactiver Pause
    disableOtherSongs(-1); // Réactiver toutes les chansons
});

// Changer la position de lecture avec la barre de progression
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Fonction pour formater le temps (mm:ss)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Gestion des événements des boutons
playBtn.addEventListener('click', playSong);
pauseBtn.addEventListener('click', pauseSong);

// Boutons suivant et précédent
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
    disableOtherSongs(currentSongIndex);
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
    disableOtherSongs(currentSongIndex);
});

// Charger la première chanson au démarrage
loadSong(currentSongIndex);
pauseSong();  // Assurer que la chanson est en pause au démarrage

// Générer la liste des chansons avec numéro et vignette
function loadSongList() {
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.classList.add('song-item');

        // Numéro de la chanson
        const songNumber = document.createElement('span');
        songNumber.classList.add('song-number');
        songNumber.textContent = index + 1; // Numéro de la chanson

        // Vignette de la chanson
        const thumbnail = document.createElement('img');
        thumbnail.classList.add('song-thumbnail');
        thumbnail.src = song.cover; // Image de la couverture

        // Titre et artiste de la chanson
        const songInfo = document.createElement('div');
        songInfo.classList.add('song-info');
        const songTitle = document.createElement('p');
        songTitle.textContent = song.title;
        const artistName = document.createElement('span');
        artistName.textContent = song.artist;

        // Ajouter les informations à l'élément
        songInfo.appendChild(songTitle);
        songInfo.appendChild(artistName);

        // Ajouter les éléments à l'élément li
        li.appendChild(songNumber);
        li.appendChild(thumbnail);
        li.appendChild(songInfo);

        // Ajouter l'événement de sélection de chanson
        li.addEventListener('click', () => selectSong(index));

        // Ajouter à la liste de chansons
        songListElement.appendChild(li);
    });
}

// Charger la liste des chansons
loadSongList();
