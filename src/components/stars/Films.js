import React from "react";
import Stars from "./Stars";

function Films ({count}) {
    return (
        <div className="film-card">
            <div className="film">
                <img className="film-img" src="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg" alt="Супермен"/>
                <div className="film-genre">Экшн</div>
            </div>
            <div className="film-content">
                <div className="film-info">
                    <div className="film-title">
                        Кроссовок
                    </div>
                    <div className="film-score">
                        <Stars count={count} />
                    </div>
                    <div className="film-purchase">
                        <button className="film-buy">Купить 1299Р</button>
                        <button className="film-more">Подробнее-&gt;</button>
                    </div>
                </div>
                <div className="film-aside">
                    <span>♥</span>
                    <span className="material-icons">share</span>
                </div>
            </div>
        </div>
    )
}

export default Films;