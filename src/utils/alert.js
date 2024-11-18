import Swal from "sweetalert2";

// Notifikasi sukses
const showSuccessAlert = (
  title = "Success",
  text = "Operation completed successfully!"
) => {
  Swal.fire({
    icon: "success",
    title: title,
    text: text,
    confirmButtonColor: "#FF3E54",
    confirmButtonText: "OK",
  });
};

// Notifikasi error
const showErrorAlert = (title = "Error", text = "Something went wrong!") => {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    confirmButtonColor: "#FF3E54",
    confirmButtonText: "OK",
  });
};

// Notifikasi konfirmasi
const showConfirmationAlert = async (
  title = "Are you sure?",
  text = "You won't be able to revert this!",
  confirmText = "Yes, do it!"
) => {
  return await Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#FF3E54",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmText,
    cancelButtonText: "Cancel",
  });
};

export { showSuccessAlert, showErrorAlert, showConfirmationAlert };
