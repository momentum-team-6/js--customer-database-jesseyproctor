const customerContainer = document.querySelector('.customers')

console.log(customers[0].picture.large)
console.log(customers[0].name)
console.log(customers[0].email)
console.log(customers[0].location)
console.log(customers[0].dob.date)
console.log(customers[0].registered.date)

//1st customer:
// const customerCard = document.createElement('div')
// customerCard.classList.add('customer-info')

customerContainer.innerHTML = `<div class='customer-info'>
    <img src=${customers[0].picture.large}>
    <h4>${customers[0].name.first + " " + customers[0].name.last}</h4>
    <p>${customers[0].email}</p>
    <p>${customers[0].location.street.number + " " + customers[0].location.street.name + " " + customers[0].location.city + " " + customers[0].location.state + " " + customers[0].location.postcode}</p>
    <p>${customers[0].dob.date}</p>
    <p>${customers[0].registered.date}</p>
</div>`

function displayCustomers () {
    for (let customer of customers) {
      const customerCard = document.createElement('div')
      customerCard.classList.add('customer-info')
  
      customerContainer.innerHTML += `<div class='customer-info'>
      <img src=${customer.picture.large}>
      <h4>${customer.name.first + " " + customer.name.last}</h4>
      <p>${customer.email}</p>
      <p>${customer.location.street.number + " " + customer.location.street.name + " " + customer.location.city + " " + customer.location.state + " " + customer.location.postcode}</p>
      <p>${customer.dob.date}</p>
      <p>${customer.registered.date}</p>
  </div>`
    }
  }

  displayCustomers()

// customerContainer.innerHTML

// const customersDiv = document.createElement('div')
// console.log(customersDiv)
// document.querySelector('body').appendChild(customersDiv)
// customersDiv.innerHTML = `<img src=${customers[0].picture.large}>` 
// customersDiv.innerHTML += `<h4>${customers[0].name.first + "" + customers[0].name.last}</h4>`
// customersDiv.innerHTML += `<p>${customers[0].email}</p>`
// customersDiv.innerHTML += `<p>${customers[0].location.street.number + " " + customers[0].location.street.name + " " + customers[0].location.city + " " + customers[0].location.state + " " + customers[0].location.postcode}</p>`
// customersDiv.innerHTML += `<p>${customers[0].dob.date}</p>`
// customersDiv.innerHTML += `<p>${customers[0].registered.date}</p>`


// const customersDiv2 = document.createElement('div')
// console.log(customersDiv2)
// document.querySelector('body').appendChild(customersDiv2)
// customersDiv2.innerHTML = `<img src=${customers[1].picture.large}>`
// customersDiv2.innerHTML += `<h4>${customers[1].name.first + " " + customers[1].name.last}</h4>`
// customersDiv2.innerHTML += `<p>${customers[1].email}</p>`
// customersDiv2.innerHTML += `<p>${customers[1].location.street.number + " " + customers[1].location.street.name + " " + customers[1].location.city + " " + customers[1].location.state + " " + customers[1].location.postcode}</p>`
// customersDiv2.innerHTML += `<p>${customers[1].dob.date}</p>`
// customersDiv2.innerHTML += `<p>${customers[1].registered.date}</p>`

// const customersDiv3 = document.createElement('div')
// console.log(customersDiv3)
// document.querySelector('body').appendChild(customersDiv3)
// customersDiv3.innerHTML = `<img src=${customers[2].picture.large}>`
// customersDiv3.innerHTML += `<h4>${customers[2].name.first + " " + customers[2].name.last}</h4>`
// customersDiv3.innerHTML += `<p>${customers[2].email}</p>`
// customersDiv3.innerHTML += `<p>${customers[2].location.street.number + " " + customers[2].location.street.name + " " + customers[2].location.city + " " + customers[2].location.state + " " + customers[2].location.postcode}</p>`
// customersDiv3.innerHTML += `<p>${customers[2].dob.date}</p>`
// customersDiv3.innerHTML += `<p>${customers[2].registered.date}</p>`

// const customersDiv4 = document.createElement('div')
// console.log(customersDiv4)
// document.querySelector('body').appendChild(customersDiv4)
// customersDiv4.innerHTML = `<img src=${customers[3].picture.large}>`
// customersDiv4.innerHTML += `<h4>${customers[3].name.first + " " + customers[3].name.last}</h4>`
// customersDiv4.innerHTML += `<p>${customers[3].email}</p>`
// customersDiv4.innerHTML += `<p>${customers[3].location.street.number + " " + customers[3].location.street.name + " " + customers[3].location.city + " " + customers[3].location.state + " " + customers[3].location.postcode}</p>`
// customersDiv4.innerHTML += `<p>${customers[3].dob.date}</p>`
// customersDiv4.innerHTML += `<p>${customers[3].registered.date}</p>`

// const customersDiv5 = document.createElement('div')
// console.log(customersDiv5)
// document.querySelector('body').appendChild(customersDiv5)
// customersDiv5.innerHTML = `<img src=${customers[4].picture.large}>`
// customersDiv5.innerHTML += `<h4>${customers[4].name.first + " " + customers[4].name.last}</h4>`
// customersDiv5.innerHTML += `<p>${customers[4].email}</p>`
// customersDiv5.innerHTML += `<p>${customers[4].location.street.number + " " + customers[4].location.street.name + " " + customers[4].location.city + " " + customers[4].location.state + " " + customers[4].location.postcode}</p>`
// customersDiv5.innerHTML += `<p>${customers[4].dob.date}</p>`
// customersDiv5.innerHTML += `<p>${customers[4].registered.date}</p>`

// const customersDiv6 = document.createElement('div')
// console.log(customersDiv6)
// document.querySelector('body').appendChild(customersDiv6)
// customersDiv6.innerHTML = `<img src=${customers[5].picture.large}>`
// customersDiv6.innerHTML += `<h4>${customers[5].name.first + " " + customers[5].name.last}</h4>`
// customersDiv6.innerHTML += `<p>${customers[5].email}</p>`
// customersDiv.innerHTML += `<p>${customers[5].location.street.number + " " + customers[5].location.street.name + " " + customers[5].location.city + " " + customers[5].location.state + " " + customers[5].location.postcode}</p>`
// customersDiv6.innerHTML += `<p>${customers[5].dob.date}</p>`
// customersDiv6.innerHTML += `<p>${customers[5].registered.date}</p>`

// const customersDiv7 = document.createElement('div')
// console.log(customersDiv7)
// document.querySelector('body').appendChild(customersDiv7)
// customersDiv7.innerHTML = `<img src=${customers[6].picture.large}>`
// customersDiv7.innerHTML += `<h4>${customers[6].name.first + " " + customers[6].name.last}</h4>`
// customersDiv7.innerHTML += `<p>${customers[6].email}</p>`
// customersDiv7.innerHTML += `<p>${customers[6].location.street.number + " " + customers[6].location.street.name + " " + customers[6].location.city + " " + customers[6].location.state + " " + customers[6].location.postcode}</p>`
// customersDiv7.innerHTML += `<p>${customers[6].dob.date}</p>`
// customersDiv7.innerHTML += `<p>${customers[6].registered.date}</p>`

// const customersDiv8 = document.createElement('div')
// console.log(customersDiv8)
// document.querySelector('body').appendChild(customersDiv8)
// customersDiv8.innerHTML = `<img src=${customers[7].picture.large}>`
// customersDiv8.innerHTML += `<h4>${customers[7].name.first + " " + customers[7].name.last}</h4>`
// customersDiv8.innerHTML += `<p>${customers[7].email}</p>`
// customersDiv8.innerHTML += `<p>${customers[7].location.street.number + " " + customers[7].location.street.name + " " + customers[7].location.city + " " + customers[7].location.state + " " + customers[7].location.postcode}</p>`
// customersDiv8.innerHTML += `<p>${customers[7].dob.date}</p>`
// customersDiv8.innerHTML += `<p>${customers[7].registered.date}</p>`

// const customersDiv9 = document.createElement('div')
// console.log(customersDiv9)
// document.querySelector('body').appendChild(customersDiv9)
// customersDiv9.innerHTML = `<img src=${customers[8].picture.large}>`
// customersDiv9.innerHTML += `<h4>${customers[8].name.first + " " + customers[8].name.last}</h4>`
// customersDiv9.innerHTML += `<p>${customers[8].email}</p>`
// customersDiv9.innerHTML += `<p>${customers[8].location.street.number + " " + customers[8].location.street.name + " " + customers[8].location.city + " " + customers[8].location.state + " " + customers[8].location.postcode}</p>`
// customersDiv9.innerHTML += `<p>${customers[8].dob.date}</p>`
// customersDiv9.innerHTML += `<p>${customers[8].registered.date}</p>`

// const customersDiv10 = document.createElement('div')
// console.log(customersDiv10)
// document.querySelector('body').appendChild(customersDiv10)
// customersDiv10.innerHTML = `<img src=${customers[9].picture.large}>`
// customersDiv10.innerHTML += `<h4>${customers[9].name.first + " " + customers[9].name.last}</h4>`
// customersDiv10.innerHTML += `<p>${customers[9].email}</p>`
// customersDiv10.innerHTML += `<p>${customers[9].location.street.number + " " + customers[9].location.street.name + " " + customers[9].location.city + " " + customers[9].location.state + " " + customers[9].location.postcode}</p>`
// customersDiv10.innerHTML += `<p>${customers[9].dob.date}</p>`
// customersDiv10.innerHTML += `<p>${customers[9].registered.date}</p>`

// const customersDiv11 = document.createElement('div')
// console.log(customersDiv11)
// document.querySelector('body').appendChild(customersDiv11)
// customersDiv11.innerHTML = `<img src=${customers[10].picture.large}>`
// customersDiv11.innerHTML += `<h4>${customers[10].name.first + " " + customers[10].name.last}</h4>`
// customersDiv11.innerHTML += `<p>${customers[10].email}</p>`
// customersDiv11.innerHTML += `<p>${customers[10].location.street.number + " " + customers[10].location.street.name + " " + customers[10].location.city + " " + customers[10].location.state + " " + customers[10].location.postcode}</p>`
// customersDiv11.innerHTML += `<p>${customers[10].dob.date}</p>`
// customersDiv11.innerHTML += `<p>${customers[10].registered.date}</p>`

// const customersDiv12 = document.createElement('div')
// console.log(customersDiv12)
// document.querySelector('body').appendChild(customersDiv12)
// customersDiv12.innerHTML = `<img src=${customers[11].picture.large}>`
// customersDiv12.innerHTML += `<h4>${customers[11].name.first + " " + customers[11].name.last}</h4>`
// customersDiv12.innerHTML += `<p>${customers[11].email}</p>`
// customersDiv12.innerHTML += `<p>${customers[11].location.street.number + " " + customers[11].location.street.name + " " + customers[11].location.city + " " + customers[11].location.state + " " + customers[11].location.postcode}</p>`
// customersDiv12.innerHTML += `<p>${customers[11].dob.date}</p>`
// customersDiv12.innerHTML += `<p>${customers[11].registered.date}</p>`



