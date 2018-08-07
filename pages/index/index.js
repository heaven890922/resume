//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
        userData: {
          info: {
            name : "陈楚龙",
            intro: "男/29岁/长沙市/5年",
            mobile: "15200375753",
            email: "466079137@qq.com"
          },
          decribe: "性格开朗乐观，学习和适应能力强。在最近的俩份php工程师职位中都是提前转正，能吃苦，比较自律，坚持学习！熟悉小程序、docker、Vue等",
          worker: [
            {
              post_name: "PHP开发工程师", com_name: "深圳前海华人互联网金融服务集团有限公司", worker_time: "2018.04 — 2018.07", worker_info: "1、APi接口更新迭代和对接"
            },
            {
              post_name: "PHP开发工程师(项目组长)", com_name: "华耐家居", worker_time: "2017.03 — 2018.03", worker_info: "在华耐立家主要担任项目组长工作，主要负责商城项目，对于商城日常需求的分析和研发工作，问题和bug处理。以及项目架构整改工作。商城项目主要构成：\n1、移动和pc端商城开发\n2、后台管理系统开发\n3、基于微信公众号的活动开发\n4、对外接口和接入外部接口开发\n5、ecshop二次开发框架优化" 
            },
            {
              post_name: "PHP开发工程师", com_name: "深圳市交付易互联网科技有限公司", worker_time: "2014.11 — 2017.03", worker_info: "在该公司作为php开发人员主要的工作有：\n1、参与并负责公司的系统的数据库设计和开发\n2、负责公司后台系统系统开发\n3、负责公司微信号开发\n4、负责mysql查询优化、存储过程、计划事件、数据统计等事项\n5、参与app的接口开发和API文档编写"
            },
            {
              post_name: "前端软件工程师", com_name: "湖南竞网科技有限公司", worker_time: "2013.09 — 2014.10", worker_info: "主要是给客户搭建网站，添加网站资料，能熟练手写HTML 、CSS、javascript代码，了解各浏览器得兼容性。"
            },
            {
              post_name: "前端软件工程师", com_name: "长沙友点软件", worker_time: "2013.06 — 2014.08", worker_info: "主要负责网页的前台开发，能熟练手写HTML 、CSS代码，了解各浏览器得兼容性。"
            },
          ],
          project: [
            {
            project_name: "华耐家居微分销系统", post_name: "PHP开发工程师", worker_time: "2017.04-2018.03", worker_info: "1、项目描述：该项目主要华耐家居针对自身组织架构所设计的系统，用于各个销区去实现家居顾问及时和客户沟通以及跟进客户。后续实现了客户拼团等功能。\n2、责任描述：前期的数据库表设计，整体逻辑实现"
            },
            {
              project_name: "华耐家具商城", post_name: "研发组长", worker_time: "2017.03-2018.03", worker_info: "1、项目描述：该项目是华耐家居投资集团有限公司自营的一个家居商城，主要是基于微信端的移动商城和pc端浏览器的商城。主要承载了线上推广客户交易以及实体店引流客户线上购买、以及内部员工部分福利领取。\n2、责任描述：担任项目组长，带了五个组员，包括3个后端，2个前端。主要负责日常需求可行性分析以及逻辑实现、ECSHOP框架优化、数据库设计、组源代码review等工作。"
            },
            {
              project_name: "小车生活（商户后台）", post_name: "PHP开发工程师", worker_time: "2014.11 - 2017.03", worker_info: "1、项目描述：该项目主要实现了车主在微信公众号上商户对自己店铺的管理和业务分析，主要包括的订单查看、金额结算、公告通知、等模块。该项目使用了php+mysql+jquery mobile +ajax+html5+css技术，实现了微信支付二维码生成。\n2、责任描述：数据库设计和代码实现"
            },
            {
              project_name: "小车生活（微信开发）", post_name: "PHP开发工程师", worker_time: "2014.11 - 2017.03", worker_info: "1、项目描述：该项目主要实现了车主在微信公众号上购买小车券并进行洗车、打蜡、换油等业务。主要包括购券模块、消费模块、钱包模块三个模块。该项目使用了php+mysql+jquery mobile +ajax+html5+css技术,使用微信支付接口实现微信支付，对接银联pos机接口实现了刷卡支付。\n2、责任描述：主要负责数据库设计和代码实现"
            },
            {
              project_name: "小车生活（后台）", post_name: "PHP开发工程师", worker_time: "2014.11 - 2017.03", worker_info: "1、项目描述：该项目只要是对小车生活系统是的后台管理，主要由系统管理、业务管理、业务报表等模块主城，使用了php+mysql+jquery+ajax+bootstrap模板技术，实现了对商户业务的管理、系统权限管理、和业务报表分析功能。\n2、责任描述：完成公司任务需求，和全部代码编写"
            },
            {
              project_name: "打假信息系统（数据整理和筛选）", post_name: "PHP开发工程师", worker_time: "2016.12 - 2016.12", worker_info: "该项目主要实现了 系统管理、和信息管理两个模块，主要采用了ThinkPHP+smarty模板引擎，实现了用户的权限管理和excel 导入处理的功能。"
            },
            {
              project_name: "小车代理平台", post_name: "PHP开发工程师", worker_time: "2016.12 - 2016.12", worker_info: "1、项目描述：该项目主要实现了车主注册成为代理推荐朋友注册小车生活来获取现金奖励，并显示他推荐之后的奖励记录以及钱包提现记录。主要采用了php+mysql+javascript+jquery+ajax+html5+css实现了账户登录、奖励记录展示、钱包提现记录、账户信息模块，并通过mysql计划事件实现每月自动提现功能。\n2、责任描述：数据库设计和代码实现"
            },
            {
              project_name: "小车商城", post_name: "PHP开发工程师", worker_time: "2016.04 - 2016.05", worker_info: "1、项目描述：该项目主要实现了小车生活平台的客户以及商户购买小车所需消耗品以及商户积分购买礼品的商城。主要采用了php+mysql+javascript+jquery+ajax+html5+css实现了商品列表、购物车、订单提交、订单结算、订单管理、用户信息管理等模块\n2、责任描述：数据库设计和代码实现"
            },
          ],
          study: [
            { university: "湖南科技大学", study_time: "2009年 - 2013年", major: "信息与计算科学", degree: "本科", img: "//www.lgstatic.com/i/image/M00/AD/50/Cgp3O1i1E6eAEcIPAAAweQC5xR892.jpeg"}
          ],
          skills: [
            { skill_name: "PHP", degree: 80, degree_name: "精通" },
            { skill_name: "JavaScript", degree: 60, degree_name: "掌握" },
            { skill_name: "Vue", degree: 60, degree_name: "掌握" },
            { skill_name: "Mysql", degree: 75, degree_name: "精通" },
            { skill_name: "Docker", degree: 60, degree_name: "掌握" },
            { skill_name: "小程序", degree: 60, degree_name: "掌握" },
          ]
        }
    },
    makePhone: function(){
      wx.makePhoneCall({
        phoneNumber: this.data.userData.info.mobile,
      })
    }
})
