import "./App.css";
// import {Stage, Layer, Line, Circle, Rect} from 'react-konva'
import React from "react";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import NavBar from "./NavBar/NavBar";
// import useLocalStorageState from 'use-local-storage-state'
// import  ColorSelector  from './ColorSelector/ColorSelector'
// import { PaintAppStore } from './PaintAppStore'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom"
const items = ["Home", "Art", "About Me"];
function App() {
  // const [tool, setTool] = useState('pen')
  //const [color, setColor] = useState('0')
  // const [objects, setObjects] = useLocalStorageState('objects', [

  // ])
  // const color = PaintAppStore.useState(s => s.color)
  // const isDrawing = useRef(false)
  // const width = 800
  // const height = 800

  // const clearDrawing = () => {
  //   setObjects([])
  // }

  // const holdMouseDown = (e) => {
  //   isDrawing.current = true
  //   const pos = e.target.getStage().getPointerPosition();
  //   console.log(tool)
  //   if(color != "") {
  //   if(tool === null) {
  //     console.log("No tool :(")
  //   } else {
  //     if (tool === "pen") {
  //       setObjects([...objects, {tool, points: [pos.x, pos.y], color: color}])
  //     } else if (tool === "circle") {
  //       setObjects([...objects, {tool, center: [pos.x, pos.y], radius: 0, color: color}])
  //     }
  //   }
  // } else {
  //   alert("Choose a color.")
  //   return;
  // }
  //   console.log(pos)
  // }
  // const mouseMove = (e) => {
  //   if(!isDrawing.current) {
  //     return;
  //   }
  //   if(color === "") {
  //     alert("Choose a color.")
  //     return;
  //   }
  //   const stage = e.target.getStage();
  //   const point = stage.getPointerPosition();
  //   let lastobj = objects[objects.length - 1];
  //   if(lastobj.tool == "pen") {
  //     lastobj.points = lastobj.points.concat([point.x, point.y])
  //     objects.splice(objects.length - 1, 1, lastobj)
  //     setObjects([...objects.concat()])
  //     console.log("Objects: " + point.x + ", " +  point.y)
  //   } else if(lastobj.tool == "circle") {
  //     lastobj.radius = ((point.x - lastobj.center[0]) ** 2 + (point.y - lastobj.center[1]) ** 2) ** 0.5
  //     objects.splice(objects.length - 1, 1, lastobj)
  //     setObjects([...objects.concat()])
  //   }
  // }

  // const handleMouseUp = () => {
  //   isDrawing.current = false;
  // }
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <NavBar items={items} index_={0}/>
        </Route>
      </Switch>
    </Router>
    // <div className={"background"}>
    //   <div className={"header-paint"}>
    //     Paint App
    //   </div>
    //   <div className={"menu"}>
    //     <ColorSelector/>
    //     <a className={"reset_button"} onClick={clearDrawing}>
    //       Clear
    //     </a>
    //     <div>
    //       <p>
    //         Tool
    //       </p>
    //     <select
    //       value={tool}
    //       onChange={(e) => {
    //         setTool(e.target.value)
    //       }}
    //       >
    //         <option value="pen">Pen</option>
    //         <option value="eraser">Eraser</option>
    //         <option value="circle">Circle</option>
    //       </select>
    //       </div>
    //     </div>
    //     <div>
    //       PLACEHOLDER
    //     </div>
    //     <div style={{"borderStyle": "dotted"}}>
    //       <Stage width={width} height={height}
    //       onMouseDown={holdMouseDown} onMousemove={mouseMove}
    //       onMouseUp={handleMouseUp}>
    //         <Layer>
    //           <Rect stroke={"#A9A9A9"} x={0} y={0} width={width} height={height} strokeWidth={5}/>
    //           {objects.map((obj, i) => {
    //             if(obj.tool === "pen") {
    //              return <Line
    //               key={i}
    //               points={obj.points}
    //               stroke={obj.color}
    //               strokeWidth={5}
    //               tension={0.5}
    //               lineCap="round"
    //               globalCompositeOperation={
    //                 "source-over"
    //               }
    //               />
    //             } else if(obj.tool === "circle") {
    //               return <Circle
    //               key={i}
    //               x={obj.center[0]}
    //               y={obj.center[1]}
    //               radius={obj.radius}
    //               stroke={obj.color}
    //               strokeWidth={5}
    //               tension={0.5}
    //               lineCap="round"
    //               globalCompositeOperation={"source-over"}
    //               />
    //             }
    //           }

    //           )
    //           }
    //         </Layer>
    //       </Stage>
    //     </div>
    // </div>
  );
}

const About = () => {
  <div>
    <NavBar items={items} index_={2}/>
    <p>About</p>
  </div>
}

export default App;
