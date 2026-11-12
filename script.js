
function calculateBMI() {

  let h;  // 키
  let w;  // 몸무게

  h = Number(document.querySelector("#height").value);
  w = Number(document.querySelector("#weight").value);

  // 입력값 확인
  if (h <= 0 || w <= 0 || !Number.isFinite(h) || !Number.isFinite(w)) {
    document.querySelector("#result").textContent =
      "키와 몸무게를 올바르게 입력해주세요.";

    document.querySelector("#state").textContent = "";
    document.querySelector("#gauge-pointer").style.display = "none";
    return;
  }

  h = h / 100; // cm -> m, 170 -> 1.7

  let bmi;
  bmi = w / (h * h);

  document.querySelector("#result").textContent =
    "BMI: " + bmi.toFixed(2);

  // BMI 수치에 따른 비만 단계
  let state;

  if (bmi >= 35) {
    state = "3단계 비만 (고도비만)";
  } else if (bmi >= 30) {
    state = "2단계 비만";
  } else if (bmi >= 25) {
    state = "1단계 비만";
  } else if (bmi >= 23) {
    state = "비만 전단계";
  } else if (bmi >= 18.5) {
    state = "정상";
  } else {
    state = "저체중";
  }

  document.querySelector("#state").textContent =
    "현재 상태: " + state;

  // BMI 게이지 화살표 위치 계산
  const pointer = document.querySelector("#gauge-pointer");

  if (pointer) {

    let percent;

    if (bmi < 18.5) {
      percent = (bmi / 18.5) * (100 / 6);
    } else if (bmi < 23) {
      percent = (1 + (bmi - 18.5) / 4.5) * (100 / 6);
    } else if (bmi < 25) {
      percent = (2 + (bmi - 23) / 2) * (100 / 6);
    } else if (bmi < 30) {
      percent = (3 + (bmi - 25) / 5) * (100 / 6);
    } else if (bmi < 35) {
      percent = (4 + (bmi - 30) / 5) * (100 / 6);
    } else {
      percent = (5 + (bmi - 35) / 5) * (100 / 6);
    }

    // 화살표가 게이지 밖으로 나가지 않도록 제한
    percent = Math.max(0, Math.min(100, percent));

    pointer.style.left = percent + "%";
    pointer.style.display = "block";
  }
}
