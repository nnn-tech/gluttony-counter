const hitPoint = document.getElementById("hitPoint");
const attackPoint = document.getElementById("attackPoint");
const AttackCounterResult = document.getElementById("AttackCounterResult");
const hotPotCounterResult = document.getElementById("hotPotCounterResult");
const DURATION = 80

// 攻撃回数カウンター
function attackCount(statusChangeValue, countChangeValue) {

  let hitPointToInt = parseInt(hitPoint.textContent);
  let attackPointToInt = parseInt(attackPoint.textContent);
  toHitPoint = hitPointToInt + statusChangeValue;
  toAttackPoint = attackPointToInt + statusChangeValue;

  const startTime = Date.now()

  const timer = setInterval(() => {
    const elapsedTime = Date.now() - startTime
    const progress = elapsedTime / DURATION
    
    if (progress < 1) {
      hitPoint.textContent = Math.floor(hitPointToInt + progress * (toHitPoint - hitPointToInt))
      attackPoint.textContent = Math.floor(attackPointToInt + progress * (toAttackPoint - attackPointToInt))
    } else {
      hitPoint.textContent = toHitPoint;
      attackPoint.textContent = toAttackPoint;
      clearInterval(timer)
    }
  }, 16)

  let AttackCounterResultToInt = parseInt(AttackCounterResult.textContent);
  AttackCounterResultToInt += countChangeValue;
  AttackCounterResult.textContent = AttackCounterResultToInt;
}

// 胡坐鍋カウンタープラス関連処理
function hotPotCount(statusChangeValue, countChangeValue) {
  let hitPointToInt = parseInt(hitPoint.textContent);
  let attackPointToInt = parseInt(attackPoint.textContent);
  toHitPoint = hitPointToInt + statusChangeValue;
  toAttackPoint = attackPointToInt + statusChangeValue;

  const startTime = Date.now()

  const timer = setInterval(() => {
    const elapsedTime = Date.now() - startTime
    const progress = elapsedTime / DURATION
    
    if (progress < 1) {
      hitPoint.textContent = Math.floor(hitPointToInt + progress * (toHitPoint - hitPointToInt))
      attackPoint.textContent = Math.floor(attackPointToInt + progress * (toAttackPoint - attackPointToInt))
    } else {
      hitPoint.textContent = toHitPoint;
      attackPoint.textContent = toAttackPoint;
      clearInterval(timer)
    }
  }, 16)

  let hotPotCounterResultToInt = parseInt(hotPotCounterResult.textContent);
  hotPotCounterResultToInt += countChangeValue;
  hotPotCounterResult.textContent = hotPotCounterResultToInt;
}