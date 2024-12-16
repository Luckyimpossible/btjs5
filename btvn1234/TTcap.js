function toggleConnectionField() {
    const customerType = document.getElementById("customerType").value;
    const connectionsWrapper = document.getElementById("connectionsWrapper");

    if (customerType === "business") {
        connectionsWrapper.classList.remove("hidden");
    } else {
        connectionsWrapper.classList.add("hidden");
        document.getElementById("connections").value = 0;
    }
}
function calculateBill() {
    const customerId = document.getElementById("customerId").value.trim();
    const customerType = document.getElementById("customerType").value;
    const connections = parseInt(document.getElementById("connections").value) || 0; 
    const channels = parseInt(document.getElementById("channels").value) || 0; 
    let processingFee = 0, basicServiceFee = 0, premiumChannelFee = 0, total = 0;

    if (customerType === "residential") {
        processingFee = 4.5;
        basicServiceFee = 20.5;
        premiumChannelFee = channels * 7.5;
    } else if (customerType === "business") { 
        processingFee = 15;
        basicServiceFee = 75;
        if (connections > 10) {
            basicServiceFee += (connections - 10) * 5;
        }
        premiumChannelFee = channels * 50;
    }
    total = processingFee + basicServiceFee + premiumChannelFee;
    if (customerId === "") {
        document.getElementById("result").innerText = "Vui lòng nhập mã khách hàng!";
    } else {
        document.getElementById("result").innerText =
            `Mã Khách Hàng: ${customerId}\nTổng Tiền Cáp: $${total.toFixed(2)}`;
    }
}
