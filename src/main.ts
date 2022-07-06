// import './style.css';
type Brewery={
    address_2: null |string;
    address_3: null|string;
    brewery_type: string;
    city: string;
    country: string;
    county_province: null|string;
    created_at: string;
    id: number;
    latitude: string|null;
    longitude: string;
    name: string;
    obdb_id: string;
    phone: string|null;
    postal_code: string;
    state: string;
    street: string|null;
    updated_at: string;
    website_url: string|null;

}
type State={
    breweries:Brewery[]
    USState:string
}

let state:State={
breweries:[],
USState:""
}
function getBreweriesFromState (){
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${state.breweries}`)
    .then(resp=>resp.json())
    .then(breweries=>{
        state.breweries=breweries
        render()
    })



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
    formEl.addEventListener(`submit`, function(event){
        event.preventDefault()
        // let USState=formEl[`select-state`].value
        let USState=formEl.value
        state.USState=USState
        getBreweriesFromState ()

    })

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
     for(let brewery of state.breweries){
    //  let articleEl=document.createElement("article")
    let UlEl=document.createElement("ul")
    UlEl.className="breweries-list"
    let liEl=document.createElement("li")
    let H2El=document.createElement("h2") 
    H2El.textContent=brewery.name
    let divEl=document.createElement("div")
    divEl.className="type"
    divEl.textContent=brewery.brewery_type
    let sectionEl=document.createElement("section")
    sectionEl.className=("address")
 
    let h3El=document.createElement("h3")
    h3El.textContent=("Address:")
    let pEl=document.createElement("p")
    pEl.textContent=brewery.street 
    let PEl=document.createElement("p")
    PEl.textContent=`${brewery.city}, ${brewery.postal_code}`
    sectionEl.append(h3El,pEl, PEl)

    let section2El=document.createElement("section")
    section2El.className="phone"
    let header3El=document.createElement("h3")
    header3El.textContent=("Phone:")
    let paraEl=document.createElement("p")
    paraEl.textContent=brewery.phone ? brewery.phone : "N/A"
    section2El.append(header3El ,paraEl)

    let section4El=document.createElement("section")
    section4El.className=("link")
    let aEl=document.createElement("a")
    aEl.href="null"
    aEl.target="_blank"
    aEl.text=brewery.website_url? brewery.website_url: "#"
    section4El.append(aEl)
    liEl.append(sectionEl,section2El,section4El, H2El, divEl,)
    UlEl.append( liEl)
    articleEl.append(UlEl)

    } 
     mainEl.append(headerEl, h1El,articleEl)

     
}
render()
