document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // استرجاع المعلومات من المدخلات
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').value;

    // إنشاء عنصر HTML جديد للمنتج
    const product = document.createElement('div');
    product.classList.add('product');
    product.innerHTML = `
        <img src="${productImage}" alt="${productName}">
        <h3>${productName}</h3>
        <p>السعر: $${productPrice}</p>
    `;

    // إضافة المنتج إلى قائمة المنتجات
    document.getElementById('product-list').appendChild(product);

    // إعادة تعيين المدخلات
    document.getElementById('add-product-form').reset();
});
