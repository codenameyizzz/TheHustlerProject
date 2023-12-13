function showHome() {
    document.getElementById('homePanel').style.display = 'block';
    document.getElementById('dashboardPanel').style.display = 'none';
    document.getElementById('profilePanel').style.display = 'none';
    resetFeatures();
}

function showDashboard() {
    document.getElementById('homePanel').style.display = 'none';
    document.getElementById('dashboardPanel').style.display = 'block';
    document.getElementById('profilePanel').style.display = 'none';
    displayOperationChart();
}

function showProfile() {
    document.getElementById('homePanel').style.display = 'none';
    document.getElementById('dashboardPanel').style.display = 'none';
    document.getElementById('profilePanel').style.display = 'block';
    resetFeatures();
}

function resetFeatures() {
    document.getElementById('homeFeatures').style.display = 'block';
    document.getElementById('discountFeature').style.display = 'none';
    document.getElementById('businessProbabilityFeature').style.display = 'none';
    document.getElementById('taxesFeature').style.display = 'none';
    document.getElementById('discountResult').innerHTML = '';
    document.getElementById('businessResult').innerHTML = '';
    document.getElementById('taxesResult').innerHTML = '';
}

function showDiscountFeature() {
    resetFeatures();
    document.getElementById('discountFeature').style.display = 'block';
}

function showBusinessProbabilityFeature() {
    resetFeatures();
    document.getElementById('businessProbabilityFeature').style.display = 'block';
}

function showTaxesFeature() {
    resetFeatures();
    document.getElementById('taxesFeature').style.display = 'block';
}

function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);

    const discountAmount = (originalPrice * (discountPercentage / 100)).toFixed(2);
    const discountedPrice = (originalPrice - discountAmount).toFixed(2);

    const result = `
        <p>Discount Amount: $${discountAmount}</p>
        <p>Discounted Price: $${discountedPrice}</p>
    `;

    document.getElementById('discountResult').innerHTML = result;
}

function calculateBusinessProbability() {
    const businessAmount = parseFloat(document.getElementById('businessAmount').value);
    const taxRate = parseFloat(document.getElementById('businessTaxRate').value);
    const discount = parseFloat(document.getElementById('businessDiscount').value);

    const taxAmount = (businessAmount * (taxRate / 100)).toFixed(2);
    const discountedAmount = (businessAmount - (businessAmount * (discount / 100))).toFixed(2);
    const businessValueProbability = ((businessAmount - taxAmount + discountedAmount) / businessAmount * 100).toFixed(2);

    const result = `
        <p>Tax Amount: $${taxAmount}</p>
        <p>Discounted Amount: $${discountedAmount}</p>
        <p>Business Value Probability: ${businessValueProbability}%</p>
    `;

    document.getElementById('businessResult').innerHTML = result;
}

function calculateTaxes() {
    const taxableIncome = parseFloat(document.getElementById('taxableIncome').value);
    const federalRate = parseFloat(document.getElementById('federalRate').value);
    const stateRate = parseFloat(document.getElementById('stateRate').value);
    const localRate = parseFloat(document.getElementById('localRate').value);

    const federalTax = (taxableIncome * (federalRate / 100)).toFixed(2);
    const stateTax = (taxableIncome * (stateRate / 100)).toFixed(2);
    const localTax = (taxableIncome * (localRate / 100)).toFixed(2);

    const result = `
        <p>Federal Tax: $${federalTax}</p>
        <p>State Tax: $${stateTax}</p>
        <p>Local Tax: $${localTax}</p>
    `;

    document.getElementById('taxesResult').innerHTML = result;
}

function displayOperationChart() {
    const ctx = document.getElementById('operationChart').getContext('2d');
    const operationData = [25, 30, 45]; // Sample operation data

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Discount', 'Business Probability', 'Taxes'],
            datasets: [{
                data: operationData,
                backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
            }]
        }
    });
}
