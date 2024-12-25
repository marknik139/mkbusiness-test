# Задание для МК-Бизнес Онлайн:

    1. Напишите функцию подготовки строки, которая заполняет шаблон данными из указанного объекта
    2. Пришлите код целиком, чтобы можно его было проверить
    3. Придерживайтесь code style текущего задания
    4. По необходимости - можете дописать код, методы
    5. Разместите код в гите и пришлите ссылку

# Исполнение
## Конструктор:
- **`constructor(api_path_templates = [], baseURL = '')`**
  - Инициализирует класс с возможностью указать:
    - Массив шаблонов путей API (`api_path_templates`), которые будут использоваться для генерации путей.
    - Базовый URL (`baseURL`), который будет добавляться ко всем путям API.

## Методы:
- **`get_api_path(object, template)`**
  - Заполняет шаблон `template` данными из объекта `object`. Заменяет все вхождения шаблонов (например, `%id%`) на соответствующие значения из объекта.
  - Если ключ не найден в объекте, выбрасывается ошибка.

- **`get_all_api_paths(object)`**
  - Генерирует массив путей на основе всех шаблонов API, указанных при создании объекта. Каждый путь заполняется данными из объекта `object` с помощью метода `get_api_path`.