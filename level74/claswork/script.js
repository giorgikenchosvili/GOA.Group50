function elimination(arr){
    for(let i = 0;i<arr.length;i++){
      for(let idk = i+1;idk<arr.length;idk++){
        if(arr[i]==arr[idk]){
          return arr[i]
        }
      }
    }
  
    return null
  }