let content = document.getElementById('content');
let groovy = document.getElementById('groovy');
let recentPlay = document.getElementById('recentplay');
let rate = document.getElementById('rate');
let put = document.getElementById('put');
let input1 = document.getElementById('input1');
let inp = document.getElementById('inp');
let input2 = document.getElementById('input2');
let grid = document.getElementById('grid');
let grid1 = document.getElementById('grid1');
let pla = document.getElementById('pla');
let pla1 = document.getElementById('pla1');
let pla2 = document.getElementById('pla2');
let plu = document.getElementById('plu');
let plu1 = document.getElementById('plu1');
let plu2 = document.getElementById('plu2');
let cont = document.getElementById('cont');
let unknow = document.getElementById('unknow');
let unknown = document.getElementById('unknown');
let duration = document.getElementById('duration');
let unk = document.getElementById('unk');
let fa = document.getElementById('fa');
let check = document.getElementById('check');
let result = document.getElementById('result');
let title = document.getElementById('title');
let shu = document.getElementById('shu');
let backward = document.getElementById('backward');
let backwardm = document.getElementById('backwardm');
let forward = document.getElementById('forward');
let forwardm = document.getElementById('forwardm');
let faplay = document.getElementById('faplay');
let faplaym = document.getElementById('faplaym');
let fapause = document.getElementById('fapause');
let fapausem = document.getElementById('fapausem');
let display = document.getElementById('display');
let disp = document.getElementById('disp');
let vol = document.getElementById('vol');
let vol1 = document.getElementById('vol1');
let sliding = document.getElementById('sliding');
let slider = document.getElementById('slider');
let sliderm = document.getElementById('sliderm');
let starting = document.getElementById('starting');
let start = document.getElementById('start');
let ending = document.getElementById('ending');
let end = document.getElementById('end');
let repeat1 = document.getElementById('repeat1 ');
let repeatone = document.getElementById('repeatone');
let incorrect = document.getElementById('incorrect');
let inc = document.getElementById('inc');
let form = document.getElementById('for');
let screen = document.getElementById('screen');
let mag = document.getElementById('mag');
let up = document.getElementById('up');
let pro = document.getElementById('pro');
let nowPlaying = document.getElementById('nowplaying');
let playNow = document.getElementById('playnoww');
let nothing = document.getElementById('nothing');
let playlist = document.getElementById('playlist');
let addlist = document.getElementById('addlist');
let body = document.getElementById('body');
let footer = document.getElementById('footer');
let contain = document.getElementById('contain');
let go1 = document.getElementById('go1');
let showplaylist = document.getElementById('showplaylist');
let deleteplaylist = document.getElementById('deleteplaylist');
let playme2 = document.getElementById('playme2');
let showNew = document.getElementById('shownew');
let showName = document.getElementById('showname');
let stream = document.getElementById('stream');
let get = document.getElementById('get');
let sportify1 = document.getElementById('sportify1');
let sportify = document.getElementById('sportify');
let dura = document.getElementById('dura');
let king = document.getElementById('king');
let showCenter = document.getElementById('showCenter');
let lumo = document.getElementById('lumo');
let iyke1 = document.getElementById('iyke1');
let iyke2 = document.getElementById('iyke2');
let iyke3 = document.getElementById('iyke3');
let iyke4 = document.getElementById('iyke4');
let naming = document.getElementById('naming');
let index = 0
let songObj;
let playMusic;
let mp3;
let times;
let all;
let lol;
let locate;
let currentId;
let nextSong;
let timer;
let timing;
let sec = 0;
let move = 0;
let music = [
    {
        name: 'Ed_Sheeran_Shape_of_You',
        song: ("./music/Ed_Sheeran_Shape_of_You.mp3"),
        id: '0'
    },
    {
        name: 'Flavour - Ololufe Ft. Chidinma',
        song: ("./music/Flavour - Ololufe Ft. Chidinma [Official Video]_1511385056.aac"),
        id: '1'
    },
    {
        name: 'Juice world robbery',
        song: "./music/juiceworld robbery.mp3",
        id: '2'
    },
    {
        name: 'juice world lucid dreams',
        song: "./music/juiceworld lucid dreams.mp3",
        id: '3'
    },
    {
        name: 'justin bieber',
        song: "./music/justin bieber ghost.mp3",
        id: '4'
    },
    {
        name: 'juice world electric',
        song: "./music/juce world electric.mp3",
        id: '5'
    },

    {
        name: 'juice world all girls',
        song: "./music/juice world all girls.mp3",
        id: '6'
    },
    {
        name: 'juice world stay high',
        song: "./music/juice world stay high.mp3",
        id: '7'
    },
    {
        name: 'juice world ft marshmell',
        song: "./music/juice world ft marshmell.mp3",
        id: '8'
    },
]

// function looper(){
// for (let index = 0; index < music.length; index++) {
//     display.innerHTML +=` <button onclick="findSong('${music[index].name}')" id="disp">
//     <div id="input1">${music[index].name}</div>
//     <div id="pla">${'<i class="fa-solid fa-play"></i>'}</div>
//     <div id="plu">${'<i class="fa-solid fa-plus"></i>'}</div>
//     <div id="unknown" class="unknown">Unknown Artist</div>
//     <div id="unknown" class="unknown">Unknown Album</div>
//     <div id="unknown" class="unknown">Unknown Genre</div>
//     </button>` 

// }
// }
// looper()


function show() {
    music.forEach(song => {
        display.innerHTML += ` <button onclick="findSong('${song.name}')" id="disp">
<div id="input1">${song.name}</div>
<div id="pla">${'<i class="fa-solid fa-play"></i>'}</div>
<div id="plu">${'<i class="fa-solid fa-plus"></i>'}</div>
<div id="unknown" class="unknown">Unknown Artist</div>
<div id="unknown" class="unknown">Unknown Album</div>
<div id="unknown" class="unknown">Unknown Genre</div>
<div id="rate" class="unknown"></div>
</button>`
        showCenter.innerHTML +=
            ` <button onclick="findSong('${song.name}')" id="desp">
<div id="in1">${song.name}</div></button>
`

    })
}
show()

function findSong(nameOfSong) {

    console.log(nameOfSong);
    setSong(nameOfSong)
    // nowPlaying.innerHTML=nameOfSong
    playNow.innerHTML = '';
    setPlaying(nameOfSong)
    fapause.style.display = 'block'
    faplay.style.display = 'none'
    fapausem.style.display = 'inline'
    faplaym.style.display = 'none'


    songObj = music.find((love) => {
        return love.name == nameOfSong
    })
    king.style.display = 'none'
    currentId = songObj.id
    slider.value = 0
    sliderm.value = 0
    console.log(songObj);
    update()
    playing();
    updateTime()
}

function playing() {
    if (playMusic) {
        mp3.pause();
        mp3 = '';
        playMusic = false
    }
    mp3 = new Audio(songObj.song);
    mp3.play()
    playMusic = true
    changeVolume()
    changeDuration()
}
function pauseMusic() {
    fapause.style.display = 'none'
    fapausem.style.display = 'none'
    faplay.style.display = 'block'
    faplaym.style.display = 'inline'
    iyke2.style.display = 'none'
    iyke3.style.display = 'block'
    if (playMusic) {
        mp3.pause()
        playMusic = false

    }

}
function setSong(p) {
    title.innerHTML = p
    naming.innerHTML = p

}

function listen() {
    fapause.style.display = 'block'
    fapausem.style.display = 'inline'
    faplay.style.display = 'none'
    faplaym.style.display = 'none'
    iyke2.style.display = 'block'
    iyke3.style.display = 'none'
    if (title.innerHTML == '') {
        faplay.style.display = 'block'
        fapause.style.display = 'none'
    }
    if (title.innerHTML !== '') {
        mp3.play()
        playMusic = true
    }
    if (nowPlaying.innerHTML == '') {
        faplaym.style.display = 'inline'
        fapausem.style.display = 'none'
    }
}

function myMusic() {
    recentPlay.style.display = 'none';
    content.style.display = 'block'
    incorrect.style.display = 'none';
    result.style.display = 'none';
    playlist.style.display = 'none';
    addlist.style.display = 'none';
    king.style.display = 'none';
}
function recentlyPlayed() {
    content.style.display = 'none';
    recentPlay.style.display = 'block';
    incorrect.style.display = 'none';
    result.style.display = 'none';
    playlist.style.display = 'none';
    addlist.style.display = 'none';
    king.style.display = 'none';
}


function changeVolume() {
    starting.innerHTML = sliding.value
    if (playMusic) {
    mp3.volume=sliding.value/100
    }


    // mp3.volume = sliding.value / 100
    // mp3.volume = lumo.value / 100
}
function changeDuration() {
    sliderPosition = mp3.duration * (slider.value / 100);
    mp3.currentTime = sliderPosition
}
function mute() {
    vol.style.display = 'none';
    vol1.style.display = 'block';
    mp3.volume = 0
}

function unMute() {
    vol.style.display = 'block';
    vol1.style.display = 'none';
    mp3.volume = sliding.value / 100
}

function startAll() {
    repeat1.style.display = 'none'
    repeatone.style.display = 'block'
}
function repeatAll() {
    repeat1.style.display = 'block'
    repeatone.style.display = 'none'

}




function sear() {
    all = music.find(el => {
        return el.name == put.value
    })
    console.log(all);
    if (all) {
        result.style.display = 'block'
        content.style.display = 'none'
        recentPlay.style.display = 'none'
        up.style.display = 'none'
        playlist.style.display = 'none';
        addlist.style.display = 'none';
        king.style.display = 'none';
        form.innerHTML = `Results for "${all.name}"`

        screen.innerHTML = `<button onclick="findSong('${all.name}')" id="disp">
    <div id="input1">${all.name}</div>
    <div id="pla">${'<i class="fa-solid fa-play"></i>'}</div>
    <div id="plu">${'<i class="fa-solid fa-plus"></i>'}</div>
    <div id="unknown" class="unknown">Unknown Artist</div>
    <div id="unknown" class="unknown">Unknown Album</div>
    <div id="unknown" class="unknown">Unknown Genre</div>
    </button>`
        incorrect.style.display = 'none'
        put.value = '';
    } else {
        result.style.display = 'none'
        incorrect.style.display = 'block'
        content.style.display = 'none'
        recentPlay.style.display = 'none'
        up.style.display = 'none'
        playlist.style.display = 'none';
        addlist.style.display = 'none';
        king.style.display = 'none';
        inc.innerHTML = `Results for "${put.value}"`
        put.value = '';
    }

}

// function look(k){
// screen.innerHTML=k
// }
function presentPlaying() {
    groovy.style.display = 'none'
    result.style.display = 'none'
    incorrect.style.display = 'none'
    up.style.display = 'block'
    playlist.style.display = 'none'
    addlist.style.display = 'none'
    king.style.display = 'none';
}

function back() {
    groovy.style.display = 'block';
    up.style.display = 'none';
    playlist.style.display = 'none';
    content.style.display = 'block';
    addlist.style.display = 'none'
    king.style.display = 'none';

}
function setPlaying(p) {
    nowPlaying.innerHTML = p
    // music.forEach((el)=>{
    //     playNow.innerHTML+=
    //     `
    //     <button onclick="findSong('${el.name}')" id="dispp">
    //     <div id="input1">${el.name}</div>
    //     <div id="pla">${'<i class="fa-solid fa-play"></i>'}</div>
    //     <div id="plu">${'<i class="fa-solid fa-plus"></i>'}</div>
    //     <div id="unknown" class="unknown">Unknown Artist</div>
    //     <div id="unknown" class="unknown">Unknown Album</div>
    //     <div id="unknown" class="unknown">Unknown Genre</div>
    //     <div id="rate" class="unknown"></div>
    //     </button>`
    // })

    lol = music.find(el => {
        return el.name == nowPlaying.innerHTML
    })
    console.log(lol);
    playNow.innerHTML = `<button onclick="findSong('${lol.name}')" id="dispp">
    <div id="input1">${lol.name}</div>
    <div id="pla">${'<i class="fa-solid fa-play"></i>'}</div>
    <div id="plu">${'<i class="fa-solid fa-plus"></i>'}</div>
    <div id="unknown" class="unknown">Unknown Artist</div>
    <div id="unknown" class="unknown">Unknown Album</div>
    <div id="unknown" class="unknown">Unknown Genre</div>
    </button>`
}

function playlists() {
    playlist.style.display = 'block';
    recentPlay.style.display = 'none';
    content.style.display = 'none'
    incorrect.style.display = 'none';
    result.style.display = 'none';
    addlist.style.display = 'none'
    king.style.display = 'none';
    showNew.innerHTML += `<button id="icon">
<i class="fa-solid fa-sliders" id="slid"></i>
</button>
<div id="showname">${go1.innerHTML}</div>`
}
let selection = [];
function createPlaylist() {
    showplaylist.innerHTML = ''
    for (let index = 0; index < selection.length; index++) {
        showplaylist.innerHTML += `<div id="playme" onclick="player('${selection[index].name}')">
<button id="playme1"><i class="fa-solid fa-sliders"></i></button>
<button  id="playme2">${selection[index].name}</button>

</div>
<button id="marking" onclick="deleted('${index}')"><i class="fa-solid fa-xmark"></i></button>
`

    }
}
function create() {
    contain = document.getElementById('contain').value
    if (contain.value == '') {
        body.style.display = 'block'

    } else {
        addlist.style.display = 'block'
        body.style.display = 'none'
        content.style.display = 'none'
        footer.style.display = 'none'
        result.style.display = 'none'
        incorrect.style.display = 'none'
        content.style.display = 'none'
        recentPlay.style.display = 'none'
        king.style.display = 'none';
        playlist.style.display = 'none';
        //     showplaylist.innerHTML+=`<div id="playme" onclick="player('${contain.value}')">
        // <button id="playme1"><i class="fa-solid fa-sliders"></i></button>
        // <button  id="playme2">${contain.value}</button>
        // </div>`
        selection.push({ name: contain })
        createPlaylist()
        document.getElementById('contain').value = '';

        go1.innerHTML = contain


    }
    localStorage.setItem('pickArray', JSON.stringify(selection))
}

function deleted(params) {
    selection.splice(params, 1)
    createPlaylist()
}

function addition() {
    body.style.display = 'block'

}

function last() {
    // content.style.display='block'
    addlist.style.display = 'none'
    playlist.style.display = 'block'
    nothing.innerHTML = ''
    showNew.innerHTML += `<button id="icon">
<i class="fa-solid fa-sliders" id="slid"></i>
</button>
<div id="showname">${go1.innerHTML}</div>`

}

function player(nameOfPlaylist) {
    addlist.style.display = 'block';
    content.style.display = 'none';
    playlist.style.display = 'none';
    go1.innerHTML = nameOfPlaylist
    showNew.innerHTML = ''
}

function river() {
    stream.style.display = 'none';
    get.style.display = 'block';
}
function ocean() {
    stream.style.display = 'block'
    get.style.display = 'none'
}


function next() {
    if (currentId < music.length - 1) {
        currentId++
    }

    else if (currentId == music.length - 1) {
        currentId = 0
    }

    songObj = music.find(el => {
        return el.id == currentId

    })
    playNow.innerHTML = `<button onclick="findSong('${songObj.name}')" id="dispp">
<div id="input1">${songObj.name}</div>
<div id="pla">${'<i class="fa-solid fa-play"></i>'}</div>
<div id="plu">${'<i class="fa-solid fa-plus"></i>'}</div>
<div id="unknown" class="unknown">Unknown Artist</div>
<div id="unknown" class="unknown">Unknown Album</div>
<div id="unknown" class="unknown">Unknown Genre</div>
</button>`
    console.log(songObj);
    slider.value = 0
    sliderm.value = 0
    title.innerHTML = songObj.name
    nowPlaying.innerHTML = songObj.name
    naming.innerHTML = songObj.name
    fapause.style.display = 'block'
    faplay.style.display = 'none'
    playing()
}

function previous() {
    if (currentId !== 0) {
        currentId--
    } else if (currentId == 0) {
        currentId = music.length - 1
    }
    songObj = music.find(el => {
        return el.id == currentId
    })
    playNow.innerHTML = `<button onclick="findSong('${songObj.name}')" id="dispp">
<div id="input1">${songObj.name}</div>
<div id="pla">${'<i class="fa-solid fa-play"></i>'}</div>
<div id="plu">${'<i class="fa-solid fa-plus"></i>'}</div>
<div id="unknown" class="unknown">Unknown Artist</div>
<div id="unknown" class="unknown">Unknown Album</div>
<div id="unknown" class="unknown">Unknown Genre</div>
</button>`
    console.log(songObj);
    title.innerHTML = songObj.name
    nowPlaying.innerHTML = songObj.name
    naming.innerHTML = songObj.name

    slider.value = 0
    sliderm.value = 0

    fapause.style.display = 'block'
    faplay.style.display = 'none'
    playing()
}

// function time(){
// sec=0
// timing= setInterval(() => {
// sec=sec+1;
// slider.value++ 

// }, 2000);


// }

function loaded() {
    timer = setInterval(() => {
        move++
        if (move == 3) {
            groovy.style.display = 'block'
            king.style.display = 'none';
            clearInterval(timer)
        }
    }, 1000);
}
loaded()

// fetch('https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm')
// .then(res=> res.json())
// .then(res=>console.log(res))

// let ar =['mango', 'orrange', 'cashew']
// let newar=[{id:0},...ar]
// console.log(newar);
let cur = 0
let cu;
let dur;
let durable
function updtaeSlider() {
    if ((mp3.duration)) {
        position = mp3.currentTime * 100 / mp3.duration;
        slider.value = position
        dur = (mp3.duration / 60)
        end.innerHTML = dur.toFixed(2)
        cur = (mp3.currentTime / 60)
        cu = cur.toFixed(2)
        start.innerHTML = cu++

    }

    if (mp3.ended) {
        next()
    }
}

function update() {
    times = setInterval(() => {
        updtaeSlider()


    }, 1000);


}
// function updateTime(){
// if (mp3.duration) {
//     let curmins= Math.floor(mp3.currentTime/60)
//     let cursecs= Math.floor(mp3.currentTime - curmins *60)

//     let durmins= Math.floor(mp3.duration/60)
//     let dursecs= Math.floor(mp3.duration - durmins *60)

//     if (dursecs<10) {
//      dursecs='0'+dursecs
//     }
//     if (durmins<10) {
//         durmins='0'+durmins
//        }
//        if (curmins<10) {
//         curmins='0'+ curmins
//        }
//        if (cursecs<10) {
//         cursecs='0'+ cursecs
//        }  
//     start.innerHTML= curmins + ':' + cursecs 
//     end.innerHTML= durmins + ':' + dursecs 
// }
//  else{
//     start.innerHTML= '00' + ':' + '00'
//     end.innerHTML= '00' + ':' + '00'
// }

// }

// localStorage.setItem('selectArray', JSON.stringify(music))

function dom() {
    let data = JSON.parse(localStorage.getItem('pickArray'))
    if (data) {
        selection = data
        createPlaylist()
    }
}
dom()

// let tobiArray = selection
// console.log(tobiArray);
// localStorage.setItem('tobiArray', JSON.stringify(selection))
// function store(){
// let file = JSON.parse(localStorage.getItem('tobiArray'))
// console.log(typeof file, file);
// if (file) {
//  selection=file
//   createPlaylist()
// }
// }

// store()
