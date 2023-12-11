const urlScript =
  "https://script.google.com/macros/s/AKfycbzXh4AVnIst5-kh_FZqpQdsL_Q5uH9JeKm5I_q7Q-53k54kAEHmyC-Tbx_1yLyezgXb/exec";

const form = document.forms["contact-form"];
const loadingOverlay = document.getElementById("loading-overlay");

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    loadingOverlay.style.display = "flex";

    const response = await fetch(urlScript, {
      method: "POST",
      body: new FormData(form),
    });

    if (response.ok) {
      alert("Your message has been sent successfully. We'll respond back ASAP!");
      window.location.reload();
    } else {
      throw new Error(`Server responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error!", error.message);
  } finally {
    loadingOverlay.style.display = "none";
  }
};

form.addEventListener("submit", handleSubmit);
