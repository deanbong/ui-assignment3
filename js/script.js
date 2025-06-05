// Add your JavaScript here
console.log("JS file connected!");
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const productCards = document.querySelectorAll(".product-card");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    productCards.forEach(card => {
      const productName = card.querySelector("h4").textContent.toLowerCase();
      const match = productName.includes(query);
      card.style.display = match ? "block" : "none";
    });
  });
});
