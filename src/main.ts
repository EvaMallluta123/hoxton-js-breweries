let satate={

}
function render(){
    let h1El=document.createElement("h1")
    h1El.textContent=("List of Breweries")

    let headerEl=document.createElement("header")
    headerEl.className="search-bar"

    let formEl=document.createElement("form")
    formEl.terms.setAttribute(`id`,`search-breweries-form`)
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
    let UlEl=document.createElement("h1")
    let H1El=document.createElement("ul")
    UlEl.className=("breweries-list")
    let H2El=document.createElement("h2") 
    H2El.textContent=("Snow Belt Brew<")
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
    section2El.append(header3El paraEl)
    let h1El=document.createElement("h1")

    


    // <h1>List of Breweries</h1>
    // <header class="search-bar">
    //   <form id="search-breweries-form" autocomplete="off">
    //     <label for="search-breweries"><h2>Search breweries:</h2></label>
    //     <input id="search-breweries" name="search-breweries" type="text" />
    //   </form>
    // </header>
    // <article>
    //   <ul class="breweries-list">
    //     <li>
    //       <h2>Snow Belt Brew</h2>
    //       <div class="type">micro</div>
    //       <section class="address">
    //         <h3>Address:</h3>
    //         <p>9511 Kile Rd</p>
    //         <p><strong>Chardon, 44024</strong></p>
    //       </section>
    //       <section class="phone">
    //         <h3>Phone:</h3>
    //         <p>N/A</p>
    //       </section>
    //       <section class="link">
    //         <a href="null" target="_blank">Visit Website</a>
    //       </section>
    //     </li>
    //     // More list elements
    //   </ul>
    // </article>
     
}
