/* ============================================
   🗺️ 地图配置文件
   ============================================
   [EDIT-INSTITUTIONS] 在这里添加/修改合作机构
   
   添加新机构步骤：
   1. 复制下面任意一行
   2. 修改 name（英文名）和 nameZh（中文名）
   3. 修改坐标 lat（纬度）和 lng（经度）
   4. type 保持 'partner'（当前机构用 'primary'）
   
   获取坐标方法：
   - 打开 Google Maps
   - 搜索机构名称
   - 右键点击位置 → 复制坐标
   ============================================ */

// [EDIT-INSTITUTIONS] 合作机构列表
const collaborations = [
    { 
        name: 'Zhejiang University', 
        nameZh: '浙江大学', 
        lat: 30.2636, 
        lng: 120.1219, 
        type: 'primary'  // 当前机构，保持 primary
    },
    { 
        name: 'University of Manchester', 
        nameZh: '曼彻斯特大学', 
        lat: 53.4668, 
        lng: -2.2339, 
        type: 'partner' 
    },
    { 
        name: 'University of Cambridge', 
        nameZh: '剑桥大学', 
        lat: 52.2053, 
        lng: 0.1218, 
        type: 'partner' 
    },
    { 
        name: 'University College London (UCL)', 
        nameZh: '伦敦大学学院', 
        lat: 51.5246, 
        lng: -0.1340, 
        type: 'partner' 
    },
    { 
        name: 'Peking University', 
        nameZh: '北京大学', 
        lat: 39.9990, 
        lng: 116.3161, 
        type: 'partner' 
    },
    { 
        name: 'Beijing Normal University', 
        nameZh: '北京师范大学', 
        lat: 39.9602, 
        lng: 116.3686, 
        type: 'partner' 
    },
    { 
        name: 'Nanjing Normal University', 
        nameZh: '南京师范大学', 
        lat: 32.0603, 
        lng: 118.7969, 
        type: 'partner' 
    },
    { 
        name: 'The Chinese University of Hong Kong', 
        nameZh: '香港中文大学', 
        lat: 22.4194, 
        lng: 114.2069, 
        type: 'partner' 
    },
    { 
        name: 'The Education University of Hong Kong', 
        nameZh: '香港教育大学', 
        lat: 22.3827, 
        lng: 114.2042, 
        type: 'partner' 
    },
    { 
        name: 'iFLYTEK', 
        nameZh: '科大讯飞', 
        lat: 31.8639, 
        lng: 117.2808, 
        type: 'partner' 
    },
    { 
        name: 'Florida Gulf Coast University', 
        nameZh: '佛罗里达湾岸大学', 
        lat: 26.4632, 
        lng: -81.7706, 
        type: 'partner' 
    },
    { 
        name: 'National Taiwan Normal University', 
        nameZh: '台湾师范大学', 
        lat: 25.0262, 
        lng: 121.5273, 
        type: 'partner' 
    },
    { 
        name: 'UNESCO-ICHEI', 
        nameZh: '联合国教科文组织高等教育创新中心', 
        lat: 39.9042, 
        lng: 116.4074, 
        type: 'partner' 
    }
];

// 初始化地图
function initMap() {
    const map = L.map('map').setView([35.0, 105.0], 2);
    
    // 使用高德地图（国内可访问）
    L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        attribution: '© 高德地图',
        subdomains: ['1', '2', '3', '4'],
        maxZoom: 18
    }).addTo(map);

    // 添加标记点
    collaborations.forEach(loc => {
        const color = loc.type === 'primary' ? '#c53030' : '#1a365d';
        const size = loc.type === 'primary' ? 20 : 14;
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background: ${color}; width: ${size}px; height: ${size}px; border-radius: 50%; border: 3px solid white; box-shadow: 0 3px 10px rgba(0,0,0,0.4);"></div>`,
            iconSize: [size, size]
        });
        
        const displayName = currentLang === 'zh' ? loc.nameZh : loc.name;
        L.marker([loc.lat, loc.lng], { icon: icon })
            .addTo(map)
            .bindPopup(`<strong>${displayName}</strong>`);
    });
}

// 页面加载完成后初始化地图
document.addEventListener('DOMContentLoaded', initMap);