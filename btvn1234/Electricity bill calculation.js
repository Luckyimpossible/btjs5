function calculateElectricityBill() {
    const name = document.getElementById('name').value;
    const kwh = parseInt(document.getElementById('kwh').value);
    let total = 0;
  
    if (isNaN(kwh) || kwh < 0 || name.trim() === "") {
      alert("Vui lòng nhập tên và số kW hợp lệ!");
      return;
    }
  
    let remaining = kwh;
  
    if (remaining > 0) {
      const first50 = Math.min(remaining, 50);
      total += first50 * 500;
      remaining -= first50;
    }
  
    if (remaining > 0) {
      const next50 = Math.min(remaining, 50);
      total += next50 * 650;
      remaining -= next50;
    }
  
    if (remaining > 0) {
      const next100 = Math.min(remaining, 100);
      total += next100 * 850;
      remaining -= next100;
    }
  
    if (remaining > 0) {
      const next150 = Math.min(remaining, 150);
      total += next150 * 1100;
      remaining -= next150;
    }
  
    if (remaining > 0) {
      total += remaining * 1300;
    }

    document.getElementById('result').innerHTML = 
      `Xin chào ${name}, số tiền điện bạn phải trả là: <strong>${total.toLocaleString()} đồng</strong>`;
  }
  