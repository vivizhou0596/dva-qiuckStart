/**
 * Created by zhangbohan on 17/3/21.
 */
import qs from 'qs';
import Mock from 'mockjs';


export default {
  'GET /index/customer/biz/iou'  (req, res) {
    res.json( Mock.mock( {
      "code": "000",
      "msg": "success",
      "hotInfo": {
        "realName": "@cname",
        "bindMobile": /^1[34578]\d{9}$/,
        "regMobile": /^1[34578]\d{9}$/,
        "autoRepay|1": ['是','否'],
        "autoRepayModifiedDate":'@datetime("yyyy-MM-dd HH:mm:ss")',
        "accountStat": "正常用户",
        "iouType": "普通白条",
        "hasIOUCard|1": ['是','否'],
        "crAmount": '@float(1000, 9999,2,2)',
        "amount": '@float(1000, 9999,2,2)',
        "freeDays": "@integer(0, 100)",
        "iouCr7Amount": '@float(1000, 9999,2,2)',
        "iouCrAmount": '@float(1000, 9999,2,2)',
        "crStat": "有效",
        "crDate": function () {
          return Mock.mock('@datetime("yyyy-MM-dd HH:mm:ss")')+' - '+ Mock.mock('@datetime("yyyy-MM-dd HH:mm:ss")')
        },
        "activate|1": ["已激活","未激活"],
        "isDiffPrice|1": ['是','否'],
        "feeRate": "@float(0, 99,2,2)%",
        "overFeeRate": "@float(0, 99,2,2)%",
        "validCoupon": "@integer(0, 100)",
        "usedCoupon": "@integer(0, 100)",
        "isBillMode|1": ['是','否'],
        "billDate": "@datetime",
        "aggreementTime": "@datetime",
        "crBeginDate": "@datetime",
        "crEndDate": "@datetime",
        "billPayDate": "@datetime",
        "billPayLimit": "@float(0, 99,2,2)%",
        "activeChannel": "@cword(3,5)",
        "isCampusUser": "是",
      }
    }	))
  },
  'GET /index/customer/biz/jrcr'  (req, res) {
    const {jdpin} = req.params;
    res.json( Mock.mock({
      "code": "000",
      "msg": "success",
      "hotInfo": {
        "userName": "@cname",
        'jdpin':jdpin!='0'?jdpin:'@id',
        "idNo":/^\d{6}\*{6}\d{5}$/,
        "autoRepay|1": ['是','否'],
        "autoRepayModifiedDate": '@datetime("yyyy-MM-dd HH:mm:ss")',
        "crAmount": '@float(1000, 9999,2,2)',
        "amount": '@float(1000, 9999,2,2)',
        "overFeeRate": "@float(0, 99,2,2)%",
        "overDayFeeRate": "@float(0, 99,2,2)%",
        "activateMobile":  /^1[34578]\d{9}$/,
        "crStat|1": ["已激活","未激活"],
        "crStartDate": '@datetime("yyyy-MM-dd HH:mm:ss")',
        "crEndDate":'@datetime("yyyy-MM-dd HH:mm:ss")',
        "isDiffPrice|1": ['是','否'],
      }
    }	))
  },
  'GET /auth/erp'  (req, res) {
    res.json( Mock.mock({
      "code": "000",
      "msg": "success",
      "data": {
        "erp":"test",
        "jobNum":"15901",
        "userName":"@cname",
        "userTel":"13568688989",//电话
        "officePlace":"杭州",//办公地址
        "deptName":"语音一组",//部门名字
        "authLists":['all','nlg_tab_headline_marquee','nlg_tab_search_faq','nlg_tab_search_bizdoc','prj_tab_search_prejudge','svg_tab_flow_type','gde_setReport_all','gde_setReport_cawc','gde_settings','gde_reception','gde_mod'],
      }
    }	))
  }
};



