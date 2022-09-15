// Дана строка текста: 
'Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis unde'



// Функция которая принимает строку и возвращает количество слов в ней.

const taskString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis unde';
const taskString2 = 'Yellow, orange, green, blue'
const taskString3 = ' Lorem ipsum dolor sit amet consectetur adipisicing elit Recusandae consequatur doloribus Laudantium a iusto necessitatibus totam Quas aut debitis Aperiam illum similique eos mollitia eius accusantium sint voluptatum nesciunt Nobis illum rerum iure nemo tenetur Corporis ad vero delectus cupiditate reiciendis nihil labore Voluptatum quod similique'

function wordCounter(string) {
  const wordsArr = string.split(' ');
  // console.log(wordsArr);
  const arrayLenght = wordsArr.length;
  return arrayLenght + ' words in this string';
};

// Функция, которая получает строку и возвращает размер самого большого слова в ней

function longestWordFind(string) {
  const wordsArr = string.split(' ');
  // console.log(wordsArr);
  let longestWord = wordsArr[0];
  for (i = 0; i < wordsArr.length; i++) {
    if (longestWord.length < wordsArr[i].length) {
      longestWord = wordsArr[i];
    }
  }
  return longestWord.length;
};