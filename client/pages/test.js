import Tree from '@naisutech/react-tree'

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

function test() {
  return (
    <Tree nodes={data1}/>
  )
}

export default test