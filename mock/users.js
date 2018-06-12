/**
 * Created by zhangbohan on 17/3/21.
 */
import qs from 'qs';
import Mock from 'mockjs';


export default {
  'GET /api/users'(req, res) {
    res.json(
      Mock.mock({
        "code": "000",
        "msg": "success",
        "total":10,
        "data|5-10":[
          {
            "id":"@id",
            "name": "@name",
            "username": "@first",
            "email": "@email",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": /^1[34578]\\d{9}$/,
            "website": "@url",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          }
        ]
      })
    )
  },
  'POST /api/users/create'  (req, res) {
    const {values} = req.params||{};
    res.json( Mock.mock({
      "code": "000",
      "msg": "success",
      "data": "添加成功"
    }	))
  },
  'POST /api/users/patch'  (req, res) {
    const {values} = req.params||{};
    console.log(values);
    res.json( Mock.mock({
      "code": "000",
      "msg": "success",
      "data": "修改成功"
    }	))
  },
  'POST /api/users/remove'  (req, res) {
    const {values} = req.params||{};
    //console.log(values);
    res.json( Mock.mock({
      "code": "000",
      "msg": "success",
      "data": "删除成功"
    }	))
  },
  'GET /api/comments'  (req, res) {
    res.json( Mock.mock({
      "code": "000",
      "msg": "success",
      "data|2-3":[{
        "id":"@id",
        "userName":'@first',
        "content":"@csentence",
        "createTime":new Date().getTime(),
      }]
    }	))
  },
  'POST /api/comments/create'  (req, res) {
    const {values} = req.params||{};
    console.log(values);
    res.json( Mock.mock({
      "code": "000",
      "msg": "success",
      "data": "添加成功"
    }	))
  },
  'POST /api/comments/remove'  (req, res) {
    const {values} = req.params||{};
    //console.log(values);
    res.json( Mock.mock({
      "code": "000",
      "msg": "success",
      "data": "删除成功"
    }	))
  },
};



