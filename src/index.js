import dva from 'dva';
import './index.css';
import createLoading from "dva-loading"


// 1. Initialize
//const app = dva();
const app = dva({
  initialState:{
    products:[
      {name:'dva',id:1},
      {name:'antd',id:2}
    ],
    //users:[]
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/products').default);
app.model(require('./models/users').default);
app.model(require('./models/comment').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
