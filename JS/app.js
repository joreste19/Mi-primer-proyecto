const frmEmail=document.getElementById(frmEmail)
frmEmail.addEventListener('submit', sendEmail)

const serviceId= 'service_x1t0na8'
const templateId= 'template_2qatnna'
const apikey= '9JgZH4CMHvpuICov_'


function sendEmail(event){
event.preventDefault()
emailjs.init(serviceId)

emailjs.sendForm(serviceId, templateId, frmEmail, apikey)
.then( esult=> Swal.fire("Su mensaje se ha enviado con éxito"))
.catch(Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "No ha sido posible enviar tu mensaje",
  }))
}

