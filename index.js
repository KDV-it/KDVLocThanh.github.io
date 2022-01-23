
const data = [
    {
        id: 1,
        url: "./img/LoiChua/LocThanh/LC01.png"
    },
    {
        id: 2,
        url: "./img/LoiChua/LocThanh/LC02.png"
    },
    {
        id: 3,
        url: "./img/LoiChua/LocThanh/LC03.png"
    },
    {
        id: 4,
        url: "./img/LoiChua/LocThanh/LC04.png"
    },
    {
        id: 5,
        url: "./img/LoiChua/LocThanh/LC05.png"
    },
    {
        id: 6,
        url: "./img/LoiChua/LocThanh/LC06.png"
    },
    {
        id: 7,
        url: "./img/LoiChua/LocThanh/LC07.png"
    },
    {
        id: 8,
        url: "./img/LoiChua/LocThanh/LC08.png"
    },
    {
        id: 9,
        url: "./img/LoiChua/LocThanh/LC09.png"
    },
    {
        id: 10,
        url: "./img/LoiChua/LocThanh/LC10.png"
    },
    {
        id: 11,
        url: "./img/LoiChua/LocThanh/LC11.png"
    },
    {
        id: 12,
        url: "./img/LoiChua/LocThanh/LC12.png"
    },
    {
        id: 13,
        url: "./img/LoiChua/LocThanh/LC13.png"
    },
    {
        id: 14,
        url: "./img/LoiChua/LocThanh/LC14.png"
    },
    {
        id: 15,
        url: "./img/LoiChua/LocThanh/LC15.png"
    },
    {
        id: 16,
        url: "./img/LoiChua/LocThanh/LC16.png"
    },
    {
        id: 17,
        url: "./img/LoiChua/LocThanh/LC17.png"
    },
    {
        id: 18,
        url: "./img/LoiChua/LocThanh/LC18.png"
    },
    {
        id: 19,
        url: "./img/LoiChua/LocThanh/LC19.png"
    },
    {
        id: 20,
        url: "./img/LoiChua/LocThanh/LC20.png"
    },
];


function random () {
    let random = Math.floor(Math.random() * 20);

    
    const img = document.createElement("img");
    const a = document.querySelector("a");

    a.href = data[random].url;
    img.src = data[random].url;
    img.classList.add("img-loichua-item");
    a.appendChild(img);

    // document.body.appendChild(a);

    document.querySelector(".container").style.display = "none";
    
    
}

var button = document.getElementsByClassName("btn");
