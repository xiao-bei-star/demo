/*
请求地址：http://wthrcdn.etouch.cn/weather_mini
请求方法： get
请求参数： city(城市名)
响应内容: 天气信息
 */
var app = new Vue({
    el: "#app",
    data: {
        city: '',
        weatherList: []
    },
    methods: {
        searchweather: function() {
            // console.log(this.city);
            // 获取信息
            // 保存this
            var that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
                .then(function(response) {
                    // console.log(response);
                    console.log(response.data.data.forecast);
                    that.weatherList = response.data.data.forecast;
                })
                .catch(function(err) {})
        },
        changecity: function(city) {
            this.city = city;
            // 获取数据直接可以调用函数搜寻
            this.searchweather();
        }
    }
})