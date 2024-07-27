const downloadCvBtn = document.querySelector(".download-cv button");

downloadCvBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("/data/CV.pdf");
    const file = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "Web Developer CV";
    link.click();
  } catch (error) {
    alert("Failed to download");
  }
});