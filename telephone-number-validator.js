function telephoneCheck(str) {
    let rgx1 = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
    let rgx2 = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    let rgx3 = /^1?\s*(\d\s*){10}$/;
    let rgx4 = /^1\s*\(\d{3}\)\s*\d{3}-\d{4}$/;
    let rgx5 = /^1\s*\d{3}[- ]?\d{3}[- ]?\d{4}$/;
    
    if (rgx1.test(str) | rgx2.test(str) | rgx3.test(str) | rgx4.test(str) | rgx5.test(str)){
      return true;
    } else {
      return false;
    }
    
  }
  
console.log(telephoneCheck("555-555-5555"));