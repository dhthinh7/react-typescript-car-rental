import Ads2 from '@/assets/images/AdsTwo.png';
import LgAllNewRush from '@/assets/images/Car/LgAllNewRush.png';
import LgAllNewTerios from '@/assets/images/Car/LgAllNewTerios.png';
import LgCRV from '@/assets/images/Car/LgCR-V.png';
import LgKoenigsegg from '@/assets/images/Car/LgKoenigsegg.png';
import LgMGZXExcite from '@/assets/images/Car/LgMGZXExcite.png';
import LgMGZXExclusice from '@/assets/images/Car/LgMGZXExclusice.png';
import LgMGZS from '@/assets/images/Car/LgNewMGZS-1.png';
import LgNewMGZS from '@/assets/images/Car/LgNewMGZS.png';
import LgRollsRuyce from '@/assets/images/Car/LgNissanGT-R-1.png';
import LgNissanGTR from '@/assets/images/Car/LgNissanGT-R.png';
import SmAllNewRush from '@/assets/images/Car/SmAllNewRush.png';
import SmCRV from '@/assets/images/Car/SmCRV.png';
import SmKoenigsegg from '@/assets/images/Car/SmKoenigsegg.png';
import Look1 from '@/assets/images/Car/look1.png';
import Look2 from '@/assets/images/Car/look2.png';
import Look3 from '@/assets/images/Car/look3.png';
import User1 from '@/assets/images/user/user1.png';
import User2 from '@/assets/images/user/user2.png';
import User3 from '@/assets/images/user/user3.png';
import User4 from '@/assets/images/user/user4.png';
import User5 from '@/assets/images/user/user5.jpg';

export type reviewType = {
  id: string;
  userImg: string;
  name: string;
  major: string;
  date: string;
  content: string;
  rated: number;
};

export type carouselType = {
  btnImg: string[];
  showImg: string[];
};

export type carType = {
  [key: string]: string | number | boolean | undefined | reviewType[] | carouselType;
  id: string;
  name: string;
  typeBusiness: 'popular' | 'recommend';
  type: string;
  imgSm?: string;
  imgLg?: string;
  gas: string;
  capacity: number;
  price: number;
  priceWithoutDisCount: number;
  isLiked: boolean;
  steering: string;
  rated: number;
  description: string;
  review: reviewType[];
  carouselDetail: carouselType;
};

export const listAllCar: carType[] = [
  {
    typeBusiness: 'popular',
    id: '1',
    name: 'Koenigsegg',
    type: 'Sport',
    imgSm: SmKoenigsegg,
    imgLg: LgKoenigsegg,
    gas: '90',
    capacity: 2,
    price: 99,
    isLiked: false,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content:
          'Pikachu reviewed: We are greatly helped by the services of the MORENT Application',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
      {
        id: '5',
        userImg: User5,
        name: 'Wukong Cartoon',
        major: 'No job',
        date: '27 July 2022',
        content: 'Hello girl',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'popular',
    id: '2',
    name: 'Nissan GT - R',
    type: 'Sport',
    imgSm: LgNissanGTR,
    imgLg: LgNissanGTR,
    gas: '80',
    capacity: 2,
    price: 80,
    isLiked: false,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'popular',
    id: '3',
    name: 'Rolls - Royce',
    type: 'Sedan',
    imgSm: LgRollsRuyce,
    imgLg: LgRollsRuyce,
    gas: '70',
    capacity: 4,
    price: 96,
    isLiked: true,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'popular',
    id: '4',
    name: 'Nissan GT - R',
    type: 'Sport',
    imgSm: LgNissanGTR,
    imgLg: LgNissanGTR,
    gas: '80',
    capacity: 8,
    price: 80,
    isLiked: false,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'popular',
    id: '5',
    name: 'Rolls - Royce',
    type: 'Sedan',
    imgSm: LgRollsRuyce,
    imgLg: LgRollsRuyce,
    gas: '70',
    capacity: 4,
    price: 96,
    isLiked: true,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'popular',
    id: '6',
    name: 'Koenigsegg',
    type: 'Sport',
    imgSm: SmKoenigsegg,
    imgLg: LgKoenigsegg,
    gas: '90',
    capacity: 2,
    price: 99,
    isLiked: false,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'recommend',
    id: '100',
    name: 'All New Rush',
    type: 'Sport',
    imgSm: SmAllNewRush,
    imgLg: LgAllNewRush,
    gas: '70',
    capacity: 6,
    price: 72,
    isLiked: false,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'recommend',
    id: '101',
    name: 'CR - V',
    type: 'Sport',
    imgSm: SmCRV,
    imgLg: LgCRV,
    gas: '80',
    capacity: 6,
    price: 80,
    isLiked: true,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'recommend',
    id: '102',
    name: 'All New Terios',
    type: 'SUV',
    imgSm: SmKoenigsegg,
    imgLg: LgAllNewTerios,
    gas: '90',
    capacity: 6,
    price: 74,
    isLiked: false,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'recommend',
    id: '103',
    name: 'CR - V',
    type: 'Sport',
    imgSm: SmCRV,
    imgLg: LgCRV,
    gas: '80',
    capacity: 6,
    price: 80,
    isLiked: false,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'recommend',
    id: '104',
    name: 'MG ZX Exclusice',
    type: 'Hatchback',
    imgSm: SmAllNewRush,
    imgLg: LgMGZXExclusice,
    gas: '70',
    capacity: 4,
    price: 76,
    isLiked: true,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'recommend',
    id: '105',
    name: 'New MG ZS',
    type: 'SUV',
    imgSm: SmKoenigsegg,
    imgLg: LgNewMGZS,
    gas: '80',
    capacity: 6,
    price: 80,
    isLiked: false,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'recommend',
    id: '106',
    name: 'MG ZX Excite',
    type: 'Hatchback',
    imgSm: SmAllNewRush,
    imgLg: LgCRV,
    gas: '90',
    capacity: 4,
    price: 74,
    isLiked: true,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'recommend',
    id: '107',
    name: 'New MG ZS',
    type: 'SUV',
    imgSm: SmAllNewRush,
    imgLg: LgMGZS,
    gas: '108',
    capacity: 6,
    price: 80,
    isLiked: false,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'recommend',
    id: '109',
    name: 'New MG ZS',
    type: 'SUV',
    imgSm: SmKoenigsegg,
    imgLg: LgNewMGZS,
    gas: '80',
    capacity: 6,
    price: 80,
    isLiked: false,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'recommend',
    id: '110',
    name: 'MG ZX Excite',
    type: 'Hatchback',
    imgSm: SmAllNewRush,
    imgLg: LgCRV,
    gas: '90',
    capacity: 4,
    price: 74,
    isLiked: true,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
  {
    typeBusiness: 'recommend',
    id: '11',
    name: 'New MG ZS',
    type: 'SUV',
    imgSm: SmAllNewRush,
    imgLg: LgMGZXExcite,
    gas: '80',
    capacity: 6,
    price: 80,
    isLiked: false,
    steering: 'Manual',
    rated: 4,
    priceWithoutDisCount: 150,
    description: `NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".`,
    review: [
      {
        id: '1',
        userImg: User1,
        name: 'Alex Stanton',
        major: 'CEO at Bukalapak',
        date: '21 July 2022',
        content:
          'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '2',
        userImg: User2,
        name: 'Skylar Dias',
        major: 'CEO at Amazon',
        date: '20 July 2022',
        content:
          'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
        rated: 4,
      },
      {
        id: '3',
        userImg: User3,
        name: 'Pikachu',
        major: 'CEO at Pokemon',
        date: '25 July 2022',
        content: 'Pikachu reviewed',
        rated: 5,
      },
      {
        id: '4',
        userImg: User4,
        name: 'Girl',
        major: 'No job',
        date: '26 July 2022',
        content: 'Reviewed',
        rated: 5,
      },
    ],
    carouselDetail: {
      showImg: [Ads2, Look2, Look3],
      btnImg: [Look1, Look2, Look3],
    },
  },
];
