import { log } from "console";
import "./styles.css";

function Lesson06() {
  //1. Типизация строк
  let userName: string = "Tom";
  userName = "28";
  userName = "";
  let fullName: string = `${userName} Smith`;

  let result: string = "2";
  result = 1 + 2 + "4";
  console.log(result);

  // 2. Типизация чисел
  let luckyNumber: number = 7;
  // luckyNumber = '34'; --- Error!
  luckyNumber = NaN;
  luckyNumber = Infinity;
  luckyNumber = -8;
  luckyNumber = 1.4;
  //luckyNumber = 2 + '3'; --> Error!!

  //тип BigInt - bigint

  //3. Типизация логического типа
  let isAdmin: boolean = true;
  isAdmin = false;
  // isAdmin = undefined; ---> Error
  isAdmin = 2 > 1;
  isAdmin = !!1;
  console.log(isAdmin);

  //4. null и undefined
  let emptyValue: null = null;
  // emptyValue = 0; ---> Error
  // emptyValue = undefined; ---> Error

  let data: undefined = undefined;
  // data = 0;---> Error
  // data = null; ---> Error

  //5. Типизация массива
  const colors: string[] = ["red", "blue", "black"];
  // colors.push(23);---> Error
  colors.push("23");
  // colors[0] = 123;---> Error
  colors[0] = "123";

  //6. Кортеж (tupel)
  const fruits: [string, number] = ["apple", 4];
  fruits.push("cherry");
  console.log(fruits);
  // fruits[2]

  //7. Типизация возвращаемого функцией значения
  const showMessage = (): void => {
    console.log("Hello");
  };
  showMessage();

  const returnNumber = (): number => {
    return 45;
  };
  console.log(returnNumber);

  //8. Автоматическое опредление типа
  let name = "Bob";
  // name = 8; ---> Error

  let userData;
  userData = "Mary";
  userData = 12;
  userData = ["John", 56];

  let age: any = 45;
  age = "30";

  // console.log(a);
  var a = 30;

  //9. Типизация параметров функции
  const getUserData = (firstName: string, age: number) => {
    return `${firstName} ${age}`;
  };

  // getUserData('Tom', '34'); ---> Error
  getUserData("Tom", 34);

  //10. Union type
  let isManager: boolean | undefined | string = true;
  isManager = undefined;
  isManager = "yes";

  //11. Типизация объектов
  interface User {
    name: string;
    age?: number | string;
  }

  // const user: User = {
  //   name: 'Lola',
  //   age: 34
  // }

  const user: User = {
    name: "Lola",
  };

  //type
  type Animal = {
    name?: string,
    weight: number
  }

  const animal: Animal ={
    weight: 100,
    name: 'Lion'
  }

  interface Zoo {
    animalData: Animal
    city: string
  }

  const zoo: Zoo = {
    animalData: {
      weight: 250,
      name: 'Horde'
    },
    city: 'Berlin'
  }

  return <div className="lesson06-container">Lesson 6 - Type Script</div>;
}

export default Lesson06;
