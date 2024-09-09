import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "hyejuzeonza",
        password: "123",
        username: "윤혜주",
        image: "https://picsum.photos/100",
      },
      {
        userid: "avokido",
        password: "123",
        username: "오은솔",
        image: "https://picsum.photos/100",
      },
      {
        userid: "10ganzi",
        password: "123",
        username: "이예린",
        image: "https://picsum.photos/100",
      },
    ],

    restaurant: [
      {
        name: "오구당당",
        category: "한식",
        location: {
          lat: 37.4935704,
          lng: 126.7220056,
        },
        district: "부평구",
      },
      {
        name: "천유향",
        category: "중식",
        location: {
          lat: 37.48746,
          lng: 126.7252,
        },
        district: "부평구",
      },

      {
        name: "삼미당",
        category: "일식",
        location: {
          lat: 37.49702,
          lng: 126.7227,
        },
        district: "부평구",
      },

      {
        name: "세븐스플로어",
        category: "양식",
        location: {
          lat: 37.49282,
          lng: 126.7227,
        },
        district: "부평구",
      },

      {
        name: "정정아식당",
        category: "한식",
        location: {
          lat: 37.51348,
          lng: 126.7047,
        },
        district: "부평구",
      },

      {
        name: "황금곱창",
        category: "한식",
        location: {
          lat: 37.52566,
          lng: 126.7125,
        },
        district: "계양구",
      },

      {
        name: "호우양꼬치",
        category: "중식",
        location: {
          lat: 37.53561,
          lng: 126.7368,
        },
        district: "계양구",
      },

      {
        name: "카제스시",
        category: "일식",
        location: {
          lat: 37.54375,
          lng: 126.7268,
        },
        district: "계양구",
      },

      {
        name: "꽃게생각",
        category: "한식",
        location: {
          lat: 37.53642,
          lng: 126.7348,
        },
        district: "계양구",
      },

      {
        name: "잇츠",
        category: "양식",
        location: {
          lat: 37.53645,
          lng: 126.7376,
        },
        district: "계양구",
      },

      {
        name: "을왕리꾸덕집",
        category: "한식",
        location: {
          lat: 37.44619,
          lng: 126.3841,
        },
        district: "중구",
      },

      {
        name: "럭키차이나",
        category: "중식",
        location: {
          lat: 37.47508,
          lng: 126.6191,
        },
        district: "중구",
      },

      {
        name: "월미",
        category: "일식",
        location: {
          lat: 37.47256,
          lng: 126.6241,
        },
        district: "중구",
      },

      {
        name: "이뜰리",
        category: "양식",
        location: {
          lat: 37.47092,
          lng: 126.6277,
        },
        district: "중구",
      },

      {
        name: "중화루",
        category: "중식",
        location: {
          lat: 37.47179,
          lng: 126.6238,
        },
        district: "중구",
      },

      {
        name: "뼛집",
        category: "한식",
        location: {
          lat: 37.46636,
          lng: 126.6821,
        },
        district: "미추홀구",
      },

      {
        name: "리차이",
        category: "중식",
        location: {
          lat: 37.4388,
          lng: 126.6617,
        },
        district: "미추홀구",
      },

      {
        name: "국제식당",
        category: "일식",
        location: {
          lat: 37.45658,
          lng: 126.6515,
        },
        district: "미추홀구",
      },

      {
        name: "미식당",
        category: "양식",
        location: {
          lat: 37.45171,
          lng: 126.6561,
        },
        district: "미추홀구",
      },

      {
        name: "치즈웨이브",
        category: "양식",
        location: {
          lat: 37.44784,
          lng: 126.6497,
        },
        district: "미추홀구",
      },
    ],

    filters: {
      categories: [],
      districts: [],
    },
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },

    setCategoryFilter(state, categories) {
      state.filters.categories = categories;
    },
    setDistrictFilter(state, districts) {
      state.filters.districts = districts;
    },
  },

  getters: {
    filteredRestaurants(state) {
      return state.restaurant.filter((res) => {
        const matchesCategory =
          state.filters.categories.length === 0 ||
          state.filters.categories.includes(res.category);
        const matchesDistrict =
          state.filters.districts.length === 0 ||
          state.filters.districts.includes(res.district);
        return matchesCategory && matchesDistrict;
      });
    },
  },
});
