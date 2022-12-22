import Swal from "sweetalert2"

const successAlert = (message) => {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
    })
}

export {
    successAlert
}