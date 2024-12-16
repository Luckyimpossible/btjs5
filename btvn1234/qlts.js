function getRegionBonus(region) {
    const regionBonus = {
      'A': 2,
      'B': 1,
      'C': 0.5,
      'X': 0 
    };
    return regionBonus[region] || 0;
  }
  function getCandidateBonus(candidateType) {
    const candidateBonus = {
      1: 2.5,
      2: 1.5,
      3: 1,
      0: 0 
    };
    return candidateBonus[candidateType] || 0;
  } 
  function main() {
    const cutoffScore = parseFloat(prompt("Nhập điểm chuẩn của hội đồng: "));
    const subject1 = parseFloat(prompt("Nhập điểm môn thứ nhất: "));
    const subject2 = parseFloat(prompt("Nhập điểm môn thứ hai: "));
    const subject3 = parseFloat(prompt("Nhập điểm môn thứ ba: "));
    const region = prompt("Nhập khu vực (A, B, C hoặc X): ").toUpperCase();
    const candidateType = parseInt(prompt("Nhập đối tượng dự thi (1, 2, 3 hoặc 0): "), 10);
    if (subject1 === 0 || subject2 === 0 || subject3 === 0) {
      alert("Rớt do có môn thi bị điểm 0.");
      return;
    }
    const regionBonus = getRegionBonus(region);
    const candidateBonus = getCandidateBonus(candidateType);
    const totalScore = subject1 + subject2 + subject3 + regionBonus + candidateBonus; 
    if (totalScore >= cutoffScore) {
      alert(`Chúc mừng bạn đã đậu!Tổng điểm của bạn là: ${totalScore.toFixed(2)}`);
    } else {
      alert(`Rất tiếc, bạn đã rớt.Tổng điểm của bạn là: ${totalScore.toFixed(2)}`);
    }
  }
  main();
  