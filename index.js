var koa = require('koa')
  , router = require('koa-router')
  , request = require('request')
  , app = koa()
  , serve = require('koa-static')
  , url = 'http://hq.sinajs.cn/list='
  , imgUrl = 'http://image.sinajs.cn/newchart/';
app.use(router(app));
// server static file
app.use(serve('www'));

// route about Model
app.get('/stock/new/:name', function *(next) {
    this.body = Stock.getNew(this.params.name);
});

// Stock logic
var Stock = {
    getNew: function(name) {
		request((url + name), function (error, response, body){
			//if (!error && response.statusCode == 200) {
    		    //Stock.data = '';
                eval(body);
		        dataOrigin = eval("hq_str_" + name + ".split(',')");
                Stock.data = {
                    'name': dataOrigin[0],
                    'opening_price': dataOrigin[1],
                    'closing_price': dataOrigin[2],
                    'now_price': dataOrigin[3],
                    'high_price': dataOrigin[4],
                    'low_price': dataOrigin[5],
                    'onebuy_price': dataOrigin[6],
                    'onesell_price': dataOrigin[7],
                    'amount': dataOrigin[8],
                    'money': dataOrigin[9],
                    'onebuy_amount': dataOrigin[10],
                    'onebuy_price': dataOrigin[11],
                    'twobuy_amount': dataOrigin[12],
                    'twobuy_price': dataOrigin[13],
                    'threebuy_amount': dataOrigin[14],
                    'threebuy_price': dataOrigin[15],
                    'fourbuy_amount': dataOrigin[16],                   
                    'fourbuy_price': dataOrigin[17],
                    'fivebuy_amount': dataOrigin[18],
                    'fivebuy_price': dataOrigin[19],
                    'onesell_amount': dataOrigin[20],
                    'onesell_price': dataOrigin[21],
                    'twosell_amount': dataOrigin[22],
                    'twosell_price': dataOrigin[23],
                    'threesell_amount': dataOrigin[24],
                    'threesell_price': dataOrigin[25],
                    'foursell_amount': dataOrigin[26],                   
                    'foursell_price': dataOrigin[27],
                    'fivesell_amount': dataOrigin[28],
                    'fivesell_price': dataOrigin[29],
                    'date': dataOrigin[30],
                    'time': dataOrigin[31]
                 };
    	    //}
   	    });
        return Stock.data;
   } 	
};
// route index
//app.get('/', fucntion *() {
//});



var port = Number(process.env.PORT || 3000);
app.listen(3000);

