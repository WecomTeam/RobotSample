const FormData = require('form-data');
const axios = require('axios');
const Config = require('../main.config');

// 简单地从 URL 中获取 get 参数的方法
function getQueryVariable(url) {
    let query = url.split('?')[1];
    let theRequest = new Object();
    strs = query.split("&");
    for (let i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
    return theRequest;
}

module.exports = function (router) {
    // 上传机器人消息用到的文件
    router.post('/robot/upload', async function (req, res, next) {
        // 从请求中读取文件对象
        let { file } = req.files || {};
        
        // 从 Webhook Url 中获取对应的 Key
        let { webhook } = req.body || {};
        let webhook_url = webhook || Config.robot;
        let key = getQueryVariable(webhook_url)['key'] ;

        // 组建一个form，用来上传文件
        const form = new FormData();
        form.append('filename', file.name);
        form.append('filelength', file.size);
        form.append('media', file.data, file.name);

        // 向企业微信的机器人消息文件上传接口上传文件
        const { data } = await axios.post('https://qyapi.weixin.qq.com/cgi-bin/webhook/upload_media',
            form,
            {
                params: {
                    key,
                    type: 'file'
                },
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });

        res.send(data);
    });
    
    // 发送机器人消息
    router.post('/robot/send', async function (req, res, next) {

        // 从前端请求中获取对应的参数
        let { form: request_data, webhook } = req.body;

        // 机器人的 Webhook Url
        let webhook_url = webhook || Config.robot;
        
        // 向对应的 Webhook Url 发送对应的数据结构
        const { data } = await axios.post(webhook_url, request_data);

        res.send(data);
    });

};