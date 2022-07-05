let satate={

}
function render(){
    let mainEl=document.querySelector(`main`)
    if(mainEl===null) return
    mainEl.textContent=""

    let h1El=document.createElement("h1")
    h1El.textContent=("List of Breweries")

    let headerEl=document.createElement("header")
    headerEl.className="search-bar"

    let formEl=document.createElement("form")
    formEl.setAttribute(`id`,`search-breweries-form`)
    formEl.autocomplete=`off`

    let labelEl=document.createElement("label")
    labelEl.setAttribute("for", 'search-breweries')
    let h2El=document.createElement("h2")
    h2El.textContent=(`Search breweries:`)
    labelEl.append(h2El)
 
    let inputEl=document.createElement("input")
    inputEl.type="text"
    inputEl.id="search-breweries"
    inputEl.name="search-breweries"
    formEl.append(labelEl, inputEl)
     headerEl.append(formEl)
  
    let articleEl=document.createElement("article")
    let UlEl=document.createElement("ul")
    UlEl.className=("breweries-list")
    let liEl=document.createElement("li")
    let H2El=document.createElement("h2") 
    H2El.textContent=("Snow Belt Brew")
    let divEl=document.createElement("div")
    divEl.className=("type")
    divEl.textContent=("micro")
    let sectionEl=document.createElement("section")
    sectionEl.className=("address")
 
    let h3El=document.createElement("h3")
    h3El.textContent=("Address:")
    let pEl=document.createElement("p")
    pEl.textContent=("9511 Kile Rd")
    let PEl=document.createElement("p")
    PEl.textContent=("Chardon, 44024")
    sectionEl.append(h3El,pEl, PEl)

    let section2El=document.createElement("section")
    section2El.className="phone"
    let header3El=document.createElement("h3")
    header3El.textContent=("Phone:")
    let paraEl=document.createElement("p")
    paraEl.textContent=("N/A")
    section2El.append(header3El ,paraEl)

    let section4El=document.createElement("section")
    section4El.className=("link")
    let aEl=document.createElement("a")
    aEl.href="null"
    aEl.target="_blank"
    aEl.text=("Visit Website")
    section4El.append(aEl)
    articleEl.append(sectionEl,section2El,section4El)
    liEl.append(articleEl)
    UlEl.append(liEl)

    mainEl.append(h1El,headerEl,UlEl)
     
}
render()
