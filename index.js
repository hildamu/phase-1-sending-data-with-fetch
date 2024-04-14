// Add your code here
function submitData(name,email){

  const userObject = {
    name:name,
    email:email
  };
   return fetch('http://localhost:3000/users',{
    method:'POST',
    headers:{
      "Content-Type": "application/json",
    "Accept": "application/json",
    },
    body:JSON.stringify(userObject)
   })
   .then(response => {
    
    if (!response.ok) {
        throw new Error('Error');
    }
    return response.json();
})
.then(data => {
    console.log('Data:', data);
    
    const newId = data.id;
    
    const idElement = document.createElement('p');
    idElement.textContent = `New ID: ${newId}`;
    document.body.appendChild(idElement);
    return data;
})
.catch(error => {
    
    console.error('Error submission:', error);
    

    const errorElement = document.createElement('p');
    errorElement.textContent = `Error:${error.message}`;
    document.body.appendChild(errorElement);
    
});
}
  