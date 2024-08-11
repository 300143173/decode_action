//Sun Aug 11 2024 11:50:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x12c210 = "中青极速版每日奖励",
  _0x1a0306 = _0x49d383(_0x12c210),
  _0x3400c0 = 1,
  _0x295455 = _0x1a0306.isNode() ? require("./sendNotify") : "";
let _0x52c51c = "",
  _0x2ffb43,
  _0x3ea4f7 = (_0x1a0306.isNode() ? process.env.zqkdFastCookie : _0x1a0306.getdata("zqkdFastCookie")) || "",
  _0x4cdb72 = [],
  _0x21e4a8 = 0,
  _0x2f5693 = 0;
let _0x322408 = {
    pull_live_app: "打开APP",
    share_reward: "分享1篇文章",
    time_reward: "时段奖励",
    extra_invite_rewards: "额外分享奖励",
    new_fresh_open_desktop: "启动极速版",
    read_article_twenty: "阅读5篇文章",
    share_three_article: "分享3篇内容",
    read_thirty_minute: "阅读10分钟",
    read_two_minute: "阅读2分钟",
    read_twenty_minute: "阅读20分钟",
    invite_one_friends: "进行1次分享",
    beread_extra_reward_one: "清晨分享",
    beread_extra_reward_two: "午间分享",
    beread_extra_reward_three: "晚间分享",
    box_zero: "定时宝箱",
    box_one: "宝箱1号",
    box_three: "宝箱2号",
    box_five: "宝箱3号"
  },
  _0x351845 = "jdvylqcGGHHJZrfw",
  _0x2bafa9 = 1,
  _0xb5783d = 0,
  _0x22cc17 = "zqkdFast_reward",
  _0x90ed6a = "secret",
  _0x46c6df = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x1ac520 = "https://127.0.0.1/",
  _0x4eafb5 = {};
!(async () => {
  if (typeof $request !== "undefined") {
    console.log("没有重写，请用文章脚本重写捉ck或者自己捉包填入zqkdFastCookie");
  } else {
    await _0xb09720();
    if (_0xb5783d == false) {
      return;
    }
    await _0x2fc8ba();
    _0x351845 += _0x4eafb5[_0x90ed6a];
    if (!(await _0x1c890b())) {
      return;
    }
    console.log("====================\n");
    for (_0x21e4a8 = 0; _0x21e4a8 < _0x2f5693; _0x21e4a8++) {
      await _0x3adc90(_0x21e4a8, "new_fresh_open_desktop");
      await _0x1a0306.wait(100);
    }
    console.log("\n开始签到");
    for (_0x21e4a8 = 0; _0x21e4a8 < _0x2f5693; _0x21e4a8++) {
      await _0x559850(_0x21e4a8);
      await _0x1a0306.wait(100);
    }
    console.log("\n开始领取任务奖励");
    for (let _0x4bb283 in _0x322408) {
      for (_0x21e4a8 = 0; _0x21e4a8 < _0x2f5693; _0x21e4a8++) {
        await _0x9e6ea9(_0x21e4a8, _0x4bb283);
        await _0x1a0306.wait(100);
      }
    }
    console.log("\n开始查询账户");
    for (_0x21e4a8 = 0; _0x21e4a8 < _0x2f5693; _0x21e4a8++) {
      await _0x50dff2(_0x21e4a8);
      await _0x1a0306.wait(100);
    }
    await _0x5192d2();
  }
})().catch(_0xa1038d => _0x1a0306.logErr(_0xa1038d)).finally(() => _0x1a0306.done());
async function _0x1c890b() {
  if (_0x3ea4f7) {
    _0x4cdb72 = _0x3ea4f7.split("@");
    _0x2f5693 = _0x4cdb72.length;
  } else {
    console.log("未找到zqkdFastCookie");
    return;
  }
  console.log("共找到" + _0x2f5693 + "个CK");
  return true;
}
async function _0x5192d2() {
  notifyBody = _0x12c210 + "运行通知\n\n" + _0x52c51c;
  _0x3400c0 != 1 && console.log(notifyBody);
  _0x3400c0 == 1 && (_0x1a0306.msg(notifyBody), _0x1a0306.isNode() && (await _0x295455.sendNotify(_0x1a0306.name, notifyBody)));
}
function _0x246367(_0x7016aa) {
  let _0x5a1521 = _0x7016aa.split("&"),
    _0x4c9e08 = {};
  for (let _0x243ea8 of _0x5a1521) {
    let _0x5df835 = _0x243ea8.split("=");
    _0x4c9e08[_0x5df835[0]] = _0x5df835[1];
  }
  let _0x3ab851 = "";
  for (let _0x1839e2 of Object.keys(_0x4c9e08).sort()) {
    _0x1839e2 != "token" && _0x1839e2 != "sign" && (_0x3ab851 += _0x1839e2 + "=" + _0x4c9e08[_0x1839e2]);
  }
  _0x3ab851 += _0x351845;
  return _0x5bf463(_0x3ab851);
}
async function _0xb09720() {
  let _0x2b15fa = _0x866cf();
  let _0x27b4f5 = {
    url: _0x46c6df,
    headers: ""
  };
  await _0x475209(_0x27b4f5, _0x2b15fa);
  let _0x45b764 = _0x2ffb43;
  if (!_0x45b764) {
    return;
  }
  _0x45b764?.["code"] == 0 && (_0x45b764 = JSON.parse(_0x45b764.data.file.data));
  if (_0x45b764[_0x22cc17]) {
    let _0x6da532 = _0x45b764[_0x22cc17];
    if (_0x6da532.status == 0) {
      if (_0x2bafa9 >= _0x6da532.version) {
        _0xb5783d = true;
        _0x351845 += "0o2";
        _0x1ac520 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/task.json";
        console.log(_0x6da532.msg[_0x6da532.status]);
        console.log(_0x6da532.updateMsg);
      } else {
        console.log(_0x6da532.versionMsg);
      }
    } else {
      console.log(_0x6da532.msg[_0x6da532.status]);
    }
  } else {
    console.log(_0x45b764.errorMsg);
  }
}
async function _0x2fc8ba() {
  let _0x27f6c9 = _0x866cf(),
    _0x191414 = "";
  let _0x4a1d87 = {
    url: _0x1ac520,
    headers: ""
  };
  await _0x475209(_0x4a1d87, _0x27f6c9);
  let _0x285915 = _0x2ffb43;
  if (!_0x285915) {
    return _0x191414;
  }
  _0x285915?.["code"] == 0 && (_0x285915 = JSON.parse(_0x285915.data.file.data));
  for (let _0x10ee94 in _0x285915[_0x22cc17]) {
    _0x4eafb5[_0x10ee94] = _0x285915[_0x22cc17][_0x10ee94];
  }
  return _0x191414;
}
async function _0x559850(_0x512f80) {
  let _0x10f815 = _0x866cf(),
    _0x3ed3cb = Math.floor(new Date().getTime()),
    _0x9ec052 = _0x4cdb72[_0x512f80],
    _0x4f0d48 = _0x9ec052.match(/uid=(\w+)/)[1],
    _0x51d6dd = _0x9ec052 + "&app_version=2.5.5&channel=c6001&is_wxaccount=1&active_channel=c6001&access=wifi&v=" + _0x3ed3cb,
    _0x343488 = _0x246367(_0x51d6dd),
    _0x2dee31 = _0x51d6dd + "&sign=" + _0x343488,
    _0x44afbe = _0x4eafb5.Sign + ("?" + _0x2dee31),
    _0x545afc = _0x62ba6a(_0x44afbe);
  await _0x475209(_0x545afc, _0x10f815);
  let _0x47721b = _0x2ffb43;
  if (!_0x47721b) {
    return;
  }
  _0x47721b.error_code == 0 ? console.log("用户[" + _0x4f0d48 + "]签到获得" + _0x47721b.items.score + "青豆") : console.log("用户[" + _0x4f0d48 + "]签到失败：" + _0x47721b.message);
}
async function _0x9e6ea9(_0x32e388, _0x357d6b) {
  let _0x48b8d4 = _0x866cf(),
    _0x41a7a4 = _0x322408[_0x357d6b];
  if (!_0x41a7a4) {
    _0x41a7a4 = _0x357d6b;
  }
  let _0x3c5373 = Math.floor(new Date().getTime()),
    _0xb094a = _0x4cdb72[_0x32e388],
    _0x380ecc = _0xb094a.match(/uid=(\w+)/)[1],
    _0x2a1a32 = "2";
  if (_0x357d6b.indexOf("beread_extra_reward") > -1) {
    _0x2a1a32 = "3";
  }
  let _0x38d8af = _0xb094a + "&app_version=2.5.5&channel=c6001&is_wxaccount=1&active_channel=c6001&access=wifi&v=" + _0x3c5373 + "&action=" + _0x357d6b + "&from=" + _0x2a1a32,
    _0x46ad7b = _0x246367(_0x38d8af),
    _0x38e01b = _0x38d8af + "&sign=" + _0x46ad7b,
    _0x353de9 = _0x4eafb5.ToGetReward,
    _0x1b8f3d = _0x1cd530(_0x353de9, _0x38e01b);
  await _0x5c081f(_0x1b8f3d, _0x48b8d4);
  let _0x163a94 = _0x2ffb43;
  if (!_0x163a94) {
    return;
  }
  if (_0x163a94.error_code == 0) {
    if (_0x163a94.items.score) {
      console.log("用户[" + _0x380ecc + "]完成【" + _0x41a7a4 + "】获得" + _0x163a94.items.score + "青豆");
    } else {
      _0x163a94.items.left_time && console.log("用户[" + _0x380ecc + "]任务【" + _0x41a7a4 + "】冷却时间：" + _0x163a94.items.left_time + "秒");
    }
  } else {
    console.log("用户[" + _0x380ecc + "]完成【" + _0x41a7a4 + "】失败：" + _0x163a94.message);
  }
}
async function _0x50dff2(_0x58141a) {
  let _0x3157e5 = _0x866cf(),
    _0x46c564 = _0x4cdb72[_0x21e4a8],
    _0x46f709 = _0x4eafb5.GetCoinInfo + ("?is_add_desktop=1&" + _0x46c564 + "&app_version=2.5.5&channel=c6001&device_model=OPPOR9tm&device_brand=OPPO&resolution=1080*1920&os_version=22&is_wxaccount=1&active_channel=c6001&access=wifi"),
    _0x5ba600 = _0x62ba6a(_0x46f709);
  await _0x475209(_0x5ba600, _0x3157e5);
  let _0x4b79ca = _0x2ffb43;
  if (!_0x4b79ca) {
    return;
  }
  if (_0x4b79ca.error_code == 0) {
    let _0x2dc7c1 = _0x4b79ca.items.nickname,
      _0x101e7c = _0x4b79ca.items.score,
      _0x32e407 = _0x4b79ca.items.money,
      _0x1f48b9 = _0x4b79ca.items.today_score,
      _0x3be538 = _0x4b79ca.items.uid,
      _0x16cc6f = _0x4b79ca.items.user_status == 1 ? "正常" : "黑号";
    _0x52c51c += "======== 用户" + (_0x58141a + 1) + " ========\n";
    _0x52c51c += "【昵称】：" + _0x2dc7c1 + "\n";
    _0x52c51c += "【ID】  ：" + _0x3be538 + "\n";
    _0x52c51c += "【状态】  ：" + _0x16cc6f + "\n";
    _0x52c51c += "【青豆】：" + _0x101e7c + " ≈ " + _0x32e407 + "元\n";
    _0x52c51c += "【今日收益】：" + _0x1f48b9 + "\n";
  } else {
    console.log("用户" + (_0x58141a + 1) + " " + _0x4b79ca.message);
  }
}
async function _0x3adc90(_0x25fa17, _0x59a209) {
  let _0x511025 = _0x866cf(),
    _0x5a5001 = _0x4cdb72[_0x25fa17],
    _0x42ce0f = _0x5a5001.match(/uid=(\w+)/)[1],
    _0x3c6dbf = _0x5a5001 + "&active_channel=c6001&action=" + _0x59a209 + "&is_wxaccount=1&app_version=2.5.5&access=wifi&channel=c6001",
    _0xdcc392 = _0x246367(_0x3c6dbf),
    _0x2145d0 = _0x3c6dbf + "&sign=" + _0xdcc392,
    _0x418b33 = _0x4eafb5.UploadTask,
    _0x511712 = _0x1cd530(_0x418b33, _0x2145d0);
  await _0x5c081f(_0x511712, _0x511025);
  let _0x5e2df1 = _0x2ffb43;
  if (!_0x5e2df1) {
    return;
  }
  _0x5e2df1.error_code == 0 ? console.log("用户[" + _0x42ce0f + "]打开极速版成功") : console.log("用户[" + _0x42ce0f + "]打开极速版失败：" + _0x5e2df1.message);
}
function _0x1cd530(_0xc2e50d, _0x5d5bc8) {
  const _0x31e9b6 = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 hap/1.0.8.1/oppo com.nearme.instant.platform/4.2.1 com.youth.kandianquickapp/2.5.5 ({\"packageName\":\"com.oppo.launcher\",\"type\":\"shortcut\",\"extra\":{\"original\":{\"packageName\":\"com.oppo.market\",\"type\":\"sdk\",\"extra\":{}},\"scene\":\"api\"}})",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    Host: "user.youth.cn",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  let _0xf5528d = {
    url: _0xc2e50d,
    headers: _0x31e9b6,
    body: _0x5d5bc8
  };
  return _0xf5528d;
}
function _0x62ba6a(_0x3a983d) {
  const _0xdaf642 = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 hap/1.0.8.1/oppo com.nearme.instant.platform/4.2.1 com.youth.kandianquickapp/2.5.5 ({\"packageName\":\"com.oppo.launcher\",\"type\":\"shortcut\",\"extra\":{\"original\":{\"packageName\":\"com.oppo.market\",\"type\":\"sdk\",\"extra\":{}},\"scene\":\"api\"}})",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    Host: "user.youth.cn",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  let _0x19734f = {
    url: _0x3a983d,
    headers: _0xdaf642
  };
  return _0x19734f;
}
async function _0x5c081f(_0x317b38, _0x4b41e8) {
  _0x2ffb43 = null;
  return new Promise(_0x48dd54 => {
    _0x1a0306.post(_0x317b38, async (_0x19008b, _0x18c01c, _0x187495) => {
      try {
        if (_0x19008b) {
          console.log(_0x4b41e8 + ": post请求失败");
          console.log(JSON.stringify(_0x19008b));
          _0x1a0306.logErr(_0x19008b);
        } else {
          if (_0x23f6a3(_0x187495)) {
            _0x2ffb43 = JSON.parse(_0x187495);
          }
        }
      } catch (_0x14a46f) {
        _0x1a0306.logErr(_0x14a46f, _0x18c01c);
      } finally {
        _0x48dd54();
      }
    });
  });
}
async function _0x475209(_0x3e948f, _0x1f54e5) {
  _0x2ffb43 = null;
  return new Promise(_0x232be5 => {
    _0x1a0306.get(_0x3e948f, async (_0x2a18dc, _0x3b925f, _0x1db0b5) => {
      try {
        if (_0x2a18dc) {
          console.log(_0x1f54e5 + ": get请求失败");
          console.log(JSON.stringify(_0x2a18dc));
          _0x1a0306.logErr(_0x2a18dc);
        } else {
          if (_0x23f6a3(_0x1db0b5, _0x1f54e5)) {
            _0x2ffb43 = JSON.parse(_0x1db0b5);
          }
        }
      } catch (_0x1f5c6c) {
        _0x1a0306.logErr(_0x1f5c6c, _0x3b925f);
      } finally {
        _0x232be5();
      }
    });
  });
}
function _0x23f6a3(_0x396bc0, _0x2f3ce4) {
  try {
    if (typeof JSON.parse(_0x396bc0) == "object") {
      return true;
    } else {
      console.log("Function " + _0x2f3ce4 + ": 未知错误");
      console.log(_0x396bc0);
    }
  } catch (_0x5c2135) {
    console.log(_0x5c2135);
    console.log("Function " + _0x2f3ce4 + ": 服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x866cf() {
  return new Error().stack.split("\n")[2].trim().split(" ")[1];
}
function _0x8196a0(_0x1e9e4a, _0x5db657) {
  return _0x1e9e4a < _0x5db657 ? _0x1e9e4a : _0x5db657;
}
function _0x22b2ed(_0x1c7c3f, _0x457096) {
  return _0x1c7c3f < _0x457096 ? _0x457096 : _0x1c7c3f;
}
function _0x2914f8(_0x2ad6af = 12) {
  let _0x4ef018 = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
    _0xc5939 = _0x4ef018.length,
    _0x3523ea = "";
  for (i = 0; i < _0x2ad6af; i++) {
    _0x3523ea += _0x4ef018.charAt(Math.floor(Math.random() * _0xc5939));
  }
  return _0x3523ea;
}
function _0x5bf463(_0x2dfbfb) {
  function _0x54e06a(_0xb99333, _0x2079e3) {
    return _0xb99333 << _0x2079e3 | _0xb99333 >>> 32 - _0x2079e3;
  }
  function _0x4e86cc(_0x3c66fe, _0x1b435c) {
    var _0x5aa29d, _0x4eefe3, _0x3684ec, _0x3b6bce, _0x1fa492;
    _0x3684ec = 2147483648 & _0x3c66fe;
    _0x3b6bce = 2147483648 & _0x1b435c;
    _0x5aa29d = 1073741824 & _0x3c66fe;
    _0x4eefe3 = 1073741824 & _0x1b435c;
    _0x1fa492 = (1073741823 & _0x3c66fe) + (1073741823 & _0x1b435c);
    return _0x5aa29d & _0x4eefe3 ? 2147483648 ^ _0x1fa492 ^ _0x3684ec ^ _0x3b6bce : _0x5aa29d | _0x4eefe3 ? 1073741824 & _0x1fa492 ? 3221225472 ^ _0x1fa492 ^ _0x3684ec ^ _0x3b6bce : 1073741824 ^ _0x1fa492 ^ _0x3684ec ^ _0x3b6bce : _0x1fa492 ^ _0x3684ec ^ _0x3b6bce;
  }
  function _0xf33589(_0x1affa7, _0x10818f, _0x246dad) {
    return _0x1affa7 & _0x10818f | ~_0x1affa7 & _0x246dad;
  }
  function _0x5ee83c(_0x351e02, _0x5417a3, _0x22b1e3) {
    return _0x351e02 & _0x22b1e3 | _0x5417a3 & ~_0x22b1e3;
  }
  function _0x4b87da(_0x333d3f, _0x4db0e9, _0x4e6727) {
    return _0x333d3f ^ _0x4db0e9 ^ _0x4e6727;
  }
  function _0xdfec84(_0x5cd7dc, _0x57303e, _0x57df6c) {
    return _0x57303e ^ (_0x5cd7dc | ~_0x57df6c);
  }
  function _0x1e4377(_0x537e56, _0x8e58b6, _0x47a6be, _0x587051, _0xc8bfbd, _0xb9fcf5, _0x5a3813) {
    _0x537e56 = _0x4e86cc(_0x537e56, _0x4e86cc(_0x4e86cc(_0xf33589(_0x8e58b6, _0x47a6be, _0x587051), _0xc8bfbd), _0x5a3813));
    return _0x4e86cc(_0x54e06a(_0x537e56, _0xb9fcf5), _0x8e58b6);
  }
  function _0x1fbe56(_0x81a445, _0x28d27a, _0x534f38, _0x5c4685, _0x432eca, _0x3b1400, _0x1c68d3) {
    _0x81a445 = _0x4e86cc(_0x81a445, _0x4e86cc(_0x4e86cc(_0x5ee83c(_0x28d27a, _0x534f38, _0x5c4685), _0x432eca), _0x1c68d3));
    return _0x4e86cc(_0x54e06a(_0x81a445, _0x3b1400), _0x28d27a);
  }
  function _0x584b35(_0x1de50f, _0x4767bf, _0x5bd1a3, _0x1fc306, _0x172b2e, _0x113967, _0x1d05ed) {
    _0x1de50f = _0x4e86cc(_0x1de50f, _0x4e86cc(_0x4e86cc(_0x4b87da(_0x4767bf, _0x5bd1a3, _0x1fc306), _0x172b2e), _0x1d05ed));
    return _0x4e86cc(_0x54e06a(_0x1de50f, _0x113967), _0x4767bf);
  }
  function _0x261c54(_0x592ff8, _0x318c3e, _0x425108, _0x243e23, _0x6ae91a, _0x1075c7, _0xd18385) {
    _0x592ff8 = _0x4e86cc(_0x592ff8, _0x4e86cc(_0x4e86cc(_0xdfec84(_0x318c3e, _0x425108, _0x243e23), _0x6ae91a), _0xd18385));
    return _0x4e86cc(_0x54e06a(_0x592ff8, _0x1075c7), _0x318c3e);
  }
  function _0x225160(_0x1cc4b4) {
    for (var _0x46ee0b, _0x6bd017 = _0x1cc4b4.length, _0x37a1dc = _0x6bd017 + 8, _0x1b3f49 = (_0x37a1dc - _0x37a1dc % 64) / 64, _0x2d11c6 = 16 * (_0x1b3f49 + 1), _0x1878f3 = new Array(_0x2d11c6 - 1), _0x491b86 = 0, _0x9e9876 = 0; _0x6bd017 > _0x9e9876;) {
      _0x46ee0b = (_0x9e9876 - _0x9e9876 % 4) / 4;
      _0x491b86 = _0x9e9876 % 4 * 8;
      _0x1878f3[_0x46ee0b] = _0x1878f3[_0x46ee0b] | _0x1cc4b4.charCodeAt(_0x9e9876) << _0x491b86;
      _0x9e9876++;
    }
    _0x46ee0b = (_0x9e9876 - _0x9e9876 % 4) / 4;
    _0x491b86 = _0x9e9876 % 4 * 8;
    _0x1878f3[_0x46ee0b] = _0x1878f3[_0x46ee0b] | 128 << _0x491b86;
    _0x1878f3[_0x2d11c6 - 2] = _0x6bd017 << 3;
    _0x1878f3[_0x2d11c6 - 1] = _0x6bd017 >>> 29;
    return _0x1878f3;
  }
  function _0x57e57f(_0x40c2cb) {
    var _0x1c73e2,
      _0x5dacea,
      _0x5d0329 = "",
      _0x27e93f = "";
    for (_0x5dacea = 0; 3 >= _0x5dacea; _0x5dacea++) {
      _0x1c73e2 = _0x40c2cb >>> 8 * _0x5dacea & 255;
      _0x27e93f = "0" + _0x1c73e2.toString(16);
      _0x5d0329 += _0x27e93f.substr(_0x27e93f.length - 2, 2);
    }
    return _0x5d0329;
  }
  function _0xf958a(_0x19781d) {
    _0x19781d = _0x19781d.replace(/\r\n/g, "\n");
    for (var _0x1a399b = "", _0x4f79d4 = 0; _0x4f79d4 < _0x19781d.length; _0x4f79d4++) {
      var _0xe677c = _0x19781d.charCodeAt(_0x4f79d4);
      128 > _0xe677c ? _0x1a399b += String.fromCharCode(_0xe677c) : _0xe677c > 127 && 2048 > _0xe677c ? (_0x1a399b += String.fromCharCode(_0xe677c >> 6 | 192), _0x1a399b += String.fromCharCode(63 & _0xe677c | 128)) : (_0x1a399b += String.fromCharCode(_0xe677c >> 12 | 224), _0x1a399b += String.fromCharCode(_0xe677c >> 6 & 63 | 128), _0x1a399b += String.fromCharCode(63 & _0xe677c | 128));
    }
    return _0x1a399b;
  }
  var _0x5f5235,
    _0x56abcc,
    _0x3fc56d,
    _0x2554fc,
    _0x1bd9a4,
    _0x37a85a,
    _0x1dbc17,
    _0x144a26,
    _0x1d4cda,
    _0x24e6e2 = [],
    _0x1ac951 = 7,
    _0x2015e9 = 12,
    _0x275fda = 17,
    _0x9d4a57 = 22,
    _0x29640c = 5,
    _0x12c9cf = 9,
    _0x59bbec = 14,
    _0x5bd313 = 20,
    _0x2bad19 = 4,
    _0x51a71e = 11,
    _0x2f90be = 16,
    _0x4022a9 = 23,
    _0x2b5757 = 6,
    _0x569044 = 10,
    _0x431039 = 15,
    _0x3b73f1 = 21;
  for (_0x2dfbfb = _0xf958a(_0x2dfbfb), _0x24e6e2 = _0x225160(_0x2dfbfb), _0x37a85a = 1732584193, _0x1dbc17 = 4023233417, _0x144a26 = 2562383102, _0x1d4cda = 271733878, _0x5f5235 = 0; _0x5f5235 < _0x24e6e2.length; _0x5f5235 += 16) {
    _0x56abcc = _0x37a85a;
    _0x3fc56d = _0x1dbc17;
    _0x2554fc = _0x144a26;
    _0x1bd9a4 = _0x1d4cda;
    _0x37a85a = _0x1e4377(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 0], _0x1ac951, 3614090360);
    _0x1d4cda = _0x1e4377(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 1], _0x2015e9, 3905402710);
    _0x144a26 = _0x1e4377(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 2], _0x275fda, 606105819);
    _0x1dbc17 = _0x1e4377(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 3], _0x9d4a57, 3250441966);
    _0x37a85a = _0x1e4377(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 4], _0x1ac951, 4118548399);
    _0x1d4cda = _0x1e4377(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 5], _0x2015e9, 1200080426);
    _0x144a26 = _0x1e4377(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 6], _0x275fda, 2821735955);
    _0x1dbc17 = _0x1e4377(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 7], _0x9d4a57, 4249261313);
    _0x37a85a = _0x1e4377(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 8], _0x1ac951, 1770035416);
    _0x1d4cda = _0x1e4377(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 9], _0x2015e9, 2336552879);
    _0x144a26 = _0x1e4377(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 10], _0x275fda, 4294925233);
    _0x1dbc17 = _0x1e4377(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 11], _0x9d4a57, 2304563134);
    _0x37a85a = _0x1e4377(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 12], _0x1ac951, 1804603682);
    _0x1d4cda = _0x1e4377(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 13], _0x2015e9, 4254626195);
    _0x144a26 = _0x1e4377(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 14], _0x275fda, 2792965006);
    _0x1dbc17 = _0x1e4377(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 15], _0x9d4a57, 1236535329);
    _0x37a85a = _0x1fbe56(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 1], _0x29640c, 4129170786);
    _0x1d4cda = _0x1fbe56(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 6], _0x12c9cf, 3225465664);
    _0x144a26 = _0x1fbe56(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 11], _0x59bbec, 643717713);
    _0x1dbc17 = _0x1fbe56(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 0], _0x5bd313, 3921069994);
    _0x37a85a = _0x1fbe56(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 5], _0x29640c, 3593408605);
    _0x1d4cda = _0x1fbe56(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 10], _0x12c9cf, 38016083);
    _0x144a26 = _0x1fbe56(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 15], _0x59bbec, 3634488961);
    _0x1dbc17 = _0x1fbe56(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 4], _0x5bd313, 3889429448);
    _0x37a85a = _0x1fbe56(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 9], _0x29640c, 568446438);
    _0x1d4cda = _0x1fbe56(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 14], _0x12c9cf, 3275163606);
    _0x144a26 = _0x1fbe56(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 3], _0x59bbec, 4107603335);
    _0x1dbc17 = _0x1fbe56(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 8], _0x5bd313, 1163531501);
    _0x37a85a = _0x1fbe56(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 13], _0x29640c, 2850285829);
    _0x1d4cda = _0x1fbe56(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 2], _0x12c9cf, 4243563512);
    _0x144a26 = _0x1fbe56(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 7], _0x59bbec, 1735328473);
    _0x1dbc17 = _0x1fbe56(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 12], _0x5bd313, 2368359562);
    _0x37a85a = _0x584b35(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 5], _0x2bad19, 4294588738);
    _0x1d4cda = _0x584b35(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 8], _0x51a71e, 2272392833);
    _0x144a26 = _0x584b35(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 11], _0x2f90be, 1839030562);
    _0x1dbc17 = _0x584b35(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 14], _0x4022a9, 4259657740);
    _0x37a85a = _0x584b35(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 1], _0x2bad19, 2763975236);
    _0x1d4cda = _0x584b35(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 4], _0x51a71e, 1272893353);
    _0x144a26 = _0x584b35(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 7], _0x2f90be, 4139469664);
    _0x1dbc17 = _0x584b35(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 10], _0x4022a9, 3200236656);
    _0x37a85a = _0x584b35(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 13], _0x2bad19, 681279174);
    _0x1d4cda = _0x584b35(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 0], _0x51a71e, 3936430074);
    _0x144a26 = _0x584b35(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 3], _0x2f90be, 3572445317);
    _0x1dbc17 = _0x584b35(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 6], _0x4022a9, 76029189);
    _0x37a85a = _0x584b35(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 9], _0x2bad19, 3654602809);
    _0x1d4cda = _0x584b35(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 12], _0x51a71e, 3873151461);
    _0x144a26 = _0x584b35(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 15], _0x2f90be, 530742520);
    _0x1dbc17 = _0x584b35(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 2], _0x4022a9, 3299628645);
    _0x37a85a = _0x261c54(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 0], _0x2b5757, 4096336452);
    _0x1d4cda = _0x261c54(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 7], _0x569044, 1126891415);
    _0x144a26 = _0x261c54(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 14], _0x431039, 2878612391);
    _0x1dbc17 = _0x261c54(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 5], _0x3b73f1, 4237533241);
    _0x37a85a = _0x261c54(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 12], _0x2b5757, 1700485571);
    _0x1d4cda = _0x261c54(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 3], _0x569044, 2399980690);
    _0x144a26 = _0x261c54(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 10], _0x431039, 4293915773);
    _0x1dbc17 = _0x261c54(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 1], _0x3b73f1, 2240044497);
    _0x37a85a = _0x261c54(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 8], _0x2b5757, 1873313359);
    _0x1d4cda = _0x261c54(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 15], _0x569044, 4264355552);
    _0x144a26 = _0x261c54(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 6], _0x431039, 2734768916);
    _0x1dbc17 = _0x261c54(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 13], _0x3b73f1, 1309151649);
    _0x37a85a = _0x261c54(_0x37a85a, _0x1dbc17, _0x144a26, _0x1d4cda, _0x24e6e2[_0x5f5235 + 4], _0x2b5757, 4149444226);
    _0x1d4cda = _0x261c54(_0x1d4cda, _0x37a85a, _0x1dbc17, _0x144a26, _0x24e6e2[_0x5f5235 + 11], _0x569044, 3174756917);
    _0x144a26 = _0x261c54(_0x144a26, _0x1d4cda, _0x37a85a, _0x1dbc17, _0x24e6e2[_0x5f5235 + 2], _0x431039, 718787259);
    _0x1dbc17 = _0x261c54(_0x1dbc17, _0x144a26, _0x1d4cda, _0x37a85a, _0x24e6e2[_0x5f5235 + 9], _0x3b73f1, 3951481745);
    _0x37a85a = _0x4e86cc(_0x37a85a, _0x56abcc);
    _0x1dbc17 = _0x4e86cc(_0x1dbc17, _0x3fc56d);
    _0x144a26 = _0x4e86cc(_0x144a26, _0x2554fc);
    _0x1d4cda = _0x4e86cc(_0x1d4cda, _0x1bd9a4);
  }
  var _0x42e215 = _0x57e57f(_0x37a85a) + _0x57e57f(_0x1dbc17) + _0x57e57f(_0x144a26) + _0x57e57f(_0x1d4cda);
  return _0x42e215.toLowerCase();
}
function _0x49d383(_0x30bc9f, _0x84eb17) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x56cb13 {
    constructor(_0x16411c) {
      this.env = _0x16411c;
    }
    send(_0x4581c9, _0x305832 = "GET") {
      _0x4581c9 = "string" == typeof _0x4581c9 ? {
        url: _0x4581c9
      } : _0x4581c9;
      let _0x4f8636 = this.get;
      "POST" === _0x305832 && (_0x4f8636 = this.post);
      return new Promise((_0x26aa21, _0x1d13fe) => {
        _0x4f8636.call(this, _0x4581c9, (_0x35c440, _0x457ad6, _0x20aba9) => {
          _0x35c440 ? _0x1d13fe(_0x35c440) : _0x26aa21(_0x457ad6);
        });
      });
    }
    get(_0x42dcc4) {
      return this.send.call(this.env, _0x42dcc4);
    }
    post(_0x270cf7) {
      return this.send.call(this.env, _0x270cf7, "POST");
    }
  }
  return new class {
    constructor(_0x1ccf43, _0x3aa41f) {
      this.name = _0x1ccf43;
      this.http = new _0x56cb13(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3aa41f);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x237a40, _0x524500 = null) {
      try {
        return JSON.parse(_0x237a40);
      } catch {
        return _0x524500;
      }
    }
    toStr(_0x51f2b0, _0x587b6b = null) {
      try {
        return JSON.stringify(_0x51f2b0);
      } catch {
        return _0x587b6b;
      }
    }
    getjson(_0x1a7bb1, _0x411441) {
      let _0x22a163 = _0x411441;
      const _0x1ead09 = this.getdata(_0x1a7bb1);
      if (_0x1ead09) {
        try {
          _0x22a163 = JSON.parse(this.getdata(_0x1a7bb1));
        } catch {}
      }
      return _0x22a163;
    }
    setjson(_0x21d722, _0x3031e2) {
      try {
        return this.setdata(JSON.stringify(_0x21d722), _0x3031e2);
      } catch {
        return !1;
      }
    }
    getScript(_0x4eaf8b) {
      return new Promise(_0x581d5b => {
        const _0x2349f5 = {
          url: _0x4eaf8b
        };
        this.get(_0x2349f5, (_0x5707e9, _0xca1416, _0x515e13) => _0x581d5b(_0x515e13));
      });
    }
    runScript(_0x1453f6, _0x19ed54) {
      return new Promise(_0x4d7d8f => {
        let _0x2fa894 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x2fa894 = _0x2fa894 ? _0x2fa894.replace(/\n/g, "").trim() : _0x2fa894;
        let _0x2d06a6 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x2d06a6 = _0x2d06a6 ? 1 * _0x2d06a6 : 20;
        _0x2d06a6 = _0x19ed54 && _0x19ed54.timeout ? _0x19ed54.timeout : _0x2d06a6;
        const _0x1c8ae9 = {
          script_text: _0x1453f6,
          mock_type: "cron",
          timeout: _0x2d06a6
        };
        const [_0x491b07, _0x472222] = _0x2fa894.split("@"),
          _0x32a359 = {
            url: "http://" + _0x472222 + "/v1/scripting/evaluate",
            body: _0x1c8ae9,
            headers: {
              "X-Key": _0x491b07,
              Accept: "*/*"
            }
          };
        this.post(_0x32a359, (_0x161593, _0x59b050, _0xb4bca1) => _0x4d7d8f(_0xb4bca1));
      }).catch(_0x18f4df => this.logErr(_0x18f4df));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3c6b60 = this.path.resolve(this.dataFile),
          _0x1a4187 = this.path.resolve(process.cwd(), this.dataFile),
          _0x166cdd = this.fs.existsSync(_0x3c6b60),
          _0x42f5bb = !_0x166cdd && this.fs.existsSync(_0x1a4187);
        if (!_0x166cdd && !_0x42f5bb) {
          return {};
        }
        {
          const _0x1c8a49 = _0x166cdd ? _0x3c6b60 : _0x1a4187;
          try {
            return JSON.parse(this.fs.readFileSync(_0x1c8a49));
          } catch (_0x3ec237) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x63c621 = this.path.resolve(this.dataFile),
          _0x11d09c = this.path.resolve(process.cwd(), this.dataFile),
          _0x362e69 = this.fs.existsSync(_0x63c621),
          _0x5296d9 = !_0x362e69 && this.fs.existsSync(_0x11d09c),
          _0x4027f0 = JSON.stringify(this.data);
        _0x362e69 ? this.fs.writeFileSync(_0x63c621, _0x4027f0) : _0x5296d9 ? this.fs.writeFileSync(_0x11d09c, _0x4027f0) : this.fs.writeFileSync(_0x63c621, _0x4027f0);
      }
    }
    lodash_get(_0x2087bc, _0x3cc2aa, _0x4ecdda) {
      const _0x334a34 = _0x3cc2aa.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x52d032 = _0x2087bc;
      for (const _0x3bb4c6 of _0x334a34) if (_0x52d032 = Object(_0x52d032)[_0x3bb4c6], void 0 === _0x52d032) {
        return _0x4ecdda;
      }
      return _0x52d032;
    }
    lodash_set(_0x3f32ff, _0x3a5c94, _0x50d359) {
      return Object(_0x3f32ff) !== _0x3f32ff ? _0x3f32ff : (Array.isArray(_0x3a5c94) || (_0x3a5c94 = _0x3a5c94.toString().match(/[^.[\]]+/g) || []), _0x3a5c94.slice(0, -1).reduce((_0x152d74, _0x1a8496, _0x4b9bdd) => Object(_0x152d74[_0x1a8496]) === _0x152d74[_0x1a8496] ? _0x152d74[_0x1a8496] : _0x152d74[_0x1a8496] = Math.abs(_0x3a5c94[_0x4b9bdd + 1]) >> 0 == +_0x3a5c94[_0x4b9bdd + 1] ? [] : {}, _0x3f32ff)[_0x3a5c94[_0x3a5c94.length - 1]] = _0x50d359, _0x3f32ff);
    }
    getdata(_0x33af55) {
      let _0x48cac8 = this.getval(_0x33af55);
      if (/^@/.test(_0x33af55)) {
        const [, _0x136423, _0x391273] = /^@(.*?)\.(.*?)$/.exec(_0x33af55),
          _0x14ec1a = _0x136423 ? this.getval(_0x136423) : "";
        if (_0x14ec1a) {
          try {
            const _0x3da2dd = JSON.parse(_0x14ec1a);
            _0x48cac8 = _0x3da2dd ? this.lodash_get(_0x3da2dd, _0x391273, "") : _0x48cac8;
          } catch (_0x18f4d3) {
            _0x48cac8 = "";
          }
        }
      }
      return _0x48cac8;
    }
    setdata(_0x517ae8, _0x15c545) {
      let _0xec4799 = !1;
      if (/^@/.test(_0x15c545)) {
        const [, _0x2cb168, _0x1103a2] = /^@(.*?)\.(.*?)$/.exec(_0x15c545),
          _0x59730a = this.getval(_0x2cb168),
          _0x1a8cc0 = _0x2cb168 ? "null" === _0x59730a ? null : _0x59730a || "{}" : "{}";
        try {
          const _0x2945ee = JSON.parse(_0x1a8cc0);
          this.lodash_set(_0x2945ee, _0x1103a2, _0x517ae8);
          _0xec4799 = this.setval(JSON.stringify(_0x2945ee), _0x2cb168);
        } catch (_0x25e1ee) {
          const _0x4b5c91 = {};
          this.lodash_set(_0x4b5c91, _0x1103a2, _0x517ae8);
          _0xec4799 = this.setval(JSON.stringify(_0x4b5c91), _0x2cb168);
        }
      } else {
        _0xec4799 = this.setval(_0x517ae8, _0x15c545);
      }
      return _0xec4799;
    }
    getval(_0x41c5ba) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x41c5ba) : this.isQuanX() ? $prefs.valueForKey(_0x41c5ba) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x41c5ba]) : this.data && this.data[_0x41c5ba] || null;
    }
    setval(_0xd50331, _0x296805) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0xd50331, _0x296805) : this.isQuanX() ? $prefs.setValueForKey(_0xd50331, _0x296805) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x296805] = _0xd50331, this.writedata(), !0) : this.data && this.data[_0x296805] || null;
    }
    initGotEnv(_0x16fca3) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x16fca3 && (_0x16fca3.headers = _0x16fca3.headers ? _0x16fca3.headers : {}, void 0 === _0x16fca3.headers.Cookie && void 0 === _0x16fca3.cookieJar && (_0x16fca3.cookieJar = this.ckjar));
    }
    get(_0x1de612, _0x22e87a = () => {}) {
      const _0x57ded4 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0xd0be4e = {
        hints: !1
      };
      _0x1de612.headers && (delete _0x1de612.headers["Content-Type"], delete _0x1de612.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x1de612.headers = _0x1de612.headers || {}, Object.assign(_0x1de612.headers, _0x57ded4)), $httpClient.get(_0x1de612, (_0xae3e01, _0x20a370, _0xdde243) => {
        !_0xae3e01 && _0x20a370 && (_0x20a370.body = _0xdde243, _0x20a370.statusCode = _0x20a370.status);
        _0x22e87a(_0xae3e01, _0x20a370, _0xdde243);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x1de612.opts = _0x1de612.opts || {}, Object.assign(_0x1de612.opts, _0xd0be4e)), $task.fetch(_0x1de612).then(_0x1d739d => {
        const {
            statusCode: _0x3bdd9b,
            statusCode: _0x3fb551,
            headers: _0x146255,
            body: _0x43e8e0
          } = _0x1d739d,
          _0x117270 = {
            status: _0x3bdd9b,
            statusCode: _0x3fb551,
            headers: _0x146255,
            body: _0x43e8e0
          };
        _0x22e87a(null, _0x117270, _0x43e8e0);
      }, _0x331d50 => _0x22e87a(_0x331d50))) : this.isNode() && (this.initGotEnv(_0x1de612), this.got(_0x1de612).on("redirect", (_0x518158, _0x24d0a6) => {
        try {
          if (_0x518158.headers["set-cookie"]) {
            const _0x3a1060 = _0x518158.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(_0x3a1060, null);
            _0x24d0a6.cookieJar = this.ckjar;
          }
        } catch (_0x5bbac0) {
          this.logErr(_0x5bbac0);
        }
      }).then(_0x349c66 => {
        const {
            statusCode: _0xcbcab9,
            statusCode: _0x161d4d,
            headers: _0x5c14fc,
            body: _0x3a37e2
          } = _0x349c66,
          _0xaf7795 = {
            status: _0xcbcab9,
            statusCode: _0x161d4d,
            headers: _0x5c14fc,
            body: _0x3a37e2
          };
        _0x22e87a(null, _0xaf7795, _0x3a37e2);
      }, _0x5f20b2 => {
        const {
          message: _0x520778,
          response: _0x1f9950
        } = _0x5f20b2;
        _0x22e87a(_0x520778, _0x1f9950, _0x1f9950 && _0x1f9950.body);
      }));
    }
    post(_0x2aaee3, _0x349a6e = () => {}) {
      const _0x27e8f1 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x5c3af8 = {
        hints: !1
      };
      if (_0x2aaee3.body && _0x2aaee3.headers && !_0x2aaee3.headers["Content-Type"] && (_0x2aaee3.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x2aaee3.headers && delete _0x2aaee3.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x2aaee3.headers = _0x2aaee3.headers || {}, Object.assign(_0x2aaee3.headers, _0x27e8f1));
        $httpClient.post(_0x2aaee3, (_0x3dc513, _0x2271e1, _0x509613) => {
          !_0x3dc513 && _0x2271e1 && (_0x2271e1.body = _0x509613, _0x2271e1.statusCode = _0x2271e1.status);
          _0x349a6e(_0x3dc513, _0x2271e1, _0x509613);
        });
      } else {
        if (this.isQuanX()) {
          _0x2aaee3.method = "POST";
          this.isNeedRewrite && (_0x2aaee3.opts = _0x2aaee3.opts || {}, Object.assign(_0x2aaee3.opts, _0x5c3af8));
          $task.fetch(_0x2aaee3).then(_0x394099 => {
            const {
                statusCode: _0x102bc5,
                statusCode: _0x1a9af8,
                headers: _0x233f38,
                body: _0x43833d
              } = _0x394099,
              _0x971bc0 = {
                status: _0x102bc5,
                statusCode: _0x1a9af8,
                headers: _0x233f38,
                body: _0x43833d
              };
            _0x349a6e(null, _0x971bc0, _0x43833d);
          }, _0xc772c1 => _0x349a6e(_0xc772c1));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x2aaee3);
            const {
              url: _0x3d9f80,
              ..._0x1c1075
            } = _0x2aaee3;
            this.got.post(_0x3d9f80, _0x1c1075).then(_0x536b52 => {
              const {
                  statusCode: _0x2f135a,
                  statusCode: _0x1fdbe6,
                  headers: _0x531ff3,
                  body: _0x4c9ac2
                } = _0x536b52,
                _0x42374c = {
                  status: _0x2f135a,
                  statusCode: _0x1fdbe6,
                  headers: _0x531ff3,
                  body: _0x4c9ac2
                };
              _0x349a6e(null, _0x42374c, _0x4c9ac2);
            }, _0x2c8e30 => {
              const {
                message: _0x58f6cf,
                response: _0xbd372c
              } = _0x2c8e30;
              _0x349a6e(_0x58f6cf, _0xbd372c, _0xbd372c && _0xbd372c.body);
            });
          }
        }
      }
    }
    time(_0x179a85) {
      let _0x5e7b93 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x179a85) && (_0x179a85 = _0x179a85.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x58caa5 in _0x5e7b93) new RegExp("(" + _0x58caa5 + ")").test(_0x179a85) && (_0x179a85 = _0x179a85.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5e7b93[_0x58caa5] : ("00" + _0x5e7b93[_0x58caa5]).substr(("" + _0x5e7b93[_0x58caa5]).length)));
      return _0x179a85;
    }
    msg(_0x1654cc = _0x30bc9f, _0x4d0e24 = "", _0x1d5c63 = "", _0x13f6ce) {
      const _0x29333d = _0x43d105 => {
        if (!_0x43d105) {
          return _0x43d105;
        }
        if ("string" == typeof _0x43d105) {
          return this.isLoon() ? _0x43d105 : this.isQuanX() ? {
            "open-url": _0x43d105
          } : this.isSurge() ? {
            url: _0x43d105
          } : void 0;
        }
        if ("object" == typeof _0x43d105) {
          if (this.isLoon()) {
            let _0x5ddb42 = _0x43d105.openUrl || _0x43d105.url || _0x43d105["open-url"],
              _0x17eef0 = _0x43d105.mediaUrl || _0x43d105["media-url"];
            const _0x2f9047 = {
              openUrl: _0x5ddb42,
              mediaUrl: _0x17eef0
            };
            return _0x2f9047;
          }
          if (this.isQuanX()) {
            let _0x19958a = _0x43d105["open-url"] || _0x43d105.url || _0x43d105.openUrl,
              _0x1c1542 = _0x43d105["media-url"] || _0x43d105.mediaUrl;
            const _0x2dec47 = {
              "open-url": _0x19958a,
              "media-url": _0x1c1542
            };
            return _0x2dec47;
          }
          if (this.isSurge()) {
            let _0x51748 = _0x43d105.url || _0x43d105.openUrl || _0x43d105["open-url"];
            const _0x1b490b = {
              url: _0x51748
            };
            return _0x1b490b;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1654cc, _0x4d0e24, _0x1d5c63, _0x29333d(_0x13f6ce)) : this.isQuanX() && $notify(_0x1654cc, _0x4d0e24, _0x1d5c63, _0x29333d(_0x13f6ce)));
      let _0x41e10c = ["", "==============📣系统通知📣=============="];
      _0x41e10c.push(_0x1654cc);
      _0x4d0e24 && _0x41e10c.push(_0x4d0e24);
      _0x1d5c63 && _0x41e10c.push(_0x1d5c63);
      console.log(_0x41e10c.join("\n"));
      this.logs = this.logs.concat(_0x41e10c);
    }
    log(..._0x447c1b) {
      _0x447c1b.length > 0 && (this.logs = [...this.logs, ..._0x447c1b]);
      console.log(_0x447c1b.join(this.logSeparator));
    }
    logErr(_0x482987, _0x13bcb7) {
      const _0x3c37e8 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x3c37e8 ? this.log("", "❗️" + this.name + ", 错误!", _0x482987.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x482987);
    }
    wait(_0x5607a5) {
      return new Promise(_0x318a65 => setTimeout(_0x318a65, _0x5607a5));
    }
    done(_0x38bfdc = {}) {
      const _0x37cb23 = new Date().getTime(),
        _0x5399ca = (_0x37cb23 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x5399ca + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x38bfdc);
    }
  }(_0x30bc9f, _0x84eb17);
}