## Тема ##
Events

### Обработка событий ###

Любое действие пользователя на странице называется "событие". Есть большой список (https://developer.mozilla.org/en-US/docs/Web/Events) событий. Наиболее используемые - это `'click'`, `'change'` и т.д. Любое действие ('событие') совершается над каким-то конкретным элементом. То есть в этом процессе фигурируют две вещи: 
  
    - DOM элемент, дад которым совершено событие.- 
    - Какое именно событие совершено (`'click'`, `'change'` ...)
      

Чтобы в нашей программе как-то реагировать на действие пользователя - эти события нужно обработать. Обработать событие означает запустить какой-то код в ответ на событие. Например отправить заказ на сервер, когда пользователь нажмет на кнопку.

Другими словами, нам нужен DOM элемент, на котором будет совершено событие, какое именно событие будем обрабатывать и код, который запустится после наступления события на заданном элементе

В JavaScript обработчик события можно задать 3-мя способами:
  
    - 💩 `<button onclick="alert('clicked')">send</button>` - назначить обработчик прямо в HTML разметке. Это наихудший способ, так как мы пишем JavaScript прямо в HTML. Да и написать туда несколько команд не так уж просто =)
    - 💩 Назначить обработчик, как свойство DOM элемента
      ```
        <!-- html -->
        <button class="send-btn">send</button>
      ```
      ```
        /* js */
        const buttonElem = document.querySelector('.send-btn');
        buttonElem.onClick = function() {
          alert('clicked');
        }
      ```
      Нужно найти DOM элемент и присвоить ему в нужное свойство ф-цию, которая выполнится, когда на этом элементе сработает событие, что соответствует названию свойства. Свойства `onClick`, `onChange`, `onMouseEnter` и т.д. Имя свойства состоит из префикса 'on', а дальше в camelCase идет название события 
    
    - 😎Назначить обработчик с помощью ф-ции `element.addEventListener`
      ```
        <!-- html -->
        <button class="send-btn">send</button>
      ```
      ```
        /* js */
        const buttonElem = document.querySelector('.send-btn');
        function handleClick() {
          alert('clicked');
        }
        buttonElem.addEventListener('click', handleClick);
      ```
      У DOM элемента есть метод `addEventListener`. Метод принимает ТРИ!!! аргумента:
      
        - название события
        - ф-ция
        - доп. настройки
      
    


  Лучший из 3-х перечисленных выше способов - это `addEventListener`


### `addEventListener` ###

  Особенности `addEventListener`
  
    - Первым аргументом идет строка - название события
    - Вторым аргументом нужно передать ссылку на ф-цию, которая объявлена отдельно. Нельзя объявлять ф-цию прямо там же
      ```
        /* 👍 правильно */
        const buttonElem = document.querySelector('.send-btn');
        function handleClick() {
          alert('clicked');
        }
        buttonElem.addEventListener('click', handleClick);
      ```
      ```
        /* 👎 не правильно */
        const buttonElem = document.querySelector('.send-btn');
        buttonElem.addEventListener('click', function () {
          alert('clicked');
        });
      ```
      Работать будет, но есть нюансы (с отменой обработчика)
    
    - Обработчик, назначенный с помощью `addEventListener` можно отменить с помощью `removeEventListener`
      ```
        const buttonElem = document.querySelector('.send-btn');
        function handleClick() {
          alert('clicked');
        }
        buttonElem.addEventListener('click', handleClick);
        // ... где-то дальше по коду
        const buttonElem = document.querySelector('.send-btn');
        buttonElem.removeEventListener('click', handleClick);
      ```
      Чтобы отменить обработчик, нужно вызвать `removeEventListener` с теми же аргументами, что и `addEventListener` - строка события в первом аргументе, ссылка на ту же ф-цию во втором. Обратите внимание, что если бы мы написали ф-цию прямо в `addEventListener`, то было бы не возможно передать ту же ф-цию в `removeEventListener` и не получилось бы отменить обработчик. После вызова `removeEventListener`, ф-ция `handleClick` больше не будет запускаться при клике на кнопку
    

