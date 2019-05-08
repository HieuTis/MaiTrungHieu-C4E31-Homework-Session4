//6.
// function remove_dollar_sign(s) {
//      let money = s.replace(/[$]/g, "")
//      console.log(money)
// };
// remove_dollar_sign('32zx12.21a3$');

//7.
// function remove_dollar_sign(s) {
//     let money = s.replace(/[$]/g, "")
//     return(money)                                      //sửa sai..trả về money của remove dollar sign
// };

// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")

// if (string_with_no_dollars == "80% percent of life is to show up"){
//     console.log("Your function is correct")}
// else{
//     console.log("Oops, there's a bug")}

//8.
// function get_even_list(L){
//     let list = [];                              //tạo 1 list mới để lọc phần tử cần tìm
//     for (let index = 0; index < L.length; index++) {

//         if(L[index] % 2 == 0){               //tìm trong ds phần từ chia hết cho 2 = 0
//            list.push(L[index]);              //đúng thì đẩy phần tử đó vào list mới 
//         }
        
//     }
//     return list;
// };

// console.log(get_even_list([1,2,3,4,5,6,7,8,9]));

//9.
// function get_even_list(L){
//     let list = [];                             
//     for (let index = 0; index < L.length; index++) {

//         if(L[index] % 2 == 0){               
//            list.push(L[index]);              
//         }
        
//     }
//     return list;
// };

// even_list = get_even_list([1, 2, 5, 9, -10, 6])
// // console.log(even_list)                         //in ra xem kết quả

// if (even_list = [2, -10, 6]){                  // lúc đầu là '==' là phép gán trực tiếp, sửa lại là '=' là phép so sánh!
//     console.log("Your function is correct")}   
// else{
//     console.log("Ooops, bugs detected")};


//10.
// function is_inside([x,y],[x1,y1,width,height]){
   
//     if(x>=x1 && x<= x1+width){
//         if(y>y1 && y<=y1+height){
//             console.log("True!")
//         }else{
//             console.log("False!")
//         }
//     }else{
//         console.log("False!!")
//     }
// };

// is_inside([200, 120], [140, 60, 100, 200]); //true

// is_inside([100, 120], [140, 60, 100, 200]); //false

//11.

// function is_inside([x,y],[x1,y1,width,height]){
//     let answer = [];                                
//     if(x>=x1 && x<= x1+width){
//         if(y>y1 && y<=y1+height){
//             answer = 'true'
//         }else{
//             answer = 'false'
//         }
//     }else{
//         answer = 'false'
//     }
//     return answer;
// };

// let kiemtra = is_inside([200, 120], [140, 60, 100, 200]);

// if( kiemtra = 'false'){
//      console.log("Your function is correct");
// }else {
//      console.log("Ooops, bugs detected");
// };