import React from "react";

const NavLogo = ({color, width, height, bgColor}) => {
  return (
    <>
      <svg
        width={width || "200"}
        height={height || ""}
        viewBox="0 0 1860 551"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_10_23)">
          <rect width="1860" height="551" fill={bgColor || "white"}/>
          <path
            d="M499 75L700.784 141.25V273.75L499 340L297.216 273.75V141.25L499 75Z"
            fill={color || "black"}
          />
          <path
            d="M256 75L457.784 141.25V273.75L256 340L54.2161 273.75V141.25L256 75Z"
            fill={color || "black"}
          />
          <path
            d="M377 226L578.784 291V421L377 486L175.216 421V291L377 226Z"
            fill={color || "black"}
          />
          <path
            d="M377 116L578.784 181V311L377 376L175.216 311V181L377 116Z"
            fill={bgColor || "white"}
          />
          <path
            d="M810.7 252L755.26 112.98L782.14 109.2L822.67 214.83L861.94 109.2H889.45L833.8 252H810.7ZM917.457 105C921.797 105 925.437 106.47 928.377 109.41C931.457 112.35 932.997 115.99 932.997 120.33C932.997 124.67 931.457 128.31 928.377 131.25C925.437 134.19 921.797 135.66 917.457 135.66C913.257 135.66 909.687 134.19 906.747 131.25C903.807 128.31 902.337 124.67 902.337 120.33C902.337 115.99 903.807 112.35 906.747 109.41C909.687 106.47 913.257 105 917.457 105ZM931.107 150.15V252H903.807V150.15H931.107ZM1033.35 165.69L984.208 229.95H1033.35L1035.45 252H951.448L947.878 237.51L996.388 172.62H955.648L950.398 150.15H1031.88L1033.35 165.69ZM1114.87 249.9C1112.63 251.72 1109.41 253.19 1105.21 254.31C1101.15 255.57 1097.51 256.2 1094.29 256.2C1081.69 256.2 1071.75 253.05 1064.47 246.75C1057.33 240.31 1053.76 231.21 1053.76 219.45V171.36H1040.11V150.36H1053.76V126.21L1080.85 121.38V150.36H1099.33L1107.73 171.36H1080.85V214.62C1080.85 219.94 1082.11 224.35 1084.63 227.85C1087.15 231.21 1090.86 232.89 1095.76 232.89C1097.58 232.89 1099.4 232.68 1101.22 232.26C1103.04 231.84 1104.93 231.14 1106.89 230.16L1114.87 249.9ZM1182.72 254.52C1165.08 254.52 1151.15 249.69 1140.93 240.03C1130.85 230.37 1125.81 217.42 1125.81 201.18C1125.81 184.94 1130.36 171.92 1139.46 162.12C1148.7 152.32 1161.23 147.42 1177.05 147.42C1193.01 147.42 1204.7 152.74 1212.12 163.38C1219.68 173.88 1223.46 186.34 1223.46 200.76V209.16H1154.79C1156.05 215.88 1159.13 221.27 1164.03 225.33C1168.93 229.25 1175.37 231.21 1183.35 231.21C1187.97 231.21 1192.1 230.65 1195.74 229.53C1199.52 228.27 1203.86 226.52 1208.76 224.28L1216.74 244.02C1211.98 247.66 1206.17 250.32 1199.31 252C1192.59 253.68 1187.06 254.52 1182.72 254.52ZM1197.63 190.89C1196.23 184.03 1193.71 178.99 1190.07 175.77C1186.43 172.41 1181.88 170.73 1176.42 170.73C1170.82 170.73 1166.13 172.48 1162.35 175.98C1158.57 179.34 1156.12 184.31 1155 190.89H1197.63ZM1292.95 170.73C1285.25 170.73 1279.23 173.67 1274.89 179.55C1270.55 185.29 1268.38 192.5 1268.38 201.18C1268.38 210 1270.55 217.21 1274.89 222.81C1279.23 228.41 1285.25 231.21 1292.95 231.21C1297.71 231.21 1301.98 230.65 1305.76 229.53C1309.68 228.27 1314.09 226.52 1318.99 224.28L1326.76 244.02C1322 247.66 1316.19 250.32 1309.33 252C1302.61 253.68 1297.08 254.52 1292.74 254.52C1276.22 254.52 1263.34 249.69 1254.1 240.03C1244.86 230.37 1240.24 217.42 1240.24 201.18C1240.24 184.94 1244.86 171.92 1254.1 162.12C1263.34 152.32 1276.22 147.42 1292.74 147.42C1297.08 147.42 1302.54 148.33 1309.12 150.15C1315.84 151.97 1321.72 154.63 1326.76 158.13L1318.99 177.66C1314.09 175.42 1309.68 173.74 1305.76 172.62C1301.98 171.36 1297.71 170.73 1292.95 170.73ZM1375.13 156.87C1379.61 153.37 1384.72 150.71 1390.46 148.89C1396.34 147.07 1401.59 146.16 1406.21 146.16C1420.07 146.16 1429.87 150.22 1435.61 158.34C1441.49 166.46 1444.43 176.4 1444.43 188.16V252H1417.13V189.42C1417.13 182.98 1415.59 178.08 1412.51 174.72C1409.43 171.22 1404.88 169.47 1398.86 169.47C1394.94 169.47 1390.88 170.52 1386.68 172.62C1382.48 174.58 1378.63 176.89 1375.13 179.55V252H1348.04V106.05L1375.13 103.74V156.87Z"
            fill={color || "black"}
          />
          <path
            d="M815.53 318.88H798.73V362.56H815.95C824.07 362.56 830.79 360.95 836.11 357.73C841.43 354.37 844.09 348.91 844.09 341.35C844.09 333.37 841.57 327.63 836.53 324.13C831.49 320.63 824.49 318.88 815.53 318.88ZM854.59 439L824.35 384.4C822.81 384.54 821.2 384.68 819.52 384.82C817.84 384.82 816.16 384.82 814.48 384.82H798.73V439H771.64V296.2H816.37C831.91 296.2 845.21 299.77 856.27 306.91C867.33 314.05 872.86 325.11 872.86 340.09C872.86 348.91 870.55 356.54 865.93 362.98C861.45 369.28 855.64 374.18 848.5 377.68L883.57 439H854.59ZM951.39 441.52C933.75 441.52 919.82 436.69 909.6 427.03C899.52 417.37 894.48 404.42 894.48 388.18C894.48 371.94 899.03 358.92 908.13 349.12C917.37 339.32 929.9 334.42 945.72 334.42C961.68 334.42 973.37 339.74 980.79 350.38C988.35 360.88 992.13 373.34 992.13 387.76V396.16H923.46C924.72 402.88 927.8 408.27 932.7 412.33C937.6 416.25 944.04 418.21 952.02 418.21C956.64 418.21 960.77 417.65 964.41 416.53C968.19 415.27 972.53 413.52 977.43 411.28L985.41 431.02C980.65 434.66 974.84 437.32 967.98 439C961.26 440.68 955.73 441.52 951.39 441.52ZM966.3 377.89C964.9 371.03 962.38 365.99 958.74 362.77C955.1 359.41 950.55 357.73 945.09 357.73C939.49 357.73 934.8 359.48 931.02 362.98C927.24 366.34 924.79 371.31 923.67 377.89H966.3ZM1072.96 364.66C1068.06 362.42 1063.51 360.74 1059.31 359.62C1055.11 358.36 1050.63 357.73 1045.87 357.73C1042.37 357.73 1039.64 358.43 1037.68 359.83C1035.86 361.09 1034.95 362.91 1034.95 365.29C1034.95 366.97 1036.07 368.58 1038.31 370.12C1040.69 371.66 1044.47 373.34 1049.65 375.16C1058.19 378.24 1066.1 382.58 1073.38 388.18C1080.66 393.64 1084.3 400.78 1084.3 409.6C1084.3 419.68 1080.66 427.52 1073.38 433.12C1066.24 438.72 1055.74 441.52 1041.88 441.52C1037.54 441.52 1031.73 440.68 1024.45 439C1017.31 437.32 1011.36 434.66 1006.6 431.02L1014.79 411.28C1019.69 413.52 1024.38 415.27 1028.86 416.53C1033.48 417.65 1037.68 418.21 1041.46 418.21C1046.5 418.21 1050.35 417.51 1053.01 416.11C1055.67 414.71 1057 412.89 1057 410.65C1057 407.85 1055.67 405.33 1053.01 403.09C1050.35 400.85 1046.15 398.82 1040.41 397C1032.29 394.34 1024.59 390.56 1017.31 385.66C1010.17 380.62 1006.6 373.9 1006.6 365.5C1006.6 355.84 1010.17 348.28 1017.31 342.82C1024.45 337.22 1034.11 334.42 1046.29 334.42C1050.63 334.42 1056.23 335.33 1063.09 337.15C1069.95 338.97 1075.97 341.63 1081.15 345.13L1072.96 364.66ZM1150.8 441.52C1134.7 441.52 1122.1 436.69 1113 427.03C1104.04 417.23 1099.56 404.14 1099.56 387.76C1099.56 371.52 1104.25 358.57 1113.63 348.91C1123.15 339.25 1136.1 334.42 1152.48 334.42C1169.42 334.42 1182.51 339.46 1191.75 349.54C1201.13 359.48 1205.82 372.57 1205.82 388.81C1205.82 405.05 1200.78 417.93 1190.7 427.45C1180.62 436.83 1167.32 441.52 1150.8 441.52ZM1177.68 388.81C1177.68 379.15 1175.51 371.59 1171.17 366.13C1166.97 360.53 1160.95 357.73 1153.11 357.73C1145.13 357.73 1138.9 360.18 1134.42 365.08C1129.94 369.98 1127.7 377.47 1127.7 387.55C1127.7 397.63 1129.59 405.26 1133.37 410.44C1137.29 415.62 1143.24 418.21 1151.22 418.21C1159.06 418.21 1165.43 415.9 1170.33 411.28C1175.23 406.52 1177.68 399.03 1177.68 388.81ZM1300.08 428.92C1295.46 433.26 1289.79 436.69 1283.07 439.21C1276.35 441.87 1270.26 443.2 1264.8 443.2C1250.94 443.2 1241.07 439.14 1235.19 431.02C1229.45 422.76 1226.58 412.82 1226.58 401.2V337.15H1254.09V399.94C1254.09 406.38 1255.63 411.35 1258.71 414.85C1261.79 418.21 1266.27 419.89 1272.15 419.89C1275.79 419.89 1279.64 418.98 1283.7 417.16C1287.76 415.34 1291.47 413.24 1294.83 410.86V337.15H1322.13V439H1307.85L1300.08 428.92ZM1404.28 337.15L1409.74 358.99C1405.12 358.99 1399.73 360.32 1393.57 362.98C1387.55 365.64 1381.6 369.56 1375.72 374.74V439H1348.42V337.15H1362.7L1371.73 352.06C1375.93 348.42 1381.04 345.06 1387.06 341.98C1393.08 338.76 1398.82 337.15 1404.28 337.15ZM1472.19 357.73C1464.49 357.73 1458.47 360.67 1454.13 366.55C1449.79 372.29 1447.62 379.5 1447.62 388.18C1447.62 397 1449.79 404.21 1454.13 409.81C1458.47 415.41 1464.49 418.21 1472.19 418.21C1476.95 418.21 1481.22 417.65 1485 416.53C1488.92 415.27 1493.33 413.52 1498.23 411.28L1506 431.02C1501.24 434.66 1495.43 437.32 1488.57 439C1481.85 440.68 1476.32 441.52 1471.98 441.52C1455.46 441.52 1442.58 436.69 1433.34 427.03C1424.1 417.37 1419.48 404.42 1419.48 388.18C1419.48 371.94 1424.1 358.92 1433.34 349.12C1442.58 339.32 1455.46 334.42 1471.98 334.42C1476.32 334.42 1481.78 335.33 1488.36 337.15C1495.08 338.97 1500.96 341.63 1506 345.13L1498.23 364.66C1493.33 362.42 1488.92 360.74 1485 359.62C1481.22 358.36 1476.95 357.73 1472.19 357.73ZM1539.46 292C1543.8 292 1547.44 293.47 1550.38 296.41C1553.46 299.35 1555 302.99 1555 307.33C1555 311.67 1553.46 315.31 1550.38 318.25C1547.44 321.19 1543.8 322.66 1539.46 322.66C1535.26 322.66 1531.69 321.19 1528.75 318.25C1525.81 315.31 1524.34 311.67 1524.34 307.33C1524.34 302.99 1525.81 299.35 1528.75 296.41C1531.69 293.47 1535.26 292 1539.46 292ZM1553.11 337.15V439H1525.81V337.15H1553.11ZM1602.01 348.07C1606.63 343.45 1612.37 339.81 1619.23 337.15C1626.23 334.49 1632.46 333.16 1637.92 333.16C1651.78 333.16 1661.58 337.22 1667.32 345.34C1673.2 353.46 1676.14 363.4 1676.14 375.16V439H1648.84V376.42C1648.84 369.98 1647.3 365.08 1644.22 361.72C1641.14 358.22 1636.66 356.47 1630.78 356.47C1626.86 356.47 1622.73 357.52 1618.39 359.62C1614.19 361.58 1610.34 363.89 1606.84 366.55V439H1579.54V337.15H1593.82L1602.01 348.07ZM1750.71 356.47C1741.19 356.47 1734.54 359.83 1730.76 366.55C1727.12 373.27 1725.3 380.2 1725.3 387.34C1725.3 395.32 1726.98 402.46 1730.34 408.76C1733.7 415.06 1740.49 418.21 1750.71 418.21C1753.93 418.21 1757.29 417.51 1760.79 416.11C1764.43 414.57 1767.79 412.82 1770.87 410.86V363.82C1767.79 361.72 1764.43 359.97 1760.79 358.57C1757.29 357.17 1753.93 356.47 1750.71 356.47ZM1798.38 337.15V438.79C1798.38 451.11 1794.18 461.4 1785.78 469.66C1777.52 478.06 1764.36 482.26 1746.3 482.26C1741.96 482.26 1735.66 481.21 1727.4 479.11C1719.14 477.15 1712.28 474.35 1706.82 470.71L1715.01 451.39C1721.31 454.47 1726.7 456.71 1731.18 458.11C1735.66 459.51 1740.49 460.21 1745.67 460.21C1753.79 460.21 1760.02 458.25 1764.36 454.33C1768.7 450.55 1770.87 445.3 1770.87 438.58V433.33C1766.53 435.85 1761.91 437.81 1757.01 439.21C1752.11 440.75 1747.56 441.52 1743.36 441.52C1728.52 441.52 1717.11 436.34 1709.13 425.98C1701.15 415.62 1697.16 402.74 1697.16 387.34C1697.16 371.94 1701.36 359.06 1709.76 348.7C1718.3 338.34 1729.92 333.16 1744.62 333.16C1749.66 333.16 1755.33 334.28 1761.63 336.52C1767.93 338.62 1773.32 341.63 1777.8 345.55L1784.1 337.15H1798.38Z"
            fill={color || "black"}
          />
        </g>
        <defs>
          <clipPath id="clip0_10_23">
            <rect width="1860" height="551" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default NavLogo;
