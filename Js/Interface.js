async function searchContacts() {
   const searchInput = document.getElementById('searchbar').value.trim().toLowerCase();
   const contacts = document.querySelectorAll('.divC');
   
   contacts.forEach(contact => {
       const name = contact.querySelector('h5').textContent.toLowerCase();
       if (name.includes(searchInput)) {
           contact.style.display = 'block';
       } else {
           contact.style.display = 'none';
       }
   });
}

async function get() {
    const response = await fetch("file.json");
    const data = await response.json();
    console.log(data);
 
    const container = document.querySelector(".contct");
 
    data.results.forEach(result => {
       const div = document.createElement('div');
       const divI = document.createElement('div');
       const img = document.createElement('img');
       const divT = document.createElement('div'); // Correction ici
       const nomC = document.createElement('h5');
       const title = document.createElement('p');
 
       nomC.textContent = result.name.first + " " + result.name.last;
       img.src = result.picture.large;
       title.textContent = result.name.title;
 
       img.classList.add('circle-image');
       div.classList.add('divC');
 
       divI.appendChild(img);
       divT.appendChild(nomC);
       divT.appendChild(title);
       div.appendChild(divI);
       div.appendChild(divT);
       container.appendChild(div);
 
       div.addEventListener('click', () => {
          displayContactInfo(result);
       });
    });
 }
 
 function displayContactInfo(result) {
    const contactDetailsContainer = document.querySelector(".info");
 
    // Clear previous contact details
    contactDetailsContainer.innerHTML = '';
 
    // Create elements for displaying contact details
    const detailsElement = document.createElement('div');
    detailsElement.innerHTML = `
        <div class="sec2">      
             <div class="info">
           <div class="profile">
             <img class="rounded-circle"  src="${result.picture.large}" alt="Contact Picture">
             <div class="nom">
               <h5>${result.name.first} ${result.name.last}</h5>
               <p>${result.name.title}</p>
              </div>
           </div>   
                   <img src="imag/telephone (2).png" alt="Telephone" width="30px" height="30px">
                   <div class= "tel">
                      <p> ${result.phone}</p>
                   </div>
                   <img src="imag/phone-call.png" alt="Whatsapp" width="30px" height="30px">
                   <div class= "tel">
                      <p> ${result.cell}</p>
                </div>
                <img src="imag/apple.png" alt="E-mail" width="30px" height="30px">
                <div class= "tel">
                   <p> ${result.email}</p>
             </div>
             </div>      
        </div>`;
    contactDetailsContainer.appendChild(detailsElement);
 }
 
 get();
 
 
 
 