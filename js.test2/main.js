function isLeapYear(year){
    if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    }
    return false;
  }
  
  let checkYear1 = 2020;
  if(isLeapYear(checkYear1)){
    console.log(checkYear1 + '年はうるう年');
  }else{
    console.log(checkYear1 + '年はうるう年ではない');
  }

  let checkYear2 = 2021;
  if(isLeapYear(checkYear2)){
    console.log(checkYear2 + '年はうるう年');
  }else{
    console.log(checkYear2 + '年はうるう年ではない');
  }