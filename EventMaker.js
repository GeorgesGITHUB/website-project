function saveEvent(){

    if (validEventData()===false) { return false;} //can't continue further

    console.log('generating id');
    var id = generateID();
    localStorage.setItem( id, getEventData() );
    localStorage.setItem('currentID',id);

    window.alert(`Remember you Event ID : ${id}`);
    
    window.location.assign('EventPage.html');
}

function validEventData(){
    if ( document.getElementById('name').value === (null || '') ) {
        alert('Please fill out the fields'); return false;}

    if ( document.getElementById('datetime').value === (null || '') ) {
        alert('Please fill out the fields'); return false;}

    if ( document.getElementById('location').value === (null || '') ) {
        alert('Please fill out the fields'); return false;}
    
    if ( document.getElementById('description').value === (null || '') ) {
        alert('Please fill out the fields'); return false;}

    if ( document.getElementById('color').value === (null || '') ) {
        alert('Please fill out the fields'); return false;}

    console.log('is valid');
    return true; // is valid
}

function getEventData(){
    var eventData =
    {
        name: document.getElementById('name').value,
        datetime: document.getElementById('datetime').value,
        location: document.getElementById('location').value,
        description: document.getElementById('description').value,
        color: document.getElementById('color').value
    };
    
    return JSON.stringify(eventData); //Object --> String
}

function generateID(){
    var id = Math.random().toString(16).slice(2);
    
    //Keep generating until you get a unique id
    while ( idExist(id) ) 
    { id = Math.random().toString(16).slice(2);}
    
    return id; //String
}

function idExist(id){ return localStorage.getItem(id)!==null }