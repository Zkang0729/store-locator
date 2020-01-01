const storeForm = document.getElementById("store-form");
const storeID = document.getElementById("store-id");
const storeAddress = document.getElementById("store-address");

storeForm.addEventListener("submit", addStore);

// Send POST request to API
async function addStore(e) {
  e.preventDefault();
  if (storeID.value === "" || storeAddress.value === "") {
    alert("Please fill in fields!");
  }

  const sendBody = {
    storeID: storeID.value,
    address: storeAddress.value
  };

  try {
    const res = await fetch("/api/v1/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendBody)
    });

    if (res.status === 400) {
      throw Error("Store already exists");
    }

    alert("Store is being added.");
    window.location.href = "index.html";
  } catch (err) {
    alert(err);
    return;
  }
}
