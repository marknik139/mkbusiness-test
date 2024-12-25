/*
    task
    1. Напишите функцию подготовки строки, которая заполняет шаблон данными из указанного объекта
    2. Пришлите код целиком, чтобы можно его было проверить
    3. Придерживайтесь code style текущего задания
    4. По необходимости - можете дописать код, методы
    5. Разместите код в гите и пришлите ссылку
*/


/**
 * Класс для работы с API
 *
 * @author		Nikita Markelov
 * @version		v.1.0 (25/12/2024)
 */
class Api
{
    /**
    * Конструктор класса Api
    *
    * @param {Array} [api_path_templates=[]] массив шаблонов путей API, которые будут использоваться в методах класса
    * @param {string} [baseURL=''] базовый URL, который может добавляться ко всем путям API. Например: https://mkbusiness.ru
    */
	constructor(api_path_templates = [], baseURL = '')
    {
		this.api_path_templates = api_path_templates;
		this.baseURL = baseURL;
	}

	/**
	 * Заполняет строковый шаблон template данными из объекта object
	 *
	 * @author		Nikita Markelov
	 * @version		v.1.0 (25/12/2024)
	 * @param		{object} object
	 * @param		{string} template
	 * @return		{string}
	 */
	get_api_path(object, template)
    {
        const keyRegexpPattern = /%([a-zA-Z0-9_]+)%/g;
		const result = template.replace(keyRegexpPattern, (_, key) =>
        {
			if (!object[key])
            {
				throw new Error(`Ключ "${key}" не найден в объекте`);
			}
			return encodeURIComponent(object[key]);
		});

		return this.baseURL + result;
	}

	/**
	 * Метод для получения всех путей API на основе шаблонов
	 *
	 * @param		{object} object
	 * @return		{array} массив с готовыми путями
	 */
	get_all_api_paths(object)
    {
		return this.api_path_templates.map((template) =>
        {
			return this.get_api_path(object, template);
		});
	}
}


let user = {
	id: 20,
	name: 'John Dow',
	role: 'QA',
	salary: 100
};

let api_path_templates = [
	"/api/items/%id%/%name%",
	"/api/items/%id%/%role%",
	"/api/items/%id%/%salary%"
];

const api = new Api(api_path_templates);
const api_paths = api.get_all_api_paths(user);

console.log(api_paths);

// Ожидаемый результат
let expected_result = ["/api/items/20/John%20Dow", "/api/items/20/QA", "/api/items/20/100"];
