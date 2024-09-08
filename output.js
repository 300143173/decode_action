//Sun Sep 08 2024 13:07:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/**
 * 
 * 项目类型：APP
 * 项目下载：https://
 * 项目名称：抖音极速版
 * 项目更新：2023-05-15
 * 项目抓包：抓aweme.snssdk.com下的sessionid填入变量
 * 项目变量：lekebo_dyjsb_Cookie
 * 项目定时：每20分钟运行一次
 * 定时规则: * 20 * * * *
 * 
 * 邀 请 码: 
 * 
 * github仓库：https://github.com/qq274023/lekebo
 * 
 * 交流Q群：104062430 作者:乐客播 欢迎前来提交bug
 */

const $ = new Env("\u6296\u97F3\u6781\u901F\u7248");
//-------------------- 一般不动变量区域 -------------------------------------
const notify = $.isNode() ? require("./sendNotify") : "";
const Notify = 0; //通知设置      0关闭  1开启
let debug = 0; //Debug调试     0关闭  1开启
let envSplitor = ["@", "\n"]; //多账号分隔符
let ck = msg = ""; //let ck,msg
//===============脚本版本=================//
let scriptVersion = "v1.1";
let update_tines = "2023-05-15";
let update_data = "2023-05-03";
let versionupdate = "0"; //版本对比升级   0关闭  1开启
let scriptVersionLatest = ""; //版本对比
let userCookie = ($.isNode() ? process.env.lekebo_dyjsb_Cookie : $.getdata("lekebo_dyjsb_Cookie")) || "";
let userList = [];
let userIdx = 0;
let userCount = 0;
let timeHours = parseInt($.time("HH"));
let times = Math.round(new Date().getTime() / 1000).toString();
let timestamp = Math.round(new Date().getTime()).toString();
let host = "api5-normal-c-lf.amemv.com";
let hostname = "https://" + host;
//---------------------- 自定义变量区域 -----------------------------------
var version_ = "jsjiami.com.v7";
const _0x5a417e = _0x4dd4;
((function (_0x1cd730, _0x51016a, _0x450771, _0x556479, _0x3d612b, _0x59d50a, _0x574b72) {
  return _0x1cd730 = _0x1cd730 >> 8, _0x59d50a = "hs", _0x574b72 = "hs", function (_0x5bf1f7, _0x57601e, _0x246db5, _0x275b7e, _0x2fad53) {
    const _0x89b511 = _0x4dd4;
    _0x275b7e = "tfi", _0x59d50a = _0x275b7e + _0x59d50a, _0x2fad53 = "up", _0x574b72 += _0x2fad53, _0x59d50a = _0x246db5(_0x59d50a), _0x574b72 = _0x246db5(_0x574b72), _0x246db5 = 0;
    const _0x50c203 = _0x5bf1f7();
    while (!![] && --_0x556479 + _0x57601e) {
      try {
        _0x275b7e = -parseInt(_0x89b511(950, "oSd%")) / 1 + -parseInt(_0x89b511(871, "xINJ")) / 2 * (parseInt(_0x89b511(1277, "c$RJ")) / 3) + -parseInt(_0x89b511(613, "IAun")) / 4 + parseInt(_0x89b511(751, "sRn*")) / 5 * (-parseInt(_0x89b511(1578, "TpdZ")) / 6) + parseInt(_0x89b511(511, "^^B2")) / 7 + -parseInt(_0x89b511(975, "5sE@")) / 8 * (-parseInt(_0x89b511(1107, "TpdZ")) / 9) + parseInt(_0x89b511(595, "!gld")) / 10;
      } catch (_0x3ec1c4) {
        _0x275b7e = _0x246db5;
      } finally {
        _0x2fad53 = _0x50c203[_0x59d50a]();
        if (_0x1cd730 <= _0x556479) _0x246db5 ? _0x3d612b ? _0x275b7e = _0x2fad53 : _0x3d612b = _0x2fad53 : _0x246db5 = _0x2fad53;else {
          if (_0x246db5 == _0x3d612b["replace"](/[KCtFYXWnUBPJHSQLpDf=]/g, "")) {
            if (_0x275b7e === _0x57601e) {
              _0x50c203["un" + _0x59d50a](_0x2fad53);
              break;
            }
            _0x50c203[_0x574b72](_0x2fad53);
          }
        }
      }
    }
  }(_0x450771, _0x51016a, function (_0x2a9ed5, _0xffca55, _0x30e234, _0x236bf6, _0x56801d, _0x214997, _0x389b7c) {
    return _0xffca55 = "split", _0x2a9ed5 = arguments[0], _0x2a9ed5 = _0x2a9ed5[_0xffca55](""), _0x30e234 = "reverse", _0x2a9ed5 = _0x2a9ed5[_0x30e234]("v"), _0x236bf6 = "join", (1229883, _0x2a9ed5[_0x236bf6](""));
  });
})(52224, 683888, _0x4d6b, 206), _0x4d6b) && (version_ = _0x4d6b);
async function start() {
  const _0xdf8ab6 = _0x4dd4,
    _0x727e28 = {
      "jXWHY": function (_0x112e99, _0x289eb4) {
        return _0x112e99(_0x289eb4);
      },
      "rryyD": function (_0x4bd859, _0x56a42e) {
        return _0x4bd859 * _0x56a42e;
      },
      "Snady": function (_0x21068d, _0x253fb3) {
        return _0x21068d(_0x253fb3);
      },
      "axUax": function (_0x2440fd, _0x58555e) {
        return _0x2440fd === _0x58555e;
      },
      "wQxHo": "sZzrZ",
      "tOLxJ": function (_0x2b5012, _0x3d411e) {
        return _0x2b5012 * _0x3d411e;
      },
      "wXqwh": function (_0xf4f3e7, _0x1217ad) {
        return _0xf4f3e7 * _0x1217ad;
      }
    };
  taskall = [];
  for (let _0x1b4950 of userList) {
    taskall[_0xdf8ab6(1182, "c$RJ")](await _0x1b4950[_0xdf8ab6(1398, "Erl2")](_0x727e28["rryyD"](2, 1000))), await $[_0xdf8ab6(544, "Pl2K")](1000);
  }
  await Promise["all"](taskall), DoubleLog("\n================ \u6267\u884C\u8D26\u53F7\u7B7E\u5230\u8D5A\u94B1 ================"), taskall = [];
  for (let _0x175c29 of userList) {
    taskall["push"](await _0x175c29["signin"](2000)), await $[_0xdf8ab6(1483, "Q$[E")](1000);
  }
  await Promise[_0xdf8ab6(1281, "4HSP")](taskall), _0x727e28[_0xdf8ab6(830, "U%Xr")](DoubleLog, _0xdf8ab6(459, "TpdZ")), taskall = [];
  for (let _0x350ab3 of userList) {
    _0x727e28["axUax"](_0x727e28[_0xdf8ab6(913, "As2o")], _0x727e28["wQxHo"]) ? (taskall[_0xdf8ab6(454, "nK4s")](await _0x350ab3[_0xdf8ab6(761, "0qAp")](2000)), await $[_0xdf8ab6(1416, "8WT[")](1000)) : (_0x727e28[_0xdf8ab6(572, "4ifU")](_0x1ced1a, _0xdf8ab6(818, "xINJ") + _0xe4b211 + _0xdf8ab6(1265, "XZTf") + _0x3dfc40), _0xd931a1("\n \u6700\u65B0\u7248\u672C\uFF1A" + _0x44c028), _0x727e28[_0xdf8ab6(1024, "T6Ff")](_0x4430bf, _0xdf8ab6(884, "^^B2") + _0x52a3ae));
  }
  await Promise[_0xdf8ab6(1262, "R61R")](taskall), _0x727e28["jXWHY"](DoubleLog, _0xdf8ab6(1575, "k4ID")), taskall = [];
  for (let _0x1b1081 of userList) {
    taskall[_0xdf8ab6(518, "oSd%")](await _0x1b1081[_0xdf8ab6(1464, "@zHk")](_0x727e28[_0xdf8ab6(1405, "^^B2")](2, 1000))), await $[_0xdf8ab6(918, "sneV")](1000);
  }
  await Promise[_0xdf8ab6(750, "ql[[")](taskall), _0x727e28[_0xdf8ab6(1301, "aJEf")](DoubleLog, _0xdf8ab6(696, "ELtf")), taskall = [];
  for (let _0x192fef of userList) {
    taskall[_0xdf8ab6(1171, "T6Ff")](await _0x192fef[_0xdf8ab6(1547, "Pl2K")](_0x727e28[_0xdf8ab6(1181, "Il4n")](2, 1000))), await $[_0xdf8ab6(1273, "c$RJ")](1000);
  }
  await Promise[_0xdf8ab6(740, "OWbR")](taskall), _0x727e28["Snady"](DoubleLog, _0xdf8ab6(823, "mHsY")), taskall = [];
  for (let _0x550ce7 of userList) {
    taskall[_0xdf8ab6(673, "Erl2")](await _0x550ce7[_0xdf8ab6(775, "!P0$")](_0x727e28[_0xdf8ab6(451, "oSd%")](2, 1000))), await $[_0xdf8ab6(436, "XE9O")](1000);
  }
  await Promise[_0xdf8ab6(855, "D]Qc")](taskall);
}
class UserInfo {
  constructor(_0x21b1df) {
    const _0x27f9c2 = _0x4dd4,
      _0x3fec94 = {
        "QDWwk": "sessionid=",
        "tCqsv": function (_0x5a4faa, _0x355547, _0x345249) {
          return _0x5a4faa(_0x355547, _0x345249);
        },
        "HbXeE": _0x27f9c2(1305, "oSd%"),
        "aadop": "com.ss.android.ugc.aweme.lite/250101 (Linux; U; Android 13; zh_CN; V2185A; Build/TP1A.220624.014;tt-ok/3.12.13.1)",
        "Gmmuf": _0x27f9c2(1159, "T6Ff")
      };
    this[_0x27f9c2(839, "c$RJ")] = ++userIdx, this[_0x27f9c2(1226, "Erl2")] = _0x21b1df["split"]("&")[0][_0x27f9c2(1029, "6yqz")](_0x3fec94[_0x27f9c2(779, "ELtf")], ""), this[_0x27f9c2(1203, "D]Qc")] = _0x3fec94[_0x27f9c2(1276, "E0y6")](randomsstring, 16, _0x3fec94["HbXeE"]), this[_0x27f9c2(1369, "ql[[")] = randomsstring(16, _0x3fec94[_0x27f9c2(681, "HlZ6")]), this[_0x27f9c2(700, "nK4s")] = _0x3fec94[_0x27f9c2(1048, "sneV")], this["version_name"] = _0x3fec94["Gmmuf"], this[_0x27f9c2(1511, "Pl2K")] = 2329, this[_0x27f9c2(984, "0jFM")] = _0x27f9c2(463, "j7Hy"), this[_0x27f9c2(1321, "S4Mp")] = _0x27f9c2(1441, "Il4n"), this[_0x27f9c2(1038, "Pl2K")] = "33";
  }
  async ["getMemberInfo"](_0x5a25e0 = 2000) {
    const _0x26fc63 = _0x4dd4,
      _0x51fb44 = {
        "VseET": function (_0x590371) {
          return _0x590371();
        },
        "UUAxE": function (_0x3088a4, _0x3080b5, _0x517090) {
          return _0x3088a4(_0x3080b5, _0x517090);
        },
        "zSJOe": _0x26fc63(1338, "4HSP"),
        "NqqHp": "douyin_lite",
        "mKdOZ": _0x26fc63(1141, "KwiO"),
        "DzfmN": function (_0x36bf63, _0xb80bca) {
          return _0x36bf63 === _0xb80bca;
        },
        "XyOgc": _0x26fc63(826, "0jFM"),
        "Xukhu": _0x26fc63(1263, "DL2D"),
        "eMeWB": function (_0x2d8490, _0x363b7e) {
          return _0x2d8490(_0x363b7e);
        },
        "wlCwt": function (_0xf2a235, _0x21f56a) {
          return _0xf2a235 / _0x21f56a;
        },
        "LbKfT": _0x26fc63(1331, "Erl2")
      };
    return new Promise(_0x2b1b03 => {
      const _0x1b2ad2 = _0x26fc63,
        _0x16aeec = {
          "kaPgC": function (_0x3a4dc1) {
            const _0x3f3ffe = _0x4dd4;
            return _0x51fb44[_0x3f3ffe(1293, "Pl2K")](_0x3a4dc1);
          },
          "tLRZW": _0x1b2ad2(435, "ELtf"),
          "vBato": function (_0x665187, _0x59d22b, _0x52ebce) {
            const _0x11552d = _0x1b2ad2;
            return _0x51fb44[_0x11552d(1184, "Pl2K")](_0x665187, _0x59d22b, _0x52ebce);
          },
          "VGRNF": _0x51fb44[_0x1b2ad2(1006, "KwiO")],
          "LLiDD": _0x51fb44["NqqHp"],
          "tbpiJ": _0x51fb44[_0x1b2ad2(957, "Q$[E")],
          "rbeOc": function (_0x30c4b2, _0x277a6) {
            return _0x51fb44["DzfmN"](_0x30c4b2, _0x277a6);
          },
          "vGLip": _0x51fb44[_0x1b2ad2(620, "Pl2K")],
          "TgmWW": _0x1b2ad2(1195, "!P0$"),
          "gNylS": function (_0x1e3ecf, _0x173f36) {
            const _0x41c823 = _0x1b2ad2;
            return _0x51fb44[_0x41c823(481, "CHZX")](_0x1e3ecf, _0x173f36);
          },
          "ueZna": _0x51fb44[_0x1b2ad2(1410, "Il4n")],
          "TWzBY": function (_0x427070, _0x42301c) {
            return _0x51fb44["eMeWB"](_0x427070, _0x42301c);
          },
          "SsWoY": function (_0x3b41c1, _0x5b864c) {
            const _0x4e1e99 = _0x1b2ad2;
            return _0x51fb44[_0x4e1e99(1014, "0qAp")](_0x3b41c1, _0x5b864c);
          },
          "GzoYg": _0x51fb44[_0x1b2ad2(715, "DL2D")]
        };
      let _0x28ecd8 = {
        "url": hostname + "/luckycat/aweme/v1/task/page?mode=done&update_version_code=" + this["update_version_code"] + _0x1b2ad2(1383, "IAun") + this[_0x1b2ad2(1419, "T6Ff")] + _0x1b2ad2(903, "!P0$") + this[_0x1b2ad2(1177, "sRn*")] + _0x1b2ad2(1426, "XZTf") + this[_0x1b2ad2(567, "T6Ff")] + _0x1b2ad2(1052, "aJEf") + this[_0x1b2ad2(1363, "Q$[E")],
        "headers": {
          "Host": host,
          "Content-Type": _0x1b2ad2(1101, "ELtf"),
          "user-agent": this[_0x1b2ad2(1294, "8))q")],
          "Cookie": _0x1b2ad2(480, "sneV") + this["sessionid"]
        }
      };
      $["get"](_0x28ecd8, async (_0x336053, _0x2921b6, _0x1f9dc6) => {
        const _0x5528c2 = _0x1b2ad2,
          _0x16d7b3 = {
            "gRYOv": function (_0x2ac6d4) {
              return _0x16aeec["kaPgC"](_0x2ac6d4);
            },
            "FsQAH": _0x16aeec["tLRZW"],
            "KKDru": function (_0x7c98c, _0x1293d9, _0x43ce5f) {
              const _0x236ed1 = _0x4dd4;
              return _0x16aeec[_0x236ed1(945, "nK4s")](_0x7c98c, _0x1293d9, _0x43ce5f);
            },
            "CdSqV": "0123456789",
            "OcICs": _0x16aeec[_0x5528c2(510, "4HSP")],
            "pcAWc": _0x16aeec[_0x5528c2(887, "mHsY")],
            "ZYuSn": "250100"
          };
        if (_0x16aeec["tbpiJ"] === "oYEvq") _0x4c9227["logErr"](_0xffcee0, _0x222498);else try {
          if (_0x336053) _0x16aeec["rbeOc"](_0x16aeec[_0x5528c2(1569, "k4ID")], _0x16aeec["TgmWW"]) ? _0x3365c2["logErr"](_0xfefd0e) : $[_0x5528c2(866, "9@rc")](_0x336053);else {
            let _0x3c44a3 = JSON[_0x5528c2(1138, "U%Xr")](_0x1f9dc6);
            _0x3c44a3[_0x5528c2(933, "E0y6")] == 0 ? _0x16aeec[_0x5528c2(789, "8WT[")](_0x5528c2(1476, "Erl2"), _0x16aeec["ueZna"]) ? _0x16aeec[_0x5528c2(1119, "!gld")](DoubleLog, _0x5528c2(1222, "mHsY") + this["index"] + _0x5528c2(809, "sneV") + _0x3c44a3[_0x5528c2(664, "E0y6")][_0x5528c2(1212, "XZTf")][_0x5528c2(1374, "ELtf")] + "\u91D1\u5E01\uFF0C\u4F59\u989D:" + _0x16aeec[_0x5528c2(894, "4ifU")](_0x3c44a3[_0x5528c2(851, "XZTf")]["income_data"]["amount2"], 100) + "\u5143") : _0x16d7b3["gRYOv"](_0x2019a4) : _0x16aeec[_0x5528c2(1346, "aJEf")](DoubleLog, _0x5528c2(937, "HlZ6") + this[_0x5528c2(566, "T6Ff")] + _0x5528c2(1522, "*A&H") + _0x3c44a3[_0x5528c2(1100, "$*Nv")]);
          }
        } catch (_0xc38e70) {
          $[_0x5528c2(895, "xINJ")](_0xc38e70, _0x2921b6);
        } finally {
          _0x16aeec[_0x5528c2(964, "@zHk")] !== _0x5528c2(1188, "^^B2") ? _0x16aeec[_0x5528c2(610, "mHsY")](_0x2b1b03) : (this[_0x5528c2(1068, "Q$[E")] = ++_0x38a53a, this[_0x5528c2(1241, "*A&H")] = _0x49a331[_0x5528c2(980, "4HSP")]("&")[0][_0x5528c2(1236, "HlZ6")](_0x16d7b3[_0x5528c2(490, "NvE7")], ""), this[_0x5528c2(467, "DL2D")] = _0x16d7b3[_0x5528c2(939, "HlZ6")](_0x61a5fd, 16, "0123456789"), this["iid"] = _0x18011f(16, _0x16d7b3[_0x5528c2(1379, "!P0$")]), this[_0x5528c2(1432, "NvE7")] = _0x5528c2(1430, "As2o"), this[_0x5528c2(987, "$*Nv")] = _0x16d7b3[_0x5528c2(1506, "5sE@")], this[_0x5528c2(1474, "4ifU")] = 2329, this[_0x5528c2(1012, "XZTf")] = _0x16d7b3["pcAWc"], this[_0x5528c2(886, "sneV")] = _0x16d7b3[_0x5528c2(771, "KwiO")], this[_0x5528c2(732, "0qAp")] = "33");
        }
      }, _0x5a25e0);
    });
  }
  async [_0x5a417e(1239, "8))q")](_0xaa7bd3 = 2000) {
    const _0x53e2a2 = _0x5a417e,
      _0xa9c21a = {
        "iudqq": function (_0x1ff06d, _0x248d12) {
          return _0x1ff06d !== _0x248d12;
        },
        "KzBHH": _0x53e2a2(543, "XE9O"),
        "oGhIc": _0x53e2a2(1309, "!gld"),
        "uTzeJ": function (_0x59f7dc, _0x410a46) {
          return _0x59f7dc == _0x410a46;
        },
        "XGGKr": function (_0x3d970a, _0x4d741a) {
          return _0x3d970a * _0x4d741a;
        },
        "PjiBK": "PsRRN",
        "ALTJj": function (_0x2a69a0, _0x2ad344) {
          return _0x2a69a0(_0x2ad344);
        },
        "YQWBF": function (_0x75c52b, _0x2325e2) {
          return _0x75c52b !== _0x2325e2;
        },
        "vDTuo": _0x53e2a2(1157, "XE9O"),
        "zaAVK": function (_0x55e6a7, _0x1844d1) {
          return _0x55e6a7(_0x1844d1);
        },
        "TfKdv": _0x53e2a2(1561, "NvE7"),
        "xBivp": function (_0x3f3cfd, _0x488580) {
          return _0x3f3cfd + _0x488580;
        },
        "rmtIL": "sessionid="
      };
    return new Promise(_0x2abdb7 => {
      const _0x117659 = _0x53e2a2,
        _0x31268c = {
          "bfRwK": function (_0x5b0d7f, _0x212374) {
            const _0x430f0e = _0x4dd4;
            return _0xa9c21a[_0x430f0e(1152, "#iH4")](_0x5b0d7f, _0x212374);
          },
          "vcXMg": function (_0x4ae4ee, _0x174f45) {
            return _0x4ae4ee(_0x174f45);
          }
        };
      let _0x43a8cc = {
        "url": hostname + _0x117659(443, "D]Qc") + this[_0x117659(991, "4HSP")] + "&device_id=" + this[_0x117659(873, "4HSP")] + _0x117659(795, "sneV") + this["aid"] + _0x117659(697, "Q$[E") + this["app_name"] + "&version_code=" + this[_0x117659(915, "CHZX")],
        "headers": {
          "Host": host,
          "Content-Type": _0xa9c21a[_0x117659(817, "8q%e")],
          "user-agent": this[_0x117659(1513, "0qAp")],
          "Cookie": _0xa9c21a[_0x117659(974, "aJEf")](_0xa9c21a[_0x117659(713, "k4ID")], this[_0x117659(793, "ELtf")])
        },
        "body": "{}"
      };
      $["post"](_0x43a8cc, async (_0x3fbcd9, _0x440563, _0x471b66) => {
        const _0x2dda07 = _0x117659,
          _0x524686 = {
            "yVecS": function (_0x53486e, _0x4a9f29) {
              return _0x53486e(_0x4a9f29);
            }
          };
        try {
          if (_0x3fbcd9) $[_0x2dda07(1235, "sRn*")](_0x3fbcd9);else {
            if (_0xa9c21a[_0x2dda07(1154, "aJEf")](_0xa9c21a[_0x2dda07(1026, "4HSP")], _0xa9c21a[_0x2dda07(1310, "D]Qc")])) {
              let _0x2aadab = JSON[_0x2dda07(1162, "j7Hy")](_0x471b66);
              _0xa9c21a["uTzeJ"](_0x2aadab[_0x2dda07(816, "XE9O")], 0) ? (this[_0x2dda07(1361, "OWbR")] = _0x2aadab[_0x2dda07(934, "4HSP")]["amount"], DoubleLog(_0x2dda07(461, "E0y6") + this["index"] + _0x2dda07(468, "Erl2") + _0x2aadab["data"][_0x2dda07(1568, "S4Mp")] + _0x2dda07(743, "U%Xr")), await $[_0x2dda07(1044, "ELtf")](3000), await this["signinad"](_0xa9c21a[_0x2dda07(1418, "T6Ff")](2, 1000))) : _0x2dda07(1103, "U%Xr") === _0xa9c21a[_0x2dda07(691, "IAun")] ? _0x7835ef["logErr"](_0x3b2ddd) : _0xa9c21a[_0x2dda07(836, "^^B2")](DoubleLog, "\n \u274C \u3010" + this[_0x2dda07(411, "ELtf")] + _0x2dda07(925, "c$RJ") + _0x2aadab[_0x2dda07(667, "8WT[")]);
            } else _0x524686[_0x2dda07(570, "XE9O")](_0x540bed, _0x2dda07(880, "ELtf") + this[_0x2dda07(1237, "9@rc")] + _0x2dda07(1228, "^^B2") + _0x435608["err_tips"]);
          }
        } catch (_0x56fd36) {
          $[_0x2dda07(489, "k4ID")](_0x56fd36, _0x440563);
        } finally {
          if (_0xa9c21a[_0x2dda07(460, "8))q")](_0xa9c21a["vDTuo"], "jkiSC")) _0x2abdb7();else {
            let _0x1fb3e4 = _0x3bc17c[_0x2dda07(1105, "DL2D")](_0x120c34);
            _0x1fb3e4[_0x2dda07(569, "mHsY")] == 0 ? _0x31268c[_0x2dda07(1397, "KwiO")](_0x1ef18d, _0x2dda07(461, "E0y6") + this[_0x2dda07(1068, "Q$[E")] + _0x2dda07(955, "9@rc") + _0x1fb3e4[_0x2dda07(574, "nK4s")][_0x2dda07(865, "NvE7")] + _0x2dda07(842, "As2o")) : _0x31268c[_0x2dda07(703, "XZTf")](_0x25ee72, _0x2dda07(815, "c$RJ") + this[_0x2dda07(843, "CHZX")] + _0x2dda07(1481, "j7Hy") + _0x1fb3e4[_0x2dda07(904, "sneV")]);
          }
        }
      }, _0xaa7bd3);
    });
  }
  async [_0x5a417e(1126, "Pl2K")](_0x163fca = 2000) {
    const _0x4f5948 = _0x5a417e,
      _0x41548c = {
        "hxcEC": _0x4f5948(922, "j7Hy"),
        "skFUK": function (_0x151449, _0x18e267) {
          return _0x151449 === _0x18e267;
        },
        "avVnn": _0x4f5948(944, "^^B2"),
        "EICJb": _0x4f5948(1030, "8))q"),
        "cLoNy": function (_0xf0d6a3, _0x41154e) {
          return _0xf0d6a3 * _0x41154e;
        },
        "nUkBk": _0x4f5948(819, "6yqz"),
        "UYzHj": function (_0x187d6c, _0x9b2d06) {
          return _0x187d6c(_0x9b2d06);
        },
        "Wxqck": _0x4f5948(531, "$*Nv"),
        "sIpXQ": function (_0x4ed7e9, _0x58935b) {
          return _0x4ed7e9 + _0x58935b;
        },
        "teLyV": _0x4f5948(1319, "IAun")
      };
    return new Promise(_0x4ba841 => {
      const _0x160732 = _0x4f5948,
        _0x3cd129 = {
          "DuzfZ": function (_0x16092a) {
            return _0x16092a();
          },
          "sVume": _0x41548c[_0x160732(877, "As2o")],
          "FjzPw": function (_0x5a7e83, _0x276f54) {
            return _0x41548c["skFUK"](_0x5a7e83, _0x276f54);
          },
          "ttuNd": _0x41548c["avVnn"],
          "rOWac": function (_0x1e1364, _0x194ec0) {
            return _0x1e1364 == _0x194ec0;
          },
          "eZFxE": _0x41548c[_0x160732(1125, "aJEf")],
          "IaMhV": function (_0x26bb39, _0x45059a) {
            const _0x5e1c8c = _0x160732;
            return _0x41548c[_0x5e1c8c(647, "mHsY")](_0x26bb39, _0x45059a);
          },
          "vqoMG": function (_0x38bc79, _0x186db7) {
            return _0x41548c["skFUK"](_0x38bc79, _0x186db7);
          },
          "kKqGJ": _0x160732(1115, "5sE@"),
          "IIwsL": _0x41548c[_0x160732(1091, "5sE@")],
          "DrXXg": function (_0x4ce4cd, _0x29b93d) {
            const _0x158462 = _0x160732;
            return _0x41548c[_0x158462(990, "Il4n")](_0x4ce4cd, _0x29b93d);
          }
        };
      let _0x2f45c4 = {
        "url": hostname + _0x160732(1358, "8q%e") + this[_0x160732(1403, "As2o")] + _0x160732(1367, "DL2D") + this[_0x160732(567, "T6Ff")] + _0x160732(1429, "#iH4") + this[_0x160732(1121, "8q%e")] + _0x160732(677, "k4ID") + this[_0x160732(1225, "D]Qc")] + _0x160732(1312, "4ifU") + this[_0x160732(1043, "6yqz")],
        "headers": {
          "Host": host,
          "Content-Type": _0x41548c[_0x160732(1322, "R61R")],
          "user-agent": this[_0x160732(458, "8q%e")],
          "Cookie": _0x41548c[_0x160732(1256, "5sE@")](_0x41548c["teLyV"], this[_0x160732(621, "^^B2")])
        },
        "body": "{}"
      };
      $[_0x160732(896, "mHsY")](_0x2f45c4, async (_0x1b13d5, _0x1ea2c4, _0x17b030) => {
        const _0x156fb1 = _0x160732,
          _0x4e884c = {
            "ezNmJ": function (_0x4f02ba) {
              return _0x3cd129["DuzfZ"](_0x4f02ba);
            }
          };
        try {
          if (_0x156fb1(507, "HlZ6") !== _0x3cd129[_0x156fb1(1208, "^^B2")]) _0x3f279a["logErr"](_0x101552, _0x5825d9);else {
            if (_0x1b13d5) _0x3cd129[_0x156fb1(1112, "8))q")](_0x3cd129["ttuNd"], _0x156fb1(522, "CHZX")) ? _0x3737fe[_0x156fb1(1189, "As2o")](_0x4946e2, _0x3f4bc9) : $[_0x156fb1(1199, "XE9O")](_0x1b13d5);else {
              let _0x47ba57 = JSON[_0x156fb1(856, "0qAp")](_0x17b030);
              if (_0x3cd129[_0x156fb1(1480, "sneV")](_0x47ba57[_0x156fb1(1196, "KwiO")], 0)) {
                const _0x3ba291 = _0x3cd129[_0x156fb1(769, "8))q")][_0x156fb1(666, "9@rc")]("|");
                let _0x1ce6c8 = 0;
                while (!![]) {
                  switch (_0x3ba291[_0x1ce6c8++]) {
                    case "0":
                      this["score_amount"] = _0x47ba57[_0x156fb1(519, "D]Qc")]["excitation_ad_info"][_0x156fb1(1570, "Q$[E")];
                      continue;
                    case "1":
                      this[_0x156fb1(1384, "c$RJ")] = _0x47ba57[_0x156fb1(725, "S4Mp")][_0x156fb1(755, "0jFM")][_0x156fb1(689, "4ifU")];
                      continue;
                    case "2":
                      DoubleLog(_0x156fb1(940, "KwiO") + this[_0x156fb1(1039, "$*Nv")] + _0x156fb1(1271, "IAun") + this[_0x156fb1(1146, "nK4s")] + " \u91D1\u5E01");
                      continue;
                    case "3":
                      await $["wait"](60000);
                      continue;
                    case "4":
                      await this[_0x156fb1(608, "Pl2K")](_0x3cd129[_0x156fb1(1567, "nK4s")](2, 1000));
                      continue;
                    case "5":
                      this[_0x156fb1(1255, "k4ID")] = _0x47ba57[_0x156fb1(1242, "U%Xr")]["excitation_ad_info"][_0x156fb1(786, "8))q")];
                      continue;
                  }
                  break;
                }
              } else {
                if (_0x3cd129[_0x156fb1(1156, "5sE@")](_0x3cd129[_0x156fb1(923, "XZTf")], _0x3cd129[_0x156fb1(1370, "*A&H")])) return _0x4e884c[_0x156fb1(1565, "sneV")](_0x129288);else _0x3cd129[_0x156fb1(1557, "ELtf")](DoubleLog, "\n \u274C \u3010" + this[_0x156fb1(1349, "TpdZ")] + _0x156fb1(643, "j7Hy") + _0x47ba57[_0x156fb1(693, "Q$[E")]);
              }
            }
          }
        } catch (_0x117120) {
          $[_0x156fb1(1073, "8))q")](_0x117120, _0x1ea2c4);
        } finally {
          _0x4ba841();
        }
      }, _0x163fca);
    });
  }
  async ["done_eat"](_0x36928a = 2000) {
    const _0x31e954 = _0x5a417e,
      _0x5d091d = {
        "cScmR": "bpgLw",
        "ERiJJ": _0x31e954(1061, "c$RJ"),
        "oIoSg": function (_0x44de92, _0x222757) {
          return _0x44de92 + _0x222757;
        },
        "IAhoB": _0x31e954(579, "0jFM")
      };
    return new Promise(_0x2e5077 => {
      const _0x4d8db9 = _0x31e954,
        _0x572b72 = {
          "VlYDS": function (_0xd1c20, _0x2a0a7e) {
            return _0xd1c20 !== _0x2a0a7e;
          },
          "AXBpL": _0x5d091d[_0x4d8db9(1353, "CHZX")],
          "EmhaB": function (_0x11789c, _0x387985) {
            return _0x11789c == _0x387985;
          }
        };
      let _0x426a8a = {
        "url": hostname + _0x4d8db9(1094, "k4ID") + this["iid"] + _0x4d8db9(440, "HlZ6") + this[_0x4d8db9(748, "k4ID")] + _0x4d8db9(1229, "xINJ") + this["aid"] + _0x4d8db9(1434, "9@rc") + this[_0x4d8db9(1330, "8q%e")] + "&version_code=" + this[_0x4d8db9(603, "8WT[")],
        "headers": {
          "Host": host,
          "Content-Type": _0x5d091d[_0x4d8db9(838, "!P0$")],
          "user-agent": this[_0x4d8db9(1400, "sRn*")],
          "Cookie": _0x5d091d[_0x4d8db9(1090, "aJEf")](_0x5d091d[_0x4d8db9(1553, "xINJ")], this[_0x4d8db9(930, "Q$[E")])
        },
        "body": _0x4d8db9(1245, "5sE@") + this[_0x4d8db9(413, "sRn*")] + _0x4d8db9(794, "T6Ff") + this[_0x4d8db9(1255, "k4ID")] + _0x4d8db9(1399, "@zHk") + this[_0x4d8db9(865, "NvE7")] + _0x4d8db9(926, "ql[[") + this["amount"] + _0x4d8db9(833, "xINJ") + this[_0x4d8db9(601, "Pl2K")] + _0x4d8db9(841, "@zHk")
      };
      $[_0x4d8db9(496, "j7Hy")](_0x426a8a, async (_0x3580e9, _0x31e7a1, _0xc5f2f7) => {
        const _0x200e6a = _0x4d8db9;
        try {
          if (_0x572b72[_0x200e6a(470, "Il4n")](_0x200e6a(1223, "KwiO"), _0x572b72["AXBpL"])) _0x984251[_0x200e6a(704, "S4Mp")](_0x438af3);else {
            if (_0x3580e9) $[_0x200e6a(704, "S4Mp")](_0x3580e9);else {
              let _0x318730 = JSON[_0x200e6a(1509, "CHZX")](_0xc5f2f7);
              _0x572b72[_0x200e6a(763, "8q%e")](_0x318730[_0x200e6a(642, "sneV")], 0) ? DoubleLog(_0x200e6a(479, "8))q") + this[_0x200e6a(429, "!gld")] + "\u3011\u7B7E\u5230\u5E7F\u544A: \u83B7\u5F97 " + _0x318730["data"]["amount"] + " \u91D1\u5E01") : DoubleLog("\n \u274C \u3010" + this["index"] + "\u3011\u7B7E\u5230\u5E7F\u544A: " + _0x318730[_0x200e6a(1117, "R61R")]);
            }
          }
        } catch (_0x24ab32) {
          $[_0x200e6a(557, "E0y6")](_0x24ab32, _0x31e7a1);
        } finally {
          _0x2e5077();
        }
      }, _0x36928a);
    });
  }
  async ["step"](_0x37916f = 2000) {
    const _0x50c65b = _0x5a417e,
      _0x3f9f13 = {
        "jRHrV": _0x50c65b(425, "8WT["),
        "slpmv": function (_0x36639a, _0x21f851) {
          return _0x36639a == _0x21f851;
        },
        "btGLf": function (_0x5226ad, _0x3787f8) {
          return _0x5226ad > _0x3787f8;
        },
        "wCHpU": function (_0x3ff7d9, _0x580669) {
          return _0x3ff7d9 * _0x580669;
        },
        "zICCC": function (_0x2bd3c7, _0x5a4286) {
          return _0x2bd3c7 === _0x5a4286;
        },
        "QnalK": _0x50c65b(491, "8q%e"),
        "JSnAt": "sessionid="
      };
    return new Promise(_0x4b7362 => {
      const _0x4c46b7 = _0x50c65b,
        _0x509bd4 = {
          "lklDv": function (_0x39a09d, _0x5c0ad0) {
            return _0x39a09d(_0x5c0ad0);
          },
          "OpfZL": function (_0x547087) {
            return _0x547087();
          },
          "CVQCE": _0x4c46b7(1219, "4HSP"),
          "DLoUx": _0x3f9f13["jRHrV"],
          "Blndf": function (_0x4cb87a, _0xeaaef2) {
            const _0x378a0e = _0x4c46b7;
            return _0x3f9f13[_0x378a0e(1489, "NvE7")](_0x4cb87a, _0xeaaef2);
          },
          "HCbEL": function (_0x5a916d, _0x117b00) {
            const _0x5e5cad = _0x4c46b7;
            return _0x3f9f13[_0x5e5cad(1373, "S4Mp")](_0x5a916d, _0x117b00);
          },
          "VfUVY": function (_0x11b8c5, _0x5b9ac7) {
            return _0x3f9f13["wCHpU"](_0x11b8c5, _0x5b9ac7);
          },
          "qjxPc": _0x4c46b7(474, "As2o"),
          "VZyAE": function (_0xe3b001, _0x107799) {
            return _0x3f9f13["zICCC"](_0xe3b001, _0x107799);
          },
          "nPyzA": _0x3f9f13[_0x4c46b7(541, "sneV")]
        };
      let _0x54f8ea = {
        "url": hostname + _0x4c46b7(1433, "8q%e") + this["iid"] + "&device_id=" + this["device_id"] + _0x4c46b7(524, "As2o") + this["aid"] + _0x4c46b7(1471, "aJEf") + this["app_name"] + _0x4c46b7(685, "$*Nv") + this["update_version_code"],
        "headers": {
          "Host": host,
          "Content-Type": "application/json; charset=utf-8",
          "user-agent": this[_0x4c46b7(1180, "T6Ff")],
          "Cookie": _0x3f9f13["JSnAt"] + this["sessionid"]
        }
      };
      $[_0x4c46b7(1128, "CHZX")](_0x54f8ea, async (_0x4dc64a, _0x1938c2, _0x3e67f5) => {
        const _0x37eac6 = _0x4c46b7,
          _0x55a15a = {
            "bhDcJ": function (_0x2f0b5e, _0x42633e) {
              const _0x56da38 = _0x4dd4;
              return _0x509bd4[_0x56da38(1573, "0jFM")](_0x2f0b5e, _0x42633e);
            },
            "sRWAq": function (_0x25dec3) {
              return _0x509bd4["OpfZL"](_0x25dec3);
            }
          };
        if (_0x509bd4[_0x37eac6(1150, "!P0$")] === _0x509bd4[_0x37eac6(1303, "aJEf")]) _0x55a15a[_0x37eac6(831, "oSd%")](_0x118039, _0x37eac6(1413, "^^B2") + this[_0x37eac6(1387, "0qAp")] + _0x37eac6(1069, "8WT[") + _0x2c6d7b[_0x37eac6(1085, "5sE@")][_0x37eac6(870, "S4Mp")] + " \u6B65");else try {
          if (_0x4dc64a) $["logErr"](_0x4dc64a);else {
            let _0x13a477 = JSON[_0x37eac6(767, "HlZ6")](_0x3e67f5);
            _0x509bd4[_0x37eac6(1183, "R61R")](_0x13a477["err_no"], 0) ? _0x509bd4[_0x37eac6(938, "IAun")](_0x13a477[_0x37eac6(1097, "NvE7")][_0x37eac6(482, "6yqz")][_0x37eac6(1283, "E0y6")], 0) ? _0x509bd4[_0x37eac6(997, "9@rc")](DoubleLog, _0x37eac6(1035, "$*Nv") + this[_0x37eac6(629, "k4ID")] + _0x37eac6(551, "#iH4") + _0x13a477[_0x37eac6(1435, "#iH4")][_0x37eac6(863, "ELtf")] + _0x37eac6(699, "TpdZ") + _0x13a477[_0x37eac6(1082, "!P0$")][_0x37eac6(1306, "8))q")][_0x37eac6(1283, "E0y6")] + "\u91D1\u5E01") : await this[_0x37eac6(1274, "sneV")](_0x509bd4[_0x37eac6(1289, "0jFM")](2, 1000)) : _0x37eac6(1148, "0qAp") === _0x509bd4[_0x37eac6(753, "0jFM")] ? _0x55a15a[_0x37eac6(658, "!P0$")](_0x335acd) : _0x509bd4[_0x37eac6(1296, "oSd%")](DoubleLog, "\n \u274C \u3010" + this[_0x37eac6(839, "c$RJ")] + "\u3011\u4ECA\u65E5\u6B65\u6570: " + _0x13a477[_0x37eac6(1376, "U%Xr")]);
          }
        } catch (_0x3d00f8) {
          $[_0x37eac6(1280, "R61R")](_0x3d00f8, _0x1938c2);
        } finally {
          _0x509bd4[_0x37eac6(996, "oSd%")](_0x37eac6(1467, "@zHk"), _0x509bd4[_0x37eac6(1028, "HlZ6")]) ? _0x4b7362() : _0x15dd1a[_0x37eac6(503, "aJEf")](_0xac27bb, _0x3f77d9);
        }
      }, _0x37916f);
    });
  }
  async [_0x5a417e(1502, "9@rc")](_0x59fba9 = 2000) {
    const _0x141a0a = _0x5a417e,
      _0xcd21d4 = {
        "ebVqN": function (_0x5ebadf, _0x4e3fa6) {
          return _0x5ebadf(_0x4e3fa6);
        },
        "EabBE": function (_0x179668, _0x10d5a0) {
          return _0x179668(_0x10d5a0);
        },
        "CpWoQ": function (_0x4862fd, _0x126331) {
          return _0x4862fd === _0x126331;
        },
        "itBoR": "OajQW",
        "tMRzo": _0x141a0a(948, "#iH4"),
        "BIqdj": function (_0x3e9330, _0x17a605) {
          return _0x3e9330 === _0x17a605;
        },
        "KEZTr": _0x141a0a(1439, "IAun"),
        "idiZX": function (_0x3b157d, _0xcc11f6) {
          return _0x3b157d == _0xcc11f6;
        },
        "FkqNd": function (_0x22dbbf, _0x318248) {
          return _0x22dbbf === _0x318248;
        },
        "DOQNj": _0x141a0a(971, "8))q"),
        "VHzss": "Jkfsf",
        "BWJDS": function (_0x11c7ec, _0x2a417f) {
          return _0x11c7ec(_0x2a417f);
        },
        "gEfcJ": function (_0x41480e, _0x4546ad) {
          return _0x41480e !== _0x4546ad;
        },
        "OkZTx": function (_0x131323) {
          return _0x131323();
        },
        "zSQzj": _0x141a0a(1541, "!gld"),
        "bBxiB": _0x141a0a(515, "NvE7"),
        "ybNXJ": _0x141a0a(1504, "sneV"),
        "eMaZt": function (_0x1c9bcb, _0x234b25) {
          return _0x1c9bcb + _0x234b25;
        },
        "TfDEO": _0x141a0a(1314, "D]Qc"),
        "MAJIu": function (_0x5c4c87, _0x522d84) {
          return _0x5c4c87(_0x522d84);
        },
        "JMQwI": function (_0x2f2c97, _0x1707cf) {
          return _0x2f2c97 + _0x1707cf;
        },
        "QfYgd": function (_0x20f058, _0x28d19a) {
          return _0x20f058 * _0x28d19a;
        },
        "oOWJJ": function (_0x7b8adc, _0x35daec) {
          return _0x7b8adc + _0x35daec;
        },
        "umNBa": function (_0xb694f, _0xac97f8) {
          return _0xb694f / _0xac97f8;
        }
      };
    return new Promise(_0x2badea => {
      const _0x457b4c = _0x141a0a,
        _0x342f83 = {
          "ArTGv": function (_0x44dee4, _0x57b04a) {
            const _0x2eff46 = _0x4dd4;
            return _0xcd21d4[_0x2eff46(1078, "U%Xr")](_0x44dee4, _0x57b04a);
          },
          "ibflZ": function (_0x226ac8, _0x3cf11e) {
            const _0x1ecf4f = _0x4dd4;
            return _0xcd21d4[_0x1ecf4f(1136, "S4Mp")](_0x226ac8, _0x3cf11e);
          }
        };
      if (_0xcd21d4["zSQzj"] !== _0xcd21d4["bBxiB"]) {
        let _0xa6b828 = {
          "url": hostname + _0x457b4c(741, "9@rc") + this["iid"] + _0x457b4c(1049, "U%Xr") + this[_0x457b4c(467, "DL2D")] + _0x457b4c(1539, "$*Nv") + this["aid"] + "&app_name=" + this["app_name"] + _0x457b4c(1063, "DL2D") + this[_0x457b4c(442, "XE9O")],
          "headers": {
            "Host": host,
            "Content-Type": _0xcd21d4[_0x457b4c(1129, "OWbR")],
            "user-agent": this[_0x457b4c(611, "Pl2K")],
            "Cookie": _0xcd21d4[_0x457b4c(1415, "XE9O")](_0xcd21d4[_0x457b4c(864, "8))q")], this[_0x457b4c(1340, "4HSP")])
          },
          "body": _0x457b4c(909, "!gld") + _0xcd21d4["MAJIu"](parseInt, _0xcd21d4[_0x457b4c(437, "E0y6")](_0xcd21d4["JMQwI"](10000, _0xcd21d4[_0x457b4c(1051, "8q%e")](Math["random"](), 10000)), "")) + ",\"submit_time\":" + _0xcd21d4[_0x457b4c(759, "U%Xr")](parseInt, _0xcd21d4[_0x457b4c(1564, "U%Xr")](_0xcd21d4[_0x457b4c(508, "Pl2K")](new Date()[_0x457b4c(1357, "U%Xr")](), 1000), "")) + "}"
        };
        $["post"](_0xa6b828, async (_0x1f4e6e, _0x5723e6, _0x5a7930) => {
          const _0x1a75fd = _0x457b4c,
            _0x2bc925 = {
              "GcPDm": function (_0x6acc27, _0x50d06f) {
                const _0x3c9eb5 = _0x4dd4;
                return _0xcd21d4[_0x3c9eb5(1111, "As2o")](_0x6acc27, _0x50d06f);
              },
              "AHRmj": function (_0x3ad0e1, _0x1196ea) {
                const _0x44571d = _0x4dd4;
                return _0xcd21d4[_0x44571d(764, "XZTf")](_0x3ad0e1, _0x1196ea);
              }
            };
          if (_0xcd21d4[_0x1a75fd(1023, "TpdZ")](_0xcd21d4["itBoR"], _0xcd21d4["tMRzo"])) _0x342f83[_0x1a75fd(872, "XE9O")](_0x43d4c4, _0x1a75fd(449, "0jFM")), _0x342f83[_0x1a75fd(1251, "!P0$")](_0xd47d0d, _0x1a75fd(762, "j7Hy") + _0x4cd284 + "\uFF0C\u66F4\u65B0\u65F6\u95F4:" + _0x2f4252 + _0x1a75fd(1118, "6yqz"));else try {
            if (_0x1f4e6e) $["logErr"](_0x1f4e6e);else {
              if (_0xcd21d4[_0x1a75fd(530, "DL2D")](_0x1a75fd(656, "sRn*"), _0xcd21d4[_0x1a75fd(532, "k4ID")])) _0x1837d2["logErr"](_0x1cb4ef);else {
                let _0x2f53a4 = JSON[_0x1a75fd(1204, "xINJ")](_0x5a7930);
                if (_0xcd21d4[_0x1a75fd(1372, "@zHk")](_0x2f53a4["err_no"], 10004)) DoubleLog(_0x1a75fd(1220, "$*Nv") + this[_0x1a75fd(1525, "@zHk")] + _0x1a75fd(1300, "j7Hy"));else _0x2f53a4[_0x1a75fd(569, "mHsY")] == 0 ? _0xcd21d4[_0x1a75fd(899, "#iH4")](_0xcd21d4[_0x1a75fd(420, "As2o")], _0xcd21d4[_0x1a75fd(731, "Il4n")]) ? (DoubleLog(_0x1a75fd(585, "Q$[E") + this[_0x1a75fd(1237, "9@rc")] + _0x1a75fd(1266, "R61R") + _0x2f53a4[_0x1a75fd(1436, "c$RJ")][_0x1a75fd(834, "S4Mp")] + " \u6B65"), await this[_0x1a75fd(469, "mHsY")](2000)) : _0x2bc925[_0x1a75fd(901, "4HSP")](_0x479e64, _0x1a75fd(1003, "xINJ") + this[_0x1a75fd(1264, "4HSP")] + "\u3011\u5E7F\u544A\u8FFD\u52A0: 3\u6761\u7EBF\u8DEF\u5C1D\u8BD5\u5E7F\u544A\u8FFD\u52A0\u5931\u8D25\u7A0D\u540E\u518D\u8BD5") : _0xcd21d4[_0x1a75fd(781, "ELtf")](_0x1a75fd(1033, "Q$[E"), _0xcd21d4[_0x1a75fd(1086, "NvE7")]) ? _0x199b9c[_0x1a75fd(552, "Q$[E")](_0x357019) : _0xcd21d4["BWJDS"](DoubleLog, _0x1a75fd(1485, "6yqz") + this[_0x1a75fd(859, "aJEf")] + _0x1a75fd(1137, "S4Mp") + _0x2f53a4["err_tips"]);
              }
            }
          } catch (_0x81e3c4) {
            $[_0x1a75fd(1297, "HlZ6")](_0x81e3c4, _0x5723e6);
          } finally {
            _0xcd21d4["gEfcJ"](_0x1a75fd(419, "j7Hy"), _0x1a75fd(783, "ELtf")) ? _0x2bc925[_0x1a75fd(452, "8))q")](_0x7ccd70, _0x1a75fd(728, "sneV") + this[_0x1a75fd(411, "ELtf")] + _0x1a75fd(1147, "TpdZ") + _0x131d27["err_tips"]) : _0xcd21d4[_0x1a75fd(446, "4ifU")](_0x2badea);
          }
        }, _0x59fba9);
      } else _0x2e825f[_0x457b4c(503, "aJEf")](_0x2e5c95);
    });
  }
  async [_0x5a417e(780, "8q%e")](_0x23dab4 = 2000) {
    const _0x9ba6ff = _0x5a417e,
      _0x1be71c = {
        "bERGe": "zFrnb",
        "oOmbY": function (_0x4af86a, _0xd87c37) {
          return _0x4af86a == _0xd87c37;
        },
        "Sklda": function (_0x284a62, _0x4f331e) {
          return _0x284a62 !== _0x4f331e;
        },
        "uenDC": _0x9ba6ff(590, "CHZX"),
        "wrTgI": _0x9ba6ff(534, "5sE@")
      };
    return new Promise(_0x3fdce1 => {
      const _0x4671ee = _0x9ba6ff,
        _0x134042 = {
          "tDUQd": _0x1be71c["bERGe"],
          "haZUs": function (_0x38410c, _0x480f8e) {
            const _0x19888d = _0x4dd4;
            return _0x1be71c[_0x19888d(409, "Erl2")](_0x38410c, _0x480f8e);
          },
          "tCKlN": function (_0x2e364f) {
            return _0x2e364f();
          }
        };
      if (_0x1be71c["Sklda"](_0x1be71c[_0x4671ee(1015, "mHsY")], _0x1be71c[_0x4671ee(921, "T6Ff")])) _0xcab00e(_0x4671ee(665, "^^B2") + this[_0x4671ee(1211, "4ifU")] + "\u3011\u89C6\u9891\u5E7F\u544A: " + _0x5b504d[_0x4671ee(545, "j7Hy")]);else {
        let _0x459d98 = {
          "url": hostname + _0x4671ee(1548, "U%Xr") + this["iid"] + _0x4671ee(626, "Il4n") + this[_0x4671ee(1523, "Il4n")] + _0x4671ee(736, "!gld") + this[_0x4671ee(812, "!P0$")] + _0x4671ee(632, "!P0$") + this[_0x4671ee(942, "R61R")] + _0x4671ee(1081, "0jFM") + this["update_version_code"],
          "headers": {
            "Host": host,
            "Content-Type": _0x1be71c[_0x4671ee(784, "R61R")],
            "user-agent": this[_0x4671ee(738, "!P0$")],
            "Cookie": "sessionid=" + this[_0x4671ee(803, "aJEf")]
          },
          "body": _0x4671ee(593, "0jFM")
        };
        $[_0x4671ee(1493, "ql[[")](_0x459d98, async (_0x2ae1fa, _0x532e8a, _0x15a001) => {
          const _0x447947 = _0x4671ee;
          if (_0x134042[_0x447947(1016, "4HSP")] === _0x134042["tDUQd"]) try {
            if (_0x2ae1fa) $[_0x447947(1297, "HlZ6")](_0x2ae1fa);else {
              let _0x16c4ce = JSON["parse"](_0x15a001);
              _0x134042["haZUs"](_0x16c4ce[_0x447947(1390, "U%Xr")], 0) ? DoubleLog(_0x447947(630, "R61R") + this["index"] + _0x447947(1260, "D]Qc") + _0x16c4ce[_0x447947(1496, "8))q")][_0x447947(976, "8q%e")] + " \u6B65") : _0x447947(1191, "8))q") === _0x447947(917, "k4ID") ? _0x330113[_0x447947(1009, "4HSP")](_0x8bfcd5, _0x5b42cb) : DoubleLog(_0x447947(1388, "0qAp") + this[_0x447947(683, "OWbR")] + _0x447947(1337, "Il4n") + _0x16c4ce["err_tips"]);
            }
          } catch (_0x1ef2f3) {
            $[_0x447947(663, "TpdZ")](_0x1ef2f3, _0x532e8a);
          } finally {
            _0x134042[_0x447947(533, "KwiO")](_0x3fdce1);
          } else _0x30df9f["logErr"](_0x2c048f, _0x397c50);
        }, _0x23dab4);
      }
    });
  }
  async [_0x5a417e(765, "Il4n")](_0x39e362 = 2000) {
    const _0x582529 = _0x5a417e,
      _0x2bdc0a = {
        "XrLKU": _0x582529(615, "Pl2K"),
        "dhTOh": _0x582529(1088, "TpdZ"),
        "AIQjy": function (_0x2ee747, _0x46d011) {
          return _0x2ee747(_0x46d011);
        },
        "TgWeY": function (_0x5cbab1, _0x13925f) {
          return _0x5cbab1 == _0x13925f;
        },
        "zmaEN": function (_0x539484, _0x23db13) {
          return _0x539484 !== _0x23db13;
        },
        "tadAh": "hIxpz",
        "tEQur": function (_0x286922, _0x2229d7) {
          return _0x286922(_0x2229d7);
        },
        "VOphh": function (_0x585623) {
          return _0x585623();
        },
        "sphSB": _0x582529(949, "S4Mp"),
        "yatcl": function (_0x2a55cc, _0x9f31c) {
          return _0x2a55cc + _0x9f31c;
        },
        "sSGvT": _0x582529(848, "*A&H")
      };
    return new Promise(_0xe6110b => {
      const _0xbb138d = _0x582529,
        _0x610e0a = {
          "TuXOG": function (_0x47cbd6, _0x5245a5) {
            return _0x2bdc0a["TgWeY"](_0x47cbd6, _0x5245a5);
          },
          "hSLeK": function (_0x1172eb, _0x42f8dd) {
            const _0xe1b84b = _0x4dd4;
            return _0x2bdc0a[_0xe1b84b(1163, "TpdZ")](_0x1172eb, _0x42f8dd);
          },
          "XFmmL": function (_0x377709, _0xa7734e) {
            return _0x2bdc0a["AIQjy"](_0x377709, _0xa7734e);
          }
        };
      let _0xcd571b = {
        "url": hostname + _0xbb138d(968, "4ifU") + this["iid"] + "&device_id=" + this["device_id"] + _0xbb138d(1530, "sRn*") + this[_0xbb138d(1474, "4ifU")] + _0xbb138d(1246, "6yqz") + this[_0xbb138d(504, "@zHk")] + _0xbb138d(814, "IAun") + this[_0xbb138d(634, "8))q")] + "&device_platform=android&_rticket=" + timestamp + _0xbb138d(488, "mHsY") + times,
        "headers": {
          "Host": host,
          "Content-Type": _0x2bdc0a[_0xbb138d(999, "nK4s")],
          "user-agent": this[_0xbb138d(542, "$*Nv")],
          "Cookie": _0x2bdc0a[_0xbb138d(494, "8WT[")](_0x2bdc0a["sSGvT"], this[_0xbb138d(1241, "*A&H")])
        },
        "body": "{}"
      };
      $[_0xbb138d(1284, "!P0$")](_0xcd571b, async (_0x15311f, _0x3f47b9, _0x30cb7f) => {
        const _0xafd23c = _0xbb138d;
        try {
          if (_0x15311f) _0x2bdc0a[_0xafd23c(729, "NvE7")] !== _0xafd23c(1423, "xINJ") ? $[_0xafd23c(1500, "sneV")](_0x15311f) : _0x3c44c9(_0xafd23c(757, "5sE@") + this[_0xafd23c(1272, "As2o")] + _0xafd23c(499, "!gld") + _0x1c4d80["err_tips"]);else {
            let _0x4f269e = JSON[_0xafd23c(1549, "Erl2")](_0x30cb7f);
            if (_0x4f269e[_0xafd23c(633, "mHsY")] == _0x2bdc0a[_0xafd23c(649, "Pl2K")]) _0x2bdc0a["AIQjy"](DoubleLog, "\n \u274C \u3010" + this[_0xafd23c(655, "!P0$")] + _0xafd23c(1323, "ql[[")), await $["wait"](300), await this[_0xafd23c(706, "ELtf")](2000);else {
              if (_0x2bdc0a[_0xafd23c(581, "^^B2")](_0x4f269e[_0xafd23c(816, "XE9O")], 0)) this[_0xafd23c(602, "sneV")] = _0x4f269e[_0xafd23c(954, "Q$[E")]["excitation_ad_info"][_0xafd23c(1122, "OWbR")], this[_0xafd23c(1176, "ql[[")] = _0x4f269e[_0xafd23c(1155, "OWbR")]["excitation_ad_info"]["score_amount"], this["amount"] = _0x4f269e[_0xafd23c(1574, "sneV")][_0xafd23c(612, "Q$[E")], this[_0xafd23c(609, "As2o")] = _0x4f269e[_0xafd23c(1140, "9@rc")][_0xafd23c(1571, "*A&H")]["ad_id"], _0x2bdc0a[_0xafd23c(687, "XZTf")](DoubleLog, "\n \u2705 \u3010" + this[_0xafd23c(521, "D]Qc")] + _0xafd23c(1554, "Pl2K") + _0x4f269e[_0xafd23c(1524, "^^B2")][_0xafd23c(1335, "4ifU")] + _0xafd23c(1510, "IAun")), await $[_0xafd23c(1472, "NvE7")](300), await this[_0xafd23c(847, "KwiO")](2000);else {
                if (_0x2bdc0a[_0xafd23c(1465, "NvE7")](_0x2bdc0a["tadAh"], _0xafd23c(959, "DL2D"))) _0x2bdc0a[_0xafd23c(1132, "9@rc")](DoubleLog, "\n \u274C \u3010" + this[_0xafd23c(883, "ql[[")] + "\u3011\u6253\u5F00\u5B9D\u7BB1: " + _0x4f269e[_0xafd23c(798, "@zHk")]);else {
                  let _0xe87538 = _0x3355e5[_0xafd23c(1473, "mHsY")](_0x567249);
                  _0x610e0a[_0xafd23c(466, "U%Xr")](_0xe87538[_0xafd23c(1458, "nK4s")], 0) ? _0x610e0a[_0xafd23c(485, "*A&H")](_0x387cd8, _0xafd23c(559, "CHZX") + this[_0xafd23c(782, "Pl2K")] + "\u3011\u7B7E\u5230\u5E7F\u544A: \u83B7\u5F97 " + _0xe87538[_0xafd23c(1462, "@zHk")]["amount"] + _0xafd23c(800, "#iH4")) : _0x610e0a[_0xafd23c(562, "As2o")](_0x359a00, _0xafd23c(661, "OWbR") + this[_0xafd23c(427, "8WT[")] + _0xafd23c(1385, "!gld") + _0xe87538[_0xafd23c(550, "E0y6")]);
                }
              }
            }
          }
        } catch (_0x163fb4) {
          $["logErr"](_0x163fb4, _0x3f47b9);
        } finally {
          _0x2bdc0a[_0xafd23c(1287, "R61R")](_0xe6110b);
        }
      }, _0x39e362);
    });
  }
  async [_0x5a417e(529, "k4ID")](_0x14e8e5 = 2000) {
    const _0x48eb5b = _0x5a417e,
      _0x2bea1a = {
        "SbiNz": _0x48eb5b(547, "$*Nv"),
        "bkJoy": function (_0x56d7f5, _0xe9080) {
          return _0x56d7f5 == _0xe9080;
        },
        "VhpdY": "\u5F88\u9057\u61BE\uFF0C\u5956\u52B1\u6E9C\u8D70\u4E86",
        "RuSWG": function (_0x3ab3cc, _0x454ea5) {
          return _0x3ab3cc * _0x454ea5;
        },
        "lisMV": function (_0x331b57, _0x241989) {
          return _0x331b57(_0x241989);
        },
        "sKeYu": function (_0x4f928c) {
          return _0x4f928c();
        },
        "huKMZ": _0x48eb5b(534, "5sE@")
      };
    return new Promise(_0x3645ee => {
      const _0x20cd6f = _0x48eb5b,
        _0x410f39 = {
          "xOmjs": _0x2bea1a[_0x20cd6f(1519, "XE9O")],
          "kaJYP": _0x20cd6f(813, "Pl2K"),
          "bSpIE": function (_0x2c5646, _0x146196) {
            const _0x91dd43 = _0x20cd6f;
            return _0x2bea1a[_0x91dd43(785, "NvE7")](_0x2c5646, _0x146196);
          },
          "dRqzJ": _0x2bea1a["VhpdY"],
          "kakok": function (_0x210807, _0x4da912) {
            return _0x2bea1a["RuSWG"](_0x210807, _0x4da912);
          },
          "gsKRD": function (_0x2eeb00, _0x26b93d) {
            return _0x2eeb00 === _0x26b93d;
          },
          "yTPJy": "gYdpF",
          "GBEfl": function (_0x2afeb4, _0x122d9f) {
            return _0x2bea1a["bkJoy"](_0x2afeb4, _0x122d9f);
          },
          "bOdoj": function (_0x46b97a, _0x2c3694) {
            const _0x3301b3 = _0x20cd6f;
            return _0x2bea1a[_0x3301b3(1170, "#iH4")](_0x46b97a, _0x2c3694);
          },
          "NlZEL": function (_0x376c1) {
            const _0x14042b = _0x20cd6f;
            return _0x2bea1a[_0x14042b(828, "R61R")](_0x376c1);
          }
        };
      let _0x217352 = {
        "url": "https://aweme.snssdk.com/luckycat/aweme/v1/task/done/treasure_task?_request_from=web&iid=" + this[_0x20cd6f(991, "4HSP")] + _0x20cd6f(897, "#iH4") + this[_0x20cd6f(1166, "6yqz")] + _0x20cd6f(472, "IAun") + this[_0x20cd6f(845, "mHsY")] + _0x20cd6f(1320, "nK4s") + this[_0x20cd6f(1558, "sneV")] + _0x20cd6f(1134, "Q$[E") + this[_0x20cd6f(1114, "4HSP")] + _0x20cd6f(1233, "xINJ") + timestamp + "&ts=" + times,
        "headers": {
          "Host": _0x20cd6f(1304, "ELtf"),
          "Content-Type": _0x2bea1a[_0x20cd6f(1352, "xINJ")],
          "user-agent": this[_0x20cd6f(747, "ql[[")],
          "Cookie": _0x20cd6f(739, "KwiO") + this[_0x20cd6f(1334, "@zHk")]
        },
        "body": "{}"
      };
      $[_0x20cd6f(1158, "As2o")](_0x217352, async (_0x5d9b00, _0x4555a0, _0x42d52c) => {
        const _0x3a33ae = _0x20cd6f;
        try {
          if (_0x410f39[_0x3a33ae(418, "!P0$")] !== _0x410f39[_0x3a33ae(844, "*A&H")]) {
            if (_0x5d9b00) $[_0x3a33ae(770, "$*Nv")](_0x5d9b00);else {
              let _0x142105 = JSON[_0x3a33ae(1282, "#iH4")](_0x42d52c);
              if (_0x410f39[_0x3a33ae(1174, "E0y6")](_0x142105[_0x3a33ae(1376, "U%Xr")], _0x410f39[_0x3a33ae(1259, "5sE@")])) DoubleLog("\n \u274C \u3010" + this[_0x3a33ae(1420, "DL2D")] + "\u3011\u6253\u5F00\u5B9D\u7BB1: \u7F51\u7EDC\u95EE\u9898\u3010\u5207\u63622\u7EBF\u8DEF\u3011\u5C1D\u8BD5\u5F00\u5B9D\u7BB1"), await $[_0x3a33ae(737, "KwiO")](300), await this[_0x3a33ae(410, "HlZ6")](_0x410f39[_0x3a33ae(931, "S4Mp")](2, 1000));else {
                if (_0x410f39["gsKRD"](_0x3a33ae(1577, "sRn*"), _0x410f39[_0x3a33ae(421, "@zHk")])) {
                  if (_0x410f39["GBEfl"](_0x142105[_0x3a33ae(514, "0qAp")], 0)) {
                    const _0x5f1d38 = _0x3a33ae(1538, "0jFM")[_0x3a33ae(1299, "sneV")]("|");
                    let _0x4a0900 = 0;
                    while (!![]) {
                      switch (_0x5f1d38[_0x4a0900++]) {
                        case "0":
                          this["ad_id"] = _0x142105[_0x3a33ae(1498, "mHsY")]["excitation_ad_info"][_0x3a33ae(476, "9@rc")];
                          continue;
                        case "1":
                          _0x410f39[_0x3a33ae(645, "^^B2")](DoubleLog, "\n \u2705 \u3010" + this["index"] + _0x3a33ae(1529, "k4ID") + _0x142105[_0x3a33ae(1082, "!P0$")]["amount"] + _0x3a33ae(606, "NvE7"));
                          continue;
                        case "2":
                          this["amount"] = _0x142105[_0x3a33ae(1089, "CHZX")]["amount"];
                          continue;
                        case "3":
                          this["req_id"] = _0x142105["data"][_0x3a33ae(669, "^^B2")][_0x3a33ae(898, "XE9O")];
                          continue;
                        case "4":
                          this[_0x3a33ae(1144, "8WT[")] = _0x142105[_0x3a33ae(1224, "R61R")]["excitation_ad_info"][_0x3a33ae(1508, "^^B2")];
                          continue;
                        case "5":
                          await this["excitation_ad_treasure_box"](_0x410f39["kakok"](2, 1000));
                          continue;
                        case "6":
                          await $[_0x3a33ae(1325, "TpdZ")](300);
                          continue;
                      }
                      break;
                    }
                  } else _0x410f39[_0x3a33ae(641, "Pl2K")](DoubleLog, _0x3a33ae(1449, "ql[[") + this[_0x3a33ae(969, "j7Hy")] + _0x3a33ae(589, "As2o") + _0x142105[_0x3a33ae(639, "xINJ")]);
                } else {
                  let _0x4f065f = _0x456e55["parse"](_0x504a31);
                  _0x4f065f[_0x3a33ae(573, "8q%e")] == 0 ? _0x1383ce(_0x3a33ae(911, "HlZ6") + this[_0x3a33ae(924, "E0y6")] + _0x3a33ae(556, "Pl2K") + _0x4f065f[_0x3a33ae(756, "DL2D")]["income_data"][_0x3a33ae(936, "@zHk")] + _0x3a33ae(733, "nK4s") + _0x4f065f[_0x3a33ae(1574, "sneV")][_0x3a33ae(1365, "0qAp")][_0x3a33ae(1377, "4ifU")] / 100 + "\u5143") : _0x46ddd4("\n \u274C \u3010" + this[_0x3a33ae(879, "0jFM")] + _0x3a33ae(717, "R61R") + _0x4f065f[_0x3a33ae(465, "ql[[")]);
                }
              }
            }
          } else _0x12c255("\n \u2705 \u3010" + this["index"] + "\u3011\u91D1\u5E01\u6536\u76CA: " + _0x425448[_0x3a33ae(725, "S4Mp")]["income_data"]["amount1"] + "\u91D1\u5E01\uFF0C\u4F59\u989D:" + _0x33f2c9[_0x3a33ae(1526, "ql[[")][_0x3a33ae(486, "oSd%")][_0x3a33ae(788, "^^B2")] / 100 + "\u5143");
        } catch (_0xf32ffd) {
          $["logErr"](_0xf32ffd, _0x4555a0);
        } finally {
          _0x410f39[_0x3a33ae(1127, "c$RJ")](_0x3645ee);
        }
      }, _0x14e8e5);
    });
  }
  async [_0x5a417e(1268, "XZTf")](_0x34626e = 2000) {
    const _0x19ebe8 = _0x5a417e,
      _0x5b5695 = {
        "XcVyR": function (_0x5538f6, _0x1d67b9) {
          return _0x5538f6 !== _0x1d67b9;
        },
        "jteTU": _0x19ebe8(1368, "aJEf"),
        "ivJbB": function (_0x491cbf, _0x4cfb17) {
          return _0x491cbf !== _0x4cfb17;
        },
        "EpSbH": _0x19ebe8(1252, "nK4s"),
        "RaSrS": "pQlwn",
        "lSche": function (_0x1391ce, _0x4cd242) {
          return _0x1391ce(_0x4cd242);
        },
        "yqauQ": "bCZBi",
        "GSZbz": function (_0x393360, _0x2bab97) {
          return _0x393360 == _0x2bab97;
        },
        "ncWaL": function (_0x96ecfb, _0x3d028f) {
          return _0x96ecfb(_0x3d028f);
        },
        "WjwzU": function (_0x4b542f, _0x1cfcf2) {
          return _0x4b542f * _0x1cfcf2;
        },
        "ewwbQ": function (_0x28e2a2, _0x5a545c) {
          return _0x28e2a2(_0x5a545c);
        },
        "FdWRv": function (_0x5d24cd) {
          return _0x5d24cd();
        },
        "ufJtz": _0x19ebe8(1202, "c$RJ"),
        "rGAvh": function (_0x55a286, _0x550773) {
          return _0x55a286 + _0x550773;
        },
        "fziSS": _0x19ebe8(579, "0jFM")
      };
    return new Promise(_0x326eca => {
      const _0x23e2e6 = _0x19ebe8;
      let _0x494401 = {
        "url": _0x23e2e6(1466, "nK4s") + this[_0x23e2e6(1313, "5sE@")] + "&device_id=" + this[_0x23e2e6(1339, "OWbR")] + _0x23e2e6(1193, "k4ID") + this[_0x23e2e6(1247, "R61R")] + _0x23e2e6(1209, "sneV") + this[_0x23e2e6(1034, "8WT[")] + _0x23e2e6(1253, "NvE7") + this[_0x23e2e6(1043, "6yqz")] + _0x23e2e6(746, "8))q") + timestamp + _0x23e2e6(471, "Erl2") + times,
        "headers": {
          "Host": _0x5b5695[_0x23e2e6(853, "c$RJ")],
          "Content-Type": _0x23e2e6(949, "S4Mp"),
          "user-agent": this[_0x23e2e6(1515, "oSd%")],
          "Cookie": _0x5b5695[_0x23e2e6(1364, "4ifU")](_0x5b5695[_0x23e2e6(1531, "T6Ff")], this["sessionid"])
        },
        "body": "{}"
      };
      $["post"](_0x494401, async (_0x11f400, _0x4e7a1c, _0x30d057) => {
        const _0x4e6dfb = _0x23e2e6;
        try {
          if (_0x11f400) $["logErr"](_0x11f400);else {
            if (_0x5b5695["XcVyR"](_0x4e6dfb(1453, "As2o"), _0x5b5695[_0x4e6dfb(1452, "E0y6")])) _0x17a9cd("\n \u274C \u3010" + this["index"] + _0x4e6dfb(1046, "0qAp") + _0x579163["err_tips"]);else {
              let _0x70e786 = JSON[_0x4e6dfb(1204, "xINJ")](_0x30d057);
              _0x70e786[_0x4e6dfb(707, "*A&H")] == _0x4e6dfb(646, "mHsY") ? _0x5b5695[_0x4e6dfb(1098, "8))q")](_0x5b5695[_0x4e6dfb(1074, "4HSP")], _0x5b5695["RaSrS"]) ? _0x5b5695[_0x4e6dfb(558, "j7Hy")](DoubleLog, "\n \u274C \u3010" + this[_0x4e6dfb(772, "Il4n")] + _0x4e6dfb(998, "ql[[")) : _0x16cc8f["logErr"](_0x36257f) : _0x5b5695[_0x4e6dfb(919, "8WT[")](_0x5b5695[_0x4e6dfb(745, "xINJ")], "TRieH") ? _0x5b5695["GSZbz"](_0x70e786["err_no"], 0) ? (this["req_id"] = _0x70e786["data"][_0x4e6dfb(1499, "HlZ6")][_0x4e6dfb(416, "DL2D")], this[_0x4e6dfb(1066, "j7Hy")] = _0x70e786[_0x4e6dfb(1366, "4ifU")][_0x4e6dfb(1482, "S4Mp")][_0x4e6dfb(773, "T6Ff")], this[_0x4e6dfb(638, "8WT[")] = _0x70e786[_0x4e6dfb(1085, "5sE@")][_0x4e6dfb(1414, "XZTf")], this[_0x4e6dfb(618, "S4Mp")] = _0x70e786[_0x4e6dfb(1524, "^^B2")]["excitation_ad_info"][_0x4e6dfb(1027, "c$RJ")], _0x5b5695["ncWaL"](DoubleLog, "\n \u2705 \u3010" + this[_0x4e6dfb(978, "Erl2")] + "\u3011\u6253\u5F00\u5B9D\u7BB1: \u83B7\u5F97 " + _0x70e786[_0x4e6dfb(725, "S4Mp")][_0x4e6dfb(960, "ELtf")] + " \u91D1\u5E01"), await $[_0x4e6dfb(544, "Pl2K")](300), await this[_0x4e6dfb(680, "Pl2K")](_0x5b5695["WjwzU"](2, 1000))) : _0x5b5695[_0x4e6dfb(1380, "8WT[")](DoubleLog, "\n \u274C \u3010" + this[_0x4e6dfb(1349, "TpdZ")] + _0x4e6dfb(989, "U%Xr") + _0x70e786[_0x4e6dfb(1100, "$*Nv")]) : _0x11dbd6();
            }
          }
        } catch (_0x5c39da) {
          $[_0x4e6dfb(1060, "c$RJ")](_0x5c39da, _0x4e7a1c);
        } finally {
          _0x5b5695[_0x4e6dfb(1270, "XZTf")](_0x326eca);
        }
      }, _0x34626e);
    });
  }
  async [_0x5a417e(1120, "xINJ")](_0x278ee6 = 2000) {
    const _0x42f17e = _0x5a417e,
      _0x5454ad = {
        "UNkJU": function (_0x2b8df7, _0x3d1f4c) {
          return _0x2b8df7 !== _0x3d1f4c;
        },
        "zLTEf": "fRrdW",
        "KMzLy": _0x42f17e(902, "8WT["),
        "mwImT": _0x42f17e(604, "Pl2K"),
        "tYSaI": function (_0x17e623, _0x6a0d36) {
          return _0x17e623 == _0x6a0d36;
        },
        "UXLCd": function (_0x12a3dd, _0x154aec) {
          return _0x12a3dd(_0x154aec);
        },
        "qYfYz": function (_0x23d4b7, _0x251d6d) {
          return _0x23d4b7 === _0x251d6d;
        },
        "KhFto": _0x42f17e(492, "c$RJ"),
        "AJykX": "application/json; charset=utf-8",
        "agaMs": _0x42f17e(972, "Il4n")
      };
    return new Promise(_0x5e18f7 => {
      const _0x2a0b01 = _0x42f17e;
      let _0x41830c = {
        "url": hostname + "/luckycat/aweme/v1/task/done/excitation_ad_treasure_box?iid=" + this[_0x2a0b01(1478, "sneV")] + _0x2a0b01(908, "@zHk") + this[_0x2a0b01(580, "Pl2K")] + _0x2a0b01(835, "4HSP") + this["aid"] + "&app_name=" + this[_0x2a0b01(890, "Erl2")] + _0x2a0b01(1032, "mHsY") + this["update_version_code"] + _0x2a0b01(1395, "XE9O") + timestamp + _0x2a0b01(1021, "c$RJ") + times,
        "headers": {
          "Host": host,
          "Content-Type": _0x5454ad["AJykX"],
          "user-agent": this[_0x2a0b01(1197, "CHZX")],
          "Cookie": _0x5454ad["agaMs"] + this[_0x2a0b01(1139, "Il4n")]
        },
        "body": _0x2a0b01(453, "9@rc") + this["score_amount"] + "\",\"ad_rit\":\"" + this["ad_id"] + "\",\"ad_inspire\":\"{\"score_amount\":\"" + this["score_amount"] + _0x2a0b01(876, "sneV") + this[_0x2a0b01(970, "0qAp")] + _0x2a0b01(1205, "sneV") + this["req_id"] + _0x2a0b01(1488, "Il4n")
      };
      $[_0x2a0b01(805, "XZTf")](_0x41830c, async (_0x3d8d5b, _0x41df38, _0x231aaa) => {
        const _0x4f7efb = _0x2a0b01;
        try {
          if (_0x3d8d5b) $[_0x4f7efb(495, "ql[[")](_0x3d8d5b);else {
            if (_0x5454ad[_0x4f7efb(1477, "D]Qc")](_0x5454ad["zLTEf"], _0x5454ad[_0x4f7efb(946, "KwiO")])) _0x5165e2["logErr"](_0x59be54);else {
              let _0x2667e1 = JSON["parse"](_0x231aaa);
              _0x2667e1[_0x4f7efb(1234, "4HSP")] == _0x5454ad[_0x4f7efb(527, "8))q")] ? _0x4f7efb(796, "j7Hy") === _0x5454ad["mwImT"] ? _0x40ff54[_0x4f7efb(495, "ql[[")](_0x36e70d) : (await $[_0x4f7efb(951, "^^B2")](300), await this[_0x4f7efb(1047, "0jFM")](2000)) : _0x5454ad[_0x4f7efb(1165, "aJEf")](_0x2667e1["err_no"], 0) ? _0x5454ad[_0x4f7efb(1186, "$*Nv")](DoubleLog, _0x4f7efb(1067, "aJEf") + this[_0x4f7efb(744, "HlZ6")] + _0x4f7efb(1497, "U%Xr") + _0x2667e1[_0x4f7efb(686, "sRn*")][_0x4f7efb(1457, "^^B2")] + _0x4f7efb(1552, "XE9O")) : DoubleLog(_0x4f7efb(1324, "Pl2K") + this[_0x4f7efb(924, "E0y6")] + _0x4f7efb(1424, "Erl2") + _0x2667e1[_0x4f7efb(465, "ql[[")]);
            }
          }
        } catch (_0x398620) {
          _0x5454ad[_0x4f7efb(912, "TpdZ")]("KxVwj", _0x5454ad["KhFto"]) ? _0x394cab() : $[_0x4f7efb(752, "@zHk")](_0x398620, _0x41df38);
        } finally {
          _0x5e18f7();
        }
      }, _0x278ee6);
    });
  }
  async [_0x5a417e(1084, "sRn*")](_0x398b13 = 2000) {
    const _0x5811e5 = _0x5a417e,
      _0x3171ed = {
        "Sukih": function (_0x302d3b, _0x56df53) {
          return _0x302d3b(_0x56df53);
        },
        "dqcOh": function (_0x4e805d, _0xc41bb3) {
          return _0x4e805d === _0xc41bb3;
        },
        "QdnbT": function (_0x1a39fd, _0x132e0e) {
          return _0x1a39fd + _0x132e0e;
        },
        "jlGAB": function (_0x4e73af, _0x4b9936) {
          return _0x4e73af * _0x4b9936;
        },
        "FvtWy": function (_0x1142ca, _0xc529d3) {
          return _0x1142ca + _0xc529d3;
        },
        "lUcFp": function (_0x488755, _0x54bebc) {
          return _0x488755 * _0x54bebc;
        },
        "kfmTc": function (_0x287428, _0x4a56c7) {
          return _0x287428 - _0x4a56c7;
        },
        "jVxWt": _0x5811e5(1563, "NvE7"),
        "fUixs": function (_0x34cd22, _0x2b0922) {
          return _0x34cd22 == _0x2b0922;
        },
        "RgDNa": _0x5811e5(893, "sRn*"),
        "CrCgl": function (_0x4bb07d, _0x4c8191) {
          return _0x4bb07d * _0x4c8191;
        },
        "QqJnv": function (_0x10b563, _0x384e34) {
          return _0x10b563 == _0x384e34;
        },
        "PUeKe": function (_0x1ae8a3, _0x26961e) {
          return _0x1ae8a3 !== _0x26961e;
        },
        "VcKSW": _0x5811e5(505, "sneV"),
        "jnVPH": "EATZY",
        "JqSOl": function (_0x5c0bb7) {
          return _0x5c0bb7();
        },
        "cezyX": _0x5811e5(882, "mHsY")
      };
    return new Promise(_0x32abf6 => {
      const _0xcb1d11 = _0x5811e5,
        _0x90671a = {
          "DKGZc": function (_0x4f124b, _0x230a66) {
            return _0x3171ed["Sukih"](_0x4f124b, _0x230a66);
          }
        };
      if (_0x3171ed["dqcOh"](_0x3171ed["cezyX"], _0x3171ed[_0xcb1d11(617, "0qAp")])) {
        let _0x16c5c8 = {
          "url": hostname + _0xcb1d11(1071, "0qAp") + this[_0xcb1d11(718, "k4ID")] + "&device_id=" + this[_0xcb1d11(1292, "#iH4")] + _0xcb1d11(1099, "9@rc") + this["aid"] + _0xcb1d11(723, "S4Mp") + this["app_name"] + _0xcb1d11(1106, "D]Qc") + this[_0xcb1d11(591, "NvE7")] + _0xcb1d11(516, "@zHk") + timestamp + _0xcb1d11(671, "NvE7") + times,
          "headers": {
            "Host": host,
            "Content-Type": _0xcb1d11(1517, "R61R"),
            "user-agent": this[_0xcb1d11(1095, "4ifU")],
            "Cookie": _0x3171ed[_0xcb1d11(1421, "aJEf")]("sessionid=", this["sessionid"])
          },
          "body": _0xcb1d11(1008, "R61R")
        };
        $["post"](_0x16c5c8, async (_0x440fa1, _0x5cd958, _0x27e057) => {
          const _0x4fefdf = _0xcb1d11,
            _0x53405e = {
              "qbUoD": function (_0x45bef7, _0x57a6e4) {
                return _0x3171ed["Sukih"](_0x45bef7, _0x57a6e4);
              },
              "SMBdC": function (_0x28e3f5, _0x46f0a8) {
                const _0x25d998 = _0x4dd4;
                return _0x3171ed[_0x25d998(477, "9@rc")](_0x28e3f5, _0x46f0a8);
              },
              "jbKyT": function (_0x2030a9, _0x127134) {
                return _0x2030a9 - _0x127134;
              },
              "XtqMc": function (_0x332ff0, _0xd1de39) {
                return _0x332ff0 ** _0xd1de39;
              },
              "AGdZe": function (_0x146b16, _0x467554) {
                return _0x146b16 | _0x467554;
              },
              "oEJzo": function (_0x30c779, _0x192c34) {
                const _0x19e5d1 = _0x4dd4;
                return _0x3171ed[_0x19e5d1(637, "U%Xr")](_0x30c779, _0x192c34);
              },
              "umGQc": function (_0x277dba, _0x5024e0) {
                const _0x6010d9 = _0x4dd4;
                return _0x3171ed[_0x6010d9(982, "R61R")](_0x277dba, _0x5024e0);
              },
              "ktJea": function (_0x233031, _0x3803d4) {
                const _0x144343 = _0x4dd4;
                return _0x3171ed[_0x144343(881, "OWbR")](_0x233031, _0x3803d4);
              },
              "yJZgd": function (_0x2ebd5a, _0x5ab697) {
                const _0x3d5626 = _0x4dd4;
                return _0x3171ed[_0x3d5626(719, "oSd%")](_0x2ebd5a, _0x5ab697);
              },
              "UqbcI": function (_0x14a7e3, _0x39077e) {
                return _0x3171ed["kfmTc"](_0x14a7e3, _0x39077e);
              }
            };
          try {
            if (_0x440fa1) "LFWDx" === _0x3171ed[_0x4fefdf(1491, "4ifU")] ? _0x53405e[_0x4fefdf(660, "4ifU")](_0x493d7f, _0x4fefdf(1393, "DL2D") + this[_0x4fefdf(1031, "sneV")] + _0x4fefdf(415, "R61R") + _0x1b15c3[_0x4fefdf(517, "4ifU")]) : $["logErr"](_0x440fa1);else {
              let _0x231556 = JSON[_0x4fefdf(563, "sRn*")](_0x27e057);
              if (_0x3171ed[_0x4fefdf(483, "!P0$")](_0x231556[_0x4fefdf(1469, "0jFM")], 10007)) {
                if (_0x3171ed[_0x4fefdf(985, "5sE@")](_0x3171ed["RgDNa"], _0x4fefdf(1210, "xINJ"))) DoubleLog(_0x4fefdf(661, "OWbR") + this["index"] + _0x4fefdf(1214, "#iH4")), await $[_0x4fefdf(952, "T6Ff")](300), await this["video1"](_0x3171ed[_0x4fefdf(1298, "0jFM")](2, 1000));else try {
                  _0x22d8b7 = _0x2b13ff[_0x4fefdf(668, "sRn*")](/scriptVersion = "([\d\.]+)"/)[1], _0x14606d = _0x17354d["match"](/update_data = "(.*?)"/)[1];
                } catch (_0x33ed32) {
                  _0x348533[_0x4fefdf(1417, "0jFM")](_0x33ed32, _0x2843c7);
                } finally {
                  _0x3489a0();
                }
              } else {
                if (_0x3171ed["QqJnv"](_0x231556[_0x4fefdf(1458, "nK4s")], 0)) {
                  if (_0x3171ed[_0x4fefdf(1216, "XZTf")](_0x3171ed["VcKSW"], _0x3171ed[_0x4fefdf(1507, "8))q")])) {
                    if (_0x53405e[_0x4fefdf(1153, "T6Ff")](arguments[_0x4fefdf(659, "Il4n")], 0)) return _0x275c3f[_0x4fefdf(1110, "sneV")]();
                    if (!_0x4f4652) _0x251367 = _0x53405e[_0x4fefdf(423, "HlZ6")](_0x53405e[_0x4fefdf(578, "aJEf")](10, _0x53405e[_0x4fefdf(1050, "S4Mp")](_0x53405e[_0x4fefdf(1002, "*A&H")](_0x53405e["umGQc"](_0x5c545c[_0x4fefdf(983, "oSd%")](_0x54db69), _0x4f28fe[_0x4fefdf(1371, "*A&H")]), 1), 0)), 1);
                    return _0x44b67a["floor"](_0x53405e[_0x4fefdf(714, "IAun")](_0x53405e[_0x4fefdf(582, "k4ID")](_0xe3a77a["random"](), _0x53405e[_0x4fefdf(584, "^^B2")](_0x53405e["UqbcI"](_0x22e830, _0x38f141), 1)), _0x50b0c5));
                  } else _0x3171ed[_0x4fefdf(962, "S4Mp")](DoubleLog, _0x4fefdf(535, "oSd%") + this[_0x4fefdf(941, "6yqz")] + _0x4fefdf(1238, "TpdZ") + _0x231556[_0x4fefdf(519, "D]Qc")][_0x4fefdf(1361, "OWbR")] + _0x4fefdf(1316, "0jFM")), await $[_0x4fefdf(734, "9@rc")](30000), await this["one_more"](_0x3171ed[_0x4fefdf(840, "As2o")](2, 1000));
                } else _0x3171ed[_0x4fefdf(636, "@zHk")](DoubleLog, _0x4fefdf(665, "^^B2") + this[_0x4fefdf(1456, "5sE@")] + _0x4fefdf(478, "xINJ") + _0x231556["err_tips"]);
              }
            }
          } catch (_0x3320e8) {
            _0x3171ed[_0x4fefdf(1360, "nK4s")] === "hphZF" ? _0x94be3d() : $[_0x4fefdf(722, "CHZX")](_0x3320e8, _0x5cd958);
          } finally {
            _0x3171ed[_0x4fefdf(1080, "#iH4")](_0x32abf6);
          }
        }, _0x398b13);
      } else _0x90671a[_0xcb1d11(1341, "0jFM")](_0x19c430, _0xcb1d11(1220, "$*Nv") + this["index"] + _0xcb1d11(861, "KwiO") + _0x247d62[_0xcb1d11(539, "As2o")]);
    });
  }
  async [_0x5a417e(965, "Erl2")](_0x4b65a9 = 2000) {
    const _0x355504 = _0x5a417e,
      _0x4ecdbf = {
        "pXmKT": function (_0x5b3867, _0x355ccf, _0xda0baa) {
          return _0x5b3867(_0x355ccf, _0xda0baa);
        },
        "KUKFF": _0x355504(1556, "TpdZ"),
        "NEyJu": function (_0x158788, _0x43fee8) {
          return _0x158788 !== _0x43fee8;
        },
        "YOsIo": _0x355504(1326, "XE9O"),
        "HwmhE": _0x355504(1534, "8))q"),
        "cTRZY": "NIurx",
        "TjUUu": function (_0xacfa5c, _0x38f12a) {
          return _0xacfa5c * _0x38f12a;
        },
        "RFFrX": "DIQDT",
        "CIynp": function (_0x37fd25, _0x2c67e5) {
          return _0x37fd25(_0x2c67e5);
        },
        "BmCaA": function (_0x5f29ee, _0x5c0fa8) {
          return _0x5f29ee === _0x5c0fa8;
        },
        "lNfHG": function (_0x34c169) {
          return _0x34c169();
        },
        "iIejm": "api3-normal-c.amemv.com",
        "BQdJe": _0x355504(531, "$*Nv"),
        "vCfNT": function (_0xa642cb, _0x26b1e6) {
          return _0xa642cb + _0x26b1e6;
        },
        "eqlvN": "sessionid="
      };
    return new Promise(_0x44f581 => {
      const _0x3af0e6 = _0x355504,
        _0x530c0a = {
          "dkdDd": function (_0x32d2b4, _0x1214ed) {
            return _0x32d2b4(_0x1214ed);
          },
          "cwVex": function (_0x252281, _0x1359b3, _0x2b231e) {
            return _0x4ecdbf["pXmKT"](_0x252281, _0x1359b3, _0x2b231e);
          },
          "NKQrl": _0x3af0e6(1494, "k4ID"),
          "pUFGV": _0x4ecdbf[_0x3af0e6(1057, "T6Ff")],
          "TSAmx": _0x3af0e6(1187, "8))q"),
          "TemiF": function (_0x46dfd6, _0x121985) {
            const _0x2a412f = _0x3af0e6;
            return _0x4ecdbf[_0x2a412f(829, "As2o")](_0x46dfd6, _0x121985);
          },
          "NMHQC": function (_0x41d058, _0x375f6b) {
            return _0x41d058 === _0x375f6b;
          },
          "DZCsF": _0x4ecdbf[_0x3af0e6(1440, "5sE@")],
          "GCywD": _0x4ecdbf["HwmhE"],
          "USgGK": _0x4ecdbf[_0x3af0e6(475, "c$RJ")],
          "ueqKN": function (_0x2eee68, _0x4ded96) {
            return _0x2eee68(_0x4ded96);
          },
          "EetKx": function (_0x384ec5, _0x4c46c8) {
            const _0x582800 = _0x3af0e6;
            return _0x4ecdbf[_0x582800(1404, "ql[[")](_0x384ec5, _0x4c46c8);
          },
          "naNFb": "QYPzm",
          "ZBitU": _0x4ecdbf["RFFrX"],
          "AUBZS": function (_0x2ce16c, _0x1fc11c) {
            const _0x271631 = _0x3af0e6;
            return _0x4ecdbf[_0x271631(1543, "OWbR")](_0x2ce16c, _0x1fc11c);
          },
          "NkBWw": function (_0x1574d5, _0x2519f1) {
            return _0x1574d5 * _0x2519f1;
          },
          "wUDCZ": function (_0x52ca11, _0x325600) {
            return _0x4ecdbf["BmCaA"](_0x52ca11, _0x325600);
          },
          "pZuRL": "hdnsU",
          "LkfdT": function (_0x2d5a94) {
            const _0x1b0b82 = _0x3af0e6;
            return _0x4ecdbf[_0x1b0b82(1108, "U%Xr")](_0x2d5a94);
          }
        };
      let _0x3eb232 = {
        "url": _0x3af0e6(555, "@zHk") + this["iid"] + "&device_id=" + this["device_id"] + _0x3af0e6(1099, "9@rc") + this[_0x3af0e6(1275, "OWbR")] + "&app_name=" + this["app_name"] + "&device_platform=android&dpi=411&version_code=" + this[_0x3af0e6(953, "KwiO")] + _0x3af0e6(790, "OWbR") + timestamp + _0x3af0e6(441, "HlZ6") + times,
        "headers": {
          "Host": _0x4ecdbf[_0x3af0e6(652, "U%Xr")],
          "Content-Type": _0x4ecdbf[_0x3af0e6(538, "NvE7")],
          "user-agent": this["useragent"],
          "Cookie": _0x4ecdbf["vCfNT"](_0x4ecdbf[_0x3af0e6(676, "nK4s")], this[_0x3af0e6(892, "TpdZ")])
        },
        "body": "{\"task_key\":\"excitation_ad\",\"amount\":\"72\",\"ad_rit\":\"12315\",\"ad_inspire\":\"{\"score_amount\":\"72\",\"req_id\":\"20230413215357BBF890B249C35F1A6BBF\"}\",\"ad_alias_position\":\"task\",\"timeout\":4000}"
      };
      $[_0x3af0e6(910, "Pl2K")](_0x3eb232, async (_0x4a6102, _0x42b65a, _0x55527f) => {
        const _0x1e8aa1 = _0x3af0e6,
          _0x19c381 = {
            "NUjze": function (_0xaeb95f) {
              return _0xaeb95f();
            },
            "xPzGN": function (_0x5e0d3a, _0x2ff1aa) {
              const _0xf4623b = _0x4dd4;
              return _0x530c0a[_0xf4623b(1444, "k4ID")](_0x5e0d3a, _0x2ff1aa);
            },
            "Cpahm": function (_0x223a5e, _0xd2df8f, _0x4a63b5) {
              const _0x2dcfa5 = _0x4dd4;
              return _0x530c0a[_0x2dcfa5(852, "4ifU")](_0x223a5e, _0xd2df8f, _0x4a63b5);
            },
            "ghDkp": _0x530c0a["NKQrl"],
            "DwfBL": _0x1e8aa1(1345, "XE9O"),
            "jdSLQ": _0x530c0a["pUFGV"],
            "ehODX": function (_0x4e7812, _0x152378, _0x2f4b4a) {
              return _0x530c0a["cwVex"](_0x4e7812, _0x152378, _0x2f4b4a);
            },
            "hnjbN": _0x530c0a[_0x1e8aa1(670, "*A&H")]
          };
        if (_0x530c0a[_0x1e8aa1(1428, "9@rc")](_0x1e8aa1(988, "8q%e"), _0x1e8aa1(1207, "j7Hy"))) try {
          if (_0x530c0a[_0x1e8aa1(1025, "ql[[")](_0x530c0a[_0x1e8aa1(679, "mHsY")], _0x1e8aa1(1391, "XE9O"))) _0x19c381[_0x1e8aa1(1092, "DL2D")](_0x660592);else {
            if (_0x4a6102) {
              if (_0x530c0a[_0x1e8aa1(1342, "#iH4")] === _0x530c0a["USgGK"]) {
                _0x15a307[_0x1e8aa1(1562, "oSd%")] = _0x19c381["xPzGN"](_0x3a1de4, 40);
                const _0x2bbc81 = {
                  "167814": _0x1e8aa1(523, "c$RJ"),
                  "167841": _0x1e8aa1(1075, "Erl2"),
                  "167853": "10.2.0"
                };
                _0x2beec4[_0x1e8aa1(1093, "4ifU")] = _0x19c381[_0x1e8aa1(688, "4ifU")](_0x3cd7af, 13, 14) + "." + _0x19c381[_0x1e8aa1(1351, "S4Mp")](_0x52e25b, 3, 6) + "." + _0x19c381["Cpahm"](_0x435c76, 1, 3);
                let _0x2b2a4a = _0x1e8aa1(791, "IAun") + ["4g", "5g", _0x19c381["ghDkp"]][_0x19c381[_0x1e8aa1(963, "E0y6")](_0x177150, 0, 2)];
                return _0x4ff9f6[_0x1e8aa1(583, "c$RJ")] = "iPhone" + _0x19c381[_0x1e8aa1(1288, "8WT[")](_0x42e353, 9, 13) + "," + _0x13bd57(1, 3), _0x2e394e[_0x1e8aa1(1261, "^^B2")] = [_0x19c381["DwfBL"], _0x1e8aa1(1244, "XE9O"), _0x19c381[_0x1e8aa1(777, "4HSP")]][_0x19c381["ehODX"](_0x3cb655, 0, 2)], _0x35c926[_0x1e8aa1(1559, "R61R")] = _0x2bbc81[_0x1227ac[_0x1e8aa1(1514, "xINJ")]], _0x1e8aa1(1037, "NvE7") + _0x1a6146[_0x1e8aa1(526, "$*Nv")] + ";" + _0x330a61[_0x1e8aa1(820, "HlZ6")] + ";" + _0xfd37ba[_0x1e8aa1(1354, "0qAp")] + _0x1e8aa1(849, "5sE@") + _0x2b2a4a + _0x1e8aa1(916, "sneV") + _0x280de2["mobile"] + ";addressid/;appBuild/" + _0x215015["build"] + _0x1e8aa1(1278, "T6Ff") + _0x31ddb5["osVersion"][_0x1e8aa1(1254, "T6Ff")](/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
              } else $["logErr"](_0x4a6102);
            } else {
              let _0xe11c1e = JSON[_0x1e8aa1(1535, "aJEf")](_0x55527f);
              _0xe11c1e[_0x1e8aa1(1221, "ELtf")] == 10007 ? (_0x530c0a[_0x1e8aa1(932, "oSd%")](DoubleLog, "\n \u274C \u3010" + this[_0x1e8aa1(411, "ELtf")] + _0x1e8aa1(802, "OWbR")), await $["wait"](300), await this[_0x1e8aa1(698, "mHsY")](_0x530c0a["EetKx"](2, 1000))) : _0xe11c1e[_0x1e8aa1(875, "As2o")] == 0 ? _0x530c0a[_0x1e8aa1(1551, "8))q")](_0x530c0a[_0x1e8aa1(650, "^^B2")], _0x530c0a[_0x1e8aa1(1077, "S4Mp")]) ? (_0x530c0a[_0x1e8aa1(1492, "HlZ6")](DoubleLog, "\n \u2705 \u3010" + this["index"] + _0x1e8aa1(928, "!gld") + _0xe11c1e["data"][_0x1e8aa1(1185, "*A&H")] + " \u91D1\u5E01"), await $["wait"](30000), await this[_0x1e8aa1(1438, "sneV")](_0x530c0a[_0x1e8aa1(1487, "^^B2")](2, 1000))) : _0x1a1547[_0x1e8aa1(557, "E0y6")](_0x3b93f5) : _0x530c0a[_0x1e8aa1(548, "mHsY")](DoubleLog, _0x1e8aa1(1449, "ql[[") + this[_0x1e8aa1(978, "Erl2")] + "\u3011\u89C6\u9891\u5E7F\u544A: " + _0xe11c1e[_0x1e8aa1(520, "5sE@")]);
            }
          }
        } catch (_0x4fd38e) {
          $[_0x1e8aa1(1073, "8))q")](_0x4fd38e, _0x42b65a);
        } finally {
          if (_0x530c0a[_0x1e8aa1(1249, "Erl2")](_0x1e8aa1(1000, "U%Xr"), _0x530c0a["pZuRL"])) return _0x2a6771[_0x1e8aa1(623, "Q$[E")](_0x19c381[_0x1e8aa1(716, "5sE@")], _0x107353 + "ms, \u907F\u514D\u5927\u5BB6\u8FD0\u884C\u65F6\u95F4\u4E00\u6837"), _0x26c355;else _0x530c0a[_0x1e8aa1(774, "oSd%")](_0x44f581);
        } else _0x357cb3[_0x1e8aa1(1501, "0qAp")](_0xc0acdc, _0x292e4b);
      }, _0x4b65a9);
    });
  }
  async [_0x5a417e(760, "ql[[")](_0x2b2f89 = 2000) {
    const _0x360b5b = _0x5a417e,
      _0x381be4 = {
        "rfMbV": function (_0x35ce57, _0x4352a0) {
          return _0x35ce57(_0x4352a0);
        },
        "QQaET": "LXnFK",
        "dLrhQ": function (_0x127295, _0x3fd66e) {
          return _0x127295 !== _0x3fd66e;
        },
        "eVzEi": _0x360b5b(1124, "S4Mp"),
        "JklVl": function (_0x33ccb1, _0x58f7cf) {
          return _0x33ccb1 == _0x58f7cf;
        },
        "NugIX": _0x360b5b(1382, "j7Hy"),
        "dqnjQ": "pBldR",
        "OOZeh": function (_0x22a6e3, _0x868518) {
          return _0x22a6e3(_0x868518);
        },
        "iOBLe": function (_0x5c6591, _0x43e634) {
          return _0x5c6591 !== _0x43e634;
        },
        "bbQXt": "HElEt",
        "RhAHO": function (_0x2c372f, _0x201b14) {
          return _0x2c372f(_0x201b14);
        },
        "tGFrF": function (_0xcfbb2a, _0x4e148a) {
          return _0xcfbb2a * _0x4e148a;
        },
        "llPmI": _0x360b5b(958, "Erl2"),
        "bPhqM": "VYHZr",
        "CPyxr": function (_0x1cf9d6) {
          return _0x1cf9d6();
        },
        "qVhzR": function (_0x4da1f7, _0x4102ab) {
          return _0x4da1f7 === _0x4102ab;
        },
        "EmCYt": _0x360b5b(749, "9@rc"),
        "alMMk": _0x360b5b(1460, "T6Ff"),
        "DBNKN": _0x360b5b(1479, "Pl2K")
      };
    return new Promise(_0x2f53c7 => {
      const _0x5998de = _0x360b5b;
      if (_0x381be4[_0x5998de(947, "DL2D")](_0x381be4[_0x5998de(1102, "nK4s")], _0x381be4[_0x5998de(702, "^^B2")])) _0x277d9f[_0x5998de(1512, "XZTf")](_0xb55f96);else {
        let _0x35a96c = {
          "url": _0x5998de(1566, "Pl2K") + this[_0x5998de(1017, "T6Ff")] + _0x5998de(1546, "NvE7") + this[_0x5998de(567, "T6Ff")] + _0x5998de(1161, "CHZX") + this[_0x5998de(1247, "R61R")] + _0x5998de(1302, "Erl2") + this["app_name"] + _0x5998de(832, "ELtf") + this["update_version_code"] + "&_rticket=" + timestamp + _0x5998de(694, "IAun") + times,
          "headers": {
            "Host": "aweme.snssdk.com",
            "Content-Type": "application/json; charset=utf-8",
            "user-agent": this[_0x5998de(1142, "U%Xr")],
            "Cookie": _0x381be4[_0x5998de(1045, "Pl2K")] + this["sessionid"]
          },
          "body": _0x5998de(1359, "xINJ")
        };
        $[_0x5998de(977, "6yqz")](_0x35a96c, async (_0x4fd05a, _0x1e6a97, _0x28a110) => {
          const _0x183570 = _0x5998de,
            _0xff84ac = {
              "ySnBq": function (_0xc17c68, _0xb70565) {
                const _0x318c02 = _0x4dd4;
                return _0x381be4[_0x318c02(1020, "nK4s")](_0xc17c68, _0xb70565);
              }
            };
          if (_0x183570(705, "aJEf") === _0x381be4[_0x183570(1279, "j7Hy")]) _0xe9c386();else try {
            if (_0x4fd05a) _0x381be4[_0x183570(967, "!P0$")]("SjeSu", _0x381be4[_0x183570(1240, "U%Xr")]) ? _0x2f9896("\n \u274C \u3010" + this["index"] + _0x183570(412, "8))q") + _0x2ed112[_0x183570(1402, "Il4n")]) : $[_0x183570(462, "8q%e")](_0x4fd05a);else {
              let _0x50990f = JSON[_0x183570(1204, "xINJ")](_0x28a110);
              _0x381be4[_0x183570(525, "c$RJ")](_0x50990f[_0x183570(868, "TpdZ")], 10007) ? _0x381be4[_0x183570(1291, "!gld")] === _0x381be4["dqnjQ"] ? _0x3b3ff5[_0x183570(495, "ql[[")](_0x440185, _0x412ad9) : _0x381be4[_0x183570(1445, "aJEf")](DoubleLog, _0x183570(554, "#iH4") + this[_0x183570(1456, "5sE@")] + _0x183570(1040, "#iH4")) : _0x381be4[_0x183570(631, "4ifU")](_0x50990f["err_no"], 0) ? _0x381be4["iOBLe"](_0x381be4[_0x183570(473, "sRn*")], _0x183570(824, "aJEf")) ? (_0x381be4["RhAHO"](DoubleLog, _0x183570(940, "KwiO") + this[_0x183570(1068, "Q$[E")] + _0x183570(1065, "T6Ff") + _0x50990f[_0x183570(857, "As2o")][_0x183570(787, "oSd%")] + _0x183570(695, "DL2D")), await $[_0x183570(1013, "R61R")](30000), await this["one_more"](_0x381be4[_0x183570(1396, "6yqz")](2, 1000))) : _0x3f0c1d[_0x183570(1235, "sRn*")](_0x4b6ce5, _0x37f676) : DoubleLog(_0x183570(554, "#iH4") + this["index"] + _0x183570(1130, "ql[[") + _0x50990f["err_tips"]);
            }
          } catch (_0x64b867) {
            "xymwS" !== _0x381be4["llPmI"] ? $[_0x183570(1500, "sneV")](_0x64b867, _0x1e6a97) : _0x22be6d();
          } finally {
            if (_0x183570(825, "0qAp") !== _0x381be4[_0x183570(710, "HlZ6")]) {
              let _0x31696d = _0x34a8f3[_0x183570(1116, "XZTf")](_0x14a8eb);
              _0x31696d["err_no"] == 0 ? _0xff84ac["ySnBq"](_0x5c8e37, _0x183570(1019, "*A&H") + this["index"] + _0x183570(920, "sneV") + _0x31696d[_0x183570(1574, "sneV")]["reward_amount"] + " \u6B65") : _0xfe24e5(_0x183570(438, "8))q") + this["index"] + "\u3011\u6B65\u6570\u5956\u52B1: " + _0x31696d[_0x183570(1131, "Erl2")]);
            } else _0x381be4["CPyxr"](_0x2f53c7);
          }
        }, _0x2b2f89);
      }
    });
  }
  async ["one_more"](_0x3d14b2 = 2000) {
    const _0x545ea0 = _0x5a417e,
      _0x9780fe = {
        "aVpCX": function (_0x45bfea, _0x11cd59) {
          return _0x45bfea !== _0x11cd59;
        },
        "INBua": function (_0x5233cf, _0x23b049) {
          return _0x5233cf !== _0x23b049;
        },
        "DQGnK": "VAuFH",
        "xQQqP": "\u5F88\u9057\u61BE\uFF0C\u5956\u52B1\u6E9C\u8D70\u4E86",
        "yXCWR": function (_0x126be6, _0xbff27b) {
          return _0x126be6 * _0xbff27b;
        },
        "URCLK": function (_0x576570, _0x520bbe) {
          return _0x576570 == _0x520bbe;
        },
        "hDGqE": "qKtJV",
        "kdFzN": _0x545ea0(1505, "8WT["),
        "yAgum": function (_0x5ee7ca, _0x275f9c) {
          return _0x5ee7ca === _0x275f9c;
        },
        "HTvfA": _0x545ea0(821, "k4ID"),
        "jHZyW": "MtXPr",
        "dQVoV": _0x545ea0(1504, "sneV"),
        "WPZky": function (_0x4e4a71, _0x19eedc) {
          return _0x4e4a71 + _0x19eedc;
        },
        "sPlOb": _0x545ea0(1490, "^^B2")
      };
    return new Promise(_0x4600a5 => {
      const _0x21f694 = _0x545ea0,
        _0x3fd051 = {
          "StalB": function (_0x212e82, _0x33ee09) {
            const _0x291e60 = _0x4dd4;
            return _0x9780fe[_0x291e60(498, "ELtf")](_0x212e82, _0x33ee09);
          },
          "YDvvl": function (_0x40722b, _0x16ceca) {
            const _0x46cf43 = _0x4dd4;
            return _0x9780fe[_0x46cf43(564, "sneV")](_0x40722b, _0x16ceca);
          },
          "XvweP": _0x9780fe[_0x21f694(1448, "0qAp")],
          "xAYON": _0x9780fe[_0x21f694(417, "k4ID")],
          "gHvAP": function (_0x160bdc, _0x92fe74) {
            return _0x160bdc(_0x92fe74);
          },
          "frYtd": function (_0x5f8c6b, _0x246c36) {
            return _0x9780fe["yXCWR"](_0x5f8c6b, _0x246c36);
          },
          "iWmED": function (_0x2cc029, _0x5e9f85) {
            const _0x675e5c = _0x21f694;
            return _0x9780fe[_0x675e5c(1443, "S4Mp")](_0x2cc029, _0x5e9f85);
          },
          "dYsMr": function (_0xd73755, _0x3bab8c) {
            const _0x452aa7 = _0x21f694;
            return _0x9780fe[_0x452aa7(1083, "KwiO")](_0xd73755, _0x3bab8c);
          },
          "aERvx": _0x9780fe[_0x21f694(565, "0jFM")],
          "cBJkp": function (_0x4290a0, _0x34fa3e) {
            return _0x4290a0(_0x34fa3e);
          },
          "AvLXp": function (_0x503e33, _0x44eb76) {
            const _0x5bdd27 = _0x21f694;
            return _0x9780fe[_0x5bdd27(564, "sneV")](_0x503e33, _0x44eb76);
          },
          "nucMZ": _0x21f694(1447, "c$RJ"),
          "oUNyU": _0x9780fe[_0x21f694(712, "^^B2")],
          "FSTDB": function (_0x2d6f5d, _0x30714b) {
            return _0x9780fe["aVpCX"](_0x2d6f5d, _0x30714b);
          },
          "dFMey": function (_0x59f2d9) {
            return _0x59f2d9();
          }
        };
      if (_0x9780fe["yAgum"](_0x9780fe[_0x21f694(1056, "8WT[")], _0x9780fe[_0x21f694(1544, "8q%e")])) _0x4159ad[_0x21f694(1009, "4HSP")](_0x29a464, _0x5aa4c4);else {
        let _0x22c989 = {
          "url": hostname + _0x21f694(1311, "As2o") + this[_0x21f694(684, "8q%e")] + "&device_id=" + this[_0x21f694(622, "@zHk")] + _0x21f694(1286, "oSd%") + this[_0x21f694(1258, "9@rc")] + _0x21f694(1463, "KwiO") + this["app_name"] + "&version_code=" + this[_0x21f694(953, "KwiO")],
          "headers": {
            "Host": host,
            "Content-Type": _0x9780fe[_0x21f694(1454, "Il4n")],
            "user-agent": this["useragent"],
            "Cookie": _0x9780fe[_0x21f694(1192, "S4Mp")](_0x9780fe["sPlOb"], this[_0x21f694(1394, "ql[[")])
          },
          "body": _0x21f694(1218, "Q$[E")
        };
        $[_0x21f694(889, "ELtf")](_0x22c989, async (_0x3eced1, _0x503f34, _0x3cb48b) => {
          const _0x13090e = _0x21f694;
          if (_0x3fd051["StalB"](_0x13090e(878, "ELtf"), _0x13090e(1206, "HlZ6"))) _0x1a1cc9[_0x13090e(1348, "^^B2")](_0x1f6e0a, _0x4cea00);else try {
            if (_0x3eced1) _0x3fd051[_0x13090e(1113, "xINJ")](_0x3fd051[_0x13090e(1375, "mHsY")], _0x13090e(724, "$*Nv")) ? _0x5d304d(_0x13090e(586, "NvE7") + this[_0x13090e(994, "^^B2")] + "\u3011\u4ECA\u65E5\u6B65\u6570: " + _0x168c97[_0x13090e(693, "Q$[E")]) : $[_0x13090e(513, "NvE7")](_0x3eced1);else {
              let _0x500501 = JSON[_0x13090e(708, "E0y6")](_0x3cb48b);
              _0x500501["err_tips"] == _0x3fd051[_0x13090e(711, "R61R")] ? (_0x3fd051["gHvAP"](DoubleLog, "\n \u274C \u3010" + this["index"] + _0x13090e(1076, "Q$[E")), await $[_0x13090e(1483, "Q$[E")](300), await this[_0x13090e(428, "5sE@")](_0x3fd051[_0x13090e(1355, "D]Qc")](2, 1000))) : _0x3fd051[_0x13090e(1055, "0qAp")](_0x500501["err_no"], 0) ? (_0x3fd051["gHvAP"](DoubleLog, _0x13090e(1109, "8q%e") + this[_0x13090e(1039, "$*Nv")] + "\u3011\u5E7F\u544A\u8FFD\u52A0: \u83B7\u5F97 " + _0x500501["data"]["amount"] + _0x13090e(635, "j7Hy")), await $[_0x13090e(1317, "E0y6")](30000), await this["one_more"](2000)) : _0x3fd051[_0x13090e(943, "Pl2K")](_0x13090e(1528, "XE9O"), _0x3fd051[_0x13090e(1133, "$*Nv")]) ? _0x3fd051[_0x13090e(1178, "#iH4")](DoubleLog, _0x13090e(422, "!gld") + this["index"] + "\u3011\u5E7F\u544A\u8FFD\u52A0: " + _0x500501[_0x13090e(1550, "XZTf")]) : _0x45e8ba();
            }
          } catch (_0x102ee8) {
            _0x3fd051[_0x13090e(1431, "OWbR")](_0x3fd051["nucMZ"], _0x3fd051[_0x13090e(537, "Il4n")]) ? $[_0x13090e(445, "DL2D")](_0x102ee8, _0x503f34) : _0x10dcfb["logErr"](_0x3e2d8f, _0x5d3c3e);
          } finally {
            _0x3fd051[_0x13090e(1307, "0jFM")](_0x13090e(1540, "IAun"), _0x13090e(1427, "D]Qc")) ? _0x3fd051["dFMey"](_0x4600a5) : _0x4ca56f(_0x13090e(585, "Q$[E") + this["index"] + _0x13090e(1362, "c$RJ") + _0x2defc0[_0x13090e(1097, "NvE7")]["today_step"] + _0x13090e(776, "k4ID") + _0x25abfe[_0x13090e(1242, "U%Xr")]["today_step_reward"][_0x13090e(858, "j7Hy")] + "\u91D1\u5E01");
          }
        }, _0x3d14b2);
      }
    });
  }
  async [_0x5a417e(1386, "NvE7")](_0x4b4f06 = 2000) {
    const _0x5b28e8 = _0x5a417e,
      _0x1ddda3 = {
        "MhFHE": function (_0x37d7d3, _0x4d0a95) {
          return _0x37d7d3(_0x4d0a95);
        },
        "ByoYK": function (_0x2ac9c2, _0x436107) {
          return _0x2ac9c2 === _0x436107;
        },
        "CqGof": _0x5b28e8(640, "$*Nv"),
        "Kcaml": function (_0x4fca69, _0x414335) {
          return _0x4fca69 == _0x414335;
        },
        "AKbhJ": _0x5b28e8(867, "@zHk"),
        "IDQST": function (_0x1dc8dc, _0x2f9a02) {
          return _0x1dc8dc * _0x2f9a02;
        },
        "TuXuu": function (_0x5b2e9c, _0x3ec9cb) {
          return _0x5b2e9c == _0x3ec9cb;
        },
        "pVFsb": function (_0x3ccfa5, _0x4f889d) {
          return _0x3ccfa5(_0x4f889d);
        },
        "GQgyw": function (_0x976af8, _0x29bbfb) {
          return _0x976af8(_0x29bbfb);
        },
        "PGjBw": function (_0x3cfbf1, _0x4fbda9) {
          return _0x3cfbf1 === _0x4fbda9;
        },
        "TMdwo": function (_0x348b23) {
          return _0x348b23();
        },
        "uyOZK": _0x5b28e8(1542, "0jFM")
      };
    return new Promise(_0xbea86b => {
      const _0x48b908 = _0x5b28e8,
        _0x4ae929 = {
          "GOrnb": function (_0x3200d8, _0xb05e9d) {
            return _0x3200d8(_0xb05e9d);
          },
          "jwOlY": function (_0x2f482a) {
            const _0x4e145c = _0x4dd4;
            return _0x1ddda3[_0x4e145c(628, "Pl2K")](_0x2f482a);
          }
        };
      let _0x478245 = {
        "url": _0x48b908(1064, "KwiO") + this[_0x48b908(1248, "KwiO")] + "&device_id=" + this[_0x48b908(501, "Erl2")] + "&aid=" + this[_0x48b908(607, "#iH4")] + "&app_name=" + this["app_name"] + _0x48b908(905, "6yqz") + this[_0x48b908(1308, "!gld")],
        "headers": {
          "Host": "api3-normal-c.amemv.com",
          "Content-Type": _0x1ddda3["uyOZK"],
          "user-agent": this["useragent"],
          "Cookie": _0x48b908(480, "sneV") + this[_0x48b908(1394, "ql[[")]
        },
        "body": _0x48b908(644, "mHsY")
      };
      $[_0x48b908(805, "XZTf")](_0x478245, async (_0x28ebef, _0x27f23f, _0x2a4b40) => {
        const _0x3b261b = _0x48b908,
          _0x54e804 = {
            "LKtQm": function (_0x5f480c, _0xa21db6) {
              const _0x1a46d8 = _0x4dd4;
              return _0x1ddda3[_0x1a46d8(430, "U%Xr")](_0x5f480c, _0xa21db6);
            }
          };
        try {
          if (_0x1ddda3[_0x3b261b(735, "!P0$")](_0x3b261b(1446, "E0y6"), "yEFmw")) _0x4ae929[_0x3b261b(709, "CHZX")](_0x1c7121, _0x3b261b(560, "4HSP") + this[_0x3b261b(521, "D]Qc")] + _0x3b261b(1227, "j7Hy") + _0x1cf230[_0x3b261b(1329, "D]Qc")]);else {
            if (_0x28ebef) $[_0x3b261b(752, "@zHk")](_0x28ebef);else {
              if (_0x1ddda3[_0x3b261b(509, "Pl2K")](_0x1ddda3[_0x3b261b(1173, "nK4s")], _0x1ddda3[_0x3b261b(1401, "ql[[")])) {
                let _0x1b19c0 = JSON[_0x3b261b(1473, "mHsY")](_0x2a4b40);
                _0x1ddda3[_0x3b261b(885, "9@rc")](_0x1b19c0[_0x3b261b(624, "XE9O")], _0x1ddda3[_0x3b261b(1532, "DL2D")]) ? (DoubleLog(_0x3b261b(1220, "$*Nv") + this[_0x3b261b(575, "8q%e")] + "\u3011\u5E7F\u544A\u8FFD\u52A0: \u7F51\u7EDC\u95EE\u9898\u3010\u5207\u63622\u7EBF\u8DEF\u3011\u5C1D\u8BD5\u8FFD\u52A0"), await $[_0x3b261b(654, "OWbR")](300), await this["one_more2"](_0x1ddda3[_0x3b261b(1145, "NvE7")](2, 1000))) : _0x1ddda3[_0x3b261b(1495, "E0y6")](_0x1b19c0["err_no"], 0) ? (_0x1ddda3[_0x3b261b(846, "!gld")](DoubleLog, "\n \u2705 \u3010" + this["index"] + "\u3011\u5E7F\u544A\u8FFD\u52A0: \u83B7\u5F97 " + _0x1b19c0[_0x3b261b(1242, "U%Xr")]["amount"] + " \u91D1\u5E01"), await $[_0x3b261b(1325, "TpdZ")](30000), await this[_0x3b261b(1169, "6yqz")](_0x1ddda3["IDQST"](2, 1000))) : _0x1ddda3[_0x3b261b(1516, "oSd%")](DoubleLog, _0x3b261b(1220, "$*Nv") + this["index"] + _0x3b261b(1215, "xINJ") + _0x1b19c0[_0x3b261b(667, "8WT[")]);
              } else _0x54e804["LKtQm"](_0x3a919a, "\n \u274C \u3010" + this[_0x3b261b(782, "Pl2K")] + _0x3b261b(625, "XZTf") + _0x4112dd["err_tips"]);
            }
          }
        } catch (_0x531558) {
          $[_0x3b261b(869, "ELtf")](_0x531558, _0x27f23f);
        } finally {
          _0x1ddda3[_0x3b261b(807, "4ifU")](_0x3b261b(981, "oSd%"), _0x3b261b(811, "4ifU")) ? _0x4ae929[_0x3b261b(596, "D]Qc")](_0x4de479) : _0x1ddda3[_0x3b261b(862, "U%Xr")](_0xbea86b);
        }
      }, _0x4b4f06);
    });
  }
  async [_0x5a417e(1054, "!gld")](_0x34dee7 = 2000) {
    const _0xad2e47 = _0x5a417e,
      _0x3fad11 = {
        "iQiHj": function (_0x3ce86b, _0x51663f) {
          return _0x3ce86b * _0x51663f;
        },
        "zhsKH": function (_0x561530, _0x5e1722) {
          return _0x561530 === _0x5e1722;
        },
        "YSbQq": function (_0x36e6d7, _0x50b37b) {
          return _0x36e6d7 == _0x50b37b;
        },
        "XFjRJ": _0xad2e47(1123, "!gld"),
        "aagvQ": function (_0x55c57d, _0x4d3a4e) {
          return _0x55c57d(_0x4d3a4e);
        },
        "MJgxQ": _0xad2e47(1442, "j7Hy"),
        "NBzBr": "WYwpy",
        "kpERL": function (_0x39f997, _0x25c78b) {
          return _0x39f997(_0x25c78b);
        },
        "DXxXb": function (_0x57b438, _0x59dda2) {
          return _0x57b438 * _0x59dda2;
        },
        "urPhu": _0xad2e47(806, "DL2D"),
        "QistL": "FjzxF",
        "vnmSf": _0xad2e47(1437, "NvE7"),
        "FqYOz": function (_0x3037c2) {
          return _0x3037c2();
        },
        "hjoXm": function (_0x4dec3e, _0x95b828) {
          return _0x4dec3e + _0x95b828;
        },
        "XWnHX": _0xad2e47(553, "nK4s")
      };
    return new Promise(_0x262467 => {
      const _0x27b219 = _0xad2e47,
        _0x5fe816 = {
          "GVqrt": function (_0x4c2265, _0x4686fc) {
            const _0x55c80f = _0x4dd4;
            return _0x3fad11[_0x55c80f(662, "CHZX")](_0x4c2265, _0x4686fc);
          }
        };
      let _0x492b7e = {
        "url": "https://aweme.snssdk.com/luckycat/aweme/v1/task/done/excitation_ad/one_more?_request_from=web&iid=" + this[_0x27b219(1313, "5sE@")] + _0x27b219(854, "TpdZ") + this["device_id"] + "&aid=" + this["aid"] + _0x27b219(1451, "Il4n") + this[_0x27b219(804, "4ifU")] + "&version_code=" + this[_0x27b219(1058, "oSd%")],
        "headers": {
          "Host": "aweme.snssdk.com",
          "Content-Type": "application/json; charset=utf-8",
          "user-agent": this[_0x27b219(502, "TpdZ")],
          "Cookie": _0x3fad11[_0x27b219(672, "S4Mp")](_0x3fad11["XWnHX"], this["sessionid"])
        },
        "body": _0x27b219(1486, "*A&H")
      };
      $[_0x27b219(927, "NvE7")](_0x492b7e, async (_0x4f2980, _0x147e5b, _0x6249e2) => {
        const _0x4e5ca7 = _0x27b219,
          _0x53e398 = {
            "FkyHD": function (_0x147ebe, _0x550f79) {
              return _0x147ebe < _0x550f79;
            },
            "JoLwu": function (_0x4bd92c, _0x4a5063) {
              const _0x284435 = _0x4dd4;
              return _0x3fad11[_0x284435(1079, "8))q")](_0x4bd92c, _0x4a5063);
            }
          };
        try {
          if (_0x4f2980) $[_0x4e5ca7(464, "8WT[")](_0x4f2980);else {
            if (_0x3fad11[_0x4e5ca7(1072, "TpdZ")](_0x4e5ca7(935, "Erl2"), "PmQSX")) {
              let _0x26139f = JSON["parse"](_0x6249e2);
              if (_0x3fad11[_0x4e5ca7(536, "aJEf")](_0x26139f["err_tips"], _0x3fad11["XFjRJ"])) _0x3fad11["aagvQ"](DoubleLog, "\n \u274C \u3010" + this["index"] + _0x4e5ca7(426, "TpdZ"));else {
                if (_0x3fad11[_0x4e5ca7(1392, "8q%e")](_0x3fad11[_0x4e5ca7(588, "4HSP")], _0x4e5ca7(837, "TpdZ"))) _0x23ecc7["logErr"](_0xb205ba);else {
                  if (_0x3fad11[_0x4e5ca7(536, "aJEf")](_0x26139f[_0x4e5ca7(1533, "NvE7")], 0)) _0x3fad11[_0x4e5ca7(1190, "XE9O")](_0x3fad11[_0x4e5ca7(674, "k4ID")], _0x3fad11[_0x4e5ca7(1333, "Q$[E")]) ? (_0x3fad11["kpERL"](DoubleLog, _0x4e5ca7(1019, "*A&H") + this[_0x4e5ca7(587, "xINJ")] + _0x4e5ca7(1572, "Erl2") + _0x26139f[_0x4e5ca7(1082, "!P0$")]["amount"] + " \u91D1\u5E01"), await $[_0x4e5ca7(726, "U%Xr")](30000), await this["one_more"](_0x3fad11[_0x4e5ca7(433, "^^B2")](2, 1000))) : _0x5fe816[_0x4e5ca7(966, "KwiO")](_0x4e989f, "\n \u274C \u3010" + this[_0x4e5ca7(859, "aJEf")] + _0x4e5ca7(1560, "#iH4") + _0x243891[_0x4e5ca7(1087, "8))q")]);else {
                    if (_0x3fad11[_0x4e5ca7(627, "0jFM")](_0x3fad11[_0x4e5ca7(528, "CHZX")], _0x3fad11[_0x4e5ca7(414, "aJEf")])) {
                      _0x9d2fd2 = _0x5fbb48 || 32;
                      var _0x58adb6 = _0x4e5ca7(701, "sneV"),
                        _0x1b7cbf = _0x58adb6[_0x4e5ca7(1350, "8))q")],
                        _0x4e8e03 = "";
                      for (_0x3cba36 = 0; _0x53e398[_0x4e5ca7(432, "CHZX")](_0x254ef9, _0x5f0e8e); _0x27311f++) _0x4e8e03 += _0x58adb6[_0x4e5ca7(484, "OWbR")](_0x5a8a9d[_0x4e5ca7(721, "0qAp")](_0x53e398["JoLwu"](_0x5276b1[_0x4e5ca7(1389, "XZTf")](), _0x1b7cbf)));
                      return _0x4e8e03;
                    } else _0x3fad11["aagvQ"](DoubleLog, "\n \u274C \u3010" + this[_0x4e5ca7(1151, "nK4s")] + _0x4e5ca7(600, "U%Xr") + _0x26139f[_0x4e5ca7(1329, "D]Qc")]);
                  }
                }
              }
            } else _0xc53813[_0x4e5ca7(907, "!P0$")](_0x582bce);
          }
        } catch (_0x337b2a) {
          "BTNKP" !== _0x3fad11["vnmSf"] ? $[_0x4e5ca7(1348, "^^B2")](_0x337b2a, _0x147e5b) : _0x4c6b2b();
        } finally {
          _0x3fad11[_0x4e5ca7(1175, "U%Xr")](_0x262467);
        }
      }, _0x34dee7);
    });
  }
  async ["readvideo"](_0x547b89 = 2000) {
    const _0x51c9ba = _0x5a417e,
      _0xf2de6d = {
        "FWWma": function (_0x2a114c, _0x4c26c9) {
          return _0x2a114c === _0x4c26c9;
        },
        "GtTIH": _0x51c9ba(692, "0qAp"),
        "uhmMq": function (_0x209045, _0x4637f5) {
          return _0x209045 === _0x4637f5;
        },
        "Fluuy": _0x51c9ba(1041, "8))q"),
        "DIaqZ": function (_0x310968, _0x169f23) {
          return _0x310968 == _0x169f23;
        },
        "lOYUF": "Xhcyv",
        "psDaY": function (_0x1926ff, _0xc022af) {
          return _0x1926ff(_0xc022af);
        },
        "Rzcqa": function (_0x305b1a, _0x54b47d) {
          return _0x305b1a !== _0x54b47d;
        },
        "BXnpo": _0x51c9ba(682, "5sE@"),
        "fcrIf": "sPAuT",
        "tEMKl": function (_0x17761e, _0x2a607f) {
          return _0x17761e(_0x2a607f);
        },
        "WVNHl": function (_0x5d9672) {
          return _0x5d9672();
        },
        "uZbaj": "NoPlN",
        "qeeKy": _0x51c9ba(1285, "HlZ6"),
        "gHlyB": function (_0x3da0ae, _0x833b70) {
          return _0x3da0ae + _0x833b70;
        },
        "nUCLZ": _0x51c9ba(720, "j7Hy")
      };
    return new Promise(_0x496016 => {
      const _0x4a065d = _0x51c9ba,
        _0x46f8c4 = {
          "uFgXB": function (_0x4056c2, _0x3d6a89) {
            return _0x4056c2(_0x3d6a89);
          }
        };
      if (_0xf2de6d[_0x4a065d(447, "@zHk")](_0x4a065d(614, "k4ID"), _0xf2de6d["uZbaj"])) _0x46f8c4["uFgXB"](_0x29c043, "\n \u274C \u3010" + this[_0x4a065d(1031, "sneV")] + _0x4a065d(1004, "aJEf"));else {
        let _0x15385b = {
          "url": hostname + _0x4a065d(1172, "TpdZ") + this[_0x4a065d(1267, "8WT[")] + "&device_id=" + this[_0x4a065d(1527, "oSd%")] + _0x4a065d(571, "XE9O") + this[_0x4a065d(1406, "As2o")] + _0x4a065d(1213, "xINJ") + this[_0x4a065d(504, "@zHk")] + _0x4a065d(455, "XZTf") + this[_0x4a065d(1475, "Pl2K")] + _0x4a065d(439, "S4Mp") + timestamp + "&ts=" + times,
          "headers": {
            "Host": host,
            "Content-Type": _0xf2de6d[_0x4a065d(1518, "Il4n")],
            "user-agent": this[_0x4a065d(653, "D]Qc")],
            "Cookie": _0xf2de6d[_0x4a065d(549, "xINJ")](_0xf2de6d[_0x4a065d(605, "U%Xr")], this[_0x4a065d(803, "aJEf")])
          },
          "body": "{\"hidden_status\":1,\"is_user_active\":false,\"widget_style\":\"default\",\"has_alipay\":\"1\",\"pendant_show_scene\":\"feed_recommend\",\"is_incentive_page_to_feed\":false,\"read_task_public_welfare_status\":-1,\"read_public_welfare_group\":-1,\"task_id\":0,\"task_key\":\"\",\"is_click_icon\":false,\"online_feature\":\"\"}"
        };
        $["post"](_0x15385b, async (_0x3e03b0, _0x4d85fc, _0x2089a0) => {
          const _0x1c00bf = _0x4a065d;
          try {
            if (_0xf2de6d[_0x1c00bf(1269, "Erl2")](_0xf2de6d[_0x1c00bf(1104, "5sE@")], _0xf2de6d["GtTIH"])) {
              if (_0x3e03b0) _0xf2de6d[_0x1c00bf(1005, "0qAp")](_0xf2de6d[_0x1c00bf(493, "9@rc")], _0x1c00bf(1059, "c$RJ")) ? _0x32157d[_0x1c00bf(445, "DL2D")](_0x522598, _0x5e96a9) : $[_0x1c00bf(704, "S4Mp")](_0x3e03b0);else {
                let _0x444d02 = JSON[_0x1c00bf(1138, "U%Xr")](_0x2089a0);
                _0xf2de6d[_0x1c00bf(540, "XZTf")](_0x444d02["err_no"], 0) ? _0xf2de6d[_0x1c00bf(648, "Pl2K")] !== _0x1c00bf(1484, "0jFM") ? _0xf2de6d[_0x1c00bf(619, "sRn*")](DoubleLog, "\n \u2705 \u3010" + this[_0x1c00bf(1420, "DL2D")] + "\u3011\u5237\u5C0F\u89C6\u9891: \u83B7\u5F97 " + _0x444d02[_0x1c00bf(808, "*A&H")]["score_amount"] + _0x1c00bf(1200, "oSd%")) : _0x2e15c0[_0x1c00bf(1009, "4HSP")](_0xc9a358, _0x387fae) : _0xf2de6d["Rzcqa"](_0xf2de6d[_0x1c00bf(1243, "DL2D")], _0xf2de6d[_0x1c00bf(448, "nK4s")]) ? _0xf2de6d["tEMKl"](DoubleLog, _0x1c00bf(1407, "XE9O") + this["index"] + _0x1c00bf(500, "Erl2") + _0x444d02[_0x1c00bf(539, "As2o")]) : _0x46f8c4[_0x1c00bf(434, "nK4s")](_0x46d061, _0x1c00bf(1425, "aJEf") + this[_0x1c00bf(986, "*A&H")] + _0x1c00bf(487, "8))q") + _0x5d0988[_0x1c00bf(850, "#iH4")]);
              }
            } else _0x5399fe["logErr"](_0x3bfd2d, _0x4d84f9);
          } catch (_0x354658) {
            $[_0x1c00bf(1250, "Il4n")](_0x354658, _0x4d85fc);
          } finally {
            _0xf2de6d[_0x1c00bf(929, "U%Xr")](_0x496016);
          }
        }, _0x547b89);
      }
    });
  }
}
function _0x4dd4(_0x338ac2, _0xdddc32) {
  const _0x4d6b55 = _0x4d6b();
  return _0x4dd4 = function (_0x4dd4b5, _0x493078) {
    _0x4dd4b5 = _0x4dd4b5 - 409;
    let _0x13fba8 = _0x4d6b55[_0x4dd4b5];
    if (_0x4dd4["PAiygB"] === undefined) {
      var _0x33108f = function (_0x24b9fa) {
        const _0x4d1d85 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0xeffe = "",
          _0x38a53a = "";
        for (let _0x49a331 = 0, _0x61a5fd, _0x18011f, _0xe6310a = 0; _0x18011f = _0x24b9fa["charAt"](_0xe6310a++); ~_0x18011f && (_0x61a5fd = _0x49a331 % 4 ? _0x61a5fd * 64 + _0x18011f : _0x18011f, _0x49a331++ % 4) ? _0xeffe += String["fromCharCode"](255 & _0x61a5fd >> (-2 * _0x49a331 & 6)) : 0) {
          _0x18011f = _0x4d1d85["indexOf"](_0x18011f);
        }
        for (let _0x4e3e53 = 0, _0xc53813 = _0xeffe["length"]; _0x4e3e53 < _0xc53813; _0x4e3e53++) {
          _0x38a53a += "%" + ("00" + _0xeffe["charCodeAt"](_0x4e3e53)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x38a53a);
      };
      const _0x58bdd8 = function (_0x582bce, _0x3a0c79) {
        let _0x572b42 = [],
          _0x262fa2 = 0,
          _0xded459,
          _0x456e55 = "";
        _0x582bce = _0x33108f(_0x582bce);
        let _0x504a31;
        for (_0x504a31 = 0; _0x504a31 < 256; _0x504a31++) {
          _0x572b42[_0x504a31] = _0x504a31;
        }
        for (_0x504a31 = 0; _0x504a31 < 256; _0x504a31++) {
          _0x262fa2 = (_0x262fa2 + _0x572b42[_0x504a31] + _0x3a0c79["charCodeAt"](_0x504a31 % _0x3a0c79["length"])) % 256, _0xded459 = _0x572b42[_0x504a31], _0x572b42[_0x504a31] = _0x572b42[_0x262fa2], _0x572b42[_0x262fa2] = _0xded459;
        }
        _0x504a31 = 0, _0x262fa2 = 0;
        for (let _0xd5e7fc = 0; _0xd5e7fc < _0x582bce["length"]; _0xd5e7fc++) {
          _0x504a31 = (_0x504a31 + 1) % 256, _0x262fa2 = (_0x262fa2 + _0x572b42[_0x504a31]) % 256, _0xded459 = _0x572b42[_0x504a31], _0x572b42[_0x504a31] = _0x572b42[_0x262fa2], _0x572b42[_0x262fa2] = _0xded459, _0x456e55 += String["fromCharCode"](_0x582bce["charCodeAt"](_0xd5e7fc) ^ _0x572b42[(_0x572b42[_0x504a31] + _0x572b42[_0x262fa2]) % 256]);
        }
        return _0x456e55;
      };
      _0x4dd4["hkvxpP"] = _0x58bdd8, _0x338ac2 = arguments, _0x4dd4["PAiygB"] = !![];
    }
    const _0x1b7425 = _0x4d6b55[0],
      _0x26ae11 = _0x4dd4b5 + _0x1b7425,
      _0x2088fc = _0x338ac2[_0x26ae11];
    return !_0x2088fc ? (_0x4dd4["CHwqAX"] === undefined && (_0x4dd4["CHwqAX"] = !![]), _0x13fba8 = _0x4dd4["hkvxpP"](_0x13fba8, _0x493078), _0x338ac2[_0x26ae11] = _0x13fba8) : _0x13fba8 = _0x2088fc, _0x13fba8;
  }, _0x4dd4(_0x338ac2, _0xdddc32);
}
!(async () => {
  const _0x22cdb2 = _0x5a417e,
    _0x4faecb = {
      "NeFpB": function (_0x5cfe14) {
        return _0x5cfe14();
      },
      "sFoHn": function (_0x59c1b6, _0x151f7b) {
        return _0x59c1b6 > _0x151f7b;
      },
      "rplMp": function (_0x42413d, _0x415cad) {
        return _0x42413d(_0x415cad);
      },
      "JquYT": function (_0x3ddd66, _0x12bbe6) {
        return _0x3ddd66 * _0x12bbe6;
      },
      "ZzKSG": function (_0x41e7f3, _0x2c0954) {
        return _0x41e7f3 * _0x2c0954;
      },
      "TZKkY": function (_0xbd7483, _0xa4a35b) {
        return _0xbd7483 * _0xa4a35b;
      },
      "NmUoG": function (_0x16721c, _0x579aec) {
        return _0x16721c == _0x579aec;
      },
      "sfhTZ": function (_0x4eda14, _0x269cbb) {
        return _0x4eda14 === _0x269cbb;
      },
      "LzYvO": _0x22cdb2(1257, "mHsY"),
      "HLHTH": _0x22cdb2(1096, "k4ID"),
      "YHKFo": function (_0xc4f377) {
        return _0xc4f377();
      },
      "nKezf": function (_0x305a1f, _0x4ae948) {
        return _0x305a1f != _0x4ae948;
      },
      "eYdtu": function (_0x5c1992, _0x46d06d) {
        return _0x5c1992 !== _0x46d06d;
      },
      "jDwxX": _0x22cdb2(1232, "T6Ff"),
      "OQKRB": function (_0x217da3, _0x376d0d) {
        return _0x217da3(_0x376d0d);
      },
      "uFTLc": _0x22cdb2(1143, "NvE7"),
      "CrSLf": function (_0x6fae4b, _0x11cd38) {
        return _0x6fae4b(_0x11cd38);
      },
      "kdHKb": function (_0x3b77a4, _0x27934c) {
        return _0x3b77a4(_0x27934c);
      }
    };
  if (!(await _0x4faecb[_0x22cdb2(1328, "sneV")](checkEnv))) return;
  _0x4faecb["sFoHn"](userList["length"], 0) && (_0x4faecb[_0x22cdb2(1160, "8q%e")](DoubleLog, _0x22cdb2(979, "HlZ6")), DoubleLog(_0x22cdb2(1179, "8WT[") + userList[_0x22cdb2(961, "sneV")] + " \u4E2A\u8D26\u53F7 ================ \n\n \u811A\u672C\u6267\u884C\u270C\u5317\u4EAC\u65F6\u95F4(UTC+8)\uFF1A" + new Date(new Date()["getTime"]() + _0x4faecb[_0x22cdb2(616, "T6Ff")](new Date()["getTimezoneOffset"](), 60) * 1000 + _0x4faecb["ZzKSG"](_0x4faecb[_0x22cdb2(1036, "mHsY")](480, 60), 1000))[_0x22cdb2(1343, "XE9O")]() + " "), _0x4faecb["NmUoG"](versionupdate, 1) ? _0x4faecb[_0x22cdb2(1217, "IAun")](_0x4faecb["LzYvO"], _0x4faecb[_0x22cdb2(860, "5sE@")]) ? _0x3679ee["logErr"](_0x31e91d, _0x195d7e) : (await _0x4faecb[_0x22cdb2(592, "sneV")](getVersion), DoubleLog(_0x22cdb2(1318, "6yqz")), _0x4faecb[_0x22cdb2(576, "sRn*")](scriptVersionLatest, scriptVersion) ? _0x4faecb[_0x22cdb2(1411, "*A&H")](_0x4faecb[_0x22cdb2(1007, "#iH4")], _0x22cdb2(577, "T6Ff")) ? (DoubleLog("\n \u5F53\u524D\u7248\u672C\uFF1A" + scriptVersion + _0x22cdb2(778, "R61R") + update_tines), DoubleLog(_0x22cdb2(1149, "aJEf") + scriptVersionLatest), _0x4faecb[_0x22cdb2(888, "8q%e")](DoubleLog, _0x22cdb2(1521, "8q%e") + update_data)) : _0x26c45d() : "EfsXT" !== _0x4faecb[_0x22cdb2(450, "8q%e")] ? (_0x547489 = _0x33c9e9[_0x22cdb2(1356, "mHsY")](/scriptVersion = "([\d\.]+)"/)[1], _0x2fb56d = _0x2d24cc[_0x22cdb2(1450, "R61R")](/update_data = "(.*?)"/)[1]) : _0x4faecb[_0x22cdb2(424, "4ifU")](DoubleLog, _0x22cdb2(1455, "8))q") + scriptVersion + " \uFF0C\u5DF2\u662F\u6700\u65B0\u7248\u672C\u65E0\u9700\u66F4\u65B0\u5F00\u59CB\u6267\u884C\u811A\u672C")) : (_0x4faecb[_0x22cdb2(1412, "8))q")](DoubleLog, "\n================ \u7248\u672C\u5BF9\u6BD4\u68C0\u67E5\u66F4\u65B0 ==============="), _0x4faecb[_0x22cdb2(1070, "E0y6")](DoubleLog, _0x22cdb2(792, "DL2D") + scriptVersion + _0x22cdb2(727, "ELtf") + update_tines + _0x22cdb2(891, "@zHk"))), _0x4faecb[_0x22cdb2(754, "XZTf")](DoubleLog, _0x22cdb2(657, "DL2D")), await _0x4faecb[_0x22cdb2(900, "As2o")](start));
})()[_0x5a417e(801, "XZTf")](_0x3ae323 => console[_0x5a417e(1011, "8q%e")](_0x3ae323))[_0x5a417e(874, "9@rc")](() => $["done"]());
async function checkEnv() {
  const _0x572a8b = _0x5a417e,
    _0x1056e0 = {
      "BrEYW": _0x572a8b(973, "*A&H"),
      "eqtKZ": function (_0x293dba, _0x444586) {
        return _0x293dba !== _0x444586;
      },
      "TSYhL": _0x572a8b(1018, "aJEf"),
      "HmeTB": function (_0x5174ad, _0x2cea76) {
        return _0x5174ad > _0x2cea76;
      },
      "Etxeg": _0x572a8b(1062, "CHZX")
    };
  if (userCookie) {
    if (_0x1056e0["eqtKZ"](_0x1056e0["TSYhL"], _0x1056e0[_0x572a8b(1010, "4HSP")])) {
      _0x534de2[_0x572a8b(1536, "XZTf")](_0x1056e0["BrEYW"]);
      return;
    } else {
      let _0x226337 = envSplitor[0];
      for (let _0x168f28 of envSplitor) if (_0x1056e0[_0x572a8b(1344, "sneV")](userCookie["indexOf"](_0x168f28), -1)) {
        if (_0x1056e0[_0x572a8b(1290, "nK4s")](_0x1056e0[_0x572a8b(1001, "xINJ")], _0x1056e0["Etxeg"])) _0x271898(_0x572a8b(1503, "0jFM") + this[_0x572a8b(859, "aJEf")] + _0x572a8b(1520, "nK4s"));else {
          _0x226337 = _0x168f28;
          break;
        }
      }
      for (let _0x3bc727 of userCookie[_0x572a8b(1459, "8))q")](_0x226337)) _0x3bc727 && userList["push"](new UserInfo(_0x3bc727));
      userCount = userList[_0x572a8b(1194, "5sE@")];
    }
  } else {
    console[_0x572a8b(1381, "aJEf")](_0x1056e0[_0x572a8b(1408, "xINJ")]);
    return;
  }
  return !![];
}
function _0x4d6b() {
  const _0x2f4732 = function () {
    return [version_, "PjsPYFjtHiWaDmCUXiQ.KcnDtomS.JnvY7KBSfLp==", "WR4zqSoStxjxyeK", "WOFdMmoN", "aCkhor5H", "WP3dG1ZdTmkjWPG", "EILpWP0n", "vwZdKbTV", "44o65lQ95l6G5Q6e5PEefCkd5lY95BAT57Ig5A605OUU6k2X5yMn5zYX5lMT5lYA", "W67dJNlcLbq", "hCouWQRcMGVcKmkbWRmIWOi", "W4ddMKRcItu", "e3yKE8kJW44GWQaurCkMWPasWRRcHJ4", "xCoDz2KJnWzlWOVdIa", "WR8fq8o/vuPbELHZxCoHWOLVzXWZ", "FWHyWR4J", "W6/dGYj1W67dQSoece4rW7vYWRLTeSklW48rW4O", "W6VdKsvgW4S", "WQFdJwFcP8kS", "yKtdVmo4qmoElKtcKw7cPMJcGmkjqJzmk3Glc8otkmovlSk0dSorgx56nY/cRM9AW6VdMrbtWP8yjmkJW5tcNSkOc35xdLtcQSkpW5NdH0voASk1WOaIsSoFWO1OiComxN3cGmkgWRvY", "WOhdSwHkaSkfW6xcSCoCEx5FWOJcUa", "h8oTW78", "WRVdR3ZcNCkMmtm8Agq", "qhddKX1P", "gEMgIUw4Jq", "WQrHWQn0", "kSkrDw7cRSkqqq9zW6nkW60AlmogW67dJXxNIPVMNQhLR4tMR4VMO6VMNPVMMy/MLi41sSoQW5xcLwblW6xcR2xdRmoYvLyIEW", "s8otm8kLWPFcPNjVW4BcTW", "WPJcT27dMbddR8k1WOuQkq", "k1ZdSCovhhRcRtKdWQZdNCoEW505z050WQHL", "CXRcKZ/cOW", "44cx5OQw5B+15A+256+TW4CL57+957Ud6zwi6Akk44cX5yMY5O2MhoE5LoI0RUobNEwZVEISVUw/RUwUR+EUJW", "qmou4P2yz+odTW", "W6GOjq0", "Bg4ZjfW", "vmogWOZcJYBcJCkjWReP", "AhNdUGjz", "WQ3dUh3cSCk7nY0M", "w2ddSclcKgXAWOa", "F8o9WPBcHIa", "mguKdGfhW4DGW5m+WRnqW5LKAwhdKmk1W7ldQbaDWRBcGmoAW4qOW4DFggXwCbTYcmkdWRaLxmoAov0/WQZdQCkxW7SroCooW5yqcYS3", "kSklW57dGai", "WOSctqNdI8oUW5dcQZe", "W4BdQMjnh8ky", "qKW6y8og", "44oS5Q+Q5PAb5AEV5yQ8pe4", "lhO4W6FcQ2bDoG", "rfWLzSobs1KSbW", "BsPLWQtdSYedySof", "FrblWQac", "xMJcGslcMW", "qhygmM5YsZGdAmkFWOynhG", "BNhdMszz", "bs99ztWN", "W5ddGv/cNHq", "qxNdIa", "zCoWW5XhoSkN", "W7yNkbWY", "WQCpsCo5wh0", "hvZdTmoCbq", "DcnyyWy", "W5jCBhiX", "l19Xnq", "WQ7dUfBcMSkR", "WR45W7NcTCkv", "WORdJW/cU8kZWOvc", "fxZdTr7cLxruWOqdW5FdIqZcKWzsxmkAW44NfvBcR8kOF3O/W6RdGWVdG8oxW6eDW4hdMNrnySoUhNSWWQK", "z3rNtY8wWQjut8klm8kjWQFcIGdcG8omq8keb2ldPgRdKMaMWQBcSYBdU1aNWQddLmktWPldPepcGIRcNmk7W6dcKZZcQ8k5gK7cNKHuW7VcPrW1s3K1WPHBW4qTi8kxnuZdO0uBWPWXWPNcICkyWP7cIwG8W43dK8kNB8o+WQVdTNnBuSojbSo1fILKW5ddGGNdLe3dVWmOeH/cTKBcUbuyjMtdOG/dGeddG8osW6FdSL3dSCkvWPBcU8kTsW08xSoUWRGsWQxdMe0MnmkabJiYhSkDW6n1WODwW5GPW4q3lgVcHmofW5NdO8o8WR3dTrHwymkCWPRdQmkRpgWpnCk6xSoPWODiWQxdNCo7vComi18", "W5tcUeJdUaC", "qvq8ESomwG", "44od5lUI5Psv5Q625PECW6ru5lIF5PA75Q6G5PAdWQW", "bCkGW4a", "W5xdGeXogq", "e2rBhLD3A3VcJ8o6W6G", "W4pdPNLz", "BZSkW4ZcLSkiW4NdJmoggNC", "W4hdL23cQHG", "B8kSWPe", "WPbWWPiLWR4", "WPv2WQjNW4iT", "WPedvYddUG", "pfJdKSo4dG", "e2WUy8kOWPrI", "WOSUW7RcS8kT", "WOJdMaNcSmkUWOfxWRi", "W4BdQMjnh8kyWRG", "W6tcIJBcGSkW", "ESoXWOXqW4O", "W6ZcNdxcG8kj", "W6JdUui", "WQ3dSSoLWOtdNW", "hSozm8kjWP/cUxu7", "WQbnWOhcJmofWRO", "44kl56+n5yM25BMR5zoqWRxcUW", "smoTi8kjW6NcIXJcKhK", "e2rCfei", "CcRINBrr44cQ", "W4O6W5D2WPBdPG", "WOJdMaNcSmk0WOC", "DMaFdKC", "qhJdSZBcTG", "q3/INkpcMUodRW", "DCkGWOyynCksA8ofEW", "eKy4kwrWtdGKiq", "vmoRdIhdLq", "WQFdPCkAsXS", "xmoqWQ7cPZhcK8kcWRS1W7zyWQnP", "W5PlhbVdHSoEW5FcRcyFl8ktECoFWOHDW7OUWPjOWQjFyWHMWQTZsvqwfXtcQG", "mr/cOtG6pmosDmoP", "rCk0WRieoG", "WPJdVCkdW6z5BX7dLG", "jehdRq", "uSkVWQa+kq", "FCoqW7D6aG", "lehdRq", "pJNINiz944cD", "xIrwDWS", "WQn2WQ1sta", "WQxdUSkAW5f4", "WRXGWOeIWOC", "WOGyDmossG", "a8k/4P6+iUobMa", "W5K2W5zNWPFdVW", "uvqRb3K", "W77cIIVcLq", "vtrRWR8tga", "W6FcMSkvcmoP", "W5dcRSkniSoRW4e", "idelW5/cHW", "W4ldOfhcIZq", "WPZdG1NdMmkxWO8", "vXL2qXy", "44cQ5AYO562R5BQv5zcEW4tdGa", "WO7cTUkDQCo844gD", "WP4/W5XKWPddQadcPCoTWQJcIa", "WR3dOMZcMmkB", "WReRW67cUXq", "p0RcKthdOG", "lKFdPmk1wmouy0tcIYxcTxdcJmkacwXDExKEhCoflSkFzmk3cCoauZqWyxBdQZ4FWQlcNJjLWPajC8o3WPRcRSomrLbldXNcMSkuW5JcLGeyiSoHWQuSz8oZWQ5UDSo/dMRdKCoAWPb0gZhdVrFcO0/cOCoruCkYhJKlpvhdKhpcOCkmg8kgCG4qlx7dKCkMBM5DpmokWPPscWGZnW", "yu8Fv8os", "uSoWi8kKW6xcGW/cMZW", "fxZdTr7cLxruWOqdW5FdIqZcKWzsxmkAW44NfLBcSmkOF3K3W6RdIgVdG8oqWQPe", "W4mVW7pcOG3dKMnVWRJdQa", "FuRcJdq", "WRzjWOtcSG", "Amo0dCk9W40", "sxldMs12WOZdM1e", "t8oumSk6WQO", "l8olW6GhkG", "W4/cUSobWOG9nG", "WO7dLmoJWOpdUW", "c37dLSo4iW", "WPtcQCk+l8or", "W4VdMx/cUsu", "WPTLWRLvqq", "WQfaWOFcPCoo", "pLT/h3e", "dmoL4P65s+obJa", "sqpcLJ/cOa", "W5VdRSkbW4LsAa/dIf5o", "WRL0WQ9uBq", "cgNdGCoTFG", "WPNdNSkNW5zB", "W4fk54MV5P6Y5l+n5Og677YO", "h8oQW78Rpq", "AmoYW5r3jSkH", "W5VcPgZdTYhdRG", "WRGAs8o3wa", "W7NcP8k5oCo+", "WPe6D8o0Bq", "WPWgsHS", "W6pdOSk4ta/dTSkUWQRcHeO", "WPCxwXtdGmoUW4y", "xCoUj8ktW4O", "W5BcOMRdMdZcU8o7W4CUzmoCCrbHW7ldQbLEWOlcTCk1hcFdHbldLXnPBxRcJSkah0BdTmobWOddLCoPnG3dKCkAi28XWRRcJCkkW6ddHCo+WO5ZW4LKftVdU2ZdQXLXW7ZcJCkjW707W7VdUJvdgmoTW6BdQ8o/oNBdRSk7W6WTWPbldSkDW6lcTf/dHCogd8ooh0y", "WPCdEG3dKa", "44ou5AYE56255BMd5zcAWQldR+InSow9TLC", "xcL+WQupbq", "WOJcLvVdJGFdM8kg", "WQldT1xcRblcHmkGa8kRWPC", "umoIl8kI", "WQm5W7/cPCky", "W4BdRMK", "p8keCcBcK2PTpCoWqfxcKCoPyrn8WOGWzq", "xCoDWOlcOWC", "WP3dHgtcPmkA", "t3xdMa", "oCkrzZtcJMbCiSoXdW", "vfpdQXn4", "44o65yQa5Bkp6ksN6AcLfCkd", "o1tdTSoDhh7cHIyjWRddSCowW5yiuun9WQm", "e8kOW43dTG", "FqHpWP8g", "kSkm4PYeC+ocGW", "WQiBWPe3WOednmk+WRVdHSkaxSkcW5xdUt0cWPJcKCoSzmkdWRideCo8W6hcHtNcUSo1tCkhWRuhpCkIpJOAwCkJh8ofCgFcP8oCzCkFW7CZxCkQWOqhWQBcHsxcRf5mu8k6k8kd", "r8o0W7LvpW", "W5/dSSotWPuVzWRdULOFyX3dHCkvs0vCdaOBnSk8WPSHWR8mW7eFjSkcidTylCk7sSk1WPhcMvpcJ3RcG05U", "vmoVnSk7W7i", "ESo6W4HXiCk6FmknEMO", "W43dKxvVbq", "WRddUxNdQ8kO", "DSkQWOyF", "WOFcQ8k8aG", "WOD1WPj1tq", "WQ8lu8o/", "44o85AY356+k5BQq5zkqW5ih6i225BYkW6G", "WRC5W7NcTW", "WPtdLfJdMmkpWOThmmkaW43dHvZcMSo5ECoRW6FcGG", "sNpdMZDPWPe", "fMvFneHG", "WPy6W6BcOG3dJ3DGWRdcVmkp", "m3VINyddMUobSq", "r2ZdJb5YWOddIedcOSo8W7qQWRKRWRuspCoEisj2iYGewMDra0XKWQu", "W47cNGZcRCkC", "oCoNW5innG", "WP0jBmonEW", "ESo8W5rWlCkkC8kjCsjeW7y", "W4fUFwWg", "goMfP+w5Gq", "k8kDCa", "W5q0W55xWOVdUq", "d3LDa1T1uxhcMG", "FIn6qJG", "gmkFmcH2zvusW4C", "kSk9mInG", "rrlcKJdcOwSwuhFcLSoXx1/dSSk8W4hdS8o+ktFdPSk/WOyaWOVdPhRdNmkuW73cVa", "WOZdQSkuW7j0", "z3SJe3C", "44kV5OQf5BYE5AY156++WRVdTmoB5PYU57QR6lwA5BgF6k+O5BYp5AYa56YR5Awf6lsA56UJ5zkw5ywB6k+N", "mddMMBtML43KVj/MGAlVVk0", "44oi6yEO5BUK5PwG55I4uKS", "WPNdQSkhW5bUyZhdJf8", "BCo+W49J", "WPejwH/dMG", "ySkKWOek", "cCkjiZn0z28vW5C", "ELqGgu8", "44oH5OQr5B+A5A+256Yex8kA6i6/5B6+WQi", "yG3cRs5M", "W5NcP8k7emoi", "cbqnW5lcTq", "qSoXnmkjW6RcIW", "WQmTAmoZwW", "W7tdT1FcRYG", "W5q0W54", "WRXsWO8zWOa", "cIC4WOztfNJdNtNcPh3cPCoI", "lw4PouK", "BmoKcSk5WO0", "W6JdPrfLW70", "wcT8WPyicsNdLwhcTYxdTSk9WRiajSkLuWlcHrxcN1fUW6qbbt4BkNi", "y3aQyCos", "ufJdMGtcQq", "kgRdPmoVAa", "aCoNi8kGW63cHW/cQIhdVSoc", "pmkDCclcIa", "W4ldHG7cJmkXWPfeWQddQCoNkCoIa2aaug/dGCkvW681WPGuWOPAB8kOWPeIWRtdV8orWPNcU8kck0CPyguReCo0sCk7WQ8CoYHUhCkcWQy", "s8ouWQJcMte", "W50PW4TnWO3dOHxcIq", "WP8psSo3AG", "foMhIow5IW", "vrD7qr4", "44gB5OQN5BYu5A+A562wnrlOJ7ZLViis", "sSoHWPBcSIu", "WQ5/E0f/ea", "nNmztSkH", "r2ZdJc11WOldHfe", "rrlcKGRcRxOetxhcLW", "44ci562v5yUi5BIQ5zkvCra", "rSoZnSk6W63cHWVcGshdTCkrWPxcISoIFSo7W7tdSsLhW6OqW7qBWRBdOCoRW6GZWQtcLW", "omk5hb4", "s8oNlSk8W7e", "WOldPsZcPCkq", "q2BdSH9r", "iSkaydFcLduDzmo0rupcLCoJit9XWPqNzmoMamkLmCo1WPqUsSkrhCk/eSopiGvyqCkyzhtcVmohASonpCkavcFcVmkjW6Srv2FdHmkgebZdNSkZcmkKW4JcKqpdNCkQW6SfW4f2W6NdSYxdPCkyWRzdWRxdUYP5WRXYWRVcRtjCWOe1", "W7FcT1pdGbK", "p0hdUSobbMS", "WOBcHCkwaSof", "f8kQW4VdSbvzv8kMW4qWWQZcMq", "WRXbWOy/WOyjh8k8WRhdKCo9bCoeW6/dQdanWOm", "44cQ5BUk5zkq6lYx5yU0W4tdGoInQEw/KmkF", "vtbGWR4x", "qN3dIbm", "W7RdV8oNvSkiwmkhnrtcV8kDuLVdJSo6CSk0e+AjQ+IGPEw8IUwURoESNEI2TUMhG+w6NSozpNBcRqeisuOOnJW/pbNcKxhcJG", "vCo/WPpcUKu1", "iZxcOdOD", "WQKkcr8cEs0", "vmo6WRFcIa0", "WP7dNf7dN8kzWOvlAW", "g28LC8k+", "44oA5yMD5BcO6kwy6Ak9lXi", "nW/cQZG+bmowD8oYWQVcR3e", "W5xdV1BcQae", "44c15lMO5l+c5QY55PA4mLC", "oZOEW6xcLSkp", "WOJcK8klgSoL", "qCoAWRjlW68", "WQ3dVCoqWPBdOG", "cwFdMmovqq", "WOeZBJddMW", "WPdcK+kCIJtJGOO", "WPVdJNddImkV", "W6tdTv50fW", "W53cGbpcP8k2", "44ko5BI25zcg6l6e5yUQgv805P2657QL6lsM5BoW6k+05BI05zk16lYI5yUw5AsI6lAb56QW5zgs5ywM6k+U", "W6dcHsBcHmkG", "gCoQW74rkc3cTCkrW68", "W7pdNsjXW6i", "WQddGJ3cP8kF", "W6VPHRVLUky", "W7DKDLCN", "tCohW4nAkG", "W4VcKhNdSa0", "awqYzCkVWO89WQCdcW", "q3GJkq", "WRznWQTAta", "W4fk4P2RWR7JGlW", "EhpdP8oaaxZcMsOsW6m", "W5FdIf7dH8ksWOLwbSkgW4FcPW", "W5FdMeJcJa", "qwKUphL2EcS1BSkEWOymf8ocWOJcGbq7", "W6FdPNRcJCkKjZ40EhBcO2TsamotW4XkdZTkhXxcG8kXihBcGSoHzLFdSJqrWP9jjMvVBfJcLW", "i8orW5ik", "jtaiW7/cJCkz", "W6JdRfDScq", "WO0puZFdKW", "W5JcTwZdOsK", "m2yXW4DCv3xcNdxdPxBdPmoQW7XsDCkJu+EiQEAFGEwUJEASUEAJOUAFRUAzPoAwJfb3qdP3W5VdHW9yW64mW64muuTi", "t1BdLdhcNq", "h8kElcnt", "WOOIDCoZrG", "WP5SW7FcSYhdL11PWRJcRmozW5xdPCoxiw8euatcImoSh8oTbmkhWPecW48DuNVdJSonWQPzhCoknSkoW63dVmkpiZddNmoIfhDVhmk+", "W47cO23dGa", "WP4TW5XGWORdOGRcLmoBWQ/dMSkbW6/dJa", "avhdHdtcUIimWOGyWPZdJrFdMq", "W6y5W7S4c8kRkWNdSmoPWPtdHCo6", "t2pdPq/cN2PsWOSd", "WPv0Cur3hKi6jIFdTmoqhhBdGSoIsZpMI4pOO7hOTBRLJjZOTyVOT7VOT4BPHlVdHCkTW7WdW6amfmoOESkPw13cUCkrg8knaW", "WPi7CmoCAG", "W5KG4P+piooaQa", "vN/dPZJcJh8", "WO/dMmo1WPJdNuhdVde2WR1D", "W6xcHcxcPmkQcq", "y8k3WOC0kmkuDCoF", "WRNdNYpcOmkD", "ltOzW5pcNmkoW7pdUSol", "44cQ56+l5yUQ5OU65yUlW4tdGoInQEw/KmkF", "WQaSW6JcPSkIA1lcUhjZWPO", "WQVdO8kOW71E", "hCobWQNdLW", "hSoxkCkYW4m", "jG7cLriV", "h2pdU8oHqq", "WRf8WQlcICo1", "WOqQW5ZcUZy", "WOe/W6dcNtO", "44cn6kAq6Akc5BMr5zcwr8oD", "W4fk4PYIWR7JGlW", "vxNdJWfYWOZdH13cR8kU", "W7v1AxiT", "vmodldldQSoYd0ybWQ4OWQjczSkAWQhcLG", "x8oaWRzzW68", "q1eYFCoJwG", "WRfQWQKZWRK", "bmkcnJv6z28yW5lcHva", "44oA5A+3566w5BUH5zgMlXi", "W7uSW77dQW", "WPZcRCk9lSohfW", "yCoWf8kxW4W", "vxtdHaRcJa", "WPrXWOdcLCoI", "WQmIW7BcPYS", "W7dcIJBcGSk0", "ASkQWPiUlSkp", "WPVdMmoZWPu", "DxWLACoA", "e1CXvCkE", "44kl5OUG5B2g5A6j56YRWRxcUW", "44cQ5yQc5Bov6ksS6AofW4tdGa", "x8oqWQZcGZFcM8k/WRCJ", "W6O6kqSRrbPPBW", "W6JdUulcMt/cMa", "WPKxtIxdJmoGW5pcPW", "xNFdHcHc", "FhJdQWDj", "WOddQ3xdG8kw", "p8kzwGxcHG", "cmknEX7cRa", "saHeWPNdNa", "pSkQWOSWECoIiCkEAYffW7pdGG", "wY5LWPyf"].concat(function () {
      return ["s8oSiCktW7BcLG", "h3HklLr9", "xCojemkvW4C", "W544ta7dI8oIW5xcPYfs", "W4ldTx9NbCkfW7RcRa", "hCkzjJi", "WQZdQ3VcJW", "e8o2W6KrmsVcT8kh", "WQhdPgVcI8k3", "W5jowLCf", "W6myW57dOSkcW6O", "A0NdOmo/fG", "WPHdWPZcHCoa", "AN8WcXffW4rMW44K", "WOaNxCosvq", "W4r9x3Cw", "WP/cSSk/bCoxcSocoq", "cXyEW57cLq", "AN8Wmr1uW5z7W4GLWPKEW4f8s2dcJ8oWWR7cSeOIWQRcN8ohWPuXW5iwahO", "WRVcH8kap8oh", "WRhdGmkdub4", "f8o0W6SIlchcPSkaWRDmzhxcMCkBW5xdHCopW4ldHSotk8o8WRtdIYNcMMjfWOnZWPq", "z8om4P2qEUoaHW", "W53dHuFcJtW", "WPldMSk/W4by", "zCosiSkCW6e", "kfRdU8oex8oopvy", "W7WsW5HJWQm", "D3ldNr5q", "FNWLlXvqW5jHW5u", "wKS8e1S", "pCkvFtm", "WO7dHCoYWR7dGeBdKY4", "W7VdUq5sW7C", "CK4HnZy", "WPinW4/cJmkU", "EX5/vX4", "WRzYWRHFtmo0BIG", "44ci5lUH5PsD5QYW5PAVCrdKUzVMLOJMR6BMLy9w", "cmkMW4pdHWj0", "W43cS23dMYBdRSk6WOeRkq", "eWVINRr144op", "WPatsGRdKCk7WPhdRtqFl8osmCktW50nW6XTWO0MWQ4dzZPIWQTQeLKnwahdPe3dOmoVgSktW4ynWO/cSZ13WOHvWRvDW7ldV2pdKgNcS8kPWRKDWQiGFSksWQLmWPlcIuZdHMpcPHylWOOWcuLMxW3dSmo2imkRW4ZdKCkYWOFdRCktcIxcM8k/sMXquG", "44gB6ysL5BIv5PwX55ITnri", "WR9VWQ1fsSoV", "WOFdPmoJWONdKq", "WRSV4PYkp+obSW", "fg/INzRdT+ocIG", "W5pcUmk8jmoVW4a", "fw7dPmo2zW", "na3cTJK+", "B1ldVGD6", "ur9lWOSK", "W5BcS8k2jSoJ", "W5VcUmkKkSo4W43cVaNdHq", "j8ocW6excq", "WRyQW7/cICktDG", "tu8VpL4", "eNGJota", "W43dN1PWka", "x2ldSIlcKgi", "W5RcT2RdIq", "u37dPbJcHG", "kIFcOta9", "W6NcQSkXeSoI", "W5ZdOLtcKs4", "sJ5/WOKibsBdIgZdPq", "lSkryI7cHgPTiSoX", "xCo4W6XNeq", "WONcImkadmor", "WR9hWPlcUSoaWRS", "ySoRW7fNkq", "BSoP4P6HWQlJGAa", "lCkJ4PYkW7BJGPq", "DtH3sYq", "uWvXWQ/dIW", "44gC5OM75B6j5AYg566AWP1T", "W7njy0WI", "uSoZiSk3W7dcGtxcGY3dQmkmW5pcJ8o/tSo2WQdcTs8", "F1tdTZr0", "qNLLWPq+gtJdVNZcSsBcVmo1W7TFnq", "hmoIiSkYW7BcGrNcHIhdVSoqWOhcGCoHyCoxWRRcUczlWQq", "WQlcHx8IWQpcUSkRbNGQW7zAWQ8", "WQldVudcGSkw", "6zM35P2D5BUi5PAm7764", "lqlcOc8J", "DvZdQNT1BW", "44o85BUv5zcX6lYs5yM6W5ih", "omkrzrJcJMS", "vhNdJs1YWOC", "W7ZcMYBcGmkShSouECkrmmoAWP/cQuxdR8onbZf9", "gSk8EIlcQa", "WOpdVZJcO8ka", "b+MfKUw5HW", "EelcNa", "lSkBEIlcUgPtpW", "leZdLSoYtW", "WRG5W53cSCk+", "p8khCtxcHMHxjCoH", "bCkKW4VdTX5Y", "cCkgDmoNW4FdUcPIW6xdIWzIFG", "WQlcHmk0oCoB", "jmkvqYpcIq", "W7xcRmkNgSop", "gw9ccgi", "p0JdISoDda", "nb/cGcSc", "eSknwYdcHa", "ESo6W4HXiCk6FmknEG", "WPWcsbpdGCoKW6hcQZe", "cmkMW4m", "uwS4aNL6vY4", "44kP6yAk5BQ45PsK55IZWRff", "W5VdQ8kuW49KzqVdULixnW", "qZn/WReP", "hSk5CddcIa", "WPNcRmk+dSon", "lKlIN6D844oy", "W63dRgfUhq", "h8o0WQ9rW4pcJCkLW7L7DG", "WRyQW7/cICkjCeFcVa", "WR4Aq8o/whbTEfHXCCo6WOn2wq04W7ym", "W4VPHABLUOe", "WQSsvrpdIG", "WRZdJHxcJCko", "W6JcHI3cLmk2dW", "EsrHCsGuWO1m", "teiMpZm", "kmk7CcJcJq", "q27dJI11WOW", "44o66iYa5y2w5BQE5zo+fCkd", "WQH6W7NcT8koCMJcPhz4W5ZdOb4iWO8xWPZdGrddGCofiSkXE0SvWP8/CfBcLCowWRNcLmkjW49aW7D6W4JcVCkun8ojW6DReYSgraOzzSoVWQVcMSkoW6dcT8kbWRiBWOdcHNNcMq", "A8oqW59TiG", "5B2B6ycp5OsZ77+A5AAR5yQO5RQR6lA/5lQv", "WRauW6lcMmke", "jSk7trlcOq", "lSkCqaJcJW", "z8o+W7vekG", "W5r2WRddQ2hcHfjtWPZcJCk0WP0", "WOtdOX7cHCk3", "WR3dUwRcNmkUotG7Ea", "v1G6EW", "umo7WRTeW6q", "ds7cNH82", "q2jsWOFdGSowWPhcRSksq3FcRSkYW6bUW7OoW5VLVzxLPQJMIlBOO4dKVixLKixOH5ZMNBPNW6xdTSk2WQJdNr3dH27cSSkCoNVdRMHH", "sSohWOHGW60", "WPhdQSkFW555BG", "W5BdPvHxnq", "kHNINj8V44kY", "W5P/sK0V", "W7mMkZW4uq", "WRDHWR5H", "a8k/4P+3iUobMa", "WPy+W6/cUYy", "W6ZcMtdcVSkSeSo7Fa", "kq3cScKZ", "BmoNW5HRpmk0zSknCtL1W6pdT3pcICoqW7nU", "WO1QWQq7WOO", "aCo3nCoR", "nKBdUSoSbq", "s8oaWQNcGG", "WR7cGmkGkCoh", "iaRcKcCm", "W5VcP3ldNGe", "W5BcO8kQg8oQc8oBzuZcVW", "WR9LWQrNtmo1", "WPCcW47cPCk7", "l8kmDY7cK25giSo6xhNcMCoIudHTWOi1C8o4xmkJaCo6W5q6", "WRNdJMpdLmk+", "pmoOW5i2la", "svC3ASoA", "u3NdPa", "lxKLlWDEW5HHW74PWPHvW44Y", "ia3cScS", "W7KsW6H4WOa", "W6tdT2Xqha", "W5xdONXNgmki", "rNGKowj+", "AmoCkCkuWRu", "aN11pw4", "aCk7W5BdNqrVrSk4", "hSocm8oR", "AEMgJUw5RG", "EdX8k8o7W51UW7nAc8o/W4ybW6tdLg4sWR3MI47OOAlNNO7LU4lLK4xOTPhPHPZLUl05WOeWrmkMfNxcJNuxbJzOWOTwWQFdHa", "qSkOW5tdSI9Ov8kMW454", "WQuXW6NcS8kskW", "5Q+6772f5BA+6Ao/5y6C", "W4VcPxVdMI7dPSkXWOy7", "D0VdUsbpWRRdVh3cHmodW5TwWPCEWP00tmk1dHbpeG0JybCvrrL9WQJdGgyiaCo7", "AmoZW7zpiW", "W444W6fFWP4", "mKpdSSoXgM0", "W53dRNpcKcy", "hxeKEmkKWO8RW78", "WRXlWPCjWOybg8kM", "WQnHWRHZxq", "W7zaFxeb", "WPpdVfpdGmk2", "xcpcUXpcHG", "ySo7W714bG", "WOlcR8kUiSo5", "u8occSkZWP8", "bt0KW5ZcQW", "hSoQW7eScW", "44c16yAZ5BUJ5PwQ55IcmLC", "WPNcQ8k+", "aCk5nHXN", "WPJdKSoZWPldNuddJtq7W7q", "hgzxhKG", "W51GAfOrAW", "Ee3dPCoen3hcKYidW6m", "xu41gZW", "oK3dOCov", "WPRdIXlcMW", "772+5PU15PEX5PEG6zsYW5O", "ldZIN7bs44cl", "F8oXcSkDW5e", "FNiYfw4", "WRNdGmkGW7DN", "fxLNeeP7", "6ywV5BUx77Ys5l+X6AosWRS", "WPiVW6RcPG", "E8oSWRb4W5C", "WRZdKI9WWQC", "WRldOSkHsa", "tmoMWRPtW73cHmkHW7PQ", "WRBdPSk7tZNdT8kHWQ7cHuO", "qvu/", "W4OIW7BcStNdHwfJWQNdUSkAWPJcOSoFpcmBfuRcImoKa8oODmkrWPqXW5barg7dMmoiWODpn8oknmkFWRVdR8oekZNcJG", "h8knoZ54BW", "W43PHBVLUBO", "WPJdGL/dLmkd", "zsDYwW0", "W60oqSoOrxzxuu1Vy8oNWOP3DanQW7mhCmkcW6FcRhCcW5PLk8k3baZcIq3dQG", "C8k2WPazpCkAymocAW", "WPtcP8kSaSowamoLyu0", "WPyRW7VcUGS", "z8kPWPK", "CvxdTxjOBCkcsmo5WPRcSghcQq", "WPqiwt/dKmoZ", "sdf0WQOc", "W5m/W7fzWPS", "xcnVWPmvcZZdIgFcTHtcUmkZWP4gjSo4ha", "lt4BW5S", "FmkK4P+xBUobLq", "W4JcNG7cR8km", "WQddQZhcPSkV", "CmkSWPeom8op", "cx5Daq", "W6hcL+w/K+wkRoElVoACG8kz", "F33dQbZcVa", "W706W5TqWRW", "WPldV8kuW5DVAry", "esOcW6/cKG", "WOhdJuNdGSkE", "WRefW5dcSd4", "WQ4WyCoMAq", "z2aNgazf", "WP/dMSk9BZ4", "WPtdOCkvW5X1", "W4ZcVSk9mCo+W7FcGG3dJSouW7rf", "iCkhmZ5d", "s8oWWR5fW6RcISkGW7fX", "5Q6v77+o5BsO6AoT5y2J", "DcTfWPVdIW", "77YO5PQw5Pws5PAQ6zs877Ys", "i0uwyCkT", "swtdPq3cOx9sWPiwWORdJa", "mxewECkx", "i8kACclcNW", "neSryCkq", "uXdcTJVcGq", "rCoOdmk5W70", "WQOoEmo3sa", "dmkboI95DG", "AmoYW5r3jSkHia", "W67cPtVcJCkl", "bMyHE8oltw0Gf8oa", "vSotnmkHWPhcU3CP", "q3/LVlZLI7FNIRFMN4FcLG", "awqYzCkVWO89WQCd", "WP3dSCoWiSo/W7FcKqNdLCkdWQat", "ah3dLryM", "WP/dKCo3WQNdHq", "WOLTWO4QW43cUG", "WP0vtcxdLSoOW47cSq", "WRuaW4FcLtC", "oEMhUUw7Uq", "W5S6W41XWPe", "44cX6kE/6Aoc5BMW5zoOfcBNVjtNUR/PLjpPOQZJGO3LIzpMJiXP57IF6lEk44gl5Bc56k+o55625BQO5zgw", "W7FdS1BcRYtcHCkVb8kQ", "W4BdT31Nh8knW6FcUG", "W4G0W4PM", "dr4DW43cVa", "W7FdGgD6bG", "WR1yWPe3", "44c36yEn5BQ95Pwe55UrW5NcIq", "lfJdUContSovpKZcII8", "W6ZdNvD1ca", "wmo8WRS", "amkWqGlcIa", "hSoajCkKWO3cOhnOW73dQtfNvNG", "W5Gi4P68W7pJGRW", "uwS4aMn8", "BNBdIXNcIa", "fNBLVydLIApNIjtMNzhVV6C", "DSohpttdMW", "WP7dN23dLmkjWPLAnSkb", "WPBcImkFimoB", "WP/cStqosmozWRRcP8oqu2f6WPq", "W5LLWRddQ8oajaRdSI48W4pdPWfqW4PjW4JcLEAiLUIJUEwkM+IMI+MHJUI1VUMhU+w5SmkDlM8zW4hcN8kMWPpcLSoarCo6DmonWQlcHsG", "W6NdVNFcLs8", "lfnWk0G", "sZblWQ8g", "n3ZdVCoBbNO", "vYNcHWxcVq", "a23dSmorxG", "WR7dHbRcI8kJ", "d8keetLD", "vguKymkVWOm2WPexwSkJWO9AWRBcMZ4sW7ZdH0RdT8osW6BcR2TyACovme3cQHPUW4uTweHIoSoynmo5WPyAgmoo", "pNOXxdKmWQjwtSoqk8kr", "kKpdSCoveudcGtSdWQ4", "oc5/WRpcPW", "smotW69iiG", "W5GooH0I", "FmohWRzRW5y", "WRTgWPtcTSou", "j0tdJSoAAq", "W5OAhfBcGmoGW5RcNtqdl8kaB8kIW4iqW7jLWPvIWQjdjg0LWQv0wvKjAKFdPHRcR8kMf8kzW4OCW4/cPZ4WW58eWQOBW7pcRq", "BEMhUEw6Ia", "W5HHA3OB", "WRjyWQ8pWQi", "WRiXW6K", "W6RdPqbNW7G", "WQddU8kRvstdUCk7WQ7cJHNcLCkBu8oeqCo1ACkfvgKirSk2tbbC", "WQPCWPyLWPShbCk8WRRcGG", "tCojWRr7A3ldVa", "FfNcIGRcQYjaW6i", "W5W6W41Z", "W4tdSfTDcq", "WQDoWRRcP8ow", "WRKTkq8JqbPyCN7dTa", "WQNdPMm", "cMTkaL8", "kuNdVCo6", "WPNdKSo3WOddHKVdVdWYWQznWPddSG", "W63dUehcUtu", "pSoiW5mAdq", "44ou5BU85zkc6l+b5yUWWQldRW", "WRNdPX/cMmk1", "bM4LD8k/WR8GWROcrG", "WP8my8oByW", "vmoGkCkKW6hcUWVcMcFdR8krW44", "WOKHW6tcLYddJG", "5B2W6ycW5OAa77225AE05yIW5RII6lAY5lUt", "W7O7pIyKta", "hM4Mu8k0WPi", "leNdOSovgNVcRs4lWRhdM8ozW4y", "lJrBFaqjWO0", "DwSEgNS", "EIPGWR7dUsSYySof", "WOmNW63cSZ7dKhS", "kfRdU8oerCoi", "bddcNHn2WOZdNfRcV8kXWQaN", "jvddQSoEAa", "f0aNtSkP", "udvOWP8z", "EchINi0244ow", "zK8NwmoB", "WOuvW5tcVmkw", "B8kRWPeoja", "a8k/5PMp5PAY5l6P5Ok677Yi", "WQ4TW6lcVZ4", "u2ZdMbnVWOBdTKlcRSoHW6LSWRW2WOuFACkAjW", "WP8uW6tcKSk5", "DuhdIY/cVa", "aM4YyG", "wSofWQRcTtRcN8knWRS", "77+05BAv6k6a5lM35PMw5PsX54U25P+U", "W6WSpWOJtbfUFW", "dYhcSaaD", "W7tdTfPxka", "CdL0AY4p", "WQm3W77cOG", "p0/cNspcTIHvW44eW6Cc", "rNW7aMr3", "x0dcIrVcUW", "fgddGSoDra", "wsXgWPpdTW", "5BYb6yk85OE877+T5AAo5yUk5RIx6lw/5lMY", "h8oXWRPxW7xcGmkHW4TUj8kuxLpdL8ofWRdcT8kYWRpcRCoIWO1Vh8owW5GoeJ8"].concat(function () {
        return ["q27dJI1VWORdMuC", "bSoAlshdOmoee1W7WR0yWRrcla", "WOCozSo3EG", "vCo6WRHKW67cKq", "W54dwWZdI8oIW5VcNtWlEW", "W6hcKtvGW7/dV8k5ra", "oSkBzZm", "W7VcJokCVSkr44oR", "W64qkIaW", "oNNdSCotra", "WRvSWQvVsG", "W4r/A34xFmkpvmobW5mZW4RcUwrjj2RdSLG", "hv3dUdTFW4ZcKLNcPmo3W79PW7W", "WOJcT8kIoCoc", "ux3dLqy", "W6dcNqJcG8kA", "44c35Q255PEm5AsK5yQQW5NcIEs7VUAuRUAVTUAxQU+8NW", "W4RcUmk8b8oy", "WPRdSmooWPpdMq", "W5mqW4HvWRm", "WRPUWQ5Lqa", "44od562w5yUa5AEI6lAjW6ru", "jmoPW5CkmCksCmocA8kekam", "v8oSnCkI", "44kl6kw16Aox5BMR5zoqWRxcU+IpIEw+Vem", "WRRdVdxcP8k2", "f8kSW5FdSrLPwmkIW48", "nu3dVSoBaW", "gmkjjbfz", "WRzYWRHFvSoY", "EI5IWRy", "A8oyWOVcUqW", "WPKkuq/dJmo1WO8", "W7VcJokDT8kr44oR", "Cmo1iSktWRi", "WRRdP3/dG8ko", "W4/cO+kFJrZJGya", "sCocldBdQW", "rrlcKGpcPMKAqq", "lSkTzWRcLq", "tmoPW6HxlG", "W4JcLh/dNca", "WR/dJ8kCEty", "oaKhW4dcRq", "xg/cUGhcPq", "p1ZdPCoyaxZcKZSpWRhdGmkyW5GKv0mGW6XJjwTcW4VcMMNdLratW5RdNmkP", "xmouzMmKoMaTW7lcQx7cNG", "FSo+W5j2", "W4JcVmk7nW", "WRddS8kSxstdVCkqWRhcHaxcUCktwmo1ASoKy8kaqG", "amkOW5ddOW", "44o05yM55Bkm6ksu6AodWOyI6i615B2kW7u", "W6DlAfOn", "cCkcW4ddJsO", "EmoVWQVcPrW", "dGuQW6NcMa", "e2WUy8kOWPq", "sNNdKHvVWOS", "dvNdVSoDaa", "WPbWWQTOvq", "WR8DuspdHq", "tCoCWR7cJZVdJW", "WOldLCk5tIq", "xCozWQ1jW40", "WOJdQ3HBgSkvW6NcVSo3nxbmWOJdQaJdRZ/dJsBcOIVcGL7cSblcG1e+xIhdJmkBWPDnW5uaWRhcUSoqkLCuW4/dNtWlWORcQSk3g8kNW7hcI0xcRmk4W6T5W7FdN8oRlNqHW7y", "WOldMCoKWOtdJa", "g2DxbfrM", "WOeCymoeBW", "WO7dQSkcW4PKAqddJf9o", "W5mz5lQ15A+05PgF5O6456wr77+p57cL57MG5y266yAR5P6k5AoB5ysyFJ/cG8kBW71J", "W7ZdLeZcQJ0", "r8k0WQ8umJFcR8k6WO8", "shxdTXZcJgLOWOqAWPFdNrxcGG", "umodoYC", "uSoBWR7cJYW", "W7VcJpcrVlJdM+s5JUA1SGJNVyVVVRNcQW3dISkwjSk3WRxdNSkxjUs9REIbSHNKUydLRydMKjVcOUATH+I+J+wjJ+ACTUApNUs7Vmk/WQ1w", "Bt96WR7dRG", "omkFeILH", "tG7cPr3cIG", "aCkdmG", "wcT8WQupcYxdHa", "eSo1W7Gblq", "WRbxWOeZWOO", "FwOYlH1yW5LqW48RWPPu", "u3ldKJpcQG", "44o85OU55B275A2Y562RW5ih", "WQJdLSklW7fN", "DYzY", "fNPCgu0", "A0RcLJhcScy", "ymoXW59Nma", "WRFcOX3dRh/dK8k3bSk4W4KVW6K", "o8k2lbTs", "WOKLW6/cLIq", "44cx5OQw5B+15A+256+TW4CLWP/MNB7NUjNOT73LSlZORQdLVitLRRdNRzRLP7dOTANNQ63LK6xLHApOR6C", "W43cPNBdUW0", "WRNdUG/cV8kR", "wsjRsZS", "WRz8WQ8SWP0", "fNBINz8o44gm", "44kv6kwq6Ak05BQJ5zchW5ddOv3MNQ/NUjxOTQBLSP/OR6tNNy3LUBxLKiFLPOhOTQpNQyJLK6RLH5hORPC", "d2jvpeS", "WR/dKmkcCZu", "C2/cJY3cHW", "x0dcLJ3cU2mOt3VcGmk9sHFdPmkRW4ZcOCkQkYVdRSkIWPS6WP7cVs3cHmoqWRhdQCkgW41IW4ddHJhdP8oUWP3cVcr1AmklomoxW75FWQO8WRJcHWmDrNnmW4jHECk/WQHnW5bmW7FdPCkEw0pcVmkTjmo3WP7cN8kKW5HqF8kiwrJcS356hmoHvSk+W64xWO5fWOyYqvSTW4nmWRddRHhcT23dISk/W4pcScxcPmk+z1COWOuTCuaSWRG5BLKJW4tcRtrUW4dcOqFcKrall33cHSkpWQu4F8o+W7NcT2ehW6tcPWCqWPXdW67dP8oEW6LjDaFdOd7dPJnhCmkKWOlcPx42W6ixWOqeWQZcGcbUdJpcQq", "CIbXWPldQdW", "sHXpWR/dLG", "vN/dPW", "W5KRW4LnWPFdQGJcNW", "uWpcIYG", "dwz7bK4", "WQy9W6pcKSk+", "AGTdWOBdVG", "W5BcTmk2", "W6hdGudcQaO", "W5mz4P+GDUodOG", "W4ZcSfpdIHK", "W7rCWOpdRG", "W4dcNa/cGmocW5SfpCkOW6ldGLZcSW", "W5W5gXyB", "W5xcHCkfc8oc", "smkiWR06hW", "vtvuWP/dKG", "WRnmWQ/cUSoi", "WP/dVeldI8k6", "uSojod/dSSoogq", "W7OweSoIhgKaCG5/nG", "t3ldMbDJ", "W7uUW6JcPmkoCfJcOuXIWPhcVLLq", "dSkZW6RdPqK", "W6JcMZlcVSk2gSoMAG", "as/INyv944gK", "WOCcW4BcVCkK", "tCoNj8kMW7tdNWpcPsddTCkrW5/dMW", "jCkhsYBcL2y", "yMeKoaW", "44ci6kET6AgP5BIQ5zkvCrdcOUACJoE4VoI3KowXSEITPEEEI+w4UEwsM+wKKUI0HoEQR+wsQUwgGEIVVG", "WOCexCo3Fa", "jCkwFGdcKG", "vCoCldldP8oii0qbWQWeWRLiF8kKWRdcNvhcTG", "bwaOyG", "dSk2wGZcQq", "44gR5Q2V5Pwi5AsN5yQlkbq", "xcnVWPmvcZZdIgFcTHtcUmkZWP4BoSo7eHlcMaBcIh1PW79e", "r33dMb1R", "W4VdJH7cMCkZWOTcWP7dTmkSDq", "h2VdSCoUdq", "A3BdMrRcMG", "WQldT0ZcUha", "imkyjqnG", "W7xdNsnlW7FdOmoPgXK", "e11vnh4", "W4hcVZtcH8kz", "W7tcImkzbCoD", "gmkCmtTJz28kW5BcG0lcHvhdKh7dOhSKWPi", "WQr9WOtcLmoG", "WR5hWPFcLSoEWQW", "WRnyWOdcV8ofWR0vWQe3WQRcNCk5W53dKwb7W5fovMCQW4xdLSkdl8oxyCkRW7ldIMS", "W71nAKu2", "BYKkW4JcJmkcW4pdVCoWhsxdT8oQW6a", "WQ3dT8k8tcpcOSoGW6JcGaFcO8ojgSo1wSo1yCkfsZezdCkiqXPjW5pdQCoDB03cMHhcNGvbmL7dQSogDvldOqvkW7pcNZCeWPDTWRHdWRv/WQzufSk1ECksW4VdUSoGW45XW6dcHCk2vG3cOt91WP7cP8okWPfvamoZWObBW5pcGh1MECo4vSk6bmkTWQ9vxadcQGqJkSofoxFdSG", "44kU6ksB6Agd5BI85zorWPldG+IpL+w8TSkb", "WPJdLmoVWPpdKxddGJaWWRXwWOO", "WO7cTUkCOmo844gD", "dCkNW4ddPWG", "44ky5Q6o5PsY5AA35yMPqCkR5lUf5Psr5QYN5PEz77+S", "WQfWWQznsa", "vwzneLfRv37cMSkHW6JdJSkoW5fZumoBW4SzWPtdHhnbfsD3WO4IW6jZaSoFW5ZdP8kjgSkLW5tdLhC2bSorW4HGACoQBmoSWRxdP8kPW5fMsCkQqaZdNxFdRvbZE0a", "W6uHpZic", "WQCfqmoBxMC", "wZ9fWRxdKG", "cSkfW7tdM3RdIa", "44g15BQ25zoU6l2/5yUqpbBNVPRNUBFPLQVPOzRJG73LI77MJBxcIUE4NEI1VUocR+wWJ+ITGoI8UowkOq", "bg7dVmoapq", "WOJdIc3cNSku", "WQi7tSowrG", "u1RcQXRcSW", "hY1PWOGsaYFdJ1FcUYtcVCkYW7W", "xCo0WQTa", "WOZdJCkkste", "mGxcOc80", "eSoLW68V", "CColpmkLW7C", "WQ4yvCobwhXcFq", "5BYx6ycE5OEY77215AsC5yQs5RUJ6lw35lQD", "W5vUE34", "W6VdN0RcJYO", "gmorW7amlG", "bWOfW4dcMG", "W4JdTfTDa8kFW6pcSmoT", "W5/cRSkVcmoEhmozAv3cRCombHlcLSoOoCk4hgKiFH7dImkdFmo6WQzMkSoKa1GBe3a2zw1VqCkkjCoAdmoM", "W5ldTgHkemklW6/cSCo3", "WPhcPmkUpSot", "q8oImSk3", "WQiCBCo8BG", "W4mVW6RcTM8", "BN0YaGbEW4D8", "e3eXESkVWOmYWROowCkSW5rwWQRcHJ0", "W7VcU13dStS", "WPRdMHBcP8kS", "mCoWW48hdq", "ot4DW4NcMG", "W67dRMRcMmkMptGkFdxcO2HraSoeWO4bx3PAdaNcGCo6yN3cNmoTDbdcQMjzWRzfoILVALldTCknW7ZcK2/dHq", "WQX8DeL4gGLVBxNcR8kg", "WOhdPb3cP8kD", "mddINOvD44oU", "vh3dKHz0WO4", "keRdN8oQzq", "WO0axCoowW", "rrjLwda", "AZ9YWRBdRISYFCoeWPBdUSoIrKinsCkpW54x", "b8oYW5G3pq", "W4G6W4THWPW", "qrdcKapcVgehvW", "77YS5BwE6k+25lME5PMN5PsD54I05PYE", "W47dPdXwW4m", "Es5WrYGCWOLwrCkCtSosW6hcSaZcKSoavSkwbNNdRLVdR246", "w3NdPa", "uLWIumolsG", "5BYs6yoK5OE477Yy5AEm5yI+5RIh6lso5lQT", "duBdSmoNhq", "W4hdN2BcLI8", "oCkDCYNcJMftlW", "WPXeWQRcLSoG", "W5zQEW", "wvSDv8oO", "44cx6ksd6AgK5BIu5zcwW4CL", "xSohWQJcTsdcL8kqWQ0", "WPelW5lcPYa", "AKOskWW", "qSk/W4hdSanVwCkLW7qMWQ3cICkCkG", "W6GjW5emWOuDa8kBWO8", "hhVdN8oWoW", "44gp5lIM5l615Q+r5PsyjCos", "WP3dIWNcNmk/", "WO7dQSkcW4PKAqddJf8", "WOeVW7FcSW", "WOFdLCk8scG", "WPJdMr7cNCk7WO9cWQ/dQq", "ySoLnCkoW5a", "W7RcIc3cK8k9jmoQySkBn8ohWOi", "BSohf8kfW5a", "W43cTxhdMIRdNSk1WOuGyCoBnG", "44ko56Y35yM85Awi6lwVgv8", "eh9vafu", "WO7cTUACPEAvRoEiHEAFHU+/MW", "ESodWO5IW5K", "W5FcUhRdJtC", "y0RcUqpcLa", "W6ZcKmkqj8oy", "W63dO0hcRtW", "rfGNBG", "amo1W7qdaG", "wKmWlx8", "puFdUSoV", "WO3dQmo8C8kQWOBdK1e", "sgddRddcJG", "WPDUzNTE", "WPVdLSoYWPldKq", "W6SmhqW4", "WRlcPM3dLmo2s8kW", "W7ddJ3BcVqq", "rmojpJRdSmoii1Sa", "W4/cKSk5lmor", "W43cVsVcL8kb", "t8oclqZdVSocdLC", "DulcIXJcIq", "W4/cQmkHkW", "WRaLorOHwHXMBZxcQmkArcBcMSoWaclcI8ojpCkyudVdUmkfWOVdTCoUtmk4ue3dQIRdUWifWRNdIeNdNLS+WOpdNIhdOq", "W73cP1NdHYK", "WRftWRPjFq", "WQVdMYlcOmkG", "DCkMWPOzoCkIzmobCmotFfu", "lqxcOa", "EMNcSJ7cRW", "WOpdLN/dNmoLrSk2mSojF8kuW4VdUXBcJCktvxxLHANMIBtLIiCM", "W4RcRSk3mCo6W4/cHG7dLq", "WORdL8kaW45L", "WQjDWOpcUW", "zG7cJdJcRG", "h8kHvt/cOG", "WRHuWOOJWPWC", "xLCmhHa", "6zMe5P2q5BUr5PwO77Y2", "uCo4W5XljW", "iuFdRSoEwCov", "tNe5fKu", "WP0TBSo/sq", "cxZdJ8oFeq", "W5BcO8kZd8ki", "gSoHW7uPmsO", "ESogWRL1W58", "WQddSCk6yZ7dTW", "W4r8AM0cFSk1tmoq", "WPNdKSoWWO3dLuZdHG", "whyTgh9H", "tEMeVEw5La", "WPSFDmorDa", "WRnyWPNdOmkbWRaBWQCZWQtcN8k7W5tcJg54WO8dqYeOW5JdIa", "WQZdR3NcH8kSoWi8Aa", "BdDHxtK", "bddcNGb+WPldTL3cR8kXWQaN", "WPtdRv3dQCku", "WOJdPSoZWPJdNG", "ESojW45Vlq", "ah3dJajeWO3dIfNcRSkU", "vXTNzbO", "W47dQwLDcq", "W5e1W5P9WPtdRJRcNSoLWRJdLa", "oJDJxGmtWPXst8op", "44ci6kET6AgP5BIQ5zkvCrdNV4dNURhPLA3POQFJGBZLIRFMJ6j357MU6lEm44cW5Bk/6k2X55Yh5BMu5zk8", "44cn5BIP5zgz6l+t5yU8r8oD", "W6GoW5XzWPW", "s8oqkmkcWQq", "h8oRW5ddOWnTACkGW448W6ddL8oBCSodW4hdUmokC8oHWQXUWOPOWPddQSkjW4lcI8kdcCoJrCkTf8kBWQNcS8oIWORcO8kuWR0PpmkwWPddGSoSeSoHma1WW4yGut7dQJBcHXO5ymkvDG", "wX5vWQ3dTW", "as/INiX944gK", "f3mZsCkOWO8", "W5L44P6iW7BJG60", "WQFdS8kVCcC", "qapcLJ0", "WQNdUN/cSCkHpZaW", "smoqWQNcMt3cKCkoWRCJ", "44o65BUi5zok6lYC5yIufCkd", "44cy6iYO5y2T5BM95zccW68Y", "oJD6sMe", "W4eFW55WWRy", "WOpdJvxdLCkuWOC", "W7VcKmkqdSo3", "oJj2wduEWPHGwSkECmohW6pcGaRcJCkyvSklf3NdPg3dQsCDW7BdQ23dUvyTWQhcHW", "EZ1KWOJdRICDEa", "kapcOW8Pkq", "WOpdIuVdNCkAWOLw", "WOWGW6FcTYO", "44ko6kAp6AoD5BIg5zcagv/OJRdLVOW6", "WRGdqmoWrxS", "WOJdVahcQSkZ", "WQPCWPyLWPShbCk8WRO", "WONdIW/cJG", "cWCbW4RcKa", "bs99ztKI", "dCkMW68VnINcMmkFWRTAkgddKCknW4ldImkDWPBdHmopi8oHWQNdStZdG0HcWOW5W4jHshLEec5HdSkUsmk9WOqZaG", "bSonocpdJmodhv8bW6m", "rqVcHG", "WQZdQSkS", "tmoGWP7cQq4", "WPhdOmkwW7X/Da", "umo3WRLnW4y", "W5ZcKNVdHIK", "aCo1i8kKW7FcJqxcMXFdUCkqW57cHCkS", "W43cUmkIl8o6W4VcHG", "WPhcPSkfaSor", "bConW6Swfa", "WOuBW7/cN8k5", "WOqNW6C", "eSowW6O0dW", "44oz5Q+V5Pw/5AA45yM+zh3KUP/ML6NMRlZMLRlVViy", "A8oQW5jUla", "rq7cJG", "lZC3W7pcRa", "DYfYWRldOG", "77605PQV5Psj5PEK6zsn776r", "44c15lMO5l+c5QY55PA4mLFKU67ML7VMRPZML6/VVAO", "W6dcGIy", "W5CRW5X8WPVdPb3dIa", "FCoIWO3cHZu", "W74/W65aWO8", "44cP6iYb5y6w5BQP5zk0W7m85OIw5yI96Aco6k+/5y+S6i6e5B+sW6O", "jeBdRCo+uW", "WQvjWPNcPW", "vwJdMqjeWPddNfBcPSo6W64", "qva3", "WQDdWRTZtG", "W6yBW4NdQ8kEW6KIWRWMWQ3cP8or", "WOtcT8k2emoUW5JcKW/dK8ovW55qWOqhW501WOfxi8kmq0TuW6xdOYBdHmovqatcRq4aWOtcNZXgEhetW48bW4BcLNe0FbJcN1vxw8oSEvBdRa", "WRRdPSoHWQtdOa", "sa3cHrNcUNO", "FYn6", "AuRcIIBcUG", "WQfLWR1HsSo5qtRdUCocWPddJ8o0", "sCo6WQXv", "WPddNeVdNCksWOLslCkgW4ZdTblcLmovF8oRWRRdJCoeBLafuhxcLSklW7CrjY9R", "s8knpd4Q", "CI3cKJtcOa", "W4RcMYpcICk1", "BZ1zWQW4", "W5VcP2RdOXu", "W5tdHIfDW4i", "Fu7cJJZcVc5VW7Gj", "hmkhCqlcSW"];
      }());
    }());
  }();
  _0x4d6b = function () {
    return _0x2f4732;
  };
  return _0x4d6b();
}
;
function getVersion(_0x50ee15 = 3000) {
  const _0x19df60 = _0x5a417e,
    _0x4341c0 = {
      "eBmtC": _0x19df60(799, "9@rc")
    };
  return new Promise(_0x1643e6 => {
    const _0x4302ad = _0x19df60,
      _0x1949e8 = {
        "ZPPjA": function (_0x153bcb, _0x135332) {
          return _0x153bcb(_0x135332);
        },
        "UwWfx": _0x4341c0[_0x4302ad(1545, "As2o")]
      };
    let _0x46e1e3 = {
      "url": "https://ghproxy.com/https://raw.githubusercontent.com/qq274023/lekebo/master/lekebo_kww.js"
    };
    $[_0x4302ad(1347, "sneV")](_0x46e1e3, async (_0x3e0cc0, _0x4f12d3, _0x52d443) => {
      const _0x2e2d82 = _0x4302ad,
        _0x21ca50 = {
          "lxUbr": function (_0x317500, _0x50eabe) {
            const _0x425b07 = _0x4dd4;
            return _0x1949e8[_0x425b07(1461, "8))q")](_0x317500, _0x50eabe);
          }
        };
      if (_0x2e2d82(992, "0qAp") === _0x1949e8["UwWfx"]) _0x21ca50["lxUbr"](_0x498178, _0x2e2d82(1035, "$*Nv") + this[_0x2e2d82(598, "sRn*")] + _0x2e2d82(1468, "KwiO") + _0x558a1c[_0x2e2d82(1224, "R61R")][_0x2e2d82(638, "8WT[")] + _0x2e2d82(431, "8))q"));else try {
        scriptVersionLatest = _0x52d443[_0x2e2d82(1378, "8WT[")](/scriptVersion = "([\d\.]+)"/)[1], update_data = _0x52d443[_0x2e2d82(1356, "mHsY")](/update_data = "(.*?)"/)[1];
      } catch (_0xbd9d7e) {
        $["logErr"](_0xbd9d7e, _0x4f12d3);
      } finally {
        _0x2e2d82(1042, "Pl2K") !== _0x2e2d82(768, "9@rc") ? _0x1643e6() : _0x4fa04a[_0x2e2d82(1501, "0qAp")](_0x567e68, _0x1a1f03);
      }
    }, _0x50ee15);
  });
}
function randomString(_0xab8b55) {
  const _0x331ba8 = _0x5a417e,
    _0x59e75e = {
      "DVivY": function (_0x208201, _0x55ec53) {
        return _0x208201 || _0x55ec53;
      },
      "yDgbO": "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
      "QFzYL": function (_0x3c3c4f, _0x144edb) {
        return _0x3c3c4f * _0x144edb;
      }
    };
  _0xab8b55 = _0x59e75e[_0x331ba8(1168, "8WT[")](_0xab8b55, 32);
  var _0xf551c2 = _0x59e75e[_0x331ba8(1230, "XZTf")],
    _0x43d446 = _0xf551c2["length"],
    _0x522b7c = "";
  for (i = 0; i < _0xab8b55; i++) _0x522b7c += _0xf551c2["charAt"](Math[_0x331ba8(914, "E0y6")](_0x59e75e[_0x331ba8(568, "5sE@")](Math[_0x331ba8(1231, "HlZ6")](), _0x43d446)));
  return _0x522b7c;
}
function randomsstring(_0x2e4866, _0x227422 = "abcdefhijkmnprstwxyz123456789") {
  const _0x1f1438 = _0x5a417e,
    _0x5590c0 = {
      "pvgRt": function (_0x2aa286, _0x3c8a61) {
        return _0x2aa286 || _0x3c8a61;
      },
      "ZdWuR": function (_0x357a91, _0x1b5a02) {
        return _0x357a91 * _0x1b5a02;
      }
    };
  _0x2e4866 = _0x5590c0[_0x1f1438(1409, "E0y6")](_0x2e4866, 32);
  let _0x3aff1c = _0x227422[_0x1f1438(678, "E0y6")],
    _0x4f1c73 = "";
  for (let _0x2883de = 0; _0x2883de < _0x2e4866; _0x2883de++) _0x4f1c73 += _0x227422["charAt"](Math[_0x1f1438(1315, "sneV")](_0x5590c0[_0x1f1438(506, "sneV")](Math["random"](), _0x3aff1c)));
  return _0x4f1c73;
}
function randomNum(_0x1058d8, _0x2100e0) {
  const _0x21258e = _0x5a417e,
    _0x527ea6 = {
      "JkxHc": function (_0x4ee235, _0x27638b) {
        return _0x4ee235 === _0x27638b;
      },
      "MtpYw": function (_0x52e7c2, _0x328d39) {
        return _0x52e7c2 - _0x328d39;
      },
      "VXewP": function (_0x10982d, _0x2aeaea) {
        return _0x10982d + _0x2aeaea;
      },
      "dfTmW": function (_0x58648f, _0x11e088) {
        return _0x58648f * _0x11e088;
      },
      "FliqD": function (_0x1f995e, _0x2bec74) {
        return _0x1f995e * _0x2bec74;
      }
    };
  if (_0x527ea6[_0x21258e(730, "XE9O")](arguments[_0x21258e(561, "T6Ff")], 0)) return Math[_0x21258e(993, "#iH4")]();
  if (!_0x2100e0) _0x2100e0 = _0x527ea6[_0x21258e(1053, "oSd%")](10 ** (_0x527ea6["VXewP"](_0x527ea6[_0x21258e(675, "sRn*")](Math["log"](_0x1058d8), Math["LOG10E"]), 1) | 0), 1);
  return Math[_0x21258e(914, "E0y6")](_0x527ea6["FliqD"](Math[_0x21258e(690, "XE9O")](), _0x527ea6["VXewP"](_0x2100e0 - _0x1058d8, 1)) + _0x1058d8);
}
function getUA() {
  const _0x1d0703 = _0x5a417e,
    _0x1e0431 = {
      "PuSOX": function (_0x2e1c5d, _0x440f99, _0x57e909) {
        return _0x2e1c5d(_0x440f99, _0x57e909);
      },
      "LdAiV": "wifi",
      "pOkoJ": function (_0x1b17af, _0x2e3710, _0x584479) {
        return _0x1b17af(_0x2e3710, _0x584479);
      },
      "aJHFm": _0x1d0703(797, "XZTf"),
      "ptZja": _0x1d0703(1576, "Q$[E")
    };
  $["UUID"] = randomString(40);
  const _0x44e11d = {
    "167814": _0x1d0703(599, "sRn*"),
    "167841": "10.1.6",
    "167853": "10.2.0"
  };
  $["osVersion"] = _0x1e0431["PuSOX"](randomNum, 13, 14) + "." + _0x1e0431[_0x1d0703(1201, "8))q")](randomNum, 3, 6) + "." + randomNum(1, 3);
  let _0x39c3bc = "network/" + ["4g", "5g", _0x1e0431[_0x1d0703(906, "8))q")]][randomNum(0, 2)];
  return $["mobile"] = _0x1d0703(827, "S4Mp") + _0x1e0431["PuSOX"](randomNum, 9, 13) + "," + _0x1e0431[_0x1d0703(1167, "T6Ff")](randomNum, 1, 3), $["build"] = ["167814", _0x1e0431[_0x1d0703(546, "!gld")], _0x1e0431["ptZja"]][randomNum(0, 2)], $[_0x1d0703(810, "As2o")] = _0x44e11d[$[_0x1d0703(512, "0jFM")]], "jdapp;iPhone;" + $["appVersion"] + ";" + $["osVersion"] + ";" + $[_0x1d0703(444, "5sE@")] + _0x1d0703(1164, "8WT[") + _0x39c3bc + _0x1d0703(456, "8q%e") + $[_0x1d0703(1422, "HlZ6")] + _0x1d0703(594, "NvE7") + $[_0x1d0703(1336, "OWbR")] + _0x1d0703(1332, "$*Nv") + $[_0x1d0703(1327, "Erl2")][_0x1d0703(1198, "j7Hy")](/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}
function delay() {
  const _0x53dc46 = _0x5a417e,
    _0xcf70f3 = {
      "yVVQq": function (_0x1eb9bb, _0x480b6f) {
        return _0x1eb9bb(_0x480b6f);
      },
      "UEvfx": function (_0x37adca, _0x429cac) {
        return _0x37adca > _0x429cac;
      },
      "XumUm": function (_0x3c195f) {
        return _0x3c195f();
      },
      "qTLXq": function (_0x3362bc, _0x46ab0f) {
        return _0x3362bc === _0x46ab0f;
      },
      "AuLNT": "ekjOr",
      "VDgEn": _0x53dc46(597, "@zHk")
    };
  let _0x2884a9 = _0xcf70f3["yVVQq"](parseInt, Math[_0x53dc46(742, "oSd%")]() * 100000);
  if (_0xcf70f3[_0x53dc46(497, "OWbR")](_0x2884a9, 30000)) return _0xcf70f3[_0x53dc46(766, "DL2D")](delay);else {
    if (_0xcf70f3[_0x53dc46(1555, "Erl2")](_0xcf70f3[_0x53dc46(758, "8WT[")], _0x53dc46(1537, "*A&H"))) return console[_0x53dc46(1295, "j7Hy")](_0xcf70f3[_0x53dc46(956, "CHZX")], _0x2884a9 + "ms, \u907F\u514D\u5927\u5BB6\u8FD0\u884C\u65F6\u95F4\u4E00\u6837"), _0x2884a9;else _0x2c9913();
  }
}
var version_ = "jsjiami.com.v7";
function DoubleLog(data) {
  if ($.isNode()) {
    if (data) {
      console.log(`${data}`);
      msg += `${data}`;
    }
  } else {
    console.log(`${data}`);
    msg += `${data}`;
  }
}
async function SendMsg(message) {
  if (!message) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var notify = require("./sendNotify");
      await notify.sendNotify($.name, message);
    } else {
      $.msg($.name, "", message);
    }
  } else {
    console.log(message);
  }
}
function MD5Encrypt(a) {
  function b(a, b) {
    return a << b | a >>> 32 - b;
  }
  function c(a, b) {
    var c, d, e, f, g;
    return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f;
  }
  function d(a, b, c) {
    return a & b | ~a & c;
  }
  function e(a, b, c) {
    return a & c | b & ~c;
  }
  function f(a, b, c) {
    return a ^ b ^ c;
  }
  function g(a, b, c) {
    return b ^ (a | ~c);
  }
  function h(a, e, f, g, h, i, j) {
    return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e);
  }
  function i(a, d, f, g, h, i, j) {
    return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d);
  }
  function j(a, d, e, g, h, i, j) {
    return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d);
  }
  function k(a, d, e, f, h, i, j) {
    return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d);
  }
  function l(a) {
    for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
    return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g;
  }
  function m(a) {
    var b,
      c,
      d = "",
      e = "";
    for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
    return d;
  }
  function n(a) {
    a = a.replace(/\r\n/g, "\n");
    for (var b = "", c = 0; c < a.length; c++) {
      var d = a.charCodeAt(c);
      128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
    }
    return b;
  }
  var o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x = [],
    y = 7,
    z = 12,
    A = 17,
    B = 22,
    C = 5,
    D = 9,
    E = 14,
    F = 20,
    G = 4,
    H = 11,
    I = 16,
    J = 23,
    K = 6,
    L = 10,
    M = 15,
    N = 21;
  for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
  var O = m(t) + m(u) + m(v) + m(w);
  return O.toLowerCase();
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
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
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}