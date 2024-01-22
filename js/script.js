/**
 * 1. Byt namn på första hoodien från Ash till Potato.
 */
document.querySelector("body > main > article.art-1 > h3").innerText = "Potato"

/**
 * 2. Byt namn på Home till Start.
 */
document.querySelector("body > header > nav > a:nth-child(1)").innerText = "Start"

/**
 * 3. Byt namn på Contact till Mail Us.
 */
document.querySelector("body > header > nav > a:nth-child(3)").innerText = "Mail Us"

/**
 * 4. Byt ut informationen om Sinus Hoodie - Fire.
 */
document.querySelector("body > main > article.art-2 > p").innerText ="Feeling HOT! Get this hoodie to get hotter!"

/**
 * 5. Byt bakgrundsfärg och text på en knapp.
 */
document.querySelector("body > main > article.art-2 > button").style.background = "grey"

/**
 * 6. Byt bakgrundsfärg på någon av produkterna.
 */
document.querySelector("body > main > article.art-2 > figure").style.background = "red"

/**
 * 7. Byt ut adressen på sidan.
 */
document.querySelector("body > footer > section > article:nth-child(2) > p")
    .innerText = "Sirius skateboards\nHoodievägen 14\n133 76 Armfot"

/**
 * 8. Byt färg på samtliga <p>.
 */
document.querySelectorAll("p").forEach((p) => p.style.color = "green")

/**
 * 9. Ändra text på samtliga knappar till add to cart.
 */
document.querySelectorAll("button").forEach((btn) => btn.innerText = "add to cart")

/**
 * 10. Lägg till classen active på menyalternativet home.
 */
document.querySelector("body > header > nav > a:nth-child(1)").classList += "active"

/**
 * 11. Ta bort classen logo på logotypen.
 */
document.querySelector("body > header > img").classList.remove("logo")

/**
 * 12. Lägg till ett nytt menyalternativ.
 */
const menu = document.createElement("a")
menu.innerText = "Log In"
menu.href = "#"
document.querySelector("body > header > nav > a:nth-child(3)").insertAdjacentElement("afterend", menu)

/**
 * 13. Lägg till en ny produkt med följande info.
 *
 *  el	beskrivning
 *  img	hoodie-forrest.png
 *  h2	Sinus Hoodie
 *  h3	Forrest
 *  p	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.
 */

const article = document.createElement("article")
document.querySelector("body > main > article.art-3").insertAdjacentElement("afterend", article)
const figure = document.createElement("figure")
article.append(figure)
const img = document.createElement("img")
img.src = "img/hoodie-forrest.png"
figure.append(img)
const h2 = document.createElement("h2")
h2.innerText = "Sinus Hoodie"
article.append(h2)
const h3 = document.createElement("h3")
h3.innerText = "Forrest"
article.append(h3)
const p = document.createElement("p")
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores."
article.append(p)
const button = document.createElement("button")
button.innerText = "add to cart"
article.append(button)

/**
 * 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
 */
document.querySelector("body > header > img").classList.add("logo") // added back since it was removed earlier
document.querySelector(".logo").addEventListener("click", function() {console.log("found you!")})

/**
 * 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
 */
document.querySelectorAll("article").forEach((article) => article.addEventListener("click", function(event) {
    console.log(`Hi, Im article ${event.currentTarget.querySelector("h3").innerText}`) // its potato instead of fire since it was changed
}))


