function func(e){
    // e.preventDefault()
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const number=document.getElementById("number").value
    const date=document.getElementById("date").value
    const time=document.getElementById("time").value
    const obj={
      naam: name,
      ank: number,
      mail: email
    }
    const objSerialized=JSON.stringify(obj)
    localStorage.setItem(name,objSerialized)
    const divi=document.getElementById("main-div")
    const form=document.getElementById("form1")
    const para=document.createElement("p")
    para.appendChild(document.createTextNode(name+" - "+email+" - "+number))
    const button=document.createElement("button")
    button.setAttribute("type", "button")
    button.setAttribute("class", "btn btn-danger btn-sm float-right")
    button.appendChild(document.createTextNode("X"))
    const edit=document.createElement("button")
    edit.setAttribute("type", "button")
    edit.setAttribute("class", "btn btn-warning btn-sm float-right")
    edit.appendChild(document.createTextNode("Edit"))
    para.appendChild(button)
    para.appendChild(edit)
    form.appendChild(para)
    edit.addEventListener("click", editf)
    button.addEventListener("click", deletef)
    
    function deletef(e){
      e.preventDefault()
      if(e.target.classList.contains("btn-danger")){
        const parent=e.target.parentElement
        form.removeChild(parent)
        localStorage.removeItem(obj.naam)
        console.clear()
        }
    }
    function editf(e){
      e.preventDefault()
      if(e.target.classList.contains("btn-warning")){
        const parent=e.target.parentElement
        form.removeChild(parent)
        localStorage.removeItem(obj.naam)
        console.clear()
        }
    } 
    console.log(name)
    console.log(email)
    console.log(number)
    console.log("Booked Appointment for "+date+" at "+time)
  }