window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getItem('NAME');
    const email = sessionStorage.getItem('EMAIL');
    const mbn = sessionStorage.getItem('MOBILENUMBER');
    const surname = sessionStorage.getItem('SURNAME');
    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-mbn').innerHTML = mbn;
    document.getElementById('result-surname').innerHTML = surname;

})