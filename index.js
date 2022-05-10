var money = [
    { name: "ONE HUNDRED", value: 100.0 },
    { name: "TWENTY", value: 20.0 },
    { name: "TEN", value: 10.0 },
    { name: "FIVE", value: 5.0 },
    { name: "ONE", value: 1.0 },
    { name: "QUARTER", value: 0.25 },
    { name: "DIME", value: 0.1 },
    { name: "NICKEL", value: 0.05 },
    { name: "PENNY", value: 0.01 },
  ];
  function checkCashRegister(price, cash, cid) {
    let change = cash - price;
   
    let result = {
      status: "",
      change: [],
    };
    let sumCid = 0;
   
    for (let i = 0; i < cid.length; i++) {
      sumCid += cid[i][1]
    }
    console.log(sumCid, '=sumCid')
  
  
    if (sumCid < change) {
      result.status = "INSUFFICIENT_FUNDS";
      return result;
    }
  
    if (sumCid === change) {
   
      result.status = "CLOSED"
      result.change = cid
      return result;
    }
   
    let newResult = [];
  
    cid = cid.reverse();
  
  
    for (let i = 0; i < cid.length; i++) {
      
      let val = 0
      
  
     
      console.log(money[i].value, "denom val")
      console.log(cid[i][0], "=cid i of zero")
      while (money[i].value <= change && cid[i][1] > 0) {
        
        console.log('reached while')
    
        cid[i][1] -= money[i].value
      
        change = change.toFixed(2)
        change -= money[i].value
        console.log(change, "=change")
  
      
        val += money[i].value
      }
     
  
      if (val > 0) {
        
        newResult.push([cid[i][0], val])
      }
    }
  
    if (change > 0) {
      
      console.log('change=', change)
      result.status = "INSUFFICIENT_FUNDS";
      return result
    }
  
    result.status = "OPEN";
    result.change = newResult;
    return result;
  }
  console.log(
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  );
  
  
    