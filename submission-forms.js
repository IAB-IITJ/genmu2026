// Add the three published Google Form URLs below. Every form button on the site reads this file.
window.GENMU_SUBMISSION_FORMS = {
  face: "https://docs.google.com/forms/d/e/1FAIpQLSeGU0Eco3NgnwtYDFDNTH8uae_pZJvr_cufoWDX53NYmxZaEQ/viewform?usp=publish-editor",
  speech: "https://docs.google.com/forms/d/e/1FAIpQLSeGU0Eco3NgnwtYDFDNTH8uae_pZJvr_cufoWDX53NYmxZaEQ/viewform?usp=publish-editor",
  concept: "https://docs.google.com/forms/d/e/1FAIpQLSeGU0Eco3NgnwtYDFDNTH8uae_pZJvr_cufoWDX53NYmxZaEQ/viewform?usp=publish-editor"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-form-track]").forEach((link) => {
    const track = link.dataset.formTrack;
    const url = window.GENMU_SUBMISSION_FORMS[track];
    const label = {face: "Face Track Google Form", speech: "Speech Track Google Form", concept: "Concept Track Google Form"}[track] || "Submission form";
    if (url && /^https:\/\//.test(url)) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
      link.classList.remove("is-disabled");
      link.textContent = label + " ↗";
    } else {
      link.href = "#";
      link.setAttribute("aria-disabled", "true");
      link.classList.add("is-disabled");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });
});
