var time;
function GetAccessType(WD, domain)
{
var list = domain.split('.');
var WdInstId = list[2];
for (var i = 0; i < WD.length - 1; i++)
{
if (WD[i].WdInstId == WdInstId)
{
return WD[i].AccessType;
}
}
return '';
}
function IsAccessTypeMatched(domain, IsUMTSok)
{
if (top.gUplinkType == 'AUTO')
{
return  true;
}
if ((top.gUplinkType == GetAccessType(top.WD, domain)))
{
return true;
}
if (IsUMTSok && ('UMTS' == GetAccessType(top.WD, domain)))
{
return true;
}
return false;
}
function isSafeCharSN(val)
{
if (((val >= 'A')&&(val <= 'Z'))
||((val >= 'a')&&(val <= 'z'))
||((val >= '0')&&(val <= '9'))
||(val == ':')||(val == '/')
||(val == '-')||(val == '.')||(val == '_'))
{
return true;
}
else
{
return false;
}
}
function isSafeStringSN(val)
{
if ( val == "" )
{
return false;
}
for ( var j = 0 ; j < val.length ; j++ )
{
if ( !isSafeCharSN(val.charAt(j)) )
{
return false;
}
}
return true;
}
function IsIncludingDangerChar(val)
{
for ( var i = 0 ; i < val.length ; i++ )
{
var ch = val.charAt(i);
if (ch == ' ' || ch == '\\' )
{
return true;
}
}
return false;
}
function IsIncludingDangerCharLnsAddr(val)
{
for ( var i = 0 ; i < val.length ; i++ )
{
var ch = val.charAt(i);
if (ch == ' ' || ch == '\\' || ch == '\'' || ch == '\"')
{
return true;
}
}
return false;
}
function isValidUrlNameForLNS(url)
{
var i=0, k=0;
var invalidArray = new Array("www","com","org","net","edu","biz","coop",
"pro","gov","int","mil","ac","ad","ae","af","ag","fm",
"ai","al","am","an","ao","aq","ar","as","at","au","aw",
"az","ba","bb","bd","be","bf","bg","bh","bi","bj","bm",
"bn","bo","br","bs","bt","bv","bw","by","bz","ca","cc",
"cd","cf","cg","ch","ci","ck","cl","cm","cn","co","cr",
"cu","cv","cx","cy","cz","de","dj","dk","dm","do","dz",
"ec","ee","eg","eh","er","es","et","eu","fi","fj","fk",
"fo","fr","ga","gd","ge","gf","gg","gh","gi","gl","gm",
"gn","gp","gq","gr","gs","gt","gu","gv","gy","hk","hm",
"hn","hr","ht","hu","id","ie","il","im","in","io","iq",
"ir","is","it","je","jm","jo","jp","ke","kg","kh","ki",
"km","kn","kp","kr","kw","ky","kz","la","lb","lc","li",
"lk","lr","ls","lt","lu","lv","ly","ma","mc","md","mg",
"mh","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt",
"mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng",
"ni","nl","no","np","nr","nu","nz","om","pa","pe","pf",
"pg","ph","pk","pl","pm","pn","pr","ps","pt","pw","py",
"qa","re","ro","rw","ru","sa","sb","sc","sd","se","sg",
"sh","si","sj","sk","sl","sm","sn","so","sr","st","sv",
"sy","sz","tc","td","tf","tg","th","tj","tk","tm","tn",
"to","tp","tr","tt","tv","tw","tz","ua","ug","uk","um",
"us","uy","uz","va","vc","ve","vg","vi","vn","vu","ws",
"wf","ye","yt","yu","za","zm","zw","info","museum","name");
if (url == "")
{
return true;
}
if (isValidAscii(url) != '')
{
return false;
}
for (i = 0; i < url.length; i++)
{
if (url.charAt(i) == '\\')
{
return false;
}
}
if (url.length < 3)
{
return false;
}
var urlsplit = url.split('.');
for(j=0; j< invalidArray.length; j++)
{
if (url == invalidArray[j])
{
return false;
}
if(urlsplit[urlsplit.length - 1] == invalidArray[j])
{
k = 1;
}
}
if (1 != k)
{
return false;
}
for(i=0; i<urlsplit.length; i++)
{
if((urlsplit[i].charAt(0) == "-") || (urlsplit[i].charAt(urlsplit[i].length - 1) == "-"))
{
return false;
}
}
return true;
}
function isValidAscii(val)
{
for ( var i = 0 ; i < val.length ; i++ )
{
var ch = val.charAt(i);
if ( ch < ' ' || ch > '~' )
{
return ch;
}
}
return '';
}
function isNumberOrCharacter(val)
{
for ( var i = 0 ; i < val.length ; i++ )
{
var ch = val.charAt(i);
if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')))
{
return false;
}
}
return true;
}
function isValidCfgStr(cfgName, val, len)
{
if (isValidAscii(val) != '')
{
return false;
}
if (val.length > len)
{
return false;
}
return true;
}
function isHexaDigit(digit) {
var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f");
var len = hexVals.length;
var i = 0;
var ret = false;
for ( i = 0; i < len; i++ )
if ( digit == hexVals[i] ) break;
if ( i < len )
ret = true;
return ret;
}
function isSafeStringExc(compareStr, UnsafeStr)
{
for (var i = 0; i < compareStr.length; i++)
{
var c = compareStr.charAt(i);
if (isValidAscii(c) != '')
{
return false;
}
else
{
if (UnsafeStr.indexOf(c) > -1)
{
return false;
}
}
}
return true;
}
function isSafeStringIn(compareStr, UnsafeStr)
{
for (var i = 0; i < compareStr.length; i++)
{
var c = compareStr.charAt(i);
if (isValidAscii(c) != '')
{
return false;
}
else
{
if (UnsafeStr.indexOf(c) == -1)
{
return false;
}
}
}
return true;
}
function isValidName(name)
{
return isSafeStringExc(name,'\\');
}
function isValidString(name)
{
if (isValidAscii(name) == '')
{
return true;
}
else
{
return false;
}
}
function isInteger(value)
{
if (/^(\+|-)?\d+$/.test(value))
{
return true;
}
else
{
return false;
}
}
function isPlusInteger(value)
{
if (isInteger(value) && parseInt(value) >= 0)
{
return true;
}
else
{
return false;
}
}
function isFloat(value)
{
if (/^(\+|-)?\d+($|\.\d+$)/.test(value))
{
return true;
}
else
{
return false;
}
}
function isValidCfgInteger(cfgName, val, start, end)
{
if (isInteger(val) == false)
{
return false;
}
var temp = parseInt(val);
if (temp < start || temp > end)
{
return false;
}
}
function isValidIpAddress(address) {
var i = 0;
if ( address == '0.0.0.0' ||
address == '255.255.255.255' )
return false;
var addrParts = address.split('.');
if ( addrParts.length != 4 )
return false;
for (i = 0; i < 4; i++) {
if (isNaN(addrParts[i]) || addrParts[i] ==""
|| addrParts[i].charAt(0) == '+' ||  addrParts[i].charAt(0) == '-'
|| (addrParts[i].charAt(0) == '0' && addrParts[i].length > 1))
return false;
if (addrParts[i].length > 3 || addrParts[i].length < 1)
{
return false;
}
if (!isInteger(addrParts[i]) || addrParts[i] < 0)
{
return false;
}
num = parseInt(addrParts[i]);
if (i == 0 && num == 0)
{
return false;
}
if ( num < 0 || num > 255 )
return false;
if ((3 == i) && (255 == num))
{
return false;
}
}
return true;
}
function isCorrectIpAddress(ipAddress)
{
if (isIpFormat(ipAddress))
{
if (isAbcIpAddress(ipAddress) == false)
{
return false;
}
}
if (isValidIpAddress(ipAddress) == false)
{
return false;
}
var addrParts = ipAddress.split('.');
var num = 0;
num = parseInt(addrParts[0]);
if (num < 1 || num >= 224 || num == 127)
{
return false;
}
num = parseInt(addrParts[3]);
if ((255 == num) || (0 == num))
{
return false;
}
return true;
}
function isValidIpAddressEx(address)
{
var i = 0;
if (address == '0.0.0.0' || address == '255.255.255.255')
{
return false;
}
var addrParts = address.split('.');
if (addrParts.length != 4)
{
return false;
}
for (i = 0; i < 4; i++)
{
if (isNaN(addrParts[i]) || addrParts[i] == ""
|| addrParts[i].charAt(0) == '+' ||  addrParts[i].charAt(0) == '-'
|| (addrParts[i].charAt(0) == '0' && addrParts[i].length > 1))
{
return false;
}
if (addrParts[i].length > 3 || addrParts[i].length < 1)
{
return false;
}
if (!isInteger(addrParts[i]) || addrParts[i] < 0)
{
return false;
}
var num = parseInt(addrParts[i]);
if (i == 0 && (num <= 0 || num >= 224 || num == 127))
{
return false;
}
if (i == 3 && (num <= 0 || num == 255))
{
return false;
}
if (num < 0 || num > 255)
{
return false;
}
}
return true;
}
function isValidMaskAddress(address) {
var i = 0;
if ( address == '0.0.0.0' )
{
return false;
}
var addrParts = address.split('.');
if ( addrParts.length != 4 ) return false;
for (i = 0; i < 4; i++) {
if (isNaN(addrParts[i]) || addrParts[i] ==""
|| addrParts[i].charAt(0) == '+' ||  addrParts[i].charAt(0) == '-'
|| (addrParts[i].charAt(0) == '0' && addrParts[i].length > 1))
return false;
if (addrParts[i].length > 3 || addrParts[i].length < 1)
{
return false;
}
if (!isInteger(addrParts[i]) || addrParts[i] < 0)
{
return false;
}
num = parseInt(addrParts[i]);
if (i == 0 && num == 0)
{
return false;
}
if ( num < 0 || num > 255 )
return false;
}
return true;
}
function isBroadcastIp(ipAddress, subnetMask)
{
var maskLenNum = 0;
tmpMask = subnetMask.split('.');
tmpIp = ipAddress.split('.');
if((parseInt(tmpIp[0]) > 223) || ( 127 == parseInt(tmpIp[0])))
{
return true;
}
for(maskLenNum = 0; maskLenNum < 4; maskLenNum++)
{
if(parseInt(tmpMask[maskLenNum]) < 255)
break;
}
tmpNum0 = parseInt(tmpIp[maskLenNum]);
tmpNum1 = 255 - parseInt(tmpMask[maskLenNum]);
tmpNum2 = tmpNum0 & tmpNum1;
if((tmpNum2 != 0) && (tmpNum2 != tmpNum1))
{
return false;
}
if(maskLenNum == 3)
{
return true;
}
else if(maskLenNum == 2)
{
if(((tmpIp[3] == 0)&&(tmpNum2 == 0))||
((tmpIp[3] == 255)&&(tmpNum2 == tmpNum1)))
{
return true;
}
}
else if(maskLenNum == 1)
{
if(((tmpNum2 == 0)&&(tmpIp[3] == 0)&&(tmpIp[2] == 0)) ||
((tmpNum2 == tmpNum1)&&(tmpIp[3] == 255)&&(tmpIp[2] == 255)))
{
return true;
}
}
else if(maskLenNum == 0)
{
if(((tmpNum2 == 0)&&(tmpIp[3] == 0)&&(tmpIp[2] == 0)&&(tmpIp[1] == 0)) ||
((tmpNum2 == tmpNum1)&&(tmpIp[3] == 255)&&(tmpIp[2] == 255) &&(tmpIp[1] == 255)))
{
return true;
}
}
return false;
}
function isAbcIpAddress(address)
{
if (isValidIpAddress(address) == false)
{
return false;
}
var addrParts = address.split('.');
var num = 0;
num = parseInt(addrParts[0]);
if (num < 1 || num >= 224 || num == 127)
{
return false;
}
num = parseInt(addrParts[3]);
if (num == 255 || num == 0)
{
return false;
}
return true;
}
function isHostIpWithSubnetMask(address, subnet)
{
if (isAbcIpAddress(address) == false)
{
return false;
}
if (isValidSubnetMask(subnet) == false)
{
return false;
}
var addr = IpAddress2DecNum(address);
var mask = IpAddress2DecNum(subnet);
if (0 == (addr & (~mask)))
{
return false;
}
if (isBroadcastIp(address,subnet) == true)
{
return false;
}
return true;
}
function isInSameSubnet(ipaddress,gateway,subnet)
{
var ipFields = ipaddress.split(".");
var gatewayFields = gateway.split(".");
var subnetFields = subnet.split(".");
try
{
if ((parseInt(ipFields[0]) & parseInt(subnetFields[0])) !=
(parseInt(gatewayFields[0]) & parseInt(subnetFields[0])))
{
return false;
}
else if ( (parseInt(ipFields[1]) & parseInt(subnetFields[1])) !=
(parseInt(gatewayFields[1]) & parseInt(subnetFields[1])))
{
return false;
}
else if ((parseInt(ipFields[2]) & parseInt(subnetFields[2])) !=
(parseInt(gatewayFields[2]) & parseInt(subnetFields[2])))
{
return false;
}
else if ((parseInt(ipFields[3]) & parseInt(subnetFields[3])) !=
(parseInt(gatewayFields[3]) & parseInt(subnetFields[3])))
{
return false;
}
else{
return true;
}
}
catch(e)
{
return false;
}
}
function isBroadcastIpAddressInSubnet(ip,subnet)
{
var ipFields = ip.split(".");
var subnetFields = subnet.split(".");
try
{
if ((parseInt(ipFields[0]) | parseInt(subnetFields[0])) == 255
&& (parseInt(ipFields[1]) | parseInt(subnetFields[1])) == 255
&& (parseInt(ipFields[2]) | parseInt(subnetFields[2])) == 255
&& (parseInt(ipFields[3]) | parseInt(subnetFields[3])) == 255)
{
return true;
}
else
{
return false;
}
}
catch(e)
{
return false;
}
}
function isDeIpAddress(address)
{
if (isValidIpAddress(address) == false)
{
return false;
}
var num = 0;
var addrParts = address.split('.');
if (addrParts.length != 4)
{
return false;
}
if (!isInteger(addrParts[0]) || addrParts[0] < 0 )
{
return false;
}
num = parseInt(addrParts[0]);
if (!(num >= 224 && num <= 247))
{
return false;
}
for (var i = 1; i <= 3; i++)
{
if (!isInteger(addrParts[i]) || addrParts[i] < 0)
{
return false;
}
num = parseInt(addrParts[i]);
if (!(num >= 0 && num <= 255))
{
return false;
}
}
return true;
}
function isBroadcastIpAddress(address)
{
if (isValidIpAddress(address) == false)
{
return false;
}
var addrParts = address.split('.');
if (addrParts[3] == '255')
{
return true;
}
return false;
}
function isLoopIpAddress(address)
{
if (isValidIpAddress(address) == false)
{
return false;
}
var addrParts = address.split('.');
if (addrParts[0] == '127')
{
return true;
}
return false;
}
function ParseIpv6Array(str)
{
var Num;
var i,j;
var finalAddrArray = new Array();
var falseAddrArray = new Array();
var addrArray = str.split(':');
Num = addrArray.length;
if (Num > 8)
{
return falseAddrArray;
}
for (i = 0; i < Num; i++)
{
if ((addrArray[i].length > 4)
|| (addrArray[i].length < 1))
{
return falseAddrArray;
}
for (j = 0; j < addrArray[i].length; j++)
{
if ((addrArray[i].charAt(j) < '0')
|| (addrArray[i].charAt(j) > 'f')
|| ((addrArray[i].charAt(j) > '9') &&
(addrArray[i].charAt(j) < 'a')))
{
return falseAddrArray;
}
}
finalAddrArray[i] = '';
for (j = 0; j < (4 - addrArray[i].length); j++)
{
finalAddrArray[i] += '0';
}
finalAddrArray[i] += addrArray[i];
}
return finalAddrArray;
}
function getFullIpv6Address(address)
{
var c = '';
var i = 0, j = 0, k = 0, n = 0;
var startAddress = new Array();
var endAddress = new Array();
var finalAddress = '';
var startNum = 0;
var endNum = 0;
var lowerAddress;
var totalNum = 0;
lowerAddress = address.toLowerCase();
var addrParts = lowerAddress.split('::');
if (addrParts.length == 2)
{
if (addrParts[0] != '')
{
startAddress = ParseIpv6Array(addrParts[0]);
if (startAddress.length == 0)
{
return '';
}
}
if (addrParts[1] != '')
{
endAddress = ParseIpv6Array(addrParts[1]);
if (endAddress.length == 0)
{
return '';
}
}
if (startAddress.length +  endAddress.length >= 8)
{
return '';
}
}
else if (addrParts.length == 1)
{
startAddress = ParseIpv6Array(addrParts[0]);
if (startAddress.length != 8)
{
return '';
}
}
else
{
return '';
}
for (i = 0; i < startAddress.length; i++)
{
finalAddress += startAddress[i];
if (i != 7)
{
finalAddress += ':';
}
}
for (; i < 8 - endAddress.length; i++)
{
finalAddress += '0000';
if (i != 7)
{
finalAddress += ':';
}
}
for (; i < 8; i++)
{
finalAddress += endAddress[i - (8 - endAddress.length)];
if (i != 7)
{
finalAddress += ':';
}
}
return finalAddress;
}
function isIpv6Address(address)
{
if (getFullIpv6Address(address) == '')
{
return false;
}
return true;
}
function isUnicastIpv6Address(address)
{
var tempAddress = getFullIpv6Address(address);
if ((tempAddress == '')
|| (tempAddress == '0000:0000:0000:0000:0000:0000:0000:0000')
|| (tempAddress == '0000:0000:0000:0000:0000:0000:0000:0001')
|| (tempAddress.substring(0, 2) == 'ff'))
{
return false;
}
return true;
}
function isGlobalIpv6Address(address)
{
var tempAddress = getFullIpv6Address(address);
if ((tempAddress == '')
|| (tempAddress == '0000:0000:0000:0000:0000:0000:0000:0000')
|| (tempAddress == '0000:0000:0000:0000:0000:0000:0000:0001')
|| (tempAddress.substring(0, 3) == 'fe8')
|| (tempAddress.substring(0, 3) == 'fe9')
|| (tempAddress.substring(0, 3) == 'fea')
|| (tempAddress.substring(0, 3) == 'feb')
|| (tempAddress.substring(0, 2) == 'ff'))
{
return false;
}
return true;
}
function parseHex(hexStr, base)
{
var i = 0;
x = 0;
for (i = 0; i < hexStr.length; i++)
{
if (('0' <= hexStr.charAt(i)) && ('9' >= hexStr.charAt(i)))
{
x = x * base + (hexStr.charAt(i) - '0');
}
else if ((16 == base) && ('a' <=hexStr.charAt(i)) && ('f' >=hexStr.charAt(i)))
{
x = x * base + (hexStr.charAt(i) - 'a');
}
else if ((16 == base) && ('A' <= hexStr.charAt(i)) && ('F' >= hexStr.charAt(i)))
{
x = x * base + (hexStr.charAt(i) - 'A');
}
else
{
return (-1);
}
}
return x;
}
function CompareTwoAddress(addr1, plen1, addr2, plen2)
{
var x = 0;
var j = 0;
var i = 0;
var addr1Tmp = getFullIpv6Address(addr1);
var addr2Tmp = getFullIpv6Address(addr2);
if ((addr1Tmp == '') || (addr2Tmp == ''))
{
return false;
}
var addr1Comp = addr1Tmp.split(':');
var addr2Comp = addr2Tmp.split(':');
if (plen1 != plen2)
{
return false;
}
x = (plen1 / 16);
for (i = 0; i < 8; i++)
{
if ((i <= x) && ((i + 1) >= x))
{
x = i;
break;
}
}
for (i = 0; i < x; i++)
{
if (addr1Comp[i] != addr2Comp[i])
{
return false;
}
}
j = plen1 % 16;
if (0 == j)    
{
return true;
}
x1 = parseHex(addr1Comp[x], 16);
x2 = parseHex(addr2Comp[x], 16);
if ((x1 ^ x2) >= (1 << (16 - j)))
{
return false;
}
return true;
}
function getLeftMostZeroBitPos(num)
{
var i = 0;
var numArr = [128, 64, 32, 16, 8, 4, 2, 1];
for ( i = 0; i < numArr.length; i++ )
if ( (num & numArr[i]) == 0 )
return i;
return numArr.length;
}
function getRightMostOneBitPos(num) {
var i = 0;
var numArr = [1, 2, 4, 8, 16, 32, 64, 128];
for ( i = 0; i < numArr.length; i++ )
if ( ((num & numArr[i]) >> i) == 1 )
return (numArr.length - i - 1);
return -1;
}
function isValidSubnetMask(mask) {
var i = 0, num = 0;
var zeroBitPos = 0, oneBitPos = 0;
var zeroBitExisted = false;
if ( mask == '0.0.0.0' )
return false;
var maskParts = mask.split('.');
if ( maskParts.length != 4 ) return false;
for (i = 0; i < 4; i++) {
if ( isNaN(maskParts[i]) == true || maskParts[i] == ""
|| maskParts[i].charAt(0) == '+' ||  maskParts[i].charAt(0) == '-'
|| (maskParts[i].charAt(0) == '0'
&& maskParts[i].length > 1))
return false;
if (!isInteger(maskParts[i]) || maskParts[i] < 0)
{
return false;
}
num = parseInt(maskParts[i]);
if ( num < 0 || num > 255 )
return false;
if ( zeroBitExisted == true && num != 0 )
return false;
zeroBitPos = getLeftMostZeroBitPos(num);
oneBitPos = getRightMostOneBitPos(num);
if ( zeroBitPos < oneBitPos )
return false;
if ( zeroBitPos < 8 )
zeroBitExisted = true;
}
return true;
}
function isValidPort(port)
{
if (!isInteger(port) || port < 1 || port > 65535)
{
return false;
}
return true;
}
function isValidPortPair(StartPort,EndPort)
{
if (!isValidPort(StartPort) || !isValidPort(EndPort))
{
return false;
}
if (parseInt(StartPort) <= parseInt(EndPort) )
return false;
return true;
}
function isValidMacAddress(address)
{
var c = '';
var i = 0, j = 0;
if ( address.toLowerCase() == 'ff:ff:ff:ff:ff:ff' || address.toLowerCase() == '00:00:00:00:00:00')
{
return false;
}
addrParts = address.split(':');
if ( addrParts.length != 6 ) return false;
for (i = 0; i < 6; i++) {
if ( addrParts[i] == '' )
return false;
if ( addrParts[i].length != 2)
{
return false;
}
if ( addrParts[i].length != 2)
{
return false;
}
for ( j = 0; j < addrParts[i].length; j++ ) {
c = addrParts[i].toLowerCase().charAt(j);
if ( (c >= '0' && c <= '9') ||
(c >= 'a' && c <= 'f') )
continue;
else
return false;
}
}
return true;
}
function isNtwkSgmtIpAddress(address)
{
if (isValidIpAddress(address) == false)
{
return false;
}
var addrParts = address.split('.');
if (addrParts[3] == '0')
{
return true;
}
return false;
}
function isSameSubNet(Ip1, Mask1, Ip2, Mask2)
{
var count = 0;
lan1a = Ip1.split('.');
lan1m = Mask1.split('.');
lan2a = Ip2.split('.');
lan2m = Mask2.split('.');
for (i = 0; i < 4; i++)
{
l1a_n = parseInt(lan1a[i]);
l1m_n = parseInt(lan1m[i]);
l2a_n = parseInt(lan2a[i]);
l2m_n = parseInt(lan2m[i]);
if ((l1a_n & l1m_n) == (l2a_n & l2m_n))
count++;
}
if (count == 4)
return true;
else
return false;
}
function IpAddress2DecNum(address)
{
if (isValidIpAddress(address) == false)
{
return -1;
}
var addrParts = address.split('.');
var num = 0;
for (i = 0; i < 4; i++)
{
num += parseInt(addrParts[i]) * Math.pow(256, 3 - i);
}
return num;
}
function isBlankCtrVal(val)
{
if( val == '')
{
return false;
}
else
{
return true;
}
}
function getElById(sId)
{
return getElement(sId);
}
function getElementById(sId)
{
if (document.getElementById)
{
return document.getElementById(sId);
}
else if (document.all)
{
return document.all(sId);
}
else if (document.layers)
{
return document.layers[sId];
}
else
{
return null;
}
}
function getElementByName(sId)
{    
if (document.getElementsByName)
{
var element = document.getElementsByName(sId);
if (element.length == 0)
{
return null;
}
else if (element.length == 1)
{
return     element[0];
}
return element;
}
}
function getElement(sId)
{
var ele = getElementByName(sId);
if (ele == null)
{
return getElementById(sId);
}
return ele;
}
function getOptionIndex(sId,sValue)
{
var selObj = getElement(sId);
if (selObj == null)
{
return -1;
}
for (i = 0; i < selObj.length; i++)
{
if (selObj.options[i].value == sValue)
{
return i;
}
}
return -1;
}
function getValue(sId)
{
var item;
if (null == (item = getElement(sId)))
{
debug(sId + " is not existed" );
return -1;
}
return item.value;
}
function getValueDft(sId)
{
var type;
if (-1 == (type = getType(sId)))
{
return -1;
}
else if (type == 'text' || type == 'TEXT')
{
return getValue(sId);
}
else if (type == 'radio' || type == 'RADIO')
{
return getRadioVal(sId);
}
else if (type == 'checkbox' || type == 'CHECKBOX')
{
return getCheckVal(sId);
}
else
{
return getValue(sId);
}
}
function getType(sId)
{
var item;
if (null == (item = getElement(sId)))
{
debug(sId + "is not existed")
return -1
}
if (item.length > 1)
{
return item[0].type
}
return item.type
}
function setDisplay (sId, sh)
{
var status;
if (sh > 0)
{
status = "";
}
else
{
status = "none";
}
getElement(sId).style.display = status;
}
function setVisible(sId, sh)
{
var status;
if (sh > 0)
{
status = "visible";
}
else
{
status = "hidden"
}
getElement(sId).style.visibility = status;
}
function setSelect(sId, sValue)
{
var item;
if (null == (item = getElement(sId)))
{
debug(sId + " is not existed" );
return false;
}
for (var i = 0; i < item.options.length; i++)
{
if (item.options[i].value == sValue)
{
item.selectedIndex = i;
return true;
}
}
debug("the option which value is " + sValue + " is not existed in " + sId);
return false;
}
function setText (sId, sValue)
{
var item;
if (null == (item = getElement(sId)))
{
debug(sId + " is not existed" );
return false;
}
item.value = sValue;
return true;
}
function setCheck(sId, value)
{
var item;
if (null == (item = getElement(sId)))
{
debug(sId + " is not existed" );
return false;
}
if ( value == '1' )
{
item.checked = true;
}
else
{
item.checked = false;
}
return true;
}
function setRadio(sId, sValue)
{
var item;
if (null == (item = getElement(sId)))
{
debug(sId + " is not existed" );
return false;
}
for (i=0; i<item.length; i++)
{
if (item[i].value == sValue)
{
item[i].checked = true;
return true;
}
}
debug("the option which value is " + sValue + " is not existed in " + sId);
return false;
}
function setValueDft(sId, sValue)
{
var type;
if (-1 == (type = getType(sId)))
{
return -1;
}
else if (type == 'text' || type == 'TEXT')
{
setText (sId, sValue);
}
else if (type == 'radio' || type == 'RADIO')
{
setRadio(sId, sValue);
}
else if (type == 'checkbox' || type == 'CHECKBOX')
{
setCheck(sId, sValue);
}
else
{
setSelect(sId, sValue);
}
}
function setDisable(sId, flag)
{
var item;
if (null == (item = getElement(sId)))
{
debug(sId + " is not existed" );
return false;
}
if ( flag == 1 || flag == '1' )
{
item.disabled = true;
}
else
{
item.disabled = false;
}
return true;
}
function getCheckVal(sId)
{
var item;
if (null == (item = getElement(sId)))
{
debug(sId + " is not existed" );
return -1;
}
if (item.checked == true)
{
return 1;
}
else
{
return 0;
}
}
function getRadioVal(sId)
{
var item;
if (null == (item = getElement(sId)))
{
debug(sId + " is not existed" );
return -1;
}
for (i = 0; i < item.length; i++)
{
if (item[i].checked == true)
{
return item[i].value;
}
}
return -1;
}
function getSelectVal(sId)
{
return getValue(sId);
}
function addOption(sId,OptionName,OptionValue,OptionText)
{
var Param = document.createElement("option");
Param.setAttribute('name',OptionName);
Param.setAttribute('value',OptionValue);
Param.innerHTML = OptionText;
var selItem;
if ((selItem = getElement(sId)) != null)
{
selItem.appendChild(Param);
return Param;
}
else
{
debug(sId + " is not existed" );
return null;
}
}
function removeOption(sId,sValue)
{
var selItem;
if ((selItem = getElement(sId)) != null)
{
var index = getOptionIndex(sId,sValue);
if (index >= 0)
{
selItem.removeChild(selItem.options[index]);
return true;
}
else
{
debug("the option which value is " + sValue + " is not existed" );
return false;
}
}
debug(sId + " is not existed" );
return false;
}
function removeAllOption(sId)
{
var selItem;
if ((selItem = getElement(sId)) != null)
{
selItem.length = 0;
return true;
}
debug(sId + " is not existed" );
return false;
}
function webSubmitForm(sFormName, DomainNamePrefix)
{
this.setPrefix = function(Prefix)
{
if (Prefix == null)
{
this.DomainNamePrefix = '.';
}
else
{
this.DomainNamePrefix = Prefix + '.';
}
}
this.getDomainName = function(sName){
if (this.DomainNamePrefix == '.')
{
return sName;
}
else
{
return this.DomainNamePrefix + sName;
}
}
this.getNewSubmitForm = function()
{
var submitForm = document.createElement("FORM");
document.body.appendChild(submitForm);
submitForm.method = "POST";
return submitForm;
}
this.createNewFormElement = function (elementName, elementValue){
var newElement = document.createElement('INPUT');
newElement.setAttribute('name',elementName);
newElement.setAttribute('value',elementValue);
newElement.setAttribute('type','hidden');
return newElement;
}
this.addForm = function(sFormName,DomainNamePrefix){
this.setPrefix(DomainNamePrefix);
var srcForm = getElement(sFormName);
if (srcForm != null && srcForm.length > 0 && this.oForm != null
&& srcForm.style.display != 'none')
{
MakeCheckBoxValue(srcForm);
for(i=0; i < srcForm.elements.length; i++)
{
var type = srcForm.elements[i].type;
if (type != 'button' && srcForm.elements[i].disabled == false)
{
if (this.DomainNamePrefix != '.')
{
var ele = this.createNewFormElement(this.DomainNamePrefix
+ srcForm.elements[i].name,
srcForm.elements[i].value);
this.oForm.appendChild(ele);
}
else
{
var ele = this.createNewFormElement(srcForm.elements[i].name,
srcForm.elements[i].value
);
this.oForm.appendChild(ele);
}
}
}
}
else
{
this.status = false;
}
this.DomainNamePrefix = '.';
}
this.addDiv = function(sDivName,Prefix)
{
if (Prefix == null)
{
Prefix = '';
}
else
{
Prefix += '.';
}
var srcDiv = getElement(sDivName);
if (srcDiv == null)
{
debug(sDivName + ' is not existed!')
return;
}
if (srcDiv.style.display == 'none')
{
return;
}
var eleSelect = srcDiv.getElementsByTagName("select");
if (eleSelect != null)
{
for (k = 0; k < eleSelect.length; k++)
{
if (eleSelect[k].disabled == false)
{
this.addParameter(Prefix+eleSelect[k].name,eleSelect[k].value)
}
}
}
MakeCheckBoxValue(srcDiv);
var eleInput = srcDiv.getElementsByTagName("input");
if (eleInput != null)
{
for (k = 0; k < eleInput.length; k++)
{
if (eleInput[k].type != 'button' && eleInput[k].disabled == false)
{
this.addParameter(Prefix+eleInput[k].name,eleInput[k].value)
}
}
}
}
this.addParameter = function(sName, sValue){
var DomainName = this.getDomainName(sName);
for(i=0; i < this.oForm.elements.length; i++)
{
if(this.oForm.elements[i].name == DomainName)
{
this.oForm.elements[i].value = sValue;
this.oForm.elements[i].disabled = false;
return;
}
}
if(i == this.oForm.elements.length)
{
var ele = this.createNewFormElement(DomainName,sValue);
this.oForm.appendChild(ele);
}
}
this.delParameter = function(sName){
var item;
var DomainName = this.getDomainName(sName);
len = this.oForm.elements.length;
for(i=0; i < len; i++)
{
if (this.oForm.elements[i].name == DomainName)
{
item = this.oForm.elements[i]
item.parentNode.removeChild(item);
return;
}
}
}
this.disableElement = function(sName){
var DomainName = this.getDomainName(sName);
for(i=0; i < this.oForm.elements.length; i++)
{
if(this.oForm.elements[i].name == DomainName)
{
this.oForm.elements[i].disabled = true;
return;
}
}
}
this.usingPrefix = function(Prefix){
this.DomainNamePrefix = Prefix + '.';
}
this.endPrefix = function(){
this.DomainNamePrefix = '.';
}
this.setMethod = function(sMethod) {
if(sMethod.toUpperCase() == "GET")
this.oForm.method = "GET";
else
this.oForm.method = "POST";
};
this.setAction = function(sUrl) {
this.oForm.action = sUrl;
var findlog =  sUrl.indexOf('login');
if( findlog == -1)
{
var temp = sUrl.lastIndexOf('/') + 1;
top.previousPage = sUrl.substr(temp);
}
}
this.setTarget = function(sTarget) {
this.oForm.target = sTarget;
};
this.submit = function(sURL, sMethod) {
if( sURL != null && sURL != "" ) this.setAction(sURL);
if( sMethod != null && sMethod!= "" ) this.setMethod(sMethod);
if (this.status == true)
this.oForm.submit();
};
this.status = true;
this.setPrefix(DomainNamePrefix);
this.oForm = this.getNewSubmitForm();
if (sFormName != null && sFormName != '')
{
this.addForm(sFormName,this.DomainNamePrefix);
}
}
function MakeCheckBoxValue(srcForm)
{
var Inputs = srcForm.getElementsByTagName("input");
for (var i = 0; i < Inputs.length; i++)
{
if (Inputs[i].type == "checkbox")
{
var CheckBox = getElement(Inputs[i].name);
if (CheckBox.checked == true)
{
CheckBox.value = 1;
}
else
{
CheckBox.value = 0;
}
}
else if (Inputs[i].type == "radio")
{
var radio = getElement(Inputs[i].name);
for (k = 0; k < radio.length; k++)
{
if (radio[k].checked == false)
{
radio[k].disabled = true;
}
}
}
}
}
function Submit(type)
{
if ('' != top.errStrStr)
{
ClearErro();
}
top.errStrStr = '';
top.errIdCtrlStr = '';
showLoginMenu()
var temp = CheckForm(type)
if (top.errStrStr == '' && false != temp)
{
var Form = new webSubmitForm();
AddSubmitParam(Form,type);
Form.submit();
}
else
{
if (top.errStrStr != '')
{
setDisplay('erroinfo', 1)
setErrInfo();
}
}
}
function FW_Submit(type)
{
if ('' != top.errStrStr)
{
ClearErro();
}
top.errStrStr = '';
top.errIdCtrlStr = '';
showLoginMenu()
var temp = Sun_Submit();
if (top.errStrStr != '' && false == temp)
{
setDisplay('erroinfo', 1)
setErrInfo();
}
}
function FinishLoad()
{
}
function DoUnload()
{
}
function DoLogout()
{
}
function CreateXMLHttp()
{
var xmlhttp = null;
var aVersions = ["MSXML2.XMLHttp.5.0","MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0",
"MSXML2.XMLHttp","Microsoft.XMLHttp"];
if(window.XMLHttpRequest)
{
try
{
xmlhttp = new XMLHttpRequest();
}
catch (e)
{
}
}
else
{
if(window.ActiveXObject)
{
for (var i=0; i<5; i++)
{
try
{
xmlhttp = new ActiveXObject(aVersions[i]);
return xmlhttp;
}
catch (e)
{
}
}
}
}
return xmlhttp;
}
function AjaxGetStatus(SendMethod, SendUrl, SendContent)
{
uxmlhttp = CreateXMLHttp();
uxmlhttp.onreadystatechange = StateChange;
uxmlhttp.open(SendMethod, SendUrl, true);
if (SendContent == 'null' || SendContent == 'undefined')
{
uxmlhttp.send(null);
}
else
{
uxmlhttp.send(SendContent);
}
}
function AssociateParam(dest,src,name)
{
var DestObj = eval(dest);
var SrcObj = eval(src);
var NameArray = name.split('|');
for (j = 0; j < DestObj.length; j++)
{
if (DestObj[j] == null)
break;
for (i = 0; i < SrcObj.length; i++)
{
if (SrcObj[i] == null)
break;
if (DestObj[j].key.indexOf(SrcObj[i].key) > -1)
{
try
{
eval(dest + '[' + j + ']' + '.' + 'Relating' + '='
+ src + '[' + i + ']');
}
catch (e)
{
}
for (k = 0; k < NameArray.length; k++)
{
if (NameArray[k] == '')
{
continue;
}
try
{
eval(dest + '[' + j + ']' + '.' + NameArray[k] + '='
+ src + '[' + i + ']' + '.' + NameArray[k]);
}
catch (e)
{
}
}
break;
}
}
}
}
function toBreakWord(val,lineLength)
{
var content = '';
var index = 0;
var len = val.length;
while (len > lineLength)
{
content += val.substr(index,lineLength) + '<br>';
len -= lineLength;
index += lineLength;
}
content += val.substr(index);
return content;
}
function getBoolValue(param)
{
var value = parseInt(param);
if (isNaN(value) == true )
{
var LowerParam = param.toLowerCase();
if (LowerParam == 'enable')
{
return 1;
}
else
{
return 0;
}
}
else
{
return value;
}
}
function debug(info)
{
}
function getDisplayText(val,lineLength)
{
if (lineLength == null)
lineLength = 20;
var content = '';
var index = 0;
var len = val.length;
while (len > lineLength)
{
content += val.substr(index,lineLength) + '\n';
len -= lineLength;
index += lineLength;
}
content += val.substr(index);
return content;
}
function isIpFormat(str)
{
var addrParts = str.split('.');
if (addrParts.length != 4 )
return false;
for(var i=0;i<addrParts.length;i++)
{
if (isPlusInteger(addrParts[i]) == false)
{
return false;
}
}
return true;
}
function isValidDomain(domainName, maxLength)
{
var labelName;
var i;
var ch;
var localMaxLength = 255;
var bContainPointFlag = false;
if (0 != maxLength)
{
localMaxLength = maxLength;
}
if (domainName.length > localMaxLength || domainName.length < 1)
{
return false;
}
if (domainName == '.')
{
return true;
}
while(domainName.indexOf(".") != -1)
{
labelName = domainName.substring(0, domainName.indexOf("."));
if (labelName.length > 63 || labelName.length < 1)
{
return false;
}
for (i = 0 ; i < labelName.length ; i++ )
{
ch = labelName.charAt(i);
if (!(ch >= '!' && ch <= '~') )
{
return false;
}
}
domainName = domainName.substring(domainName.indexOf(".")+1,domainName.length);
bContainPointFlag = true;
}
if (false == bContainPointFlag)
{
return false;
}
if (domainName.length > 63)
{
return false;
}
for ( i = 0 ; i < domainName.length ; i++ )
{
ch = domainName.charAt(i);
if (!(ch >= '!' && ch <= '~') )
{
return false;
}
}
return true;
}
function isValidIPDomain(ipStr,maxLength)
{
if (isIpFormat(ipStr))
{
if (isAbcIpAddress(ipStr) == false)
{
return false;
}
}
else
{
if(isValidDomain(ipStr,maxLength) == false)
{
return false;
}
}
return true;
}
function isIpv6Format(ipStr)
{
var addrParts = ipStr.substr(1, ipStr.length-2).split(":");
var num1 = ipStr.substr(1, ipStr.length-2).split(":");
var num2 = ipStr.substr(1, ipStr.length-2).split("::");
var ch;
if((ipStr.substr(0, 1) == "[") && (ipStr.substr(ipStr.length-1, 1) == "]"))
{
if ((num1.length < 2) || (num1.length > 8) || (num2.length > 2))
{
return false;
}
}
else
{
return false;
}
for(var i=0;i<addrParts.length;i++)
{
if ((addrParts[i].length > 4) && (addrParts[i] != ""))
{
return false;
}
if (addrParts[i] != "")
{
for(var j=0;j<addrParts[i].length;j++)
{
ch = addrParts[i].charAt(j);
if (!((('a' <= ch) && ('f' >= ch))
|| (('A' <= ch) && ('F' >= ch))
||(('0' <= ch) && ('9' >= ch))))
{
return false;
}
}
}
}
return true;
}
function isValidV4V6IPDomain(ipStr,maxLength)
{
if (isValidIPDomain(ipStr,maxLength))
{
return true;
}
else
{
if(isIpv6Format(ipStr) == false)
{
return false;
}
}
return true;
}
function showLoginMenu()
{
if (typeof(top.logofrm.getElement) == 'undefined')
{
setTimeout("showLoginMenu()",100);
}
else
{
top.logofrm.getElement('sethelp').style.color = '#000000';
}
}
function GetmenuName(fileName)
{
if (top.curUserType == 0)
{
for (var i = 0; i < AdminMenuName.length; i++)
{
if( fileName == AdminMenuName[i])
{
return i;
}
}
}
else if (top.curUserType == 1)
{
for (var i = 0; i < UserMenuName.length; i++)
{
if( fileName == UserMenuName[i])
{
return i;
}
}
}
else
{
return -1;
}
}
function UpdateMenuByFileName(temp)
{
if(top.curUserType == 0)
{
var menuThr = AdminMenuId[temp];
}
else if(top.curUserType == 1)
{
var menuThr = UserMenuId[temp];
}
return menuThr;
}
function ReLocation(cookie,menuName)
{
var ThirdMenu = '';
var initaddr = cookie.substr(cookie.indexOf('ThirdMenu') + 1);
var initaddr = initaddr.substr(initaddr.indexOf('=') + 1);
var index = initaddr.indexOf(';');
if (index > -1)
{
var endaddr = initaddr.substr(index);
var length = initaddr.length - endaddr.length;
ThirdMenu = initaddr.substring(0,length);
}
else
{
ThirdMenu = initaddr;
}
var menucookie = ThirdMenu.split('_');
var menucoFir = menucookie[0] + '_' + menucookie[1];
var menucoSec = menucoFir + '_' + menucookie[2];
var menus = menuName.split('_');
var menuFir = menus[0] + '_' + menus[1];
var menuSec = menuFir + '_' + menus[2];
top.g_thirdmenu = menuName;
var cookie = "FirstMenu=" + menuFir + "; path=/";
document.cookie = cookie;
var cookie = "SecondMenu=" + menuSec + "; path=/";
document.cookie = cookie;
var cookie = "ThirdMenu=" + menuName + "; path=/";
document.cookie = cookie;
if (menuName != ThirdMenu)
{
if(menucoSec != menuSec)
{
top.menufrm.expandMenu(menuSec);
top.menufrm.showTableMenu();
showTableMenu(menuName,ThirdMenu,0);
}
else
{
showTableMenu(menuName,ThirdMenu,1);
}
}
}
function showTableMenu(menuName,ThirdMenu,type)
{
if (typeof(top.tabfrm.makeBackTable) == 'undefined')
{
setTimeout("showTableMenu()",100);
}
else
{
top.tabfrm.makeBackTable(menuName,ThirdMenu,type);
}
}
function isNeedLogOut()
{
if (time == 1)
{
top.location.replace('/html/index.asp');
}
else if(time == 2)
{
top.contentfrm.location.replace('/html/msgerrcode.asp');
}
}
function fixPNG(myImage) {
var arVersion = navigator.appVersion.split("MSIE");
var version = parseFloat(arVersion[1]);
if ((version >= 5.5) && (version < 7) && (document.body.filters))
{
var imgID = (myImage.id) ? "id='" + myImage.id + "' " : "";
var imgClass = (myImage.className) ? "class='" + myImage.className + "' " : "";
var imgTitle = (myImage.title) ? "title='" + myImage.title   + "' " : "title='" + myImage.alt + "' ";
var imgStyle = "display:inline-block;" + myImage.style.cssText;
var strNewHTML = "<span " + imgID + imgClass + imgTitle
+ " style=\"" + "width:" + myImage.width
+ "px; height:" + myImage.height
+ "px;" + imgStyle + ";"
+ "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
+ "(src=\'" + myImage.src + "\', sizingMethod='scale');\"></span>";
myImage.outerHTML = strNewHTML;
} }
function loadFrameHook()
{
isNeedLogOut()
}
function ChangeHtmlToBlank(SrcStr)
{
var DestStr = '';
var re = /&nbsp;/g;
DestStr = SrcStr.replace(re, ' ');
return DestStr;
}
function ChangeBlankToHtml(SrcStr)
{
var DestStr = '';
var ulLength = SrcStr.length;
var re = /\s/g;
DestStr = SrcStr.replace(re, '&nbsp;');
return DestStr;
}
function TransAcc(AccStr)
{
if('' == AccStr)
{
return 1;
}
else
{
return 0;
}
}
function RC4_EnDecrypt(ucPlaintext)
{
var i = 0;
var j = 0;
var k = 0;                                  
var keyString = new String("just for test");    
var streamKey = 0;                         
var ucSwapTemp = 0;                       
var ucSbox = new Array(256);              
var cryptText = "";
var key = new Array(256);
for (i=0; i<keyString.length; i++)
{
key[i]=keyString.charCodeAt(i);
}
for (i=0;i<256;i++)
{
ucSbox[i]=i;
key[i]=key[i%keyString.length];
}
for (i=0; i<256; i++)
{
j=(j+ucSbox[i]+key[i])%256;
ucSwapTemp = ucSbox[i];
ucSbox[i] = ucSbox[j];
ucSbox[j] = ucSwapTemp;
}
for(k=0; k<ucPlaintext.length; k++)
{
i = (i + 1) % 256;
j = (j + ucSbox[i]) % 256;
ucSwapTemp = ucSbox[i];
ucSbox[i] = ucSbox[j];
ucSbox[j] = ucSwapTemp;
streamKey = (ucSbox[i] + ucSbox[j]) % 256;
cryptText += String.fromCharCode(ucPlaintext.charCodeAt(k) ^ ucSbox[streamKey]);
}
return cryptText;
}
function base64encode(str) {
var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var out, i, len;
var c1, c2, c3;
len = str.length;
i = 0;
out = "";
while(i < len) {
c1 = str.charCodeAt(i++) & 0xff;
if(i == len)
{
out += base64EncodeChars.charAt(c1 >> 2);
out += base64EncodeChars.charAt((c1 & 0x3) << 4);
out += "==";
break;
}
c2 = str.charCodeAt(i++);
if(i == len)
{
out += base64EncodeChars.charAt(c1 >> 2);
out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
out += base64EncodeChars.charAt((c2 & 0xF) << 2);
out += "=";
break;
}
c3 = str.charCodeAt(i++);
out += base64EncodeChars.charAt(c1 >> 2);
out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
out += base64EncodeChars.charAt(c3 & 0x3F);
}
return out;
}
function base64decode(str) {
var base64DecodeChars = new Array(
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
-1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
-1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
var c1, c2, c3, c4;
var i, len, out;
len = str.length;
i = 0;
out = "";
while(i < len) {
do {
c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
} while(i < len && c1 == -1);
if(c1 == -1)
break;
do {
c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
} while(i < len && c2 == -1);
if(c2 == -1)
break;
out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
do {
c3 = str.charCodeAt(i++) & 0xff;
if(c3 == 61)
return out;
c3 = base64DecodeChars[c3];
} while(i < len && c3 == -1);
if(c3 == -1)
break;
out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
do {
c4 = str.charCodeAt(i++) & 0xff;
if(c4 == 61)
return out;
c4 = base64DecodeChars[c4];
} while(i < len && c4 == -1);
if(c4 == -1)
break;
out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
}
return out;
}
var Vname = /^[\w-@\.]*$/;
var Vpwd=/^[\w-!@#\$%\^&\*\(\)=\+\[\];\'\/\.,\{\}<>\\"]*$/;
function checkKeyStrength(obj,imgid)
{
if (obj.value == '@1GV)Z<!')
{
document.getElementById(imgid).style.display = 'none';
}
else if (obj.value.length > 0)
{
pwStrength(obj.value,imgid);
}
else
{
document.getElementById(imgid).style.display = 'none';
}
}
function CharMode(iN)
{
if (iN >= 48 && iN <= 57) 
{
return 1;
}
if (iN >= 65 && iN <= 90) 
{
return 2;
}
if (iN >= 97 && iN <= 122) 
{
return 4;
}
else
{
return 8; 
}
}
function bitTotal(num)
{
var modes=0;
for (var i = 0; i < 4;i++)
{
if (num & 1) modes++;
num>>>=1;
}
return modes;
}
function checkStrong(sPW)
{
var Modes=0;
var plus=0;
for (var i = 0; i < sPW.length; i++)
{
Modes|=CharMode(sPW.charCodeAt(i));
}
if(sPW.length <= 4 || bitTotal(Modes) == 1)
{
return 1;
}
else if (sPW.length <= 7 || bitTotal(Modes) == 1 || Modes == 3 || Modes == 5)
{
return 2;
}
else
{
return 3;
}
}
function pwStrength(pwd,img)
{
var L=document.getElementById(img);
L.style.display = '';
if (pwd !=null && pwd !='')
{
S_level=checkStrong(pwd);
switch(S_level)
{
case 1:
L.src="/images/password_3.gif";
L.alt='Password strength low';
L.title='Password strength low';
break;
case 2:
L.src="/images/password_2.gif";
L.alt='Password strength medium';
L.title='Password strength medium';
break;
case 3:
L.src="/images/password_1.gif";
L.alt='Password strength good';
L.title='Password strength good';
break;
default:
}
}
else
{
L.style.display = 'none';
}
return;
}
function getSafeString(srcStr)
{
var charEntities =
[
{ "char": "&",  "name": "&amp;"},
{ "char": "<",  "name": "&lt;"},
{ "char": ">",  "name": "&gt;"},
{ "char": "\"", "name": "&quot;"}
];
var tempStr = srcStr;
for (var i = 0 ; i < charEntities.length; i++)
{
tempStr = tempStr.replace(new RegExp(charEntities[i]["char"], "g"), charEntities[i]["name"]);
}
return tempStr;
}
function SHA256(s){
var chrsz   = 8;
var hexcase = 0;
function safe_add (x, y) {
var lsw = (x & 0xFFFF) + (y & 0xFFFF);
var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
return (msw << 16) | (lsw & 0xFFFF);
}
function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
function R (X, n) { return ( X >>> n ); }
function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
function core_sha256 (m, l) {
var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
var W = new Array(64);
var a, b, c, d, e, f, g, h, i, j;
var T1, T2;
m[l >> 5] |= 0x80 << (24 - l % 32);
m[((l + 64 >> 9) << 4) + 15] = l;
for ( var i = 0; i<m.length; i+=16 ) {
a = HASH[0];
b = HASH[1];
c = HASH[2];
d = HASH[3];
e = HASH[4];
f = HASH[5];
g = HASH[6];
h = HASH[7];
for ( var j = 0; j<64; j++) {
if (j < 16) W[j] = m[j + i];
else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
T2 = safe_add(Sigma0256(a), Maj(a, b, c));
h = g;
g = f;
f = e;
e = safe_add(d, T1);
d = c;
c = b;
b = a;
a = safe_add(T1, T2);
}
HASH[0] = safe_add(a, HASH[0]);
HASH[1] = safe_add(b, HASH[1]);
HASH[2] = safe_add(c, HASH[2]);
HASH[3] = safe_add(d, HASH[3]);
HASH[4] = safe_add(e, HASH[4]);
HASH[5] = safe_add(f, HASH[5]);
HASH[6] = safe_add(g, HASH[6]);
HASH[7] = safe_add(h, HASH[7]);
}
return HASH;
}
function str2binb (str) {
var bin = Array();
var mask = (1 << chrsz) - 1;
for(var i = 0; i < str.length * chrsz; i += chrsz) {
bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
}
return bin;
}
function Utf8Encode(string) {
string = string.replace(/\r\n/g,"\n");
var utftext = "";
for (var n = 0; n < string.length; n++) {
var c = string.charCodeAt(n);
if (c < 128) {
utftext += String.fromCharCode(c);
}
else if((c > 127) && (c < 2048)) {
utftext += String.fromCharCode((c >> 6) | 192);
utftext += String.fromCharCode((c & 63) | 128);
}
else {
utftext += String.fromCharCode((c >> 12) | 224);
utftext += String.fromCharCode(((c >> 6) & 63) | 128);
utftext += String.fromCharCode((c & 63) | 128);
}
}
return utftext;
}
function binb2hex (binarray) {
var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
var str = "";
for(var i = 0; i < binarray.length * 4; i++) {
str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
}
return str;
}
s = Utf8Encode(s);
return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}/*---------------------------------*/

AdminMenuName = new Array('deviceinfo.asp','internetstatus.asp','dslinfo.asp','internet.asp','ethenet.asp','wlaninfo.asp','wan.asp','dhcp.asp','dhcp6s.asp','radvd.asp','wlan.asp','wlmacflt.asp','dsl.asp','route.asp','rip.asp','route6.asp','firewall.asp','dosattack.asp','macfilter.asp','ipfilter.asp','appfilter.asp','urlfilter.asp','acl.asp','alg.asp','dmz.asp','portmapping.asp','porttrigger.asp','ddns.asp','igmpsnooping.asp','mld.asp','qos.asp','qosclass.asp','sntp.asp','tr069.asp','tr111.asp','upnp.asp','account.asp','reset.asp','cfgfile.asp','firmware.asp','diagnose.asp','logcfg.asp','logview.asp','wizard.asp','help_content.html');
AdminMenuId = new Array('Admin_0_0_0','Admin_0_1_0','Admin_0_1_1','Admin_0_2_0','Admin_0_2_1','Admin_0_3_0','Admin_1_0_0','Admin_1_1_0','Admin_1_1_1','Admin_1_1_2','Admin_1_2_0','Admin_1_2_1','Admin_1_3_0','Admin_2_0_0','Admin_2_0_1','Admin_2_0_2','Admin_2_1_0','Admin_2_1_1','Admin_2_2_0','Admin_2_2_1','Admin_2_2_2','Admin_2_2_3','Admin_2_3_0','Admin_2_4_0','Admin_2_4_1','Admin_2_4_2','Admin_2_4_3','Admin_2_5_0','Admin_2_6_0','Admin_2_6_1','Admin_2_7_0','Admin_2_7_1','Admin_2_8_0','Admin_2_9_0','Admin_2_9_1','Admin_2_10_0','Admin_3_0_0','Admin_3_1_0','Admin_3_1_1','Admin_3_1_2','Admin_3_2_0','Admin_3_3_0','Admin_3_3_1','Admin_4_0_0','Admin_5_0_0');
UserMenuName = new Array('deviceinfo.asp','internetstatus.asp','dslinfo.asp','internet.asp','ethenet.asp','wlaninfo.asp','ppp.asp','wlan.asp','wlmacflt.asp','macfilter.asp','ipfilter.asp','appfilter.asp','urlfilter.asp','portmapping.asp','porttrigger.asp','ddns.asp','sntp.asp','account.asp','reset.asp','upgrade.asp','diagnose.asp','logcfg.asp','logview.asp','help_content_usr.html');
UserMenuId = new Array('User_0_0_0','User_0_1_0','User_0_1_1','User_0_2_0','User_0_2_1','User_0_3_0','User_1_0_0','User_1_1_0','User_1_1_1','User_2_0_0','User_2_0_1','User_2_0_2','User_2_0_3','User_2_1_0','User_2_1_1','User_2_2_0','User_2_3_0','User_3_0_0','User_3_1_0','User_3_1_1','User_3_2_0','User_3_3_0','User_3_3_1','User_4_0_0');