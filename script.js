import { events, arts, concerts } from "./data.js";

const eventsEl = document.getElementById("events")
const artsEl = document.getElementById("arts")
const concertsEl = document.getElementById("concerts")
const searchDisplayEl = document.getElementById("display-container")

// UI for Home Page 
function loadHtml(arr){
    let uiHtml = ""
    arr.forEach(item => {
        uiHtml += `
            <div class="card">
                <div class="card-top">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="card-bottom">
                    <div class="date">
                        <h5>${item.date}</h5>
                    </div>
                    <div class="price_location">
                        <h5>${item.name}</h5>
                        <p>${item.price}</p>
                        <p><i class="fa-solid fa-location-dot"></i> ${item.venue}</p>
                    </div>
                </div>
            </div>
        `
    })
    return uiHtml
}

eventsEl.innerHTML = loadHtml(events)
artsEl.innerHTML = loadHtml(arts)
concertsEl.innerHTML = loadHtml(concerts)




