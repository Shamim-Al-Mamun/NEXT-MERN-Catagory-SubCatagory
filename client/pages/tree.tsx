import ReactTree, { useReactTreeApi } from "@naisutech/react-tree"

const data1 = [
  {
    "id": 1,
    "parentId": null,
    "label": "My parent node",
    "items": [
      {
        "id": 5,
        "label": "My file",
        "parentId": 2
      },
      {
        "id": 8,
        "label": "Mamun",
        "parentId": 2
      }
    ]
  },
  {
    "id": 2,
    "parentId": 1,
    "label": "My child node"
  },
  {
    "id": 3,
    "parentId": null,
    "label": "My parent node",
    "items": [
      {
        "id": 7,
        "label": "My file",
        "parentId": 2
      }
    ]
  },
  {
    "id": 4,
    "parentId": 2,
    "label": "My child node"
  },
  {
    "id": 10,
    "parentId": 4,
    "label": "Mamun 2"
  }
]

const dt = [
  {
    "id": 1,
    "parentId": null,
    "label": "Main",
  }
];
const data = [

  // {...dt},
  {
    "id": 1,
    "parentId": null,
    "label": "root",
  },
  {
    "id": 2,
    "parentId": 1,
    "label": "A"
  }, {
    "id": 3,
    "parentId": 1,
    "label": "B",
  },
  {
    "id": 4,
    "parentId": 2,
    "label": "a1"
  },
  {
    "id": 5,
    "parentId": 3,
    "label": "b1"
  },


]

const myThemes = {
  modifiedDarkLarge: {
    text: '#fafafa', // text color
    bg: '#2d3439', // background color of whole tree
    indicator: 'gold', // open folder indicator color
    separator: 'gold', // row seperator color
    icon: 'gold', // fill & stroke color of default icons - has no effect when using custom icons
    selectedBg: '#3f464e', // background of selected element
    selectedText: '#fafafa', // text color of selected element
    hoverBg: '#505a63', // background of hovered element
    hoverText: '#fafafa', // text color of hovered element
    accentBg: '#2d3439', // background of empty folder element
    accentText: '#999', // text color of empty folder element
    textSize: 'large' // preferred text size
  }
}



const TreeList = () => {
  const treeApi = useReactTreeApi()


  return (

    <ReactTree
      nodes={[]}
      ref={treeApi}
    />

  )
};

export default TreeList;
