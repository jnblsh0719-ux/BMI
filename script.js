function calculateBMI(){

  let h;  //키
  let w;  //몸무게

  h = Number(document.querySelector("#height").value);
  w = Number(document.querySelector("#weight").value);

  h = h / 100 //cm -> m, 170 -> 1.7
  
  let bmi;
  bmi = w / (h * h);

  document.querySelector("#result").textContent = "BMI:" + bmi.toFixed(2);
  
  // 조건문을 함수 안으로 이동시켰습니다.
  if (bmi >= 25) {
    document.querySelector("#state").textContent = "비만";
  } else if (bmi >= 23) {
    document.querySelector("#state").textContent = "과체중";
  } else if (bmi >= 18.5) {
    document.querySelector("#state").textContent = "정상";
  } else {
    document.querySelector("#state").textContent = "저체중";
  }
}

// BMI 수치에 따라 상단 삼각형 포인터 위치 이동 (0 ~ 40 범위 기준)
  const pointer = document.querySelector("#gauge-pointer");
  if (pointer) {
    let percent = (bmi / 40) * 100;
    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;
    pointer.style.left = percent + "%";
  }