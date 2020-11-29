interface DefaultData {
  [key: string]: any;
}

const fireData = {
  data: {
    title: "Fire Store",
    type_id: 10,
  },
  pallet: {
    primary: "#e63900",
    shadow: "#8b2900",
    button: "#de5239",
    links: "#f6a400",
    variant1: "#ffd508",
    variant2: "#ffc562",
    variant3: "#e6ac5a",
    titleColor: "#ffffff",
    variant5: "#ffd57b",
    variant6: "#6a6a6a",
    variant7: "#dedede",
  },
};

const waterData = {
  data: {
    title: "Water Store",
    type_id: 11,
  },
  pallet: {
    primary: "#4a6ac5",
    shadow: "#183173",
    button: "#18297b",
    links: "#7bacff",
    variant2: "#415aff",
    variant1: "#7bcdff",
    variant3: "#b4084a",
    titleColor: "#ffffff",
    variant5: "#5a525a",
    variant6: "#6a6a6a",
    variant7: "#dedede",
  },
};

const grassData = {
  data: {
    title: "Grass Store",
    type_id: 12,
  },
  pallet: {
    primary: "#73ac31",
    shadow: "#184a4a",
    button: "#bdff73",
    links: "#317373",
    variant1: "#ffffff",
    variant2: "#526229",
    variant3: "#83eec5",
    titleColor: "#ffffff",
    variant5: "#a4d541",
    variant6: "#ee2039",
    variant7: "#dedede",
  },
};

const ghostData = {
  data: {
    title: "Ghost Store",
    type_id: 8,
  },
  pallet: {
    primary: "#5a4a9c",
    shadow: "#4a294a",
    button: "#b48bbd",
    links: "#7b62a4",
    variant1: "#f6ee94",
    variant2: "#d5cd6a",
    variant3: "#de9cd5",
    titleColor: "#ffffff",
    variant5: "#ff624a",
    variant6: "#d53920",
    variant7: "#dedede",
  },
};

const eletricData = {
  data: {
    title: "Eletric Store",
    type_id: 13,
  },
  pallet: {
    primary: "#f69418",
    shadow: "#523910",
    button: "#ffd541",
    links: "#ffd541",
    variant5: "#c56a18",
    variant2: "#9c7b10",
    variant3: "#f69418",
    titleColor: "#ffffff",
    variant1: "#7b6a18",
    variant6: "#6a6a6a",
    variant7: "#dedede",
  },
};

const Themes: DefaultData = {
  firepokestore: fireData,
  waterpokestore: waterData,
  grasspokestore: grassData,
  ghostpokestore: ghostData,
  eletricpokestore: eletricData,
  "localhost:3000": waterData,
};

export default Themes;
