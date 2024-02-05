import { searchPage } from "./data.js";

const searchDisplayEl = document.getElementById("display-container")
function searchHtml(arr){
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
                        <p>${item.movie}</p>
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
searchDisplayEl.innerHTML = searchHtml(searchPage)