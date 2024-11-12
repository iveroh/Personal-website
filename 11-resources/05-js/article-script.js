//Creating articles on the navigation page and sorting them
//based of the selector

//Gets HTML element
const articleContainer = document.querySelector(".article-container");

//Function that fetches from JSON file
async function fetchJSON() {
  //Collecting data from JSON
  const jsonData = await fetch("js/JSON/articles.json");

  //Converts to JavaScript Object
  const articleList = await jsonData.json(); 
  return articleList;
}

//Displays articles after sorting
async function displayArticles(value) {
  articleContainer.innerHTML = "";
  let articleList = await fetchJSON();

  if (value != "all") {
    let sortedList = sortElements(value, articleList);
    createArticles(sortedList);
  } else {
    createArticles(articleList);
  }
}

//Function to create HTML for all elements
function createArticles(articleList) {
  for (let i in articleList) {
    let object = articleList[i];

    //Creates link, adds classes
    let article = document.createElement("a");
    article.classList.add("articles", i);
    articleContainer.append(article);

    article.href = `${object.article}`;

    //HTML code in article
    article.innerHTML += `
        <img src="img/${object.img}" alt="${object.imgtxt}">
        <h2>${object.title}</h2>
         `;
  }
}

//Function to check which elements to be displayed and adds them to array
function sortElements(value, articleList) {
  let sortedList = [];
  for (let i in articleList) {
    if (value == articleList[i].type) {
      sortedList.push(articleList[i]);
    }
  }
  console.log(sortedList);
  return sortedList;
}

displayArticles("all");
