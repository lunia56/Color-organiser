import React from "react";
import createArray from "../helpers/helpers";
import Star from "./Star";

// компонент StarRating содержит состояние и возвращает отрисовку звезд с описанием
function StarRating({
  style = {},
  totalStars = 5,
  selectedStars = 0,
  onRate = f => f
}) {

  return (
    //обернули компонент в див для придания инлайн стилей. установили свой стиль и передали все оcтальные стили через ...(оператор распространения)
    // а так же добавили остальные пропсы для div для дальнейших нововведений

    <div style={{ padding: "5px", ...style }} >
      {/* создаем массив из кол-ва звезд,указанных в totalStars и передаем методу .map и из каждого элемента массива создаем компонент Star. 
    в Star передаем props : ключ и значение true или false для selected( аргумент Star по умолчанию false) */}

      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} звезд из {totalStars}  {/* выводим динамичное описание кол-ва выбранных звезд */}
      </p>

    </div>
  )
}


export default StarRating;
