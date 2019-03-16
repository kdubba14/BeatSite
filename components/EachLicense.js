import { Divider } from 'semantic-ui-react';

const EachLicense = [
  {
    name: "Unlimited WAV",
    price: "$50", 
    numPrice: 50, 
    desc: "WAV + MP3",
    divider: false, 
    type: "lease", 
    selectKey: "wav", 
    key: 1
  },
  {
    name: "Unlimited Track Out",
    price: "$100", 
    numPrice: 100, 
    desc: "Tracked Out",
    plus: "WAV + MP3",
    divider: <Divider section />, 
    type: "lease", 
    selectKey: "track", 
    key: 2
  },
  {
    name: "Exclusive Rights",
    price: "$200", 
    numPrice: 200, 
    desc: "Full Exclusive Rights",
    divider: <Divider section />, 
    type: "exclusive", 
    selectKey: "exclusive", 
    key: 3
  }
];

export default EachLicense;