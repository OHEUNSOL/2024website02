<template>
  <div>
    <div>지도 {{ moveLat }} / {{ moveLng }}</div>
    <div id="map" style="width: 100vw; height: 100vh"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

// Vuex 스토어 사용
const store = useStore();

// 위치 관련 상태
const latitude = ref(0);
const longitude = ref(0);
const moveLat = ref(0);
const moveLng = ref(0);

// 지도 객체 및 마커 배열
let map;
let markers = [];

// Kakao 지도 초기화 함수
const initMap = (lat, lng) => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(lat, lng),
    level: 5,
  };

  map = new kakao.maps.Map(container, options); // 지도 생성

  // var imageSrc =
  //   "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
  // imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
  // imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
};

// var imageSrc =
//     "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
//   imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
//   imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

//   // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
//   var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),

// 마커를 지도에 추가하는 함수
const addMarkers = (restaurants) => {
  if (!window.kakao || !kakao.maps) {
    console.error("Kakao Maps API가 아직 로드되지 않았습니다.");
    return;
  }

  // 기존 마커 제거
  markers.forEach((marker) => marker.setMap(null));
  markers = [];

  // 지도의 새로운 영역 (마커들이 모두 보이도록 설정)
  const bounds = new kakao.maps.LatLngBounds();

  // 새로운 마커 추가
  restaurants.forEach((restaurant) => {
    const markerPosition = new kakao.maps.LatLng(
      restaurant.location.lat,
      restaurant.location.lng
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,

      // image: markerImage,
    });

    var iwContent = `<div style="padding:5px;">${restaurant.name}(${restaurant.category})</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
    });

    marker.setMap(map); // 마커를 지도에 추가
    markers.push(marker); // markers 배열에 마커 저장

    // 현재 마커의 위치를 bounds에 추가
    bounds.extend(markerPosition);
  });

  // 모든 마커가 보이도록 지도 범위 조정
  map.setBounds(bounds);
};

// Kakao Maps API를 동적으로 로드하는 함수
const loadKakaoMaps = () => {
  return new Promise((resolve) => {
    if (window.kakao && window.kakao.maps) {
      resolve(); // 이미 Kakao Maps가 로드된 경우
    } else {
      const script = document.createElement("script");
      script.onload = () => {
        kakao.maps.load(resolve); // API 로드가 완료되면 resolve
      };
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5eadb8794aed21f30daed9535fc33f8b";
      document.head.appendChild(script);
    }
  });
};

// onMounted: 페이지가 로드될 때 지도를 초기화하고 사용자 위치로 중심 이동
onMounted(async () => {
  if (!("geolocation" in navigator)) {
    return;
  }

  // Kakao Maps API 로드
  await loadKakaoMaps();

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      // 지도 초기화 (사용자 위치를 중심으로)
      initMap(latitude.value, longitude.value);
    },
    (err) => {
      alert(err.message);
    }
  );
});

// Vuex에서 필터링된 레스토랑 가져오기
const filteredRestaurants = store.getters.filteredRestaurants;

// 필터 적용 시 지도에 마커 추가 및 지도의 중심 및 줌 레벨 조정
store.watch(
  () => store.getters.filteredRestaurants,
  (newRestaurants) => {
    if (newRestaurants.length > 0) {
      addMarkers(newRestaurants); // 필터링된 레스토랑을 마커로 표시
    } else {
      console.warn("해당하는 레스토랑이 없습니다.");
    }
  }
);
</script>

<style lang="scss" scoped></style>
