function searchProduct() {
    let searchQuery = document.getElementById('searchBar').value.toLowerCase();
    let products = document.querySelectorAll('.product-card');
    let results = [];

    products.forEach((product) => {
        let productName = product.querySelector('h2').innerText.toLowerCase();
        if (productName.includes(searchQuery)) {
            results.push(product);
        }
    });

    let resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';
    results.forEach((result) => {
        resultsContainer.appendChild(result.cloneNode(true));
    });
}
