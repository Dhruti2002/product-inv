let products = [];

// Initial display
displayProducts();
updateTotalProducts();
adjustContainer(); 

function adjustContainer() {
    const leftContainer = document.querySelector('.left');
    const rightContainer = document.getElementById('rightContainer');
    if (products.length > 0) {
        rightContainer.style.flex = '1';
        leftContainer.style.borderRight = '2px solid #ccc'; // Show border
    } else {
        rightContainer.style.flex = 'none';
        leftContainer.style.borderRight = 'none'; // Hide border
    }
}

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productDesc = document.getElementById('productDesc').value;
    const productBrand = document.getElementById('productBrand').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    if (productName && productDesc && productBrand && !isNaN(productPrice)) {
        const newProduct = {
            name: productName,
            description: productDesc,
            brand: productBrand,
            price: productPrice
        };

        products.push(newProduct);
        updateTotalProducts();
        displayProducts();
        adjustContainer();
        clearForm();
    } else {
        alert('Please fill in all the fields with valid information.');
    }
}

function displayProducts() {
    const productListDiv = document.getElementById('productList');
    productListDiv.innerHTML = '';

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'productItem';

        const productInfo = `
            <strong>${product.name}</strong><br>
            Description: ${product.description}<br>
            Brand: ${product.brand}<br>
            Price: ₹${product.price.toFixed(2)}<br>
            <button class="updateButton" onclick="updateProduct(${index})">Update</button>
            <button class="deleteButton" onclick="deleteProduct(${index})">Delete</button>
        `;

        productDiv.innerHTML = productInfo;
        productListDiv.appendChild(productDiv);
    });
}

function updateProduct(index) {
    const updatedProductName = prompt('Enter updated product name:');
    const updatedProductDesc = prompt('Enter updated product description:');
    const updatedProductBrand = prompt('Enter updated product brand:');
    const updatedProductPrice = parseFloat(prompt('Enter updated product price:'));

    if (
        updatedProductName &&
        updatedProductDesc &&
        updatedProductBrand &&
        !isNaN(updatedProductPrice)
    ) {
        products[index] = {
            name: updatedProductName,
            description: updatedProductDesc,
            brand: updatedProductBrand,
            price: updatedProductPrice
        };

        displayProducts();
    } else {
        alert('Invalid input. Please try again.');
    }
}

function deleteProduct(index) {
    const confirmation = confirm('Are you sure you want to delete this product?');

    if (confirmation) {
        products.splice(index, 1);
        displayProducts();
        updateTotalProducts();
        adjustContainer();
    }
}

function updateTotalProducts() {
    const totalProductsDiv = document.getElementById('totalProducts');
    totalProductsDiv.textContent = `Total Products: ${products.length}`;
}

function clearForm() {
    document.getElementById('productName').value = '';
    document.getElementById('productDesc').value = '';
    document.getElementById('productBrand').value = '';
    document.getElementById('productPrice').value = '';
}
