const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

const weather = document.querySelector(".weather");
const weatherBox = document.querySelector(".weather-description");
const weatherIconBox = document.querySelector(".weather-icon-img");
const progressBar = document.querySelector("progress");

let todoArray = [];

const todoDisplay = () => {
  todoList.innerText = "";
  todoArray.forEach((aTodo) => {
    const todoItem = document.createElement("li");
    const todoItemBtn = document.createElement("button");
    todoItem.title = "Complete";
    todoItemBtn.title = "Delete";
    todoItem.textContent = aTodo.name;
    todoItemBtn.textContent = "X";

    if (aTodo.mark) {
      todoItem.classList.add("marked");
    } else {
      todoItem.classList.add("unmarked");
    }

    todoItem.addEventListener("click", () => {
      todoMark(aTodo.id);
    });
    todoItemBtn.addEventListener("click", () => {
      todoDel(aTodo.id);
    });

    todoList.appendChild(todoItem);
    todoItem.appendChild(todoItemBtn);
  });
};

const todoDel = (id) => {
  todoArray = todoArray.filter((aTodo) => {
    return aTodo.id !== id;
  });
  todoDisplay();
  todoSave();
};

const todoMark = (id) => {
  todoArray = todoArray.map((aTodo) => {
    if (aTodo.id === id) {
      return {
        ...aTodo,
        mark: !aTodo.mark,
      };
    } else {
      return {
        ...aTodo,
      };
    }
  });
  todoDisplay();
  todoSave();
};

const todoSave = () => {
  const todoSaveList = JSON.stringify(todoArray);
  localStorage.setItem("myTodo", todoSaveList);
};

const todoLoad = () => {
  const todoLoadList = localStorage.getItem("myTodo");
  if (todoLoadList === null || undefined) {
    return;
  } else {
    todoArray = JSON.parse(todoLoadList);
    todoDisplay();
  }
};

const weatherDataActive = ({
  weatherLoc,
  weatherTemp,
  weatherMain,
  weatherIcon,
}) => {
  progressBar.classList.add("disabled");

  switch (weatherMain) {
    case "Clear":
      weatherMain = "맑음";
      break;
    case "Clouds":
      weatherMain = "구름 낌";
      break;
    case "Drizzle":
      weatherMain = "이슬비";
      break;
    case "Fog":
      weatherMain = "안개";
      break;
    case "Rain":
      weatherMain = "비";
      break;
    case "Snow":
      weatherMain = "눈";
      break;
    case "Thunderstorm":
      weatherMain = "뇌우";
      break;
    default:
      break;
  }
  weatherBox.textContent = `위치 : ${weatherLoc} / 온도 : ${weatherTemp} / 날씨 : ${weatherMain}`;
  weatherIconBox.src = weatherIcon;
  weather.classList.remove("disabled");
  weather.style.bottom = "0px";
};

const weatherSearch = async (position) => {
  const fetchData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=e83cbcd7f0cb5b4bb7a22680f6cdd447`
  );
  if (fetchData.ok) {
    const rawData = await fetchData.json();
    console.log(rawData);
    const weatherData = {
      weatherLoc: rawData.name,
      weatherTemp: (rawData.main.temp - 273.15).toFixed(0) + "C",
      weatherMain: rawData.weather[0].main,
      weatherIcon: `https://openweathermap.org/img/wn/${rawData.weather[0].icon}@4x.png`,
    };
    weatherDataActive(weatherData);
  }
};

const accessToGeo = ({ coords }) => {
  const { latitude, longitude } = coords;
  const positionData = {
    latitude,
    longitude,
  };
  weatherSearch(positionData);
};

const askForLocation = () => {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    if (err.code === 1) {
      return alert("GPS를 허용해주세요!");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  todoLoad();
  askForLocation();
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = todoForm.todo.value;

  if (text.trim() === "") {
    alert("빈 내용의 ToDo는 추가할 수 없습니다.");
    return;
  }
  const addContent = {
    name: text,
    mark: false,
    id: new Date().getTime(),
  };

  todoArray.push(addContent);
  todoForm.todo.value = "";
  todoDisplay();
  todoSave();
});
