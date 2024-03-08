document.getElementById('slideButton').addEventListener('click', function() {
    document.getElementById("tulip-leftl-1").classList.add('slide-in-l50');
    document.getElementById("tulip-leftl-2").classList.add('slide-in-l40');
    document.getElementById("tulip-leftl-3").classList.add('slide-in-l30');
    document.getElementById("tulip-leftl-4").classList.add('slide-in-l20');
    document.getElementById("tulip-leftl-5").classList.add('slide-in-l10');
    document.getElementById("tulip-right-5").classList.add('slide-in-r10');
    document.getElementById("tulip-right-4").classList.add('slide-in-r20');
    document.getElementById("tulip-right-3").classList.add('slide-in-r30');
    document.getElementById("tulip-right-2").classList.add('slide-in-r40');
    document.getElementById("tulip-right-1").classList.add('slide-in-r50');
    var flexdiv = document.getElementById("flexdiv");
    flexdiv.innerHTML = "<div class='msg'><h1 class='congrat'>Особенный букет для особенной девочки)</h1> <p class='click'>**в тюльпанах сюрпризы**</p></div>";
});

document.getElementById('comp1').addEventListener('click', function() {
    var flexdiv = document.getElementById("flexdiv");
    flexdiv.innerHTML = "<div class='msg'><h1 class='congrat'>В твоих глазах можно утонуть, и я уже давно пал их жертвой</h1></p></div>";
});

document.getElementById('comp2').addEventListener('click', function() {
    var flexdiv = document.getElementById("flexdiv");
    flexdiv.innerHTML = "<div class='msg'><h1 class='congrat'>Невозможно перестать удивляться, сколько в тебе любви</h1></p></div>";
});

document.getElementById('comp3').addEventListener('click', function() {
    var flexdiv = document.getElementById("flexdiv");
    flexdiv.innerHTML = "<div class='msg'><h1 class='congrat'>Музыку придумали, чтобы любоваться как ты танцуешь</h1></p></div>";
});

document.getElementById('comp4').addEventListener('click', function() {
    var flexdiv = document.getElementById("flexdiv");
    flexdiv.innerHTML = "<div class='msg'><h1 class='congrat'>Ты заводишь меня, даже когда не пытаешься (или когда я думаю, что ты не пытаешься)</h1></p></div>";
});

document.getElementById('comp5').addEventListener('click', function() {
    var flexdiv = document.getElementById("flexdiv");
    flexdiv.innerHTML = "<div class='msg'><h1 class='congrat'>Твой характер поражает меня своей силой, но в то же время теплотой и мягкостью</h1></p></div>";
});

document.getElementById('comp6').addEventListener('click', function() {
    var flexdiv = document.getElementById("flexdiv");
    flexdiv.innerHTML = "<div class='msg'><h1 class='congrat'>Я схожу с ума по твоей улыбке, о ней я мечтаю и представляю по целыми днями</h1></p></div>";
});

document.getElementById('comp7').addEventListener('click', function() {
    var flexdiv = document.getElementById("flexdiv");
    flexdiv.innerHTML = "<div class='msg'><h1 class='congrat'>Люблю</h1></p></div>";
});
