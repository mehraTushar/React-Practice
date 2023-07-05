import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSquareNfi,
  faArrowRight,
  faYoutube,
} from "@fortawesome/free-solid-svg-icons";

let data = {
  categories: [
    {
      idCategory: "1",
      strCategory: "Beef",
      strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
      strCategoryDescription:
        "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
    },
    {
      idCategory: "2",
      strCategory: "Chicken",
      strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
      strCategoryDescription:
        "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
    },
    {
      idCategory: "3",
      strCategory: "Dessert",
      strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
      strCategoryDescription:
        "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
    },
    {
      idCategory: "4",
      strCategory: "Lamb",
      strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
      strCategoryDescription:
        "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n",
    },
    {
      idCategory: "5",
      strCategory: "Miscellaneous",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/miscellaneous.png",
      strCategoryDescription:
        "General foods that don't fit into another category",
    },
    {
      idCategory: "6",
      strCategory: "Pasta",
      strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
      strCategoryDescription:
        "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).",
    },
    {
      idCategory: "7",
      strCategory: "Pork",
      strCategoryThumb: "https://www.themealdb.com/images/category/pork.png",
      strCategoryDescription:
        "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.",
    },
    {
      idCategory: "8",
      strCategory: "Seafood",
      strCategoryThumb: "https://www.themealdb.com/images/category/seafood.png",
      strCategoryDescription:
        'Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term "seafood" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.',
    },
    {
      idCategory: "9",
      strCategory: "Side",
      strCategoryThumb: "https://www.themealdb.com/images/category/side.png",
      strCategoryDescription:
        "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes).",
    },
    {
      idCategory: "10",
      strCategory: "Starter",
      strCategoryThumb: "https://www.themealdb.com/images/category/starter.png",
      strCategoryDescription:
        "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal.\r\n\r\nHistorically, the entrée was one of the stages of the “Classical Order” of formal French table service of the 18th and 19th centuries. It formed a part of the “first service” of the meal, which consisted of potage, hors d’œuvre, and entrée (including the bouilli and relevé). The “second service” consisted of roast (rôti), salad, and entremets (the entremets sometimes being separated into a “third service” of their own). The final service consisted only of dessert.[3]:3–11 :13–25",
    },
    {
      idCategory: "11",
      strCategory: "Vegan",
      strCategoryThumb: "https://www.themealdb.com/images/category/vegan.png",
      strCategoryDescription:
        "Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced /ˈviːɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.[c] The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the use of animals for any purpose.[d] Another term is environmental veganism, which refers to the avoidance of animal products on the premise that the harvesting or industrial farming of animals is environmentally damaging and unsustainable.",
    },
    {
      idCategory: "12",
      strCategory: "Vegetarian",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/vegetarian.png",
      strCategoryDescription:
        "Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.\r\n\r\nVegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy. Other motivations for vegetarianism are health-related, political, environmental, cultural, aesthetic, economic, or personal preference. There are variations of the diet as well: an ovo-lacto vegetarian diet includes both eggs and dairy products, an ovo-vegetarian diet includes eggs but not dairy products, and a lacto-vegetarian diet includes dairy products but not eggs. A vegan diet excludes all animal products, including eggs and dairy. Some vegans also avoid other animal products such as beeswax, leather or silk clothing, and goose-fat shoe polish.",
    },
    {
      idCategory: "13",
      strCategory: "Breakfast",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/breakfast.png",
      strCategoryDescription:
        'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.',
    },
    {
      idCategory: "14",
      strCategory: "Goat",
      strCategoryThumb: "https://www.themealdb.com/images/category/goat.png",
      strCategoryDescription:
        "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.",
    },
  ],
};

const Navbar = () => (
  <>
    <FontAwesomeIcon icon={faSquareNfi} size="2xl" />
    <input
      type="text"
      placeholder="Click here To Search"
      className="SearchBox"
    />
    <FontAwesomeIcon icon={faUser} size="2xl" />
  </>
);

const Card = ({ data }) => {
  return (
    <div className="card" key={data.idMeal} id={data.idMeal}>
      <h2>{data.strMeal}</h2>
      <img src={data.strMealThumb} />
      <a href={data.strYoutube} target="_blank">
        <FontAwesomeIcon icon={faArrowRight} size="2xl" />
        <FontAwesomeIcon icon={faYoutube} size="2xl" />
      </a>
      <div>
        <h4>Instructions:</h4>
        <p>{data.strInstructions}</p>
      </div>
      <p>{data.strTags}</p>
      <span id="circle"></span>
    </div>
  );
};

const MainBody = () => {
  return (
    <div className="foodCardList">
      {data1.meals.map((meal) => {
        return <Card data={meal} />;
      })}
    </div>
  );
};

const MainContainer = () => {
  return (
    <>
      <section className="Navbar" key="Navbar">
        <Navbar />
      </section>
      <section className="mainBody" key="mainBody">
        <MainBody />
      </section>
    </>
  );
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainContainer />);

//https://www.themealdb.com/api/json/v1/1/random.php

let data1 = {
  meals: [
    {
      idMeal: "52855",
      strMeal: "Banana Pancakes",
      strDrinkAlternate: null,
      strCategory: "Dessert",
      strArea: "American",
      strInstructions:
        "In a bowl, mash the banana with a fork until it resembles a thick purée. Stir in the eggs, baking powder and vanilla.\r\nHeat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil. Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate. Repeat the process with the remaining oil and batter. Top the pancakes with the pecans and raspberries.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
      strTags: "Breakfast,Desert,Sweet",
      strYoutube: "https://www.youtube.com/watch?v=kSKtb2Sv-_U",
      strIngredient1: "Banana",
      strIngredient2: "Eggs",
      strIngredient3: "Baking Powder",
      strIngredient4: "Vanilla Extract",
      strIngredient5: "Oil",
      strIngredient6: "Pecan Nuts",
      strIngredient7: "Raspberries",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "1 large",
      strMeasure2: "2 medium",
      strMeasure3: "pinch",
      strMeasure4: "spinkling",
      strMeasure5: "1 tsp ",
      strMeasure6: "25g",
      strMeasure7: "125g",
      strMeasure8: "",
      strMeasure9: "",
      strMeasure10: "",
      strMeasure11: "",
      strMeasure12: "",
      strMeasure13: "",
      strMeasure14: "",
      strMeasure15: "",
      strMeasure16: "",
      strMeasure17: "",
      strMeasure18: "",
      strMeasure19: "",
      strMeasure20: "",
      strSource: "https://www.bbcgoodfood.com/recipes/banana-pancakes",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "52820",
      strMeal: "Katsu Chicken curry",
      strDrinkAlternate: null,
      strCategory: "Chicken",
      strArea: "Japanese",
      strInstructions:
        "Prep:15min  ›  Cook:30min  ›  Ready in:45min \r\n\r\nFor the curry sauce: Heat oil in medium non-stick saucepan, add onion and garlic and cook until softened. Stir in carrots and cook over low heat for 10 to 12 minutes.\r\nAdd flour and curry powder; cook for 1 minute. Gradually stir in stock until combined; add honey, soy sauce and bay leaf. Slowly bring to the boil.\r\nTurn down heat and simmer for 20 minutes or until sauce thickens but is still of pouring consistency. Stir in garam masala. Pour the curry sauce through a sieve; return to saucepan and keep on low heat until ready to serve.\r\nFor the chicken: Season both sides of chicken breasts with salt and pepper. Place flour, egg and breadcrumbs in separate bowls and arrange in a row. Coat the chicken breasts in flour, then dip them into the egg, then coat in breadcrumbs, making sure you cover both sides.\r\nHeat oil in large frying pan over medium-high heat. Place chicken into hot oil and cook until golden brown, about 3 or 4 minutes each side. Once cooked, place on kitchen paper to absorb excess oil.\r\nPour curry sauce over chicken, serve with white rice and enjoy!",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
      strTags: "Curry,Meat",
      strYoutube: "https://www.youtube.com/watch?v=MWzxDFRtVbc",
      strIngredient1: "chicken breast",
      strIngredient2: "plain flour",
      strIngredient3: "egg",
      strIngredient4: "breadcrumbs",
      strIngredient5: "vegetable oil",
      strIngredient6: "sunflower oil",
      strIngredient7: "onions",
      strIngredient8: "garlic",
      strIngredient9: "carrot",
      strIngredient10: "plain flour",
      strIngredient11: "curry powder",
      strIngredient12: "chicken stock",
      strIngredient13: "honey",
      strIngredient14: "soy sauce",
      strIngredient15: "bay leaf",
      strIngredient16: "garam masala",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "4 pounded to 1cm thickness",
      strMeasure2: "2 tablespoons",
      strMeasure3: "1 beaten",
      strMeasure4: "100g fine",
      strMeasure5: "230ml frying",
      strMeasure6: "2 tablespoons",
      strMeasure7: "2 sliced",
      strMeasure8: "5 chopped cloves",
      strMeasure9: "2 sliced",
      strMeasure10: "2 tablespoons",
      strMeasure11: "4 teaspoons",
      strMeasure12: "600ml",
      strMeasure13: "2 teaspoons",
      strMeasure14: "4 teaspoons",
      strMeasure15: "1",
      strMeasure16: "1 teaspoon",
      strMeasure17: "",
      strMeasure18: "",
      strMeasure19: "",
      strMeasure20: "",
      strSource:
        "http://allrecipes.co.uk/recipe/29578/chicken-katsu-curry.aspx",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "52941",
      strMeal: "Red Peas Soup",
      strDrinkAlternate: null,
      strCategory: "Beef",
      strArea: "Jamaican",
      strInstructions:
        "Wash and rinse the dried kidney beans.. then cover with water in a deep bowl. Remember as they soak they will expand to at least triple the size they were originally so add a lot of water to the bowl. Soak them overnight or for at least 2 hrs to make the cooking step go quicker. I tossed out the water they were soaked in after it did the job.\r\n\r\nHave your butcher cut the salted pigtail into 2 inch pieces as it will be very difficult to cut with an ordinary kitchen knife. Wash, then place a deep pot with water and bring to a boil. Cook for 20 minutes, then drain + rinse and repeat (boil again in water). The goal is to make the pieces of pig tails tender and to remove most of the salt it was cured in.\r\n\r\nTime to start the soup. Place everything in the pot (except the flour and potato), then cover with water and place on a high flame to bring to a boil. As it comes to a boil, skim off any scum/froth at the top and discard. Reduce the heat to a gentle boil and allow it to cook for 1 hr and 15 mins.. basically until the beans are tender and start falling apart.\r\n\r\nIt’s now time to add the potato (and Yams etc if you’re adding it) as well as the coconut milk and continue cooking for 15 minutes.\r\n\r\nNow is a good time to start making the basic dough for the spinner dumplings. Mix the flour and water (add a pinch of salt if you want) until you have a soft/smooth dough. allow it to rest for 5 minutes, then pinch of a tablespoon at a time and roll between your hands to form a cigarette shape.\r\n\r\nAdd them to the pot, stir well and continue cooking for another 15 minutes on a rolling boil.\r\n\r\nYou’ll notice that I didn’t add any salt to the pot as the remaining salt from the salted pigtails will be enough to properly season this dish. However you can taste and adjust accordingly. Lets recap the timing part of things so you’re not confused. Cook the base of the soup for 1 hr and 15 minute or until tender, then add the potatoes and cook for 15 minutes, then add the dumplings and cook for a further 15 minutes. Keep in mind that this soup will thicken quite a bit as it cools.\r\n\r\nWhile this is not a traditional recipe to any one specific island, versions of this soup (sometimes called stewed peas) can be found throughout the Caribbean, Latin America and Africa. A hearty bowl of this soup will surely give you the sleepies (some may call it ethnic fatigue). You can certainly freeze the leftovers and heat it up another day.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/sqpqtp1515365614.jpg",
      strTags: "Soup,SideDish",
      strYoutube: "https://www.youtube.com/watch?v=1ogCfDXotMw",
      strIngredient1: "Kidney Beans",
      strIngredient2: "Carrots",
      strIngredient3: "Spring Onions",
      strIngredient4: "Thyme",
      strIngredient5: "Onion",
      strIngredient6: "Black Pepper",
      strIngredient7: "Red Pepper",
      strIngredient8: "Garlic Clove",
      strIngredient9: "Allspice",
      strIngredient10: "Beef",
      strIngredient11: "Water",
      strIngredient12: "Potatoes",
      strIngredient13: "Plain Flour",
      strIngredient14: "Water",
      strIngredient15: "Coconut Milk",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "2 cups ",
      strMeasure2: "1 large",
      strMeasure3: "2 chopped",
      strMeasure4: "4 sprigs",
      strMeasure5: "1 Diced",
      strMeasure6: "1/2 tsp",
      strMeasure7: "2 chopped",
      strMeasure8: "4 Mashed",
      strMeasure9: "1 tbs",
      strMeasure10: "2 Lbs",
      strMeasure11: "2L",
      strMeasure12: "4",
      strMeasure13: "1 cup ",
      strMeasure14: "1/4 cup",
      strMeasure15: "1 cup ",
      strMeasure16: "",
      strMeasure17: "",
      strMeasure18: "",
      strMeasure19: "",
      strMeasure20: "",
      strSource: "http://caribbeanpot.com/caribbean-red-peas-soup/",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "53048",
      strMeal: "Mee goreng mamak",
      strDrinkAlternate: null,
      strCategory: "Seafood",
      strArea: "Malaysian",
      strInstructions:
        "Heat oil in a pan at medium heat. Then, add peanuts, dried chilies, dried shrimps and dhal. Fry the aromatics until fragrant. Remove from pan and leave aside.\r\n\r\nBlend fried ingredients with tamarind paste and water until fine. Then, sauté the blended ingredients in oil heated over low heat. Continue cooking until the oil separates from the paste and turns a darker shade.\r\n\r\nSkin and cut potatoes into small chunks and boil them in a pot of water until knife-tender. Once ready, remove them from the pot and leave aside. Discard water.\r\n\r\nSlice onion and fried tofu, mince garlic, cut some cabbage and Chinese flowering cabbage (choi sam). Prepare prawn fritters and cut them. Boil noodles to soften them if bought dried. Also mix black soy sauce with water.\r\n\r\nTo fry one portion of mee goreng mamak, heat oil and add 1/4 of the following ingredients in this order: garlic, onion, paste. Sauté until fragrant. Optionally, add prawns.\r\n\r\nAdd in 1/4 amount of tofu, boiled potatoes, cabbage, Chinese flowering cabbage and prawn fritters. Sauté for another 30 seconds.\r\n\r\nAdd noodles to the wok. Add 3 tablespoons of dark soy sauce mixture. Mix evenly for the next 1 minute. Then, move the noodles to the side of the wok. Stir in an egg. Garnish with a slice of lime and slices of green chilies. To cook another plate of noodles, repeat from step 5 onwards.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg",
      strTags: null,
      strYoutube: "https://www.youtube.com/watch?v=pOJEmDBgtSk",
      strIngredient1: "Peanuts",
      strIngredient2: "Chilli",
      strIngredient3: "Prawns",
      strIngredient4: "Oil",
      strIngredient5: "Water",
      strIngredient6: "Tamarind Paste",
      strIngredient7: "Potatoes",
      strIngredient8: "Red Onions",
      strIngredient9: "Garlic Clove",
      strIngredient10: "Cabbage",
      strIngredient11: "Chinese Broccoli",
      strIngredient12: "Tofu",
      strIngredient13: "Soy Sauce",
      strIngredient14: "Noodles",
      strIngredient15: "Egg",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "50g",
      strMeasure2: "15g",
      strMeasure3: "10g",
      strMeasure4: "5 tbs",
      strMeasure5: "750 ml ",
      strMeasure6: "1/2 tbs",
      strMeasure7: "250g",
      strMeasure8: "2",
      strMeasure9: "4",
      strMeasure10: "30g",
      strMeasure11: "30g",
      strMeasure12: "1",
      strMeasure13: "1 tbs",
      strMeasure14: "4",
      strMeasure15: "1",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource:
        "https://www.nyonyacooking.com/recipes/mee-goreng-mamak~BkTLRjTuX",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "52773",
      strMeal: "Honey Teriyaki Salmon",
      strDrinkAlternate: null,
      strCategory: "Seafood",
      strArea: "Japanese",
      strInstructions:
        "Mix all the ingredients in the Honey Teriyaki Glaze together. Whisk to blend well. Combine the salmon and the Glaze together.\r\n\r\nHeat up a skillet on medium-low heat. Add the oil, Pan-fry the salmon on both sides until it’s completely cooked inside and the glaze thickens.\r\n\r\nGarnish with sesame and serve immediately.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
      strTags: "Fish,Breakfast,DateNight",
      strYoutube: "https://www.youtube.com/watch?v=4MpYuaJsvRw",
      strIngredient1: "Salmon",
      strIngredient2: "Olive oil",
      strIngredient3: "Soy Sauce",
      strIngredient4: "Sake",
      strIngredient5: "Sesame Seed",
      strIngredient6: "",
      strIngredient7: "",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: null,
      strIngredient17: null,
      strIngredient18: null,
      strIngredient19: null,
      strIngredient20: null,
      strMeasure1: "1 lb",
      strMeasure2: "1 tablespoon",
      strMeasure3: "2 tablespoons",
      strMeasure4: "2 tablespoons",
      strMeasure5: "4 tablespoons",
      strMeasure6: "",
      strMeasure7: "",
      strMeasure8: "",
      strMeasure9: "",
      strMeasure10: "",
      strMeasure11: "",
      strMeasure12: "",
      strMeasure13: "",
      strMeasure14: "",
      strMeasure15: "",
      strMeasure16: null,
      strMeasure17: null,
      strMeasure18: null,
      strMeasure19: null,
      strMeasure20: null,
      strSource: null,
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "53072",
      strMeal: "Crispy Eggplant",
      strDrinkAlternate: null,
      strCategory: "Vegetarian",
      strArea: "Filipino",
      strInstructions:
        "Slice eggplant into 1 cm (0.4-inch) slices. Place them in a bowl and sprinkle them with salt. allow them to sit for 30 minutes to render some of their liquid and bitterness.\r\n2. After 30 minutes wash eggplant slices from salt and pat dry with a kitchen towel.\r\n3. In a large bowl/plate place breadcrumbs and sesame seeds. In another bowl beat 2 eggs with pinch salt and pepper.\r\n4. Heal oil in a large skillet over high heat.\r\n5. Dip eggplant slices in egg, then in crumbs, and place in hot oil. Fry 2 to 3 minutes on each side, or until golden brown. Drain on a paper towel. \r\n",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/c7lzrl1683208757.jpg",
      strTags: null,
      strYoutube: "https://www.youtube.com/watch?v=4mINk5d2hto",
      strIngredient1: "Egg Plants",
      strIngredient2: "Breadcrumbs",
      strIngredient3: "Sesame Seed",
      strIngredient4: "Eggs",
      strIngredient5: "Salt",
      strIngredient6: "Pepper",
      strIngredient7: "Vegetable Oil",
      strIngredient8: "",
      strIngredient9: "",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "1 large",
      strMeasure2: "1 cup ",
      strMeasure3: "50g",
      strMeasure4: "2",
      strMeasure5: "To taste",
      strMeasure6: "To taste",
      strMeasure7: "For frying",
      strMeasure8: " ",
      strMeasure9: " ",
      strMeasure10: " ",
      strMeasure11: " ",
      strMeasure12: " ",
      strMeasure13: " ",
      strMeasure14: " ",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource: "https://yummyfood.ph/recipe/crispiest-fried-eggplant/",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "53063",
      strMeal: "Chivito uruguayo",
      strDrinkAlternate: null,
      strCategory: "Beef",
      strArea: "Unknown",
      strInstructions:
        "Crush the meat so that it is finite and we put it on a griddle to brown. Put the eggs, bacon and ham to fry.\r\nCut the bread in half, put the beef brisket, the fried eggs, the bacon, the ham, the mozzarella, the tomato and the lettuce. Cover with the other half of the bread and serve.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg",
      strTags: null,
      strYoutube:
        "https://www.youtube.com/watch?v=0PXbbL1QdaA&ab_channel=D%C3%ADadeCocina",
      strIngredient1: "Beef Brisket",
      strIngredient2: "Bread",
      strIngredient3: "Lettuce",
      strIngredient4: "Tomato",
      strIngredient5: "Ham",
      strIngredient6: "Mozzarella",
      strIngredient7: "Bacon",
      strIngredient8: "Egg",
      strIngredient9: "Onion",
      strIngredient10: "Pepper",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "2",
      strMeasure2: "2",
      strMeasure3: "1",
      strMeasure4: "1",
      strMeasure5: "100g ",
      strMeasure6: "100g ",
      strMeasure7: "100g ",
      strMeasure8: "1",
      strMeasure9: "1",
      strMeasure10: "1",
      strMeasure11: " ",
      strMeasure12: " ",
      strMeasure13: " ",
      strMeasure14: " ",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource: "https://cookpad.com/uy/recetas/116102-chivito-uruguayo",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
    {
      idMeal: "52965",
      strMeal: "Breakfast Potatoes",
      strDrinkAlternate: null,
      strCategory: "Breakfast",
      strArea: "Canadian",
      strInstructions:
        "Before you do anything, freeze your bacon slices that way when you're ready to prep, it'll be so much easier to chop!\r\nWash the potatoes and cut medium dice into square pieces. To prevent any browning, place the already cut potatoes in a bowl filled with water.\r\nIn the meantime, heat 1-2 tablespoons of oil in a large skillet over medium-high heat. Tilt the skillet so the oil spreads evenly.\r\nOnce the oil is hot, drain the potatoes and add to the skillet. Season with salt, pepper, and Old Bay as needed.\r\nCook for 10 minutes, stirring the potatoes often, until brown. If needed, add a tablespoon more of oil.\r\nChop up the bacon and add to the potatoes. The bacon will start to render and the fat will begin to further cook the potatoes. Toss it up a bit! The bacon will take 5-6 minutes to crisp.\r\nOnce the bacon is cooked, reduce the heat to medium-low, add the minced garlic and toss. Season once more. Add dried or fresh parsley. Control heat as needed.\r\nLet the garlic cook until fragrant, about one minute.\r\nJust before serving, drizzle over the maple syrup and toss. Let that cook another minute, giving the potatoes a caramelized effect.\r\nServe in a warm bowl with a sunny side up egg!",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/1550441882.jpg",
      strTags: "Breakfast,Brunch,",
      strYoutube: "https://www.youtube.com/watch?v=BoD0TIO9nE4",
      strIngredient1: "Potatoes",
      strIngredient2: "Olive Oil",
      strIngredient3: "Bacon",
      strIngredient4: "Garlic Clove",
      strIngredient5: "Maple Syrup",
      strIngredient6: "Parsley",
      strIngredient7: "Salt",
      strIngredient8: "Pepper",
      strIngredient9: "Allspice",
      strIngredient10: "",
      strIngredient11: "",
      strIngredient12: "",
      strIngredient13: "",
      strIngredient14: "",
      strIngredient15: "",
      strIngredient16: "",
      strIngredient17: "",
      strIngredient18: "",
      strIngredient19: "",
      strIngredient20: "",
      strMeasure1: "3 Medium",
      strMeasure2: "1 tbs",
      strMeasure3: "2 strips",
      strMeasure4: "Minced",
      strMeasure5: "1 tbs",
      strMeasure6: "Garnish",
      strMeasure7: "Pinch",
      strMeasure8: "Pinch",
      strMeasure9: "To taste",
      strMeasure10: " ",
      strMeasure11: " ",
      strMeasure12: " ",
      strMeasure13: " ",
      strMeasure14: " ",
      strMeasure15: " ",
      strMeasure16: " ",
      strMeasure17: " ",
      strMeasure18: " ",
      strMeasure19: " ",
      strMeasure20: " ",
      strSource:
        "http://www.vodkaandbiscuits.com/2014/03/06/bangin-breakfast-potatoes/",
      strImageSource: null,
      strCreativeCommonsConfirmed: null,
      dateModified: null,
    },
  ],
};
