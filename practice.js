async function eventPage() {
    const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-a/players");
    const page = await response.json();
    console.log(page.data);

}
eventPage();

