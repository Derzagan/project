function getCoupeNumber(PlaceTrain) {
    const coupeTrain = {
      1: [1, 2, 3, 4],
      2: [5, 6, 7, 8],
      3: [9, 10, 11, 12],
      4: [13, 14, 15, 16],
      5: [17, 18, 19, 20],
      6: [21, 22, 23, 24],
      7: [25, 26, 27, 28],
      8: [29, 30, 31, 32],
      9: [33, 34, 35, 36],
    };
    for ( const key in  coupeTrain){
        if ( typeof PlaceTrain === "number" && PlaceTrain > 0 && PlaceTrain % 1 === 0 ){
            if (coupeTrain[key].includes(PlaceTrain)){
                return key;

            }
            
        } else if (PlaceTrain == 0 || PlaceTrain > 36){
            return "Таких мест в вагоне не существует"
        } else{
            return "Ошибка. Проверьте правильность введенного номера места"

        }
            


    }
    


};
let res = getCoupeNumber("d");
console.log(res);
