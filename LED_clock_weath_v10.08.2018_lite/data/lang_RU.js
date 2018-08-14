var langRU = {
	header:"ЧАСЫ на ESP-12 вер: 10.08.2018 (by IvanZah)",
    save:"Сохранить",
    setWiFi:"Настройка wifi",
    setTime:"Настройка времени",
    setMqtt:"Настройка mqtt",
    setWeather:"Настройка погоды",
    setLed:"Настройка экрана",
    help:"Помощь",
    reset:"Перезагрузить устройство",
    do:"до:",
    lang:"Язык",
    forum:"Форум",
	//-- index
	P_wifi_title:"НАСТРОЙКА WIFI",
	P_wifi_informer:"Подключение к сети internet позволит синхронизировать время и получать прогноз погоды.",
	P_wifi_setWiFi:"Подключение к WiFi роутеру",
    P_wifi_ssid:"Введите имя WiFi сети",
	P_wifi_password:"Введите пароль WiFi сети",
	P_wifi_setAP:"Параметры точки доступа (IP_192.168.4.1)",
    P_wifi_ssidAP:"Введите имя точки доступа",
	P_wifi_passwordAP:"Введите пароль точки доступа",
    //-- time
    P_time_title:"Настройка времени",
	P_time_informer:"Время на ЕSP: ",
	P_time_set:'Пример NTP сервера "time.nist.gov"',
    P_time_adressNTP:"Введите адрес сервера",
	P_time_timeZone:"Укажите часовой пояс",
	P_time_daylight:"Переход на летнее время",
    P_time_save:"Автоопределение часового пояса",
    P_time_alarm:"Будильник",
    P_time_number:"Номер",
    P_time_hour:"Часы",
    P_time_minute:"Минуты",
    P_time_set2:"Установка",
    P_time_md:"Памятные даты",
    P_time_num2:"Номер",
    P_time_day:"День",
    P_time_month:"Месяц",
    P_time_mess:"Сообщение",
    P_time_md_start:"Отображать памятные даты с:",
    P_time_md_stop:"до:",
        //-- mqtt
    P_mqtt_title:"Настройка MQTT",
	P_mqtt_informer:"Выполните настройку MQTT сервера. Вы можете использовать внешний сервер, например: ",
    P_mqtt_mqttOn:"Использовать MQTT сервер",
	P_mqtt_set:"Подключение к MQTT серверу:",
    P_mqtt_server:"Адрес MQTT сервера",
	P_mqtt_port:"Порт MQTT сервера",
    P_mqtt_user:"Логин пользователя сервера",
	P_mqtt_pass:"Пароль пользователя сервера",
    P_mqtt_setESP:"Настройка ESP",
	P_mqtt_name:"Название устройства (ESP)",
    P_mqtt_sub:"Топик внешней температуры",
	P_mqtt_sub_inform:"Топик информ сообщений",
    P_mqtt_pub_temp:"Топик публикации температуры",
	P_mqtt_pub_tempUl:"Топик публикации темп. улицы",
    P_mqtt_pub_hum:"Топик публикации влажности",
	P_mqtt_pub_press:"Топик публикации давления",
    P_mqtt_pub_alt:"Топик публикации высоты",
    //-- weather
    P_weather_title:"Настройка погоды",
	P_weather_informer:"Для получения прогноза погоды,",
    P_weather_linkAPI:"здесь берём API ключ,",
    P_weather_linkID:"а здесь находим cityID своего города.",
    P_weather_server:"Сервер погоды",
	P_weather_key:"Ключ погоды API",
    P_weather_ID:"ID Города",
	P_weather_outForecast:"Отображение прогноза погоды",
    P_weather_timeScrollStart:"Отображать бегущую строку с:",
    P_weather_timeScrollSpeed:"Скорость бегущей строки",
	P_weather_update:"Обновить прогноз погоды",
    //-- led
    P_led_title:"Настройки ESP",
	P_led_informer:"Уровень яркости фоторезисторa (0-15): ",
    P_led_tbd:"Дневной режим с:",
	P_led_vbd:"Яркость днем:",
    P_led_vbn:"ночью:",
	P_led_vba:"Автоматический уровень яркости",
    P_led_clockNight:"Отображать ночью только часы",
    P_led_buzzer:"Использовать активный буззер",
    P_led_dailySignal:"Ежечасный сигнал с:",
    P_led_sensorDom:"Датчик температуры в комнате",
	P_led_sensorUl:"Датчик температуры на улице",
    P_led_sensorHumi:"Датчик влажности в комнате",
	P_led_sensorPrAl:"Датчик давления и высоты",
    P_led_rotate:"Угол поворота экрана",
    P_led_do:"до:",
    //-- help
    P_help_title:"Если что-то пошло не так...",
	P_help_informer1:"ВНИМАНИЕ!!! Некоторые изменения могут быть необратимыми!!!",
    P_help_informer2:"Если вы что-то не верно ввели и не можете этого изменить, то верните устройство к заводським настройкам. Файл конфигурации будет удалет. Устройство перезагруженно",
	P_help_conf:"Открыть файл конфигурации",
    P_help_com:"Отображать информацию в СОМ порт",
	P_help_update:"Обновление: виберите и загрузите прошивку (bin)",
    P_help_upload:"загрузить",
    P_help_wait:"Подождите...",
    restart:"Вернуться к заводським установкам"
}