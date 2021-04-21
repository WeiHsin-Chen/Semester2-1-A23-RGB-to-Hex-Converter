// 10位數轉換為16位數
function transfersixteen(tenNum){
  let sixteenNum  = tenNum.toString(16)
  //將個位數，補0至兩位數
  if (sixteenNum.length < 2){
    return "0" + sixteenNum
  }
  else {
    return sixteenNum
    }
}

//   數字小於255的10進位轉換16進位
//   let a  = '255';
//   const BigSixteen = ["a", "b", "c", "d", "e", "f"]
//   let firstNum = Math.floor(a / 16);
//   if(firstNum > 10){
//     let firstBig = firstNum - 10
//     firstNum = BigSixteen[firstBig]
//     console.log(firstNum)  
//   }
//   let secondNum = a % 16;
//   if(secondNum > 10){
//     let secondBig = secondNum - 10
//     secondNum = BigSixteen[secondBig]
//   }
// console.log(secondNum)

// Convert按鈕加監聽器
addBtn.addEventListener('click', convert)
// 取得紅綠藍輸入的數字
function convert(inputnumber){
  let rednumber = document.querySelector('#redinput').value
  let greennumber = document.querySelector('#greeninput').value
  let bluenumber = document.querySelector('#blueinput').value  
  
  if ( rednumber<0 || rednumber>255 ||
       greennumber<0 || greennumber>255||
       bluenumber<0 || bluenumber>255){
    alert('Please input 0~255')
  }
  else if(rednumber.length === 0 ||
          greennumber.length === 0 ||
          bluenumber.length === 0){
    alert('Input cannot be empty')
  }
    
  else {
    let HEXNum = `#${transfersixteen(parseInt(rednumber))}${transfersixteen(parseInt(greennumber))}${transfersixteen(parseInt(bluenumber))}`
    let RGBred = `#${transfersixteen(parseInt(rednumber))}0000`
    let RGBgreen = `#00${transfersixteen(parseInt(greennumber))}00`
    let RGBblue = `#0000${transfersixteen(parseInt(bluenumber))}`
    
//變更RGB的顏色    
    document.querySelector('.redcolor').style.background = RGBred
    document.querySelector('.greencolor').style.background = RGBgreen
    document.querySelector('.bluecolor').style.background = RGBblue
//顯示HEX色碼和顏色    
    document.querySelector('.HEXnumber').innerText = HEXNum
    document.querySelector('.HEXcolor').style.background = HEXNum
  }
}

//進階版
//拉條監聽器
const slider = document.querySelector('.RGBslider')
slider.addEventListener("change",colorslider)

//取得slider的值
function colorslider(slidervalue){
  const redvalue = document.querySelector('#redslider').value
  const greenvalue = document.querySelector('#greenslider').value
  const bluevalue = document.querySelector('#blueslider').value
//取得的值顯示於右邊小框框中
  document.querySelector('.redcolor2').innerText = redvalue
  document.querySelector('.greencolor2').innerText = greenvalue
  document.querySelector('.bluecolor2').innerText = bluevalue
//變更右邊小框框顏色
    let RGBred2 = `#${transfersixteen(parseInt(redvalue))}0000`
    let RGBgreen2 = `#00${transfersixteen(parseInt(greenvalue))}00`
    let RGBblue2 = `#0000${transfersixteen(parseInt(bluevalue))}`
    
//變更RGB的顏色    
    document.querySelector('.redcolor2').style.background = RGBred2
    document.querySelector('.greencolor2').style.background = RGBgreen2
    document.querySelector('.bluecolor2').style.background = RGBblue2
  
//顯示HEX色碼
  let HEXNum2 = `#${transfersixteen(parseInt(redvalue))}${transfersixteen(parseInt(greenvalue))}${transfersixteen(parseInt(bluevalue))}`
//背景色變更
  document.querySelector('.HEXnumber2').innerText = HEXNum2
  document.querySelector('.container2').style.background = HEXNum2
}