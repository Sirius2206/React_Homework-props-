import React, { useState } from "react";
import "./App.css";
import Films from "./components/stars/Films";
import Listing from "./components/listing/Listing";
import MessageHistory from "./components/messageHistory/MessageHistory";
import etsy from "./data/etsy";

const messages = [
  {
    id: "chat-5-1090",
    from: { name: "Ольга" },
    type: "response",
    time: "10:10",
    text: "Привет, Виктор. Как дела? Как идет работа над проектом?",
  },
  {
    id: "chat-5-1091",
    from: { name: "Виктор" },
    type: "message",
    time: "10:12",
    text: "Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.",
  },
  {
    id: "chat-5-1092",
    from: { name: "Ольга" },
    type: "response",
    time: "10:14",
    text: "Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?",
  },
  {
    id: "chat-5-1093",
    from: { name: "Виктор" },
    type: "message",
    time: "10:20",
    text: "Нет, все прошло гладко. Очень хочу показать всё команде.",
  },
  {
    id: "chat-5-1094",
    from: { name: "Виктор" },
    type: "typing",
    time: "10:31",
  },
];

function App() {
  const [app, setApp] = useState(<Films count={4}/>);
  const [currentClass, setCurrentClass] = useState("stars");
  const apps = [
    {
      name: "stars",
      component: <Films count={1} />,
    },
    {
      name: "listing",
      component: <Listing items={etsy} />,
    },
    {
      name: "chat",
      component: <MessageHistory list={messages} />,
    },
  ];

  const handleClick = (e) => {
    const curApp = apps.find((item) => item.name === e.target.className);
    setApp(curApp.component);
    setCurrentClass(curApp.name);
  };

  return (
    <div>
      <header className="header_main">
        <button className="stars" onClick={handleClick}>
          Задание №1(Рейтинг)
        </button>
        <button className="listing" onClick={handleClick}>
          Задание №2(Список товаров)
        </button>
        <button className="chat" onClick={handleClick}>
          Задание №3(Чат)
        </button>
      </header>
      {currentClass !== "chat" ? (
        <div className={"app_" + currentClass}>{app}</div>
      ) : (
        <div className="clearfix container">
          <div className="chat">
            <div className="chat-history">
              {app}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
